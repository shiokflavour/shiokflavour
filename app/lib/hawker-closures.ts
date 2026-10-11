/**
 * NEA hawker centre closure schedule (data.gov.sg "Dates of Hawker Centres
 * Closure"): quarterly cleaning dates plus longer "other works" closures.
 */
const CLOSURES_RESOURCE_ID = "d_bda4baa634dd1cc7a6c7cad5f19e2d68";

export type ClosureStatus = {
  /** "unknown" = centre isn't in NEA's dataset (e.g. privately run). */
  status: "closed" | "open" | "unknown";
  reason?: string;
  startDate?: string;
  endDate?: string;
  /** Next scheduled closure, if any (only set when currently open). */
  nextReason?: string;
  nextStartDate?: string;
  nextEndDate?: string;
};

/** Site hawker centre name → exact NEA dataset `name`. */
const NEA_NAME_MAP: Record<string, string> = {
  "Maxwell Food Centre": "Maxwell Food Centre (Kim Hua Market)",
  "Old Airport Road Food Centre":
    "Old Airport Road Blk 51 (51 Old Airport Road Food Centre and Shopping Mall)",
  "Chinatown Complex Food Centre":
    "Smith Street Blk 335 (Chinatown Complex Market)",
  "Newton Food Centre": "Newton Food Centre",
  "Tekka Centre": "Buffalo Road Blk 665 (Tekka Centre/Zhu Jiao Market)",
  "Adam Road Food Centre": "Adam Road Food Centre",
  "Bedok Interchange Hawker Centre":
    "New Upper Changi Road Blk 208B (Bedok Interchange Hawker Centre)",
  "Bedok 85 Fengshan Market":
    "Bedok North Street 4 Blk 85 (85 Fengshan Centre)",
  "Tampines Round Market":
    "Tampines Street 11 Blk 137 (Tampines Round Market and Food Centre)",
  "Geylang Serai Market": "Geylang Serai Market",
  "Amoy Street Food Centre": "Amoy Street Food Centre (Telok Ayer Food Centre)",
  "Tiong Bahru Market": "Tiong Bahru Market",
  "ABC Brickworks Market":
    "Jalan Bukit Merah Blk 6 (ABC Brickworks Market/Food Centre)",
  "Holland Drive Market & Food Centre":
    "Holland Drive Blk 44 (Holland Drive Market and Food Centre)",
  "Clementi 448 Market": "Clementi Ave 3 Blk 448",
  "Jurong West 505 Market": "Jurong West Street 52 Blk 505",
  "Yishun Park Hawker Centre": "Yishun Park Hawker Centre",
  "Sembawang Hills Food Centre":
    "Sembawang Hills Food Centre (Jalan Leban Food Centre)",
  "Chong Pang Market":
    "Yishun Ring Road Blk 104/105 (Chong Pang Market and Food Centre)",
  "Marsiling Mall Hawker Centre": "Marsiling Mall Hawker Centre",
  "Toa Payoh Lorong 8 Market": "Toa Payoh Lorong 8 Blk 210",
  "Market Street Hawker Centre (Golden Shoe)": "Market Street Hawker Centre",
  "Hong Lim Market & Food Centre":
    "Upper Cross Street Blk 531A (Hong Lim Food Centre and Market)",
  "People's Park Food Centre":
    "New Market Road Blk 32 (People's Park Food Centre)",
  "East Coast Lagoon Food Village": "East Coast Lagoon Food Village",
  "Marine Parade Food Centre":
    "Marine Parade Central Blk 84 (84 Marine Parade Central Market and Food Centre)",
  "Berseh Food Centre": "Berseh Food Centre",
  "Ghim Moh Market & Food Centre": "Ghim Moh Road Blk 20",
  "Alexandra Village Food Centre":
    "Bukit Merah Lane 1 Blk 120 (Alexandra Village Food Centre)",
  "Shunfu Mart Food Centre": "Shunfu Road Blk 320 (Shunfu Mart)",
  "Pasir Panjang Food Centre": "Pasir Panjang Food Centre",
};

type NeaClosureRow = Record<string, string | number | undefined>;

let cachedClosures: NeaClosureRow[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 24 * 60 * 60 * 1000;

async function fetchClosures(): Promise<NeaClosureRow[]> {
  const now = Date.now();
  if (cachedClosures && now - cacheTime < CACHE_TTL) {
    return cachedClosures;
  }
  try {
    const res = await fetch(
      `https://data.gov.sg/api/action/datastore_search?resource_id=${CLOSURES_RESOURCE_ID}&limit=1000`,
      { next: { revalidate: 86400 } },
    );
    const json = (await res.json()) as {
      result?: { records?: NeaClosureRow[] };
    };
    cachedClosures = json?.result?.records ?? [];
    cacheTime = now;
    return cachedClosures;
  } catch {
    return [];
  }
}

/** Parses NEA's "d/m/yyyy" dates; returns a UTC-midnight timestamp or null for "NA"/"TBC". */
function parseNeaDate(value: unknown): number | null {
  const m = String(value ?? "").trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  return Date.UTC(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
}

/** Today's date in Singapore, as a UTC-midnight timestamp. */
function todaySingapore(): number {
  const sg = new Date(Date.now() + 8 * 60 * 60 * 1000);
  return Date.UTC(sg.getUTCFullYear(), sg.getUTCMonth(), sg.getUTCDate());
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function clean(remark: unknown): string | null {
  const s = String(remark ?? "").trim();
  return s && s.toLowerCase() !== "nil" && s.toLowerCase() !== "na" ? s : null;
}

type Window = { start: number; end: number; reason: string };

function closureWindows(row: NeaClosureRow): Window[] {
  const out: Window[] = [];
  for (const q of ["q1", "q2", "q3", "q4"]) {
    const start = parseNeaDate(row[`${q}_cleaningstartdate`]);
    const end = parseNeaDate(row[`${q}_cleaningenddate`]);
    if (start !== null && end !== null) {
      out.push({
        start,
        end,
        reason: clean(row[`remarks_${q}`]) ?? "quarterly cleaning",
      });
    }
  }
  const ws = parseNeaDate(row.other_works_startdate);
  const we = parseNeaDate(row.other_works_enddate);
  if (ws !== null && we !== null) {
    out.push({
      start: ws,
      end: we,
      reason: clean(row.remarks_other_works) ?? "repairs and other works",
    });
  }
  return out.sort((a, b) => a.start - b.start);
}

function computeClosureStatus(
  hawkerName: string,
  records: NeaClosureRow[],
): ClosureStatus {
  const neaName = (NEA_NAME_MAP[hawkerName] ?? hawkerName).toLowerCase();
  const row = records.find(
    (r) => String(r.name ?? "").trim().toLowerCase() === neaName,
  );
  if (!row) return { status: "unknown" };

  const today = todaySingapore();
  const windows = closureWindows(row);

  const current = windows.find((w) => today >= w.start && today <= w.end);
  if (current) {
    return {
      status: "closed",
      reason: current.reason,
      startDate: formatDate(current.start),
      endDate: formatDate(current.end),
    };
  }

  const next = windows.find((w) => w.start > today);
  return next
    ? {
        status: "open",
        nextReason: next.reason,
        nextStartDate: formatDate(next.start),
        nextEndDate: formatDate(next.end),
      }
    : { status: "open" };
}

export async function getClosureStatus(hawkerName: string): Promise<ClosureStatus> {
  const records = await fetchClosures();
  return computeClosureStatus(hawkerName, records);
}

/** One NEA fetch; closure status per hawker name (for listing pages). */
export async function getClosureStatusesForNames(
  hawkerNames: string[],
): Promise<Record<string, ClosureStatus>> {
  const records = await fetchClosures();
  const out: Record<string, ClosureStatus> = {};
  for (const name of hawkerNames) {
    out[name] = computeClosureStatus(name, records);
  }
  return out;
}

/** Batch closure lookup (same behaviour as {@link getClosureStatusesForNames}). */
export async function getAllClosureStatuses(
  hawkerNames: string[],
): Promise<Record<string, ClosureStatus>> {
  return getClosureStatusesForNames(hawkerNames);
}

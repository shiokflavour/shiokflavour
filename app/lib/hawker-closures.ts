/** NEA hawker centre temporary closure notices (data.gov.sg). */
const CLOSURES_RESOURCE_ID = "d_bda4baa634dd1cc7a6c7cad5f19e2d68";

export type ClosureStatus = {
  status: "closed" | "closing-soon" | "open";
  reason?: string;
  startDate?: string;
  endDate?: string;
};

/** Maps site hawker centre names to NEA dataset `name` values. */
const NEA_NAME_MAP: Record<string, string> = {
  "Maxwell Food Centre": "Maxwell Road Hawker Centre",
  "Lau Pa Sat": "Lau Pa Sat (Telok Ayer Market)",
  "Old Airport Road Food Centre": "Old Airport Road Food Centre",
  "Chinatown Complex Food Centre": "Chinatown Complex Food Centre",
  "Newton Food Centre": "Newton Food Centre",
  "Tekka Centre": "Tekka Market",
  "Adam Road Food Centre": "Adam Road Food Centre",
  "Bedok Interchange Hawker Centre": "Bedok Interchange Hawker Centre",
  "Bedok 85 Fengshan Market": "Fengshan Food Centre",
  "Tampines Round Market": "Tampines Round Market & Food Centre",
  "Geylang Serai Market": "Geylang Serai Market",
  "Amoy Street Food Centre": "Amoy Street Food Centre (Telok Ayer Food Centre)",
  "Tiong Bahru Market": "Tiong Bahru Market",
  "ABC Brickworks Market": "ABC Brickworks Market & Food Centre",
  "Buona Vista Market": "Buona Vista Market",
  "Clementi 448 Market": "Clementi 448 Market & Food Centre",
  "Jurong West 505 Market": "Jurong West 505 Market & Food Centre",
  "Yishun Park Hawker Centre": "Yishun Park Hawker Centre",
  "Sembawang Hills Food Centre": "Sembawang Hills Food Centre",
  "Chong Pang Market": "Chong Pang Market & Food Centre",
  "Woodlands Centre Market": "Woodlands Centre Market & Food Centre",
  "Toa Payoh Lorong 8 Market": "Toa Payoh Lorong 8 Market",
  "Golden Shoe Market Street": "Golden Shoe Food Market",
  "Hong Lim Market & Food Centre": "Hong Lim Market & Food Centre",
  "People's Park Food Centre": "People's Park Food Centre",
  "East Coast Lagoon Food Village": "East Coast Lagoon Food Village",
  "Marine Parade Food Centre": "Marine Parade Food Centre",
  "Jalan Berseh Food Centre": "Jalan Berseh Food Centre",
  "Ghim Moh Market & Food Centre": "Ghim Moh Market & Food Centre",
  "Alexandra Village Food Centre": "Alexandra Village Food Centre",
  "Bishan Street 13 Food Centre": "Bishan Street 13 Market & Food Centre",
  "Pasir Panjang Food Centre": "Pasir Panjang Food Centre",
};

type NeaClosureRow = {
  name?: string;
  NAME?: string;
  start_date?: string;
  START_DATE?: string;
  end_date?: string;
  END_DATE?: string;
  type_of_closure?: string;
  TYPE_OF_CLOSURE?: string;
};

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

function rowName(r: NeaClosureRow): string {
  return (r.name ?? r.NAME ?? "").toLowerCase();
}

export async function getClosureStatus(hawkerName: string): Promise<ClosureStatus> {
  const records = await fetchClosures();
  const neaName = NEA_NAME_MAP[hawkerName] ?? hawkerName;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sevenDaysFromNow = new Date(today);
  sevenDaysFromNow.setDate(today.getDate() + 7);

  const neaFirst = neaName.toLowerCase().split(" ")[0] ?? "";

  const matches = records.filter((r) => {
    const rName = rowName(r);
    const rFirst = rName.split(" ")[0] ?? "";
    return (
      rName.includes(neaFirst) ||
      neaName.toLowerCase().includes(rFirst)
    );
  });

  for (const record of matches) {
    const startDate = new Date(record.start_date ?? record.START_DATE ?? "");
    const endDate = new Date(record.end_date ?? record.END_DATE ?? "");
    const reason =
      record.type_of_closure ?? record.TYPE_OF_CLOSURE ?? "Cleaning";

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      continue;
    }

    if (today >= startDate && today <= endDate) {
      return {
        status: "closed",
        reason,
        startDate: startDate.toLocaleDateString("en-SG", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        endDate: endDate.toLocaleDateString("en-SG", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };
    }

    if (startDate > today && startDate <= sevenDaysFromNow) {
      return {
        status: "closing-soon",
        reason,
        startDate: startDate.toLocaleDateString("en-SG", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        endDate: endDate.toLocaleDateString("en-SG", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };
    }
  }

  return { status: "open" };
}

import { cache } from "react";
import { FEATURED_HAWKERS, type HawkerRegion } from "./featured-hawkers";

export type { HawkerRegion };

export type HawkerCentre = {
  id: string;
  name: string;
  address: string;
  latitude: string | null;
  longitude: string | null;
  noOfStalls: number | null;
  region: HawkerRegion;
};

const RESOURCE_ID = "d_4a086da0a5553be1d89383cd90d07ecd";
const PAGE_LIMIT = 100;
const BASE_URL = `https://data.gov.sg/api/action/datastore_search?resource_id=${RESOURCE_ID}&limit=${PAGE_LIMIT}`;

const REGION_RULES: { region: HawkerRegion; keywords: string[] }[] = [
  {
    region: "North",
    keywords: [
      "woodlands",
      "yishun",
      "sembawang",
      "ang mo kio",
      "bishan",
    ],
  },
  {
    region: "South",
    keywords: [
      "tanjong pagar",
      "bukit merah",
      "queenstown",
      "telok blangah",
    ],
  },
  {
    region: "East",
    keywords: [
      "tampines",
      "bedok",
      "pasir ris",
      "geylang",
      "marine parade",
    ],
  },
  {
    region: "West",
    keywords: [
      "jurong",
      "bukit batok",
      "clementi",
      "choa chu kang",
      "bukit timah",
    ],
  },
  {
    region: "Central",
    keywords: [
      "orchard",
      "newton",
      "novena",
      "toa payoh",
      "balestier",
      "cbd",
      "raffles",
      "marina",
    ],
  },
];

export function getRegion(address: string): HawkerRegion {
  const a = address.toLowerCase();
  for (const { region, keywords } of REGION_RULES) {
    if (keywords.some((k) => a.includes(k))) return region;
  }
  return "Central";
}

function pickField(record: Record<string, unknown>, ...keys: string[]): unknown {
  for (const k of keys) {
    if (record[k] !== undefined && record[k] !== null && record[k] !== "")
      return record[k];
  }
  return null;
}

function parseStalls(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number.parseInt(String(v), 10);
  return Number.isFinite(n) ? n : null;
}

function mapRecord(record: Record<string, unknown>): HawkerCentre | null {
  const rawId = pickField(record, "_id", "id");
  if (rawId === null) return null;
  const name = String(pickField(record, "name", "Name") ?? "").trim();
  const address = String(
    pickField(record, "address_myenv", "Address_MYENV") ?? "",
  ).trim();
  if (!name && !address) return null;

  const lat = pickField(record, "latitude_hc", "Latitude_HC");
  const lon = pickField(record, "longitude_hc", "Longitude_HC");
  const stalls = pickField(
    record,
    "no_of_stalls_cooked_food",
    "No_Of_Stalls_Cooked_Food",
  );

  const addrForRegion = address || name;
  return {
    id: String(rawId),
    name: name || "Hawker centre",
    address: address || "—",
    latitude: lat != null ? String(lat) : null,
    longitude: lon != null ? String(lon) : null,
    noOfStalls: parseStalls(stalls),
    region: getRegion(addrForRegion),
  };
}

export async function fetchAllHawkerCentresFromApi(): Promise<HawkerCentre[]> {
  const all: HawkerCentre[] = [];
  let offset = 0;
  let total = Number.POSITIVE_INFINITY;

  while (offset < total) {
    const url = `${BASE_URL}&offset=${offset}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`data.gov.sg HTTP ${res.status}`);
    }
    const json = (await res.json()) as {
      success?: boolean;
      result?: { records?: Record<string, unknown>[]; total?: number };
    };

    if (json.success === false) {
      throw new Error("data.gov.sg returned success: false");
    }

    const result = json.result;
    const records = result?.records;
    if (!Array.isArray(records) || records.length === 0) break;

    if (typeof result?.total === "number") total = result.total;

    for (const rec of records) {
      const mapped = mapRecord(rec);
      if (mapped) all.push(mapped);
    }

    offset += records.length;
    if (records.length < PAGE_LIMIT) break;
  }

  return all;
}

export function getStaticFallbackHawkers(): HawkerCentre[] {
  return FEATURED_HAWKERS.map((h) => ({
    id: h.id,
    name: h.name,
    address: `${h.area} · ${h.region} region`,
    latitude: null,
    longitude: null,
    noOfStalls: null,
    region: h.region,
  }));
}

/** Cached per request; safe for parallel Suspense / sitemap / hawker pages */
export const getHawkersForHome = cache(async (): Promise<HawkerCentre[]> => {
  try {
    const fetched = await fetchAllHawkerCentresFromApi();
    if (fetched.length > 0) return fetched;
  } catch {
    /* fall through */
  }
  return getStaticFallbackHawkers();
});

export async function getHawkerById(id: string): Promise<HawkerCentre | null> {
  const all = await getHawkersForHome();
  return all.find((h) => String(h.id) === String(id)) ?? null;
}

export function sumStallCounts(hawkers: HawkerCentre[]): number {
  return hawkers.reduce((sum, h) => sum + (h.noOfStalls ?? 0), 0);
}

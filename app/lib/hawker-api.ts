import { cache } from "react";
import { FEATURED_HAWKERS, type HawkerRegion } from "./featured-hawkers";

export type { HawkerRegion };

export type HawkerCentre = {
  id: string;
  name: string;
  address: string;
  latitude: string | null;
  longitude: string | null;
  /** Cooked food stall count from NUMBER_OF_COOKED_FOOD_STALLS. */
  noOfStalls: number | null;
  region: HawkerRegion;
};

/** Hawker centres dataset (correct resource id). */
export const RESOURCE_ID = "d_68a42f09f350881996d83f9cd73ab02f";
const PAGE_LIMIT = 100;
const BASE_URL = `https://data.gov.sg/api/action/datastore_search?resource_id=${RESOURCE_ID}&limit=${PAGE_LIMIT}`;

/** Single-page fetch URL (matches homepage `limit=100`). */
export const HAWKER_LIST_FETCH_URL = `${BASE_URL}`;

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
  const name = String(
    pickField(record, "NAME", "name", "Name") ?? "",
  ).trim();
  const address = String(
    pickField(
      record,
      "ADDRESS_MYENV",
      "address_myenv",
      "Address_MYENV",
    ) ?? "",
  ).trim();
  if (!name && !address) return null;

  const stalls = pickField(
    record,
    "NUMBER_OF_COOKED_FOOD_STALLS",
    "number_of_cooked_food_stalls",
    "Number_Of_Cooked_Food_Stalls",
  );

  const addrForRegion = address || name;
  return {
    id: String(rawId),
    name: name || "Hawker centre",
    address: address || "—",
    latitude: null,
    longitude: null,
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

const HOME_LIST_URL = HAWKER_LIST_FETCH_URL;

/** Single-record lookup: filters query first, then scan first page (same as homepage). */
export async function fetchHawkerByIdFromApi(
  id: string,
): Promise<HawkerCentre | null> {
  const trimmed = id.trim();
  const numeric = Number.parseInt(trimmed, 10);
  const filterValue =
    Number.isFinite(numeric) && String(numeric) === trimmed
      ? numeric
      : trimmed;
  const filters = encodeURIComponent(JSON.stringify({ _id: filterValue }));
  const filterUrl = `https://data.gov.sg/api/action/datastore_search?resource_id=${RESOURCE_ID}&filters=${filters}&limit=1`;
  try {
    const res = await fetch(filterUrl, { next: { revalidate: 86400 } });
    if (res.ok) {
      const json = (await res.json()) as {
        success?: boolean;
        result?: { records?: Record<string, unknown>[] };
      };
      if (json.success !== false) {
        const rec = json.result?.records?.[0];
        const mapped = rec ? mapRecord(rec) : null;
        if (mapped) return mapped;
      }
    }

    const listRes = await fetch(HOME_LIST_URL, { next: { revalidate: 86400 } });
    if (!listRes.ok) return null;
    const listJson = (await listRes.json()) as {
      result?: { records?: Record<string, unknown>[] };
    };
    const records = listJson.result?.records;
    if (!Array.isArray(records)) return null;
    const match = records.find(
      (r) => String(r._id ?? r.id) === String(trimmed),
    );
    return match ? mapRecord(match) : null;
  } catch {
    return null;
  }
}

export function sumStallCounts(hawkers: HawkerCentre[]): number {
  return hawkers.reduce((sum, h) => sum + (h.noOfStalls ?? 0), 0);
}

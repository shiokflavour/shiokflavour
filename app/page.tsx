import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "./components/hero-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import {
  getHawkersForHome,
  getRegion,
  HAWKER_LIST_FETCH_URL,
  type HawkerRegion,
} from "./lib/hawker-api";
import {
  FEATURED_HAWKERS,
  REGION_FILTERS,
  type RegionFilter,
} from "./lib/featured-hawkers";

const flavourTrails = [
  {
    title: "East Coast Trail: Satay by the Bay",
    description:
      "From lagoon zi char to satay smoke along the coast — a laid-back evening route with sea breeze and serious flavour.",
  },
  {
    title: "Little India Spice Walk",
    description:
      "Dosai breakfasts, murtabak lunches, and teh tarik breaks. Follow the spices from Serangoon Road to Race Course.",
  },
  {
    title: "Chinatown Hawker Legends",
    description:
      "Soya chicken, char kway teow, and the stalls locals queue for. A compact walk through Singapore’s hawker heartland.",
  },
];

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
  "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=400",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
  "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
];

const VIBE_TAGS = [
  "Local Favourite",
  "Tourist Must-Visit",
  "Budget Eats",
  "Supper Spot",
  "Halal Haven",
  "Local Favourite",
];

type ApiRecord = Record<string, unknown>;

function strField(r: ApiRecord, ...keys: string[]): string {
  for (const k of keys) {
    const v = r[k];
    if (v !== undefined && v !== null && v !== "") return String(v).trim();
  }
  return "";
}

/** Maps NUMBER_OF_COOKED_FOOD_STALLS → numeric stall count for hero stats. */
function parseStallCount(r: ApiRecord): number {
  const v =
    r.NUMBER_OF_COOKED_FOOD_STALLS ??
    r.number_of_cooked_food_stalls ??
    r.Number_Of_Cooked_Food_Stalls;
  if (v === undefined || v === null || v === "") return 0;
  const n = Number.parseInt(String(v), 10);
  return Number.isFinite(n) ? n : 0;
}

type HawkerRow = {
  id: string;
  name: string;
  address: string;
  region: HawkerRegion;
};

/** Original 6 centres — fallback when data.gov.sg fails on Vercel or returns empty. */
const STATIC_HAWKERS: HawkerRow[] = FEATURED_HAWKERS.map((h) => ({
  id: h.id,
  name: h.name,
  address: `${h.area} · ${h.region} region`,
  region: h.region,
}));

function mapRecord(r: ApiRecord): HawkerRow | null {
  const rawId = r._id ?? r.id;
  if (rawId === undefined || rawId === null) return null;
  const name = strField(r, "NAME", "name", "Name") || "Hawker centre";
  const address =
    strField(r, "ADDRESS_MYENV", "address_myenv", "Address_MYENV") || "—";
  const region = getRegion(address || name);
  return {
    id: String(rawId),
    name,
    address,
    region,
  };
}

type SearchParams = Promise<{ region?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const activeFilter = (sp.region as RegionFilter | undefined) ?? "All";

  let hawkers: ApiRecord[] | HawkerRow[] = STATIC_HAWKERS;
  let listingFromApi = false;
  let stallSum = 0;
  let apiDatasetTotal: number | undefined;

  try {
    const response = await fetch(HAWKER_LIST_FETCH_URL, {
      next: { revalidate: 86400 },
    });
    const data = (await response.json()) as {
      result?: { records?: ApiRecord[]; total?: number };
    };
    if (typeof data.result?.total === "number" && data.result.total >= 0) {
      apiDatasetTotal = data.result.total;
    }
    if (
      response.ok &&
      Array.isArray(data.result?.records) &&
      data.result.records.length > 0
    ) {
      const first = data.result.records[0];
      console.log(
        "[ShiokFlavour] First API record (shape check):",
        JSON.stringify(first, null, 2),
      );
      hawkers = data.result.records;
      listingFromApi = true;
    } else if (!response.ok) {
      console.log(
        "[ShiokFlavour] API HTTP",
        response.status,
        "— using static data,",
        STATIC_HAWKERS.length,
        "centres",
      );
    } else {
      console.log(
        "[ShiokFlavour] API returned no records; using static data,",
        STATIC_HAWKERS.length,
        "centres",
      );
    }
  } catch (e) {
    console.log("[ShiokFlavour] API failed, using static data", e);
  }

  let allRows: HawkerRow[];
  if (listingFromApi && Array.isArray(hawkers) && hawkers.length > 0) {
    const rawRecords = hawkers as ApiRecord[];
    allRows = [];
    for (let i = 0; i < rawRecords.length; i++) {
      const row = mapRecord(rawRecords[i]!);
      if (row) allRows.push(row);
    }
    if (allRows.length === 0) {
      listingFromApi = false;
      allRows = STATIC_HAWKERS;
      stallSum = 0;
      console.log(
        "[ShiokFlavour] API records unmappable; using static data (",
        STATIC_HAWKERS.length,
        "centres)",
      );
    } else {
      stallSum = rawRecords.reduce((s, r) => s + parseStallCount(r), 0);
    }
  } else {
    allRows = STATIC_HAWKERS;
    stallSum = 0;
  }

  console.log(
    "[ShiokFlavour] Hawker listing source:",
    listingFromApi ? "data.gov.sg API" : "STATIC_HAWKERS fallback",
    "| count:",
    allRows.length,
  );

  let heroHawkerCentreCount = allRows.length;
  let heroFoodStallCount: number | undefined =
    stallSum > 0 ? stallSum : undefined;
  if (listingFromApi) {
    const full = await getHawkersForHome();
    if (full.length >= allRows.length) {
      heroHawkerCentreCount = full.length;
      const sum = full.reduce((s, h) => s + (h.noOfStalls ?? 0), 0);
      if (sum > 0) heroFoodStallCount = sum;
    } else if (
      apiDatasetTotal != null &&
      apiDatasetTotal > 0 &&
      apiDatasetTotal > allRows.length
    ) {
      heroHawkerCentreCount = apiDatasetTotal;
    }
  }

  const filtered =
    activeFilter === "All"
      ? allRows
      : allRows.filter((h) => h.region === activeFilter);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection
          hawkerCentreCount={heroHawkerCentreCount}
          foodStallCount={heroFoodStallCount}
        />

        <section
          id="discover"
          className="mx-auto max-w-3xl -translate-y-8 px-4 sm:px-6 lg:px-8"
          aria-label="Search"
        >
          <form
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-sf-surface/80 p-2 shadow-xl shadow-black/40 backdrop-blur-sm sm:flex-row sm:items-stretch sm:p-2"
            role="search"
            action="/"
            method="get"
          >
            <label htmlFor="search-query" className="sr-only">
              Search by location or food type
            </label>
            <input
              id="search-query"
              type="search"
              name="q"
              placeholder="Search by location or food type (e.g. Tiong Bahru, laksa)…"
              className="min-h-12 flex-1 rounded-xl border border-transparent bg-sf-bg/80 px-4 py-3 text-sf-cream placeholder:text-sf-muted/80 focus:border-sf-primary/50 focus:outline-none focus:ring-2 focus:ring-sf-primary/40"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sf-primary px-8 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
            >
              Search
            </button>
          </form>
        </section>

        <section
          id="restaurants"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
          aria-labelledby="restaurants-heading"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sf-surface/60 to-sf-bg px-6 py-8 sm:px-10 sm:py-10">
            <h2
              id="restaurants-heading"
              className="text-2xl font-semibold text-sf-cream"
            >
              Restaurants & cafés
            </h2>
            <p className="mt-2 max-w-2xl text-sf-muted">
              From zi char to mod-Sin tasting menus — browse by neighbourhood
              and cuisine. Start with a search above or explore hawker gems
              first.
            </p>
            <Link
              href="#discover"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              Search restaurants
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section
          id="hawker-centres"
          className="border-t border-white/5 bg-black/20 px-4 py-16 sm:px-6 lg:px-8"
          aria-labelledby="hawkers-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <h2
                id="hawkers-heading"
                className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl"
              >
                Hawker centres
              </h2>
              <p className="mt-3 text-sf-muted">
                {listingFromApi
                  ? `Showing ${filtered.length.toLocaleString("en-SG")} of ${allRows.length.toLocaleString("en-SG")} centres from data.gov.sg.`
                  : `Showing ${filtered.length.toLocaleString("en-SG")} of ${allRows.length.toLocaleString("en-SG")} featured centres (offline fallback).`}
              </p>
            </div>

            <div
              className="mb-10 flex flex-wrap gap-2"
              role="toolbar"
              aria-label="Filter by region"
            >
              {REGION_FILTERS.map((region) => {
                const isActive = activeFilter === region;
                const href =
                  region === "All" ? "/" : `/?region=${encodeURIComponent(region)}`;
                return (
                  <Link
                    key={region}
                    href={href}
                    scroll={false}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary ${
                      isActive
                        ? "scale-[1.02] bg-sf-primary text-white shadow-md shadow-sf-primary/30"
                        : "border border-white/20 bg-transparent text-sf-muted hover:border-sf-primary/50 hover:text-sf-cream"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {region}
                  </Link>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <p className="rounded-2xl border border-white/10 bg-sf-surface/40 px-6 py-10 text-center text-sf-muted">
                No centres match this filter.{" "}
                <Link
                  href="/"
                  className="font-semibold text-sf-primary underline decoration-sf-primary/50 underline-offset-2 hover:decoration-sf-primary"
                >
                  Show all
                </Link>
                .
              </p>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((h, index) => {
                  const imageUrl =
                    CARD_IMAGES[index % CARD_IMAGES.length] ?? CARD_IMAGES[0];
                  const tag = VIBE_TAGS[index % VIBE_TAGS.length];
                  return (
                    <li
                      key={h.id}
                      className="sf-hawker-card-in"
                      style={{
                        animationDelay: `${Math.min(index, 20) * 40}ms`,
                      }}
                    >
                      <article
                        id={`hawker-${h.id}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sf-primary/25 bg-gradient-to-br from-sf-primary/[0.14] via-sf-primary/[0.05] to-sf-surface/70 transition duration-300 ease-out hover:border-sf-primary/45 hover:shadow-lg hover:shadow-sf-primary/10"
                      >
                        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt=""
                            fill
                            className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/70 via-transparent to-transparent"
                            aria-hidden
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <span className="mb-3 inline-flex w-fit rounded-full border border-sf-primary/45 bg-sf-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sf-primary">
                            {tag}
                          </span>
                          <h3 className="text-lg font-semibold text-sf-cream group-hover:text-sf-primary/95">
                            {h.name}
                          </h3>
                          <p className="mt-1 line-clamp-3 text-sm text-sf-muted">
                            {h.address}
                          </p>
                          <p className="mt-0.5 text-xs text-sf-muted/90">
                            {h.region} region
                          </p>
                          <div className="mt-4 border-t border-white/10 pt-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                              Opening hours
                            </p>
                            <p className="mt-1 text-sm text-sf-cream/95">
                              Varies by stall
                            </p>
                          </div>
                          <Link
                            href={`/hawker/${encodeURIComponent(h.id)}`}
                            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-sf-primary px-4 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
                          >
                            View Centre
                          </Link>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <section
          id="flavour-trail"
          className="border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8"
          aria-labelledby="trail-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <h2
                id="trail-heading"
                className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl"
              >
                Flavour Trail
              </h2>
              <p className="mt-3 text-sf-muted">
                Curated food journeys — walk, eat, repeat.
              </p>
            </div>
            <ul className="grid gap-8 lg:grid-cols-3">
              {flavourTrails.map((article) => (
                <li key={article.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-sf-surface/30 p-6 transition hover:border-sf-primary/25">
                    <h3 className="text-xl font-semibold leading-snug text-sf-cream">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-sf-muted">
                      {article.description}
                    </p>
                    <Link
                      href="#flavour-trail"
                      className="mt-6 text-sm font-semibold text-sf-primary hover:text-sf-primary/90 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
                    >
                      Read more
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

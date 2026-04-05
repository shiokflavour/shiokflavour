import Link from "next/link";
import { HeroSection } from "./components/hero-section";
import { HawkerCentreCard } from "./components/hawker-centre-card";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { FEATURED_HAWKERS } from "./lib/featured-hawkers";

const EDITOR_PICK_IDS = [1, 5, 6] as const;

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

export default async function Home() {
  const editorPicks = EDITOR_PICK_IDS.map((id) =>
    FEATURED_HAWKERS.find((h) => h.id === id),
  ).filter((h): h is (typeof FEATURED_HAWKERS)[number] => h != null);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />

        <section
          id="discover"
          className="mx-auto max-w-3xl -translate-y-8 px-4 sm:px-6 lg:px-8"
          aria-label="Search"
        >
          <div className="mb-6 text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
              Find your next meal
            </h2>
            <p className="mt-2 text-base text-sf-muted sm:text-lg">
              Search hawker centres by name, dish or district.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-sf-surface/80 p-2 shadow-xl shadow-black/40 backdrop-blur-sm sm:flex-row sm:items-stretch sm:p-2"
            role="search"
            action="/hawker-centres"
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
          id="editors-picks"
          className="border-t border-white/5 bg-black/20 px-4 py-16 sm:px-6 lg:px-8"
          aria-labelledby="editors-picks-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <h2
                id="editors-picks-heading"
                className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl"
              >
                Editor&apos;s picks
              </h2>
              <p className="mt-3 text-sf-muted">
                Three hawker legends to start your flavour trail — from iconic
                chicken rice to Little India and Crazy Rich Asians fame.
              </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {editorPicks.map((h, index) => (
                <HawkerCentreCard
                  key={h.slug}
                  index={index}
                  data={{
                    slug: h.slug,
                    name: h.name,
                    address: h.address,
                    region: h.region,
                    imageUrl: h.imageUrl,
                    primaryTag: h.tag,
                    hoursLabel: h.hours,
                    mustTry: h.mustTry,
                    michelinNote: h.michelinNote,
                    halal: h.halal,
                    openLate: h.openLate,
                    budgetPerPax: h.budgetPerPax,
                    nearestMRT: h.nearestMRT,
                  }}
                />
              ))}
            </ul>

            <p className="mt-10">
              <Link
                href="/hawker-centres"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sf-primary transition hover:text-sf-primary/90 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
              >
                View all 22 centres
                <span aria-hidden>→</span>
              </Link>
            </p>
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

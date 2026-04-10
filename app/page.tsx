import Link from "next/link";
import Image from "next/image";
import { HawkerCarousel } from "./components/hawker-carousel";
import { HeroSection } from "./components/hero-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

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

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <style>{`
        @keyframes fireGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 20px rgba(249, 115, 22, 0.2));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(249, 115, 22, 0.8)) drop-shadow(0 0 40px rgba(249, 115, 22, 0.4));
            transform: scale(1.03);
          }
        }
        .fire-glow {
          animation: fireGlow 2.5s ease-in-out infinite;
        }
      `}</style>
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
              Where are you eating today?
            </h2>
            <p className="mt-2 text-base text-sf-muted sm:text-lg">
              Every queue worth joining. Every stall worth finding. All in one
              place.
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

        <HawkerCarousel />

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

import Link from "next/link";
import { FooterCopyright } from "./components/footer-copyright";
import { HawkerGrid } from "./components/HawkerGrid";
import { HeroSection } from "./components/hero-section";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#hawker-centres", label: "Hawker Centres" },
  { href: "#restaurants", label: "Restaurants" },
  { href: "#flavour-trail", label: "Flavour Trail" },
  { href: "#discover", label: "Near Me" },
] as const;

function WokFlameIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 24c0-4 2.5-7 6-8.5l1.2 2.4c.8 1.6 2.8 2.1 4.3 1.1l.5-.3c1.4-1 3.5-.5 4.3 1.1L26 15.5c3.5 1.5 6 4.5 6 8.5v1H8v-1Z"
        className="fill-sf-primary/90"
      />
      <path
        d="M6 26h28v2.5c0 1.4-1.1 2.5-2.5 2.5h-23C5.1 31 4 29.9 4 28.5V26h2Z"
        className="fill-sf-muted/50"
      />
      <path
        d="M20 6.5s-2.5 2.8-2.5 5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-2.2-2.5-5-2.5-5Z"
        className="fill-sf-primary"
      />
      <path
        d="M16 10s-1.2 1.5-1.2 2.8c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4C17.6 11.5 16 10 16 10Z"
        className="fill-sf-primary/80"
      />
      <path
        d="M24 9.5s-1 1.2-1 2.2c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-1-1.1-2.2-1.1-2.2Z"
        className="fill-sf-primary/70"
      />
    </svg>
  );
}

function BrandLogo() {
  return (
    <span className="inline-flex items-center gap-2">
      <WokFlameIcon className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="text-xl font-semibold tracking-tight text-sf-cream sm:text-2xl">
        <span className="text-sf-primary">Shiok</span>
        Flavour
      </span>
    </span>
  );
}

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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-sf-bg/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Main"
        >
          <Link
            href="/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
          >
            <BrandLogo />
          </Link>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-sf-muted">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-sf-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <HeroSection />

        {/* Search */}
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

        {/* Restaurants teaser */}
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

        <HawkerGrid />

        {/* Flavour Trail — below hawker cards */}
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

      <footer className="mt-auto border-t border-white/10 bg-sf-bg px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Link
                href="/"
                className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
              >
                <BrandLogo />
              </Link>
            </div>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-sf-muted">
                {navLinks.map(({ href, label }) => (
                  <li key={`footer-${label}`}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-sf-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm text-sf-muted">
            <p>
              Data from{" "}
              <a
                href="https://data.gov.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sf-primary hover:underline"
              >
                data.gov.sg
              </a>{" "}
              under{" "}
              <a
                href="https://data.gov.sg/open-data-licence"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sf-primary hover:underline"
              >
                Singapore Open Data Licence
              </a>
              .
            </p>
            <FooterCopyright />
          </div>
        </div>
      </footer>
    </div>
  );
}

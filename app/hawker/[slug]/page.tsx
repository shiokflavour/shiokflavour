import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { HawkerCentreCard } from "../../components/hawker-centre-card";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import {
  fetchHawkerByIdFromApi,
  type HawkerCentre,
} from "../../lib/hawker-api";
import {
  FEATURED_HAWKERS,
  getFeaturedHawkerById,
  getFeaturedHawkerBySlug,
  type FeaturedHawker,
} from "../../lib/featured-hawkers";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let featured = getFeaturedHawkerBySlug(slug);
  if (!featured) featured = getFeaturedHawkerById(slug) ?? null;
  if (featured) {
    return {
      title: `${featured.name} | ShiokFlavour`,
      description: featured.description,
      openGraph: {
        title: `${featured.name} | ShiokFlavour`,
        description: `${featured.description} ${featured.address}`.trim(),
        url: `https://www.shiokflavour.com/hawker/${encodeURIComponent(featured.slug)}`,
        images: [{ url: featured.imageUrl, alt: featured.name }],
      },
    };
  }
  const hawker = await fetchHawkerByIdFromApi(slug);
  if (!hawker) return { title: "Not found | ShiokFlavour" };
  return {
    title: `${hawker.name} | ShiokFlavour`,
    description: hawker.address,
    openGraph: {
      title: `${hawker.name} | ShiokFlavour`,
      description: hawker.address,
      url: `https://www.shiokflavour.com/hawker/${encodeURIComponent(slug)}`,
    },
  };
}

function HawkerStructuredData({ hawker }: { hawker: FeaturedHawker }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: hawker.name,
    description: hawker.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: hawker.address,
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hawker.lat,
      longitude: hawker.lng,
    },
    url: `https://www.shiokflavour.com/hawker/${hawker.slug}`,
    servesCuisine: "Singaporean",
    priceRange: hawker.budgetPerPax,
    openingHours: hawker.hours,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function mapsDirectionsUrl(name: string, address: string): string {
  const q = `${name} ${address}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function getRelatedHawkers(excludeId: number): FeaturedHawker[] {
  const pool = FEATURED_HAWKERS.filter((h) => h.id !== excludeId);
  if (pool.length === 0) return [];
  const n = pool.length;
  const start = excludeId % n;
  return [0, 1, 2].map((i) => pool[(start + i) % n]!);
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconWallet({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconTrain({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 3v2" />
      <path d="M16 3v2" />
      <rect width="16" height="16" x="4" y="5" rx="2" />
      <path d="M4 15h16" />
      <path d="M8 19v2" />
      <path d="M16 19v2" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FeaturedHawkerPage({ h }: { h: FeaturedHawker }) {
  const showMichelin = h.michelinNote.trim().length > 0;
  const related = getRelatedHawkers(h.id);
  const directionsHref = mapsDirectionsUrl(h.name, h.address);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-sf-bg">
      <SiteHeader />
      <HawkerStructuredData hawker={h} />

      {/* Hero — full bleed 16/6 */}
      <div className="relative w-full overflow-hidden aspect-[16/6] min-h-[200px]">
        <Image
          src={h.imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 pt-16 sm:px-6 sm:pb-10 md:px-8 md:pb-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sf-primary">
              {h.region}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {h.name}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {h.halal ? (
                <span className="rounded-full border border-emerald-400/50 bg-emerald-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
                  Halal
                </span>
              ) : null}
              {h.openLate ? (
                <span className="rounded-full border border-violet-400/50 bg-violet-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-100">
                  Open Late
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky sub-navigation */}
      <nav
        className="sticky top-14 z-40 border-b border-white/10 bg-sf-bg/95 backdrop-blur-md supports-[backdrop-filter]:bg-sf-bg/80"
        aria-label="Hawker page navigation"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_minmax(0,1.5fr)_1fr] items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/hawker-centres"
            className="justify-self-start text-sm font-semibold text-sf-primary transition hover:text-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
          >
            ← Back to Hawker Centres
          </Link>
          <p className="truncate text-center text-sm font-semibold text-sf-cream sm:text-base">
            {h.name}
          </p>
          <span className="hidden sm:block" aria-hidden />
        </div>
      </nav>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Left column — 2/3 */}
            <div className="space-y-10 lg:col-span-2">
              <section aria-labelledby="about-heading">
                <h2
                  id="about-heading"
                  className="sr-only"
                >
                  About
                </h2>
                <p className="text-lg leading-relaxed text-sf-cream/95 sm:text-xl">
                  {h.description}
                </p>
              </section>

              <section
                className="rounded-2xl border-2 border-sf-primary/40 bg-sf-primary/[0.06] p-6 sm:p-8"
                aria-labelledby="famous-heading"
              >
                <h2
                  id="famous-heading"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary"
                >
                  Famous For
                </h2>
                <p className="mt-3 text-base leading-relaxed text-sf-cream sm:text-lg">
                  {h.famousFor}
                </p>
              </section>

              <section aria-labelledby="must-try-heading">
                <h2
                  id="must-try-heading"
                  className="text-2xl font-bold tracking-tight text-sf-cream"
                >
                  Must Try Dishes
                </h2>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {h.mustTry.map((dish) => (
                    <li key={dish}>
                      <span className="inline-flex rounded-full border-2 border-sf-primary bg-black/30 px-4 py-2 text-sm font-semibold text-sf-primary">
                        {dish}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                className="rounded-2xl border border-white/10 bg-[#141416] p-6 sm:p-8"
                aria-labelledby="tip-heading"
              >
                <h2
                  id="tip-heading"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary"
                >
                  Local Tip
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white sm:text-lg">
                  {h.tipForVisitors}
                </p>
              </section>

              <section aria-labelledby="vibes-heading">
                <h2
                  id="vibes-heading"
                  className="text-xl font-semibold tracking-tight text-sf-cream"
                >
                  This Place Is Perfect For
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {h.vibes.map((v) => (
                    <li key={v}>
                      <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sf-muted">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {showMichelin ? (
                <section
                  className="rounded-2xl border border-amber-400/35 bg-gradient-to-br from-amber-500/15 to-amber-900/20 p-6 sm:p-8"
                  aria-labelledby="michelin-heading"
                >
                  <div className="flex items-start gap-3">
                    <IconStar className="mt-0.5 h-6 w-6 shrink-0 text-amber-300" />
                    <div>
                      <h2
                        id="michelin-heading"
                        className="text-sm font-bold uppercase tracking-[0.15em] text-amber-200"
                      >
                        Michelin Recognised
                      </h2>
                      <p className="mt-2 text-base leading-relaxed text-amber-50/95">
                        {h.michelinNote}
                      </p>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>

            {/* Right column — sticky Visit Info */}
            <aside className="lg:col-span-1">
              <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
                <div className="rounded-2xl border border-white/10 bg-sf-surface/50 p-6 shadow-xl shadow-black/20">
                  <h2 className="text-lg font-bold text-sf-cream">Visit Info</h2>

                  <dl className="mt-6 space-y-5">
                    <div className="flex gap-3">
                      <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-sf-primary" />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                          Opening Hours
                        </dt>
                        <dd className="mt-1 text-sm text-sf-cream/95">
                          {h.hours}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconWallet className="mt-0.5 h-5 w-5 shrink-0 text-sf-primary" />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                          Budget
                        </dt>
                        <dd className="mt-1 text-sm text-sf-cream/95">
                          {h.budgetPerPax}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sf-primary" />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                          Region
                        </dt>
                        <dd className="mt-1 text-sm text-sf-cream/95">
                          {h.region}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconTrain className="mt-0.5 h-5 w-5 shrink-0 text-sf-primary" />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                          Nearest MRT
                        </dt>
                        <dd className="mt-1 text-sm text-sf-cream/95">
                          {h.nearestMRT}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {h.halal ? (
                      <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                        Halal
                      </span>
                    ) : null}
                    {h.openLate ? (
                      <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-100">
                        Open Late
                      </span>
                    ) : null}
                  </div>

                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-sf-primary px-4 text-sm font-bold text-white shadow-lg shadow-sf-primary/25 transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* You might also like */}
        {related.length > 0 ? (
          <section
            className="border-t border-white/10 bg-black/20 px-4 py-14 sm:px-6 lg:px-8"
            aria-labelledby="related-heading"
          >
            <div className="mx-auto max-w-6xl">
              <h2
                id="related-heading"
                className="text-2xl font-bold tracking-tight text-sf-cream sm:text-3xl"
              >
                You Might Also Like
              </h2>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r, index) => (
                  <HawkerCentreCard
                    key={r.slug}
                    index={index}
                    data={{
                      slug: r.slug,
                      name: r.name,
                      address: r.address,
                      region: r.region,
                      imageUrl: r.imageUrl,
                      primaryTag: r.tag,
                      hoursLabel: r.hours,
                      mustTry: r.mustTry,
                      michelinNote: r.michelinNote,
                      halal: r.halal,
                      openLate: r.openLate,
                      budgetPerPax: r.budgetPerPax,
                      nearestMRT: r.nearestMRT,
                    }}
                  />
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  );
}

function ApiHawkerPage({ hawker }: { hawker: HawkerCentre }) {
  const stallsLabel =
    hawker.noOfStalls != null && hawker.noOfStalls > 0
      ? hawker.noOfStalls.toLocaleString("en-SG")
      : "Not listed";
  const directionsHref = mapsDirectionsUrl(hawker.name, hawker.address);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-sf-bg">
      <SiteHeader />

      <div className="relative w-full aspect-[16/6] min-h-[180px] bg-gradient-to-br from-[#1c1c1e] via-sf-bg to-sf-primary/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 pt-12 sm:px-6 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sf-primary">
              {hawker.region}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {hawker.name}
            </h1>
          </div>
        </div>
      </div>

      <nav
        className="sticky top-14 z-40 border-b border-white/10 bg-sf-bg/95 backdrop-blur-md"
        aria-label="Hawker page navigation"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_minmax(0,1.5fr)_1fr] items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/hawker-centres"
            className="justify-self-start text-sm font-semibold text-sf-primary hover:text-sf-primary/90"
          >
            ← Back to Hawker Centres
          </Link>
          <p className="truncate text-center text-sm font-semibold text-sf-cream sm:text-base">
            {hawker.name}
          </p>
          <span className="hidden sm:block" aria-hidden />
        </div>
      </nav>

      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-sf-cream/90">
            {hawker.address}
          </p>
          <div className="rounded-2xl border border-white/10 bg-sf-surface/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
              Cooked food stalls (dataset)
            </p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-sf-primary">
              {stallsLabel}
            </p>
          </div>
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-sf-primary px-6 text-sm font-bold text-white hover:bg-sf-primary/90 sm:w-auto"
          >
            Get Directions
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default async function HawkerDetailPage({ params }: Props) {
  const { slug } = await params;
  const featured = getFeaturedHawkerBySlug(slug);
  if (featured) {
    return <FeaturedHawkerPage h={featured} />;
  }

  const legacyFeatured = getFeaturedHawkerById(slug);
  if (legacyFeatured) {
    redirect(`/hawker/${legacyFeatured.slug}`);
  }

  const hawker = await fetchHawkerByIdFromApi(slug);
  if (!hawker) notFound();

  return <ApiHawkerPage hawker={hawker} />;
}

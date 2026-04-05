import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import {
  fetchHawkerByIdFromApi,
  type HawkerCentre,
} from "../../lib/hawker-api";
import {
  getFeaturedHawkerById,
  type FeaturedHawker,
} from "../../lib/featured-hawkers";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const featured = getFeaturedHawkerById(id);
  if (featured) {
    return {
      title: `${featured.name} | ShiokFlavour`,
      description: featured.description.slice(0, 155),
    };
  }
  const hawker = await fetchHawkerByIdFromApi(id);
  if (!hawker) return { title: "Not found | ShiokFlavour" };
  return {
    title: `${hawker.name} | ShiokFlavour`,
    description: hawker.address,
  };
}

function badgeClassGold() {
  return "rounded-full border border-amber-400/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-200";
}

function badgeClassHalal() {
  return "rounded-full border border-emerald-500/35 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200";
}

function badgeClassLate() {
  return "rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-100";
}

function FeaturedHawkerPage({ h }: { h: FeaturedHawker }) {
  const showMichelin = h.michelinNote.trim().length > 0;

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex text-sm font-semibold text-sf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
          >
            ← Back to homepage
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {showMichelin ? (
              <span className={badgeClassGold()}>⭐ Michelin Recognised</span>
            ) : null}
            {h.halal ? (
              <span className={badgeClassHalal()}>✓ Halal</span>
            ) : null}
            {h.openLate ? (
              <span className={badgeClassLate()}>🌙 Open Late</span>
            ) : null}
          </div>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
            {h.region} region
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
            {h.name}
          </h1>
          <p className="mt-4 leading-relaxed text-sf-muted">{h.address}</p>
          <p className="mt-2 text-sm text-sf-muted/90">{h.nearestMRT}</p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={h.imageUrl}
              alt={h.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <p className="mt-8 leading-relaxed text-sf-cream/90">{h.description}</p>

          <section className="mt-8 rounded-2xl border border-sf-primary/25 bg-sf-primary/[0.07] px-6 py-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-sf-primary">
              Famous for
            </h2>
            <p className="mt-2 leading-relaxed text-sf-cream/95">
              {h.famousFor}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
              Must try
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sf-cream/95">
              {h.mustTry.map((dish) => (
                <li key={dish}>{dish}</li>
              ))}
            </ul>
          </section>

          {showMichelin ? (
            <section className="mt-8 rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Michelin note
              </h2>
              <p className="mt-2 leading-relaxed text-sf-cream/90">
                {h.michelinNote}
              </p>
            </section>
          ) : null}

          <section className="mt-8 rounded-2xl border border-white/10 bg-sf-surface/40 px-6 py-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
              Tip for visitors
            </h2>
            <p className="mt-2 leading-relaxed text-sf-cream/95">
              {h.tipForVisitors}
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-medium text-sf-cream/90">
              Budget: {h.budgetPerPax}
            </span>
            {h.vibes.map((v) => (
              <span
                key={v}
                className="rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs text-sf-cream/85"
              >
                {v}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-sf-surface/30 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
              Opening hours
            </p>
            <p className="mt-1 text-sm text-sf-cream/95">{h.hours}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-sf-primary bg-transparent px-6 text-sm font-semibold text-sf-cream transition hover:bg-sf-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              ← Back to homepage
            </Link>
            <Link
              href="/#hawker-centres"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sf-primary px-6 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
            >
              Hawker centres
            </Link>
          </div>
        </div>
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

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex text-sm font-semibold text-sf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
          >
            ← Back to homepage
          </Link>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
            {hawker.region} region
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
            {hawker.name}
          </h1>
          <p className="mt-6 leading-relaxed text-sf-muted">{hawker.address}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-sf-surface/40 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
              Cooked food stalls (dataset)
            </p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-sf-primary">
              {stallsLabel}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-sf-primary bg-transparent px-6 text-sm font-semibold text-sf-cream transition hover:bg-sf-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              ← Back to homepage
            </Link>
            <Link
              href="/#hawker-centres"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sf-primary px-6 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
            >
              Hawker centres
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default async function HawkerDetailPage({ params }: Props) {
  const { id } = await params;
  const featured = getFeaturedHawkerById(id);
  if (featured) {
    return <FeaturedHawkerPage h={featured} />;
  }

  const hawker = await fetchHawkerByIdFromApi(id);
  if (!hawker) notFound();

  return <ApiHawkerPage hawker={hawker} />;
}

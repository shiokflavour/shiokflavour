"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { HawkerCentreCard } from "../components/hawker-centre-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  FEATURED_HAWKERS,
  REGION_FILTERS,
  type FeaturedHawker,
  type RegionFilter,
} from "../lib/featured-hawkers";

/** Case-insensitive substring match across name, address, region, tag, mustTry, vibes. */
function matchesQuery(h: FeaturedHawker, raw: string): boolean {
  const q = raw.trim().toLowerCase();
  if (!q) return true;
  const fields = [
    h.name,
    h.address,
    h.region,
    h.tag,
    ...h.mustTry,
    ...h.vibes,
  ];
  return fields.some((s) => String(s).toLowerCase().includes(q));
}

function matchesOccasionTag(h: FeaturedHawker, tag: string): boolean {
  const t = tag.toLowerCase().trim();
  switch (t) {
    case "breakfast":
      return /breakfast|6am|7am|8am|morning/i.test(
        `${h.hours} ${h.description} ${h.vibes.join(" ")}`,
      );
    case "late-night":
      return h.openLate === true;
    case "halal":
      return h.halal === true;
    case "mrt":
      return /\bMRT\b/i.test(h.nearestMRT);
    case "budget":
      return (
        h.tag === "Budget Eats" || /^\$[3-4]/.test(h.budgetPerPax.trim())
      );
    case "michelin":
      return h.michelinNote.trim().length > 0 || /michelin/i.test(h.tag);
    default:
      return true;
  }
}

function HawkerCentresInner() {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");
  const qParam = searchParams.get("q") ?? "";

  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");

  const filtered = useMemo(() => {
    let list = FEATURED_HAWKERS;
    if (activeRegion !== "All") {
      list = list.filter((h) => h.region === activeRegion);
    }
    if (tagParam) {
      list = list.filter((h) => matchesOccasionTag(h, tagParam));
    }
    if (qParam.trim()) {
      list = list.filter((h) => matchesQuery(h, qParam));
    }
    return list;
  }, [activeRegion, tagParam, qParam]);

  const clearSearchHref =
    tagParam != null && tagParam !== ""
      ? `/hawker-centres?tag=${encodeURIComponent(tagParam)}`
      : "/hawker-centres";

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1 border-t border-white/5 bg-black/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
            Hawker Centres
          </h1>
          <p className="mt-2 max-w-2xl text-sf-muted">
            {FEATURED_HAWKERS.length} curated spots — filter by region
            {tagParam ? " and occasion" : ""}, or search by name, dish, or area.
          </p>

          {qParam.trim() ? (
            <p className="mt-3 text-sm text-sf-cream/90">
              Search:{" "}
              <span className="font-semibold text-sf-primary">
                &quot;{qParam.trim()}&quot;
              </span>
              {" · "}
              <Link
                href={clearSearchHref}
                className="font-medium text-sf-primary underline decoration-sf-primary/50 underline-offset-2 hover:decoration-sf-primary"
              >
                Clear search
              </Link>
            </p>
          ) : null}

          {tagParam ? (
            <p className="mt-3 text-sm text-sf-cream/90">
              Occasion:{" "}
              <span className="font-semibold text-sf-primary">
                {tagParam.replace(/-/g, " ")}
              </span>
              {" · "}
              <Link
                href="/hawker-centres"
                className="font-medium text-sf-primary underline decoration-sf-primary/50 underline-offset-2 hover:decoration-sf-primary"
              >
                Clear occasion filter
              </Link>
            </p>
          ) : null}

          <div
            className="mt-10 flex flex-wrap gap-2"
            role="toolbar"
            aria-label="Filter by region"
          >
            {REGION_FILTERS.map((region) => {
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary ${
                    isActive
                      ? "scale-[1.02] bg-sf-primary text-white shadow-md shadow-sf-primary/30"
                      : "border border-white/20 bg-transparent text-sf-muted hover:border-sf-primary/50 hover:text-sf-cream"
                  }`}
                  aria-pressed={isActive}
                >
                  {region}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 rounded-2xl border border-white/10 bg-sf-surface/40 px-6 py-10 text-center text-sf-muted">
              No centres match these filters.{" "}
              <Link
                href="/hawker-centres"
                className="font-semibold text-sf-primary underline decoration-sf-primary/50 underline-offset-2 hover:decoration-sf-primary"
              >
                Reset filters
              </Link>
              .
            </p>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((h, index) => (
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
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function HawkerCentresFallback() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-16 text-sf-muted">
        <p>Loading hawker centres…</p>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function HawkerCentresPage() {
  return (
    <Suspense fallback={<HawkerCentresFallback />}>
      <HawkerCentresInner />
    </Suspense>
  );
}

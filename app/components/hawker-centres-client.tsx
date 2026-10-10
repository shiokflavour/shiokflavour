"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
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

export function HawkerCentresBrowse({
  hawkers,
  tagParam,
  qParam,
  children,
}: {
  hawkers: FeaturedHawker[];
  tagParam: string | null;
  qParam: string;
  children: ReactNode;
}) {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");

  const visibleCount = useMemo(() => {
    return hawkers.filter((h) => {
      if (activeRegion !== "All" && h.region !== activeRegion) return false;
      if (tagParam && !matchesOccasionTag(h, tagParam)) return false;
      if (qParam.trim() && !matchesQuery(h, qParam)) return false;
      return true;
    }).length;
  }, [hawkers, activeRegion, tagParam, qParam]);

  const clearSearchHref =
    tagParam != null && tagParam !== ""
      ? `/hawker-centres?tag=${encodeURIComponent(tagParam)}`
      : "/hawker-centres";

  const hideForTagOrQuery = useMemo(() => {
    const slugs = new Set<string>();
    for (const h of hawkers) {
      if (tagParam && !matchesOccasionTag(h, tagParam)) slugs.add(h.slug);
      if (qParam.trim() && !matchesQuery(h, qParam)) slugs.add(h.slug);
    }
    return slugs;
  }, [hawkers, tagParam, qParam]);

  const tagQueryCss =
    hideForTagOrQuery.size === 0
      ? ""
      : [...hideForTagOrQuery]
          .map(
            (slug) =>
              `[data-hawker-filter] li[data-slug="${CSS.escape(slug)}"]{display:none;}`,
          )
          .join("");

  return (
    <>
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

      {visibleCount === 0 ? (
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
      ) : null}

      <style>{`
        [data-hawker-filter][data-active-region="Central"] > ul > li:not([data-region="Central"]),
        [data-hawker-filter][data-active-region="North"] > ul > li:not([data-region="North"]),
        [data-hawker-filter][data-active-region="South"] > ul > li:not([data-region="South"]),
        [data-hawker-filter][data-active-region="East"] > ul > li:not([data-region="East"]),
        [data-hawker-filter][data-active-region="West"] > ul > li:not([data-region="West"]) {
          display: none;
        }
        [data-hawker-filter][data-empty="true"] > ul {
          display: none;
        }
        ${tagQueryCss}
      `}</style>

      <div
        data-hawker-filter
        data-active-region={activeRegion}
        data-empty={visibleCount === 0 ? "true" : "false"}
      >
        {children}
      </div>
    </>
  );
}

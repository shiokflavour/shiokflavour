"use client";

import { useMemo, useState } from "react";
import { HawkerCentreCard } from "../components/hawker-centre-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  FEATURED_HAWKERS,
  REGION_FILTERS,
  type RegionFilter,
} from "../lib/featured-hawkers";

export default function HawkerCentresPage() {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");

  const filtered = useMemo(() => {
    if (activeRegion === "All") return FEATURED_HAWKERS;
    return FEATURED_HAWKERS.filter((h) => h.region === activeRegion);
  }, [activeRegion]);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1 border-t border-white/5 bg-black/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
            Hawker Centres
          </h1>
          <p className="mt-2 max-w-2xl text-sf-muted">
            {FEATURED_HAWKERS.length} curated spots — filter by region.
          </p>

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
              No centres in this region.
            </p>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((h, index) => (
                <HawkerCentreCard
                  key={h.id}
                  index={index}
                  data={{
                    id: String(h.id),
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

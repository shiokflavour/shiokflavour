"use client";

import { useMemo, useState } from "react";
import {
  FEATURED_HAWKERS,
  REGION_FILTERS,
  type RegionFilter,
} from "../lib/featured-hawkers";
import { HawkerCentreCard } from "./hawker-centre-card";

export function HawkerCentresSection() {
  const [active, setActive] = useState<RegionFilter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return FEATURED_HAWKERS;
    return FEATURED_HAWKERS.filter((h) => h.region === active);
  }, [active]);

  return (
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
            Featured hawker centres
          </h2>
          <p className="mt-3 text-sf-muted">
            Crowd favourites and late-night legends — pick a spot and eat like
            a local.
          </p>
        </div>

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="toolbar"
          aria-label="Filter by region"
        >
          {REGION_FILTERS.map((region) => {
            const isActive = active === region;
            return (
              <button
                key={region}
                type="button"
                onClick={() => setActive(region)}
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
          <p className="rounded-2xl border border-white/10 bg-sf-surface/40 px-6 py-10 text-center text-sf-muted transition-opacity duration-300">
            No featured centres in this region yet. Try{" "}
            <button
              type="button"
              onClick={() => setActive("All")}
              className="font-semibold text-sf-primary underline decoration-sf-primary/50 underline-offset-2 hover:decoration-sf-primary"
            >
              All
            </button>
            .
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}

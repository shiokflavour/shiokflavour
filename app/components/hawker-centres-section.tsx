"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FEATURED_HAWKERS,
  REGION_FILTERS,
  type RegionFilter,
} from "../lib/featured-hawkers";

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
              <li
                key={h.id}
                className="sf-hawker-card-in"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <article
                  id={`hawker-${h.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sf-primary/25 bg-gradient-to-br from-sf-primary/[0.14] via-sf-primary/[0.05] to-sf-surface/70 transition duration-300 ease-out hover:border-sf-primary/45 hover:shadow-lg hover:shadow-sf-primary/10"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                    <Image
                      src={h.imageUrl}
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
                      {h.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-sf-cream group-hover:text-sf-primary/95">
                      {h.name}
                    </h3>
                    <p className="mt-1 text-sm text-sf-muted">{h.area}</p>
                    <p className="mt-0.5 text-xs text-sf-muted/90">
                      {h.region} region
                    </p>
                    <div className="mt-4 border-t border-white/10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                        Opening hours
                      </p>
                      <p className="mt-1 text-sm text-sf-cream/95">{h.hours}</p>
                    </div>
                    <Link
                      href={`#hawker-${h.id}`}
                      className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-sf-primary px-4 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
                    >
                      View Centre
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

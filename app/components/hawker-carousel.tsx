"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FEATURED_HAWKERS } from "../lib/featured-hawkers";

const VISIBLE = 4;

export function HawkerCarousel() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = FEATURED_HAWKERS.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    FEATURED_HAWKERS[(start + i) % total],
  );

  return (
    <section
      id="editors-picks"
      className="relative z-10 border-t border-white/5 bg-[#121212] py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="hawker-carousel-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sf-primary">
              Hawker Centres
            </p>
            <h2
              id="hawker-carousel-heading"
              className="text-3xl font-bold text-sf-cream"
            >
              The Island on a Plate
            </h2>
            <p className="mt-1 text-sm italic text-sf-muted">
              Pull up a chair. Singapore is serving.
            </p>
          </div>
          <Link
            href="/hawker-centres"
            className="shrink-0 text-sm font-medium text-sf-primary transition hover:opacity-80"
          >
            View all {total} centres →
          </Link>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((hawker, i) => (
            <Link
              key={`${hawker.slug}-${start}-${i}`}
              href={`/hawker/${hawker.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-sf-surface transition-all duration-500 hover:border-sf-primary/40 hover:scale-[1.02] transition-opacity duration-700"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={hawker.imageUrl}
                  alt={hawker.name}
                  className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="mb-1 line-clamp-1 text-sm font-semibold leading-tight text-sf-cream">
                  {hawker.name}
                </h3>
                <p className="text-xs font-medium text-sf-primary">
                  {hawker.region}
                </p>
                <p className="mt-1 line-clamp-1 text-xs text-sf-muted">
                  {hawker.tag}
                </p>
              </div>
              {/* Michelin badge */}
              {hawker.michelinNote && (
                <div className="absolute right-2 top-2">
                  <span className="rounded-full border border-yellow-500/40 bg-black/70 px-2 py-0.5 text-xs font-semibold text-yellow-400 backdrop-blur-sm">
                    ⭐ Michelin
                  </span>
                </div>
              )}
              {/* Halal badge */}
              {hawker.halal && (
                <div className="absolute left-2 top-2">
                  <span className="rounded-full bg-emerald-700/80 px-2 py-0.5 text-xs font-semibold text-white">
                    Halal
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-1.5">
          {Array.from({ length: Math.ceil(total / VISIBLE) }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show hawker centres group ${i + 1}`}
              onClick={() => setStart(i * VISIBLE)}
              className={`rounded-full transition-all duration-300 ${
                Math.floor(start / VISIBLE) === i
                  ? "h-1.5 w-6 bg-sf-primary"
                  : "h-1.5 w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

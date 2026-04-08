"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURED_HAWKERS } from "../lib/featured-hawkers";

const PAGE_SIZE = 4;

function getVisibleCount(width: number) {
  if (width >= 1024) return 4; // lg
  if (width >= 640) return 2; // sm
  return 1; // mobile
}

export function HawkerCarousel() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const total = FEATURED_HAWKERS.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const visibleCount = getVisibleCount(containerWidth);
  const cardWidth = containerWidth > 0 ? containerWidth / visibleCount : 0;
  const translateX = -(page * PAGE_SIZE * cardWidth);

  const cards = useMemo(() => {
    // Build a stable, wrapped list so sliding never hits "empty space".
    const paddedLen = totalPages * PAGE_SIZE;
    return Array.from({ length: paddedLen }, (_, i) => FEATURED_HAWKERS[i % total]);
  }, [total, totalPages]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setContainerWidth(el.clientWidth);
    });
    ro.observe(el);
    setContainerWidth(el.clientWidth);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, totalPages]);

  const goTo = (p: number) => setPage(((p % totalPages) + totalPages) % totalPages);

  return (
    <section
      className="relative z-10 border-t border-white/5 bg-[#1a1a1a] py-16 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-labelledby="hawker-carousel-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sf-primary">
              Hawker Centres
            </p>
            <h2
              id="hawker-carousel-heading"
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              The Island on a Plate
            </h2>
            <p className="mt-2 italic text-sf-muted">
              Pull up a chair. Singapore is serving.
            </p>
          </div>
          <Link
            href="/hawker-centres"
            className="mt-1 whitespace-nowrap text-sm text-sf-primary hover:underline"
          >
            View all {total} centres →
          </Link>
        </div>

        {/* Viewport */}
        <div ref={viewportRef} className="overflow-hidden">
          {/* Track */}
          <div
            className="flex will-change-transform transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
          >
            {cards.map((h, idx) => {
              const showMichelin = Boolean(h.michelinNote && h.michelinNote.trim());
              return (
                <div
                  key={`${h.slug}-${idx}`}
                  className="shrink-0 px-2"
                  style={{ width: cardWidth || undefined }}
                >
                  <Link
                    href={`/hawker/${h.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-[#242424] transition-all duration-300 hover:ring-1 hover:ring-sf-primary/40"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={h.imageUrl}
                        alt={h.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {h.halal && (
                        <div className="absolute left-3 top-3">
                          <span className="rounded-full bg-emerald-700 px-2 py-0.5 text-xs font-bold text-white">
                            Halal
                          </span>
                        </div>
                      )}

                      {showMichelin && (
                        <div className="absolute right-3 top-3">
                          <span className="flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-xs font-bold text-yellow-300 backdrop-blur-sm">
                            ★ Michelin
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="mb-1 line-clamp-1 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-sf-primary">
                        {h.name}
                      </h3>
                      <p className="mb-1 text-xs font-medium text-sf-primary">
                        {h.region}
                      </p>
                      <p className="line-clamp-1 text-xs text-sf-muted">
                        {h.tag}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show hawker centres page ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-sf-primary" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

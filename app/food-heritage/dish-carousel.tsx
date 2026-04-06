"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Dish = {
  slug: string;
  name: string;
  imageUrl: string;
  description: string;
  spiceLevel: string;
  halal: boolean;
};

type Props = {
  dishes: Dish[];
};

const VISIBLE = 3;
const AUTOPLAY_MS = 4000;

function wrapIndex(i: number, total: number) {
  if (total <= 0) return 0;
  return ((i % total) + total) % total;
}

export function DishCarousel({ dishes }: Props) {
  const total = dishes.length;
  const [start, setStart] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(
    (dir: 1 | -1) => {
      if (transitioning) return;
      setTransitioning(true);
      setStart((prev) => wrapIndex(prev + dir, total));
      setTimeout(() => setTransitioning(false), 350);
    },
    [transitioning, total],
  );

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => advance(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isHovered, advance]);

  const visibleDishes = Array.from({ length: VISIBLE }, (_, i) =>
    dishes[wrapIndex(start + i, total)],
  );

  return (
    <section
      className="mt-16 border-t border-white/10 pt-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header row */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sf-primary">
            Keep Exploring
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-sf-cream">
            More Singapore Heritage Dishes
          </h2>
        </div>

        {/* Arrow controls */}
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => advance(-1)}
            aria-label="Previous dishes"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sf-cream transition hover:border-sf-primary hover:text-sf-primary"
          >
            ←
          </button>
          <button
            onClick={() => advance(1)}
            aria-label="Next dishes"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sf-cream transition hover:border-sf-primary hover:text-sf-primary"
          >
            →
          </button>
        </div>
      </div>

      {/* Cards */}
      <ul
        className={`mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
          transitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        {visibleDishes.map((dish, i) => (
          <li key={`${dish.slug}-${i}`}>
            <Link
              href={`/food-heritage/${dish.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-sf-surface transition hover:border-sf-primary/40"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.imageUrl}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-xs text-white backdrop-blur-sm">
                    {dish.spiceLevel}
                  </span>
                  {dish.halal && (
                    <span className="rounded-full bg-emerald-700/80 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                      Halal friendly
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <p className="font-semibold text-sf-cream transition group-hover:text-sf-primary">
                  {dish.name}
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sf-muted">
                  {dish.description}
                </p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-sf-primary">
                  Explore
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {dishes.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to dish ${i + 1}`}
            onClick={() => setStart(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === start
                ? "w-6 bg-sf-primary"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
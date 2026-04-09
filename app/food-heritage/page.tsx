"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FOOD_HERITAGE_DISHES } from "@/app/lib/food-heritage";

const CATEGORY_ORDER = [
  "Singaporean Classics",
  "Malay & Muslim Heritage",
  "Peranakan (Nyonya)",
  "Chinese Dialect Heritage",
  "Indian & South Asian Heritage",
] as const;

type CategoryName = (typeof CATEGORY_ORDER)[number];
type FilterValue = "All" | CategoryName;

const CATEGORY_META: Record<
  CategoryName,
  { moodLine: string; icon: string }
> = {
  "Singaporean Classics": {
    moodLine: "No passport required. No explanation needed.",
    icon: "🇸🇬",
  },
  "Malay & Muslim Heritage": {
    moodLine: "Cooked before sunrise. Eaten by everyone.",
    icon: "🌙",
  },
  "Peranakan (Nyonya)": {
    moodLine: "Five generations of flavour. Nothing written down.",
    icon: "🌺",
  },
  "Chinese Dialect Heritage": {
    moodLine: "The dialects may be different. The queue is the same.",
    icon: "🫙",
  },
  "Indian & South Asian Heritage": {
    moodLine: "Spiced, pulled, fried, and absolutely non-negotiable.",
    icon: "🪔",
  },
};

function CategoryHeading({ category }: { category: CategoryName }) {
  const meta = CATEGORY_META[category];
  return (
    <div className="mt-16 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{meta.icon}</span>
        <h2 className="text-2xl font-bold text-white">{category}</h2>
      </div>
      <p className="text-sf-primary text-sm font-medium italic ml-11">
        {meta.moodLine}
      </p>
      <div className="w-12 h-px bg-sf-primary mt-3 ml-11" />
    </div>
  );
}

export default function FoodHeritagePage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const contentRef = useRef<HTMLDivElement | null>(null);

  const dishesByCategory = useMemo(() => {
    const map = new Map<CategoryName, (typeof FOOD_HERITAGE_DISHES)[number][]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const dish of FOOD_HERITAGE_DISHES) {
      const c = dish.category as CategoryName;
      if (map.has(c)) map.get(c)!.push(dish);
    }
    return map;
  }, []);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeFilter]);

  const visibleCategories: CategoryName[] =
    activeFilter === "All"
      ? [...CATEGORY_ORDER]
      : ([activeFilter] as CategoryName[]);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-sf-primary uppercase mb-3">
          ShiokFlavour
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Singapore Food Heritage
        </h1>
        <p className="text-sf-muted max-w-2xl text-base leading-relaxed">
          Singapore&apos;s hawker culture joined UNESCO&apos;s list of Intangible
          Cultural Heritage in 2020. These dishes tell that story on every plate
          — skilled cooks, affordable feasts, and generations of flavour passed
          down in our hawker centres and kopitiams.
        </p>
      </section>

      {/* STICKY FILTER BAR */}
      <div className="sticky top-[57px] z-40 bg-sf-bg/90 backdrop-blur border-b border-white/5">
        <div className="overflow-x-auto flex gap-2 px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
          {(["All", ...CATEGORY_ORDER] as const).map((value) => {
            const active = activeFilter === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setActiveFilter(value)}
                className={
                  active
                    ? "bg-sf-primary text-white rounded-full px-4 py-1.5 text-xs font-semibold"
                    : "bg-white/5 text-sf-muted hover:bg-white/10 rounded-full px-4 py-1.5 text-xs font-semibold"
                }
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-32"
      >
        {visibleCategories.map((category) => {
          const dishes = dishesByCategory.get(category) ?? [];

          const showHeading = activeFilter === "All";
          return (
            <section key={category}>
              {showHeading && <CategoryHeading category={category} />}
              <div className="mt-4">
                {dishes.map((dish, index) => (
                  <Link
                    key={dish.slug}
                    href={`/food-heritage/${dish.slug}`}
                    className="group flex flex-col sm:flex-row mb-3 rounded-2xl overflow-hidden bg-[#1a1a1a] hover:ring-1 hover:ring-sf-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* IMAGE — left if even, right if odd via order classes */}
                    <div
                      className={`relative w-full sm:w-2/5 h-56 sm:h-52 flex-shrink-0 overflow-hidden ${
                        index % 2 !== 0 ? "sm:order-last" : ""
                      }`}
                    >
                      <Image
                        src={dish.imageUrl}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {dish.halal && (
                        <span className="absolute top-3 left-3 text-[10px] font-bold bg-green-700 text-white px-2 py-0.5 rounded-full">
                          Halal
                        </span>
                      )}
                    </div>

                    {/* TEXT — right if even, left if odd */}
                    <div
                      className={`flex flex-col justify-center px-6 py-6 sm:py-0 ${
                        index % 2 !== 0 ? "sm:order-first" : ""
                      }`}
                    >
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-sf-primary uppercase mb-1">
                        {dish.category}
                      </p>
                      <h3 className="text-white font-bold text-lg leading-snug group-hover:text-sf-primary transition-colors duration-200 mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-sf-muted text-sm leading-relaxed line-clamp-3 mb-2">
                        {dish.description.slice(0, 140)}...
                      </p>
                      <p className="text-sf-muted text-xs mb-2">
                        {dish.priceRange}
                      </p>
                      <span className="text-sf-primary text-xs font-semibold group-hover:underline">
                        Explore dish →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

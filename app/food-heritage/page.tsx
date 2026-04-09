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

function clampText(text: string, maxChars: number) {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= maxChars) return t;
  return `${t.slice(0, maxChars).trim()}...`;
}

function spiceLevelToCount(spiceLevel: string) {
  if (spiceLevel.includes("Hot")) return 3;
  if (spiceLevel.includes("Medium")) return 2;
  if (spiceLevel.includes("Mild")) return 1;
  if (spiceLevel.includes("Adventure")) return 3;
  return 0; // "None 😌" or anything else
}

function spiceBadgeText(spiceLevel: string) {
  const count = spiceLevelToCount(spiceLevel);
  return count === 0 ? "" : "🌶️".repeat(count);
}

function SharedDishCard({
  dish,
  imageHeightClassName,
  imageHeightStyle,
  descriptionChars = 80,
  nameClassName = "text-white font-semibold text-sm leading-snug mb-1 group-hover:text-sf-primary transition-colors",
  showPriceBadge,
  descriptionClassName = "text-sf-muted text-xs leading-relaxed",
  showIndianSpiceRow,
}: {
  dish: (typeof FOOD_HERITAGE_DISHES)[number];
  imageHeightClassName?: string;
  imageHeightStyle?: React.CSSProperties;
  descriptionChars?: number;
  nameClassName?: string;
  showPriceBadge?: boolean;
  descriptionClassName?: string;
  showIndianSpiceRow?: boolean;
}) {
  const spice = spiceBadgeText(dish.spiceLevel);
  const spiceCount = spiceLevelToCount(dish.spiceLevel);

  return (
    <Link
      href={`/food-heritage/${dish.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-[#1e1e1e] hover:ring-1 hover:ring-sf-primary/40 transition-all duration-300 cursor-pointer"
    >
      <div
        className={`relative w-full overflow-hidden ${imageHeightClassName ?? ""}`}
        style={imageHeightStyle}
      >
        <Image
          src={dish.imageUrl}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          {dish.halal && (
            <span className="bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              Halal
            </span>
          )}
        </div>

        {!showIndianSpiceRow && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] bg-black/50 px-1.5 py-0.5 rounded-full text-white">
              {spice}
            </span>
          </div>
        )}

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <p className="text-[11px] text-white/80 italic line-clamp-2">
            {dish.localSay}
          </p>
        </div>
      </div>

      <div className="p-4">
        {showPriceBadge && (
          <span className="bg-sf-primary/10 text-sf-primary text-xs px-3 py-1 rounded-full inline-block mb-2">
            {dish.priceRange}
          </span>
        )}

        <h3 className={nameClassName}>{dish.name}</h3>
        <p className="text-sf-primary text-[10px] font-semibold uppercase tracking-wider mb-2">
          {dish.category}
        </p>

        {showIndianSpiceRow ? (
          <div className="mb-2 flex items-center gap-1 text-sm">
            {Array.from({ length: 3 }).map((_, i) => {
              const filled = i < spiceCount;
              return (
                <span
                  key={i}
                  className={filled ? "text-orange-400" : "text-white/20"}
                >
                  {filled ? "🌶️" : "○"}
                </span>
              );
            })}
          </div>
        ) : null}

        <p className={descriptionClassName}>
          {clampText(dish.description, descriptionChars)}
        </p>
      </div>
    </Link>
  );
}

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

          if (category === "Singaporean Classics") {
            const hero = dishes[0];
            const rest = dishes.slice(1);

            return (
              <section key={category}>
                {showHeading && <CategoryHeading category={category} />}

                {hero ? (
                  <SharedDishCard
                    dish={hero}
                    imageHeightClassName="h-72 sm:h-96"
                    descriptionChars={150}
                    showPriceBadge
                    nameClassName="text-white font-bold text-xl leading-snug mb-2 group-hover:text-sf-primary transition-colors"
                    descriptionClassName="text-sf-muted text-sm leading-relaxed"
                  />
                ) : null}

                {rest.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {rest.map((dish) => (
                      <SharedDishCard
                        key={dish.slug}
                        dish={dish}
                        imageHeightClassName="h-44"
                      />
                    ))}
                  </div>
                ) : null}
              </section>
            );
          }

          if (category === "Malay & Muslim Heritage") {
            return (
              <section key={category}>
                {showHeading && <CategoryHeading category={category} />}

                <div className="mt-4">
                  {dishes.map((dish, i) => {
                    const reverse = i % 2 === 1;
                    const spice = spiceBadgeText(dish.spiceLevel);

                    return (
                      <Link
                        key={dish.slug}
                        href={`/food-heritage/${dish.slug}`}
                        className={`flex flex-col sm:flex-row gap-4 mb-4 rounded-2xl overflow-hidden bg-[#1e1e1e] hover:ring-1 hover:ring-sf-primary/40 transition-all duration-300 group cursor-pointer ${
                          reverse ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="relative w-full sm:w-2/5 h-52 sm:h-48 flex-shrink-0 overflow-hidden">
                          <Image
                            src={dish.imageUrl}
                            alt={dish.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        </div>

                        <div className="flex flex-col justify-center p-5 sm:p-6">
                          <p className="text-sf-primary text-[10px] uppercase tracking-widest font-semibold mb-1">
                            {dish.category}
                          </p>
                          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sf-primary transition-colors">
                            {dish.name}
                          </h3>
                          <p className="text-sf-muted text-sm leading-relaxed mb-3">
                            {clampText(dish.description, 120)}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {dish.halal && (
                              <span className="bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Halal
                              </span>
                            )}
                            <span className="text-[10px] bg-black/50 px-1.5 py-0.5 rounded-full text-white">
                              {spice}
                            </span>
                          </div>

                          <span className="text-sf-primary text-xs font-semibold mt-auto">
                            Explore →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          }

          if (category === "Peranakan (Nyonya)") {
            return (
              <section key={category}>
                {showHeading && <CategoryHeading category={category} />}

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-4">
                  {dishes.map((dish, i) => {
                    const height =
                      i % 3 === 0 ? 256 : i % 3 === 1 ? 192 : 224; // 64/48/56 * 4

                    return (
                      <div
                        key={dish.slug}
                        className="break-inside-avoid mb-4"
                      >
                        <SharedDishCard
                          dish={dish}
                          imageHeightStyle={{ height }}
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          }

          if (category === "Chinese Dialect Heritage") {
            return (
              <section key={category}>
                {showHeading && <CategoryHeading category={category} />}
                {showHeading ? (
                  <p className="text-sf-muted text-xs text-center mb-4">
                    ← scroll to explore →
                  </p>
                ) : null}

                <div className="overflow-x-auto pb-4 -mx-4 px-4">
                  <div className="flex gap-4 w-max">
                    {dishes.map((dish) => (
                      <div key={dish.slug} className="w-64 flex-shrink-0">
                        <SharedDishCard
                          dish={dish}
                          imageHeightClassName="h-48"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Indian & South Asian Heritage
          return (
            <section key={category}>
              {showHeading && <CategoryHeading category={category} />}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {dishes.map((dish) => (
                  <SharedDishCard
                    key={dish.slug}
                    dish={dish}
                    imageHeightClassName="h-52"
                    showIndianSpiceRow
                    descriptionChars={80}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

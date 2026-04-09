"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { FOOD_HERITAGE_DISHES } from "@/app/lib/food-heritage";

const CATEGORY_ORDER = [
  "Singaporean Classics",
  "Malay & Muslim Heritage",
  "Peranakan (Nyonya)",
  "Chinese Dialect Heritage",
  "Indian & South Asian Heritage",
] as const;

type CategoryName = (typeof CATEGORY_ORDER)[number];

const categories = [
  {
    name: "Singaporean Classics",
    imageUrl: "/images/food/chicken-rice.jpg",
    moodLine: "No passport required. No explanation needed.",
    dishTeaser: "Chicken Rice · Char Kway Teow · Satay · Hokkien Mee · and 10 more",
  },
  {
    name: "Malay & Muslim Heritage",
    imageUrl: "/images/food/nasi-lemak.jpg",
    moodLine: "Cooked before sunrise. Eaten by everyone.",
    dishTeaser: "Nasi Lemak · Murtabak · Nasi Padang · Mee Rebus · and 3 more",
  },
  {
    name: "Peranakan (Nyonya)",
    imageUrl: "/images/food/ondeh-ondeh.jpg",
    moodLine: "Five generations of flavour. Nothing written down.",
    dishTeaser: "Ayam Buah Keluak · Ondeh Ondeh · Kueh Pie Tee · Ngoh Hiang",
  },
  {
    name: "Chinese Dialect Heritage",
    imageUrl: "/images/food/bak-kut-teh.jpg",
    moodLine: "The dialects may be different. The queue is the same.",
    dishTeaser: "Bak Kut Teh · Lor Mee · Hae Mee · Yong Tau Foo · Bak Chang",
  },
  {
    name: "Indian & South Asian Heritage",
    imageUrl: "/images/food/roti-prata.jpg",
    moodLine: "Spiced, pulled, fried, and absolutely non-negotiable.",
    dishTeaser: "Roti Prata · Fish Head Curry · Biryani · Teh Tarik · and 2 more",
  },
] as const satisfies readonly {
  name: CategoryName;
  imageUrl: string;
  moodLine: string;
  dishTeaser: string;
}[];

function spiceLevelToDots(spiceLevel: string) {
  if (spiceLevel === "Hot" || spiceLevel === "Adventure") return 3;
  if (spiceLevel === "Medium") return 2;
  if (spiceLevel === "Mild") return 1;
  return 0;
}

export default function FoodHeritagePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    dishCount: FOOD_HERITAGE_DISHES.filter((d) => d.category === cat.name).length,
  }));

  const dishesInActiveCategory = activeCategory
    ? FOOD_HERITAGE_DISHES.filter((d) => d.category === activeCategory)
    : [];

  const activeMoodLine = activeCategory
    ? (categories.find((c) => c.name === activeCategory)?.moodLine ?? "")
    : "";

  if (activeCategory) {
    return (
      <div>
        <SiteHeader />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
        {/* Back button */}
        <button
          onClick={() => setActiveCategory(null)}
          className="flex items-center gap-2 text-sf-muted hover:text-white text-sm mb-10 transition-colors group"
          type="button"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>
          <span>All cuisines</span>
        </button>

        {/* Category header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
            Food Heritage
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            {activeCategory}
          </h2>
          <p className="text-sf-muted italic text-base">{activeMoodLine}</p>
          <div className="w-8 h-px bg-sf-primary mt-5" />
        </div>

        {/* Dish grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dishesInActiveCategory.map((dish) => {
            const level = spiceLevelToDots(dish.spiceLevel);
            return (
              <Link
                key={dish.slug}
                href={`/food-heritage/${dish.slug}`}
                className="group rounded-2xl overflow-hidden bg-[#1a1a1a] hover:ring-1 hover:ring-sf-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {dish.halal && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold bg-green-700 text-white px-2 py-0.5 rounded-full">
                      Halal
                    </span>
                  )}
                  {/* Spice dots */}
                  <div className="absolute top-3 right-3 flex gap-0.5">
                    {[1, 2, 3].map((dot) => (
                      <span
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${
                          dot <= level ? "bg-sf-primary" : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* Text */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-base leading-snug mb-1 group-hover:text-sf-primary transition-colors duration-200">
                    {dish.name}
                  </h3>
                  <p className="text-sf-muted text-xs leading-relaxed line-clamp-2 mb-3">
                    {dish.description.slice(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sf-muted text-xs">
                      {dish.priceRange}
                    </span>
                    <span className="text-sf-primary text-xs font-semibold group-hover:underline">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SiteHeader />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] text-sf-primary uppercase mb-6">
          Food Heritage
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.0] mb-10 max-w-4xl">
          Singapore&apos;s
          <br />
          Food Heritage
        </h1>

        <div className="border-l-2 border-sf-primary pl-6 mb-12 max-w-2xl">
          <p className="text-white/80 text-xl sm:text-2xl italic leading-relaxed font-light">
            &quot;Some cultures write their history in stone. Singapore writes it
            in broth, sambal, and wok hei.&quot;
          </p>
        </div>

        <div className="max-w-2xl space-y-5 mb-12">
          <p className="text-sf-muted text-base sm:text-lg leading-relaxed">
            Singapore does not have a national monument that tells you who we are.
            We have a plate of chicken rice. A bowl of laksa. A roti prata folded
            at 5am by someone who has been doing it for forty years.
          </p>
          <p className="text-sf-muted text-base sm:text-lg leading-relaxed">
            These are not just dishes. They are the accumulated decisions of every
            immigrant community that came to this island, cooked what they knew,
            and fed their neighbours without asking where they were from. The
            hawker centre is not where Singapore goes to eat. It is where Singapore
            goes to be itself.
          </p>
          <p className="text-sf-muted text-base sm:text-lg leading-relaxed">
            UNESCO recognised Singapore&apos;s hawker culture as Intangible Cultural
            Heritage in 2020. The uncles and aunties already knew.
          </p>
        </div>

        <div className="w-full h-px bg-white/5 mb-10" />

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-5xl font-bold text-white">38</p>
            <p className="text-xs text-sf-muted uppercase tracking-[0.15em] mt-2">
              Heritage Dishes
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">5</p>
            <p className="text-xs text-sf-muted uppercase tracking-[0.15em] mt-2">
              Cultural Lineages
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">2020</p>
            <p className="text-xs text-sf-muted uppercase tracking-[0.15em] mt-2">
              UNESCO Recognised
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoriesWithCounts.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer text-left w-full"
              type="button"
            >
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Strong gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Dish count pill */}
                <div className="inline-flex items-center gap-1.5 bg-sf-primary/20 border border-sf-primary/30 rounded-full px-3 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sf-primary" />
                  <span className="text-sf-primary text-[10px] font-bold tracking-widest uppercase">
                    {cat.dishCount} dishes
                  </span>
                </div>

                {/* Category name */}
                <h2 className="text-white font-bold text-xl leading-tight mb-1 group-hover:text-sf-primary transition-colors duration-200">
                  {cat.name}
                </h2>

                {/* Mood line */}
                <p className="text-white/50 text-xs italic leading-relaxed mb-3">
                  {cat.moodLine}
                </p>

                {/* Dish teaser */}
                <p className="text-white/40 text-[11px] leading-relaxed mb-4 line-clamp-1">
                  {cat.dishTeaser}
                </p>

                {/* Explore CTA — appears on hover */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-5 h-px bg-sf-primary" />
                  <span className="text-sf-primary text-xs font-bold tracking-widest uppercase">
                    Explore
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

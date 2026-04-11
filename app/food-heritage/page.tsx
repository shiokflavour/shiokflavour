"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FOOD_HERITAGE_DISHES } from "@/app/lib/food-heritage";
import ChopstickDivider from "@/app/components/chopstick-divider";

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
    name: "Singaporean Classics" satisfies CategoryName,
    slug: "singaporean-classics",
    imageUrl: "/images/food/chicken-rice.jpg",
    moodLine: "No passport required. No explanation needed.",
    dishTeaser: "Chicken Rice · Char Kway Teow · Satay · Hokkien Mee · and 10 more",
  },
  {
    name: "Malay & Muslim Heritage" satisfies CategoryName,
    slug: "malay-muslim-heritage",
    imageUrl: "/images/food/nasi-lemak.jpg",
    moodLine: "Cooked before sunrise. Eaten by everyone.",
    dishTeaser: "Nasi Lemak · Murtabak · Nasi Padang · Mee Rebus · and 3 more",
  },
  {
    name: "Peranakan (Nyonya)" satisfies CategoryName,
    slug: "peranakan-nyonya",
    imageUrl: "/images/food/ondeh-ondeh.jpg",
    moodLine: "Five generations of flavour. Nothing written down.",
    dishTeaser: "Ayam Buah Keluak · Ondeh Ondeh · Kueh Pie Tee · Ngoh Hiang",
  },
  {
    name: "Chinese Dialect Heritage" satisfies CategoryName,
    slug: "chinese-dialect-heritage",
    imageUrl: "/images/food/bak-kut-teh.jpg",
    moodLine: "The dialects may be different. The queue is the same.",
    dishTeaser: "Bak Kut Teh · Lor Mee · Hae Mee · Yong Tau Foo · Bak Chang",
  },
  {
    name: "Indian & South Asian Heritage" satisfies CategoryName,
    slug: "indian-south-asian-heritage",
    imageUrl: "/images/food/roti-prata.jpg",
    moodLine: "Spiced, pulled, fried, and absolutely non-negotiable.",
    dishTeaser: "Roti Prata · Fish Head Curry · Biryani · Teh Tarik · and 2 more",
  },
] as const;

function spiceLevelToDots(spiceLevel: string) {
  if (spiceLevel === "Hot" || spiceLevel === "Adventure") return 3;
  if (spiceLevel === "Medium") return 2;
  if (spiceLevel === "Mild") return 1;
  return 0;
}

function FoodHeritagePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");

  const categoriesWithDishes = categories.map((cat) => {
    const dishes = FOOD_HERITAGE_DISHES.filter((d) => d.category === cat.name);
    return {
      ...cat,
      tagline: cat.moodLine,
      dishCount: dishes.length,
      dishes,
    };
  });

  const activeCat = categorySlug
    ? categoriesWithDishes.find((c) => c.slug === categorySlug)
    : undefined;

  const dishesInActiveCategory = activeCat?.dishes ?? [];

  const activeMoodLine = activeCat?.moodLine ?? "";

  if (categorySlug && activeCat) {
    return (
      <div>
        <SiteHeader />

        <div className="mx-auto max-w-7xl px-4 pb-32 pt-8 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/food-heritage")}
            className="group mb-10 flex items-center gap-2 text-sm text-sf-muted transition-colors hover:text-white"
            type="button"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>All cuisines</span>
          </button>

          <div className="mb-12">
            <p className="mb-3 text-[15px] font-semibold uppercase tracking-[0.2em] text-sf-primary">
              Food Heritage
            </p>
            <h2 className="mb-3 text-4xl font-bold text-white sm:text-5xl">
              {activeCat.name}
            </h2>
            <p className="text-base italic text-sf-muted">{activeMoodLine}</p>
            <div className="mt-5 h-px w-8 bg-sf-primary" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishesInActiveCategory.map((dish) => {
              const level = spiceLevelToDots(dish.spiceLevel);
              return (
                <Link
                  key={dish.slug}
                  href={`/food-heritage/${dish.slug}`}
                  className="group overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:ring-1 hover:ring-sf-primary/30"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={dish.imageUrl}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {dish.halal && (
                      <span className="absolute left-3 top-3 rounded-full bg-green-700 px-2 py-0.5 text-[15px] font-bold text-white">
                        Halal
                      </span>
                    )}
                    <div className="absolute right-3 top-3 flex gap-0.5">
                      {[1, 2, 3].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 w-1.5 rounded-full ${
                            dot <= level ? "bg-sf-primary" : "bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-base font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-sf-primary">
                      {dish.name}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-[15px] leading-relaxed text-sf-muted">
                      {dish.description.slice(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] text-sf-muted">
                        {dish.priceRange}
                      </span>
                      <span className="text-[15px] font-semibold text-sf-primary group-hover:underline">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div>
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <p className="mb-6 text-[15px] font-semibold uppercase tracking-[0.25em] text-sf-primary">
          Food Heritage
        </p>

        <h1 className="mb-10 max-w-4xl text-5xl font-bold leading-[1.0] text-white sm:text-6xl lg:text-8xl">
          Singapore&apos;s
          <br />
          Food Heritage
        </h1>

        <div className="mb-12 max-w-2xl border-l-2 border-sf-primary pl-6">
          <p className="text-xl font-light italic leading-relaxed text-white/80 sm:text-2xl">
            &quot;Some cultures write their history in stone. Singapore writes it
            in broth, sambal, and wok hei.&quot;
          </p>
        </div>

        <div className="mb-12 max-w-2xl space-y-5">
          <p className="text-base leading-relaxed text-sf-muted sm:text-lg">
            Singapore does not have a national monument that tells you who we are.
            We have a plate of chicken rice. A bowl of laksa. A roti prata folded
            at 5am by someone who has been doing it for forty years.
          </p>
          <p className="text-base leading-relaxed text-sf-muted sm:text-lg">
            These are not just dishes. They are the accumulated decisions of every
            immigrant community that came to this island, cooked what they knew,
            and fed their neighbours without asking where they were from. The
            hawker centre is not where Singapore goes to eat. It is where Singapore
            goes to be itself.
          </p>
          <p className="text-base leading-relaxed text-sf-muted sm:text-lg">
            UNESCO recognised Singapore&apos;s hawker culture as Intangible Cultural
            Heritage in 2020. The uncles and aunties already knew.
          </p>
        </div>

        <div className="mb-10 h-px w-full bg-white/5" />

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-5xl font-bold text-white">38</p>
            <p className="mt-2 text-[15px] uppercase tracking-[0.15em] text-sf-muted">
              Heritage Dishes
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">5</p>
            <p className="mt-2 text-[15px] uppercase tracking-[0.15em] text-sf-muted">
              Cultural Lineages
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">2020</p>
            <p className="mt-2 text-[15px] uppercase tracking-[0.15em] text-sf-muted">
              UNESCO Recognised
            </p>
          </div>
        </div>
      </section>

      <ChopstickDivider />

      {categoriesWithDishes.map((category) => (
        <section key={category.slug} className="mb-16">
          <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  {category.dishCount} Dishes
                </p>
                <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                  {category.name}
                </h2>
                <p className="text-base text-white/50">{category.tagline}</p>
              </div>
              <Link
                href={`/food-heritage?category=${category.slug}`}
                className="mb-1 flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-sf-primary hover:underline"
              >
                Explore all {category.dishCount} dishes
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-4 h-px w-12 bg-sf-primary" />
          </div>

          <div className="px-4 sm:px-6 lg:px-8">
            <div
              className="hide-scrollbar flex gap-4 overflow-x-auto pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <Link
                href={`/food-heritage?category=${category.slug}`}
                className="group flex h-36 w-48 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-[#1a1a1a] transition-all hover:border-sf-primary/50 sm:h-44 sm:w-56"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-sf-primary transition-all group-hover:bg-sf-primary">
                  <svg
                    className="h-4 w-4 text-sf-primary transition-colors group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <p className="text-center text-sm font-semibold text-white">
                  See all {category.dishCount} dishes
                </p>
                <p className="mt-1 text-xs text-white/40">{category.name}</p>
              </Link>

              {category.dishes.map((dish) => (
                <Link
                  key={dish.slug}
                  href={`/food-heritage/${dish.slug}`}
                  className="group w-48 flex-shrink-0 sm:w-56"
                >
                  <div className="relative mb-3 h-36 overflow-hidden rounded-xl sm:h-44">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {dish.spiceLevel === "Hot" && (
                      <div className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                        Hot
                      </div>
                    )}
                    {dish.halal && (
                      <div className="absolute right-2 top-2 rounded-full bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
                        Halal
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-white transition-colors group-hover:text-sf-primary">
                    {dish.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/40">
                    {dish.description.length > 60
                      ? `${dish.description.slice(0, 60)}...`
                      : dish.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <SiteFooter />
    </div>
  );
}

export default function FoodHeritagePage() {
  return (
    <Suspense fallback={null}>
      <FoodHeritagePageContent />
    </Suspense>
  );
}

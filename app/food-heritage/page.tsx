import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { FOOD_HERITAGE_DISHES } from "../lib/food-heritage";

export const metadata: Metadata = {
  title: "Singapore Food Heritage | ShiokFlavour",
  description:
    "Explore iconic Singapore dishes tied to UNESCO-recognised hawker culture—char kway teow, chicken rice, laksa, and more.",
};

export default function FoodHeritagePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
              ShiokFlavour
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-sf-cream sm:text-5xl">
              Singapore Food Heritage
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-sf-muted">
              Singapore&apos;s hawker culture joined UNESCO&apos;s list of
              Intangible Cultural Heritage in 2020. These dishes tell that story
              on every plate—skilled cooks, affordable feasts, and generations
              of flavour passed down in our hawker centres and kopitiams.
            </p>
          </header>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FOOD_HERITAGE_DISHES.map((dish) => (
              <li key={dish.slug}>
                <Link
                  href={`/food-heritage/${dish.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-sf-surface transition hover:border-sf-primary/40 hover:shadow-lg hover:shadow-sf-primary/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={dish.imageUrl}
                      alt={dish.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sf-bg/80 via-transparent to-transparent" />
                    {dish.halal ? (
                      <span className="absolute right-3 top-3 rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-xs font-semibold text-white">
                        Halal friendly
                      </span>
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-sf-cream group-hover:text-sf-primary">
                      {dish.name}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sf-muted">
                      {dish.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

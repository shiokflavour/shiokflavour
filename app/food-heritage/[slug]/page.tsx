import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import {
  getAllFoodHeritageSlugs,
  getDishBySlug,
} from "../../lib/food-heritage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllFoodHeritageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) {
    return { title: "Dish not found | ShiokFlavour" };
  }
  return {
    title: `${dish.name} | Singapore Food Heritage | ShiokFlavour`,
    description: dish.description.slice(0, 155).trim() + "…",
    openGraph: {
      title: `${dish.name} | Singapore Food Heritage`,
      description: dish.description.slice(0, 200),
      images: [{ url: dish.imageUrl, alt: dish.name }],
    },
  };
}

export default async function FoodHeritageDishPage({ params }: Props) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) notFound();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-[min(55vh,520px)] w-full">
          <Image
            src={dish.imageUrl}
            alt={dish.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sf-bg via-sf-bg/40 to-transparent" />
        </div>

        <article className="relative -mt-24 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/food-heritage"
              className="inline-flex items-center gap-1 text-sm font-medium text-sf-primary hover:underline"
            >
              ← Singapore Food Heritage
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-sf-cream sm:text-5xl">
                {dish.name}
              </h1>
              {dish.halal ? (
                <span className="rounded-full bg-emerald-600/25 px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                  Halal friendly
                </span>
              ) : null}
            </div>

            <p className="mt-2 text-sm uppercase tracking-wider text-sf-muted">
              Origin: {dish.origin}
            </p>

            <section className="mt-10 space-y-4">
              <h2 className="text-xl font-semibold text-sf-primary">Story</h2>
              <div className="space-y-4 leading-relaxed text-sf-muted">
                {dish.description.split("\n\n").map((para, i) => (
                  <p key={`${dish.slug}-p-${i}`}>{para}</p>
                ))}
              </div>
            </section>

            <section className="mt-10 rounded-2xl border border-white/[0.08] bg-sf-surface p-6">
              <h2 className="text-xl font-semibold text-sf-cream">
                Where to find the best in Singapore
              </h2>
              <p className="mt-3 leading-relaxed text-sf-muted">
                {dish.whereToFind}
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-sf-primary">
                Price range
              </h2>
              <p className="mt-2 text-lg text-sf-cream">{dish.priceRange}</p>
            </section>

            <aside className="mt-10 rounded-2xl border border-sf-primary/35 bg-sf-primary/10 p-6">
              <h2 className="text-lg font-semibold text-sf-primary">
                Fun fact
              </h2>
              <p className="mt-2 leading-relaxed text-sf-cream">
                {dish.funFact}
              </p>
            </aside>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-sf-primary">
                Best paired with
              </h2>
              <p className="mt-2 leading-relaxed text-sf-muted">
                {dish.bestPairedWith}
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

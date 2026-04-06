import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { getFeaturedHawkerBySlug } from "../../lib/featured-hawkers";
import {
  FOOD_HERITAGE_DISHES,
  getAllFoodHeritageSlugs,
  getDishBySlug,
  pickShiokFactorSentence,
} from "../../lib/food-heritage";
import { FoodHeritageHeroImage } from "../food-heritage-hero-image";

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

function pairedWithTags(text: string): string[] {
  return text
    .split(",")
    .map((s) => s.replace(/^\s*and\s+/i, "").trim())
    .filter(Boolean);
}

function otherHeritageDishes(currentSlug: string, count: number) {
  return FOOD_HERITAGE_DISHES.filter((d) => d.slug !== currentSlug).slice(
    0,
    count,
  );
}

function hawkerCentreLabel(slug: string): string {
  const h = getFeaturedHawkerBySlug(slug);
  if (h) return h.name;
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function FoodHeritageDishPage({ params }: Props) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) notFound();

  const related = otherHeritageDishes(dish.slug, 3);
  const tags = pairedWithTags(dish.bestPairedWith);
  const shiok = pickShiokFactorSentence(dish.description);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative w-full overflow-hidden aspect-[16/6]">
          <FoodHeritageHeroImage
            src={dish.imageUrl}
            alt={dish.name}
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sf-bg via-sf-bg/75 to-sf-bg/20"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-6 sm:pb-10 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <h1 className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl lg:text-5xl">
                {dish.name}
              </h1>
              <p className="mt-2 max-w-3xl text-sm font-medium uppercase tracking-wider text-sf-muted sm:text-base sm:normal-case sm:tracking-normal sm:text-sf-cream/90">
                {dish.origin}
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-white/[0.06] bg-sf-bg">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full bg-sf-primary px-4 py-2 text-sm font-semibold text-white">
              {dish.spiceLevel}
            </span>
            <span className="inline-flex rounded-full bg-sf-surface px-4 py-2 text-sm font-semibold text-sf-cream ring-1 ring-white/15">
              {dish.difficulty}
            </span>
            {dish.halal ? (
              <span className="inline-flex rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white">
                Halal Friendly
              </span>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/food-heritage"
              className="inline-flex items-center gap-1 text-sm font-medium text-sf-primary hover:underline"
            >
              ← Singapore Food Heritage
            </Link>

            <aside className="mt-8 rounded-2xl border border-white/[0.08] bg-sf-surface p-6 sm:p-8">
              <p className="text-sm font-semibold text-sf-primary">
                Locals Say 🗣️
              </p>
              <div className="relative mt-5">
                <span
                  className="font-serif text-5xl leading-none text-sf-primary sm:text-6xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="-mt-2 pl-1 text-lg italic leading-relaxed text-white sm:pl-2 sm:text-xl">
                  {dish.localSay}
                </p>
                <span
                  className="-mt-2 block text-right font-serif text-5xl leading-none text-sf-primary sm:text-6xl"
                  aria-hidden
                >
                  &rdquo;
                </span>
              </div>
            </aside>

            <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <h2 className="text-xl font-semibold text-sf-primary">
                    Story
                  </h2>
                  <div className="mt-5 space-y-5 text-lg leading-relaxed text-sf-muted">
                    {shiok.before ? (
                      <p className="whitespace-pre-line">{shiok.before}</p>
                    ) : null}
                    {shiok.quote ? (
                      <blockquote className="relative border-l-4 border-sf-primary py-2 pl-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
                          Shiok Factor
                        </p>
                        <p className="mt-2 text-xl font-medium italic text-sf-primary sm:text-2xl">
                          {shiok.quote}
                        </p>
                      </blockquote>
                    ) : null}
                    {shiok.after ? (
                      <p className="whitespace-pre-line">{shiok.after}</p>
                    ) : null}
                  </div>
                </section>

                <section className="rounded-2xl border-2 border-sf-primary/50 bg-sf-surface/50 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-sf-cream">
                    Where to Find the Best
                  </h2>
                  <p className="mt-4 leading-relaxed text-sf-muted">
                    {dish.whereToFind}
                  </p>
                </section>

                <aside className="rounded-2xl border border-white/[0.08] bg-sf-surface p-6 sm:p-8">
                  <p className="text-sm font-semibold text-sf-primary">
                    <span className="mr-2" aria-hidden>
                      💡
                    </span>
                    Fun fact
                  </p>
                  <p className="mt-3 leading-relaxed text-sf-cream">
                    {dish.funFact}
                  </p>
                </aside>

                <section>
                  <h2 className="text-xl font-semibold text-sf-primary">
                    Best Paired With
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-sf-cream">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="lg:col-span-1">
                <aside className="sticky top-24 space-y-6 rounded-2xl border border-white/[0.08] bg-sf-surface p-6">
                  <h2 className="text-lg font-semibold text-sf-cream">
                    Quick Facts
                  </h2>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="font-medium text-sf-muted">
                        Price range
                      </dt>
                      <dd className="mt-1 text-sf-cream">{dish.priceRange}</dd>
                    </div>
                    {dish.halal ? (
                      <div>
                        <dt className="font-medium text-sf-muted">
                          Dietary
                        </dt>
                        <dd className="mt-1">
                          <span className="inline-flex rounded-full bg-emerald-600/25 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                            Halal friendly
                          </span>
                        </dd>
                      </div>
                    ) : null}
                    <div>
                      <dt className="font-medium text-sf-muted">Origin</dt>
                      <dd className="mt-1 leading-relaxed text-sf-cream">
                        {dish.origin}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    href="/hawker-centres"
                    className="flex w-full items-center justify-center rounded-xl bg-sf-primary px-4 py-3 text-center text-base font-semibold text-white transition hover:opacity-90"
                  >
                    Find Hawker Centres
                  </Link>
                </aside>
              </div>
            </div>

            <section className="mt-16 border-t border-white/10 pt-14">
              <h2 className="text-2xl font-bold tracking-tight text-sf-cream">
                Find It At These Hawker Centres
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dish.hawkersThatServeIt.map((hawkerSlug) => (
                  <li key={hawkerSlug}>
                    <Link
                      href={`/hawker/${hawkerSlug}`}
                      className="group flex h-full flex-col justify-center rounded-2xl border border-white/[0.1] bg-sf-surface p-5 transition hover:border-sf-primary/45 hover:bg-sf-surface/80"
                    >
                      <span className="font-semibold text-sf-cream group-hover:text-sf-primary">
                        {hawkerCentreLabel(hawkerSlug)}
                      </span>
                      <span className="mt-2 text-xs text-sf-muted">
                        View hawker centre →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16 border-t border-white/10 pt-14">
              <h2 className="text-2xl font-bold tracking-tight text-sf-cream">
                More Singapore Heritage Dishes
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/food-heritage/${r.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-sf-surface transition hover:border-sf-primary/40"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={r.imageUrl}
                          alt={r.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-sf-cream group-hover:text-sf-primary">
                          {r.name}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm text-sf-muted">
                          {r.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { fetchHawkerByIdFromApi } from "../../lib/hawker-api";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hawker = await fetchHawkerByIdFromApi(id);
  if (!hawker) return { title: "Not found | ShiokFlavour" };
  return {
    title: `${hawker.name} | ShiokFlavour`,
    description: hawker.address,
  };
}

export default async function HawkerDetailPage({ params }: Props) {
  const { id } = await params;
  const hawker = await fetchHawkerByIdFromApi(id);
  if (!hawker) notFound();

  const stallsLabel =
    hawker.noOfStalls != null && hawker.noOfStalls > 0
      ? hawker.noOfStalls.toLocaleString("en-SG")
      : "Not listed";

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
            {hawker.region} region
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
            {hawker.name}
          </h1>
          <p className="mt-6 leading-relaxed text-sf-muted">{hawker.address}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-sf-surface/40 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-sf-muted">
              Cooked food stalls (dataset)
            </p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-sf-primary">
              {stallsLabel}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-sf-primary bg-transparent px-6 text-sm font-semibold text-sf-cream transition hover:bg-sf-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              ← Back to homepage
            </Link>
            <Link
              href="/#hawker-centres"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sf-primary px-6 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
            >
              Hawker centres
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

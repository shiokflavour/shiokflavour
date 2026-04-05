import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { getHawkerById } from "../../lib/hawker-api";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hawker = await getHawkerById(id);
  if (!hawker) return { title: "Not found | ShiokFlavour" };
  return {
    title: `${hawker.name} | ShiokFlavour`,
    description: hawker.address,
  };
}

export default async function HawkerDetailPage({ params }: Props) {
  const { id } = await params;
  const hawker = await getHawkerById(id);
  if (!hawker) notFound();

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
          {(hawker.latitude && hawker.longitude) ? (
            <p className="mt-4 text-sm text-sf-muted">
              Coordinates: {hawker.latitude}, {hawker.longitude}
            </p>
          ) : null}
          {hawker.noOfStalls != null && hawker.noOfStalls > 0 ? (
            <p className="mt-4 text-sm text-sf-muted">
              Cooked food stalls (dataset):{" "}
              <span className="font-medium text-sf-cream">
                {hawker.noOfStalls.toLocaleString("en-SG")}
              </span>
            </p>
          ) : null}
          <p className="mt-10">
            <Link
              href="/#hawker-centres"
              className="text-sm font-semibold text-sf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              ← Back to hawker centres
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

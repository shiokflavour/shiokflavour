import { HawkerCentresBrowse } from "@/app/components/hawker-centres-client";
import { HawkerCentreCard } from "@/app/components/hawker-centre-card";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { FEATURED_HAWKERS } from "@/app/lib/featured-hawkers";

export const metadata = {
  title: "Singapore Hawker Centres: Best Stalls at Every Centre | ShiokFlavour",
  description:
    "A guide to Singapore's best hawker centres, from Maxwell and Lau Pa Sat to neighbourhood favourites: what to eat, the stalls worth queueing for, and how to get there.",
  alternates: { canonical: "/hawker-centres" },
};

function firstParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function HawkerCentresPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string | string[]; q?: string | string[] }>;
}) {
  const params = await searchParams;
  const tagParam = firstParam(params.tag) ?? null;
  const qParam = firstParam(params.q) ?? "";

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1 border-t border-white/5 bg-black/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl">
            Hawker Centres
          </h1>
          <p className="mt-2 max-w-2xl text-sf-muted">
            {FEATURED_HAWKERS.length} curated spots — filter by region
            {tagParam ? " and occasion" : ""}, or search by name, dish, or area.
          </p>

          <HawkerCentresBrowse
            hawkers={FEATURED_HAWKERS}
            tagParam={tagParam}
            qParam={qParam}
          >
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_HAWKERS.map((h, index) => (
                <HawkerCentreCard
                  key={h.slug}
                  index={index}
                  data={{
                    slug: h.slug,
                    name: h.name,
                    address: h.address,
                    region: h.region,
                    imageUrl: h.imageUrl,
                    primaryTag: h.tag,
                    hoursLabel: h.hours,
                    mustTry: h.mustTry,
                    michelinNote: h.michelinNote,
                    halal: h.halal,
                    openLate: h.openLate,
                    budgetPerPax: h.budgetPerPax,
                    nearestMRT: h.nearestMRT,
                  }}
                />
              ))}
            </ul>
          </HawkerCentresBrowse>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

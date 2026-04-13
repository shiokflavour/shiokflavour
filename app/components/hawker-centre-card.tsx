import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { HawkerRegion } from "../lib/featured-hawkers";

export type HawkerCentreCardData = {
  /** URL path segment: `/hawker/{slug}` */
  slug: string;
  name: string;
  address: string;
  region: HawkerRegion;
  imageUrl: string;
  primaryTag: string;
  hoursLabel?: string;
  mustTry?: string[];
  michelinNote?: string;
  halal?: boolean;
  openLate?: boolean;
  budgetPerPax?: string;
  nearestMRT?: string;
};

type HawkerCentreCardProps = {
  data: HawkerCentreCardData;
  index: number;
  /** Optional NEA open/closed pill from parent (listing page). */
  statusPill?: ReactNode;
};

export function HawkerCentreCard({
  data,
  index,
  statusPill,
}: HawkerCentreCardProps) {
  const {
    slug,
    name,
    address,
    region,
    imageUrl,
    primaryTag,
    hoursLabel,
    mustTry,
    michelinNote,
    halal,
    openLate,
    budgetPerPax,
    nearestMRT,
  } = data;

  const mustTryPreview = mustTry?.slice(0, 2) ?? [];
  const showMichelin = Boolean(michelinNote?.trim());

  return (
    <li
      className="sf-hawker-card-in"
      style={{ animationDelay: `${Math.min(index, 20) * 40}ms` }}
    >
      <article
        id={`hawker-${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sf-primary/25 bg-gradient-to-br from-sf-primary/[0.14] via-sf-primary/[0.05] to-sf-surface/70 transition duration-300 ease-out hover:border-sf-primary/45 hover:shadow-lg hover:shadow-sf-primary/10"
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/70 via-transparent to-transparent"
            aria-hidden
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="mb-3 inline-flex w-fit rounded-full border border-sf-primary/45 bg-sf-primary/15 px-3 py-1 text-[15px] font-semibold uppercase tracking-wide text-sf-primary">
            {primaryTag}
          </span>
          <h3 className="text-lg font-semibold text-sf-cream group-hover:text-sf-primary/95">
            {name}
          </h3>
          <p className="mt-1 line-clamp-3 text-sm text-sf-muted">{address}</p>
          {nearestMRT ? (
            <p className="mt-2 text-[15px] leading-snug text-sf-muted/90">
              {nearestMRT}
            </p>
          ) : null}
          {mustTryPreview.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {mustTryPreview.map((dish) => (
                <span
                  key={dish}
                  className="rounded-md border border-white/15 bg-black/20 px-2 py-0.5 text-[15px] font-medium text-sf-cream/90"
                >
                  {dish}
                </span>
              ))}
            </div>
          ) : null}
          <p className="mt-2 text-[15px] text-sf-muted/90">{region} region</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {statusPill}
            {showMichelin ? (
              <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-2.5 py-0.5 text-[15px] font-semibold text-amber-200">
                ⭐ Michelin Recognised
              </span>
            ) : null}
            {halal ? (
              <span className="rounded-full border border-emerald-500/35 bg-emerald-500/15 px-2.5 py-0.5 text-[15px] font-semibold text-emerald-200">
                ✓ Halal
              </span>
            ) : null}
            {openLate ? (
              <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[15px] font-semibold text-violet-100">
                🌙 Open Late
              </span>
            ) : null}
          </div>
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="text-[15px] font-semibold uppercase tracking-wider text-sf-muted">
              Opening hours
            </p>
            <p className="mt-1 text-sm text-sf-cream/95">
              {hoursLabel ?? "Varies by stall"}
            </p>
            {budgetPerPax ? (
              <p className="mt-1.5 text-[15px] text-sf-muted">
                Budget:{" "}
                <span className="font-medium text-sf-cream/90">
                  {budgetPerPax}
                </span>
              </p>
            ) : null}
          </div>
          <Link
            href={`/hawker/${encodeURIComponent(slug)}`}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-sf-primary px-4 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
          >
            View Centre
          </Link>
        </div>
      </article>
    </li>
  );
}

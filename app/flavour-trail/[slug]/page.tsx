import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import ChopstickDivider from "@/app/components/chopstick-divider";
import {
  FLAVOUR_TRAILS,
  type DualPathStop,
  type FlavourTrail,
  type PathOption,
  type TrailGuides,
  type TrailStop,
} from "@/app/lib/flavour-trails";

type Props = { params: Promise<{ slug: string }> };

function DualPathStopsSection({ trail }: { trail: FlavourTrail }) {
  if (!trail.dualPathStops || trail.dualPathStops.length === 0) return null;

  return (
    <div className="flex flex-col">
      {trail.guides ? (
        <div className="mb-12 rounded-2xl bg-[#1f1f1f] p-6 md:p-8">
          <p className="mb-4 text-xs tracking-widest uppercase text-sf-primary">
            Meet your two guides
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-white text-lg font-bold mb-1">
                {trail.guides.og.name}
              </p>
              <p className="italic font-serif text-white/70 text-sm">
                {trail.guides.og.tagline}
              </p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mb-1">
                {trail.guides.returnee.name}
              </p>
              <p className="italic font-serif text-white/70 text-sm">
                {trail.guides.returnee.tagline}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {trail.dualPathStops.map((stop, idx) => {
        const stopNumber = String(stop.number).padStart(2, "0");
        const renderOrder = (items: PathOption["whatToOrder"], className: string) => (
          <ul className="flex flex-col gap-2">
            {items.map((row, i) => (
              <li key={i} className={className}>
                <span className="min-w-0 flex-1">{row.item}</span>
                <span className="flex-shrink-0 font-bold">{row.price}</span>
              </li>
            ))}
          </ul>
        );

        return (
          <div
            key={stop.number}
            className={idx < trail.dualPathStops.length - 1 ? "mb-16" : ""}
          >
            <div className="mb-6">
              <div className="text-7xl font-bold text-white/20">{stopNumber}</div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-sf-primary">
                {stop.category}
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                {stop.headline}
              </h3>
              <p className="mt-3 italic font-serif text-white/60 mb-6">
                {stop.lede}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* OG CARD */}
              <div className="bg-[#3d2e0f] rounded-2xl p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stop.og.image}
                  alt={stop.og.name}
                  className="w-full aspect-[16/9] object-cover rounded-xl mb-4"
                />
                <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#fac775] mb-3">
                  The OG · {stopNumber}A
                </p>
                <p className="text-xl font-bold text-[#fde9c0] mb-1">
                  {stop.og.name}
                </p>
                <p className="text-xs text-[#fac775]/80 mb-4">
                  {stop.og.address}
                </p>
                <a
                  href={stop.og.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#fac775] hover:text-[#fde9c0] mb-4 border border-[#5a4418] rounded-md px-3 py-1.5 w-fit transition-colors"
                >
                  Maps →
                </a>
                <div className="flex flex-wrap gap-1 mb-4">
                  {stop.og.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="text-[10px] tracking-wider px-2 py-1 rounded bg-[#5a4418] text-[#fde9c0]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#fde9c0]/90 mb-4">
                  {stop.og.description}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#fac775] mb-2">
                  What to order
                </p>
                <div className="text-[#fde9c0]">
                  {renderOrder(
                    stop.og.whatToOrder,
                    "flex justify-between text-sm text-[#fde9c0]"
                  )}
                </div>
                <div className="border-t border-[#5a4418] pt-3 mt-4">
                  <p className="text-sm italic text-[#fde9c0]">
                    <span className="font-semibold not-italic">Uncle says · </span>
                    {stop.og.voicedTip}
                  </p>
                </div>
              </div>

              {/* RETURNEE CARD */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stop.returnee.image}
                  alt={stop.returnee.name}
                  className="w-full aspect-[16/9] object-cover rounded-xl mb-4"
                />
                <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-white mb-3">
                  The Returnee · {stopNumber}B
                </p>
                <p className="text-xl font-bold text-white mb-1">
                  {stop.returnee.name}
                </p>
                <p className="text-xs text-white/50 mb-4">
                  {stop.returnee.address}
                </p>
                <a
                  href={stop.returnee.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-white hover:text-white/80 mb-4 border border-white/20 rounded-md px-3 py-1.5 w-fit transition-colors"
                >
                  Maps →
                </a>
                <div className="flex flex-wrap gap-1 mb-4">
                  {stop.returnee.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="text-[10px] tracking-wider px-2 py-1 rounded border border-white/15 text-white/70"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/80 mb-4">
                  {stop.returnee.description}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/60 mb-2">
                  What to order
                </p>
                <div className="text-white">
                  {renderOrder(
                    stop.returnee.whatToOrder,
                    "flex justify-between text-sm text-white"
                  )}
                </div>
                <div className="border-t border-white/10 pt-3 mt-4">
                  <p className="text-sm italic text-white/90">
                    <span className="font-semibold not-italic">
                      The Returnee says ·{" "}
                    </span>
                    {stop.returnee.voicedTip}
                  </p>
                </div>
              </div>
            </div>

            {stop.shiokMove ? (
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-sf-primary" />
                <p className="text-sm">
                  <span className="font-bold text-sf-primary">Shiok move · </span>
                  <span className="text-white/70">{stop.shiokMove}</span>
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default async function TrailPage({ params }: Props) {
  const { slug } = await params;
  const trail = FLAVOUR_TRAILS.find((t) => t.slug === slug);
  if (!trail) notFound();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="pb-0 pt-16">
        <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <Link
              href="/flavour-trail"
              className="text-sm text-sf-muted transition-colors hover:text-white"
            >
              ← Flavour Trail
            </Link>
            <span className="text-white/20">·</span>
            <span className="text-sm font-semibold text-sf-primary">
              {trail.region}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {trail.title}
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-sf-muted sm:text-xl">
            {trail.subtitle}
          </p>

          {/* Trail stats */}
          <div className="mb-10 flex flex-wrap gap-6">
            {[
              { label: "Stops", value: trail.stops + " stops" },
              { label: "Duration", value: trail.duration },
              { label: "Distance", value: trail.distance },
              { label: "Best Time", value: trail.bestTime },
              { label: "Difficulty", value: trail.difficulty },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-[#1a1a1a] px-5 py-3"
              >
                <p className="mb-1 text-xs uppercase tracking-widest text-white/40">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mb-16 h-64 w-full sm:h-96 lg:h-[500px]">
          <Image
            src={trail.heroImage}
            alt={trail.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <div className="mx-auto mb-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        {trail.intro.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-6 text-base leading-relaxed text-sf-muted sm:text-lg"
          >
            {para}
          </p>
        ))}
        <blockquote className="my-8 border-l-4 border-sf-primary pl-6">
          <p className="text-xl font-bold italic leading-snug text-white sm:text-2xl">
            &ldquo;{trail.pullQuote}&rdquo;
          </p>
        </blockquote>
      </div>

      <ChopstickDivider />

      {/* Trail stops */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-10 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
          The Route
        </p>

        {trail.dualPathStops && trail.dualPathStops.length > 0 ? (
          <DualPathStopsSection trail={trail} />
        ) : trail.trailStops && trail.trailStops.length > 0 ? (
          <>
            <div className="flex flex-col gap-0">
              {trail.trailStops.map((stop, idx) => (
              <div key={stop.number} className="relative flex gap-6 pb-12">
                {/* Timeline line */}
                {idx < trail.trailStops.length - 1 && (
                  <div className="absolute bottom-0 left-5 top-12 w-px bg-white/10" />
                )}

                {/* Stop number circle */}
                <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sf-primary">
                  <span className="text-sm font-bold text-white">{stop.number}</span>
                </div>

                {/* Stop content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    {/* Left — all text content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-widest ${
                                stop.type === "eat"
                                  ? "bg-sf-primary/20 text-sf-primary"
                                  : stop.type === "eat & drink"
                                    ? "bg-amber-500/20 text-amber-400"
                                    : stop.type === "drink"
                                      ? "bg-blue-500/20 text-blue-400"
                                      : stop.type === "walk"
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-purple-500/20 text-purple-400"
                              }`}
                            >
                              {stop.type === "eat"
                                ? "Eat"
                                : stop.type === "eat & drink"
                                  ? "Eat & Drink"
                                  : stop.type === "drink"
                                    ? "Drink"
                                    : stop.type === "walk"
                                      ? "Walk"
                                      : "Experience"}
                            </span>
                            <span className="text-xs text-white/30">
                              {stop.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white sm:text-2xl">
                            {stop.name}
                          </h3>
                          <p className="mt-1 text-sm text-white/40">{stop.address}</p>
                        </div>

                        <a
                          href={stop.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/50 transition-all hover:border-sf-primary hover:text-sf-primary"
                        >
                          Maps →
                        </a>
                      </div>

                      {/* Intro — orange accent bar */}
                      {stop.intro && (
                        <div className="border-l-4 border-sf-primary pl-4 mb-5 mt-4">
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            {stop.intro}
                          </p>
                        </div>
                      )}

                      {/* What to order */}
                      {stop.whatToOrder.length > 0 && (
                        <div className="mb-4 rounded-xl border border-white/5 bg-[#1a1a1a] p-5">
                          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-sf-primary">
                            Order This
                          </p>
                          <ul className="flex flex-col gap-2">
                            {stop.whatToOrder.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-white/70"
                              >
                                <span className="mt-0.5 flex-shrink-0 text-sf-primary">
                                  —
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {stop.alsoTry && stop.alsoTry.length > 0 && (
                        <div className="mb-4 rounded-xl border border-white/5 bg-[#1a1a1a] p-5">
                          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-400/90">
                            Also Try
                          </p>
                          <ul className="flex flex-col gap-2">
                            {stop.alsoTry.map((row, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-white/70"
                              >
                                <span className="mt-0.5 flex-shrink-0 text-amber-400/80">
                                  —
                                </span>
                                <span>
                                  <span className="font-semibold text-white/85">
                                    {row.item}
                                  </span>
                                  {row.note ? (
                                    <span className="text-white/60">
                                      {" "}
                                      — {row.note}
                                    </span>
                                  ) : null}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {stop.highlights && stop.highlights.length > 0 && (
                        <div className="mb-4 rounded-xl border border-white/5 bg-[#1a1a1a] p-5">
                          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-green-400/90">
                            Highlights
                          </p>
                          <ul className="flex flex-col gap-2">
                            {stop.highlights.map((row, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-white/70"
                              >
                                <span className="mt-0.5 flex-shrink-0 text-green-400/80">
                                  —
                                </span>
                                <span>
                                  <span className="font-semibold text-white/85">
                                    {row.item}
                                  </span>
                                  {row.note ? (
                                    <span className="text-white/60">
                                      {" "}
                                      — {row.note}
                                    </span>
                                  ) : null}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Local tip */}
                      <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40">
                          Local Tip
                        </p>
                        <p className="text-sm leading-relaxed text-white/70">
                          {stop.tip}
                        </p>
                      </div>
                    </div>

                    {/* Right — image at natural aspect ratio */}
                    <div className="w-full flex-shrink-0 sm:w-56 lg:w-64">
                      <div className="sticky top-24 overflow-hidden rounded-xl">
                        <Image
                          src={stop.image}
                          alt={stop.name}
                          width={400}
                          height={500}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 640px) 100vw, 256px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </>
        ) : null}
      </section>

      <ChopstickDivider />

      {/* End note */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
          End Of Trail
        </p>
        {trail.endNote.split('\n\n').map((para, i) => {
          if (para.startsWith('—')) {
            return (
              <div key={i} className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{para}</p>
              </div>
            );
          }
          if (para.startsWith('Enjoy this trail?')) {
            return (
              <div key={i} className="mt-6 bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <p className="text-white/80 text-base leading-relaxed">{para}</p>
              </div>
            );
          }
          return (
            <p
              key={i}
              className="text-sf-muted text-base sm:text-lg leading-relaxed mb-6"
            >
              {para}
            </p>
          );
        })}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/flavour-trail"
            className="rounded-xl border border-white/20 px-8 py-3 text-center text-sm font-semibold text-white transition-all hover:border-sf-primary hover:text-sf-primary"
          >
            ← Back to All Trails
          </Link>
          <Link
            href="/food-heritage"
            className="rounded-xl bg-sf-primary px-8 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-sf-primary/90"
          >
            Explore Food Heritage →
          </Link>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return FLAVOUR_TRAILS.map((trail) => ({ slug: trail.slug }));
}

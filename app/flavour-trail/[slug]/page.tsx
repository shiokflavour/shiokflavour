import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import { FLAVOUR_TRAILS } from "@/app/lib/flavour-trails";

type Props = { params: Promise<{ slug: string }> };

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
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-widest ${
                          stop.type === "eat"
                            ? "bg-sf-primary/20 text-sf-primary"
                            : stop.type === "drink"
                              ? "bg-blue-500/20 text-blue-400"
                              : stop.type === "walk"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {stop.type === "eat"
                          ? "Eat"
                          : stop.type === "drink"
                            ? "Drink"
                            : stop.type === "walk"
                              ? "Walk"
                              : "Experience"}
                      </span>
                      <span className="text-xs text-white/30">{stop.duration}</span>
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

                {/* Stop image */}
                <div className="relative mb-5 h-48 overflow-hidden rounded-xl sm:h-64">
                  <Image
                    src={stop.image}
                    alt={stop.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 700px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

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

                {/* Local tip */}
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40">
                    Local Tip
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">{stop.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ChopstickDivider />

      {/* End note */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
          End Of Trail
        </p>
        {trail.endNote.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-6 text-base leading-relaxed text-sf-muted sm:text-lg"
          >
            {para}
          </p>
        ))}

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

      <SiteFooter />
    </>
  );
}

export function generateStaticParams() {
  return FLAVOUR_TRAILS.map((trail) => ({ slug: trail.slug }));
}

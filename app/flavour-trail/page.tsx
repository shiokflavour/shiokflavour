"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import { FLAVOUR_TRAILS } from "@/app/lib/flavour-trails";

const COMING_SOON = [
  {
    title: "CBD Lunch Run",
    subtitle: "Maxwell, Amoy Street, Lau Pa Sat",
    stops: 4,
    duration: "90 mins",
    region: "Central",
  },
  {
    title: "Old Airport Road Deep Dive",
    subtitle: "One of Singapore's most legendary food centres",
    stops: 8,
    duration: "Full morning",
    region: "East",
  },
  {
    title: "The Heartland Route",
    subtitle: "Toa Payoh, Bedok, Tampines — eating like a local",
    stops: 5,
    duration: "Full day",
    region: "Various",
  },
];

export default function FlavourTrailPage() {
  return (
    <>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
          Flavour Trail
        </p>
        <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-[1.0] text-white sm:text-6xl lg:text-7xl">
          Walk. Eat.
          <br />
          Repeat.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
          Curated eating routes through Singapore&apos;s greatest food streets. Each
          trail is mapped, timed, and written by people who have eaten every stop.
          More than once.
        </p>
        <div className="mt-10 h-px w-12 bg-sf-primary" />
      </section>

      <ChopstickDivider />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
          Live Now
        </p>

        {/* Live trails */}
        <div className="mb-16 grid grid-cols-1 gap-6">
          {FLAVOUR_TRAILS.map((trail) => (
            <Link
              key={trail.slug}
              href={`/flavour-trail/${trail.slug}`}
              className="group relative block overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all hover:ring-1 hover:ring-sf-primary/40"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <Image
                    src={trail.heroImage}
                    alt={trail.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/40" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-sf-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                      New Trail
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                    {trail.region}
                  </p>
                  <h2 className="mb-3 text-3xl font-bold text-white transition-colors group-hover:text-sf-primary sm:text-4xl">
                    {trail.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-sf-muted">
                    {trail.subtitle}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-4 text-sm">
                    <span className="text-white/60">📍 {trail.stops} stops</span>
                    <span className="text-white/60">⏱ {trail.duration}</span>
                    <span className="text-white/60">🚶 {trail.distance}</span>
                    <span className="text-white/60">⭐ {trail.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Start the Trail
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon trails */}
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
          Coming Soon
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {COMING_SOON.map((trail) => (
            <div
              key={trail.title}
              className="rounded-2xl border border-white/5 bg-[#1a1a1a] p-6 opacity-60"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sf-primary">
                {trail.region}
              </p>
              <h3 className="mb-2 text-xl font-bold text-white">{trail.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-white/40">
                {trail.subtitle}
              </p>
              <div className="flex gap-4 text-xs text-white/30">
                <span>{trail.stops} stops</span>
                <span>{trail.duration}</span>
              </div>
              <div className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/40">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

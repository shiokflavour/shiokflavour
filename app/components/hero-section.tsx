"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
  "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=1600&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1600&q=80",
] as const;

const OCCASION_TAGS = [
  { label: "Breakfast", href: "/hawker-centres?tag=breakfast" },
  { label: "Late Night", href: "/hawker-centres?tag=late-night" },
  { label: "Halal", href: "/hawker-centres?tag=halal" },
  { label: "Near MRT", href: "/hawker-centres?tag=mrt" },
  { label: "Budget", href: "/hawker-centres?tag=budget" },
  { label: "Michelin", href: "/hawker-centres?tag=michelin" },
] as const;

const STAT_BOXES = [
  { title: "500+ Dishes", sub: "reasons to skip the restaurant" },
  { title: "5 Regions", sub: "from Woodlands to the East Coast" },
  { title: "Rated by Locals", sub: "Not TripAdvisor" },
] as const;

export function HeroSection() {
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveBg((i) => (i + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex h-[90vh] w-full flex-col justify-center overflow-hidden border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {HERO_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            className={`absolute inset-0 object-cover transition-opacity ease-in-out duration-[1500ms] ${
              activeBg === i ? "z-[2] opacity-100" : "z-[1] opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-b from-[#1c1c1e]/92 via-[#1c1c1e]/88 to-[#1c1c1e]/95"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[3] bg-sf-primary/[0.06]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/sf_icon_transparent.png"
            alt="ShiokFlavour"
            width={120}
            height={120}
            className="fire-glow h-24 w-24 object-contain sm:h-32 sm:w-32"
            priority
          />
        </div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
          UNESCO recognised · since forever
        </p>
        <h1
          id="hero-heading"
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-sf-cream sm:text-5xl lg:text-6xl"
        >
          Discover Singapore&apos;s Most{" "}
          <span className="text-sf-primary">Shiok</span> Food
        </h1>

        <nav
          className="mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2"
          aria-label="Occasion shortcuts"
        >
          {OCCASION_TAGS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-sf-primary hover:bg-sf-primary/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-sf-cream/85 sm:text-xl">
          Not a restaurant guide. Not a listicle. A love letter to the uncles
          and aunties who woke up at 4am so you could eat well.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/hawker-centres"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sf-primary px-8 text-sm font-semibold text-white shadow-lg shadow-sf-primary/25 transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
          >
            Explore Hawker Centres
          </Link>
          <Link
            href="#flavour-trail"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-sf-primary bg-transparent px-8 text-sm font-semibold text-sf-cream transition hover:bg-sf-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
          >
            Flavour Trail
          </Link>
        </div>

        <ul
          className="mt-14 grid w-full max-w-2xl gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-4"
          aria-label="ShiokFlavour at a glance"
        >
          {STAT_BOXES.map(({ title, sub }) => (
            <li
              key={title}
              className="sf-hero-stat rounded-xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm sm:py-5"
            >
              <p className="text-xl font-bold leading-tight text-sf-primary sm:text-2xl">
                {title}
              </p>
              <p className="mt-1 text-sm font-medium text-sf-cream/90">{sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

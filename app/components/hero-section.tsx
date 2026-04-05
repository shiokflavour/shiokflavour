import Image from "next/image";
import Link from "next/link";

const HERO_BG =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80";

export type HeroSectionProps = {
  hawkerCentreCount?: number;
  foodStallCount?: number;
};

function formatStat(n: number): string {
  return n.toLocaleString("en-SG");
}

export function HeroSection({
  hawkerCentreCount,
  foodStallCount,
}: HeroSectionProps = {}) {
  const centreLabel =
    hawkerCentreCount != null
      ? formatStat(hawkerCentreCount)
      : "130+";
  const stallLabel =
    foodStallCount != null && foodStallCount > 0
      ? formatStat(foodStallCount)
      : "1,000+";
  return (
    <section
      className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e]/92 via-[#1c1c1e]/88 to-[#1c1c1e]/95"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-sf-primary/[0.06]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
          Singapore food discovery
        </p>
        <h1
          id="hero-heading"
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-sf-cream sm:text-5xl lg:text-6xl"
        >
          Discover Singapore&apos;s Most{" "}
          <span className="text-sf-primary">Shiok</span> Food
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-sf-cream/85 sm:text-xl">
          Your guide to the best hawker centres and restaurants across
          Singapore
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="#hawker-centres"
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
          <li className="sf-hero-stat rounded-xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm sm:py-5">
            <p className="text-2xl font-bold tabular-nums text-sf-primary sm:text-3xl">
              {centreLabel}
            </p>
            <p className="mt-1 text-sm font-medium text-sf-cream/90">
              Hawker Centres
            </p>
          </li>
          <li className="sf-hero-stat rounded-xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm sm:py-5">
            <p className="text-2xl font-bold tabular-nums text-sf-primary sm:text-3xl">
              {stallLabel}
            </p>
            <p className="mt-1 text-sm font-medium text-sf-cream/90">
              Food Stalls
            </p>
          </li>
          <li className="sf-hero-stat rounded-xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm sm:py-5 sm:col-span-1">
            <p className="text-lg font-semibold leading-snug text-sf-cream sm:text-xl">
              Locals &amp; Tourists Welcome
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata = {
  title: "Flavour Trail | ShiokFlavour",
  description: "Curated hawker food trails across Singapore — coming soon.",
};

const UPCOMING_TRAILS = [
  {
    name: "The Katong Trail",
    emoji: "🌊",
    description: "Laksa, popiah, kueh pie tee, and Peranakan desserts across Joo Chiat and East Coast Road",
    stops: 6,
    duration: "Half day",
  },
  {
    name: "CBD Lunch Run",
    emoji: "🏙️",
    description: "Maxwell, Amoy Street, and Lau Pa Sat — the best hawker lunch in the heart of the city",
    stops: 4,
    duration: "90 mins",
  },
  {
    name: "Old Airport Road Deep Dive",
    emoji: "✈️",
    description: "One of Singapore's most legendary food centres — a full guide to the must-order stalls",
    stops: 8,
    duration: "Full morning",
  },
  {
    name: "The Heartland Route",
    emoji: "🏠",
    description: "Toa Payoh, Bedok, and Tampines — eating like a local, far from the tourist trail",
    stops: 5,
    duration: "Full day",
  },
];

export default function FlavourTrailPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pt-20 pb-12 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sf-primary">
            Coming Soon
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-sf-cream sm:text-6xl">
            Flavour Trail
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-sf-muted">
            Something delicious is coming your way. We&apos;re putting together curated eating trails across Singapore — each one mapped, timed, and tested by locals.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative">
              <div className="text-8xl">🗺️</div>
              <div className="absolute -top-2 -right-4 text-3xl">🍜</div>
              <div className="absolute -bottom-2 -left-4 text-3xl">🌶️</div>
            </div>
          </div>

          <p className="mt-10 text-lg font-medium text-sf-cream">
            Stay tuned — the trails are being mapped. 👀
          </p>
        </section>

        {/* Upcoming trails preview */}
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sf-primary">
              A sneak peek at what&apos;s coming
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {UPCOMING_TRAILS.map((trail) => (
              <li
                key={trail.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-sf-surface p-6"
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl backdrop-blur-[2px] bg-black/30 z-10">
                  <span className="rounded-full border border-sf-primary/50 bg-sf-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sf-primary">
                    Coming Soon
                  </span>
                </div>

                <div className="text-3xl mb-3">{trail.emoji}</div>
                <h3 className="text-lg font-bold text-sf-cream">{trail.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sf-muted">
                  {trail.description}
                </p>
                <div className="mt-4 flex gap-4 text-xs text-sf-muted">
                  <span>📍 {trail.stops} stops</span>
                  <span>⏱ {trail.duration}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <p className="text-sf-muted mb-6">
              While you wait, explore Singapore&apos;s food heritage dishes or find a hawker centre near you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/food-heritage"
                className="inline-flex items-center gap-2 rounded-xl bg-sf-primary px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                🍜 Explore Food Heritage
              </Link>
              <Link
                href="/hawker-centres"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-sf-cream transition hover:border-sf-primary/50"
              >
                🏪 Find Hawker Centres
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
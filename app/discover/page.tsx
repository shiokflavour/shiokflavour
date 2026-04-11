import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";

export default function DiscoverPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
          ShiokFlavour
        </p>
        <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-[1.0] text-white sm:text-6xl lg:text-7xl">
          Singapore&apos;s Food
          <br />
          Story — Told Right.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
          Three ways to go deeper into Singapore&apos;s hawker culture. Read the
          stories, walk the trails, and understand the dishes that built this
          city.
        </p>
        <div className="mt-10 h-px w-12 bg-sf-primary" />
      </section>

      <ChopstickDivider />

      {/* Three Pillar Cards */}
      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Pillar 1 — The Flavour Files */}
          <Link
            href="/blog"
            className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl sm:h-96"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/food/char-kway-teow.jpg')" }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
                Pillar 01 — Articles & Guides
              </p>
              <h2 className="mb-4 text-4xl font-bold text-white transition-colors duration-200 group-hover:text-sf-primary sm:text-5xl">
                The Flavour Files
              </h2>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                Stories, guides and opinions from the hawker centre floor. For
                the curious traveller and the proud local.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-sf-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                  Read Now
                </span>
              </div>
            </div>
          </Link>

          {/* Pillar 2 — Flavour Trail */}
          <Link
            href="/flavour-trail"
            className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl sm:h-96"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/food/satay.jpg')" }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
                Pillar 02 — Walking Food Routes
              </p>
              <h2 className="mb-4 text-4xl font-bold text-white transition-colors duration-200 group-hover:text-sf-primary sm:text-5xl">
                Flavour Trail
              </h2>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                Curated routes through Singapore&apos;s greatest eating streets.
                Walk, eat, repeat.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-sf-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                  Explore Trails
                </span>
              </div>
            </div>
          </Link>

          {/* Pillar 3 — Food Heritage */}
          <Link
            href="/food-heritage"
            className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl sm:h-96"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/food/laksa.jpg')" }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
                Pillar 03 — Heritage & Culture
              </p>
              <h2 className="mb-4 text-4xl font-bold text-white transition-colors duration-200 group-hover:text-sf-primary sm:text-5xl">
                Food Heritage
              </h2>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                The dishes that built Singapore. UNESCO recognised. Deeply human.
                One story at a time.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-sf-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                  Discover Dishes
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

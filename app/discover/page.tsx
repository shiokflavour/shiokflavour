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

      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <a
            href="/blog"
            className="group block rounded-2xl p-10 transition-all duration-300 hover:ring-2 hover:ring-sf-primary"
            style={{ background: "#1e1e1e" }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
              Pillar 01 — Articles & Guides
            </p>
            <h2 className="mb-4 text-5xl font-bold text-white transition-colors group-hover:text-sf-primary">
              The Flavour Files
            </h2>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Stories, guides and opinions from the hawker centre floor. For the
              curious traveller and the proud local.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-sf-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                Read Now
              </span>
            </div>
          </a>

          <a
            href="/flavour-trail"
            className="group block rounded-2xl p-10 transition-all duration-300 hover:ring-2 hover:ring-sf-primary"
            style={{ background: "#1e1e1e" }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
              Pillar 02 — Walking Food Routes
            </p>
            <h2 className="mb-4 text-5xl font-bold text-white transition-colors group-hover:text-sf-primary">
              Flavour Trail
            </h2>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Curated routes through Singapore&apos;s greatest eating streets.
              Walk, eat, repeat.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-sf-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                Explore Trails
              </span>
            </div>
          </a>

          <a
            href="/food-heritage"
            className="group block rounded-2xl p-10 transition-all duration-300 hover:ring-2 hover:ring-sf-primary"
            style={{ background: "#1e1e1e" }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
              Pillar 03 — Heritage & Culture
            </p>
            <h2 className="mb-4 text-5xl font-bold text-white transition-colors group-hover:text-sf-primary">
              Food Heritage
            </h2>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/60">
              The dishes that built Singapore. UNESCO recognised. Deeply human.
              One story at a time.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-sf-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                Discover Dishes
              </span>
            </div>
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

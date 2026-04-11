"use client";

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

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] bg-[#1a1a1a]">
            <img
              src="/images/food/nasi-lemak.jpg"
              alt=""
              className="kb-img-1a absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/food/laksa.jpg"
              alt=""
              className="kb-img-1b absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/food/hokkien-mee.jpg"
              alt=""
              className="kb-img-1c absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sf-primary" />
            <a href="/blog" className="absolute inset-0 flex items-center px-16">
              <div className="flex items-center gap-10">
                <span className="hidden text-[6rem] font-bold leading-none text-sf-primary opacity-30 sm:block">
                  01
                </span>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
                    Articles & Guides
                  </p>
                  <h2 className="mb-4 text-6xl font-bold text-white">
                    The Flavour Files
                  </h2>
                  <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/65">
                    Stories, guides and opinions from the hawker centre floor.
                    For the curious traveller and the proud local.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Read Now
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] bg-[#1a1a1a]">
            <img
              src="/images/food/satay.jpg"
              alt=""
              className="kb-img-2a absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/food/economy-rice.jpg"
              alt=""
              className="kb-img-2b absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/food/bak-kut-teh.jpg"
              alt=""
              className="kb-img-2c absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sf-primary" />
            <a
              href="/flavour-trail"
              className="absolute inset-0 flex items-center px-16"
            >
              <div className="flex items-center gap-10">
                <span className="hidden text-[6rem] font-bold leading-none text-sf-primary opacity-30 sm:block">
                  02
                </span>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
                    Walking Food Routes
                  </p>
                  <h2 className="mb-4 text-6xl font-bold text-white">
                    Flavour Trail
                  </h2>
                  <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/65">
                    Curated routes through Singapore&apos;s greatest eating
                    streets. Walk, eat, repeat.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Explore Trails
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] bg-[#1a1a1a]">
            <img
              src="/images/food/ondeh-ondeh.jpg"
              alt=""
              className="kb-img-3a absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/food/roti-prata.jpg"
              alt=""
              className="kb-img-3b absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/food/biryani.jpg"
              alt=""
              className="kb-img-3c absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sf-primary" />
            <a
              href="/food-heritage"
              className="absolute inset-0 flex items-center px-16"
            >
              <div className="flex items-center gap-10">
                <span className="hidden text-[6rem] font-bold leading-none text-sf-primary opacity-30 sm:block">
                  03
                </span>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
                    Heritage & Culture
                  </p>
                  <h2 className="mb-4 text-6xl font-bold text-white">
                    Food Heritage
                  </h2>
                  <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/65">
                    The dishes that built Singapore. UNESCO recognised. Deeply
                    human. One story at a time.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Discover Dishes
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

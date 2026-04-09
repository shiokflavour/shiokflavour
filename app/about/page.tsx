import Link from "next/link";
import { FOOD_HERITAGE_DISHES } from "../lib/food-heritage";
import { FEATURED_HAWKERS } from "../lib/featured-hawkers";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata = {
  title: "About ShiokFlavour | Singapore's Hawker Heritage Guide",
  description:
    "ShiokFlavour is a cultural guide to Singapore's UNESCO-recognised hawker heritage — built for curious travellers and proud locals alike.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — warm gradient, large statement */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sf-surface via-black/80 to-sf-bg px-4 pt-24 pb-20 sm:px-6 lg:px-8">
          {/* Decorative warm glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sf-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-sf-primary mb-6">
              About ShiokFlavour
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight text-sf-cream">
              More Than
              <br />
              a Meal.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-sf-muted max-w-2xl mx-auto">
              ShiokFlavour is a cultural guide to Singapore&apos;s hawker
              heritage — built for the curious traveller, the proud local, and
              everyone in between who believes that food is the most honest way
              to understand a place.
            </p>
            <p className="mt-8 text-2xl font-medium italic text-sf-primary">
              &quot;Every queue is a vote. Every empty plate is a standing ovation.&quot;
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-white/[0.08] bg-sf-surface/40">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold text-sf-primary">
                  {FEATURED_HAWKERS.length}
                </p>
                <p className="text-sm font-semibold text-sf-cream mt-2">
                  Hawker Centres
                </p>
                <p className="text-[15px] text-sf-muted mt-1 italic">
                  from Chinatown to the heartlands
                </p>
              </div>
              <div className="border-x border-white/[0.08]">
                <p className="text-5xl font-bold text-sf-primary">
                  {FOOD_HERITAGE_DISHES.length}
                </p>
                <p className="text-sm font-semibold text-sf-cream mt-2">
                  Heritage Dishes
                </p>
                <p className="text-[15px] text-sf-muted mt-1 italic">
                  each one a chapter of Singapore&apos;s story
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold text-sf-primary">1</p>
                <p className="text-sm font-semibold text-sf-cream mt-2">
                  UNESCO Recognition
                </p>
                <p className="text-[15px] text-sf-muted mt-1 italic">
                  the world finally caught up with what we knew
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 — What ShiokFlavour Is */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="w-8 h-px bg-sf-primary mb-6" />
          <h2 className="text-3xl font-bold text-sf-cream mb-6">
            What ShiokFlavour Is
          </h2>
          <p className="text-lg leading-relaxed text-sf-muted mb-5">
            We are not a review site. We do not rank stalls against each other
            or chase the latest openings. What we do is slower and more
            deliberate — we document the heritage, the history, and the human
            stories behind Singapore&apos;s most beloved hawker centres and
            dishes.
          </p>
          <p className="text-lg leading-relaxed text-sf-muted mb-5">
            Every hawker centre page on ShiokFlavour carries the story of how
            that centre came to be — the communities it serves, the legendary
            stalls that define it, and the milestones that shaped it. Every
            food heritage page explains not just what a dish tastes like, but
            where it came from and why it matters.
          </p>
          <p className="text-lg leading-relaxed text-sf-primary font-medium">
            Because we believe that context makes food more delicious.
          </p>
        </section>

        {/* Full width warm divider */}
        <div className="bg-gradient-to-r from-transparent via-sf-primary/20 to-transparent h-px" />

        {/* Section 2 — What Does Shiok Mean — dark card treatment */}
        <section className="bg-sf-surface/40 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="w-8 h-px bg-sf-primary mb-6" />
            <h2 className="text-3xl font-bold text-sf-cream mb-6">
              What Does Shiok Mean?
            </h2>
            <p className="text-lg leading-relaxed text-sf-muted mb-5">
              Shiok is a Singlish word — borrowed from Malay, shaped by decades
              of multicultural street life — that means something between
              delicious, satisfying, and deeply, completely right. It is the
              sound a Singaporean makes when the first spoonful of laksa hits
              perfectly. The word said quietly to no one in particular when the
              char kway teow arrives with proper wok hei.
            </p>
            <p className="text-lg leading-relaxed text-sf-muted">
              There is no single English translation. Which is exactly why it
              is the perfect word for what we are trying to capture — something
              that has to be experienced to be understood, but that we will
              spend as many words as it takes to help you find.
            </p>
          </div>
        </section>

        {/* Full width warm divider */}
        <div className="bg-gradient-to-r from-transparent via-sf-primary/20 to-transparent h-px" />

        {/* Section 3 — Who We Are Built For */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="w-8 h-px bg-sf-primary mb-6" />
          <h2 className="text-3xl font-bold text-sf-cream mb-6">
            Who We Are Built For
          </h2>
          <div className="space-y-4">
            {[
              "For the first-time visitor to Singapore who wants to eat well and understand what they are eating.",
              "For the Singaporean who grew up on hawker food and wants to reconnect with what it means.",
              "For the food lover anywhere in the world who knows that the most important meals rarely happen in restaurants.",
            ].map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-sf-surface/50 px-5 py-4"
              >
                <span className="text-sf-primary font-bold text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-sf-muted">
                  {line}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg text-sf-cream font-medium leading-relaxed">
            ShiokFlavour is for anyone who believes that every hawker uncle and
            auntie who has spent forty years perfecting one dish deserves to
            have their story told — and found.
          </p>
        </section>

        {/* Full width warm divider */}
        <div className="bg-gradient-to-r from-transparent via-sf-primary/20 to-transparent h-px" />

        {/* Section 4 — UNESCO Heritage — most impactful, full dark treatment */}
        <section className="bg-gradient-to-br from-sf-surface via-black/60 to-sf-bg py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="w-8 h-px bg-sf-primary mb-6" />
            <p className="text-[15px] font-semibold uppercase tracking-[0.2em] text-sf-primary mb-4">
              16 December 2020
            </p>
            <h2 className="text-3xl font-bold text-sf-cream mb-6">
              A Heritage Recognised by the World
            </h2>
            <p className="text-lg leading-relaxed text-sf-muted mb-5">
              Singapore&apos;s hawker culture was inscribed on the UNESCO
              Representative List of the Intangible Cultural Heritage of
              Humanity — the country&apos;s very first inscription on that list.
              Not a building. Not a monument. A way of eating together.
            </p>
            <p className="text-lg leading-relaxed text-sf-muted mb-5">
              UNESCO recognised what Singaporeans have always known: that the
              hawker centre is not just a place to eat. It is a community dining
              room where Chinese, Malay, Indian and dozens of other cultures sit
              at the same table every day. Where a third-generation hawker still
              fries the same dish his grandmother taught him.
            </p>
            <blockquote className="border-l-2 border-sf-primary pl-6 my-8">
              <p className="text-xl italic text-sf-cream leading-relaxed">
                &quot;Where a $4 plate of chicken rice can carry sixty years of
                history in a single bite.&quot;
              </p>
            </blockquote>
            <p className="text-lg leading-relaxed text-sf-muted">
              ShiokFlavour exists to honour that inscription — and to tell that
              story to the world.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-sf-primary/20 bg-gradient-to-r from-sf-primary/10 via-transparent to-sf-primary/10 px-8 py-12">
            <p className="text-2xl sm:text-3xl font-bold text-sf-cream leading-snug mb-4">
              Singapore&apos;s hawker culture feeds millions every day.
            </p>
            <p className="text-lg text-sf-muted mb-8">
              We are here to make sure the world knows why that matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hawker-centres"
                className="inline-flex items-center gap-2 rounded-xl bg-sf-primary px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                Explore Hawker Centres →
              </Link>
              <Link
                href="/food-heritage"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-sf-cream transition hover:border-sf-primary/50"
              >
                Discover Food Heritage →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

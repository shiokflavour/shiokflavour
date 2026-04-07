import Link from "next/link";
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-sf-surface via-black/60 to-sf-bg">
          <div className="mx-auto max-w-3xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
              About ShiokFlavour
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-sf-cream sm:text-6xl">
              More Than a Meal.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-sf-muted">
              ShiokFlavour is a cultural guide to Singapore&apos;s hawker
              heritage — built for the curious traveller, the proud local, and
              everyone in between who believes that food is the most honest way
              to understand a place.
            </p>

            <p className="mt-10 text-2xl italic leading-relaxed text-sf-primary/80">
              Food is the most honest way to understand a place.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.08]" />

        {/* UNESCO section */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.08] bg-sf-surface/60 p-8">
            <div className="text-4xl">🏛️</div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-sf-cream">
                A Heritage Recognised by the World
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                On 16 December 2020, Singapore&apos;s hawker culture was
                inscribed on the UNESCO Representative List of the Intangible
                Cultural Heritage of Humanity — the country&apos;s very first
                inscription on that list. Not a building. Not a monument. A way
                of eating together.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                UNESCO recognised what Singaporeans have always known: that the
                hawker centre is not just a place to eat. It is a community
                dining room where Chinese, Malay, Indian and dozens of other
                cultures sit at the same table every day. Where a
                third-generation hawker still fries the same dish his
                grandmother taught him. Where a $4 plate of chicken rice can
                carry sixty years of history in a single bite.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                ShiokFlavour exists to honour that inscription — and to tell
                that story to the world.
              </p>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 border-sf-primary/70 pl-6">
            <p className="text-xl italic text-sf-cream">
              Where a $4 plate of chicken rice can carry sixty years of history
              in a single bite.
            </p>
          </blockquote>
        </section>

        {/* What we are */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.08] bg-sf-surface/60 p-8">
            <div className="text-4xl">🍜</div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-sf-cream">
                What ShiokFlavour Is
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                We are not a review site. We do not rank stalls against each
                other or chase the latest openings. What we do is slower and
                more deliberate — we document the heritage, the history, and the
                human stories behind Singapore&apos;s most beloved hawker
                centres and dishes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                Every hawker centre page on ShiokFlavour carries the story of
                how that centre came to be — the communities it serves, the
                legendary stalls that define it, and the milestones that shaped
                it. Every food heritage page explains not just what a dish
                tastes like, but where it came from and why it matters.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                Because we believe that context makes food more delicious. And
                that understanding a place through its food is one of the most
                profound things a person can do.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.08]" />

        {/* What shiok means */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.08] bg-sf-surface/60 p-8">
            <div className="text-4xl">✨</div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-sf-cream">
                What Does Shiok Mean?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                Shiok is a Singlish word — borrowed from Malay, shaped by
                decades of multicultural street life — that means something
                between delicious, satisfying, and deeply, completely right. It
                is the sound a Singaporean makes when the first spoonful of
                laksa hits perfectly. The word said quietly to no one in
                particular when the char kway teow arrives with proper wok hei.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                There is no single English translation. Which is exactly why it
                is the perfect word for what we are trying to capture —
                something that has to be experienced to be understood, but that
                we will spend as many words as it takes to help you find.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.08]" />

        {/* Who it's for */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.08] bg-sf-surface/60 p-8">
            <div className="text-4xl">🌏</div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-sf-cream">
                Who We Are Built For
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                For the first-time visitor to Singapore who wants to eat well
                and understand what they are eating. For the Singaporean who
                grew up on hawker food and wants to reconnect with what it
                means. For the food lover anywhere in the world who knows that
                the most important meals rarely happen in restaurants.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sf-muted">
                ShiokFlavour is for anyone who believes that a hawker uncle who
                has spent forty years perfecting one dish deserves to have his
                story told — and found.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.08]" />

        {/* Closing */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-sf-primary/20 bg-gradient-to-r from-sf-primary/10 via-transparent to-sf-primary/10 p-12">
            <p className="text-2xl font-semibold text-sf-cream leading-relaxed">
              Singapore&apos;s hawker culture feeds millions every day.
              <br />
              We are here to make sure the world knows why that matters.
            </p>
            <p className="mt-4 text-base text-sf-muted">
              Start exploring Singapore&apos;s hawker heritage below.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/hawker-centres"
                className="inline-flex items-center gap-2 rounded-xl bg-sf-primary px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                🏪 Explore Hawker Centres
              </Link>
              <Link
                href="/food-heritage"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-sf-cream transition hover:border-sf-primary/50"
              >
                🍜 Discover Food Heritage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

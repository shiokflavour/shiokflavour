import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import { HAWKER_GUIDES } from "./guides-data";

export const metadata = {
  alternates: { canonical: "/hawker-guide" },
  title: "Hawker Centre Guide: How to Order Like a Local in Singapore | ShiokFlavour",
  description:
    "Decode kopi and prata orders, chope a seat with a tissue packet, learn old-school kopitiam names and the Singlish you'll hear at the stall. The unwritten rules, explained.",
};

export default function HawkerGuideHubPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-[15px] font-semibold tracking-[0.25em] text-sf-primary uppercase mb-6">
          Hawker Guide
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] mb-8 max-w-3xl">
          Order Like
          <br />a Local
        </h1>
        <p className="text-white/60 italic font-serif text-base md:text-lg mt-3 mb-6">
          The unwritten rules of eating in Singapore.
        </p>
        <div className="border-l-2 border-sf-primary pl-6 mb-10 max-w-2xl">
          <p className="text-white/80 text-xl italic leading-relaxed font-light">
            &quot;Saying &apos;coffee, no sugar&apos; in a kopitiam might get you
            more sugar. This guide exists so that does not happen to you.&quot;
          </p>
        </div>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-5">
          Singapore&apos;s hawker centres have their own language — a beautiful
          collision of Hokkien, Malay, Cantonese, and pure local invention. Kopi
          is not just coffee. Teh is not just tea. And if you ask for Tak Kiu,
          you better mean Milo.
        </p>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          Pick a section below. Each one is short, practical, and written so the
          next time you walk up to a stall you know exactly what to say.
        </p>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl mt-5">
          Never been to a hawker centre?{" "}
          <Link
            href="/blog/singapore-hawker-food-guide-first-timers"
            className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4 hover:decoration-sf-primary"
          >
            Start with the first-timer&apos;s guide
          </Link>
          , or learn{" "}
          <Link
            href="/blog/how-to-order-economy-rice-singapore"
            className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4 hover:decoration-sf-primary"
          >
            how to order economy rice
          </Link>
          , the cheapest full meal on the island.
        </p>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl mt-5">
          Visiting Singapore? Follow our{" "}
          <Link href="/blog/singapore-food-itinerary-3-days" className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4 hover:decoration-sf-primary">
            3-day food itinerary
          </Link>
          , find{" "}
          <Link href="/blog/hawker-food-near-marina-bay-sands" className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4 hover:decoration-sf-primary">
            hawker food near Marina Bay Sands
          </Link>
          , or eat with our{" "}
          <Link href="/blog/halal-hawker-food-singapore" className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4 hover:decoration-sf-primary">
            halal hawker food guide
          </Link>
          .
        </p>
        <div className="w-12 h-px bg-sf-primary mt-10" />
      </section>

      <ChopstickDivider />

      {/* Card grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mb-10">
          <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
            What&apos;s Inside
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Five Guides, One Hawker Centre
          </h2>
          <p className="text-sf-muted text-base max-w-xl">
            Each guide stands on its own. Read whichever you need before your
            next meal — or all of them, if you want to walk in like you grew up
            here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HAWKER_GUIDES.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col bg-[#1a1a1a] rounded-2xl p-7 border border-white/5 hover:border-sf-primary/40 hover:bg-[#1f1f1f] transition-all duration-200"
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-4">
                {section.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-sf-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-sf-muted text-sm leading-relaxed mb-6 flex-1">
                {section.description}
              </p>
              <div className="flex items-center gap-2 text-sf-primary text-sm font-semibold">
                <span>{section.cta}</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

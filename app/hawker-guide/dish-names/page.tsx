import Link from "next/link";
import { DISH_NAME_FAQS, DISH_NAMES } from "@/app/lib/dish-names";
import { KeepExploring } from "../keep-exploring";
import { DishDecoder, UncleCallout } from "./dish-decoder";

export const metadata = {
  alternates: { canonical: "/hawker-guide/dish-names" },
  title: "Hawker Dish Names Decoded: Meanings & Chinese Names | ShiokFlavour",
  description:
    "What char kway teow, cai png and laksa mean, how to write them in Chinese, and a 'show the uncle' card to hold up at the stall. 60 Singapore hawker dishes decoded.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DISH_NAME_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DishNamesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/hawker-guide"
          className="inline-flex items-center gap-2 text-sf-muted hover:text-sf-primary text-sm font-semibold mb-8 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Hawker Guide
        </Link>

        <p className="text-[15px] font-semibold tracking-[0.25em] text-sf-primary uppercase mb-6">Interactive</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.0] mb-6 max-w-3xl">Hawker Dish Names Decoded</h1>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          A hawker centre menu is written in five languages at once. Char kway teow is Teochew. Nasi lemak is Malay. Thosai is
          Tamil. Laksa is still being argued about. Here are {DISH_NAMES.length} dishes: what each name means, how it is written,
          and a card to hold up when the queue is long and your Hokkien is short.
        </p>
        <UncleCallout />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <DishDecoder />
      </div>

      <section aria-labelledby="dish-names-faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sf-primary" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">Quick answers</p>
        </div>
        <h2 id="dish-names-faq" className="mt-3 text-3xl font-bold text-white">
          Dish names, explained
        </h2>
        <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#1a1a1a]">
          {DISH_NAME_FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
                {f.q}
                <span className="text-sf-primary transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-sf-cream/90">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-sf-muted">
          Chinese names follow common Singapore usage; many dishes also have regional or dialect spellings. Where a name&apos;s
          origin is genuinely disputed, we say so rather than pick a story.
        </p>
      </section>

      <KeepExploring currentId="dish-names" />
    </>
  );
}

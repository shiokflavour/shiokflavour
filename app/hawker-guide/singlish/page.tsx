import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SINGLISH_TERMS } from "@/app/lib/hawker-guide";
import { KeepExploring } from "../keep-exploring";

export const metadata = {
  title: "Singlish Glossary | The Local Food Language Decoded",
  description:
    "Shiok, makan, jiak, dabao, kiasu, sian. The Singlish terms you'll hear at every hawker centre — meanings, pronunciation, and how to use them.",
};

export default function SinglishPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/hawker-guide"
          className="inline-flex items-center gap-2 text-sf-muted hover:text-sf-primary text-sm font-semibold mb-8 transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Hawker Guide
        </Link>

        <p className="text-[15px] font-semibold tracking-[0.25em] text-sf-primary uppercase mb-6">
          The Language
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.0] mb-6 max-w-3xl">
          Singlish Glossary
        </h1>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          Singlish is not broken English. It is a complete creole language built
          from Hokkien, Malay, Cantonese, Tamil, and English. These are the
          terms you will hear at every hawker centre.
        </p>
        <div className="w-12 h-px bg-sf-primary mt-10" />
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SINGLISH_TERMS.map((term) => (
            <article
              key={term.term}
              className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 hover:border-sf-primary/30 transition-all"
            >
              <div className="mb-3">
                <h2 className="text-white font-bold text-xl">{term.term}</h2>
                {term.pronunciation && (
                  <p className="text-sf-primary text-[15px] font-medium mt-0.5">
                    /{term.pronunciation}/
                  </p>
                )}
              </div>
              <p className="text-sf-muted text-sm leading-relaxed mb-3">
                {term.meaning}
              </p>
              <div className="bg-black/30 rounded-lg px-4 py-2.5">
                <p className="text-white/50 text-[15px] italic">
                  &quot;{term.usedIn}&quot;
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <KeepExploring currentId="singlish" />

      <SiteFooter />
    </>
  );
}

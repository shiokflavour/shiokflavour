import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { DRINKS } from "@/app/lib/hawker-guide";
import { KeepExploring } from "../keep-exploring";

export const metadata = {
  title: "Old School Kopitiam Names | Hawker Guide",
  description:
    "Tak Kiu, Michael Jackson, Diao He, Orh Gao — the nicknames a generation of Singaporeans gave their drinks, and the stories behind each one.",
};

export default function OldSchoolNamesPage() {
  const oldSchoolDrinks = DRINKS.filter((d) => d.category === "oldschool");

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
          Kopitiam Heritage
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.0] mb-6 max-w-3xl">
          Old School Names
        </h1>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          Before everything had a branded name, kopitiam regulars gave drinks
          nicknames based on the tin, the action, or whatever they associated
          with it. These are the ones worth knowing.
        </p>
        <div className="w-12 h-px bg-sf-primary mt-10" />
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {oldSchoolDrinks.map((drink) => (
            <article
              key={drink.name}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-sf-primary/30 transition-all"
            >
              <div className="mb-4">
                <h2 className="text-white font-bold text-xl mb-1">
                  {drink.name}
                </h2>
                {drink.alternateNames && (
                  <p className="text-sf-primary text-[15px] font-semibold uppercase tracking-wider">
                    {drink.alternateNames.join(" / ")}
                  </p>
                )}
              </div>
              <p className="text-sf-muted text-sm leading-relaxed mb-4">
                {drink.description}
              </p>
              {drink.story && (
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white/50 text-[15px] leading-relaxed italic">
                    {drink.story}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <KeepExploring currentId="old-school-names" />

      <SiteFooter />
    </>
  );
}

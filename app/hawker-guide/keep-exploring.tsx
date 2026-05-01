import Link from "next/link";
import { HAWKER_GUIDES, type GuideEntry } from "./guides-data";

type KeepExploringProps = {
  currentId: GuideEntry["id"];
};

export function KeepExploring({ currentId }: KeepExploringProps) {
  const others = HAWKER_GUIDES.filter((g) => g.id !== currentId);

  return (
    <section className="border-t border-white/5 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
              More From The Guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Keep Exploring
            </h2>
          </div>
          <Link
            href="/hawker-guide"
            className="hidden sm:inline-flex items-center gap-2 text-sf-muted hover:text-sf-primary text-sm font-semibold transition-colors whitespace-nowrap"
          >
            View all
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <div className="hide-scrollbar -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto">
          <div className="flex gap-5 px-4 sm:px-6 lg:px-8 pb-2">
            {others.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="group flex flex-col bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-sf-primary/40 hover:bg-[#1f1f1f] transition-all duration-200 w-[280px] sm:w-[320px] flex-shrink-0"
              >
                <p className="text-[12px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
                  Hawker Guide
                </p>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-sf-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sf-muted text-sm leading-relaxed mb-6 flex-1">
                  {guide.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-sf-primary text-sm font-semibold">
                  <span>{guide.cta}</span>
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
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Beef, Coffee, CookingPot, Croissant, Drumstick, Fish, Flame, Salad, Shell, Soup, UtensilsCrossed } from "lucide-react";
import { Wheat } from "lucide-react";
import { AREA_GUIDES, getGuide } from "@/app/lib/area-guides";
import type { DishIcon } from "@/app/lib/area-guide-types";

const ICONS = {
  flame: Flame,
  soup: Soup,
  fish: Fish,
  beef: Beef,
  drumstick: Drumstick,
  pot: CookingPot,
  coffee: Coffee,
  puff: Croissant,
  noodles: UtensilsCrossed,
  dumpling: Shell,
  roll: Salad,
  rice: Wheat,
  shell: Shell,
} satisfies Record<DishIcon, unknown>;

/** Photo-free "order this" tiles for one centre. */
export function OrderTiles({ slug }: { slug: string }) {
  const c = Object.values(AREA_GUIDES)
    .flatMap((g) => g.centres)
    .find((x) => x.slug === slug);
  if (!c) return null;
  return (
    <div className="my-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sf-muted">Order this</p>
      <ul className="grid gap-3 sm:grid-cols-3">
        {c.orders.map((o) => {
          const Icon = ICONS[o.icon];
          const body = (
            <>
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${c.color}1f`, color: c.color }}
                aria-hidden
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col sm:mt-3">
                <span className="text-base font-bold leading-snug text-white">{o.dish}</span>
                <span className="mt-0.5 text-xs font-semibold" style={{ color: c.color }}>
                  {o.stall} · {o.unit}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-sf-muted">{o.note}</span>
                {o.href ? <span className="mt-auto pt-3 text-xs font-semibold text-sf-primary">Read the story →</span> : null}
              </span>
            </>
          );
          const cls = "flex h-full gap-4 rounded-2xl sm:flex-col sm:gap-0 border bg-[#1a1a1a] p-4 transition-colors";
          const style = { borderColor: `${c.color}40` };
          return (
            <li key={o.stall}>
              {o.href ? (
                <Link href={o.href} className={`${cls} hover:bg-[#202022]`} style={style}>
                  {body}
                </Link>
              ) : (
                <div className={cls} style={style}>
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** A minute-by-minute plan, drawn as a vertical timeline. */
export function GuideTimeline({ guideId }: { guideId: string }) {
  const t = getGuide(guideId)?.timeline;
  if (!t) return null;
  const steps = t.steps;
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-sf-primary" aria-hidden />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">{t.kicker}</p>
      </div>
      <ol className="relative mt-6 space-y-6 border-l border-white/15 pl-6">
        {steps.map((s, i) => (
          <li key={s.time} className="relative">
            <span
              className={`absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 ${
                i === steps.length - 1 ? "border-sf-primary bg-sf-primary" : "border-sf-primary bg-[#1a1a1a]"
              }`}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-mono text-sm font-bold text-sf-primary">{s.time}</span>
              <span className="text-base font-bold text-white">{s.title}</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-sf-muted">{s.body}</p>
            {s.mins ? (
              <div className="mt-2 flex items-center gap-2">
                <span className="h-1 rounded-full bg-sf-primary/60" style={{ width: `${s.mins * 6}px` }} aria-hidden />
                <span className="text-[11px] text-sf-muted">{s.mins} min</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-sf-cream/90">{t.footer}</p>
    </div>
  );
}

/** Price ranges drawn to scale. */
export function GuidePrices({ guideId }: { guideId: string }) {
  const p = getGuide(guideId)?.prices;
  if (!p) return null;
  return (
    <figure className="my-8 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-6">
      <figcaption className="text-xs font-bold uppercase tracking-[0.2em] text-sf-muted">{p.kicker}</figcaption>
      <div className="mt-5 space-y-5">
        {p.rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-sf-cream/90">{r.label}</span>
              <span className="text-lg font-bold text-white">{r.range}</span>
            </div>
            <div className="relative mt-2 h-3 rounded-full bg-white/5">
              <span
                className="absolute inset-y-0 rounded-full"
                style={{ left: `${(r.lo / p.max) * 100}%`, width: `${((r.hi - r.lo) / p.max) * 100}%`, backgroundColor: r.color }}
                aria-hidden
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-sf-muted">{p.caption}</p>
    </figure>
  );
}

/** Tap-to-open answers, with FAQPage structured data. */
export function GuideFaq({ guideId }: { guideId: string }) {
  const faqs = getGuide(guideId)?.faqs ?? [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="my-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-white hover:text-sf-primary [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="text-xl leading-none text-sf-primary transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-sf-muted sm:text-base">{f.a}</p>
        </details>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

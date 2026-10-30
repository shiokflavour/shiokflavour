import Link from "next/link";
import { Beef, Coffee, CookingPot, Croissant, Drumstick, Fish, Flame, Salad, Shell, Soup, UtensilsCrossed } from "lucide-react";
import { BAY_CENTRES, BAY_FAQS, type DishIcon } from "@/app/lib/bay-guide";

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
} satisfies Record<DishIcon, unknown>;

/** Photo-free "order this" tiles for one centre. */
export function OrderTiles({ slug }: { slug: string }) {
  const c = BAY_CENTRES.find((x) => x.slug === slug);
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

/** The evening after Garden Rhapsody, minute by minute. */
export function BayEvening() {
  const steps = [
    { time: "7.45pm", title: "Garden Rhapsody", body: "Lie back under the Supertrees. The show runs about 15 minutes.", mins: 15 },
    { time: "8.00pm", title: "Walk to Bayfront", body: "Across the bridge to Marina Bay Sands and down to the station.", mins: 10 },
    { time: "8.10pm", title: "One stop on the Downtown Line", body: "Bayfront to Downtown. Two minutes on the train, a few more waiting.", mins: 6 },
    { time: "8.20pm", title: "Exit A or E", body: "Follow the charcoal smoke to Boon Tat Street.", mins: 5 },
    { time: "8.25pm", title: "Satay Street", body: "Chope a table, order a mix of sticks, find a cold drink inside the hall.", mins: 0 },
  ];
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-sf-primary" aria-hidden />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">An evening by the bay</p>
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
      <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-sf-cream/90">
        Catching the 8.45pm show instead? Add an hour. Satay Street runs until 3am on weeknights, so there is no rush.
      </p>
    </div>
  );
}

/** Hawker plate versus mall food court, drawn to scale. */
export function PriceContrast() {
  const rows = [
    { label: "A plate at a hawker centre", range: "S$4 to S$7", lo: 4, hi: 7, color: "#E8622A" },
    { label: "A plate at Rasapura Masters, MBS", range: "S$10 to S$15", lo: 10, hi: 15, color: "#8a8a8e" },
  ];
  const max = 16;
  return (
    <figure className="my-8 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-6">
      <figcaption className="text-xs font-bold uppercase tracking-[0.2em] text-sf-muted">What a main costs</figcaption>
      <div className="mt-5 space-y-5">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-sf-cream/90">{r.label}</span>
              <span className="text-lg font-bold text-white">{r.range}</span>
            </div>
            <div className="relative mt-2 h-3 rounded-full bg-white/5">
              <span
                className="absolute inset-y-0 rounded-full"
                style={{ left: `${(r.lo / max) * 100}%`, width: `${((r.hi - r.lo) / max) * 100}%`, backgroundColor: r.color }}
                aria-hidden
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-sf-muted">
        Roughly double, for air conditioning and an address. The train fare to the real thing costs less than the difference.
      </p>
    </figure>
  );
}

/** Tap-to-open answers, with FAQPage structured data. */
export function BayFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BAY_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="my-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
      {BAY_FAQS.map((f) => (
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

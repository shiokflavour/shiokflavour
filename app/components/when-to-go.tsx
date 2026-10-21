import type { FeaturedHawker } from "@/app/lib/featured-hawkers";

/** Meal-by-meal guide: hawker stalls keep their own hours, so we say what's open when. */
export function WhenToGo({ h }: { h: FeaturedHawker }) {
  const w = h.whenToGo;
  if (!w) return null;
  const rows: { label: string; time: string; text?: string }[] = [
    { label: "Breakfast", time: "about 7–10am", text: w.breakfast },
    { label: "Lunch", time: "about 11am–2pm", text: w.lunch },
    { label: "Dinner", time: "about 5–9pm", text: w.dinner },
    { label: "Late night", time: "after 10pm", text: w.lateNight },
  ].filter((r) => r.text);
  return (
    <section
      id="when-to-go"
      aria-labelledby="when-to-go-heading"
      className="scroll-mt-28 rounded-2xl border border-white/10 bg-sf-surface/50 p-6 sm:p-8"
    >
      <h2
        id="when-to-go-heading"
        className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary"
      >
        When to go
      </h2>
      <p className="mt-1 text-sm text-sf-muted">
        Opening hours and the best time to visit {h.name}
      </p>
      <p className="mt-5 rounded-xl border-l-4 border-sf-primary bg-sf-primary/[0.06] px-4 py-3 text-base font-semibold leading-relaxed text-sf-cream">
        {w.bestTime}
      </p>
      <dl className="mt-6 space-y-5">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
            <dt>
              <span className="block text-sm font-bold text-sf-cream">{r.label}</span>
              <span className="block text-xs text-sf-muted">{r.time}</span>
            </dt>
            <dd className="text-sm leading-relaxed text-sf-cream/90 sm:text-base">{r.text}</dd>
          </div>
        ))}
        {w.restDays && (
          <div className="grid gap-1 border-t border-white/10 pt-5 sm:grid-cols-[9rem_1fr] sm:gap-4">
            <dt className="text-sm font-bold text-sf-cream">Rest days</dt>
            <dd className="text-sm leading-relaxed text-sf-cream/90 sm:text-base">{w.restDays}</dd>
          </div>
        )}
      </dl>
      <p className="mt-6 text-xs text-sf-muted">
        Stall hours change and stalls close for holidays at short notice. Checked
        against recent guides; confirm on the day for a special trip.
      </p>
    </section>
  );
}

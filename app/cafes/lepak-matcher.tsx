"use client";

import { useState } from "react";
import { openStatus, singaporeNow, type Cafe, type Craving, type Who } from "@/app/lib/cafes";

type When = "morning" | "afternoon" | "evening";

const WHO: { v: Who; label: string }[] = [
  { v: "solo", label: "Just me" },
  { v: "date", label: "A date" },
  { v: "friends", label: "The gang" },
  { v: "family", label: "Family, kids included" },
];
const CRAVE: { v: Craving; label: string }[] = [
  { v: "coffee", label: "Proper coffee" },
  { v: "brunch", label: "Brunch" },
  { v: "sweet", label: "Something sweet" },
  { v: "oldschool", label: "Old-school kopi" },
];
const WHEN: { v: When; label: string; minutes: number }[] = [
  { v: "morning", label: "Morning", minutes: 9 * 60 + 30 },
  { v: "afternoon", label: "Afternoon", minutes: 15 * 60 },
  { v: "evening", label: "Evening", minutes: 19 * 60 + 30 },
];

const WHO_LINE: Record<Who, string> = {
  solo: "easy to sit alone",
  date: "a good date spot",
  friends: "works for a group",
  family: "relaxed for families",
};
function score(c: Cafe, who: Who, crave: Craving, day: number, minutes: number) {
  let s = 0;
  if (c.craves.includes(crave)) s += 3;
  if (c.who.includes(who)) s += 2;
  s += openStatus(c.hours, day, minutes).open ? 2 : -6;
  return s;
}

export function LepakMatcher({ cafes }: { cafes: Cafe[] }) {
  const [step, setStep] = useState(0);
  const [who, setWho] = useState<Who | null>(null);
  const [crave, setCrave] = useState<Craving | null>(null);
  const [when, setWhen] = useState<When | null>(null);

  const reset = () => {
    setStep(0);
    setWho(null);
    setCrave(null);
    setWhen(null);
  };

  const results = (() => {
    if (!who || !crave || !when) return [];
    const { day } = singaporeNow();
    const minutes = WHEN.find((w) => w.v === when)!.minutes;
    return cafes
      .map((c) => ({ c, s: score(c, who, crave, day, minutes), open: openStatus(c.hours, day, minutes).open }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 2);
  })();

  const jumpTo = (slug: string) => {
    const el = document.getElementById(`cafe-${slug}`);
    if (!el) return;
    el.querySelector("details")?.setAttribute("open", "");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const option = (label: string, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      className="rounded-xl border border-white/15 px-4 py-3 text-left text-sm font-semibold text-sf-cream transition-colors hover:border-sf-primary hover:text-sf-primary"
    >
      {label}
    </button>
  );

  return (
    <section
      aria-labelledby="matcher-heading"
      className="rounded-2xl border border-sf-primary/30 bg-sf-primary/[0.06] p-5 sm:p-6"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="matcher-heading" className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary">
          Lepak Matcher
        </h2>
        {step > 0 ? (
          <button type="button" onClick={reset} className="text-xs text-sf-muted underline underline-offset-4">
            Start over
          </button>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-sf-muted">Can&apos;t decide? Three taps and we&apos;ll pick for you.</p>

      {step === 0 ? (
        <div className="mt-5">
          <p className="text-base font-semibold text-sf-cream">Who are you going with?</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {WHO.map((o) => option(o.label, () => { setWho(o.v); setStep(1); }))}
          </div>
        </div>
      ) : null}
      {step === 1 ? (
        <div className="mt-5">
          <p className="text-base font-semibold text-sf-cream">What are you craving?</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {CRAVE.map((o) => option(o.label, () => { setCrave(o.v); setStep(2); }))}
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div className="mt-5">
          <p className="text-base font-semibold text-sf-cream">When are you going today?</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {WHEN.map((o) => option(o.label, () => { setWhen(o.v); setStep(3); }))}
          </div>
        </div>
      ) : null}
      {step === 3 ? (
        <div className="mt-5">
          <p className="text-base font-semibold text-sf-cream">Your lepak match</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {results.map(({ c, open }, i) => (
              <div key={c.slug} className="rounded-xl border border-white/10 bg-sf-bg/60 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-sf-primary">{i === 0 ? "Best match" : "Also good"}</p>
                <p className="mt-1 text-lg font-bold text-sf-cream">{c.name}</p>
                <p className="mt-1 text-sm text-sf-cream/85">
                  Must order: {c.orderThis[0].replace(/\s*\(.*\)$/, "")}.
                  {who && c.who.includes(who) ? ` ${WHO_LINE[who].replace(/^\w/, (x) => x.toUpperCase())}.` : ""}
                  {open ? "" : " Heads up: probably closed at that time today."}
                </p>
                <button type="button" onClick={() => jumpTo(c.slug)} className="mt-3 text-sm font-semibold text-sf-primary underline underline-offset-4">
                  See the details
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

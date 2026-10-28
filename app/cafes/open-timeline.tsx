"use client";

import { useEffect, useState } from "react";
import { LOOKS, formatTime, singaporeNow, type Cafe } from "@/app/lib/cafes";

const START = 7 * 60;
const END = 23 * 60 + 30;
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TICKS = [7, 11, 15, 19, 23];

const pct = (m: number) => `${((Math.min(Math.max(m, START), END) - START) / (END - START)) * 100}%`;

function jumpTo(slug: string) {
  const el = document.getElementById(`cafe-${slug}`);
  if (!el) return;
  el.querySelector("details")?.setAttribute("open", "");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Gantt-style view of who is open when, with a live "now" line for today (Singapore time). */
export function OpenTimeline({ cafes }: { cafes: Cafe[] }) {
  const [now, setNow] = useState<{ day: number; minutes: number } | null>(null);
  const [day, setDay] = useState<number | null>(null);

  useEffect(() => {
    const n = singaporeNow();
    setNow(n);
    setDay(n.day);
    const t = window.setInterval(() => setNow(singaporeNow()), 60_000);
    return () => window.clearInterval(t);
  }, []);

  const shownDay = day ?? 1;
  const isToday = now !== null && shownDay === now.day;
  const rows = [...cafes].sort((a, b) => {
    const ao = a.hours[shownDay]?.[0]?.[0] ?? 9999;
    const bo = b.hours[shownDay]?.[0]?.[0] ?? 9999;
    return ao - bo;
  });

  return (
    <section aria-labelledby="timeline-heading" className="rounded-2xl border border-white/10 bg-sf-surface/50 p-5 sm:p-6">
      <h2 id="timeline-heading" className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary">
        Who&apos;s open when
      </h2>
      <p className="mt-1 text-sm text-sf-muted">
        Opening hours at a glance{isToday ? ". The orange line is now, Singapore time" : ""}. Tap a cafe to jump to it.
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label="Choose a day">
        {DAYS.map((d, i) => (
          <button
            key={d}
            type="button"
            onClick={() => setDay(i)}
            aria-pressed={shownDay === i}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              shownDay === i
                ? "border-sf-primary bg-sf-primary/15 font-semibold text-sf-primary"
                : "border-white/15 text-white/70 hover:text-white"
            }`}
          >
            {now && i === now.day ? "Today" : d}
          </button>
        ))}
      </div>

      <div className="relative mt-5">
        <div className="grid grid-cols-[7.5rem_1fr] gap-x-3 text-[11px] text-sf-muted sm:grid-cols-[10rem_1fr]">
          <span />
          <div className="relative h-4">
            {TICKS.map((h) => (
              <span key={h} className="absolute -translate-x-1/2" style={{ left: pct(h * 60) }}>
                {formatTime(h * 60)}
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-1 space-y-1.5">
          {rows.map((c) => {
            const spans = c.hours[shownDay];
            const color = LOOKS[c.look].color;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => jumpTo(c.slug)}
                  className="group grid w-full grid-cols-[7.5rem_1fr] items-center gap-x-3 text-left sm:grid-cols-[10rem_1fr]"
                  aria-label={`${c.name}: ${c.hoursText}`}
                >
                  <span className="truncate text-xs text-sf-cream/90 group-hover:text-sf-primary sm:text-sm">{c.name}</span>
                  <span className="relative block h-3.5 rounded-full bg-white/5">
                    {spans ? (
                      spans.map(([o, cl]) => (
                        <span
                          key={o}
                          className="absolute top-0 h-3.5 rounded-full"
                          style={{ left: pct(o), width: `calc(${pct(cl)} - ${pct(o)})`, backgroundColor: color }}
                        />
                      ))
                    ) : (
                      <span className="absolute inset-0 flex items-center pl-2 text-[10px] text-white/40">Closed</span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {isToday && now && now.minutes >= START && now.minutes <= END ? (
          <div className="pointer-events-none absolute bottom-0 top-5 grid w-full grid-cols-[7.5rem_1fr] gap-x-3 sm:grid-cols-[10rem_1fr]" aria-hidden>
            <span />
            <span className="relative">
              <span className="absolute bottom-0 top-0 w-0.5 bg-sf-primary" style={{ left: pct(now.minutes) }} />
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}

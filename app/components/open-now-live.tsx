"use client";

import { useEffect, useState } from "react";
import { formatTime, openStatus, singaporeNow } from "@/app/lib/cafes";
import { toWeek, type HawkerHours } from "@/app/lib/hawker-hours";

type Now = { day: number; minutes: number };
type Tone = "good" | "some" | "off" | "closed";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fmt = (m: number) => (m >= 1440 ? "midnight" : formatTime(m));

/** Follow a span that runs to midnight into the next day's early hours. */
function realClose(week: ReturnType<typeof toWeek>, day: number, closesAt: number) {
  if (closesAt < 1440) return closesAt;
  const spill = week[(day + 1) % 7]?.find(([o]) => o === 0);
  return spill ? spill[1] : 1440;
}

function nextStart(week: ReturnType<typeof toWeek>, now: Now): string | null {
  const today = week[now.day]?.find(([o]) => o > now.minutes && o > 0);
  if (today) return `from about ${formatTime(today[0])}`;
  for (let k = 1; k <= 7; k++) {
    const d = (now.day + k) % 7;
    const first = week[d]?.find(([o]) => o > 0) ?? week[d]?.[0];
    if (first) return `${k === 1 ? "tomorrow" : DAYS[d]} from about ${formatTime(first[0])}`;
  }
  return null;
}

export function statusFor(hours: HawkerHours, now: Now): { tone: Tone; label: string } {
  const core = toWeek(hours.core);
  const few = toWeek(hours.few);
  const c = openStatus(core, now.day, now.minutes);
  if (hours.allDay) {
    return c.open
      ? { tone: "good", label: `Open 24 hours · most stalls trading until about ${fmt(realClose(core, now.day, c.closesAt!))}` }
      : { tone: "some", label: `Open 24 hours · most stalls ${nextStart(core, now) ?? "later"}` };
  }
  if (c.open) {
    return { tone: "good", label: `Open now · most stalls trading until about ${fmt(realClose(core, now.day, c.closesAt!))}` };
  }
  const f = openStatus(few, now.day, now.minutes);
  if (f.open) {
    const coreToday = core[now.day]?.find(([o]) => o > now.minutes);
    return coreToday
      ? { tone: "some", label: `A few stalls open now · most from about ${formatTime(coreToday[0])}` }
      : { tone: "some", label: `Winding down · a few stalls until about ${fmt(realClose(few, now.day, f.closesAt!))}` };
  }
  const next = nextStart(few, now);
  return { tone: "off", label: `Mostly closed now${next ? ` · stalls start ${next}` : ""}` };
}

const TONE: Record<Tone, string> = {
  good: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  some: "bg-amber-400/15 text-amber-200 ring-amber-400/30",
  off: "bg-white/5 text-sf-muted ring-white/15",
  closed: "bg-red-500/15 text-red-300 ring-red-500/30",
};

export function OpenNowLive({
  hours,
  closedUntil,
  closedReason,
}: {
  hours: HawkerHours;
  closedUntil?: string;
  closedReason?: string;
}) {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    setNow(singaporeNow());
    const id = setInterval(() => setNow(singaporeNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (closedUntil) {
    return (
      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${TONE.closed}`}>
        <span className="h-2 w-2 rounded-full bg-current" aria-hidden />
        Closed for {closedReason ?? "cleaning"} until {closedUntil}
      </span>
    );
  }
  if (!now) return <span className="inline-block h-8" aria-hidden />;
  const s = statusFor(hours, now);
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${TONE[s.tone]}`}>
      <span className={`h-2 w-2 rounded-full bg-current ${s.tone === "good" ? "animate-pulse" : ""}`} aria-hidden />
      {s.label}
    </span>
  );
}

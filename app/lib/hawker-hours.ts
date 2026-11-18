/*
 * Typical trading hours for each hawker centre, for the "Open now" panel.
 *
 * Hawker centres have no single opening time: every stall keeps its own.
 * "core" is when most stalls are trading; "few" is the wider window when at
 * least some stalls are open. Both come from each centre's researched
 * "when to go" notes in featured-hawkers.ts (stall hours checked Oct 2026).
 * Times are minutes from midnight; a close after midnight is written as
 * 24h + hours (2am = H(26)). Index 0 = Sunday.
 */
import type { WeekHours } from "./cafes";
import { formatTime } from "./cafes";

const H = (h: number, m = 0) => h * 60 + m;
type Span = [number, number] | null;

export type HawkerHours = {
  /** When most stalls trade, one span per day (Sun..Sat). */
  core: Span[];
  /** When at least a few stalls trade. */
  few: Span[];
  /** Shown instead of "a few stalls" wording, e.g. for 24-hour buildings. */
  note?: string;
  /** The building itself never closes. */
  allDay?: boolean;
};

const daily = (s: Span): Span[] => Array(7).fill(s);
/** Mon–Fri one span, Sat another, Sun another. */
const weekdays = (wk: Span, sat: Span, sun: Span): Span[] => [sun, wk, wk, wk, wk, wk, sat];

export const HAWKER_HOURS: Record<string, HawkerHours> = {
  "maxwell-food-centre": { core: daily([H(10), H(20)]), few: daily([H(5, 30), H(21)]) },
  "lau-pa-sat": {
    core: daily([H(11), H(22)]),
    few: daily([0, 1440]),
    allDay: true,
    note: "The hall is open 24 hours. Satay Street runs from 7pm (3pm at weekends) to about 3am.",
  },
  "old-airport-road-food-centre": { core: daily([H(10), H(21)]), few: daily([H(6, 30), H(23)]) },
  "chinatown-complex-food-centre": { core: daily([H(7), H(15)]), few: daily([H(5), H(21)]) },
  "newton-food-centre": { core: daily([H(12), H(22, 30)]), few: weekdays([H(7), H(26, 30)], [H(9), H(26, 30)], [H(9), H(26, 30)]) },
  "tekka-centre": { core: daily([H(7), H(15)]), few: daily([H(6), H(23)]) },
  "adam-road-food-centre": { core: daily([H(7, 30), H(15)]), few: daily([H(7), H(24)]) },
  "bedok-interchange-hawker-centre": { core: daily([H(7), H(21)]), few: daily([H(5), H(22)]) },
  "bedok-85-fengshan-market": { core: daily([H(16), H(23)]), few: daily([H(7), H(26)]) },
  "tampines-round-market": { core: daily([H(6, 30), H(13, 30)]), few: daily([H(6), H(20)]) },
  "geylang-serai-market": { core: daily([H(8), H(16)]), few: daily([H(7), H(19, 45)]) },
  "amoy-street-food-centre": {
    core: weekdays([H(8), H(14, 30)], null, null),
    few: weekdays([H(7), H(20)], [H(9), H(14, 30)], [H(9), H(14, 30)]),
  },
  "tiong-bahru-market": { core: daily([H(6, 30), H(14, 30)]), few: daily([H(6), H(22)]) },
  "abc-brickworks-market": { core: daily([H(7), H(20)]), few: daily([H(5, 30), H(21, 30)]) },
  "holland-drive-market-food-centre": { core: daily([H(7), H(14, 30)]), few: daily([H(6, 30), H(20, 30)]) },
  "clementi-448-market": { core: daily([H(7), H(15)]), few: daily([H(7), H(21)]) },
  "jurong-west-505-market": { core: daily([H(6), H(14)]), few: daily([H(5, 30), H(21)]) },
  "yishun-park-hawker-centre": { core: daily([H(11), H(21)]), few: daily([H(6), H(22)]) },
  "sembawang-hills-food-centre": { core: daily([H(6, 30), H(14)]), few: daily([H(6), H(20, 30)]) },
  "chong-pang-market": { core: daily([H(6, 30), H(16)]), few: daily([H(6), H(22)]) },
  "marsiling-mall-hawker-centre": { core: daily([H(7), H(15)]), few: daily([H(6), H(20, 30)]) },
  "toa-payoh-lorong-8-market": { core: daily([H(8), H(20)]), few: daily([H(8), H(21)]) },
  "golden-shoe-market-street": {
    core: weekdays([H(8), H(14, 30)], null, null),
    few: weekdays([H(7), H(19, 30)], [H(7), H(12)], null),
  },
  "hong-lim-market-food-centre": { core: daily([H(7), H(15)]), few: daily([H(6), H(21)]) },
  "peoples-park-food-centre": { core: daily([H(10), H(21)]), few: daily([H(9), H(21, 30)]) },
  "east-coast-lagoon-food-village": { core: daily([H(16), H(23)]), few: daily([H(11), H(23, 30)]) },
  "marine-parade-food-centre": { core: daily([H(7), H(17)]), few: daily([H(7), H(22)]) },
  "jalan-berseh-food-centre": { core: daily([H(9), H(17)]), few: daily([H(7), H(20)]) },
  "ghim-moh-market-food-centre": { core: daily([H(6, 30), H(14)]), few: daily([H(6, 30), H(20)]) },
  "alexandra-village-food-centre": { core: daily([H(7), H(14, 30)]), few: daily([H(7), H(21, 45)]) },
  "shunfu-market-food-centre": { core: daily([H(6, 30), H(14)]), few: daily([H(6), H(17)]) },
  "pasir-panjang-food-centre": { core: daily([H(11, 30), H(20, 30)]), few: daily([H(7), H(23)]) },
};

/** Spread per-day spans into WeekHours, carrying after-midnight time into the next day. */
export function toWeek(days: Span[]): WeekHours {
  const out: [number, number][][] = Array.from({ length: 7 }, () => []);
  days.forEach((d, i) => {
    if (!d) return;
    const [o, c] = d;
    out[i].push([o, Math.min(c, 1440)]);
    if (c > 1440) out[(i + 1) % 7].push([0, c - 1440]);
  });
  return out.map((s) => (s.length ? s.sort((a, b) => a[0] - b[0]) : null));
}

const t = (m: number) => (m >= 1440 && m % 1440 === 0 ? "midnight" : formatTime(m % 1440));
export const spanText = (s: Span) => (s ? `${t(s[0])} to ${t(s[1])}` : "closed");

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** "7am to 3pm daily" or "Mon to Fri 8am to 2.30pm; Sat: closed; Sun: closed". */
export function weeklyText(days: Span[]): string {
  const same = days.every((d) => JSON.stringify(d) === JSON.stringify(days[0]));
  if (same) return days[0] ? `${spanText(days[0])} daily` : "closed";
  const wk = days.slice(1, 6);
  const wkSame = wk.every((d) => JSON.stringify(d) === JSON.stringify(wk[0]));
  if (wkSame) {
    const parts = [`Mon to Fri ${spanText(wk[0])}`];
    if (JSON.stringify(days[6]) === JSON.stringify(days[0])) {
      parts.push(days[6] ? `weekends ${spanText(days[6])}` : "closed at weekends");
    } else {
      parts.push(days[6] ? `Sat ${spanText(days[6])}` : "Sat closed");
      parts.push(days[0] ? `Sun ${spanText(days[0])}` : "Sun closed");
    }
    return parts.join(", ");
  }
  return days.map((d, i) => `${DAY_SHORT[i]} ${spanText(d)}`).join(", ");
}

/** Short summary of when most stalls trade, for titles, cards and descriptions. */
export function coreSummary(h: HawkerHours): string {
  const days = h.core;
  const same = days.every((d) => JSON.stringify(d) === JSON.stringify(days[0]));
  if (same && days[0]) return spanText(days[0]);
  const wk = days[1];
  return wk ? `${spanText(wk)} on weekdays` : weeklyText(days);
}

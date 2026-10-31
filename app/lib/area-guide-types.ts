/*
 * Shared shapes for the interactive "hawker food near X" guides
 * (Marina Bay, Orchard, ...). Each guide lives in its own data file.
 */
import type { WeekHours } from "./cafes";

export type DishIcon =
  | "flame"
  | "soup"
  | "fish"
  | "beef"
  | "drumstick"
  | "pot"
  | "coffee"
  | "puff"
  | "noodles"
  | "dumpling"
  | "roll"
  | "rice"
  | "shell";

export type GuideOrder = {
  dish: string;
  stall: string;
  unit: string;
  note: string;
  href?: string;
  icon: DishIcon;
};

export type GuideCentre = {
  slug: string;
  name: string;
  short: string;
  href: string;
  /** Exact text of the article's h2 for this centre, used for jump links. */
  heading: string;
  color: string;
  lat: number;
  lng: number;
  /** Route text for each "from" option in the table, keyed by FromOption.id. */
  routes: Record<string, string>;
  bestFor: string;
  closures: string;
  /** Our "good time to go" window, index 0 = Sunday, minutes from midnight. */
  window: WeekHours;
  /** Shown instead of the computed status when the window covers the whole day. */
  allDayLabel?: string;
  /** A sub-attraction with its own hours, e.g. Satay Street at Lau Pa Sat. */
  live?: { hours: WeekHours; on: string; offPrefix: string };
  orders: GuideOrder[];
};

export type GuideLandmark = {
  name: string;
  kind: "mrt" | "sight";
  lat: number;
  lng: number;
  note?: string;
};

export type PlanStep = { icon: "walk" | "train" | "bus" | "pin"; text: string };

export type GuidePlan = {
  pick: string; // centre slug
  why: string;
  steps: PlanStep[];
  time: string;
  also?: { text: string; href: string };
};

export type GuideSpot = {
  id: string;
  label: string;
  /** First matching plan wins; a plan with no time range is the fallback. */
  plans: { from?: number; to?: number; plan: GuidePlan }[];
};

export type GuideTimeline = {
  kicker: string;
  steps: { time: string; title: string; body: string; mins: number }[];
  footer: string;
};

export type GuidePrices = {
  kicker: string;
  rows: { label: string; range: string; lo: number; hi: number; color: string }[];
  max: number;
  caption: string;
};

export type AreaGuide = {
  id: string;
  /** Labels for the table's route toggle; ids key into GuideCentre.routes. */
  from: { id: string; label: string }[];
  centres: GuideCentre[];
  landmarks: GuideLandmark[];
  landmarkLegend: string;
  faqs: { q: string; a: string }[];
  nav: [string, string][];
  picker: {
    kicker: string;
    question: string;
    spots: GuideSpot[];
    /** Open on this spot automatically during these Singapore-time minutes. */
    auto?: { from: number; to: number; spot: string };
  };
  timeline?: GuideTimeline;
  prices?: GuidePrices;
  mapLabel: string;
};

/** Same rule as the article's h2 ids. */
export function headingId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

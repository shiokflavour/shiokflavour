import type { FoodHeritageDish } from "./food-heritage";
import type { FeaturedHawker } from "./featured-hawkers";
import { hasNeaSchedule } from "./hawker-closures";

export type FaqItem = {
  q: string;
  a: string;
  /** Optional link shown after the answer. */
  link?: { label: string; href: string };
};

function sentence(text: string): string {
  const t = text.trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

function listJoin(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

const PROPER = new Set([
  "hainanese", "teochew", "hokkien", "hakka", "nonya", "peranakan", "katong",
  "penang", "singapore", "indian", "malay", "chinese",
]);

/** Dish name for use mid-sentence: "Economy Rice" -> "economy rice", keeps "Hainanese". */
function midSentence(name: string): string {
  return name
    .split(" ")
    .map((w) => (PROPER.has(w.toLowerCase()) ? w : w.toLowerCase()))
    .join(" ");
}

/** Hand-written FAQs first, then questions answered from the page's verified data. */
export function buildDishFaqs(dish: FoodHeritageDish): FaqItem[] {
  const out: FaqItem[] = [...(dish.faqs ?? [])];
  const name = midSentence(dish.name);
  const Name = name.charAt(0).toUpperCase() + name.slice(1);

  if (dish.bestStalls.length > 0) {
    out.push({
      q: `Where can I eat the best ${name} in Singapore?`,
      a: `Our picks are ${listJoin(
        dish.bestStalls.map((s) => `${s.name} (${s.area})`),
      )}. Each one is checked against recent food guides; see the full list with addresses on this page.`,
    });
  } else if (dish.whereToFind) {
    out.push({ q: `Where can I find ${name} in Singapore?`, a: sentence(dish.whereToFind) });
  }

  if (dish.priceRange) {
    const pr = dish.priceRange.trim();
    out.push({
      q: `How much does ${name} cost in Singapore?`,
      a: pr.startsWith("S$") ? `Expect to pay about ${sentence(pr)}` : sentence(pr),
    });
  }

  const spice: Record<string, string> = {
    Mild: `Only mildly. ${Name} has a gentle warmth rather than real heat.`,
    Medium: `Moderately. ${Name} has noticeable heat, but most people find it comfortable.`,
    Hot: `Yes. ${Name} is one of the spicier hawker dishes, so go easy if you're sensitive to chilli.`,
  };
  if (spice[dish.spiceLevel]) {
    out.push({ q: `Is ${name} spicy?`, a: spice[dish.spiceLevel] });
  }

  if (dish.howToEat?.length) {
    out.push({
      q: `How do you eat ${name} like a local?`,
      a: dish.howToEat.slice(0, 2).map(sentence).join(" "),
    });
  }

  return dedupe(out);
}

export function buildHawkerFaqs(h: FeaturedHawker): FaqItem[] {
  const out: FaqItem[] = [...(h.faqs ?? [])];
  const name = h.name;

  if (h.legendaryStalls?.length) {
    out.push({
      q: `What are the best stalls at ${name}?`,
      a: `Our picks are ${listJoin(
        h.legendaryStalls.map((s) => `${s.name} for ${s.dish.toLowerCase()}`),
      )}. Each is checked against recent food guides.`,
    });
  }

  if (h.michelinNote.trim()) {
    out.push({
      q: `Does ${name} have Michelin-recognised stalls?`,
      a: sentence(h.michelinNote),
    });
  }

  const cleaning = hasNeaSchedule(name)
    ? " The centre also closes for a few days of NEA cleaning each quarter; the notice at the top of this page shows the next closure."
    : "";
  out.push({
    q: `What are ${name}'s opening hours?`,
    a:
      (h.hours === "Hours vary by stall"
        ? "Each stall keeps its own hours, so there's no single opening time. Many open from breakfast and close by mid-afternoon or evening."
        : sentence(h.hours)) + cleaning,
  });

  out.push({
    q: `How do I get to ${name}?`,
    a: `It's at ${h.address}. Nearest MRT: ${h.nearestMRT.replace(" — ", ", ")}.`,
  });

  if (h.budgetPerPax) {
    out.push({
      q: `How much does a meal at ${name} cost?`,
      a: `Most people spend around ${h.budgetPerPax} per person for a main and a drink.`,
    });
  }

  out.push({
    q: `Is ${name} halal?`,
    a: h.halal
      ? "Many stalls here are halal-certified. Certified stalls display a MUIS halal certificate, so check for it before you order."
      : "Not every stall is halal. Halal-certified stalls display a MUIS halal certificate, so look for it before you order.",
  });

  if (h.tipForVisitors) {
    out.push({ q: `Any tips for visiting ${name}?`, a: sentence(h.tipForVisitors) });
  }

  return dedupe(out);
}

function dedupe(items: FaqItem[]): FaqItem[] {
  const seen = new Set<string>();
  return items.filter((i) => {
    const k = i.q.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

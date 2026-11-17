"use client";

import { useState } from "react";

type Kind = "meat" | "seafood" | "veg";
type Dish = {
  id: string;
  name: string;
  /** What to call it at the counter, if different. */
  say?: string;
  kind: Kind;
  dry: boolean;
  /** 1 mild, 2 medium, 3 hot. */
  heat: 1 | 2 | 3;
  what: string;
  /** Price at Hjh Maimunah, June 2026 (Eatbook). */
  price?: number;
  start?: boolean;
};

const DISHES: Dish[] = [
  {
    id: "rendang",
    name: "Beef rendang",
    kind: "meat",
    dry: true,
    heat: 2,
    what: "Beef simmered for hours in coconut milk and spices until the liquid is gone and the meat fries in its own fat. Dark, dry and the test of every cook.",
    price: 4.5,
    start: true,
  },
  {
    id: "ayam-goreng",
    name: "Ayam goreng",
    kind: "meat",
    dry: true,
    heat: 1,
    what: "Spiced fried chicken, marinated before frying so the flavour goes to the bone. The safe pick for anyone nervous of chilli.",
    price: 4,
  },
  {
    id: "sambal-telur",
    name: "Sambal telur",
    kind: "veg",
    dry: false,
    heat: 2,
    what: "Hard-boiled eggs in a sweet, sticky chilli sambal. Cheap, filling and better than it has any right to be.",
    price: 2.5,
  },
  {
    id: "begedil",
    name: "Begedil",
    say: "also bergedil or perkedel",
    kind: "veg",
    dry: true,
    heat: 1,
    what: "A fried potato patty, soft inside, sometimes with minced beef. The thing children fight over.",
    price: 1.5,
    start: true,
  },
  {
    id: "sambal-goreng",
    name: "Sambal goreng",
    kind: "veg",
    dry: true,
    heat: 2,
    what: "Long beans, tempeh and tofu fried in chilli. Crunchy, sweet, spicy, and on almost every plate in the queue.",
    price: 1.5,
    start: true,
  },
  {
    id: "sayur-lodeh",
    name: "Sayur lodeh",
    kind: "veg",
    dry: false,
    heat: 1,
    what: "Vegetables in a mild coconut curry. It cools the rendang down and soaks into the rice.",
    price: 1.5,
    start: true,
  },
  {
    id: "gulai-ayam",
    name: "Gulai ayam",
    kind: "meat",
    dry: false,
    heat: 2,
    what: "Chicken in a yellow coconut and turmeric curry. The wet partner to a dry rendang.",
  },
  {
    id: "ayam-bakar",
    name: "Ayam bakar",
    kind: "meat",
    dry: true,
    heat: 1,
    what: "Grilled chicken, glazed and slightly charred. Hjh Maimunah is known for theirs.",
  },
  {
    id: "sambal-goreng-pengantin",
    name: "Sambal goreng pengantin",
    say: "the 'bridal' sambal goreng",
    kind: "meat",
    dry: false,
    heat: 2,
    what: "A richer sambal goreng traditionally cooked for Malay weddings. A Hjh Maimunah signature.",
  },
  {
    id: "paru",
    name: "Paru goreng",
    kind: "meat",
    dry: true,
    heat: 1,
    what: "Beef lung, sliced thin and fried until crisp. Tastes like a savoury cracker. For the brave.",
  },
  {
    id: "asam-pedas",
    name: "Ikan asam pedas",
    kind: "seafood",
    dry: false,
    heat: 3,
    what: "Fish in a sour, spicy tamarind and chilli gravy. Sharp and hot, the best gravy to pour over rice.",
  },
  {
    id: "sotong-hitam",
    name: "Sotong masak hitam",
    kind: "seafood",
    dry: false,
    heat: 2,
    what: "Squid cooked in its own ink until the gravy turns black. Rich, briny and a Rumah Makan Minang favourite.",
  },
  {
    id: "ikan-bakar",
    name: "Ikan bakar",
    kind: "seafood",
    dry: true,
    heat: 2,
    what: "Grilled fish, often brushed with chilli paste. Ask whether it is priced by the piece before you order.",
  },
  {
    id: "terung-balado",
    name: "Terung balado",
    kind: "veg",
    dry: true,
    heat: 3,
    what: "Aubergine smothered in balado, the Minangkabau red chilli sauce. Soft, smoky and properly hot.",
  },
  {
    id: "daun-ubi",
    name: "Gulai daun ubi",
    kind: "veg",
    dry: false,
    heat: 1,
    what: "Cassava leaves in coconut gravy, a West Sumatran everyday vegetable. Earthy and gentle.",
  },
  {
    id: "serunding",
    name: "Serunding",
    kind: "meat",
    dry: true,
    heat: 1,
    what: "Beef or coconut floss, toasted dry and sweet. Sprinkle a spoonful over rice.",
  },
];

const FILTERS: [string, string, (d: Dish) => boolean][] = [
  ["all", "All", () => true],
  ["meat", "Meat", (d) => d.kind === "meat"],
  ["seafood", "Seafood", (d) => d.kind === "seafood"],
  ["veg", "Veg & eggs", (d) => d.kind === "veg"],
  ["mild", "Not spicy", (d) => d.heat === 1],
  ["gravy", "In gravy", (d) => !d.dry],
];

const money = (n: number) => `S$${n.toFixed(2)}`;
const HEAT = ["", "Mild", "Medium", "Hot"];

/** Dish decoder plus a plate builder priced from one real counter. */
export function PadangDecoder() {
  const [filter, setFilter] = useState("all");
  const [plate, setPlate] = useState<Record<string, number>>({});
  const test = FILTERS.find((f) => f[0] === filter)?.[2] ?? (() => true);
  const shown = DISHES.filter(test);

  const add = (id: string, n: number) =>
    setPlate((p) => {
      const next = { ...p, [id]: Math.max(0, (p[id] ?? 0) + n) };
      if (!next[id]) delete next[id];
      return next;
    });
  const starter = () => setPlate(Object.fromEntries(DISHES.filter((d) => d.start).map((d) => [d.id, 1])));

  const items = DISHES.filter((d) => plate[d.id]);
  const total = items.reduce((s, d) => s + (d.price ?? 0) * plate[d.id], 0);
  const unpriced = items.filter((d) => d.price === undefined).length;
  const hasDry = items.some((d) => d.dry);
  const hasWet = items.some((d) => !d.dry);
  const hint = !items.length
    ? "Tap + on a dish to put it on your plate."
    : !hasWet
      ? "All dry so far. Add something in gravy, or ask for kuah over the rice."
      : !hasDry
        ? "All gravy so far. Add something dry, like rendang or begedil, for texture."
        : "Dry and wet, rich and fresh. That is a balanced plate.";

  return (
    <section aria-labelledby="padang-decoder-heading" className="my-10 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-sf-primary" aria-hidden />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">Dish decoder</p>
      </div>
      <h2 id="padang-decoder-heading" className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        Build your first plate
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-sf-muted sm:text-base">
        Sixteen dishes you will meet behind the glass. Filter them, read what each one is, and add a few to see what the plate costs.
      </p>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter dishes">
        {FILTERS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
              filter === id ? "bg-sf-primary text-white" : "bg-white/5 text-sf-muted hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {shown.map((d) => {
          const n = plate[d.id] ?? 0;
          return (
            <li key={d.id} className={`rounded-xl border p-4 ${n ? "border-sf-primary/60 bg-sf-primary/5" : "border-white/10 bg-black/20"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-white">{d.name}</p>
                  {d.say ? <p className="text-xs text-sf-muted">{d.say}</p> : null}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {n ? (
                    <>
                      <button
                        type="button"
                        onClick={() => add(d.id, -1)}
                        aria-label={`Remove one ${d.name}`}
                        className="h-8 w-8 rounded-full bg-white/10 text-lg font-bold text-white hover:bg-white/20"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm font-bold text-white" aria-live="polite">
                        {n}
                      </span>
                    </>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => add(d.id, 1)}
                    aria-label={`Add ${d.name} to your plate`}
                    className="h-8 w-8 rounded-full bg-sf-primary text-lg font-bold text-white hover:bg-sf-primary/90"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-sf-cream/90">{d.what}</p>
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-sf-muted">
                <span>{d.dry ? "Dry" : "In gravy"}</span>
                <span className={d.heat === 3 ? "text-sf-primary" : undefined}>{HEAT[d.heat]}</span>
                {d.price !== undefined ? <span className="text-white">{money(d.price)}</span> : null}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 rounded-xl bg-black/30 p-4 sm:p-5" aria-live="polite">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sf-muted">Your plate</p>
          <div className="flex gap-3 text-sm">
            <button type="button" onClick={starter} className="font-semibold text-sf-primary underline underline-offset-4">
              Show me a first-timer&apos;s plate
            </button>
            {items.length ? (
              <button type="button" onClick={() => setPlate({})} className="text-sf-muted underline underline-offset-4 hover:text-white">
                Clear
              </button>
            ) : null}
          </div>
        </div>
        {items.length ? (
          <ul className="mt-2 space-y-1 text-sm text-sf-cream/90">
            {items.map((d) => (
              <li key={d.id} className="flex justify-between gap-3">
                <span>
                  {plate[d.id] > 1 ? `${plate[d.id]} × ` : ""}
                  {d.name}
                </span>
                <span className="text-sf-muted">{d.price !== undefined ? money(d.price * plate[d.id]) : "ask"}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-3 text-2xl font-bold text-white">
          {money(total)}
          <span className="ml-2 text-sm font-normal text-sf-muted">
            {unpriced ? `+ rice + ${unpriced} dish${unpriced > 1 ? "es" : ""} to ask about` : "+ rice"}
          </span>
        </p>
        <p className="mt-1 text-sm text-sf-cream/90">{hint}</p>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-sf-muted">
        Prices are what Hjh Maimunah charged in June 2026, as reported by Eatbook. Other shops differ, and fish and seafood are often priced by size, so ask.
      </p>
    </section>
  );
}

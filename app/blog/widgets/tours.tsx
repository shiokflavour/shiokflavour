"use client";

import { useState } from "react";
import { TOURS, type Tour } from "@/app/lib/tours";

const ORDER = ["night", "chinatown", "little-india", "katong", "private", "halal"];
const LIST: Tour[] = ORDER.map((id) => TOURS[id]).filter(Boolean);

type When = "any" | "morning" | "day" | "evening";
type Who = "any" | "group" | "private";
type Diet = "any" | "vegetarian" | "halal";

function score(t: Tour, when: When, who: Who, diet: Diet): number {
  let s = 0;
  if (when !== "any") s += t.when === when ? 4 : when === "day" && t.when === "morning" ? 2 : -3;
  if (who !== "any") s += t.group === who ? 4 : -10;
  if (diet !== "any") s += t.diet?.includes(diet) ? 6 : -10;
  // Gentle tie-breakers: more reviews and free cancellation first.
  if (t.id === "night") s += 1;
  if (t.cancellation?.startsWith("Free")) s += 0.5;
  return s;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-sf-primary" aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">{children}</p>
    </div>
  );
}

function Choice<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: [T, string][];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="mt-4">
      <legend className="text-sm font-semibold text-white">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(([v, text]) => (
          <button
            key={v}
            type="button"
            aria-pressed={value === v}
            onClick={() => onChange(v)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
              value === v ? "bg-sf-primary text-white" : "bg-white/5 text-sf-muted hover:text-white"
            }`}
          >
            {text}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

const ctaClass =
  "inline-block rounded-xl bg-sf-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-sf-primary/90";

/** "Which tour suits you?" */
export function TourMatcher() {
  const [when, setWhen] = useState<When>("any");
  const [who, setWho] = useState<Who>("any");
  const [diet, setDiet] = useState<Diet>("any");
  const ranked = [...LIST].sort((a, b) => score(b, when, who, diet) - score(a, when, who, diet));
  const [pick, runner] = ranked;
  const fits = score(pick, when, who, diet) >= 0;

  return (
    <section aria-labelledby="tour-matcher-heading" className="my-10 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-7">
      <Kicker>Not sure which to book?</Kicker>
      <h2 id="tour-matcher-heading" className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        Which tour suits you?
      </h2>
      <Choice<When>
        label="When are you free?"
        value={when}
        onChange={setWhen}
        options={[
          ["any", "Any time"],
          ["morning", "Morning"],
          ["day", "Daytime"],
          ["evening", "Evening"],
        ]}
      />
      <Choice<Who>
        label="Who is coming?"
        value={who}
        onChange={setWho}
        options={[
          ["any", "Happy to join a group"],
          ["private", "Just us, private"],
        ]}
      />
      <Choice<Diet>
        label="Any dietary needs?"
        value={diet}
        onChange={setDiet}
        options={[
          ["any", "I eat everything"],
          ["vegetarian", "Vegetarian"],
          ["halal", "Halal"],
        ]}
      />

      <div className="mt-6 rounded-xl bg-black/30 p-4 sm:p-5" aria-live="polite">
        {fits ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sf-muted">Our pick for you</p>
            <p className="mt-1 text-xl font-bold text-white">{pick.name}</p>
            <p className="text-sm text-sf-muted">
              {pick.operator} · {pick.duration} · {pick.price}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sf-cream/90">
              {pick.bestFor}. {pick.highlights[0]}.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href={pick.url} target="_blank" rel="sponsored nofollow noopener noreferrer" className={ctaClass}>
                Check availability on {pick.platform}
              </a>
              {runner && score(runner, when, who, diet) >= 0 ? (
                <span className="text-sm text-sf-muted">
                  Also consider:{" "}
                  <a href={runner.url} target="_blank" rel="sponsored nofollow noopener noreferrer" className="font-semibold text-sf-primary underline underline-offset-4">
                    {runner.name}
                  </a>
                </span>
              ) : null}
            </div>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-sf-cream/90">
            No tour on our list matches all of that. Try relaxing one choice, or skip the tour and follow one of our free{" "}
            <a href="#do-it-yourself-free-self-guided-food-tours" className="font-semibold text-sf-primary underline underline-offset-4">
              self-guided food trails
            </a>
            .
          </p>
        )}
      </div>
      <p className="mt-3 text-xs text-sf-muted">Affiliate links: we may earn a small commission at no extra cost to you.</p>
    </section>
  );
}

const WHEN_LABEL = { morning: "Morning", day: "Daytime", evening: "Evening" } as const;

/** Side-by-side comparison of every tour on the page. */
export function TourTable() {
  return (
    <section aria-label="Singapore food tours compared" className="my-8">
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[720px] border-collapse bg-[#1a1a1a] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-sf-muted">
              <th className="p-3 font-semibold">Tour</th>
              <th className="p-3 font-semibold">Area</th>
              <th className="p-3 font-semibold">When</th>
              <th className="p-3 font-semibold">Tastings</th>
              <th className="p-3 font-semibold">Price</th>
              <th className="p-3 font-semibold">Rating</th>
              <th className="p-3 font-semibold">Cancellation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {LIST.map((t) => (
              <tr key={t.id} className="align-top">
                <td className="p-3">
                  <a href={t.url} target="_blank" rel="sponsored nofollow noopener noreferrer" className="font-semibold text-white hover:text-sf-primary">
                    {t.name}
                  </a>
                  <p className="text-xs text-sf-muted">
                    {t.operator} · {t.duration}
                    {t.group === "private" ? " · private" : ""}
                    {t.diet?.includes("halal") ? " · halal" : ""}
                  </p>
                </td>
                <td className="p-3 text-sf-cream/90">{t.area}</td>
                <td className="p-3 text-sf-cream/90">{t.when ? WHEN_LABEL[t.when] : ""}</td>
                <td className="p-3 text-sf-cream/90">{t.tastings}</td>
                <td className="p-3 font-semibold text-white">{t.price.replace("From about ", "From ")}</td>
                <td className="p-3 text-sf-cream/90">{t.reviews}</td>
                <td className="p-3 text-sf-cream/90">{t.cancellation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-sf-muted">
        Prices are what each booking platform showed us and change often. Swipe the table sideways on a phone. Affiliate links: we may earn a small commission at no extra cost to you.
      </p>
    </section>
  );
}

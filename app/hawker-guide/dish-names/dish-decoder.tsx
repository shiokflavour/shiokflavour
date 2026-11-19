"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { DISH_NAMES, WORD_FAMILIES, type DishName } from "@/app/lib/dish-names";

const ORIGINS = ["All", "Chinese", "Malay", "Indian", "Peranakan"] as const;
const TYPES = ["All", "Noodles", "Rice", "Mains", "Snacks", "Sweets & drinks"] as const;

/** Lower-case and strip tone marks, so "chao guo tiao" finds "chǎo guǒ tiáo". */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
        on ? "bg-sf-primary text-white" : "bg-white/5 text-sf-muted hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

/** Full-screen card to hold up to the stall holder. */
function ShowUncle({ dish, onClose }: { dish: DishName; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const [takeaway, setTakeaway] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const chinese = Boolean(dish.script && /[一-鿿]/.test(dish.script));
  const big = dish.script ?? dish.name;
  const sub = dish.script ? dish.name : dish.cn;

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Show the uncle: ${dish.name}`}
      className="fixed inset-0 z-[100] flex flex-col bg-[#FFF8EE] text-[#1a1a1a]"
    >
      <div className="flex items-center justify-between px-5 pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8622A]">Show this to the stall</p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="rounded-full bg-black/10 px-4 py-2 text-sm font-bold hover:bg-black/20"
        >
          Close
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p
          lang={chinese ? "zh-Hans" : dish.script ? "ta" : "ms"}
          className={`font-bold leading-tight ${chinese ? "text-[clamp(4rem,22vw,11rem)]" : "text-[clamp(2.75rem,13vw,7rem)]"}`}
        >
          {big}
        </p>
        {sub ? <p className="mt-3 text-2xl font-semibold text-black/60 sm:text-3xl">{sub}</p> : null}

        <div className="mt-8 flex items-center gap-6">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="One fewer"
            className="h-14 w-14 rounded-full bg-black/10 text-3xl font-bold hover:bg-black/20"
          >
            −
          </button>
          <p className="min-w-[4ch] text-6xl font-bold" aria-live="polite">
            ×{qty}
          </p>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            aria-label="One more"
            className="h-14 w-14 rounded-full bg-black/10 text-3xl font-bold hover:bg-black/20"
          >
            +
          </button>
        </div>

        {takeaway ? (
          <p className="mt-6 text-4xl font-bold text-[#E8622A]">
            {chinese ? "打包" : "Bungkus"}
            <span className="ml-3 text-xl font-semibold text-black/50">{chinese ? "dǎ bāo · takeaway" : "takeaway"}</span>
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 px-5 pb-8">
        <button
          type="button"
          aria-pressed={takeaway}
          onClick={() => setTakeaway((t) => !t)}
          className={`rounded-full px-5 py-3 text-base font-bold ${takeaway ? "bg-[#E8622A] text-white" : "bg-black/10"}`}
        >
          {takeaway ? "Takeaway ✓" : "Takeaway?"}
        </button>
        <p className="w-full text-center text-sm text-black/50">Then smile, point and say thank you.</p>
      </div>
    </div>
  );
}

export function DishDecoder() {
  const [q, setQ] = useState("");
  const [origin, setOrigin] = useState<(typeof ORIGINS)[number]>("All");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [word, setWord] = useState<string | null>(null);
  const [showing, setShowing] = useState<DishName | null>(null);

  const family = WORD_FAMILIES.find((w) => w.word === word);
  const list = useMemo(() => {
    const needle = fold(q.trim());
    return DISH_NAMES.filter((d) => {
      if (origin !== "All" && d.origin !== origin) return false;
      if (type !== "All" && d.type !== type) return false;
      if (family && !family.match.test(d.name)) return false;
      if (!needle) return true;
      return fold([d.name, d.script, d.cn, d.pinyin, d.lit, d.what, d.lang].filter(Boolean).join(" ")).includes(needle);
    });
  }, [q, origin, type, family]);

  const reset = () => {
    setQ("");
    setOrigin("All");
    setType("All");
    setWord(null);
  };

  return (
    <>
      <section aria-label="Find a dish" className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-7">
        <label htmlFor="dish-search" className="text-sm font-semibold text-white">
          Search in English, Malay, Chinese or pinyin
        </label>
        <input
          id="dish-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try 'kway', '饭' or 'pulled tea'"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white placeholder:text-sf-muted focus:border-sf-primary focus:outline-none"
        />
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by origin">
          {ORIGINS.map((o) => (
            <Chip key={o} on={origin === o} onClick={() => setOrigin(o)}>
              {o === "All" ? "All origins" : o}
            </Chip>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          {TYPES.map((t) => (
            <Chip key={t} on={type === t} onClick={() => setType(t)}>
              {t === "All" ? "All types" : t}
            </Chip>
          ))}
        </div>
      </section>

      <section aria-labelledby="word-families-heading" className="mt-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sf-primary" aria-hidden />
          <h2 id="word-families-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
            Learn these words, read any stall sign
          </h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by word">
          {WORD_FAMILIES.map((w) => (
            <Chip key={w.word} on={word === w.word} onClick={() => setWord(word === w.word ? null : w.word)}>
              {w.word}
              {w.cn ? <span className="ml-1.5 opacity-70">{w.cn}</span> : null}
            </Chip>
          ))}
        </div>
        <p className="mt-3 min-h-[1.5rem] text-sm text-sf-cream/90" aria-live="polite">
          {family ? (
            <>
              <strong className="text-white">{family.word}</strong>
              {family.cn ? ` (${family.cn})` : ""} is {family.from} for <strong className="text-white">{family.means}</strong>.
              {" "}Dishes with it in the name:
            </>
          ) : (
            "Tap a word to see what it means and which dishes use it."
          )}
        </p>
      </section>

      <p className="mt-8 text-sm text-sf-muted" aria-live="polite">
        {list.length === DISH_NAMES.length ? `All ${list.length} dishes` : `${list.length} of ${DISH_NAMES.length} dishes`}
        {list.length !== DISH_NAMES.length ? (
          <button type="button" onClick={reset} className="ml-3 font-semibold text-sf-primary underline underline-offset-4">
            Show all
          </button>
        ) : null}
      </p>

      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((d) => (
          <li key={d.slug} className="flex flex-col rounded-xl border border-white/5 bg-[#1a1a1a] p-5 transition-all hover:border-sf-primary/30">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">{d.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-sf-muted">
                  {d.origin} · {d.lang}
                </p>
              </div>
              {d.script || d.cn ? (
                <p lang={d.script && !/[一-鿿]/.test(d.script) ? "ta" : "zh-Hans"} className="shrink-0 text-right text-2xl font-bold text-sf-primary">
                  {d.script ?? d.cn}
                </p>
              ) : null}
            </div>
            {d.pinyin ? <p className="mt-1 text-sm text-sf-muted">Mandarin: {d.pinyin}{d.cn && d.cn !== d.script ? ` (${d.cn})` : ""}</p> : null}
            <p className="mt-3 text-sm text-white">
              <span className="text-sf-muted">Literally:</span> {d.lit}
            </p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-sf-cream/90">{d.what}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowing(d)}
                className="rounded-full bg-sf-primary px-4 py-2 text-sm font-semibold text-white hover:bg-sf-primary/90"
              >
                Show the uncle
              </button>
              <Link href={`/food-heritage/${d.slug}`} className="text-sm font-semibold text-sf-primary underline underline-offset-4">
                The full story
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {!list.length ? (
        <p className="mt-6 text-sf-muted">
          No dish matches that. <button type="button" onClick={reset} className="font-semibold text-sf-primary underline">Clear the filters</button>
        </p>
      ) : null}

      {showing ? <ShowUncle dish={showing} onClose={() => setShowing(null)} /> : null}
    </>
  );
}

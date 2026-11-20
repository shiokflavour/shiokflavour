"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { DISH_NAMES, DISH_REQUESTS, TAKEAWAY, WORD_FAMILIES, type DishName, type DishRequest } from "@/app/lib/dish-names";

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
  const [picked, setPicked] = useState<string[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const chinese = Boolean(dish.script && /[\u4e00-\u9fff]/.test(dish.script));
  const big = dish.script ?? dish.name;
  const sub = dish.script ? dish.name : dish.cn;
  const options = DISH_REQUESTS.filter((r) => r.applies(dish));
  const chosen = options.filter((r) => picked.includes(r.id));

  const toggle = (r: DishRequest) =>
    setPicked((p) => {
      if (p.includes(r.id)) return p.filter((id) => id !== r.id);
      const sameGroup = options.filter((o) => o.group === r.group).map((o) => o.id);
      return [...p.filter((id) => !sameGroup.includes(id)), r.id];
    });

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

  const lines = [...chosen.map((r) => ({ key: r.id, local: chinese ? r.cn : r.ms, hint: chinese ? `${r.pinyin} · ${r.en.toLowerCase()}` : r.en.toLowerCase() }))];
  if (takeaway) {
    lines.push({
      key: "takeaway",
      local: chinese ? TAKEAWAY.cn : TAKEAWAY.ms,
      hint: chinese ? `${TAKEAWAY.pinyin} · takeaway` : "takeaway",
    });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Show the uncle: ${dish.name}`}
      className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#FFF8EE] text-[#1a1a1a]"
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

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-6 text-center">
        <p
          lang={chinese ? "zh-Hans" : dish.script ? "ta" : "ms"}
          className={`font-bold leading-tight ${chinese ? "text-[clamp(3.5rem,20vw,10rem)]" : "text-[clamp(2.5rem,12vw,6.5rem)]"}`}
        >
          {big}
        </p>
        {sub ? <p className="mt-2 text-2xl font-semibold text-black/60 sm:text-3xl">{sub}</p> : null}

        <div className="mt-6 flex items-center gap-6">
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

        {lines.length ? (
          <ul className="mt-6 space-y-2" aria-live="polite">
            {lines.map((l) => (
              <li key={l.key} className="text-4xl font-bold text-[#E8622A] sm:text-5xl">
                <span lang={chinese ? "zh-Hans" : "ms"}>{l.local}</span>
                <span className="ml-3 align-middle text-base font-semibold text-black/50 sm:text-lg">{l.hint}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="px-5 pb-8">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-black/40">Add a request</p>
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2" role="group" aria-label="Requests">
          {options.map((r) => {
            const on = picked.includes(r.id);
            return (
              <button
                key={r.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(r)}
                className={`rounded-full px-4 py-2.5 text-sm font-bold sm:text-base ${on ? "bg-[#E8622A] text-white" : "bg-black/10"}`}
              >
                {r.en}
              </button>
            );
          })}
          <button
            type="button"
            aria-pressed={takeaway}
            onClick={() => setTakeaway((t) => !t)}
            className={`rounded-full px-4 py-2.5 text-sm font-bold sm:text-base ${takeaway ? "bg-[#E8622A] text-white" : "bg-black/10"}`}
          >
            Takeaway
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-black/50">Then smile, point and say thank you.</p>
      </div>
    </div>
  );
}

/** Hero feature block: explains "Show the uncle" and lets readers try it at once. */
export function UncleCallout() {
  const [open, setOpen] = useState(false);
  const sample = DISH_NAMES.find((d) => d.slug === "char-kway-teow") ?? DISH_NAMES[0];
  return (
    <section
      aria-labelledby="uncle-callout-heading"
      className="mt-10 grid items-center gap-6 rounded-2xl border border-sf-primary/50 bg-sf-primary/10 p-6 sm:grid-cols-[1fr_auto] sm:p-8"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">Ordering made easy</p>
        <h2 id="uncle-callout-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Show the uncle
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-sf-cream/90 sm:text-lg">
          No need to say a word. Tap <strong className="text-white">Show the uncle</strong>{" "}on any dish and your phone becomes
          a big, full-screen order card in the stall&apos;s own script: how many you want, plus requests like less rice,
          extra meat, no chilli or takeaway.
          Then just turn your screen to the stall.
        </p>
        <ol className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-white">
          <li><span className="text-sf-primary">1.</span> Find your dish</li>
          <li><span className="text-sf-primary">2.</span> Tap Show the uncle</li>
          <li><span className="text-sf-primary">3.</span> Hold up your phone</li>
        </ol>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-6 rounded-full bg-sf-primary px-6 py-3 text-base font-bold text-white hover:bg-sf-primary/90"
        >
          Try it now
        </button>
      </div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Preview the Show the uncle card for char kway teow"
        className="mx-auto flex w-44 flex-col items-center rounded-[1.75rem] border-4 border-white/20 bg-[#FFF8EE] px-4 py-6 text-[#1a1a1a] shadow-2xl transition-transform hover:-rotate-2 sm:w-48"
      >
        <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8622A]">Show the stall</span>
        <span lang="zh-Hans" className="mt-4 whitespace-nowrap text-[2.75rem] font-bold leading-none">炒粿条</span>
        <span className="mt-2 text-sm font-semibold text-black/60">Char Kway Teow</span>
        <span className="mt-4 text-3xl font-bold">×2</span>
        <span lang="zh-Hans" className="mt-2 text-xl font-bold text-[#E8622A]">打包</span>
      </button>
      {open ? <ShowUncle dish={sample} onClose={() => setOpen(false)} /> : null}
    </section>
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

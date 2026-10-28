"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FILTER_TAGS,
  VIBE_LABELS,
  formatTime,
  openStatus,
  singaporeNow,
  type Cafe,
  type VibeTag,
} from "@/app/lib/cafes";
import { CafeTile } from "./cafe-icon";

const STORAGE_KEY = "sf-cafe-shortlist";

function readStored(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStored(list: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable: shortlist still works for this visit */
  }
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 0 1 12 6a5 5 0 0 1 7.5 6.6z" />
    </svg>
  );
}

export function CafeExplorer({ cafes, areaName }: { cafes: Cafe[]; areaName: string }) {
  const [filter, setFilter] = useState<VibeTag | "all">("all");
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [now, setNow] = useState<{ day: number; minutes: number } | null>(null);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setNow(singaporeNow());
    const t = window.setInterval(() => setNow(singaporeNow()), 60_000);
    const fromUrl = new URLSearchParams(window.location.search).get("shortlist");
    const valid = new Set(cafes.map((c) => c.slug));
    const initial = fromUrl
      ? fromUrl.split(",").filter((s) => valid.has(s))
      : readStored().filter((s) => valid.has(s));
    setShortlist(initial);
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
    if (window.location.hash.startsWith("#cafe-")) {
      const card = document.getElementById(window.location.hash.slice(1));
      if (card) {
        card.querySelector("details")?.setAttribute("open", "");
        window.setTimeout(() => card.scrollIntoView({ block: "start" }), 50);
      }
    }
    return () => window.clearInterval(t);
  }, [cafes]);

  const toggleShortlist = (slug: string) => {
    setShortlist((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      writeStored(next);
      return next;
    });
  };

  const statusFor = (c: Cafe) => (now ? openStatus(c.hours, now.day, now.minutes) : null);

  const visible = useMemo(
    () =>
      cafes.filter((c) => {
        if (filter !== "all" && !c.tags.includes(filter)) return false;
        if (openNowOnly && now && !openStatus(c.hours, now.day, now.minutes).open) return false;
        return true;
      }),
    [cafes, filter, openNowOnly, now],
  );

  const openCount = now ? cafes.filter((c) => openStatus(c.hours, now.day, now.minutes).open).length : null;

  const shareUrl = () => {
    const url = new URL(window.location.href);
    url.search = shortlist.length ? `?shortlist=${shortlist.join(",")}` : "";
    url.hash = "cafes";
    return url.toString();
  };
  const shareText = () => {
    const names = cafes.filter((c) => shortlist.includes(c.slug)).map((c) => c.name);
    return `Lepak in ${areaName}? My shortlist: ${names.join(", ")}`;
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", shareUrl());
    }
  };
  const nativeShare = async () => {
    try {
      await navigator.share({ title: `${areaName} cafe shortlist`, text: shareText(), url: shareUrl() });
    } catch {
      /* user cancelled */
    }
  };

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
      active
        ? "border-sf-primary bg-sf-primary/15 font-semibold text-sf-primary"
        : "border-white/15 text-white/70 hover:border-white/30 hover:text-white"
    }`;

  return (
    <section id="cafes" aria-labelledby="cafes-heading" className="scroll-mt-28">
      <h2 id="cafes-heading" className="text-2xl font-bold tracking-tight text-sf-cream">
        The cafes
      </h2>
      <p className="mt-1 text-sm text-sf-muted">
        Tap a vibe to narrow it down. Tap the heart to save a cafe and send the list to your friends.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setOpenNowOnly((v) => !v)}
          aria-pressed={openNowOnly}
          className={`${chip(openNowOnly)} inline-flex items-center gap-2`}
        >
          <span className={`h-2 w-2 rounded-full ${openNowOnly ? "bg-emerald-400" : "bg-emerald-400/60"}`} aria-hidden />
          Open now{openCount !== null ? ` (${openCount})` : ""}
        </button>
        <span className="mx-1 hidden h-5 w-px bg-white/15 sm:block" aria-hidden />
        <button type="button" onClick={() => setFilter("all")} aria-pressed={filter === "all"} className={chip(filter === "all")}>
          All
        </button>
        {FILTER_TAGS.filter((t) => cafes.some((c) => c.tags.includes(t))).map((t) => (
          <button key={t} type="button" onClick={() => setFilter(t)} aria-pressed={filter === t} className={chip(filter === t)}>
            {VIBE_LABELS[t].label}
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs text-sf-muted" aria-live="polite">
        Showing {visible.length} of {cafes.length} cafes
        {openNowOnly ? " open right now (Singapore time)" : ""}
      </p>

      <div className="mt-5 grid gap-4">
        {visible.map((c) => {
          const st = statusFor(c);
          const saved = shortlist.includes(c.slug);
          return (
            <article
              key={c.slug}
              id={`cafe-${c.slug}`}
              className="scroll-mt-28 rounded-2xl border border-white/10 bg-sf-surface/50 p-5 sm:p-6"
            >
              <div className="flex gap-4">
                <CafeTile
                  look={c.look}
                  icon={c.icon}
                  order={c.orderThis[0].replace(/\s*\(.*\)$/, "")}
                  className="h-24 w-24 sm:h-28 sm:w-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-sf-cream">{c.name}</h3>
                      <p className="text-xs uppercase tracking-[0.15em] text-sf-muted">
                        {c.kind} · {c.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleShortlist(c.slug)}
                      aria-pressed={saved}
                      aria-label={saved ? `Remove ${c.name} from shortlist` : `Save ${c.name} to shortlist`}
                      className={`shrink-0 rounded-full border p-2 transition-colors ${
                        saved ? "border-sf-primary text-sf-primary" : "border-white/15 text-white/60 hover:text-white"
                      }`}
                    >
                      <HeartIcon filled={saved} />
                    </button>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-sf-cream/90 sm:text-base">{c.oneLiner}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {st ? (
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                          st.open ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-white/50"
                        }`}
                      >
                        {st.open
                          ? `Open · closes ${formatTime(st.closesAt!)}`
                          : st.opensAt !== undefined
                            ? `Closed · opens ${formatTime(st.opensAt)}`
                            : "Closed today"}
                      </span>
                    ) : null}
                    {c.tags
                      .filter((t) => FILTER_TAGS.includes(t))
                      .slice(0, 4)
                      .map((t) => (
                        <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/70">
                          {VIBE_LABELS[t].label}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <details className="group mt-4 border-t border-white/10 pt-3">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-sf-primary marker:hidden">
                  <span className="group-open:hidden">Show details</span>
                  <span className="hidden group-open:inline">Hide details</span>
                  <span aria-hidden className="group-open:hidden">▾</span>
                  <span aria-hidden className="hidden group-open:inline">▴</span>
                </summary>
                <dl className="mt-4 grid gap-3 text-sm leading-relaxed">
                  <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-sf-cream">Order this</dt>
                    <dd className="text-sf-cream/85">{c.orderThis.join(" · ")}</dd>
                  </div>
                  <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-sf-cream">Lepak tip</dt>
                    <dd className="text-sf-cream/85">{c.lepakTip}</dd>
                  </div>
                  <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-sf-cream">Hours</dt>
                    <dd className="text-sf-cream/85">{c.hoursText}</dd>
                  </div>
                  <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-sf-cream">Price</dt>
                    <dd className="text-sf-cream/85">{c.priceNote}</dd>
                  </div>
                  <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-sf-cream">Getting there</dt>
                    <dd className="text-sf-cream/85">
                      {c.address}. {c.walk}.{" "}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.name} ${c.address}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4"
                      >
                        Open in Maps
                      </a>
                    </dd>
                  </div>
                  {c.story ? (
                    <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                      <dt className="font-semibold text-sf-cream">The story</dt>
                      <dd className="text-sf-cream/85">{c.story}</dd>
                    </div>
                  ) : null}
                  {c.goodToKnow?.length ? (
                    <div className="grid gap-0.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                      <dt className="font-semibold text-sf-cream">Good to know</dt>
                      <dd className="text-sf-cream/85">{c.goodToKnow.join(" ")}</dd>
                    </div>
                  ) : null}
                </dl>
              </details>
            </article>
          );
        })}
        {visible.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-6 text-sm text-sf-muted">
            Nothing matches right now. Try another vibe, or turn off Open now.
          </div>
        ) : null}
      </div>

      {shortlist.length > 0 ? (
        <div className="sticky bottom-3 z-30 mt-6 rounded-2xl border border-sf-primary/40 bg-[#232325] p-3 shadow-lg sm:p-4">
          <p className="truncate text-sm font-semibold text-sf-cream">
            Your shortlist: {cafes.filter((c) => shortlist.includes(c.slug)).map((c) => c.name).join(", ")}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent("")}`}
              onClick={(e) => {
                e.currentTarget.href = `https://wa.me/?text=${encodeURIComponent(`${shareText()} ${shareUrl()}`)}`;
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sf-primary px-3.5 py-1.5 text-sm font-semibold text-white"
            >
              Send on WhatsApp
            </a>
            <a
              href="https://t.me/share/url"
              onClick={(e) => {
                e.currentTarget.href = `https://t.me/share/url?url=${encodeURIComponent(shareUrl())}&text=${encodeURIComponent(shareText())}`;
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm font-semibold text-sf-cream"
            >
              Telegram
            </a>
            {canShare ? (
              <button type="button" onClick={nativeShare} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm font-semibold text-sf-cream">
                More apps
              </button>
            ) : null}
            <button type="button" onClick={copyLink} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm font-semibold text-sf-cream">
              {copied ? "Link copied" : "Copy link"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShortlist([]);
                writeStored([]);
              }}
              className="px-2 py-2 text-sm text-sf-muted underline underline-offset-4"
            >
              Clear
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Footprints, MapPin, TrainFront } from "lucide-react";
import { formatTime, openStatus, singaporeNow } from "@/app/lib/cafes";
import { BAY_CENTRES, BAY_LANDMARKS, SATAY_STREET, headingId, type BayCentre } from "@/app/lib/bay-guide";
import { directionsUrl, esc, loadLeaflet, pinHtml } from "@/app/cafes/cafe-map";

/* eslint-disable @typescript-eslint/no-explicit-any */

type Now = { day: number; minutes: number };
type Tone = "good" | "later" | "off";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const centre = (slug: string) => BAY_CENTRES.find((c) => c.slug === slug)!;

/** Live status against our "good time to go" window. */
export function windowStatus(c: BayCentre, now: Now): { label: string; tone: Tone } {
  if (c.slug === "lau-pa-sat") {
    const satay = openStatus(SATAY_STREET, now.day, now.minutes);
    return satay.open
      ? { label: "Open 24 hours · Satay Street is on", tone: "good" }
      : { label: `Open 24 hours · satay from ${formatTime(satay.opensAt ?? 1140)}`, tone: "good" };
  }
  const st = openStatus(c.window, now.day, now.minutes);
  if (st.open) return { label: `Good time now · until about ${formatTime(st.closesAt!)}`, tone: "good" };
  if (st.opensAt !== undefined) return { label: `Better from ${formatTime(st.opensAt)}`, tone: "later" };
  for (let k = 1; k <= 7; k++) {
    const d = (now.day + k) % 7;
    const spans = c.window[d];
    if (spans && spans.length) {
      const when = k === 1 ? "Tomorrow" : `Back ${DAYS[d]}`;
      return { label: `${when} from ${formatTime(spans[0][0])}`, tone: "off" };
    }
  }
  return { label: "Not today", tone: "off" };
}

const TONE: Record<Tone, string> = {
  good: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  later: "bg-amber-400/15 text-amber-200 ring-amber-400/30",
  off: "bg-white/5 text-sf-muted ring-white/10",
};

function StatusPill({ c, now }: { c: BayCentre; now: Now | null }) {
  if (!now) return <span className="inline-block h-6" aria-hidden />;
  const s = windowStatus(c, now);
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${TONE[s.tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {s.label}
    </span>
  );
}

function useSgNow(): Now | null {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    setNow(singaporeNow());
    const t = setInterval(() => setNow(singaporeNow()), 60_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-sf-primary" aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Where are you now?                                                  */
/* ------------------------------------------------------------------ */

type Spot = "mbs" | "gardens" | "show";
type Step = { icon: "walk" | "train" | "pin"; text: string };
type Plan = { pick: BayCentre; why: string; steps: Step[]; time: string; also?: { text: string; href: string } };

function planFor(spot: Spot, now: Now | null): Plan {
  const lps = centre("lau-pa-sat");
  const max = centre("maxwell");
  if (spot === "mbs") {
    return {
      pick: lps,
      why: "The nearest real hawker centre, under Victorian cast iron, and it never closes.",
      steps: [
        { icon: "walk", text: "Follow signs from The Shoppes (B2) to Bayfront station" },
        { icon: "train", text: "Downtown Line, 1 stop towards Bukit Panjang, to Downtown (DT17)" },
        { icon: "pin", text: "Exit A or E. Lau Pa Sat is a 5-minute walk" },
      ],
      time: "About 15 minutes door to door",
      also: { text: "Lunchtime? Maxwell's chicken rice is 3 stops further.", href: `#${headingId(max.heading)}` },
    };
  }
  if (spot === "gardens") {
    const evening = now ? now.minutes >= 960 || now.minutes < 360 : false;
    if (evening) {
      return {
        pick: lps,
        why: "Maxwell's headline stalls wind down by evening. Lau Pa Sat is just getting started.",
        steps: [
          { icon: "walk", text: "Walk to Gardens by the Bay station (TE22) on the Marina Barrage side" },
          { icon: "train", text: "Thomson-East Coast Line towards Woodlands North, to Shenton Way (TE19)" },
          { icon: "pin", text: "Exit 3 (Park Street), then a short walk to Lau Pa Sat" },
        ],
        time: "About 20 minutes",
        also: { text: "Staying for the light show? See the evening plan.", href: "#after-garden-rhapsody" },
      };
    }
    return {
      pick: max,
      why: "One train, no change, and the station opens almost opposite Tian Tian's queue.",
      steps: [
        { icon: "walk", text: "Walk to Gardens by the Bay station (TE22) on the Marina Barrage side" },
        { icon: "train", text: "Thomson-East Coast Line towards Woodlands North, to Maxwell (TE18)" },
        { icon: "pin", text: "Maxwell Food Centre is right outside the exit" },
      ],
      time: "About 20 minutes",
      also: { text: "Heading back after dark? Switch to Lau Pa Sat for satay.", href: `#${headingId(lps.heading)}` },
    };
  }
  return {
    pick: lps,
    why: "When the Supertrees go dark, Boon Tat Street lights up. Satay Street runs late every night.",
    steps: [
      { icon: "walk", text: "Walk from Supertree Grove across the bridge to Bayfront station, about 10 minutes" },
      { icon: "train", text: "Downtown Line, 1 stop to Downtown (DT17)" },
      { icon: "pin", text: "Exit A or E, then follow the smoke to Satay Street" },
    ],
    time: "Eating by about 8.25pm after the 7.45pm show",
    also: { text: "See the evening, minute by minute.", href: "#after-garden-rhapsody" },
  };
}

const STEP_ICON = { walk: Footprints, train: TrainFront, pin: MapPin };

export function BayPicker() {
  const now = useSgNow();
  const [spot, setSpot] = useState<Spot>("mbs");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!now || touched) return;
    if (now.minutes >= 1170 && now.minutes < 1380) setSpot("show");
  }, [now, touched]);

  const plan = planFor(spot, now);
  const tabs: [Spot, string][] = [
    ["mbs", "At Marina Bay Sands"],
    ["gardens", "At Gardens by the Bay"],
    ["show", "After the light show"],
  ];

  return (
    <section aria-labelledby="bay-picker-heading" className="my-10 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 sm:p-7">
      <Kicker>Hungry right now?</Kicker>
      <h2 id="bay-picker-heading" className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        Where are you standing?
      </h2>
      <div role="tablist" aria-label="Where are you now" className="mt-5 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={spot === id}
            onClick={() => {
              setSpot(id);
              setTouched(true);
            }}
            className={`rounded-lg px-2 py-2.5 text-xs font-semibold leading-tight transition-colors sm:text-sm ${
              spot === id ? "bg-sf-primary text-white" : "text-sf-muted hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sf-muted">Go to</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-3xl font-bold" style={{ color: plan.pick.color }}>
            {plan.pick.name}
          </p>
          <StatusPill c={plan.pick} now={now} />
        </div>
        <p className="mt-2 text-base leading-relaxed text-sf-cream/90">{plan.why}</p>

        <ol className="mt-5 space-y-3">
          {plan.steps.map((s, i) => {
            const Icon = STEP_ICON[s.icon];
            return (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-sf-primary">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="pt-1 text-sm leading-relaxed text-sf-cream/90 sm:text-base">{s.text}</span>
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-sm font-semibold text-white">{plan.time}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`#${headingId(plan.pick.heading)}`}
            className="rounded-xl bg-sf-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-sf-primary/90"
          >
            What to order there
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${plan.pick.lat},${plan.pick.lng}&travelmode=transit`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-sf-cream hover:border-sf-primary hover:text-sf-primary"
          >
            Directions in Google Maps
          </a>
        </div>
        {plan.also ? (
          <a href={plan.also.href} className="mt-4 block text-sm text-sf-muted underline decoration-white/20 underline-offset-4 hover:text-white">
            {plan.also.text}
          </a>
        ) : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* At a glance                                                         */
/* ------------------------------------------------------------------ */

export function BayTable() {
  const now = useSgNow();
  const [from, setFrom] = useState<"mbs" | "gardens">("mbs");
  return (
    <section aria-label="The six hawker centres at a glance" className="my-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-sf-muted">
          {now ? (
            <>
              It is {DAYS[now.day]}, {formatTime(now.minutes)} in Singapore.
            </>
          ) : (
            "Checking the time in Singapore."
          )}
        </p>
        <div className="flex gap-1 rounded-full bg-black/30 p-1 text-xs font-semibold">
          {(
            [
              ["mbs", "From MBS"],
              ["gardens", "From the Gardens"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={from === id}
              onClick={() => setFrom(id)}
              className={`rounded-full px-3 py-1.5 ${from === id ? "bg-sf-primary text-white" : "text-sf-muted hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
        {BAY_CENTRES.map((c, i) => (
          <li key={c.slug} className="grid gap-x-5 gap-y-2 p-4 sm:grid-cols-[1.3fr_1.4fr_1fr] sm:items-center">
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: c.color }}
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <a href={`#${headingId(c.heading)}`} className="font-bold text-white hover:text-sf-primary">
                  {c.short}
                </a>
                <p className="text-xs text-sf-muted">{c.bestFor}</p>
              </div>
            </div>
            <div className="pl-10 text-sm text-sf-cream/90 sm:pl-0">
              <span className="flex items-start gap-2">
                <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-sf-muted" strokeWidth={2} />
                {from === "mbs" ? c.fromBayfront : c.fromGardens}
              </span>
              <p className="mt-1 text-xs text-sf-muted">{c.closures}</p>
            </div>
            <div className="pl-10 sm:pl-0">
              <StatusPill c={c} now={now} />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs leading-relaxed text-sf-muted">
        &ldquo;Good time now&rdquo; is our guide to when the stalls worth the trip are trading. Every stall sets its own hours and some sell out early.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Map                                                                 */
/* ------------------------------------------------------------------ */

export function BayMap() {
  const holder = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setState("loading");
        loadLeaflet()
          .then((L) => {
            if (mapRef.current) return;
            const map = L.map(el, { scrollWheelZoom: false });
            mapRef.current = map;
            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);
            const now = singaporeNow();
            const pts: [number, number][] = [];
            BAY_CENTRES.forEach((c, i) => {
              const st = windowStatus(c, now);
              const icon = L.divIcon({ className: "", html: pinHtml(c.color, String(i + 1)), iconSize: [22, 22], iconAnchor: [11, 11] });
              L.marker([c.lat, c.lng], { icon, title: c.name, alt: c.name })
                .addTo(map)
                .bindPopup(
                  `<div style="min-width:190px"><strong style="font-size:14px">${esc(c.name)}</strong><br/><span style="font-size:12px;opacity:.85">${esc(st.label)}</span><br/><span style="font-size:12px">Order: ${esc(c.orders[0].dish)}</span><br/><span style="font-size:12px;opacity:.85">${esc(c.fromBayfront)}</span><div style="margin-top:8px;display:flex;gap:10px;flex-wrap:wrap"><a href="#${headingId(c.heading)}" style="font-weight:700">What to order</a><a href="${directionsUrl(c.lat, c.lng)}" target="_blank" rel="noopener noreferrer" style="font-weight:700">Walking directions</a></div></div>`,
                );
              pts.push([c.lat, c.lng]);
            });
            for (const lm of BAY_LANDMARKS) {
              const icon = L.divIcon({
                className: "",
                html: pinHtml(lm.kind === "mrt" ? "#2b6cb0" : "#1f7a5a", lm.kind === "mrt" ? "M" : "★"),
                iconSize: [22, 22],
                iconAnchor: [11, 11],
              });
              L.marker([lm.lat, lm.lng], { icon, title: lm.name, alt: lm.name })
                .addTo(map)
                .bindPopup(`<strong>${esc(lm.name)}</strong>${lm.note ? `<br/><span style="font-size:12px">${esc(lm.note)}</span>` : ""}`);
              if (lm.kind === "sight") pts.push([lm.lat, lm.lng]);
            }
            map.fitBounds(pts, { padding: [20, 20] });
            setState("ready");
          })
          .catch(() => setState("error"));
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-label="Map of hawker centres near Marina Bay" className="my-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <div ref={holder} className="sf-cafe-map h-[380px] w-full bg-[#2a2a2c] sm:h-[440px]" />
        {state !== "ready" ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-sf-muted">
            {state === "error" ? "The map couldn't load. Each centre's section has directions." : "Loading map"}
          </div>
        ) : null}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-sf-muted">
        {BAY_CENTRES.map((c, i) => (
          <li key={c.slug} className="flex items-center gap-1.5">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ backgroundColor: c.color }}
              aria-hidden
            >
              {i + 1}
            </span>
            {c.short}
          </li>
        ))}
        <li className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#2b6cb0]" aria-hidden />
          MRT
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#1f7a5a]" aria-hidden />
          MBS and the Supertrees
        </li>
      </ul>
      <style>{`.sf-cafe-map .leaflet-popup-content-wrapper,.sf-cafe-map .leaflet-popup-tip{background:#1f1f21;color:#f5f0e8}.sf-cafe-map .leaflet-popup-content a{color:#e8622a}.sf-cafe-map.leaflet-container{font:inherit}`}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky section menu                                                 */
/* ------------------------------------------------------------------ */

const NAV: [string, string][] = [
  ["At a glance", "The Six Centres At A Glance"],
  ["From the Gardens", "Coming From Gardens By The Bay"],
  ...BAY_CENTRES.map((c): [string, string] => [c.short, c.heading]),
  ["One meal only", "If You Only Have One Meal"],
  ["Quick answers", "Quick Answers"],
];

export function BayNav() {
  const [active, setActive] = useState<string | null>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = NAV.map(([, h]) => headingId(h));
    const onScroll = () => {
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!active || !bar.current) return;
    const chip = bar.current.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (chip) bar.current.scrollTo({ left: chip.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Jump to a section" className="sticky top-16 z-30 -mx-4 my-8 border-y border-white/10 bg-[#111111]/95 px-4 py-2 backdrop-blur-sm sm:mx-0 sm:rounded-xl sm:border">
      <div ref={bar} className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {NAV.map(([label, h]) => {
          const id = headingId(h);
          return (
            <a
              key={id}
              data-id={id}
              href={`#${id}`}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                active === id ? "bg-sf-primary text-white" : "bg-white/5 text-sf-muted hover:text-white"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

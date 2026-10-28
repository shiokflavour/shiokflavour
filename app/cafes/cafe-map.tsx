"use client";

import { useEffect, useRef, useState } from "react";
import { LOOKS, formatTime, openStatus, singaporeNow, type Cafe, type CafeArea } from "@/app/lib/cafes";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    L?: any;
  }
}

const LEAFLET_VERSION = "1.9.4";

function loadLeaflet(): Promise<any> {
  if (window.L) return Promise.resolve(window.L);
  return new Promise((resolve, reject) => {
    if (!document.getElementById("leaflet-css")) {
      const css = document.createElement("link");
      css.id = "leaflet-css";
      css.rel = "stylesheet";
      css.href = `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/leaflet.css`;
      document.head.appendChild(css);
    }
    const existing = document.getElementById("leaflet-js") as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");
    script.id = "leaflet-js";
    script.src = `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/leaflet.js`;
    script.async = true;
    script.addEventListener("load", () => resolve(window.L));
    script.addEventListener("error", reject);
    if (!existing) document.body.appendChild(script);
  });
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function directionsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
}

function pinHtml(color: string, label?: string) {
  return `<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:9999px;background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5);color:#fff;font:700 9px/1 system-ui">${label ?? ""}</span>`;
}

export function CafeMap({ area }: { area: CafeArea }) {
  const holder = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);

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
            const map = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
            mapRef.current = map;
            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            const now = singaporeNow();
            const points: [number, number][] = [];
            const addCafe = (c: Cafe) => {
              const st = openStatus(c.hours, now.day, now.minutes);
              const status = st.open
                ? `<span style="color:#34d399">Open · closes ${formatTime(st.closesAt!)}</span>`
                : st.opensAt !== undefined
                  ? `Closed · opens ${formatTime(st.opensAt)}`
                  : "Closed today";
              const html = `<div style="min-width:180px"><strong style="font-size:14px">${esc(c.name)}</strong><br/><span style="font-size:12px;opacity:.8">${esc(c.kind)} · ${status}</span><br/><span style="font-size:12px">Order: ${esc(c.orderThis[0].replace(/\s*\(.*\)$/, ""))}</span><div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><a href="#cafe-${c.slug}" data-jump="${c.slug}" style="font-weight:700">See details</a><a href="${directionsUrl(c.lat, c.lng)}" target="_blank" rel="noopener noreferrer" style="font-weight:700">Walking directions</a></div></div>`;
              const icon = L.divIcon({ className: "", html: pinHtml(LOOKS[c.look].color), iconSize: [22, 22], iconAnchor: [11, 11] });
              L.marker([c.lat, c.lng], { icon, title: c.name, alt: c.name }).addTo(map).bindPopup(html);
              points.push([c.lat, c.lng]);
            };
            area.cafes.forEach(addCafe);

            for (const lm of area.landmarks) {
              const icon = L.divIcon({
                className: "",
                html: pinHtml(lm.kind === "mrt" ? "#2b6cb0" : "#555", lm.kind === "mrt" ? "MRT" : "H"),
                iconSize: [22, 22],
                iconAnchor: [11, 11],
              });
              const link = lm.href ? `<br/><a href="${lm.href}" style="font-weight:700">What to eat here</a>` : "";
              L.marker([lm.lat, lm.lng], { icon, title: lm.name, alt: lm.name })
                .addTo(map)
                .bindPopup(`<strong>${esc(lm.name)}</strong>${link}<br/><a href="${directionsUrl(lm.lat, lm.lng)}" target="_blank" rel="noopener noreferrer" style="font-weight:700">Walking directions</a>`);
              if (lm.kind === "market") points.push([lm.lat, lm.lng]);
            }
            for (const n of area.nearby) {
              const icon = L.divIcon({ className: "", html: pinHtml("#8a8a8e"), iconSize: [22, 22], iconAnchor: [11, 11] });
              L.marker([n.lat, n.lng], { icon, title: n.name, alt: n.name })
                .addTo(map)
                .bindPopup(`<strong>${esc(n.name)}</strong><br/><span style="font-size:12px">Just outside the estate · ${esc(n.hoursText)}</span><br/><a href="${directionsUrl(n.lat, n.lng)}" target="_blank" rel="noopener noreferrer" style="font-weight:700">Walking directions</a>`);
            }

            map.fitBounds(points, { padding: [24, 24] });
            map.on("popupopen", (e: any) => {
              const a = e.popup.getElement()?.querySelector("a[data-jump]") as HTMLAnchorElement | null;
              a?.addEventListener("click", (ev) => {
                ev.preventDefault();
                const card = document.getElementById(`cafe-${a.dataset.jump}`);
                card?.querySelector("details")?.setAttribute("open", "");
                card?.scrollIntoView({ behavior: "smooth", block: "start" });
              });
            });
            setState("ready");
          })
          .catch(() => setState("error"));
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [area]);

  const locate = () => {
    if (!navigator.geolocation || !mapRef.current || !window.L) {
      setLocError("Your browser can't share location.");
      return;
    }
    setLocating(true);
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const L = window.L;
        const here: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        L.circleMarker(here, { radius: 8, color: "#fff", weight: 2, fillColor: "#3b82f6", fillOpacity: 1 })
          .addTo(mapRef.current)
          .bindPopup("You are here")
          .openPopup();
        mapRef.current.setView(here, Math.max(mapRef.current.getZoom(), 16));
        setLocating(false);
      },
      () => {
        setLocError("Couldn't get your location. Check your browser's location permission.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <section aria-labelledby="map-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="map-heading" className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary">
            Find your way
          </h2>
          <p className="mt-1 text-sm text-sf-muted">Tap a pin for opening hours and walking directions.</p>
        </div>
        <button
          type="button"
          onClick={locate}
          disabled={state !== "ready" || locating}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-sf-cream hover:border-sf-primary hover:text-sf-primary"
        >
          {locating ? "Finding you…" : "Show where I am"}
        </button>
      </div>
      {locError ? <p className="mt-2 text-xs text-sf-muted">{locError}</p> : null}
      <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10">
        <div ref={holder} className="sf-cafe-map h-[360px] w-full bg-[#2a2a2c] sm:h-[420px]" />
        {state !== "ready" ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-sf-muted">
            {state === "error" ? "The map couldn't load. Use the Open in Maps links on each cafe instead." : "Loading map"}
          </div>
        ) : null}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-sf-muted">
        {Object.entries(LOOKS)
          .filter(([k]) => area.cafes.some((c) => c.look === k))
          .map(([k, v]) => (
            <li key={k} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: v.color }} aria-hidden />
              {v.label}
            </li>
          ))}
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#555]" aria-hidden />
          Hawker centre
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2b6cb0]" aria-hidden />
          MRT
        </li>
      </ul>
      <style>{`.sf-cafe-map .leaflet-popup-content-wrapper,.sf-cafe-map .leaflet-popup-tip{background:#1f1f21;color:#f5f0e8}.sf-cafe-map .leaflet-popup-content a{color:#e8622a}.sf-cafe-map.leaflet-container{font:inherit}`}</style>
    </section>
  );
}

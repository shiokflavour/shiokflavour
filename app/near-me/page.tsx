"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FEATURED_HAWKERS, type FeaturedHawker } from "../lib/featured-hawkers";

function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getWalkTime(km: number): string {
  const mins = Math.round((km / 5) * 60);
  if (mins < 2) return "Less than 2 min walk";
  if (mins > 60) return "Best to take transport";
  return `~${mins} min walk`;
}

type HawkerWithDistance = FeaturedHawker & { distanceKm: number };

type Status = "idle" | "loading" | "success" | "denied" | "error";

export default function NearMePage() {
  const [status, setStatus] = useState<Status>("idle");
  const [results, setResults] = useState<HawkerWithDistance[]>([]);

  function findNearest() {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const withDist = FEATURED_HAWKERS.map((h) => ({
          ...h,
          distanceKm: getDistanceKm(latitude, longitude, h.lat, h.lng),
        })).sort((a, b) => a.distanceKm - b.distanceKm);
        setResults(withDist);
        setStatus("success");
      },
      () => setStatus("denied"),
      { timeout: 10000 }
    );
  }

  const isInSingapore = (lat: number, lng: number) =>
    lat >= 1.15 && lat <= 1.48 && lng >= 103.6 && lng <= 104.1;

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
          <p className="text-[15px] font-semibold uppercase tracking-[0.2em] text-sf-primary">
            You Are Here
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-sf-cream sm:text-6xl">
            Near Me
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-sf-muted">
            Hungry? Good. Singapore has over 100 hawker centres and at least one is closer than you think. Let us find the nearest ones — with what to order, how far to walk, and zero excuses to eat badly.
          </p>

          {status === "idle" && (
            <button
              onClick={findNearest}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sf-primary px-8 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90 active:scale-95"
            >
              📍 Find What&apos;s Shiok Near Me
            </button>
          )}

          {status === "loading" && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-sf-primary border-t-transparent" />
              <p className="text-sm text-sf-muted">
                Sniffing out the good stuff near you...
              </p>
            </div>
          )}

          {status === "denied" && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-sf-surface p-6 text-center">
              <p className="text-2xl mb-2">🔒</p>
              <p className="font-semibold text-sf-cream">
                Eh, we need your location lah
              </p>
              <p className="mt-2 text-sm text-sf-muted">
                Allow location access in your browser settings and we&apos;ll
                point you straight to the good stuff.
              </p>
              <button
                onClick={findNearest}
                className="mt-4 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-sf-cream hover:border-sf-primary transition"
              >
                Try Again
              </button>
            </div>
          )}

          {status === "error" && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-sf-surface p-6 text-center">
              <p className="text-2xl mb-2">😕</p>
              <p className="font-semibold text-sf-cream">Geolocation not supported</p>
              <p className="mt-2 text-sm text-sf-muted">
                Your browser doesn&apos;t support location. Try browsing all hawker centres instead.
              </p>
              <Link
                href="/hawker-centres"
                className="mt-4 inline-block rounded-xl bg-sf-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Browse All Centres
              </Link>
            </div>
          )}
        </section>

        {/* Results */}
        {status === "success" && (
          <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fade-in {
                animation: fadeInUp 0.4s ease forwards;
                opacity: 0;
              }
            `}</style>

            <p className="animate-fade-in text-sm text-sf-muted mb-6">
              Found{" "}
              <span className="font-semibold text-sf-cream">
                {results.length} hawker centres
              </span>{" "}
              near you. Your next shiok meal is closer than you think.
            </p>
            <ul className="near-me-results space-y-4">
              {results.map((h, i) => {
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${h.lat},${h.lng}`;
                const tooFar = h.distanceKm > 50;
                return (
                  <li
                    key={h.slug}
                    className="flex gap-4 rounded-2xl border border-white/[0.08] bg-sf-surface p-5 transition hover:border-sf-primary/30"
                    style={{
                      animation: "fadeInUp 0.8s ease forwards",
                      opacity: 0,
                      animationDelay: `${i * 120}ms`,
                    }}
                  >
                    {/* Rank */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sf-primary/15 text-sm font-bold text-sf-primary">
                      {i + 1}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/hawker/${h.slug}`}
                            className="font-bold text-sf-cream hover:text-sf-primary transition text-base"
                          >
                            {h.name}
                          </Link>
                          <p className="text-[15px] text-sf-muted mt-0.5">{h.address}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-base font-bold text-sf-primary">
                            {h.distanceKm < 1
                              ? `${Math.round(h.distanceKm * 1000)}m`
                              : `${h.distanceKm.toFixed(1)}km`}
                          </p>
                          <p className="text-[15px] text-sf-muted">{getWalkTime(h.distanceKm)}</p>
                        </div>
                      </div>

                      {/* Tags row */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-sf-primary/10 border border-sf-primary/20 px-2.5 py-0.5 text-[15px] font-medium text-sf-primary">
                          {h.tag}
                        </span>
                        {h.halal && (
                          <span className="rounded-full bg-emerald-700/20 border border-emerald-600/30 px-2.5 py-0.5 text-[15px] font-medium text-emerald-400">
                            Halal
                          </span>
                        )}
                        {h.openLate && (
                          <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[15px] text-sf-muted">
                            🌙 Open Late
                          </span>
                        )}
                        <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[15px] text-sf-muted">
                          💰 {h.budgetPerPax}
                        </span>
                      </div>

                      {/* Must try */}
                      <p className="mt-2 text-[15px] text-sf-muted">
                        <span className="text-sf-cream/70 font-medium">Must try: </span>
                        {h.mustTry.slice(0, 3).join(" · ")}
                      </p>

                      {/* MRT + directions */}
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span className="text-[15px] text-sf-muted">🚇 {h.nearestMRT}</span>
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[15px] font-medium text-sf-cream transition hover:border-sf-primary/50 hover:text-sf-primary"
                        >
                          📍 Get Directions
                        </a>
                        <Link
                          href={`/hawker/${h.slug}`}
                          className="text-[15px] font-medium text-sf-primary hover:opacity-80 transition"
                        >
                          View centre →
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

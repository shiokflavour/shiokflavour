"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { DRINK_MODIFIERS } from "@/app/lib/hawker-guide";
import { KeepExploring } from "../keep-exploring";

export default function KopiDecoderPage() {
  const [kopiFlavour, setKopiFlavour] = useState<"kopi" | "teh">("kopi");
  const [kopiMilk, setKopiMilk] = useState<
    "condensed" | "evaporated" | "none"
  >("condensed");
  const [kopiSugar, setKopiSugar] = useState<
    "normal" | "less" | "none" | "extra"
  >("normal");
  const [kopiTemp, setKopiTemp] = useState<"hot" | "iced" | "warm">("hot");
  const [kopiStrength, setKopiStrength] = useState<
    "normal" | "strong" | "weak"
  >("normal");

  function buildOrder() {
    const base = kopiFlavour === "kopi" ? "Kopi" : "Teh";
    let suffix = "";

    if (kopiMilk === "none") suffix += " O";
    else if (kopiMilk === "evaporated") suffix += " C";

    if (kopiSugar === "none") suffix += " Kosong";
    else if (kopiSugar === "less") suffix += " Siu Dai";
    else if (kopiSugar === "extra") suffix += " Ga Dai";

    if (kopiStrength === "strong") suffix += " Gao";
    else if (kopiStrength === "weak") suffix += " Po";

    if (kopiTemp === "iced") suffix += " Peng";
    else if (kopiTemp === "warm") suffix += " Ban Siu";

    return base + suffix;
  }

  function buildDescription() {
    const base = kopiFlavour === "kopi" ? "Coffee" : "Tea";
    const milk =
      kopiMilk === "condensed"
        ? "condensed milk"
        : kopiMilk === "evaporated"
          ? "evaporated milk"
          : "no milk";
    const sugar =
      kopiSugar === "normal"
        ? "with sugar"
        : kopiSugar === "less"
          ? "less sweet"
          : kopiSugar === "none"
            ? "no sugar"
            : "extra sweet";
    const temp =
      kopiTemp === "hot"
        ? "served hot"
        : kopiTemp === "iced"
          ? "served iced"
          : "served warm";
    const strength =
      kopiStrength === "strong"
        ? "extra strong"
        : kopiStrength === "weak"
          ? "weak"
          : "";
    return `${strength ? strength + " " : ""}${base}, ${milk}, ${sugar}, ${temp}.`;
  }

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/hawker-guide"
          className="inline-flex items-center gap-2 text-sf-muted hover:text-sf-primary text-sm font-semibold mb-8 transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Hawker Guide
        </Link>

        <p className="text-[15px] font-semibold tracking-[0.25em] text-sf-primary uppercase mb-6">
          Interactive
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.0] mb-6 max-w-3xl">
          The Kopi Decoder
        </h1>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          Build your perfect kopitiam order. Pick your preferences and we will
          tell you exactly what to say at the drink stall.
        </p>
        <div className="w-12 h-px bg-sf-primary mt-10" />
      </section>

      {/* Builder + Result */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 space-y-6">
            <div>
              <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                Coffee or Tea?
              </p>
              <div className="flex gap-3">
                {(["kopi", "teh"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setKopiFlavour(f)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      kopiFlavour === f
                        ? "bg-sf-primary text-white"
                        : "bg-white/5 text-sf-muted hover:bg-white/10"
                    }`}
                  >
                    {f === "kopi" ? "Kopi (Coffee)" : "Teh (Tea)"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                Milk?
              </p>
              <div className="flex gap-2 flex-wrap">
                {(
                  [
                    { id: "condensed", label: "Condensed Milk" },
                    { id: "evaporated", label: "Evaporated (C)" },
                    { id: "none", label: "No Milk (O)" },
                  ] as const
                ).map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setKopiMilk(m.id)}
                    className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-all ${
                      kopiMilk === m.id
                        ? "bg-sf-primary text-white"
                        : "bg-white/5 text-sf-muted hover:bg-white/10"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                Sweetness?
              </p>
              <div className="flex gap-2 flex-wrap">
                {(
                  [
                    { id: "normal", label: "Normal" },
                    { id: "less", label: "Less Sweet (Siu Dai)" },
                    { id: "none", label: "No Sugar (Kosong)" },
                    { id: "extra", label: "Extra Sweet (Ga Dai)" },
                  ] as const
                ).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setKopiSugar(s.id)}
                    className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-all ${
                      kopiSugar === s.id
                        ? "bg-sf-primary text-white"
                        : "bg-white/5 text-sf-muted hover:bg-white/10"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                Strength?
              </p>
              <div className="flex gap-2 flex-wrap">
                {(
                  [
                    { id: "normal", label: "Normal" },
                    { id: "strong", label: "Strong (Gao)" },
                    { id: "weak", label: "Weak (Po)" },
                  ] as const
                ).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setKopiStrength(s.id)}
                    className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-all ${
                      kopiStrength === s.id
                        ? "bg-sf-primary text-white"
                        : "bg-white/5 text-sf-muted hover:bg-white/10"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                Temperature?
              </p>
              <div className="flex gap-2 flex-wrap">
                {(
                  [
                    { id: "hot", label: "Hot" },
                    { id: "iced", label: "Iced (Peng)" },
                    { id: "warm", label: "Warm (Ban Siu)" },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setKopiTemp(t.id)}
                    className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-all ${
                      kopiTemp === t.id
                        ? "bg-sf-primary text-white"
                        : "bg-white/5 text-sf-muted hover:bg-white/10"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-center lg:sticky lg:top-24 h-fit">
            <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-4">
              Your Order
            </p>
            <div className="bg-black/40 rounded-xl p-6 mb-5 text-center">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-wide">
                {buildOrder()}
              </p>
              <p className="text-sf-muted text-sm leading-relaxed">
                {buildDescription()}
              </p>
            </div>
            <p className="text-white/60 text-[15px] text-center italic">
              Walk up to the drink stall. Say this clearly. Collect your drink.
            </p>
          </div>
        </div>
      </section>

      {/* Modifier Reference */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mb-8">
          <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
            Reference
          </p>
          <h2 className="text-3xl font-bold text-white mb-3">
            The Complete Modifier Guide
          </h2>
          <p className="text-sf-muted text-base max-w-xl">
            Every kopitiam term you might hear, where it comes from, and what it
            actually means in your drink.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DRINK_MODIFIERS.map((mod) => (
            <div key={mod.code} className="bg-[#1a1a1a] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sf-primary font-bold text-lg">
                  {mod.code}
                </span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <p className="text-white font-semibold text-sm mb-1">
                {mod.meaning}
              </p>
              <p className="text-sf-muted text-[15px] mb-2">{mod.origin}</p>
              {mod.example && (
                <p className="text-white/60 text-[15px] italic">
                  {mod.example}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <KeepExploring currentId="kopi-decoder" />

      <SiteFooter />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "../components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import {
  DRINK_MODIFIERS,
  DRINKS,
  ETIQUETTE_TIPS,
  SINGLISH_TERMS,
} from "@/app/lib/hawker-guide";

const TABS = [
  { id: "kopi-decoder", label: "Kopi Decoder" },
  { id: "oldschool", label: "Old School Names" },
  { id: "etiquette", label: "Hawker Etiquette" },
  { id: "singlish", label: "Singlish Glossary" },
];

export default function HawkerGuidePage() {
  const [activeTab, setActiveTab] = useState("kopi-decoder");
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
    let base = kopiFlavour === "kopi" ? "Kopi" : "Teh";
    let suffix = "";

    if (kopiMilk === "none") suffix += " O";
    else if (kopiMilk === "evaporated") suffix += " C";

    if (kopiSugar === "none" && kopiMilk === "none") suffix += " Kosong";
    else if (kopiSugar === "none") suffix += " Kosong";
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

  const oldSchoolDrinks = DRINKS.filter((d) => d.category === "oldschool");

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-[15px] font-semibold tracking-[0.25em] text-sf-primary uppercase mb-6">
          Hawker Guide
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] mb-8 max-w-3xl">
          Order Like
          <br />a Local
        </h1>
        <div className="border-l-2 border-sf-primary pl-6 mb-10 max-w-2xl">
          <p className="text-white/80 text-xl italic leading-relaxed font-light">
            &quot;Saying &apos;coffee, no sugar&apos; in a kopitiam might get you
            more sugar. This guide exists so that does not happen to you.&quot;
          </p>
        </div>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-5">
          Singapore&apos;s hawker centres have their own language — a beautiful
          collision of Hokkien, Malay, Cantonese, and pure local invention. Kopi
          is not just coffee. Teh is not just tea. And if you ask for Tak Kiu,
          you better mean Milo.
        </p>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          This is your complete guide to ordering, eating, and surviving a
          Singapore hawker centre with dignity and full stomach.
        </p>
        <div className="w-12 h-px bg-sf-primary mt-10" />
      </section>

      <ChopstickDivider />

      {/* Sticky Tab Bar */}
      <div className="sticky top-[57px] z-40 bg-[#111111]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 w-max sm:w-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-1.5 text-[15px] font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-sf-primary text-white"
                    : "bg-white/5 text-sf-muted hover:bg-white/10 border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32">
        {/* ── KOPI DECODER ── */}
        {activeTab === "kopi-decoder" && (
          <div>
            <div className="mb-10">
              <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
                Interactive
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                The Kopi Decoder
              </h2>
              <p className="text-sf-muted text-base max-w-xl">
                Build your perfect kopitiam order. Pick your preferences and we
                will tell you exactly what to say.
              </p>
            </div>

            {/* Builder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 space-y-6">
                {/* Base */}
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

                {/* Milk */}
                <div>
                  <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                    Milk?
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { id: "condensed", label: "Condensed Milk" },
                      { id: "evaporated", label: "Evaporated (C)" },
                      { id: "none", label: "No Milk (O)" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setKopiMilk(m.id as any)}
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

                {/* Sugar */}
                <div>
                  <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                    Sweetness?
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { id: "normal", label: "Normal" },
                      { id: "less", label: "Less Sweet (Siu Dai)" },
                      { id: "none", label: "No Sugar (Kosong)" },
                      { id: "extra", label: "Extra Sweet (Ga Dai)" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setKopiSugar(s.id as any)}
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

                {/* Strength */}
                <div>
                  <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                    Strength?
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { id: "normal", label: "Normal" },
                      { id: "strong", label: "Strong (Gao)" },
                      { id: "weak", label: "Weak (Po)" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setKopiStrength(s.id as any)}
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

                {/* Temperature */}
                <div>
                  <p className="text-[15px] font-semibold tracking-widest text-sf-primary uppercase mb-3">
                    Temperature?
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { id: "hot", label: "Hot" },
                      { id: "iced", label: "Iced (Peng)" },
                      { id: "warm", label: "Warm (Ban Siu)" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setKopiTemp(t.id as any)}
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

              {/* Result */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-center">
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
                  Walk up to the drink stall. Say this clearly. Collect your
                  drink.
                </p>
              </div>
            </div>

            {/* Modifier Reference */}
            <div className="mb-4">
              <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
                Reference
              </p>
              <h3 className="text-2xl font-bold text-white mb-8">
                The Complete Modifier Guide
              </h3>
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
          </div>
        )}

        {/* ── OLD SCHOOL NAMES ── */}
        {activeTab === "oldschool" && (
          <div>
            <div className="mb-10">
              <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
                Kopitiam Heritage
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Old School Names
              </h2>
              <p className="text-sf-muted text-base max-w-xl">
                Before everything had a branded name, kopitiam regulars gave
                drinks nicknames based on the tin, the action, or whatever they
                associated with it. These are the ones worth knowing.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {oldSchoolDrinks.map((drink) => (
                <div
                  key={drink.name}
                  className="bg-[#1a1a1a] rounded-2xl p-6 hover:ring-1 hover:ring-sf-primary/30 transition-all"
                >
                  <div className="mb-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {drink.name}
                    </h3>
                    {drink.alternateNames && (
                      <p className="text-sf-primary text-[15px] font-semibold uppercase tracking-wider">
                        {drink.alternateNames.join(" / ")}
                      </p>
                    )}
                  </div>
                  <p className="text-sf-muted text-sm leading-relaxed mb-4">
                    {drink.description}
                  </p>
                  {drink.story && (
                    <div className="border-t border-white/5 pt-4">
                      <p className="text-white/50 text-[15px] leading-relaxed italic">
                        {drink.story}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ETIQUETTE ── */}
        {activeTab === "etiquette" && (
          <div>
            <div className="mb-10">
              <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Hawker Etiquette
              </h2>
              <p className="text-sf-muted text-base max-w-xl">
                There are unwritten rules at every hawker centre. Nobody will
                tell you — you are just expected to know. Now you do.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ETIQUETTE_TIPS.map((tip, i) => (
                <div
                  key={tip.title}
                  className="bg-[#1a1a1a] rounded-2xl p-6 hover:ring-1 hover:ring-sf-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-sf-primary font-bold text-2xl leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-snug">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sf-muted text-sm leading-relaxed mb-4">
                    {tip.description}
                  </p>
                  {tip.localSay && (
                    <div className="bg-black/30 rounded-lg px-4 py-3">
                      <p className="text-white/60 text-[15px] italic">
                        &quot;{tip.localSay}&quot;
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SINGLISH ── */}
        {activeTab === "singlish" && (
          <div>
            <div className="mb-10">
              <p className="text-[15px] font-semibold tracking-[0.2em] text-sf-primary uppercase mb-3">
                The Language
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Singlish Glossary
              </h2>
              <p className="text-sf-muted text-base max-w-xl">
                Singlish is not broken English. It is a complete creole language
                built from Hokkien, Malay, Cantonese, Tamil, and English. These
                are the terms you will hear at every hawker centre.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SINGLISH_TERMS.map((term) => (
                <div
                  key={term.term}
                  className="bg-[#1a1a1a] rounded-xl p-5 hover:ring-1 hover:ring-sf-primary/30 transition-all"
                >
                  <div className="mb-3">
                    <h3 className="text-white font-bold text-xl">
                      {term.term}
                    </h3>
                    {term.pronunciation && (
                      <p className="text-sf-primary text-[15px] font-medium mt-0.5">
                        /{term.pronunciation}/
                      </p>
                    )}
                  </div>
                  <p className="text-sf-muted text-sm leading-relaxed mb-3">
                    {term.meaning}
                  </p>
                  <div className="bg-black/30 rounded-lg px-4 py-2.5">
                    <p className="text-white/50 text-[15px] italic">
                      &quot;{term.usedIn}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <SiteFooter />
    </>
  );
}

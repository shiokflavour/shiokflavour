"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { PRATA_BASES, PRATA_CURRIES } from "@/app/lib/hawker-guide";
import { KeepExploring } from "../keep-exploring";

export default function PrataDecoderPage() {
  const [prataBase, setPrataBase] = useState("plain");
  const [prataCurry, setPrataCurry] = useState("fish");
  const [prataLocal, setPrataLocal] = useState(false);
  const [prataAddress, setPrataAddress] = useState<"bang" | "boss" | "uncle">(
    "bang",
  );

  function buildPrataOrder() {
    const base = PRATA_BASES.find((b) => b.id === prataBase);
    const curry = PRATA_CURRIES.find((c) => c.id === prataCurry);
    if (!base || !curry) return { standard: "", local: "" };
    const baseName = base.name;
    const curryName = curry.id === "none" ? "" : curry.name;
    const standard = curryName
      ? `One ${baseName.toLowerCase()} prata with ${curryName.toLowerCase()}, please.`
      : `One ${baseName.toLowerCase()} prata, please.`;
    const localBase = base.localName
      ? base.localName.toLowerCase()
      : base.name.toLowerCase();
    const addressMap = { bang: "Bang", boss: "Boss", uncle: "Uncle" };
    const addr = addressMap[prataAddress];
    const local = curryName
      ? `${addr}, one ${localBase} prata, ${curryName.toLowerCase()} can?`
      : `${addr}, one ${localBase} prata can? Steady ah.`;
    return { standard, local };
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
          Order Like A Local
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.0] mb-6 max-w-3xl">
          The Prata Decoder
        </h1>
        <p className="text-sf-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          Build your prata order. Then decide if you want to say it like a
          local.
        </p>
        <div className="w-12 h-px bg-sf-primary mt-10" />
      </section>

      {/* Builder + Output */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Selections */}
          <div className="space-y-8">
            <div>
              <h2 className="text-white font-bold text-lg mb-4">
                Choose your prata
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRATA_BASES.map((base) => (
                  <button
                    key={base.id}
                    onClick={() => setPrataBase(base.id)}
                    className={`text-left rounded-xl p-4 border transition-all ${
                      prataBase === base.id
                        ? "border-sf-primary bg-sf-primary/10"
                        : "border-white/10 bg-[#1a1a1a] hover:border-white/30"
                    }`}
                  >
                    <p className="text-white font-semibold text-sm">
                      {base.name}
                    </p>
                    {base.localName && (
                      <p className="text-sf-primary text-xs mt-0.5">
                        aka {base.localName}
                      </p>
                    )}
                    <p className="text-sf-muted text-xs mt-1 leading-relaxed">
                      {base.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-4">
                How to address them
              </h2>
              <div className="flex gap-3">
                {(["bang", "boss", "uncle"] as const).map((addr) => (
                  <button
                    key={addr}
                    onClick={() => setPrataAddress(addr)}
                    className={`flex-1 rounded-xl py-3 px-4 text-sm font-semibold border transition-all capitalize ${
                      prataAddress === addr
                        ? "border-sf-primary bg-sf-primary/10 text-white"
                        : "border-white/10 bg-[#1a1a1a] text-sf-muted hover:border-white/30"
                    }`}
                  >
                    {addr}
                  </button>
                ))}
              </div>
              <p className="text-sf-muted text-xs mt-2">
                {prataAddress === "bang"
                  ? '"Bang" (Abang) — most authentic for mamak prata stalls. Respectful, friendly.'
                  : prataAddress === "boss"
                    ? '"Boss" — universally safe at any hawker stall. Never wrong.'
                    : '"Uncle" — use when they\'re clearly older. A mark of respect.'}
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-4">
                Choose your dip
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRATA_CURRIES.map((curry) => (
                  <button
                    key={curry.id}
                    onClick={() => setPrataCurry(curry.id)}
                    className={`text-left rounded-xl p-4 border transition-all ${
                      prataCurry === curry.id
                        ? "border-sf-primary bg-sf-primary/10"
                        : "border-white/10 bg-[#1a1a1a] hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-white font-semibold text-sm">
                        {curry.name}
                      </p>
                      {curry.boldness > 0 && (
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < curry.boldness
                                  ? "bg-sf-primary"
                                  : "bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-sf-muted text-xs leading-relaxed">
                      {curry.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 space-y-6">
              <div>
                <p className="text-sf-primary text-[15px] font-semibold uppercase tracking-wider mb-2">
                  Your Order
                </p>
                <p className="text-white text-xl font-medium leading-relaxed">
                  {prataLocal
                    ? buildPrataOrder().local
                    : buildPrataOrder().standard}
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sf-muted text-sm mb-1">You ordered</p>
                <p className="text-white font-semibold">
                  {PRATA_BASES.find((b) => b.id === prataBase)?.name} Prata
                </p>
                <p className="text-sf-muted text-sm mt-1">
                  with {PRATA_CURRIES.find((c) => c.id === prataCurry)?.name}
                </p>
              </div>

              <button
                onClick={() => setPrataLocal(!prataLocal)}
                className={`w-full rounded-xl py-3 px-5 font-semibold text-sm transition-all ${
                  prataLocal
                    ? "bg-sf-primary text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {prataLocal ? "Singlish mode on lah" : "Say it like a local"}
              </button>

              {prataLocal && (
                <div className="bg-black/30 rounded-xl px-5 py-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    Why this works
                  </p>
                  <p className="text-sf-muted text-sm leading-relaxed">
                    Adding &quot;ah&quot; or &quot;can?&quot; softens the
                    request — it&apos;s friendly, not demanding. Addressing the
                    uncle by &quot;Bang&quot; or &quot;Boss&quot; tells him you
                    know how things work here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <KeepExploring currentId="prata-decoder" />

      <SiteFooter />
    </>
  );
}

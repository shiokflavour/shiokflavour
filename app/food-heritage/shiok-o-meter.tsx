"use client";

import { useEffect, useRef, useState } from "react";

type Scores = {
  spiceHit: number;
  messFactor: number;
  flavourDepth: number;
  queueGame: number;
  shiokValue: number;
};

type MetricKey = keyof Scores;

const METRICS: readonly {
  key: MetricKey;
  label: string;
  emoji: string;
  subtitle: string;
}[] = [
  {
    key: "spiceHit",
    label: "Spice Hit",
    emoji: "🌶️",
    subtitle: "Zero to 'call ambulance'",
  },
  {
    key: "messFactor",
    label: "Mess Factor",
    emoji: "🙈",
    subtitle: "Wet wipes required",
  },
  {
    key: "flavourDepth",
    label: "Flavour Depth",
    emoji: "🎵",
    subtitle: "One note or full symphony",
  },
  {
    key: "queueGame",
    label: "Queue Game",
    emoji: "🕐",
    subtitle: "Minutes you'd sacrifice",
  },
  {
    key: "shiokValue",
    label: "Shiok Value",
    emoji: "💰",
    subtitle: "Dollar-for-dollar happiness",
  },
];

function ShiokBadge() {
  return (
    <span className="ml-2 inline-flex animate-bounce items-center gap-1 rounded-full border border-amber-400/50 bg-amber-400/20 px-2 py-0.5 text-xs font-bold text-amber-400">
      🔥 SHIOK!
    </span>
  );
}

export function ShiokOMeter({ scores }: { scores: Scores }) {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const values = Object.values(scores);
  const avgScore = Math.round(
    (values.reduce((a, b) => a + b, 0) / values.length) * 10,
  );

  const getBarColour = (score: number) => {
    if (score >= 9) return "bg-amber-400";
    if (score >= 7) return "bg-sf-primary";
    if (score >= 4) return "bg-orange-600";
    return "bg-slate-500";
  };

  return (
    <section ref={sectionRef}>
      <h2 className="text-xl font-semibold text-sf-primary">
        🌡️ Shiok-O-Meter
      </h2>
      <p className="mt-2 text-sm text-sf-cream/60">
        Rated by locals, not algorithms
      </p>

      <div className="mt-6 space-y-6">
        {METRICS.map(({ key, label, emoji, subtitle }) => {
          const score = scores[key];
          const isSHIOK = score === 10;
          return (
            <div key={key}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{emoji}</span>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-sf-cream">
                      {label}
                    </p>
                    <p className="text-xs italic text-sf-cream/45">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`text-base font-bold ${isSHIOK ? "text-amber-400" : "text-sf-primary"}`}
                  >
                    {score}/10
                  </span>
                  {isSHIOK && animated ? <ShiokBadge /> : null}
                </div>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className={`h-full rounded-full transition-all ease-out ${getBarColour(score)} ${isSHIOK ? "shadow-[0_0_8px_rgba(251,191,36,0.6)]" : ""}`}
                  style={{
                    width: animated ? `${score * 10}%` : "0%",
                    transitionDuration: "800ms",
                    transitionDelay: "150ms",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl border border-sf-primary/30 bg-sf-primary/10 px-6 py-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-sf-primary">
            Overall Shiok Score
          </p>
          <p className="mt-1 text-xs text-sf-cream/40">
            Averaged across all 5 metrics
          </p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold leading-none text-sf-primary">
            {avgScore}
            <span className="text-base font-normal text-sf-cream/40">
              /100
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

type Scores = {
  spiceHit: number;
  messFactor: number;
  flavourDepth: number;
  queueGame: number;
  shiokValue: number;
};

const METRICS = [
  {
    key: "spiceHit" as const,
    label: "Spice Hit",
    emoji: "🌶️",
    comments: [
      "Like drinking warm water lah",
      "Got a little kick, not bad",
      "Confirm sweat a bit",
      "Call ambulance already",
    ],
  },
  {
    key: "messFactor" as const,
    label: "Mess Factor",
    emoji: "🙈",
    comments: [
      "Eat with one hand, no problem",
      "Better grab extra napkins",
      "Shirt already kena sauce",
      "Wear your worst clothes",
    ],
  },
  {
    key: "flavourDepth" as const,
    label: "Flavour Depth",
    emoji: "🎵",
    comments: [
      "Simple, honest, decent lah",
      "Got layers, worth exploring",
      "Cannot stop eating",
      "Cannot stop thinking about it",
    ],
  },
  {
    key: "queueGame" as const,
    label: "Queue Game",
    emoji: "🕐",
    comments: [
      "Walk in, sit down, eat",
      "10 min wait, ok lah",
      "Worth every minute standing",
      "Queue in the rain also worth it",
    ],
  },
  {
    key: "shiokValue" as const,
    label: "Shiok Value",
    emoji: "💰",
    comments: [
      "Aiyah, a bit ex leh",
      "Fair price, no complaints",
      "Money well spent",
      "Best dollar spent in Singapore",
    ],
  },
];

function getCommentIndex(score: number): number {
  if (score <= 5) return 0;
  if (score <= 7) return 1;
  if (score <= 9) return 2;
  return 3;
}

function getBarColour(score: number): string {
  if (score === 10) return "bg-amber-400";
  if (score >= 8) return "bg-sf-primary";
  if (score >= 5) return "bg-orange-600/70";
  return "bg-slate-500/60";
}

function MetricBadge({ score, animated }: { score: number; animated: boolean }) {
  if (!animated) return null;
  if (score === 10) {
    return (
      <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-amber-400/60 bg-amber-400/15 px-2.5 py-0.5 text-[15px] font-bold text-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.3)]">
        🏆 Peak Shiok-ness
      </span>
    );
  }
  if (score >= 8) {
    return (
      <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-sf-primary/50 bg-sf-primary/15 px-2.5 py-0.5 text-[15px] font-bold text-sf-primary animate-bounce">
        ✨ SHIOK!
      </span>
    );
  }
  return null;
}

function getOverallLabel(score: number): { label: string; colour: string } {
  if (score >= 90) return { label: "🏆 Peak Shiok-ness. No Questions Asked.", colour: "text-amber-400" };
  if (score >= 80) return { label: "✨ Damn Shiok", colour: "text-sf-primary" };
  if (score >= 70) return { label: "👍 Solid Lah", colour: "text-orange-400" };
  if (score >= 60) return { label: "😌 Not Bad Not Bad", colour: "text-slate-400" };
  return { label: "🤷 Try First, See How", colour: "text-slate-500" };
}

export function ShiokOMeter({ scores }: { scores: Scores }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const avgScore = Math.round(
    (scores.spiceHit + scores.messFactor + scores.flavourDepth + scores.queueGame + scores.shiokValue) / 5 * 10
  );
  const overall = getOverallLabel(avgScore);

  return (
    <section ref={ref}>
      <h2 className="text-xl font-semibold text-sf-primary">🌡️ Shiok-O-Meter</h2>
      <p className="mt-2 text-sm text-sf-cream/60">Rated by locals, not algorithms</p>

      <div className="mt-6 space-y-7">
        {METRICS.map(({ key, label, emoji, comments }) => {
          const score = scores[key];
          const commentIdx = getCommentIndex(score);
          return (
            <div key={key}>
              <div className="flex items-start justify-between mb-2 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xl shrink-0">{emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center flex-wrap gap-1">
                      <p className="text-sm font-semibold text-sf-cream">{label}</p>
                      <MetricBadge score={score} animated={animated} />
                    </div>
                    <p className="text-[15px] text-sf-cream/45 italic mt-0.5">{comments[commentIdx]}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold shrink-0 ${score === 10 ? "text-amber-400" : score >= 8 ? "text-sf-primary" : "text-sf-cream/60"}`}>
                  {score}/10
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-white/[0.07] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ease-out ${getBarColour(score)} ${score === 10 ? "shadow-[0_0_8px_rgba(251,191,36,0.5)]" : ""}`}
                  style={{
                    width: animated ? `${score * 10}%` : "0%",
                    transitionDuration: "900ms",
                    transitionDelay: "100ms",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={`mt-8 rounded-2xl border px-6 py-5 flex items-center justify-between ${avgScore >= 90 ? "border-amber-400/40 bg-amber-400/10" : "border-sf-primary/30 bg-sf-primary/10"}`}>
        <div>
          <p className="text-[15px] font-bold uppercase tracking-widest text-sf-cream/50">Overall Shiok Score</p>
          <p className={`text-base font-bold mt-1 ${overall.colour}`}>{overall.label}</p>
        </div>
        <div className={`text-4xl font-bold leading-none ${avgScore >= 90 ? "text-amber-400" : "text-sf-primary"}`}>
          {animated ? avgScore : 0}
          <span className="text-sm font-normal text-sf-cream/40">/100</span>
        </div>
      </div>
    </section>
  );
}

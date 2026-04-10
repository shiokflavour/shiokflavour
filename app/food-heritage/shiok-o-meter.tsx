"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Scores = {
  spiceHit: number;
  messFactor: number;
  flavourDepth: number;
  queueGame: number;
  shiokValue: number;
};

type MetricKey = keyof Scores;

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
    label: "Napkin Alert",
    emoji: "",
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

/** Badge pill: higher = spicier */
function pillSpiceHit(score: number): { text: string; className: string } {
  if (score === 0) return { text: "No Heat", className: "bg-white/10 text-white/60" };
  if (score <= 3) return { text: "Mild Lah", className: "bg-green-700 text-white" };
  if (score <= 6) return { text: "Getting Warm", className: "bg-amber-600 text-white" };
  if (score <= 8) return { text: "Solid Kick", className: "bg-orange-600 text-white" };
  return { text: "Call the Ambulance", className: "bg-red-700 text-white" };
}

/** invertedMess = 10 - messFactor (higher inverted = cleaner / easier to eat). x/10 shows raw messFactor. */
function napkinTier(messFactor: number): "clean" | "napkins" | "dangerous" {
  const invertedMess = 10 - messFactor;
  if (invertedMess >= 8) return "clean";
  if (invertedMess >= 4 && invertedMess <= 6) return "napkins";
  return "dangerous";
}

function pillNapkinAlert(messFactor: number): { text: string; className: string } {
  const tier = napkinTier(messFactor);
  if (tier === "clean") return { text: "Clean Eat", className: "bg-green-700 text-white" };
  if (tier === "napkins") return { text: "Bring Napkins", className: "bg-amber-600 text-white" };
  return { text: "Dangerous! Wear Old Clothes", className: "bg-red-700 text-white" };
}

function pillFlavourDepth(score: number): { text: string; className: string } {
  if (score <= 3) return { text: "Still Looking", className: "bg-white/10 text-white/60" };
  if (score <= 6) return { text: "Not Bad Lah", className: "bg-amber-600 text-white" };
  if (score <= 8) return { text: "Very The Solid", className: "bg-orange-600 text-white" };
  return { text: "Cannot Stop Eating", className: "bg-sf-primary text-white" };
}

function pillQueueGame(score: number): { text: string; className: string } {
  if (score <= 3) return { text: "Walk Right In", className: "bg-green-700 text-white" };
  if (score <= 6) return { text: "Short Wait", className: "bg-amber-600 text-white" };
  if (score <= 8) return { text: "Queue Up Lah", className: "bg-orange-600 text-white" };
  return { text: "Die Die Must Queue", className: "bg-red-700 text-white" };
}

function pillShiokValue(score: number): { text: string; className: string } {
  if (score <= 3) return { text: "Aiyah Ex Leh", className: "bg-red-700 text-white" };
  if (score <= 6) return { text: "Can Accept", className: "bg-amber-600 text-white" };
  if (score <= 8) return { text: "Good Value", className: "bg-green-700 text-white" };
  return { text: "Steady Pom Pi Pi", className: "bg-sf-primary text-white" };
}

function getMetricPill(key: MetricKey, scores: Scores): { text: string; className: string } {
  const s = scores[key];
  switch (key) {
    case "spiceHit":
      return pillSpiceHit(s);
    case "messFactor":
      return pillNapkinAlert(scores.messFactor);
    case "flavourDepth":
      return pillFlavourDepth(s);
    case "queueGame":
      return pillQueueGame(s);
    case "shiokValue":
      return pillShiokValue(s);
  }
}

const PEAK_GOLD_STYLE: CSSProperties = {
  background: "linear-gradient(135deg, #f59e0b, #fbbf24, #f59e0b)",
  boxShadow: "0 0 12px rgba(251, 191, 36, 0.6)",
};

const PEAK_SPICE_STYLE: CSSProperties = {
  background: "linear-gradient(135deg, #dc2626, #ef4444, #dc2626)",
  boxShadow: "0 0 12px rgba(239, 68, 68, 0.6)",
};

/** Peak tier: Spice Hit 9–10 (red bounce); others gold bounce; non-peak unchanged */
function getPeakBadgeVariant(key: MetricKey, scores: Scores): "none" | "spice" | "gold" {
  switch (key) {
    case "spiceHit":
      return scores.spiceHit >= 9 ? "spice" : "none";
    case "messFactor":
      return napkinTier(scores.messFactor) === "dangerous" ? "gold" : "none";
    case "flavourDepth":
      return scores.flavourDepth >= 9 ? "gold" : "none";
    case "queueGame":
      return scores.queueGame >= 9 ? "gold" : "none";
    case "shiokValue":
      return scores.shiokValue >= 9 ? "gold" : "none";
  }
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
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const overallScore = Math.round(
    ((scores.spiceHit +
      scores.messFactor +
      scores.flavourDepth +
      scores.queueGame +
      scores.shiokValue) /
      50) *
      100,
  );
  const overall = getOverallLabel(overallScore);

  return (
    <section ref={ref}>
      <h2 className="text-xl font-semibold text-sf-primary">🌡️ Shiok-O-Meter</h2>
      <p className="mt-2 text-sm text-sf-cream/60">Rated by locals, not algorithms</p>

      <div className="mt-6 space-y-7">
        {METRICS.map(({ key, label, emoji, comments }) => {
          const score = scores[key];
          const commentIdx = getCommentIndex(score);
          const pill = getMetricPill(key, scores);
          const peakVariant = getPeakBadgeVariant(key, scores);
          return (
            <div key={key}>
              <div className="mb-2 flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  {emoji ? (
                    <span className="shrink-0 text-xl">{emoji}</span>
                  ) : (
                    <span className="inline-block w-7 shrink-0 text-xl" aria-hidden />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-sf-cream">{label}</p>
                    <p className="mt-0.5 text-[15px] italic text-sf-cream/45">{comments[commentIdx]}</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end text-right">
                  <span
                    className={`text-sm font-bold ${
                      score === 10 ? "text-amber-400" : score >= 8 ? "text-sf-primary" : "text-sf-cream/60"
                    }`}
                  >
                    {score}/10
                  </span>
                  {peakVariant === "spice" ? (
                    <span
                      className="mt-1 inline-block animate-bounce rounded-full px-4 py-1.5 text-[15px] font-bold text-white"
                      style={PEAK_SPICE_STYLE}
                    >
                      {pill.text}
                    </span>
                  ) : peakVariant === "gold" ? (
                    <span
                      className="mt-1 inline-block animate-bounce rounded-full px-4 py-1.5 text-[15px] font-bold text-black"
                      style={PEAK_GOLD_STYLE}
                    >
                      {pill.text}
                    </span>
                  ) : (
                    <span
                      className={`mt-1 inline-block rounded-full px-3 py-1 text-[15px] font-bold ${pill.className}`}
                    >
                      {pill.text}
                    </span>
                  )}
                </div>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
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

      <div
        className={`mt-8 flex items-center justify-between rounded-2xl border px-6 py-5 ${overallScore >= 90 ? "border-amber-400/40 bg-amber-400/10" : "border-sf-primary/30 bg-sf-primary/10"}`}
      >
        <div>
          <p className="text-[15px] font-bold uppercase tracking-widest text-sf-cream/50">Overall Shiok Score</p>
          <p className={`mt-1 text-base font-bold ${overall.colour}`}>{overall.label}</p>
        </div>
        <div className={`text-4xl font-bold leading-none ${overallScore >= 90 ? "text-amber-400" : "text-sf-primary"}`}>
          {overallScore}
          <span className="text-sm font-normal text-sf-cream/40">/100</span>
        </div>
      </div>
    </section>
  );
}

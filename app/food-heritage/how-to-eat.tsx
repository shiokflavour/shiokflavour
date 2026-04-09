"use client";
import { useState } from "react";
type Props = { steps: string[] };
export function HowToEat({ steps }: Props) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section>
      <h2 className="text-xl font-semibold text-sf-primary">🥢 How to Eat Like a Local</h2>
      <ol className="mt-5 space-y-3">
        {steps.map((step, i) => (
          <li key={i} onClick={() => setActiveStep(activeStep === i ? null : i)}
            className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all duration-200 ${activeStep === i ? "border-sf-primary/60 bg-sf-primary/10" : "border-white/[0.08] bg-sf-surface hover:border-white/20"}`}>
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${activeStep === i ? "bg-sf-primary text-white" : "bg-white/10 text-sf-muted"}`}>{i + 1}</span>
            <p className={`pt-0.5 text-base leading-relaxed transition-colors ${activeStep === i ? "text-sf-cream" : "text-sf-muted"}`}>{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-center text-[15px] text-sf-muted">Tap each step to highlight</p>
    </section>
  );
}

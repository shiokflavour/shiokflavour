"use client";
import { useState } from "react";
type Ingredient = { name: string; emoji: string; role: string };
type Props = { ingredients: Ingredient[] };
export function KeyIngredients({ ingredients }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const active = ingredients.find((i) => i.name === open);
  return (
    <section>
      <h2 className="text-xl font-semibold text-sf-primary">🏷️ Key Ingredients</h2>
      <p className="mt-2 text-sm text-sf-cream/60">Tap any ingredient to learn its role</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {ingredients.map((ing) => (
          <button key={ing.name} onClick={() => setOpen(open === ing.name ? null : ing.name)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${open === ing.name ? "border-sf-primary bg-sf-primary text-white" : "border-white/25 bg-white/[0.07] text-sf-cream hover:border-sf-primary/60 hover:bg-sf-primary/10"}`}>
            <span>{ing.emoji}</span><span>{ing.name}</span>
          </button>
        ))}
      </div>
      {active && (
        <div className="mt-4 flex items-start gap-4 rounded-xl border border-sf-primary/40 bg-sf-primary/10 p-5">
          <span className="text-3xl">{active.emoji}</span>
          <div>
            <p className="text-base font-semibold text-white">{active.name}</p>
            <p className="mt-1.5 text-base leading-relaxed text-sf-cream/80">{active.role}</p>
          </div>
        </div>
      )}
    </section>
  );
}

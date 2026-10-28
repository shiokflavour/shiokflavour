import { CakeSlice, Coffee, Cookie, Croissant, Egg, IceCreamCone, Leaf, Sandwich, Soup, Utensils } from "lucide-react";
import { LOOKS, type IconKey, type Look } from "@/app/lib/cafes";

const ICONS = {
  croissant: Croissant,
  cake: CakeSlice,
  cookie: Cookie,
  sandwich: Sandwich,
  egg: Egg,
  utensils: Utensils,
  coffee: Coffee,
  leaf: Leaf,
  icecream: IceCreamCone,
  soup: Soup,
} satisfies Record<IconKey, unknown>;

/** Photo-free visual for a cafe: a tile tinted by cafe type with an icon of what to order. */
export function CafeTile({
  look,
  icon,
  order,
  className = "",
}: {
  look: Look;
  icon: IconKey;
  order: string;
  className?: string;
}) {
  const Icon = ICONS[icon];
  const { color, label } = LOOKS[look];
  return (
    <div
      className={`flex shrink-0 flex-col justify-between rounded-xl border p-2.5 ${className}`}
      style={{ backgroundColor: `${color}1f`, borderColor: `${color}55`, color }}
      aria-hidden
    >
      <Icon className="h-7 w-7" strokeWidth={1.75} />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] opacity-80">{label}</p>
        <p className="line-clamp-2 text-[11px] font-semibold leading-tight text-sf-cream/90">{order}</p>
      </div>
    </div>
  );
}

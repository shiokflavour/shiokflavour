type Stall = { name: string; address: string; area: string; note: string; mapsUrl: string };
type Props = { dishName: string; stalls: Stall[] };
export function BestStalls({ dishName, stalls }: Props) {
  return (
    <section className="rounded-2xl border-2 border-sf-primary/30 bg-sf-surface/60 p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📍</span>
        <h2 className="text-xl font-semibold text-sf-cream">Best {dishName} in Singapore</h2>
      </div>
      <p className="mt-1 text-sm text-sf-cream/50">Locally verified — not sponsored</p>
      <ul className="mt-6 space-y-4">
        {stalls.map((stall, i) => (
          <li key={stall.name} className="flex gap-4 rounded-xl border border-white/15 bg-white/[0.06] p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sf-primary/25 text-base font-bold text-sf-primary">{i + 1}</div>
            <div className="min-w-0 flex-1">
              <p className="text-base font-semibold text-white">{stall.name}</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-sm font-medium text-sf-primary">{stall.area}</span>
                <span className="text-[15px] text-white/20">•</span>
                <span className="text-sm text-sf-cream/60">{stall.address}</span>
              </div>
              <p className="mt-2 text-base leading-relaxed text-sf-cream/75">{stall.note}</p>
              <a href={stall.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/[0.07] px-4 py-2 text-sm font-medium text-sf-cream transition hover:border-sf-primary/60 hover:text-sf-primary">
                📍 Open in Maps
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { TOURS } from "@/app/lib/tours";

/** Affiliate tour card. `lead` is an optional short heading above the card. */
export function TourCard({ id, lead }: { id: string; lead?: string }) {
  const tour = TOURS[id];
  if (!tour) return null;
  return (
    <aside className="my-10 overflow-hidden rounded-2xl border border-sf-primary/30 bg-[#1a1a1a]">
      <div className="p-6 sm:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sf-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-sf-primary">
            {lead ?? "Prefer a guided tour?"}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-white/70">
            {tour.platform}
          </span>
        </div>
        <p className="text-xl font-bold text-white sm:text-2xl">{tour.name}</p>
        <p className="mt-1 text-sm text-white/50">by {tour.operator}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-sf-cream">
          <span>{tour.price}</span>
          <span className="text-white/30">·</span>
          <span>{tour.duration}</span>
          {tour.rating && (
            <>
              <span className="text-white/30">·</span>
              <span>★ {tour.rating}</span>
            </>
          )}
        </div>
        <ul className="mt-4 space-y-2">
          {tour.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-sf-muted">
              <span className="text-sf-primary">✓</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <a
          href={tour.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sf-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sf-primary/90 sm:w-auto sm:text-base"
        >
          Check prices and availability on {tour.platform} →
        </a>
        <p className="mt-3 text-xs text-white/40">
          {tour.note ? `${tour.note} ` : ""}Prices change, so check the listing.
          Affiliate link: we may earn a small commission at no extra cost to
          you.
        </p>
      </div>
    </aside>
  );
}

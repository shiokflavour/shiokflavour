import { FEATURED_HAWKERS } from "../lib/featured-hawkers";
import { HawkerCentreCard } from "./hawker-centre-card";

export function HawkerGrid() {
  return (
    <section
      id="hawker-centres"
      className="border-t border-white/5 bg-black/20 px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="hawkers-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <h2
            id="hawkers-heading"
            className="text-3xl font-bold tracking-tight text-sf-cream sm:text-4xl"
          >
            Featured hawker centres
          </h2>
          <p className="mt-3 text-sf-muted">
            Crowd favourites and late-night legends — pick a spot and eat like
            a local.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_HAWKERS.map((h, index) => (
            <HawkerCentreCard
              key={h.slug}
              index={index}
              data={{
                slug: h.slug,
                name: h.name,
                address: h.address,
                region: h.region,
                imageUrl: h.imageUrl,
                primaryTag: h.tag,
                hoursLabel: h.hours,
                mustTry: h.mustTry,
                michelinNote: h.michelinNote,
                halal: h.halal,
                openLate: h.openLate,
                budgetPerPax: h.budgetPerPax,
                nearestMRT: h.nearestMRT,
              }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

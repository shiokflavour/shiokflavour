import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CAFE_AREAS, COMING_SOON_AREAS } from "@/app/lib/cafes";

export const metadata: Metadata = {
  title: "Best Cafes in Singapore by Neighbourhood | ShiokFlavour",
  description:
    "Singapore cafe guides by neighbourhood, checked in 2026: where to brunch, work or hang out, with vibe, prices, hours and the hawker stall next door.",
  alternates: { canonical: "/cafes" },
};

export default function CafesHubPage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">Cafes</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-6xl">
          Tapao at the hawker.
          <br />
          Lepak at the cafe.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
          Neighbourhood cafe guides for when you want to sit, chat and stay a while. Every cafe is checked before it goes on the list, with an open-now filter and a shortlist you can send to the group chat.
        </p>

        <div className="mt-12 grid gap-6">
          {CAFE_AREAS.map((a) => (
            <Link
              key={a.slug}
              href={`/cafes/${a.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-white/10 bg-sf-surface/50 transition-colors hover:border-sf-primary/50 sm:grid-cols-2"
            >
              <div className="relative h-56 sm:h-full">
                <Image src={a.heroImage} alt={a.heroAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-sf-primary">{a.cafes.length} cafes · checked {a.lastChecked}</p>
                <h2 className="mt-2 text-3xl font-bold text-white group-hover:text-sf-primary">{a.name}</h2>
                <p className="mt-3 text-base leading-relaxed text-sf-muted">{a.strapline}</p>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-sf-primary">Open the guide</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">Coming soon</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COMING_SOON_AREAS.map((a) => (
            <div key={a.name} className="rounded-2xl border border-white/5 p-6 opacity-70">
              <p className="text-xl font-bold text-white">{a.name}</p>
              <p className="mt-2 text-sm text-sf-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

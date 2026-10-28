import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/app/components/faq-section";
import { CafeExplorer } from "../cafe-explorer";
import { LepakMatcher } from "../lepak-matcher";
import { CAFE_AREAS, COMING_SOON_AREAS, getCafeArea, type CafeArea } from "@/app/lib/cafes";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return CAFE_AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getCafeArea(slug);
  if (!area) return { title: "Not found | ShiokFlavour" };
  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: { canonical: `/cafes/${area.slug}` },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: `https://www.shiokflavour.com/cafes/${area.slug}`,
      images: [{ url: area.heroImage, alt: area.heroAlt }],
    },
  };
}

function CafeListStructuredData({ area }: { area: CafeArea }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Cafes in ${area.name}, Singapore`,
    itemListElement: area.cafes.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CafeOrCoffeeShop",
        name: c.name,
        description: c.oneLiner,
        address: { "@type": "PostalAddress", streetAddress: c.address, addressCountry: "SG" },
        priceRange: c.price,
        url: `https://www.shiokflavour.com/cafes/${area.slug}#cafe-${c.slug}`,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function CafeAreaPage({ params }: Props) {
  const { area: slug } = await params;
  const area = getCafeArea(slug);
  if (!area) notFound();
  const bySlug = new Map(area.cafes.map((c) => [c.slug, c]));

  return (
    <>
      <CafeListStructuredData area={area} />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-xs text-sf-muted">
          <Link href="/cafes" className="hover:text-sf-cream">Cafes</Link>
          <span aria-hidden> / </span>
          <span className="text-sf-cream/80">{area.name}</span>
        </nav>

        <header className="mt-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">Cafe guide</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {area.name} Cafes
          </h1>
          <p className="mt-3 text-lg text-sf-cream/90">{area.strapline}</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-sf-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Every cafe checked in {area.lastChecked}
          </p>
        </header>

        <div className="relative mt-8 h-56 overflow-hidden rounded-2xl sm:h-72">
          <Image src={area.heroImage} alt={area.heroAlt} fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>

        <div className="mt-8 space-y-3 text-base leading-relaxed text-sf-cream/90 sm:text-lg">
          {area.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <section aria-labelledby="quick-picks-heading" className="mt-10">
          <h2 id="quick-picks-heading" className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary">
            Quick picks
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {area.quickPicks.map((q) => (
              <a
                key={q.label}
                href={`#cafe-${q.slug}`}
                className="rounded-xl border border-white/10 bg-sf-surface/50 p-4 transition-colors hover:border-sf-primary/50"
              >
                <span className="block text-xs uppercase tracking-[0.15em] text-sf-muted">Best for {q.label.toLowerCase()}</span>
                <span className="mt-1 block font-bold text-sf-cream">{bySlug.get(q.slug)?.name}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <LepakMatcher cafes={area.cafes} />
        </div>

        <div className="mt-12">
          <CafeExplorer cafes={area.cafes} areaName={area.name} />
        </div>

        <section aria-labelledby="pairings-heading" className="mt-14">
          <h2 id="pairings-heading" className="text-2xl font-bold tracking-tight text-sf-cream">
            Tapao, then lepak
          </h2>
          <p className="mt-1 text-sm text-sf-muted">Eat like a local first, then settle in somewhere comfy.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {area.pairings.map((p) => {
              const cafe = bySlug.get(p.cafeSlug);
              return (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-sf-surface/50 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-sf-primary">{p.when}</p>
                  <p className="mt-1 text-lg font-bold text-sf-cream">{p.title}</p>
                  <ol className="mt-4 space-y-3 text-sm leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sf-primary text-xs font-bold text-white">1</span>
                      <span className="text-sf-cream/90">
                        <Link href={p.hawker.href} className="font-semibold text-sf-cream underline decoration-white/30 underline-offset-4 hover:text-sf-primary">
                          {p.hawker.label}
                        </Link>
                        : {p.hawker.text}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sf-primary text-xs font-bold text-sf-primary">2</span>
                      <span className="text-sf-cream/90">
                        <a href={`#cafe-${p.cafeSlug}`} className="font-semibold text-sf-cream underline decoration-white/30 underline-offset-4 hover:text-sf-primary">
                          {cafe?.name}
                        </a>
                        : {p.cafeText}
                      </span>
                    </li>
                  </ol>
                </div>
              );
            })}
          </div>
        </section>

        {area.nearby.length ? (
          <section aria-labelledby="nearby-heading" className="mt-14 rounded-2xl border border-white/10 p-5 sm:p-6">
            <h2 id="nearby-heading" className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary">
              Just outside the estate
            </h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {area.nearby.map((n) => (
                <div key={n.name}>
                  <p className="font-bold text-sf-cream">{n.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-sf-cream/85">{n.text}</p>
                  <p className="mt-2 text-xs text-sf-muted">{n.address} · {n.hoursText}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section aria-labelledby="good-to-know-heading" className="mt-14">
          <h2 id="good-to-know-heading" className="text-2xl font-bold tracking-tight text-sf-cream">
            Good to know
          </h2>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-sf-cream/90">
            {area.goodToKnow.map((g) => (
              <li key={g} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sf-primary" aria-hidden />
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-sf-muted">
            Hours were checked against Google Maps listings in {area.lastChecked}. Cafes change hours and close at short notice, so check before a special trip.
          </p>
        </section>

        <div className="mt-14">
          <FaqSection faqs={area.faqs} title={`${area.name} cafes: questions people ask`} />
        </div>

        <section aria-labelledby="related-heading" className="mt-14">
          <h2 id="related-heading" className="text-[15px] font-bold uppercase tracking-[0.2em] text-sf-primary">
            Make a day of it
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {area.related.map((r) => (
              <Link key={r.href} href={r.href} className="rounded-full border border-white/15 px-4 py-2 text-sm text-sf-cream hover:border-sf-primary hover:text-sf-primary">
                {r.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-sf-muted">More cafe guides coming soon</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {COMING_SOON_AREAS.map((a) => (
              <div key={a.name} className="rounded-xl border border-white/5 p-4 opacity-70">
                <p className="font-bold text-sf-cream">{a.name}</p>
                <p className="mt-1 text-sm text-sf-muted">{a.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

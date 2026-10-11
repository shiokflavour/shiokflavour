import Link from "next/link";
import type { FaqItem } from "@/app/lib/faqs";

/** Server-rendered Q&A list (native <details>, so answers are in the HTML for readers and search engines). */
export function FaqSection({
  faqs,
  title = "Questions people ask",
}: {
  faqs: FaqItem[];
  title?: string;
}) {
  if (faqs.length === 0) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-2xl font-bold tracking-tight text-sf-cream"
      >
        {title}
      </h2>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-sf-surface/50">
        {faqs.map((f, i) => (
          <details key={f.q} className="group px-5 py-4 sm:px-6" open={i < 2}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-sf-cream marker:hidden sm:text-lg">
              <span>{f.q}</span>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-sf-primary transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-relaxed text-sf-muted">
              {f.a}
              {f.link ? (
                <>
                  {" "}
                  <Link
                    href={f.link.href}
                    className="font-semibold text-sf-primary underline decoration-sf-primary/40 underline-offset-4 hover:decoration-sf-primary"
                  >
                    {f.link.label}
                  </Link>
                </>
              ) : null}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

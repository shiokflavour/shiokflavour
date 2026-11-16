const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does a food tour in Singapore cost?",
    a: "The group tours on this page cost from about US$75 to US$88 per person, and the private tour from about US$130. For comparison, a plate at a hawker centre usually costs S$4 to S$7, so you are paying for the guide, the route and the stories rather than the food.",
  },
  {
    q: "Are food tours in Singapore worth it?",
    a: "They are worth it on a first visit, when time is short, or if you want the history behind each dish. If you are on a budget or like to linger, a free self-guided trail and a hawker centre cover the same food for a fraction of the price.",
  },
  {
    q: "Is there a halal food tour in Singapore?",
    a: "Wok 'n' Stroll runs a halal food walking tour in Kampong Glam, the only dedicated halal food tour we found on the big booking platforms. It has very few reviews so far, so confirm availability first. Our halal hawker food guide has backup options.",
  },
  {
    q: "Can I do a self-guided food tour in Singapore?",
    a: "Yes. ShiokFlavour has four free self-guided food trails, through the CBD, Tiong Bahru, Katong and Little India with Kampong Glam, each with stops, what to order and how long to spend at each.",
  },
  {
    q: "What is the best time to take a food tour in Singapore?",
    a: "Evening tours suit satay, river views and cooler air. Morning tours suit kueh, kopi and breakfast dishes. Mid-week is best, as many hawker stalls take their rest day on Mondays.",
  },
];

export function TourFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="my-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
      {FAQS.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-white hover:text-sf-primary [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="text-xl leading-none text-sf-primary transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-sf-muted sm:text-base">{f.a}</p>
        </details>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

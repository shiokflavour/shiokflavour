import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
          Get In Touch
        </p>
        <h1 className="mb-6 max-w-2xl text-5xl font-bold leading-[1.0] text-white sm:text-6xl">
          Let&apos;s Talk
          <br />
          Hawker Food.
        </h1>
        <p className="mb-4 max-w-xl text-base leading-relaxed text-sf-muted sm:text-lg">
          Got a hawker stall tip? A heritage dish we&apos;ve missed? A story
          worth telling? We want to hear it.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-sf-muted sm:text-lg">
          ShiokFlavour is built on the knowledge of people who eat seriously. If
          that&apos;s you — get in touch.
        </p>
        <div className="mt-10 h-px w-12 bg-sf-primary" />
      </section>

      <ChopstickDivider />

      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email card */}
          <div className="rounded-2xl bg-[#1a1a1a] p-8 transition-all hover:ring-1 hover:ring-sf-primary/30">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sf-primary">
              Email Us
            </p>
            <a
              href="mailto:shiokflavour@gmail.com"
              className="break-all text-lg font-semibold text-white transition-colors hover:text-sf-primary"
            >
              shiokflavour@gmail.com
            </a>
            <p className="mt-3 text-sm leading-relaxed text-sf-muted">
              We read every email. Response time is usually within 24–48 hours.
            </p>
          </div>

          {/* What we'd love to hear card */}
          <div className="rounded-2xl bg-[#1a1a1a] p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sf-primary">
              What We&apos;d Love
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-sf-muted">
                <span className="mt-0.5 text-sf-primary">—</span>
                <span>Hidden stalls worth queuing for</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-sf-muted">
                <span className="mt-0.5 text-sf-primary">—</span>
                <span>Heritage dishes we haven&apos;t covered</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-sf-muted">
                <span className="mt-0.5 text-sf-primary">—</span>
                <span>Corrections — we want to get it right</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-sf-muted">
                <span className="mt-0.5 text-sf-primary">—</span>
                <span>Collaborations and partnerships</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-sf-muted">
                <span className="mt-0.5 text-sf-primary">—</span>
                <span>Just saying hi — that&apos;s fine too</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

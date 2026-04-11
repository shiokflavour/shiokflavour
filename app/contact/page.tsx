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

        <div className="mt-12 max-w-2xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-sf-primary">
            Send Us A Message
          </p>
          <form
            action="https://formspree.io/f/xjgpngvb"
            method="POST"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-sf-muted">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ah Kow"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder:text-white/20 transition-colors focus:border-sf-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-sf-muted">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder:text-white/20 transition-colors focus:border-sf-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-sf-muted">Subject</label>
              <select
                name="subject"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white transition-colors focus:border-sf-primary focus:outline-none"
              >
                <option value="" disabled>
                  What&apos;s this about?
                </option>
                <option value="Stall Tip">I have a stall tip</option>
                <option value="Missing Dish">Missing heritage dish</option>
                <option value="Correction">Correction needed</option>
                <option value="Collaboration">Collaboration / Partnership</option>
                <option value="General">Just saying hi</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-sf-muted">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us everything. The more detail the better."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder:text-white/20 transition-colors focus:border-sf-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-sf-primary px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-sf-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | ShiokFlavour",
  description:
    "Privacy Policy for ShiokFlavour — Google Analytics, cookies, and how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-sf-cream sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-sf-muted">
            Last updated: 5 April 2026
          </p>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">
              What data we collect
            </h2>
            <p className="leading-relaxed text-sf-muted">
              ShiokFlavour uses{" "}
              <strong className="font-medium text-sf-cream">
                Google Analytics
              </strong>{" "}
              to understand how visitors use our site (for example, which pages
              are viewed and how traffic arrives). Analytics may collect
              technical information such as device type, browser, approximate
              location, and usage patterns. We do not use this to identify you
              personally beyond what Google Analytics provides in aggregate.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">
              Google AdSense and cookies
            </h2>
            <p className="leading-relaxed text-sf-muted">
              If we display ads through{" "}
              <strong className="font-medium text-sf-cream">
                Google AdSense
              </strong>
              , Google and its partners may use cookies or similar technologies
              to serve ads based on your visits to this site or others. You can
              learn more about how Google uses data in Google&apos;s Privacy &
              Terms, and you may opt out of personalised advertising through
              your Google Ad Settings where available.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">
              No sale of personal data
            </h2>
            <p className="leading-relaxed text-sf-muted">
              We do not sell your personal data to third parties. Information
              processed by analytics or advertising providers is subject to
              their respective privacy policies.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">
              Open data attribution
            </h2>
            <p className="leading-relaxed text-sf-muted">
              Location and listing information on ShiokFlavour may be derived
              from official datasets published on{" "}
              <a
                href="https://data.gov.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sf-primary hover:underline"
              >
                data.gov.sg
              </a>{" "}
              under the{" "}
              <a
                href="https://data.gov.sg/open-data-licence"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sf-primary hover:underline"
              >
                Singapore Open Data Licence
              </a>
              .
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">Contact</h2>
            <p className="leading-relaxed text-sf-muted">
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:hello@shiokflavour.com"
                className="font-medium text-sf-primary hover:underline"
              >
                hello@shiokflavour.com
              </a>
              .
            </p>
          </section>

          <p className="mt-14">
            <Link
              href="/"
              className="text-sm font-semibold text-sf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "About | ShiokFlavour",
  description:
    "Learn about ShiokFlavour — Singapore's food discovery guide for hawker centres and restaurants, powered by open data.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
            ShiokFlavour
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-sf-cream sm:text-5xl">
            About ShiokFlavour
          </h1>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">Our story</h2>
            <p className="leading-relaxed text-sf-muted">
              ShiokFlavour is Singapore&apos;s most comprehensive food discovery
              guide for locals and tourists alike. We bring together hawker
              centres, neighbourhood favourites, and restaurant picks so you can
              plan your next meal with confidence—whether you&apos;re after
              breakfast prata, a CBD lunch, or a late-night supper run.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">Our mission</h2>
            <p className="leading-relaxed text-sf-muted">
              Our mission is simple: help people find the most{" "}
              <span className="font-medium text-sf-cream">shiok</span> food
              across all of Singapore&apos;s hawker centres and restaurants. We
              believe great food should be easy to discover, celebrate, and
              share.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-sf-primary">
              Data transparency
            </h2>
            <p className="leading-relaxed text-sf-muted">
              We use official government data from{" "}
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
              . Where we show listings or locations drawn from public datasets,
              we aim to attribute clearly and keep information as accurate as
              the source allows.
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

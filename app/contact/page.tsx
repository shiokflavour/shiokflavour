import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Contact | ShiokFlavour",
  description:
    "Get in touch with ShiokFlavour — questions, partnerships, or hawker stall features.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sf-primary">
            ShiokFlavour
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-sf-cream sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-sf-muted">
            Have a question, idea, or collaboration in mind? Send us a message
            below.{" "}
            <strong className="font-medium text-sf-cream">
              Hawker stall owners
            </strong>{" "}
            are welcome to reach out if you&apos;d like to be featured on
            ShiokFlavour—we&apos;d love to hear from you.
          </p>
          <p className="mt-4 text-sf-muted">
            You can also email us directly at{" "}
            <a
              href="mailto:hello@shiokflavour.com"
              className="font-semibold text-sf-primary hover:underline"
            >
              hello@shiokflavour.com
            </a>
            .
          </p>

          <ContactForm />

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

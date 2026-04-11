import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* Animated icon */}
        <div style={{ marginBottom: "2rem" }}>
          <img
            src="/images/SF_logomark_transparent.png"
            alt=""
            className="fire-glow"
            style={{
              width: "min(160px, 30vw)",
              height: "min(160px, 30vw)",
              objectFit: "contain",
            }}
          />
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
          Order Placed
        </p>

        <h1 className="mb-4 text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
          Message In
          <br />
          The Wok.
        </h1>

        <p className="mb-8 text-2xl font-semibold italic text-sf-primary sm:text-3xl">
          Coming right up.
        </p>

        <p className="mb-12 max-w-md text-base leading-relaxed text-sf-muted sm:text-lg">
          We&apos;ve received your message and we&apos;ll get back to you within
          24–48 hours. In the meantime — go eat something good.
        </p>

        <ChopstickDivider />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-sf-primary px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-sf-primary/90"
          >
            Back to Home
          </Link>
          <Link
            href="/hawker-centres"
            className="rounded-xl border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-sf-primary hover:text-sf-primary"
          >
            Explore Hawker Centres
          </Link>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @keyframes fireGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(249,115,22,0.4)) drop-shadow(0 0 20px rgba(249,115,22,0.2));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(249,115,22,0.8)) drop-shadow(0 0 40px rgba(249,115,22,0.4));
            transform: scale(1.03);
          }
        }
        .fire-glow { animation: fireGlow 2.5s ease-in-out infinite; }
      `}</style>
    </>
  );
}

"use client";

import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";

export default function DiscoverPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
          ShiokFlavour
        </p>
        <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-[1.0] text-white sm:text-6xl lg:text-7xl">
          Singapore&apos;s Food
          <br />
          Story — Told Right.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
          Three ways to go deeper into Singapore&apos;s hawker culture. Read the
          stories, walk the trails, and understand the dishes that built this
          city.
        </p>
        <div className="mt-10 h-px w-12 bg-sf-primary" />
      </section>

      <ChopstickDivider />

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="flex flex-col gap-4">
          <a
            href="/blog"
            className="group block cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01]"
            style={{
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)",
              border: "1px solid rgba(249,115,22,0.2)",
              minHeight: "200px",
              padding: "3rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span
                style={{
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#f97316",
                  opacity: 0.15,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                01
              </span>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    color: "#f97316",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Articles & Guides
                </p>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "12px",
                    lineHeight: 1.1,
                  }}
                >
                  The Flavour Files
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    maxWidth: "500px",
                  }}
                >
                  Stories, guides and opinions from the hawker centre floor. For
                  the curious traveller and the proud local.
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#f97316",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#f97316",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Read Now
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="/flavour-trail"
            className="group block cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01]"
            style={{
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #0a1a2a 100%)",
              border: "1px solid rgba(249,115,22,0.2)",
              minHeight: "200px",
              padding: "3rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span
                style={{
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#f97316",
                  opacity: 0.15,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                02
              </span>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    color: "#f97316",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Walking Food Routes
                </p>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "12px",
                    lineHeight: 1.1,
                  }}
                >
                  Flavour Trail
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    maxWidth: "500px",
                  }}
                >
                  Curated routes through Singapore&apos;s greatest eating
                  streets. Walk, eat, repeat.
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#f97316",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#f97316",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Explore Trails
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="/food-heritage"
            className="group block cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01]"
            style={{
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #1a0a0a 100%)",
              border: "1px solid rgba(249,115,22,0.2)",
              minHeight: "200px",
              padding: "3rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span
                style={{
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#f97316",
                  opacity: 0.15,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                03
              </span>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    color: "#f97316",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Heritage & Culture
                </p>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "12px",
                    lineHeight: 1.1,
                  }}
                >
                  Food Heritage
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    maxWidth: "500px",
                  }}
                >
                  The dishes that built Singapore. UNESCO recognised. Deeply
                  human. One story at a time.
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#f97316",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#f97316",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Discover Dishes
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

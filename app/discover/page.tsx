import Link from "next/link";
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

      {/* Three Pillar Cards */}
      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Pillar 1 — The Flavour Files */}
          <Link
            href="/blog"
            className="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{
              position: "relative",
              height: "380px",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src="/images/food/nasi-lemak.jpg"
              alt="The Flavour Files"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "3rem",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#f97316",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Pillar 01 — Articles & Guides
              </p>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                }}
              >
                The Flavour Files
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Stories, guides and opinions from the hawker centre floor. For
                the curious traveller and the proud local.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "1px", background: "#f97316" }} />
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
          </Link>

          {/* Pillar 2 — Flavour Trail */}
          <Link
            href="/flavour-trail"
            className="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{
              position: "relative",
              height: "380px",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src="/images/food/satay.jpg"
              alt="Flavour Trail"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "3rem",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#f97316",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Pillar 02 — Walking Food Routes
              </p>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                }}
              >
                Flavour Trail
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Curated routes through Singapore&apos;s greatest eating streets.
                Walk, eat, repeat.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "1px", background: "#f97316" }} />
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
          </Link>

          {/* Pillar 3 — Food Heritage */}
          <Link
            href="/food-heritage"
            className="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{
              position: "relative",
              height: "380px",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src="/images/food/ondeh-ondeh.jpg"
              alt="Food Heritage"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "3rem",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#f97316",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Pillar 03 — Heritage & Culture
              </p>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                }}
              >
                Food Heritage
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                The dishes that built Singapore. UNESCO recognised. Deeply human.
                One story at a time.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "1px", background: "#f97316" }} />
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
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

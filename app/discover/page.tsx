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

      <style>{`
        @keyframes kenBurns1 {
          0% {
            transform: scale(1) translate(0px, 0px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          45% {
            transform: scale(1.08) translate(-15px, -8px);
            opacity: 1;
          }
          55% {
            opacity: 1;
          }
          65% {
            transform: scale(1.12) translate(-20px, -10px);
            opacity: 0;
          }
          100% {
            transform: scale(1.12) translate(-20px, -10px);
            opacity: 0;
          }
        }
        @keyframes kenBurns2 {
          0% {
            transform: scale(1.05) translate(10px, 5px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          45% {
            transform: scale(1.1) translate(-10px, 8px);
            opacity: 1;
          }
          55% {
            opacity: 1;
          }
          65% {
            transform: scale(1.15) translate(-15px, 10px);
            opacity: 0;
          }
          100% {
            transform: scale(1.15) translate(-15px, 10px);
            opacity: 0;
          }
        }
        @keyframes kenBurns3 {
          0% {
            transform: scale(1.02) translate(-8px, 5px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          45% {
            transform: scale(1.08) translate(12px, -8px);
            opacity: 1;
          }
          55% {
            opacity: 1;
          }
          65% {
            transform: scale(1.12) translate(18px, -12px);
            opacity: 0;
          }
          100% {
            transform: scale(1.12) translate(18px, -12px);
            opacity: 0;
          }
        }
        .kb-img-1a {
          animation: kenBurns1 12s ease-in-out infinite;
        }
        .kb-img-1b {
          animation: kenBurns2 12s ease-in-out infinite;
          animation-delay: -4s;
        }
        .kb-img-1c {
          animation: kenBurns3 12s ease-in-out infinite;
          animation-delay: -8s;
        }
        .kb-img-2a {
          animation: kenBurns2 14s ease-in-out infinite;
        }
        .kb-img-2b {
          animation: kenBurns3 14s ease-in-out infinite;
          animation-delay: -5s;
        }
        .kb-img-2c {
          animation: kenBurns1 14s ease-in-out infinite;
          animation-delay: -9s;
        }
        .kb-img-3a {
          animation: kenBurns3 13s ease-in-out infinite;
          animation-delay: -2s;
        }
        .kb-img-3b {
          animation: kenBurns1 13s ease-in-out infinite;
          animation-delay: -6s;
        }
        .kb-img-3c {
          animation: kenBurns2 13s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>

      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* PILLAR 1 — THE FLAVOUR FILES */}
          <a
            href="/blog"
            className="group relative block cursor-pointer overflow-hidden rounded-2xl"
            style={{ height: "420px" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="/images/food/nasi-lemak.jpg"
                alt=""
                className="kb-img-1a absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src="/images/food/laksa.jpg"
                alt=""
                className="kb-img-1b absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src="/images/food/hokkien-mee.jpg"
                alt=""
                className="kb-img-1c absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sf-primary" />

            <div className="absolute inset-0 flex items-center px-12 sm:px-16">
              <div className="flex w-full items-center gap-10">
                <div className="hidden flex-shrink-0 sm:block">
                  <span
                    className="font-bold text-sf-primary"
                    style={{ fontSize: "6rem", lineHeight: 1, opacity: 0.3 }}
                  >
                    01
                  </span>
                </div>
                <div className="flex-1">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
                    Articles & Guides
                  </p>
                  <h2
                    className="mb-4 font-bold text-white transition-colors duration-300 group-hover:text-sf-primary"
                    style={{ fontSize: "3.5rem", lineHeight: 1.05 }}
                  >
                    The Flavour Files
                  </h2>
                  <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/65">
                    Stories, guides and opinions from the hawker centre floor.
                    For the curious traveller and the proud local.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Read Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* PILLAR 2 — FLAVOUR TRAIL */}
          <a
            href="/flavour-trail"
            className="group relative block cursor-pointer overflow-hidden rounded-2xl"
            style={{ height: "420px" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="/images/food/satay.jpg"
                alt=""
                className="kb-img-2a absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src="/images/food/economy-rice.jpg"
                alt=""
                className="kb-img-2b absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src="/images/food/bak-kut-teh.jpg"
                alt=""
                className="kb-img-2c absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sf-primary" />

            <div className="absolute inset-0 flex items-center px-12 sm:px-16">
              <div className="flex w-full items-center gap-10">
                <div className="hidden flex-shrink-0 sm:block">
                  <span
                    className="font-bold text-sf-primary"
                    style={{ fontSize: "6rem", lineHeight: 1, opacity: 0.3 }}
                  >
                    02
                  </span>
                </div>
                <div className="flex-1">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
                    Walking Food Routes
                  </p>
                  <h2
                    className="mb-4 font-bold text-white transition-colors duration-300 group-hover:text-sf-primary"
                    style={{ fontSize: "3.5rem", lineHeight: 1.05 }}
                  >
                    Flavour Trail
                  </h2>
                  <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/65">
                    Curated routes through Singapore&apos;s greatest eating
                    streets. Walk, eat, repeat.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Explore Trails
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* PILLAR 3 — FOOD HERITAGE */}
          <a
            href="/food-heritage"
            className="group relative block cursor-pointer overflow-hidden rounded-2xl"
            style={{ height: "420px" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="/images/food/ondeh-ondeh.jpg"
                alt=""
                className="kb-img-3a absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src="/images/food/roti-prata.jpg"
                alt=""
                className="kb-img-3b absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src="/images/food/biryani.jpg"
                alt=""
                className="kb-img-3c absolute inset-0 h-full w-full object-cover"
                style={{ transformOrigin: "center center" }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sf-primary" />

            <div className="absolute inset-0 flex items-center px-12 sm:px-16">
              <div className="flex w-full items-center gap-10">
                <div className="hidden flex-shrink-0 sm:block">
                  <span
                    className="font-bold text-sf-primary"
                    style={{ fontSize: "6rem", lineHeight: 1, opacity: 0.3 }}
                  >
                    03
                  </span>
                </div>
                <div className="flex-1">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sf-primary">
                    Heritage & Culture
                  </p>
                  <h2
                    className="mb-4 font-bold text-white transition-colors duration-300 group-hover:text-sf-primary"
                    style={{ fontSize: "3.5rem", lineHeight: 1.05 }}
                  >
                    Food Heritage
                  </h2>
                  <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/65">
                    The dishes that built Singapore. UNESCO recognised. Deeply
                    human. One story at a time.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-sf-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-sf-primary">
                      Discover Dishes
                    </span>
                  </div>
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

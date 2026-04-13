import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/lib/blog-posts";
import { FLAVOUR_TRAILS } from "@/app/lib/flavour-trails";
import { FOOD_HERITAGE_DISHES } from "@/app/lib/food-heritage";
import { FEATURED_HAWKERS } from "@/app/lib/featured-hawkers";
import { SiteHeader } from "./components/site-header";

export default function HomePage() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const featuredDishes = FOOD_HERITAGE_DISHES.slice(0, 10);
  const featuredHawkers = FEATURED_HAWKERS.slice(0, 3);
  const trail = FLAVOUR_TRAILS[0];

  return (
    <>
      <SiteHeader />
      <main className="bg-sf-bg text-sf-cream">
        {/* ── HERO ── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Singapore hawker centre"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sf-bg/60 via-sf-bg/40 to-sf-bg" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
              UNESCO Recognised · Since Forever
            </p>
            <div className="relative mx-auto mb-6 h-56 w-56">
              <div
                className="fire-glow absolute inset-0 rounded-full bg-sf-primary"
                style={{ top: "10%", left: "10%", right: "10%", bottom: "10%" }}
              />
              <Image
                src="/images/logo.png"
                alt="ShiokFlavour"
                fill
                className="relative z-10 object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.8)]"
              />
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Discover Singapore&apos;s
              <br />
              Most <span className="text-sf-primary">Shiok</span> Food
            </h1>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {["Breakfast", "Late Night", "Halal", "Near MRT", "Budget", "Michelin"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-sf-cream/70"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <p className="mb-10 text-lg text-sf-muted md:text-xl">
              Not a restaurant guide. Not a listicle. A love letter to the uncles
              and aunties who woke up at 4am so you could eat well.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hawker-centres"
                className="rounded-full bg-sf-primary px-8 py-3.5 font-bold text-white transition-colors hover:bg-sf-primary/90"
              >
                Explore Hawker Centres
              </Link>
              <Link
                href="/flavour-trail"
                className="rounded-full border border-white/20 px-8 py-3.5 font-bold text-sf-cream transition-colors hover:border-sf-primary hover:text-sf-primary"
              >
                Flavour Trail
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

      {/* ── FLAVOUR TRAIL TEASER ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trails/katong/koon-seng-road.jpg"
            alt={trail?.title ?? "Flavour trail"}
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sf-bg via-sf-bg/80 to-sf-bg/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
              Flavour Trail No. 01
            </p>
            <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Walk the
              <br />
              <span className="text-sf-primary">
                {trail?.title ?? "Katong Trail"}
              </span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-sf-muted">
              A half-day self-guided eating route through one of Singapore&apos;s
              most storied food neighbourhoods. 8 stops. Real maps. Exactly what
              to order at every stall.
            </p>
            <div className="mb-8 flex flex-wrap gap-4 text-sm text-sf-muted/80">
              <span>🕐 4–5 hours</span>
              <span>📍 8 stops</span>
              <span>🚶 2.5km walking</span>
              <span>☀️ Start by 8.30am</span>
            </div>
            <Link
              href="/flavour-trail/katong-trail"
              className="inline-flex items-center gap-2 rounded-full bg-sf-primary px-8 py-3.5 font-bold text-white transition-colors hover:bg-sf-primary/90"
            >
              Start the Trail <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FLAVOUR FILES (BLOG) ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
              Flavour Files
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Stories from the hawker line
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden text-sm font-bold text-sf-primary hover:underline md:block"
          >
            All articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-sf-surface p-6 transition-colors hover:border-sf-primary/40"
            >
              <span className="mb-3 inline-flex w-fit rounded-full bg-sf-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sf-primary">
                {post.category || "Guide"}
              </span>
              <h3 className="mb-3 flex-1 text-lg font-bold leading-snug transition-colors group-hover:text-sf-primary">
                {post.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-sf-muted">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-sf-muted/60">
                <span>{post.readTime || "5 min read"}</span>
                <span className="text-sf-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link href="/blog" className="text-sm font-bold text-sf-primary hover:underline">
            All articles →
          </Link>
        </div>
      </section>

      {/* ── HAWKER GUIDE TEASERS ── */}
      <section className="bg-sf-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
              Hawker Guide
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Know before you order
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/hawker-guide#kopi"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-sf-bg p-8 transition-colors hover:border-sf-primary/40"
            >
              <div className="select-none absolute right-0 top-0 text-8xl opacity-10">
                ☕
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
                Kopi Decoder
              </p>
              <h3 className="mb-3 text-2xl font-black transition-colors group-hover:text-sf-primary">
                Kopi O, Kopi C,
                <br />
                Kopi Gah Dai — what?
              </h3>
              <p className="mb-6 leading-relaxed text-sf-muted">
                Singapore&apos;s coffee ordering system is a language of its own.
                Master it and you&apos;ll never point at the menu again.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-sf-primary">
                Learn the lingo{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/hawker-guide#old-school"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-sf-bg p-8 transition-colors hover:border-sf-primary/40"
            >
              <div className="select-none absolute right-0 top-0 text-8xl opacity-10">
                🍜
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
                Old School Names
              </p>
              <h3 className="mb-3 text-2xl font-black transition-colors group-hover:text-sf-primary">
                Economy Rice,
                <br />
                Char Kway Teow & more
              </h3>
              <p className="mb-6 leading-relaxed text-sf-muted">
                The dishes every Singaporean grows up eating — and the stories
                behind the names that never made it to tourist menus.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-sf-primary">
                Explore the names{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOD HERITAGE STRIP ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
                Food Heritage
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                The dishes that built Singapore
              </h2>
            </div>
            <Link
              href="/food-heritage"
              className="hidden text-sm font-bold text-sf-primary hover:underline md:block"
            >
              All dishes →
            </Link>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide md:px-[calc((100vw-80rem)/2+1.5rem)]">
          {featuredDishes.map((dish) => (
            <Link
              key={dish.slug}
              href={`/food-heritage/${dish.slug}`}
              className="group flex-none w-48 rounded-2xl border border-white/10 bg-sf-surface p-5 transition-colors hover:border-sf-primary/40"
            >
              <div className="mb-3 text-4xl">🍽️</div>
              <h3 className="text-sm font-bold leading-snug transition-colors group-hover:text-sf-primary">
                {dish.name}
              </h3>
              <p className="mt-1 text-xs text-sf-muted/60">{dish.category}</p>
            </Link>
          ))}
          <Link
            href="/food-heritage"
            className="flex w-48 flex-none flex-col items-center justify-center rounded-2xl border border-sf-primary/30 bg-sf-primary/5 p-5 transition-colors hover:bg-sf-primary/10"
          >
            <span className="mb-2 text-3xl">→</span>
            <span className="text-center text-sm font-bold text-sf-primary">
              See all {FOOD_HERITAGE_DISHES.length} dishes
            </span>
          </Link>
        </div>
      </section>

      {/* ── HAWKER CENTRES TEASER ── */}
      <section className="bg-sf-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
                Hawker Centres
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                32 centres. Every region. All mapped.
              </h2>
            </div>
            <Link
              href="/hawker-centres"
              className="hidden text-sm font-bold text-sf-primary hover:underline md:block"
            >
              Explore all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredHawkers.map((hawker) => (
              <Link
                key={hawker.slug}
                href={`/hawker/${hawker.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-sf-bg transition-colors hover:border-sf-primary/40"
              >
                <div className="relative h-44">
                  <Image
                    src={hawker.imageUrl}
                    alt={hawker.name}
                    fill
                    className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sf-bg via-sf-bg/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-sf-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    {hawker.region}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 font-bold transition-colors group-hover:text-sf-primary">
                    {hawker.name}
                  </h3>
                  <p className="text-sm text-sf-muted">{hawker.nearestMRT}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/hawker-centres"
              className="text-sm font-bold text-sf-primary hover:underline"
            >
              Explore all →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SIGN OFF ── */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-6 text-5xl">🍜</div>
          <h2 className="mb-4 text-2xl font-black md:text-3xl">
            Serving Singapore&apos;s hawker heritage,
            <br />
            <span className="text-sf-primary">one plate at a time.</span>
          </h2>
          <p className="mb-8 text-sf-muted">
            Built by a Singaporean, for everyone who wants to eat like one.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition-colors hover:border-sf-primary hover:text-sf-primary"
          >
            Our story →
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}

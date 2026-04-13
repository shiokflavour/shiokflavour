"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/lib/blog-posts";
import { FLAVOUR_TRAILS } from "@/app/lib/flavour-trails";
import { FOOD_HERITAGE_DISHES } from "@/app/lib/food-heritage";
import { FEATURED_HAWKERS } from "@/app/lib/featured-hawkers";
import { SiteHeader } from "./components/site-header";

const heroImages = [
  "/images/hawkers/maxwell-food-centre.jpg",
  "/images/hawkers/lau-pa-sat.jpg",
  "/images/hawkers/old-airport-road.jpg",
  "/images/hawkers/chinatown-complex.jpg",
  "/images/hawkers/newton.jpg",
  "/images/hawkers/tiong-bahru.jpg",
  "/images/hawkers/east-coast-lagoon.jpg",
  "/images/hawkers/tekka.jpg",
  "/images/hawkers/geylang-serai.jpg",
  "/images/hawkers/amoy-street.jpg",
  "/images/trails/katong/koon-seng-road.jpg",
  "/images/trails/katong/328-katong-laksa.jpg",
  "/images/trails/katong/chin-mee-chin.jpg",
  "/images/trails/katong/sri-senpaga-temple.jpg",
  "/images/trails/katong/kim-choo-kueh.jpg",
];

const dishImageMap: Record<string, string> = {
  "hainanese-chicken-rice": "chicken-rice.jpg",
  "bobo-cha-cha": "ice-kachang.jpg",
  rojak: "satay.jpg",
  appam: "appam.webp",
  "bak-chang": "bak-chang.webp",
  "ngoh-hiang": "ngoh-hiang.webp",
  "char-kway-teow": "char-kway-teow.jpg",
  laksa: "laksa.jpg",
  "ice-kachang": "ice-kachang.jpg",
  "kaya-toast": "kaya-toast.jpg",
  "chilli-crab": "chilli-crab.jpg",
  "bak-chor-mee": "bak-chor-mee.jpg",
  "hokkien-mee": "hokkien-mee.jpg",
  "wanton-mee": "wanton-mee.jpg",
  "economy-rice": "economy-rice.jpg",
  satay: "satay.jpg",
  "roti-john": "roti-john.jpg",
  popiah: "popiah.jpg",
  "chwee-kueh": "chwee-kueh.jpg",
  "nasi-lemak": "nasi-lemak.jpg",
  "mee-rebus": "mee-rebus.jpg",
  "mee-siam": "mee-siam.jpg",
  lontong: "lontong.jpg",
  murtabak: "murtabak.jpg",
  "nasi-padang": "nasi-padang.jpg",
  "satay-bee-hoon": "satay-bee-hoon.jpg",
  "ayam-buah-keluak": "ayam-buah-keluak.jpg",
  "kueh-pie-tee": "kueh-pie-tee.jpg",
  "ondeh-ondeh": "ondeh-ondeh.jpg",
  "bak-kut-teh": "bak-kut-teh.jpg",
  "lor-mee": "lor-mee.jpg",
  "hae-mee": "hae-mee.jpg",
  "yong-tau-foo": "yong-tau-foo.jpg",
  "roti-prata": "roti-prata.jpg",
  "fish-head-curry": "fish-head-curry.jpg",
  biryani: "biryani.jpg",
  "teh-tarik": "teh-tarik.jpg",
  vadai: "vadai.jpg",
};

export default function HomePage() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const featuredHawkers = FEATURED_HAWKERS.slice(0, 3);
  const trail = FLAVOUR_TRAILS[0];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="bg-sf-bg text-sf-cream">
        {/* ── HERO ── */}
        <section className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            {heroImages.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0"
                style={{
                  opacity: i === currentImg ? 1 : 0,
                  transition: "opacity 1500ms ease-in-out",
                }}
              >
                <Image
                  src={src}
                  alt="Singapore hawker food"
                  fill
                  className="object-cover"
                  style={{
                    opacity: 0.28,
                    transform: i === currentImg ? "scale(1.08)" : "scale(1)",
                    transition: "transform 3500ms ease-in-out",
                  }}
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-sf-bg/70 via-sf-bg/50 to-sf-bg" />
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
                src="/images/SF_logomark_transparent.png"
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
            <p className="mt-3 max-w-2xl leading-relaxed text-sf-muted">
              Everything you need to know before you eat. Guides, deep dives and
              insider knowledge on Singapore&apos;s hawker culture — written for
              the curious and the hungry.
            </p>
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
            <p className="mt-3 max-w-2xl leading-relaxed text-sf-muted">
              First time at a hawker centre? Don&apos;t point at the menu.
              Don&apos;t ask for a fork. We&apos;ll teach you how to order kopi
              like a local, decode the old school names, and eat like
              you&apos;ve been doing this your whole life.
            </p>
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

      {/* ── FOOD HERITAGE DOUBLE MARQUEE ── */}
      <section className="py-20">
        <div className="mx-auto mb-10 max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sf-primary">
                Food Heritage
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                The dishes that built Singapore
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-sf-muted">
                Laksa. Char Kway Teow. Hainanese Chicken Rice. These aren&apos;t
                just dishes — they&apos;re history on a plate. Every bowl tells
                the story of the immigrants, hawkers and home cooks who built
                this city one stall at a time.
              </p>
            </div>
            <Link
              href="/food-heritage"
              className="hidden text-sm font-bold text-sf-primary hover:underline md:block"
            >
              All {FOOD_HERITAGE_DISHES.length} dishes →
            </Link>
          </div>
        </div>

        <div className="mb-4 overflow-hidden">
          <div className="marquee-left">
            {[...FOOD_HERITAGE_DISHES, ...FOOD_HERITAGE_DISHES].map((dish, i) => (
              <Link
                key={`${dish.slug}-${i}`}
                href={`/food-heritage/${dish.slug}`}
                className="group relative mx-2 flex-none w-48 overflow-hidden rounded-2xl border border-white/10 bg-sf-surface transition-colors hover:border-sf-primary/50"
              >
                <div className="relative h-36">
                  <Image
                    src={`/images/food/${dishImageMap[dish.slug] || dish.slug + ".jpg"}`}
                    alt={dish.name}
                    fill
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sf-bg/90 via-sf-bg/10 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-1 text-xs font-bold leading-snug transition-colors group-hover:text-sf-primary">
                    {dish.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="marquee-right">
            {[
              ...[...FOOD_HERITAGE_DISHES].reverse(),
              ...[...FOOD_HERITAGE_DISHES].reverse(),
            ].map((dish, i) => (
              <Link
                key={`${dish.slug}-r-${i}`}
                href={`/food-heritage/${dish.slug}`}
                className="group relative mx-2 flex-none w-48 overflow-hidden rounded-2xl border border-white/10 bg-sf-surface transition-colors hover:border-sf-primary/50"
              >
                <div className="relative h-36">
                  <Image
                    src={`/images/food/${dishImageMap[dish.slug] || dish.slug + ".jpg"}`}
                    alt={dish.name}
                    fill
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sf-bg/90 via-sf-bg/10 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-1 text-xs font-bold leading-snug transition-colors group-hover:text-sf-primary">
                    {dish.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/food-heritage"
            className="text-sm font-bold text-sf-primary hover:underline"
          >
            All dishes →
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
              <p className="mt-3 max-w-2xl leading-relaxed text-sf-muted">
                From the legendary Maxwell to the underrated Ghim Moh, every
                hawker centre has a personality. We&apos;ve mapped them all —
                with what to eat, how to get there, and which stalls to queue
                for.
              </p>
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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export function HomeHero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
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
  );
}

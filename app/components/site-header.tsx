"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [hawkerGuideOpen, setHawkerGuideOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#111111]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/primary_SF_v2_transparent.png"
                alt="ShiokFlavour"
                width={180}
                height={32}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {/* Discover with dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDiscoverOpen(true)}
                onMouseLeave={() => setDiscoverOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                    isActive("/discover") ||
                    isActive("/blog") ||
                    isActive("/flavour-trail") ||
                    isActive("/food-heritage")
                      ? "text-sf-primary"
                      : "text-white hover:text-sf-primary"
                  }`}
                >
                  Discover
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${discoverOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Panel */}
                {discoverOpen && (
                  <div className="absolute left-1/2 top-full w-[580px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                        What&apos;s Inside
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {/* Flavour Files */}
                        <Link
                          href="/blog"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">📰</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            The Flavour Files
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            Stories, guides and opinions from the hawker floor
                          </p>
                          <p className="mt-2 text-xs font-semibold text-sf-primary">
                            Read articles →
                          </p>
                        </Link>

                        {/* Flavour Trail */}
                        <Link
                          href="/flavour-trail"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">🗺️</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            Flavour Trail
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            Curated walking food routes across Singapore
                          </p>
                          <p className="mt-2 text-xs font-semibold text-sf-primary">
                            Explore trails →
                          </p>
                        </Link>

                        {/* Food Heritage */}
                        <Link
                          href="/food-heritage"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">🍜</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            Food Heritage
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            38 dishes, their stories, and where to find them
                          </p>
                          <p className="mt-2 text-xs font-semibold text-sf-primary">
                            Discover dishes →
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/hawker-centres"
                className={`text-sm transition-colors ${
                  isActive("/hawker-centres")
                    ? "font-semibold text-sf-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Hawker Centres
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setHawkerGuideOpen(true)}
                onMouseLeave={() => setHawkerGuideOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    isActive("/hawker-guide")
                      ? "font-semibold text-sf-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Hawker Guide
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${hawkerGuideOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {hawkerGuideOpen && (
                  <div className="absolute left-1/2 top-full w-[480px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                        Order Like A Local
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/hawker-guide"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">🥤</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            Kopi Decoder
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            Build your perfect kopitiam order
                          </p>
                        </Link>

                        <Link
                          href="/hawker-guide"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">📖</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            Old School Names
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            Tak Kiu, Michael Jackson & more
                          </p>
                        </Link>

                        <Link
                          href="/hawker-guide"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">🤝</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            Hawker Etiquette
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            How to chope, queue and eat right
                          </p>
                        </Link>

                        <Link
                          href="/hawker-guide"
                          className="group rounded-xl p-4 transition-all hover:bg-white/5"
                        >
                          <div className="mb-2 text-2xl">🗣️</div>
                          <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-sf-primary">
                            Singlish Glossary
                          </p>
                          <p className="text-xs leading-relaxed text-white/50">
                            The local food language decoded
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className={`text-sm transition-colors ${
                  isActive("/about")
                    ? "font-semibold text-sf-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="ml-2 rounded-full border border-sf-primary px-4 py-1.5 text-sm font-semibold text-sf-primary transition-all duration-200 hover:bg-sf-primary hover:text-white"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />

          {/* Slide-in panel */}
          <div className="absolute right-0 top-0 h-full w-80 overflow-y-auto border-l border-white/10 bg-[#111111]">
            <div className="p-6 pt-20">
              {/* Discover section */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  Discover
                </p>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/blog"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                  >
                    <span className="text-lg">📰</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        The Flavour Files
                      </p>
                      <p className="text-xs text-white/50">
                        Stories from the hawker floor
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/flavour-trail"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                  >
                    <span className="text-lg">🗺️</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Flavour Trail
                      </p>
                      <p className="text-xs text-white/50">Walk, eat, repeat</p>
                    </div>
                  </Link>
                  <Link
                    href="/food-heritage"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                  >
                    <span className="text-lg">🍜</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Food Heritage
                      </p>
                      <p className="text-xs text-white/50">
                        38 dishes, one story at a time
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-6 h-px bg-white/10" />

              <div className="mb-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  Hawker Guide
                </p>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/hawker-guide"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                  >
                    <span className="text-lg">🥤</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Kopi Decoder
                      </p>
                      <p className="text-xs text-white/50">
                        Build your perfect order
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/hawker-guide"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                  >
                    <span className="text-lg">🗣️</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Singlish Glossary
                      </p>
                      <p className="text-xs text-white/50">
                        The local food language
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-6 h-px bg-white/10" />

              {/* Other links */}
              <div className="mb-8 flex flex-col gap-1">
                <Link
                  href="/hawker-centres"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                >
                  Hawker Centres
                </Link>
                <Link
                  href="/hawker-guide"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                >
                  Hawker Guide
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                >
                  About Us
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-xl bg-sf-primary py-3 text-center text-sm font-semibold text-white transition-all hover:bg-sf-primary/90"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}

import Link from "next/link";
import { BrandLogoLink } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top row — logo + tagline */}
        <div className="mb-12">
          <BrandLogoLink />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sf-muted">
            Singapore&apos;s hawker heritage, one plate at a time.
          </p>
        </div>

        {/* Link columns */}
        <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hawker-centres"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Hawker Centres
                </Link>
              </li>
              <li>
                <Link
                  href="/food-heritage"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Food Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/hawker-guide"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Hawker Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Discover
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/flavour-trail"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Flavour Trail
                </Link>
              </li>
              <li>
                <Link
                  href="/near-me"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Near Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-sf-muted transition-colors hover:text-sf-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row — copyright + attribution */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-sf-muted">
            © 2026 ShiokFlavour. All rights reserved.
          </p>
          <p className="text-xs text-sf-muted">
            Data from data.gov.sg under Singapore Open Data Licence.
          </p>
        </div>
      </div>
    </footer>
  );
}

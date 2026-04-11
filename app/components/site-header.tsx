"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogoLink } from "./brand-logo";
import { MAIN_NAV_LINKS } from "./site-nav";

function navLinkClass(active: boolean) {
  return active
    ? "text-sm font-semibold text-sf-primary transition-colors"
    : "text-sm text-sf-muted transition-colors hover:text-white";
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sf-bg/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <BrandLogoLink />
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {MAIN_NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`${navLinkClass(active)} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="ml-4 rounded-full border border-sf-primary px-4 py-1.5 text-sm font-semibold text-sf-primary transition-all duration-200 hover:bg-sf-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

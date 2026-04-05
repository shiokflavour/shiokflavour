import Link from "next/link";
import { BrandLogoLink } from "./brand-logo";
import { MAIN_NAV_LINKS } from "./site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sf-bg/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <BrandLogoLink />
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-sf-muted">
          {MAIN_NAV_LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="transition-colors hover:text-sf-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

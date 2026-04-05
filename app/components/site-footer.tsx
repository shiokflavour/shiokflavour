import Link from "next/link";
import { FooterCopyright } from "./footer-copyright";
import { BrandLogoLink } from "./brand-logo";
import { LEGAL_FOOTER_LINKS, MAIN_NAV_LINKS } from "./site-nav";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-sf-bg px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <BrandLogoLink />
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-sf-muted">
              {MAIN_NAV_LINKS.map(({ href, label }) => (
                <li key={`footer-${label}`}>
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
        </div>

        <nav
          className="mt-8 border-t border-white/10 pt-8"
          aria-label="Site information"
        >
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-sf-muted">
            {LEGAL_FOOTER_LINKS.map(({ href, label }, i) => (
              <li key={href} className="flex items-center gap-x-2">
                {i > 0 ? (
                  <span className="text-sf-muted/50" aria-hidden>
                    |
                  </span>
                ) : null}
                <Link
                  href={href}
                  className="text-sf-cream/90 transition-colors hover:text-sf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm text-sf-muted">
          <p>
            Data from{" "}
            <a
              href="https://data.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sf-primary hover:underline"
            >
              data.gov.sg
            </a>{" "}
            under{" "}
            <a
              href="https://data.gov.sg/open-data-licence"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sf-primary hover:underline"
            >
              Singapore Open Data Licence
            </a>
            .
          </p>
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

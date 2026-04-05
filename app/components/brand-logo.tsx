import Link from "next/link";

export function WokFlameIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 24c0-4 2.5-7 6-8.5l1.2 2.4c.8 1.6 2.8 2.1 4.3 1.1l.5-.3c1.4-1 3.5-.5 4.3 1.1L26 15.5c3.5 1.5 6 4.5 6 8.5v1H8v-1Z"
        className="fill-sf-primary/90"
      />
      <path
        d="M6 26h28v2.5c0 1.4-1.1 2.5-2.5 2.5h-23C5.1 31 4 29.9 4 28.5V26h2Z"
        className="fill-sf-muted/50"
      />
      <path
        d="M20 6.5s-2.5 2.8-2.5 5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-2.2-2.5-5-2.5-5Z"
        className="fill-sf-primary"
      />
      <path
        d="M16 10s-1.2 1.5-1.2 2.8c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4C17.6 11.5 16 10 16 10Z"
        className="fill-sf-primary/80"
      />
      <path
        d="M24 9.5s-1 1.2-1 2.2c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-1-1.1-2.2-1.1-2.2Z"
        className="fill-sf-primary/70"
      />
    </svg>
  );
}

export function BrandLogo() {
  return (
    <span className="inline-flex items-center gap-2">
      <WokFlameIcon className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="text-xl font-semibold tracking-tight text-sf-cream sm:text-2xl">
        <span className="text-sf-primary">Shiok</span>
        Flavour
      </span>
    </span>
  );
}

export function BrandLogoLink() {
  return (
    <Link
      href="/"
      className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-primary"
    >
      <BrandLogo />
    </Link>
  );
}

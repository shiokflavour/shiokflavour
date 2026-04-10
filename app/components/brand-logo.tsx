import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Image
      src="/images/primary_SF_transparent.png"
      alt="ShiokFlavour"
      width={140}
      height={40}
      className="h-8 w-auto object-contain"
      priority
    />
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

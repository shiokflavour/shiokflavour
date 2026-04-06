"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const FOOD_HERITAGE_HERO_FALLBACK =
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=80";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function FoodHeritageHeroImage({ src, alt, className }: Props) {
  const resolved =
    typeof src === "string" && src.trim().length > 0 ? src.trim() : FOOD_HERITAGE_HERO_FALLBACK;
  const [imgSrc, setImgSrc] = useState(resolved);

  useEffect(() => {
    setImgSrc(resolved);
  }, [resolved]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority
      sizes="100vw"
      className={className}
      onError={() => setImgSrc(FOOD_HERITAGE_HERO_FALLBACK)}
    />
  );
}

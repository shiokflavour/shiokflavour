import Link from "next/link";
import { isAiImage } from "@/app/lib/ai-images";

/** Small label shown on top of an image that is an AI illustration. */
export function AiBadge({ src, className = "bottom-3 right-3" }: { src?: string | null; className?: string }) {
  if (!isAiImage(src)) return null;
  return (
    <Link
      href="/about#our-photos"
      className={`absolute z-10 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm hover:text-white ${className}`}
    >
      Illustration created with AI
    </Link>
  );
}

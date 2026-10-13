import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kopi Decoder: How to Order Coffee in Singapore | ShiokFlavour",
  description:
    "Kopi O, kopi C, siew dai, gau, peng: build your order and see exactly what you will get. The kopitiam coffee code, decoded.",
  alternates: { canonical: "/hawker-guide/kopi-decoder" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

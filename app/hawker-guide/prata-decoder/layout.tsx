import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Prata Decoder: Every Roti Prata Order Explained | ShiokFlavour",
  description:
    "Kosong, telur, plaster, tissue, coin: what every roti prata order means, how to say it at the stall and which curry to pick.",
  alternates: { canonical: "/hawker-guide/prata-decoder" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

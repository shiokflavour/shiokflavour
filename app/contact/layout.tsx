import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact ShiokFlavour",
  description:
    "Send us a stall tip, a correction or a hello. We read every message.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

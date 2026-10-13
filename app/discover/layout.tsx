import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Discover Singapore Hawker Food | ShiokFlavour",
  description:
    "Explore Singapore hawker food by dish, hawker centre and neighbourhood, with the stories behind each plate.",
  alternates: { canonical: "/discover" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

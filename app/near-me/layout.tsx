import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hawker Centres Near Me | ShiokFlavour",
  description: "Find the nearest Singapore hawker centres to your location — sorted by distance with must-try dishes, opening hours, and directions.",
  openGraph: {
    title: "Hawker Centres Near Me | ShiokFlavour",
    description: "Find Singapore hawker centres near you — sorted by distance with must-try dishes and directions.",
    url: "https://www.shiokflavour.com/near-me",
  },
};
export default function NearMeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

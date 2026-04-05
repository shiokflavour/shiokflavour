export type HawkerRegion = "Central" | "North" | "South" | "East" | "West";

export type FeaturedHawker = {
  id: string;
  name: string;
  area: string;
  region: HawkerRegion;
  tag: string;
  hours: string;
  imageUrl: string;
};

export const FEATURED_HAWKERS: FeaturedHawker[] = [
  {
    id: "maxwell",
    name: "Maxwell Food Centre",
    area: "Tanjong Pagar",
    region: "South",
    tag: "Local Favourite",
    hours: "8am – 10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
  },
  {
    id: "lau-pa-sat",
    name: "Lau Pa Sat",
    area: "CBD",
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "24 hours (stall hours vary)",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
  },
  {
    id: "old-airport",
    name: "Old Airport Road Food Centre",
    area: "Geylang",
    region: "East",
    tag: "Budget Eats",
    hours: "6am – 11pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=400",
  },
  {
    id: "adam-road",
    name: "Adam Road Food Centre",
    area: "Bukit Timah",
    region: "West",
    tag: "Supper Spot",
    hours: "Opens till late (stalls vary)",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
  },
  {
    id: "bedok-85",
    name: "Bedok 85 Fengshan Market & Food Centre",
    area: "Bedok",
    region: "East",
    tag: "Supper Spot",
    hours: "Opens till late (stalls vary)",
    imageUrl:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
  },
  {
    id: "tampines",
    name: "Tampines Round Market & Food Centre",
    area: "Tampines",
    region: "East",
    tag: "Budget Eats",
    hours: "6am – 11pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
  },
];

export const REGION_FILTERS = [
  "All",
  "Central",
  "North",
  "South",
  "East",
  "West",
] as const;

export type RegionFilter = (typeof REGION_FILTERS)[number];

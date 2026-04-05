import { MetadataRoute } from "next";
import { getHawkersForHome } from "./lib/hawker-api";

const STATIC_ENTRIES: MetadataRoute.Sitemap = [
  {
    url: "https://www.shiokflavour.com",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: "https://www.shiokflavour.com/hawker-centres",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "https://www.shiokflavour.com/#flavour-trail",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.shiokflavour.com/about",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "https://www.shiokflavour.com/privacy",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "https://www.shiokflavour.com/contact",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hawkers = await getHawkersForHome();
  const hawkerUrls: MetadataRoute.Sitemap = hawkers.map((h) => ({
    url: `https://www.shiokflavour.com/hawker/${encodeURIComponent(h.id)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));
  return [...STATIC_ENTRIES, ...hawkerUrls];
}

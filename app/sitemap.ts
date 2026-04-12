import { MetadataRoute } from "next";
import { BLOG_POSTS } from "./lib/blog-posts";
import { FLAVOUR_TRAILS } from "./lib/flavour-trails";
import { FOOD_HERITAGE_DISHES } from "./lib/food-heritage";
import { FEATURED_HAWKERS } from "./lib/featured-hawkers";

const BASE_URL = "https://www.shiokflavour.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${BASE_URL}/discover`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/hawker-centres`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/food-heritage`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${BASE_URL}/flavour-trail`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${BASE_URL}/hawker-guide`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const trailPages = FLAVOUR_TRAILS.map((trail) => ({
    url: `${BASE_URL}/flavour-trail/${trail.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const heritagePages = FOOD_HERITAGE_DISHES.map((item) => ({
    url: `${BASE_URL}/food-heritage/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const hawkerPages = FEATURED_HAWKERS.map((hawker) => ({
    url: `${BASE_URL}/hawker/${hawker.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...trailPages,
    ...heritagePages,
    ...hawkerPages,
  ];
}

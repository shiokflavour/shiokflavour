import { MetadataRoute } from "next";
import { BLOG_POSTS } from "./lib/blog-posts";
import { FLAVOUR_TRAILS } from "./lib/flavour-trails";
import { FOOD_HERITAGE_DISHES } from "./lib/food-heritage";
import { FEATURED_HAWKERS } from "./lib/featured-hawkers";
import { CAFE_AREAS } from "./lib/cafes";

const BASE_URL = "https://www.shiokflavour.com";

/*
 * lastModified is the date a page's CONTENT last changed, not the build date.
 * Google ignores sitemap dates that change on every deploy. When you make a real
 * content change, set `updatedAt` on that item (or bump the section default below).
 */
const DEFAULTS = {
  hawker: "2026-10-21", // "When to go" sections added to every hawker page
  dish: "2026-10-23", // unique titles and descriptions
  trail: "2026-10-23",
};

type Freq = "daily" | "weekly" | "monthly";

const STATIC_PAGES: { path: string; updated: string; changeFrequency: Freq; priority: number }[] = [
  { path: "/discover", updated: "2026-04-11", changeFrequency: "monthly", priority: 0.9 },
  { path: "/hawker-guide", updated: "2026-10-13", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hawker-guide/kopi-decoder", updated: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hawker-guide/prata-decoder", updated: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hawker-guide/old-school-names", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hawker-guide/etiquette", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hawker-guide/singlish", updated: "2026-10-13", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", updated: "2026-04-11", changeFrequency: "monthly", priority: 0.5 },
];

const latest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), "2026-01-01");

const entry = (path: string, updated: string, changeFrequency: Freq, priority: number) => ({
  url: `${BASE_URL}${path}`,
  lastModified: new Date(`${updated}T12:00:00+08:00`),
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const blog = BLOG_POSTS.map((p) => ({ slug: p.slug, updated: p.updatedAt ?? p.publishedAt }));
  const trails = FLAVOUR_TRAILS.map((t) => ({ slug: t.slug, updated: t.updatedAt ?? DEFAULTS.trail }));
  const dishes = FOOD_HERITAGE_DISHES.map((d) => ({ slug: d.slug, updated: d.updatedAt ?? DEFAULTS.dish }));
  const hawkers = FEATURED_HAWKERS.map((h) => ({ slug: h.slug, updated: h.updatedAt ?? DEFAULTS.hawker }));
  const cafes = CAFE_AREAS.map((a) => ({ slug: a.slug, updated: a.updatedAt }));

  // Hub pages list their children, so they change when a child changes.
  const hubs = [
    { path: "/blog", updated: latest(blog.map((b) => b.updated)), priority: 0.9 },
    { path: "/flavour-trail", updated: latest(trails.map((t) => t.updated)), priority: 0.85 },
    { path: "/food-heritage", updated: latest(dishes.map((d) => d.updated)), priority: 0.85 },
    { path: "/hawker-centres", updated: latest(hawkers.map((h) => h.updated)), priority: 0.9 },
    { path: "/cafes", updated: latest(cafes.map((c) => c.updated)), priority: 0.85 },
  ];
  const home = latest([...hubs.map((h) => h.updated), ...STATIC_PAGES.map((s) => s.updated)]);

  return [
    entry("", home, "daily", 1),
    ...hubs.map((h) => entry(h.path, h.updated, "weekly", h.priority)),
    ...STATIC_PAGES.map((s) => entry(s.path, s.updated, s.changeFrequency, s.priority)),
    ...blog.map((b) => entry(`/blog/${b.slug}`, b.updated, "monthly", 0.8)),
    ...trails.map((t) => entry(`/flavour-trail/${t.slug}`, t.updated, "monthly", 0.85)),
    ...dishes.map((d) => entry(`/food-heritage/${d.slug}`, d.updated, "monthly", 0.75)),
    ...hawkers.map((h) => entry(`/hawker/${h.slug}`, h.updated, "weekly", 0.75)),
    ...cafes.map((c) => entry(`/cafes/${c.slug}`, c.updated, "weekly", 0.85)),
  ];
}

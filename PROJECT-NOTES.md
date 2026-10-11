# ShiokFlavour: Working Notes (handover)

Last updated: 11 Oct 2026. Read this with CLAUDE.md before starting a new session.
Where this file and CLAUDE.md disagree, this file is newer.

## Ground rules (from Wulf)
- Never `git add .`. Add specific files only: `git add <file> <file>`.
- Never open or read `recovery-codes.txt`.
- Git commands are run by Wulf in the Mac Terminal app.
- Never enter passwords or log into accounts (Vercel, Google, Travelpayouts) on Wulf's behalf.
- AI images: generic scenes only, no real stall names or readable text, captioned
  "Illustration created with AI." Never present one as a specific real stall.
  The About page has an "About Our Photos" section (/about#our-photos) explaining this.
- Facts (stalls, prices, Michelin, halal, history) must be checked against sources
  (NLB Infopedia, Roots.gov.sg, Michelin Guide, Eatbook, SethLui, Straits Times, CNA).
  If it can't be verified, leave it out.

## Stack and deploys
- Next.js 16.2.2 (App Router, Turbopack), TypeScript, Tailwind (sf-* tokens).
- GitHub shiokflavour/shiokflavour, branch main, auto-deploys to Vercel.
- Vercel sometimes fails with "Git information retrieval failed". Fix: Redeploy in Vercel,
  or push an empty commit: `git commit --allow-empty -m "chore: retrigger deploy" && git push`.
- `metadataBase` is https://www.shiokflavour.com (app/layout.tsx).

## Data files
- `app/lib/food-heritage.ts`: 60 dishes (some copy still says 61, fix when seen).
  Optional fields: `seoTitle`, `seoDescription`, `faqs` [{q, a, link?}].
  `findDishSlugForName()` maps dish names to slugs (used for links from hawker pages).
- `app/lib/featured-hawkers.ts`: 32 centres, all researched and rewritten Oct 2026.
  Optional `seoTitle`, `seoDescription`, `faqs`. localQuote fields removed.
- `app/lib/blog-posts.ts`: posts, optional `seoTitle`/`seoDescription`. Images in markdown
  `![alt](src "caption")` render as figures with captions.
- `app/lib/faqs.ts`: builds each page's Q&A. Hand-written `faqs` come first, then automatic
  questions from verified fields (best stalls, price, spice, how to eat / hours, getting
  there, budget, halal, tip). Auto "how to eat" is skipped if a hand-written one exists.
- `app/components/faq-section.tsx`: renders Q&A + FAQPage structured data.
- `app/lib/hawker-closures.ts` + `closure-badge.tsx`: NEA cleaning closures from data.gov.sg
  dataset d_bda4baa634dd1cc7a6c7cad5f19e2d68. `NEA_NAME_MAP` maps our names to NEA names.

## Redirects (next.config.ts, permanent)
- /hawker/buona-vista-market -> /hawker/holland-drive-market-food-centre
- /hawker/bishan-street-13-food-centre -> /hawker/shunfu-market-food-centre
- /hawker/woodlands-centre-market -> /hawker/marsiling-mall-hawker-centre

## Search Console baseline (export of early Oct 2026)
- Problem: impressions but few clicks; average position around 20.
- Best pages: economy-rice (1,317 impressions, pos 9.9), peoples-park (1,049, pos 13),
  alexandra-village (660, pos 12.6), roti-prata (663, pos 19), nasi-lemak (424),
  hawker-guide (413), laksa (325), bedok-interchange (259), chicken rice blog (pos 6.4).
- Indexing requested 11 Oct for the 8 priority URLs, and for the 9 dish pages below.

## Done (Oct 2026)
- New titles/descriptions on priority pages; internal links between blog, dishes, centres.
- Real, verified best stalls on all 60 dish pages and all 32 hawker centre pages.
- Q&A sections on all 92 dish and centre pages.
- Hand-written Q&A + fact fixes: economy-rice, peoples-park, alexandra-village,
  bedok-interchange, roti-prata, nasi-lemak, laksa, hainanese-chicken-rice,
  char-kway-teow, satay-bee-hoon, bak-kut-teh, rojak, wanton-mee.
- Halal badge removed where most famous stalls aren't certified (chicken rice, laksa,
  nasi lemak, rojak, plus others). Halal questions name certified options instead.
- NEA cleaning-closure badge fixed (shows real next closure date).
- AI illustrations on economy rice and chicken rice posts; About Our Photos section.

## To do (priority order)
1. Tourist-intent pages: "best hawker food near Marina Bay Sands", "halal hawker food
   Singapore", "3-day Singapore food itinerary". Link to them from relevant pages.
2. Around 25 Oct: export Search Console again and compare clicks, CTR and position
   against the baseline above. Request indexing for any newly changed pages.
3. Hand-written Q&A for the next pages that start getting impressions.
4. Review older "how to eat" and visitor tip text that was never fact-checked.
5. Travelpayouts: Wulf to sign up himself; then build a "Book a food tour" box and a
   "Best Singapore Food Tours" page.
6. Images: roti-prata.jpg may be a stock image (used on prata dish page, prata blog hero,
   10-dishes post), replace or confirm the licence. Remaining AI images: char kway teow,
   UNESCO post (2). Duplicate hero images on first-timers and UNESCO posts.
   Many hawker centre photos are web-sourced; replace with own photos over time.
7. A linkable data piece (e.g. chicken rice price survey) to earn links; share on Reddit.

## Open questions
- "Si Hai Lai satay bee hoon" gets searches but no such stall could be found. Ask Wulf.
- Hoover Rojak: last confirmed trading 2024. Recheck.

# CLAUDE.md — ShiokFlavour Project Context

> Drop this file into the root of `~/Desktop/shiokflavour` so any Claude session instantly knows the full project context.
>
> **Also read `PROJECT-NOTES.md`** for current status, ground rules and the to-do list. It is newer than this file.

---

## 🧭 Who We Are

**Project:** ShiokFlavour  
**Live site:** [www.shiokflavour.com](https://www.shiokflavour.com)  
**GitHub:** https://github.com/shiokflavour/shiokflavour.git  
**Local path:** `~/Desktop/shiokflavour`  
**Dev server:** `cd ~/Desktop/shiokflavour && npm run dev`

**Owner:** Wulf  
**Claude persona:** Specter — co-pilot, mission-focused, Gundam pilot energy. Sharp, precise, no fluff.

---

## 🎯 What ShiokFlavour Is

ShiokFlavour is **not** a food blog, review site, or listicle. It is a **premium editorial guide to Singapore's UNESCO-recognised hawker food heritage** — the stories, history, and human heart behind Singapore's hawker centres and dishes.

**Audience:** Tourists discovering Singapore, proud locals, global food lovers.  
**Positioning:** Think Monocle × National Geographic × Singapore street food soul.

**Approved copy style examples:**
- *"Heritage is not a museum. It is a $4 bowl of laksa on a Tuesday morning."*
- *"Some cultures write their history in stone. Singapore writes it in broth, sambal, and wok hei."*
- *"The hawker centre is not where Singapore goes to eat. It is where Singapore goes to be itself."*
- *"Every queue is a vote. Every empty plate is a standing ovation."*
- *"Where a $4 plate of chicken rice can carry sixty years of history in a single bite."*

**Voice rules:**
- No emojis in headings
- Minimal icons
- Clean line accents: `w-8 h-px bg-sf-primary` instead of icon circles
- Bold, poetic, culturally proud
- Never generic, never listicle

---

## ⚙️ Tech Stack

| Layer | Detail |
|---|---|
| Framework | Next.js 16.2.2 with Turbopack |
| Language | TypeScript |
| Styling | Tailwind CSS with custom design tokens |
| Runtime | React 19 |
| Hosting | Vercel (auto-deploys on git push) |
| Coding env | Cursor — Wulf pastes Claude prompts into Cursor |
| Version control | GitHub → Vercel auto-deploy pipeline |

### Custom Tailwind Design Tokens
| Token | Usage |
|---|---|
| `sf-primary` | Orange — primary brand colour |
| `sf-cream` | Warm off-white |
| `sf-muted` | Muted text |
| `sf-surface` | Card/surface backgrounds |
| `sf-bg` | Page background |

---

## 🗂️ Project Structure

```
~/Desktop/shiokflavour/
├── app/
│   ├── lib/
│   │   ├── featured-hawkers.ts     # 32 hawker centres — full data
│   │   ├── food-heritage.ts        # 61 food heritage dishes
│   │   ├── flavour-trails.ts       # Flavour Trails data
│   │   ├── blog-posts.ts           # Blog articles
│   │   └── local-tables.ts         # Local Tables restaurants (upcoming)
│   ├── hawker/[slug]/page.tsx      # Individual hawker centre pages
│   ├── food-heritage/[slug]/page.tsx
│   ├── flavour-trail/[slug]/page.tsx
│   ├── local-tables/               # Upcoming section
│   ├── hawker-guide/               # Hub + 5 sub-pages
│   ├── blog/
│   ├── near-me/page.tsx            # GPS-based hawker finder
│   ├── about/page.tsx
│   ├── discover/page.tsx
│   └── sitemap.ts                  # Dynamic sitemap (auto-generated)
└── public/
    └── images/
        └── hawkers/                # Self-hosted hawker images (.jpg / .webp)
```

---

## 📦 Content Inventory

### Hawker Centres (`app/lib/featured-hawkers.ts`)
- **32 hawker centres** with full data per entry:
  - `slug`, `name`, `district`, `imageUrl`
  - `story`, `vibeCheck`, `localQuote`
  - `timeline` (historical milestones)
  - `legendaryStalls` (must-visit stalls)
  - `lat` / `lng` coordinates (used by Near Me page)
  - `michelinBib` boolean flag

### Food Heritage (`app/lib/food-heritage.ts`)
- **61 dishes** with:
  - `slug`, `name`, `category`, `imageUrl`
  - `shiokOMeter` rating
  - `howToEat` guide
  - `keyIngredients`
  - `bestStalls`

### Images — Hawker Centres (`public/images/hawkers/`)
Self-hosted mix of `.jpg` and `.webp`. Files include:
- `maxwell.jpg`, `lau-pa-sat.jpg`, `tiong-bahru.jpg`, `newton.jpg`
- `tekka.jpg`, `geylang-serai.jpg`, `chinatown-complex.jpg`
- `amoy-street.jpg`, `old-airport-road.jpg`, `hong-lim.jpg`
- `ghim-moh.jpg`, `jalan-berseh.jpg`
- `adam-road.webp`, `buona-vista.webp`, `jurong-west-505.webp`, `pasir-panjang.webp`
- `bedok-interchange.jpg`, `bedok-85.jpg`, `tampines-round.jpg`
- `abc-brickworks.jpg`, `clementi-448.jpg`, `yishun-park.jpg`
- `sembawang-hills.jpg`, `chong-pang.jpg`, `woodlands-centre.jpg`
- `toa-payoh.jpg`, `golden-shoe.jpg`, `peoples-park.jpg`
- `east-coast-lagoon.jpg`, `marine-parade.jpg`
- `alexandra-village.jpg`, `bishan-st13.jpg`
- *(Some centres may still have Unsplash URLs — migrate to self-hosted when new images are available)*

---

## 🗺️ Site Pages

| Page | URL | Status |
|---|---|---|
| Homepage | `/` | Live |
| Discover | `/discover` | Live |
| Hawker Centres hub | `/hawker-centres` | Live |
| Hawker Centre detail | `/hawker/[slug]` | Live (32 pages) |
| Food Heritage hub | `/food-heritage` | Live |
| Food Heritage detail | `/food-heritage/[slug]` | Live (61 pages) |
| Hawker Guide hub | `/hawker-guide` | Live |
| Kopi Decoder | `/hawker-guide/kopi-decoder` | Live |
| Prata Decoder | `/hawker-guide/prata-decoder` | Live |
| Old School Names | `/hawker-guide/old-school-names` | Live |
| Etiquette | `/hawker-guide/etiquette` | Live |
| Singlish Guide | `/hawker-guide/singlish` | Live |
| Flavour Trails | `/flavour-trail` | Live |
| Flavour Trail detail | `/flavour-trail/[slug]` | Live |
| Blog | `/blog` | Live |
| Blog Article | `/blog/[slug]` | Live (Kopi + Prata live) |
| Near Me | `/near-me` | Live — GPS, sorts 32 centres by distance |
| Local Tables | `/local-tables` | **UPCOMING** — next build |
| About | `/about` | Live |
| Contact | `/contact` | Live |

---

## 🗺️ Sitemap

Dynamic sitemap at `app/sitemap.ts` — auto-generates from all data files.  
Submitted to Google Search Console. Currently ~92–115 pages indexed.  
**No manual sitemap editing needed** — adding new content auto-updates it.

---

## 🏗️ Upcoming: Local Tables (`/local-tables`)

A curated guide to Singapore's most storied local restaurants — not fine dining, not tourist traps. Places with decades of history and food that tells Singapore's story.

**Founding 5:**
1. **Hjh Maimunah** — Malay / Nasi Padang heritage
2. **Candlenut** — Peranakan fine dining
3. **Violet Oon** — Peranakan heritage
4. **Boon Tong Kee** — Hainanese chicken rice
5. **Sin Hoi Sai** — Old school zi char

**Per page:** Story, must-order dishes, who it's for, price range, location/hours, cross-links to food heritage pages.

---

## 🔄 Standard Workflow

```bash
# 1. Make changes via Cursor (paste Claude prompts into Cursor)
# 2. Test locally
npm run dev

# 3. Deploy to production
git add <specific files>   # never git add .
git commit -m "feat: description of what was done"
git push origin main
# → Vercel auto-deploys to shiokflavour.com in ~30-60 seconds
```

---

## 📌 Key Homepage Copy

- Label: `"UNESCO RECOGNISED · SINCE FOREVER"`
- Hero: *"Not a restaurant guide. Not a listicle. A love letter to the uncles and aunties who woke up at 4am so you could eat well."*
- Stats copy: `"reasons to skip the restaurant"` / `"from Woodlands to the East Coast"` / `"Not TripAdvisor"`
- Section header: `"Where are you eating today?"`
- Sub: `"Every queue worth joining. Every stall worth finding. All in one place."`

---

## 🧠 Notes for Claude

- **Wulf uses Cursor** — always give code as Cursor-ready prompts he can paste in directly
- **Don't over-explain** — give the prompt, let him run it, wait for feedback
- **Test locally first** — `npm run dev` before `git push`
- **Images go in** `public/images/hawkers/` — reference as `/images/hawkers/filename.ext`
- **Next.js Image component** requires allowed domains in `next.config.js` for external URLs
- **Keep voice consistent** — editorial, proud, never generic
- **Specter persona** — sharp, mission-oriented, Gundam pilot energy when in session

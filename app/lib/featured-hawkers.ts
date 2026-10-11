export type HawkerRegion = "Central" | "North" | "South" | "East" | "West";

export type FeaturedHawker = {
  id: number;
  /** Optional hand-written Q&As, shown before the automatic ones. */
  faqs?: { q: string; a: string; link?: { label: string; href: string } }[];
  /** URL segment for `/hawker/{slug}` (SEO). */
  slug: string;
  name: string;
  /** Optional hand-written Google title / snippet. */
  seoTitle?: string;
  seoDescription?: string;
  address: string;
  lat: number;
  lng: number;
  region: HawkerRegion;
  tag: string;
  hours: string;
  imageUrl: string;
  description: string;
  mustTry: string[];
  famousFor: string;
  michelinNote: string;
  vibes: string[];
  nearestMRT: string;
  tipForVisitors: string;
  halal: boolean;
  openLate: boolean;
  budgetPerPax: string;
  story?: string;
  vibeCheck?: string;
  localQuote?: string;
  timeline?: { year: string; event: string }[];
  legendaryStalls?: { name: string; dish: string; story: string }[];
};

export const FEATURED_HAWKERS: FeaturedHawker[] = [
  {
    id: 1,
    slug: "maxwell-food-centre",
    name: "Maxwell Food Centre",
    seoTitle:
      "Maxwell Food Centre: Tian Tian Chicken Rice & Best Stalls | ShiokFlavour",
    seoDescription:
      "Maxwell Food Centre guide: Tian Tian Hainanese chicken rice, Fuzhou oyster cake, Zhen Zhen Cantonese porridge and Ah Tai chicken rice in Chinatown.",
    address: "1 Kadayanallur Street, Tanjong Pagar",
    lat: 1.280551,
    lng: 103.844459,
    region: "Central",
    tag: "Tourist Must-Visit",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/maxwell.jpg",
    description:
      "A converted 1920s market by Chinatown, home to Bib Gourmand chicken rice at Tian Tian and more than 100 stalls of Chinese, Peranakan and Thai food.",
    mustTry: [
      "Tian Tian Chicken Rice",
      "Fuzhou Oyster Cake",
      "Zhen Zhen Porridge",
      "Ah Tai Chicken Rice",
    ],
    famousFor:
      "Tian Tian Hainanese Chicken Rice, a Michelin Bib Gourmand stall since the guide's first Singapore edition in 2016.",
    michelinNote:
      "Tian Tian Hainanese Chicken Rice (#01-10/11) has held a Michelin Bib Gourmand in every edition of the Singapore guide from 2016 to 2026.",
    vibes: ["Tourists", "Lunch crowd", "Chinatown visit"],
    nearestMRT:
      "Maxwell (TE Line) — short walk",
    tipForVisitors:
      "Go before 12pm to avoid long queues at Tian Tian. Arrive early or the chicken rice sells out.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$10",
    story:
      "Maxwell began as a municipal market. Construction started in 1927 on land that had once been a Chinese burial ground, and in its first years the market struggled to fill its stalls. Cooked food stalls and tables came about a year after it opened. After the war it hosted the first of the government's cheap \"Family Restaurant\" canteens. In 1987 it officially became a food centre, taking in hawkers relocated from China Square, and a 2001 renovation gave it the name it has today. It survived a 1991 plan to demolish it for a URA headquarters, which was shelved two years later. Its best-known stall is Tian Tian Hainanese Chicken Rice, open here since 1987 and a Bib Gourmand in every Singapore Michelin guide so far. The centre is also worth visiting for older trades like Fuzhou oyster cakes, Hokkien ngoh hiang and pre-dawn Cantonese porridge.",
    vibeCheck: "Where tourists discover what locals already knew",
    timeline: [
      {
        year: "1927",
        event: "Construction of Maxwell Road Market begins on a former Chinese burial ground",
      },
      {
        year: "1987",
        event: "Maxwell Road Market is officially converted into a food centre, taking in hawkers relocated from China Square",
      },
      {
        year: "2001",
        event: "Reopens as Maxwell Food Centre after a S$3.2 million renovation",
      },
      {
        year: "2016",
        event: "Tian Tian Hainanese Chicken Rice is named a Bib Gourmand in the first Michelin Guide Singapore",
      },
      {
        year: "2022",
        event: "Maxwell MRT station on the Thomson-East Coast Line opens on 13 November, with an exit beside the centre",
      },
    ],
    legendaryStalls: [
      {
        name: "Tian Tian Hainanese Chicken Rice",
        dish: "Hainanese chicken rice",
        story: "Started here in 1987 and run by Foo Kui Lian's family. It beat Gordon Ramsay in a 2013 chicken rice cook-off and has held a Bib Gourmand since 2016. Michelin suggests ordering half a chicken with the fragrant oil rice.",
      },
      {
        name: "Maxwell Fuzhou Oyster Cake",
        dish: "Fuzhou oyster cake",
        story: "A second-generation stall that sells almost nothing but this Fuzhou snack. Each cake is fried to order, a crisp shell around minced pork, oysters, prawn and coriander. Few stalls in Singapore still make them.",
      },
      {
        name: "Zhen Zhen Porridge",
        dish: "Cantonese porridge",
        story: "A no-frills breakfast stall that opens at 5:30am, on limited days only. Order the thick, smooth congee with sliced fish, shredded chicken and century egg, and add a raw egg, which cooks in the hot porridge.",
      },
      {
        name: "Ah Tai Hainanese Chicken Rice",
        dish: "Hainanese chicken rice",
        story: "Run by Wong Liang Tai, who was Tian Tian's head cook for about 20 years. It is a few stalls away and usually has a shorter queue. Reviewers often single out the steamed chicken.",
      },
    ],
  },
  {
    id: 2,
    slug: "lau-pa-sat",
    name: "Lau Pa Sat",
    seoTitle:
      "Lau Pa Sat: Satay Street, Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Lau Pa Sat guide: Satay Street on Boon Tat Street, Lao Fu Zi char kway teow, Warong Pak Sapari mee soto and more in a 1894 national monument.",
    address: "18 Raffles Quay, CBD",
    lat: 1.2803,
    lng: 103.8503,
    region: "Central",
    tag: "Tourist Must-Visit",
    hours:
      "24 hours (stall hours vary); Satay Street from the evening",
    imageUrl: "/images/hawkers/lau-pa-sat.jpg",
    description:
      "A 24-hour food centre inside the 1894 cast-iron Telok Ayer Market, with Satay Street smoking on Boon Tat Street every night.",
    mustTry: [
      "Satay (Satay Street)",
      "Lao Fu Zi Char Kway Teow",
      "Mee Soto",
      "Nasi Lemak",
    ],
    famousFor:
      "Satay Street, where satay carts set up on Boon Tat Street beside a Victorian cast-iron market that is a gazetted national monument.",
    michelinNote:
      "The centre itself has no Michelin listing. Lao Fu Zi Fried Kway Teow (Bib Gourmand, 2026 guide, for its Old Airport Road stall) and Warong Pak Sapari (Bib Gourmand since 2023 for its Adam Road stall) run outlets here.",
    vibes: ["Tourists", "After-work drinks", "Late night supper", "Corporate crowd"],
    nearestMRT:
      "Telok Ayer (DT Line) — 4 min walk",
    tipForVisitors:
      "Come in the evening, when Boon Tat Street closes to traffic and the satay stalls set up. Order a cold beer and watch the city.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$6–$15",
    story:
      "Lau Pa Sat means 'old market' in Hokkien, and the name is earned. A market has stood at Telok Ayer since the 1820s; the building you eat in today, designed by James MacRitchie on reclaimed land with filigreed cast iron imported from Glasgow, was completed in 1894. It turned from wet market to food centre in 1972 and was gazetted a national monument on 28 June 1973. When the MRT was tunnelled beneath it, the whole structure was dismantled in 1986 and later reassembled, taking the name Lau Pa Sat in 1989. Today it runs around the clock, though stalls keep their own hours. The real ritual happens outside: on weekday evenings from 7pm, and from 3pm at weekends, satay carts roll onto Boon Tat Street and the charcoal smoke drifts between office towers until 3am. In 2024 the market marked its 130th year with a heritage mural by Yip Yew Chong.",
    vibeCheck:
      "A colonial monument that smells like satay smoke and tastes like Singapore history",
    timeline: [
      {
        year: "1894",
        event: "The present cast-iron market, designed by James MacRitchie, is completed on reclaimed land at Telok Ayer",
      },
      {
        year: "1973",
        event: "Gazetted as a national monument on 28 June, a year after it became a food centre",
      },
      {
        year: "1986",
        event: "Building dismantled so MRT tunnelling could run beneath it; later reassembled",
      },
      {
        year: "1989",
        event: "Reassembled market renamed Lau Pa Sat",
      },
      {
        year: "2024",
        event: "130th anniversary marked with a heritage mural by artist Yip Yew Chong",
      },
    ],
    legendaryStalls: [
      {
        name: "Best Satay 7 & 8",
        dish: "Satay",
        story: "The best-known carts on Satay Street, outside the main building on Boon Tat Street. Order a mixed set of chicken, beef and mutton skewers with ketupat and peanut sauce once the road fills with smoke after dark.",
      },
      {
        name: "Lao Fu Zi Fried Kway Teow",
        dish: "Char kway teow",
        story: "A branch of the Old Airport Road stall that holds a Michelin Bib Gourmand. Choose between black (sweet soya) and white versions; the guide praises the wok hei and silky noodles. It also does laksa.",
      },
      {
        name: "Warong Pak Sapari",
        dish: "Mee soto",
        story: "Outlet of the Adam Road mee soto and mee rebus stall that entered the Michelin Guide in 2023, the year this branch opened. Halal-certified; get the original mee soto with a bergedil on the side.",
      },
      {
        name: "Nasi Lemak Ayam Taliwang",
        dish: "Nasi lemak",
        story: "Indonesian-style nasi lemak built around spiced ayam taliwang. Halal-certified and open late, making it a good alternative to satay for a night visit.",
      },
    ],
  },
  {
    id: 3,
    slug: "old-airport-road-food-centre",
    name: "Old Airport Road Food Centre",
    seoTitle:
      "Old Airport Road Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Old Airport Road Food Centre guide: Nam Sing Hokkien mee, Lao Fu Zi char kway teow, Xin Mei Xiang lor mee, Toa Payoh Rojak and Michelin Bib stalls.",
    address: "51 Old Airport Road, Geylang",
    lat: 1.308280,
    lng: 103.885841,
    region: "East",
    tag: "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/old-airport-road.jpg",
    description:
      "A 1970s hawker centre on the old Kallang Airport estate, home to decades-old stalls and three 2026 Michelin Bib Gourmand picks.",
    mustTry: [
      "Nam Sing Hokkien Mee",
      "Lao Fu Zi Char Kway Teow",
      "Lor Mee",
      "Toa Payoh Rojak",
    ],
    famousFor:
      "A deep bench of long-running stalls, from Hokkien mee fried since the 1960s to lor mee served here since 1973, plus several Michelin Bib Gourmand holders.",
    michelinNote:
      "Three stalls hold a Bib Gourmand in the 2026 MICHELIN Guide Singapore (also on the 2025 list): Nam Sing Hokkien Fried Mee (#01-32), Lao Fu Zi Fried Kway Teow (#01-12) and To-Ricos Kway Chap (#01-135/136, marked 'temporarily closed' on the Michelin site).",
    vibes: ["Local families", "Foodies", "Weekend breakfast", "Serious eaters"],
    nearestMRT:
      "Dakota (CC Line) — 5 min walk",
    tipForVisitors:
      "Take the Circle Line to Dakota MRT. Come hungry and share plates so you can try several stalls. Weekend mornings are especially lively.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$5–$12",
    story:
      "Old Airport Road takes its name from Kallang Airport, which opened in 1937 and handed its flights to the new Paya Lebar Airport in August 1955. Housing rose on the former airfield, and the hawkers who gathered around the new Kallang estate eventually found a permanent home here: a purpose-built centre, completed in 1973, that the National Environment Agency describes as modern for its day, with 176 food stalls on the ground floor. It has been refreshed twice in recent decades, through a $5.8 million NEA upgrade in 2006–2007 and a four-month repair closure that ended on 1 October 2024. What keeps people coming back is depth. Nam Sing has fried nothing but Hokkien mee since the 1960s; Xin Mei Xiang's lor mee has been here since 1973; Toa Payoh Rojak moved in more than two decades ago. Three stalls hold Michelin Bib Gourmands in the 2026 guide. Come with a plan, or simply join the longest queue.",
    vibeCheck:
      "The hawker centre that serious food people call their favourite",
    timeline: [
      {
        year: "1937",
        event: "Kallang Airport, Singapore's first purpose-built civil airport, opens on 12 June",
      },
      {
        year: "1955",
        event: "Commercial flights move to the new Paya Lebar Airport; the Kallang site is later redeveloped into a housing estate",
      },
      {
        year: "1973",
        event: "Old Airport Road Hawker Centre is completed under the Kallang Airport Estate redevelopment, with 176 food stalls",
      },
      {
        year: "2006",
        event: "NEA begins a $5.8 million upgrade (2006–2007), then the largest under the Hawker Centre Upgrading Programme",
      },
      {
        year: "2024",
        event: "Centre closes from 1 June to 30 September for repairs and reopens on 1 October with new tables, fans and toilets",
      },
    ],
    legendaryStalls: [
      {
        name: "Nam Sing Hokkien Fried Mee",
        dish: "Hokkien Mee",
        story: "The only thing on the menu: egg noodles and bee hoon tossed in a broth of prawn shells and tomalley. The stall has served this one dish since the 1960s and holds a 2026 Michelin Bib Gourmand. Closed Mondays and Wednesdays.",
      },
      {
        name: "Lao Fu Zi Fried Kway Teow",
        dish: "Char Kway Teow",
        story: "Char kway teow fried to order with proper wok hei, in black or white versions with egg, Chinese sausage and blood cockles. A 2026 Michelin Bib Gourmand, and one of the slowest-moving queues in the centre, so come early.",
      },
      {
        name: "Xin Mei Xiang Zheng Zong Lor Mee",
        dish: "Lor Mee",
        story: "Hokkien-style lor mee in thick, dark, starchy gravy with fried fish, braised egg and pork. Add vinegar, garlic and chilli to taste. It has been here since 1973 and is now run by the third generation.",
      },
      {
        name: "Toa Payoh Rojak",
        dish: "Rojak",
        story: "Named after the estate where it started, this stall moved here more than two decades ago. The draw is a generous sauce made with Penang prawn paste over crisp youtiao, turnip and pineapple. Add grilled cuttlefish or century egg.",
      },
    ],
  },
  {
    id: 4,
    slug: "chinatown-complex-food-centre",
    name: "Chinatown Complex Food Centre",
    seoTitle:
      "Chinatown Complex Food Centre: Best Stalls & Michelin Picks | ShiokFlavour",
    seoDescription:
      "Chinatown Complex guide: Hawker Chan soya sauce chicken, Lian He Ben Ji claypot rice, Ann Chin popiah and Xiu Ji ikan bilis yong tau foo.",
    address: "335 Smith Street, Chinatown",
    lat: 1.282300,
    lng: 103.842880,
    region: "Central",
    tag: "Michelin Alert",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/chinatown-complex.jpg",
    description:
      "One of Singapore's biggest hawker centres, with 200+ stalls above a wet market. Home to Hawker Chan and Bib Gourmand claypot rice and yong tau foo.",
    mustTry: [
      "Hawker Chan Soya Sauce Chicken",
      "Claypot Rice",
      "Ann Chin Popiah",
      "Ikan Bilis Yong Tau Foo",
    ],
    famousFor:
      "Hawker Chan's soya sauce chicken stall, one of the first hawker stalls to win a Michelin star (2016), and its Bib Gourmand claypot rice.",
    michelinNote:
      "Liao Fan Hong Kong Soya Sauce Chicken Rice & Noodle (Hawker Chan) won one Michelin star in 2016 and lost it in 2021. In the 2026 guide, Lian He Ben Ji Claypot and Xiu Ji Ikan Bilis Yong Tau Fu (new in 2026) hold Bib Gourmands. Ann Chin Handmade Popiah is also listed.",
    vibes: ["Foodies", "Michelin hunters", "Tourists", "Chinatown explorers"],
    nearestMRT:
      "Chinatown (NE/DT Line) — short walk",
    tipForVisitors:
      "Head straight up to the food centre on the second floor. Go before the noon rush: the most popular stalls can sell out by mid-afternoon.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$3–$10",
    story:
      "Chinatown Complex began as Kreta Ayer Complex. HDB built it for $18 million to bring Chinatown's street hawkers indoors. It opened on 1 October 1983, and an estimated 800-plus hawkers moved in, selling fresh produce, cooked food and sundries. A year later, at the hawkers' request, it was renamed Chinatown Complex. It was renovated in 2008 at a cost of $20.9 million and closed for three months of repairs in 2019. Today more than 200 food stalls fill the second floor above a working wet market. In 2016 Chan Hon Meng's soya sauce chicken stall, then called Liao Fan, won a Michelin star, among the first ever given to a hawker. The star was dropped in 2021, but the stall still trades here. Older trades remain too: popiah from a family business dating to 1958, and yong tau foo whose roots go back to a 1960s roadside stall on Sago Lane.",
    vibeCheck:
      "Where a soya sauce chicken stall once made Michelin history",
    timeline: [
      {
        year: "1983",
        event: "Opens on 1 October as Kreta Ayer Complex, housing an estimated 800-plus relocated street hawkers",
      },
      {
        year: "1984",
        event: "Renamed Chinatown Complex at the hawkers' request",
      },
      {
        year: "2008",
        event: "Renovated for $20.9 million under the Hawker Centres Upgrading Programme",
      },
      {
        year: "2016",
        event: "Liao Fan Hong Kong Soya Sauce Chicken Rice & Noodle wins one Michelin star in the first Singapore guide",
      },
      {
        year: "2019",
        event: "Food centre closes for three months of repairs from March, reopening in June",
      },
    ],
    legendaryStalls: [
      {
        name: "Hawker Chan (Liao Fan Hong Kong Soya Sauce Chicken Rice & Noodle)",
        dish: "Soya sauce chicken rice",
        story: "Chan Hon Meng's original stall (#02-126), opened here in 2009. It held a Michelin star from 2016 to 2021. Order the soya sauce chicken over rice or noodles, and come early because the chickens are limited.",
      },
      {
        name: "Lian He Ben Ji Claypot",
        dish: "Claypot rice",
        story: "A Bib Gourmand stall that cooks every pot to order over charcoal, so expect a wait of about 40 minutes. Get the mixed version with chicken, sausage and preserved pork, and scrape up the crisp crust at the bottom.",
      },
      {
        name: "Ann Chin Handmade Popiah",
        dish: "Popiah",
        story: "The family business dates to 1958, when founder Lim Kam Chwee sold popiah from a pushcart. It is now run by the second and third generations. Order the popiah and kueh pie tee.",
      },
      {
        name: "Xiu Ji Ikan Bilis Yong Tau Fu",
        dish: "Ikan bilis yong tau foo",
        story: "Earned a Bib Gourmand in 2026. Its roots go back to a 1960s roadside stall on Sago Lane. Fixed sets of handmade stuffed tau pok, tau kwa and fishballs come in a clear anchovy-and-fishbone broth. It opens before dawn.",
      },
    ],
  },
  {
    id: 5,
    slug: "newton-food-centre",
    name: "Newton Food Centre",
    seoTitle:
      "Newton Food Centre: Best Stalls & Michelin Picks | ShiokFlavour",
    seoDescription:
      "Newton Food Centre guide: Hup Kee oyster omelette, Heng carrot cake, Alliance Seafood BBQ seafood, Kwang Kee fish soup and Kwee Heng duck rice.",
    address: "500 Clemenceau Avenue North, Newton",
    lat: 1.312225,
    lng: 103.839729,
    region: "Central",
    tag: "Tourist Must-Visit",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/newton.jpg",
    description:
      "Newton Circus's open-air hawker centre since 1971, with six Michelin Bib Gourmand stalls and a starring role in Crazy Rich Asians.",
    mustTry: [
      "Hup Kee Oyster Omelette",
      "Heng Carrot Cake",
      "BBQ Seafood",
      "Teochew Fish Porridge",
    ],
    famousFor:
      "Seafood, carrot cake and oyster omelette in a dense cluster of Bib Gourmand stalls, and the hawker montage in Crazy Rich Asians.",
    michelinNote:
      "Five stalls were on the Michelin Bib Gourmand 2025 list: Alliance Seafood, Heng, Kwang Kee Teochew Fish Porridge, Kwee Heng and Song Kee Teochew Fish Porridge. All five kept the award in 2026, and Hup Kee Fried Oyster Omelette joined as a new 2026 entry.",
    vibes: ["Tourists", "Late night crowd", "Expats", "Movie fans"],
    nearestMRT:
      "Newton (NS/DT Line) — short walk",
    tipForVisitors:
      "Ignore the aggressive touting from stall owners — walk around first and choose what looks good. Prices are slightly higher than other hawker centres.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$6–$20",
    story:
      "Before there was a building, there was a crossroads. In the 1950s street hawkers gathered at Newton Circus for a weekly bazaar, and by 1966 the area had become a pasar malam the government struggled to clear. Its answer was a hawker centre, completed at the end of 1970 and promoted as \"hawker stalls in a garden setting\". It opened in 1971 as Singapore's first hawker centre built without a wet market. The centre has been remade several times since: a full rebuild into today's horseshoe around a central courtyard, an upgrade in 2016, and three months of repairs from November 2022. In 2018 its stalls filled the hawker montage in Crazy Rich Asians. The more lasting fame belongs to the cooks. Heng has been frying carrot cake since 1971, and Hup Kee's oyster omelette traces back to the old Glutton's Square in 1966. Both are now on Michelin's Bib Gourmand list.",
    vibeCheck: "Famous enough to be in the movies, real enough to still matter",
    timeline: [
      {
        year: "1971",
        event: "Newton Circus Hawker Centre opens at Newton Circus as Singapore's first hawker centre built without a wet market",
      },
      {
        year: "2005",
        event: "Centre closes and is rebuilt in a horseshoe layout around a central courtyard",
      },
      {
        year: "2016",
        event: "Reopens in late April after a three-month upgrade with wider aisles, LED lighting, new toilets and new furniture",
      },
      {
        year: "2018",
        event: "Features in the hawker-centre montage in the film Crazy Rich Asians",
      },
      {
        year: "2026",
        event: "Hup Kee Fried Oyster Omelette is named a new Michelin Bib Gourmand, bringing Newton to six Bib Gourmand stalls",
      },
    ],
    legendaryStalls: [
      {
        name: "Hup Kee Fried Oyster Omelette",
        dish: "Oyster omelette",
        story: "Started in 1966 at Glutton's Square and moved to Newton in the early 1970s. Its one dish has crisp, lacy edges, plump oysters and a calamansi-spiked chilli. It's a new 2026 Bib Gourmand. Evenings only, and the queues are long.",
      },
      {
        name: "Heng",
        dish: "Carrot cake & oyster omelette",
        story: "Frying chai tow kway since 1971 and a Michelin Bib Gourmand. Order a mixed plate of white and black carrot cake, and add the oyster omelette, which some regulars rate as the stall's best dish. Dinner only.",
      },
      {
        name: "Alliance Seafood",
        dish: "BBQ seafood & chilli crab",
        story: "Michelin Bib Gourmand, cooking seafood to order. Barbecue is the most popular style, with sambal, black pepper and salted egg also on offer. Michelin singles out the cereal butter prawns. Crab is priced by season.",
      },
      {
        name: "Kwang Kee Teochew Fish Porridge",
        dish: "Fish soup",
        story: "Michelin Bib Gourmand. Known for sweet fish porridge, fried fish bee hoon and a fish head soup made with pre-fried mackerel head in a scallion broth. Daytime hours, closed Mondays.",
      },
    ],
  },
  {
    id: 6,
    slug: "tekka-centre",
    name: "Tekka Centre",
    seoTitle:
      "Tekka Centre Little India: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Tekka Centre food guide: Delhi Lahori naan and kebabs, Allauddin's Briyani, 545 Whampoa prawn noodles, Heng Gi duck rice and Indian-Muslim classics.",
    address: "665 Buffalo Road, Little India",
    lat: 1.306190,
    lng: 103.850670,
    region: "Central",
    tag:
      "Little India Icon",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/tekka.jpg",
    description:
      "Little India's market and food centre on Buffalo Road, mixing biryani, tandoor, thosai and Chinese hawker classics under one roof.",
    mustTry: [
      "Biryani",
      "Delhi Lahori Naan",
      "Prawn Noodles",
      "Braised Duck Rice",
    ],
    famousFor:
      "Indian-Muslim biryani and tandoor cooking alongside long-running Chinese stalls, above one of Singapore's best-known wet markets.",
    michelinNote:
      "Delhi Lahori is a Michelin Bib Gourmand (first awarded 2024, on the 2026 list). Allauddin's Briyani, Heng Gi Goose and Duck Rice and 545 Whampoa Prawn Noodles are listed in the Michelin Guide Singapore without a Bib Gourmand.",
    vibes: ["Muslim-friendly", "Indian food lovers", "Cultural experience", "Breakfast crowd"],
    nearestMRT:
      "Little India (NE/DT Line) — next door",
    tipForVisitors:
      "Many stalls are halal-certified but not all, so look for the certificate displayed at each stall. Best on weekend mornings, when Little India is at its liveliest.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$10",
    story:
      "The market began across the road. In 1915 the municipality opened Kandang Kerbau Market, named in Malay for the buffalo pens of a district tied to the cattle and meat trade. Tamil speakers called it Mattu Kampong Pasar, and by the 1930s it was known as the \"people's market\". In May 1981 the stallholders crossed over into a new complex. Its first name, Zhujiao Centre, came from the Speak Mandarin Campaign and never stuck with residents. In 2000 it was renamed Tekka Centre, after the Hokkien name for the area. The food centre was upgraded in 2008 and renovated again over three months in 2023. What Tekka serves is wider than its reputation suggests. Allauddin's has sold biryani here for decades. Naseer Ahmed Khan's Delhi Lahori moved in from Jurong in 2020 and won a Bib Gourmand in 2024. A few aisles away, 545 Whampoa still draws early-morning queues for prawn noodles.",
    vibeCheck: "The most authentically South Asian 10 square metres in Southeast Asia",
    timeline: [
      {
        year: "1915",
        event: "Kandang Kerbau Market, designed by Municipal Engineer Robert Peirce, opens on the opposite side of the road",
      },
      {
        year: "1981",
        event: "Stallholders move into the new Kandang Kerbau Complex on Buffalo Road, soon renamed Zhujiao Centre",
      },
      {
        year: "2000",
        event: "Zhujiao Centre is renamed Tekka Centre after public feedback",
      },
      {
        year: "2008",
        event: "Food centre and market close for upgrading under the Hawker Centres Upgrading Programme",
      },
      {
        year: "2023",
        event: "Closes on 3 July for a three-month renovation and reopens on 1 October",
      },
    ],
    legendaryStalls: [
      {
        name: "Delhi Lahori",
        dish: "Naan, seekh kebab & butter chicken",
        story: "Tekka's Michelin Bib Gourmand, first awarded in 2024. Lahore-born Naseer Ahmed Khan cooks in a charcoal tandoor: fluffy, crisp naan, seekh kebabs grilled to order and a butter chicken naan set.",
      },
      {
        name: "Allauddin's Briyani",
        dish: "Mutton briyani",
        story: "A family biryani stall listed in the Michelin Guide. Yellow basmati rice with mutton, chicken or fish, served with achar and dhal. Michelin praises the tender mutton.",
      },
      {
        name: "545 Whampoa Prawn Noodles",
        dish: "Prawn noodles",
        story: "Michelin-listed. Order it dry with sambal, prawns and pork, plus a side of rich prawn broth. Fried shallots and lard go on top. Weekday mornings only, and the queue starts early.",
      },
      {
        name: "Heng Gi Goose and Duck Rice",
        dish: "Braised duck rice",
        story: "A Teochew braising stall listed in the Michelin Guide. Goose went off the menu after imports stopped; order the soya braised duck, pork belly or offal. Morning to early afternoon, closed Sundays.",
      },
    ],
  },
  {
    id: 7,
    slug: "adam-road-food-centre",
    name: "Adam Road Food Centre",
    seoTitle:
      "Adam Road Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Adam Road Food Centre guide: Selera Rasa nasi lemak, Noo Cheng big prawn noodle, Bahrakath mutton soup and Warong Pak Sapari mee soto.",
    address:
      "2 Adam Road, Bukit Timah",
    lat: 1.324132,
    lng: 103.814163,
    region: "Central",
    tag: "Supper Spot",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/adam-road.webp",
    description:
      "A compact Bukit Timah hawker centre by the Botanic Gardens, known for nasi lemak, Malay soups and three Bib Gourmand stalls.",
    mustTry: [
      "Selera Rasa nasi lemak",
      "Noo Cheng dry prawn noodle",
      "Bahrakath mutton soup",
      "Pak Sapari mee soto",
    ],
    famousFor:
      "Selera Rasa's nasi lemak queue and a trio of Michelin Bib Gourmand stalls serving prawn noodles, mutton soup and mee soto.",
    michelinNote:
      "Three stalls hold Bib Gourmand in the 2026 MICHELIN Guide Singapore: Adam Rd Noo Cheng Big Prawn Noodle (#01-27), Bahrakath Mutton Soup (#01-10) and Selamat Datang Warong Pak Sapari (#01-09). The same three were also on the 2023 list.",
    vibes: ["Late night supper", "Malay food lovers", "Halal options", "Expat neighbourhood"],
    nearestMRT:
      "Botanic Gardens (CC/DT Line) — short walk",
    tipForVisitors:
      "Several stalls close one day a week (Selera Rasa and Warong Pak Sapari on Fridays, Noo Cheng on Mondays), so check before you go. Mutton soup and prawn noodles keep going into the late evening, which makes it a good supper stop.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$5–$12",
    story:
      "Adam Road Food Centre opened in September 1974, built to rehouse hawkers whose old centre between Bukit Timah and Dunearn roads was cleared for the Adam Road flyover. With about 30 stalls it is small by Singapore standards, but its menu is unusually concentrated. Malay and Indian-Muslim cooking sets the tone. Selera Rasa's nasi lemak, with its sets named after poker hands, draws the morning queue. Warong Pak Sapari ladles out mee soto and mee rebus. Bahrakath has been making the same mutton soup recipe since 1973. Chinese stalls hold their own as well, led by Noo Cheng's big prawn noodles, best eaten dry with the soup on the side. The centre has been upgraded several times. Most recently it closed for three months of renovation and reopened on 1 January 2024. What hasn't changed is the mix of people it feeds, from neighbourhood regulars to visitors walking over from the Botanic Gardens.",
    vibeCheck: "The supper spot that belongs to everyone and is owned by no one",
    timeline: [
      {
        year: "1974",
        event: "Opens on 28 September, replacing an older hawker centre cleared for the Adam Road flyover",
      },
      {
        year: "2001",
        event: "Among the first centres picked for the national Hawker Centres Upgrading Programme",
      },
      {
        year: "2016",
        event: "Completes a two-month renovation",
      },
      {
        year: "2023",
        event: "Three stalls named Bib Gourmand; centre closes 1 Oct–31 Dec for renovation",
      },
      {
        year: "2024",
        event: "Reopens on 1 January after the three-month renovation",
      },
    ],
    legendaryStalls: [
      {
        name: "Selera Rasa Nasi Lemak",
        dish: "Nasi lemak",
        story: "The National Heritage Board calls it arguably the centre's most famous stall. The sets are named after poker hands. Go for the Royal Flush if you want everything. Closed Fridays.",
      },
      {
        name: "Adam Rd Noo Cheng Big Prawn Noodle",
        dish: "Big prawn noodle",
        story: "Bib Gourmand. Michelin's inspectors recommend it dry, where a sweet-spicy sauce coats bouncy prawns, with the prawn broth on the side. You can pick egg noodles, bee hoon or kway teow. Closed Mondays.",
      },
      {
        name: "Bahrakath Mutton Soup",
        dish: "Mutton soup",
        story: "Bib Gourmand. It has used the same recipe since 1973 for a dense, herbal broth. Order the leg or another cut, and get bread to mop up the soup.",
      },
      {
        name: "Selamat Datang Warong Pak Sapari",
        dish: "Mee soto & mee rebus",
        story: "Bib Gourmand. This Malay stall has been going for more than five decades and is known for mee soto and thick mee rebus gravy. Michelin also rates its tendon and tripe soups.",
      },
    ],
  },
  {
    id: 8,
    slug: "bedok-interchange-hawker-centre",
    name: "Bedok Interchange Hawker Centre",
    seoTitle:
      "Bedok Interchange Hawker Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Next to Bedok MRT: Michelin Bib Gourmand chwee kueh, budget nasi lemak, Thai food, lor mee and mee rebus. The best stalls at Bedok Interchange Hawker Centre.",
    address:
      "Blk 208B New Upper Changi Road, Bedok",
    lat: 1.324629,
    lng: 103.930477,
    region: "East",
    tag: "Local Favourite",
    hours: "Hours vary by stall",
    imageUrl: "/images/food/chwee-kueh.jpg",
    description:
      "An everyday East-side hawker centre right beside Bedok MRT, home to the original Bedok Chwee Kueh stall and plenty of cheap, honest breakfasts and lunches.",
    mustTry: [
      "Bedok Chwee Kueh",
      "Nasi Lemak",
      "Thai Food",
      "Mee Rebus",
    ],
    famousFor:
      "Chwee kueh — steamed rice cakes topped with preserved radish. A uniquely Singaporean breakfast.",
    michelinNote:
      "Bedok Chwee Kueh has been listed in the Michelin Bib Gourmand",
    vibes: ["East-side locals", "Breakfast crowd", "Families", "No-frills dining"],
    nearestMRT: "Bedok (EW Line) — 2 min walk",
    tipForVisitors:
      "Extremely convenient — right next to Bedok MRT. Perfect stop if exploring the East Coast area.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
    story:
      "Bedok Interchange Hawker Centre sits beside Bedok MRT station and the bus interchange, which makes it the default meal stop for a huge slice of the East. It is not a destination centre with a legend on every row. It is an everyday one, and that is its strength. The stall everyone mentions is Bedok Chwee Kueh, the original outlet of a chwee kueh brand listed in the Michelin Bib Gourmand: soft steamed rice cakes under a heap of salty-sweet preserved radish, eaten for breakfast for a couple of dollars. Around it are the stalls that keep regulars coming back: cheap nasi lemak, a properly spicy Thai stall, lor mee, curry chicken noodles, and Malay breakfasts like mee rebus and soto ayam.",
    vibeCheck: "East Singapore's living room — everyone passes through eventually",
    timeline: [
      {
        year: "1989",
        event: "Bedok MRT station opens on the East-West Line",
      },
      {
        year: "2014",
        event: "Bedok's rebuilt, air-conditioned bus interchange opens beside the MRT and Bedok Mall",
      },
      {
        year: "Today",
        event: "The original Bedok Chwee Kueh stall still draws the breakfast crowd",
      },
    ],
    legendaryStalls: [
      {
        name: "Bedok Chwee Kueh",
        dish: "Chwee Kueh",
        story: "The original outlet of the Michelin Bib Gourmand-listed chwee kueh brand, now with branches around the island. Soft, wobbly rice cakes under salty-sweet preserved radish, with chilli on the side. Order more than you think you need.",
      },
      {
        name: "Ming Hui Nasi Lemak",
        dish: "Nasi Lemak",
        story: "One of the cheapest decent plates in the East: fragrant coconut rice and sambal in a basic set, with fish fillet, otah or sausage as add-ons.",
      },
      {
        name: "Kin Khao Yang Authentic Thai Food",
        dish: "Thai Food",
        story: "Basil minced meat rice, tom yum and Thai fish cakes with proper heat. A good change from noodle soup.",
      },
      {
        name: "Inspirasi",
        dish: "Mee Rebus",
        story: "Malay breakfast classics: mee rebus in thick, sweet potato gravy, soto ayam and chicken porridge, with begedil on the side.",
      },
    ],
    faqs: [
      {
        q: "Is Bedok Interchange Hawker Centre next to Bedok MRT?",
        a: "Yes. It sits beside Bedok MRT station and the bus interchange, at Blk 208B New Upper Changi Road.",
      },
      {
        q: "What is Bedok Interchange Hawker Centre famous for?",
        a: "Chwee kueh. The original Bedok Chwee Kueh stall is here, and the brand has been listed in the Michelin Bib Gourmand. Cheap nasi lemak, Thai food and Malay breakfasts like mee rebus are popular too.",
      },
    ],
  },
  {
    id: 9,
    slug: "bedok-85-fengshan-market",
    name: "Bedok 85 Fengshan Market",
    seoTitle:
      "Bedok 85 Fengshan Food Centre: Best Stalls & Supper Picks | ShiokFlavour",
    seoDescription:
      "Bedok 85 (Fengshan Food Centre) supper guide: Xing Ji and Seng Hiang bak chor mee, Shi Wei Da satay bee hoon, Chai Chee pork porridge and BBQ stingray.",
    address:
      "Blk 85 Bedok North Street 4, Bedok",
    lat: 1.332060,
    lng: 103.938812,
    region: "East",
    tag: "Supper Spot",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/food/bak-chor-mee.jpg",
    description:
      "East-side supper institution at Blk 85 Bedok North St 4, famed for soupy bak chor mee, satay bee hoon, pork porridge and BBQ seafood late into the night.",
    mustTry: [
      "Xing Ji bak chor mee soup",
      "Shi Wei Da satay bee hoon",
      "Chai Chee pork porridge",
      "Hotplate BBQ stingray",
    ],
    famousFor:
      "Late-night soupy bak chor mee, with rival stalls Xing Ji and Seng Hiang side by side, plus BBQ seafood and porridge that draw supper crowds from across the island.",
    michelinNote:
      "Shi Wei Da's satay bee hoon was named in the MICHELIN Guide Singapore 2018 Bib Gourmand selection. It is not on the 2025 Bib Gourmand list, and no stall here is among the 2026 newcomers.",
    vibes: ["Supper crowd", "Night owls", "After clubbing", "Foodies"],
    nearestMRT:
      "Bedok Reservoir (DT Line) — about 10 min walk",
    tipForVisitors:
      "The wet market is busiest in the morning and the food centre comes alive at dusk, so time your visit to what you want to eat. Shi Wei Da opens mid-afternoon and sells out, so go early for satay bee hoon.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$5–$15",
    story:
      "Everyone calls it Bedok 85, after the block number at 85 Bedok North Street 4. The estate took the name Fengshan in the early 1980s, when villagers from Chang Mao Hng were resettled here. Fengshan is the Hanyu Pinyin form of Hong San, their village temple. The two bak chor mee stalls that define the place, Xing Ji Rou Cuo Mian and Seng Hiang, both moved into the market in 1977 and still trade next door to each other, ladling soupy minced-pork noodles under bright lights. The wet market belongs to the morning. After dark the BBQ stingray, porridge and oyster omelette crowd takes over. In 2018 Shi Wei Da's hand-made satay bee hoon, with peanuts roasted and ground from scratch, earned a Bib Gourmand. When the stall closed in April 2024, regulars mourned, and it was back at the centre by January 2025.",
    vibeCheck: "Singapore's midnight kitchen — where the night always ends well",
    timeline: [
      {
        year: "1977",
        event: "Xing Ji Rou Cuo Mian and Seng Hiang Bak Chor Mee move into the Blk 85 market",
      },
      {
        year: "1980s",
        event: "Resettled Chang Mao Hng villagers arrive and the Bedok North estate is renamed Fengshan, after the Hong San temple",
      },
      {
        year: "2018",
        event: "Shi Wei Da's satay bee hoon named in the MICHELIN Guide Singapore Bib Gourmand selection",
      },
      {
        year: "2020",
        event: "Closed for renovation from 10 February; reopened 17 June after Covid-19 delays",
      },
      {
        year: "2025",
        event: "Shi Wei Da returns to Bedok 85 in January after closing in April 2024",
      },
    ],
    legendaryStalls: [
      {
        name: "Xing Ji Rou Cuo Mian",
        dish: "Soup bak chor mee",
        story: "At the market since 1977 (#01-07), selling only the soup version: a cloudy, meaty pork broth, springy mee kia and crisp lard. Seth Lui's 2026 head-to-head called it the narrow winner over its neighbour.",
      },
      {
        name: "Seng Hiang Bak Chor Mee",
        dish: "Bak chor mee (dry or soup)",
        story: "Next door at #01-08 and also here since 1977. It does both dry and soup versions, with a peppery broth lifted by Chinese celery. Order one from each stall and decide for yourself.",
      },
      {
        name: "Shi Wei Da",
        dish: "Satay bee hoon",
        story: "Mr Ng Kim Song's 2018 Bib Gourmand stall makes everything from scratch, including roasting and grinding the peanuts for its sweet-spicy gravy. Reopened at #01-69 in January 2025 after closing in April 2024. Opens mid-afternoon and sells out.",
      },
      {
        name: "Chai Chee Pork Porridge",
        dish: "Pork porridge",
        story: "Silky Cantonese congee from two stalls here: morning service and an evening stall (#01-23) open till midnight, closed Mondays. Get the mixed porridge with century egg and cuttlefish, and dunk the you tiao.",
      },
    ],
  },
  {
    id: 10,
    slug: "tampines-round-market",
    name: "Tampines Round Market",
    seoTitle:
      "Tampines Round Market: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Tampines Round Market guide: Bib Gourmand Rajarani Thosai, Yi Pin Wei duck kway chap, 137 lor mee, Xing Ji wanton mee and Sarawak kolo mee.",
    address:
      "Blk 137 Tampines Street 11, Tampines",
    lat: 1.345596,
    lng: 103.944595,
    region: "East",
    tag: "Budget Eats",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/tampines-round.jpg",
    description:
      "Tampines' circular 1983 market and breakfast hub, home to two 2026 Bib Gourmand stalls plus lor mee, kolo mee and wanton mee that sell out early.",
    mustTry: [
      "Rajarani Thosai",
      "Yi Pin Wei Duck Kway Chap",
      "137 Lor Mee",
      "Xing Ji Wanton Mee",
    ],
    famousFor:
      "A morning hawker breakfast run in a round 1983 market, now home to two 2026 MICHELIN Bib Gourmand stalls.",
    michelinNote:
      "MICHELIN Guide Singapore 2026: Rajarani Thosai (#01-33) and Yi Pin Wei Braised Duck Kway Chap (#01-40) both newly awarded the Bib Gourmand.",
    vibes: ["Budget dining", "Tampines locals", "Families", "Morning breakfast"],
    nearestMRT:
      "Tampines West (DT Line) — short walk",
    tipForVisitors:
      "Come early: most stalls open around 6–7am and many sell out or close by early afternoon. Check rest days first, as several stalls close on Mondays, Tuesdays or Wednesdays.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$8",
    story:
      "Tampines Round Market & Food Centre opened in 1983, and the name locals use comes from its circular shape. It arrived early in the life of Tampines new town. According to Roots, 72 stallholders moved here together after the market and hawker centre at Block 176 Toa Payoh Lorong 2 was demolished for an MRT line, at a time when HDB expected it to be among the last traditional wet markets it would build. It is above all a breakfast place. Around the ring of 45 cooked-food stalls, with a 99-stall wet market alongside, regulars queue for lor mee, Sarawak-style kolo mee and wanton mee that often sell out before noon. In 2026 the MICHELIN Guide gave Bib Gourmands to two stalls here: Rajarani Thosai, which makes its thosai and appam from scratch, and Yi Pin Wei Braised Duck Kway Chap. Arrive early. By early afternoon much of the centre has wound down.",
    vibeCheck: "No stars, no tourists, all heart",
    timeline: [
      {
        year: "1983",
        event: "Tampines Round Market & Food Centre opens; 72 stallholders relocate here from Blk 176 Toa Payoh Lorong 2, demolished for the MRT",
      },
      {
        year: "2008",
        event: "Voted a favourite hawker centre by Shin Min Daily News readers (again in 2009)",
      },
      {
        year: "2019",
        event: "Reopens on 7 July after a two-month revamp with better ventilation, tray-return racks and refurbished toilets",
      },
      {
        year: "2026",
        event: "Rajarani Thosai and Yi Pin Wei Braised Duck Kway Chap named new MICHELIN Bib Gourmand entries",
      },
    ],
    legendaryStalls: [
      {
        name: "Rajarani Thosai",
        dish: "Thosai and appam",
        story: "2026 Bib Gourmand. Thosai and appam made from scratch, with nearly 20 thosai fillings. Try the masala egg onion thosai and a coconut appam, with the dhal and chutneys. Cash only; closed Wednesdays.",
      },
      {
        name: "Xing Ji Wanton Mee",
        dish: "Wanton mee",
        story: "A long-running family wanton mee stall (#01-35) that often sells out before its listed closing time. Order wanton noodles or the shredded chicken noodles, and come early. Closed Tuesdays and Wednesdays.",
      },
      {
        name: "Yummy Sarawak Kolo Mee",
        dish: "Sarawak kolo mee",
        story: "Run by Sunny Lee and his wife Veronica at #01-45. Get the Sarawak Kuching kolo mee set or the spare ribs noodle. One of the centre's busiest breakfast queues, especially on weekends.",
      },
      {
        name: "137 Lor Mee Prawn Mee",
        dish: "Lor mee",
        story: "A queue magnet at #01-09 for thick, gravy-laden lor mee topped with fried fish. It sells out early, so arrive at breakfast time. Closed Mondays.",
      },
    ],
  },
  {
    id: 11,
    slug: "geylang-serai-market",
    name: "Geylang Serai Market",
    seoTitle:
      "Geylang Serai Market Food Centre: Best Malay Stalls | ShiokFlavour",
    seoDescription:
      "Where to eat at Geylang Serai Market: Sinar Pagi nasi padang, Original Alhambra satay, Hajjah Mona nasi padang and Hamid's family briyani.",
    address:
      "1 Geylang Serai, Geylang",
    lat: 1.316888,
    lng: 103.897407,
    region: "East",
    tag: "Halal Haven",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/geylang-serai.jpg",
    description:
      "Singapore's Malay food landmark since 1964, with nasi padang, charcoal satay and family briyani upstairs above a busy wet market.",
    mustTry: [
      "Sinar Pagi Nasi Padang",
      "Alhambra Satay",
      "Hajjah Mona Rawon",
      "Geylang Briyani Kambing",
    ],
    famousFor:
      "Malay and Indonesian-Malay hawker food, especially Kapau-style nasi padang, charcoal-grilled satay and briyani, in the cultural centre of Geylang Serai.",
    michelinNote:
      "",
    vibes: ["Muslim-friendly", "Malay culture", "Ramadan bazaar", "Cultural immersion"],
    nearestMRT:
      "Paya Lebar (EW/CC Line) — short walk",
    tipForVisitors:
      "Go for breakfast or lunch: several of the best-known stalls close mid-afternoon and popular nasi padang dishes can sell out by lunchtime. The food centre is on the second floor, above the wet market.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$5–$10",
    story:
      "Geylang Serai Market has anchored the Malay heart of Singapore's east since 1964, when it was built to move hawkers off crowded roadsides and was opened by then-Prime Minister Lee Kuan Yew. The building standing today comes from a rebuild completed in 2009, its design drawn from traditional Malay architecture, with the wet market below and the food centre upstairs. Upstairs is where the neighbourhood's food memory lives. Sinar Pagi's founder, Haji Nasir Kiram, came from Bukittinggi in West Sumatra and sold nasi kapau from a makeshift stall in Geylang Serai before moving into the market; his Kapau-style spread still draws a lunchtime crowd. A few stalls along, Original Alhambra Satay grills its skewers over charcoal, the last surviving member of the old Satay Club that once filled the Esplanade with smoke. Family-run briyani and nasi padang stalls fill in the rest. Come hungry and come early: many of the most popular dishes are gone by early afternoon.",
    vibeCheck: "The heartland of Malay Singapore — food as cultural memory",
    timeline: [
      {
        year: "1964",
        event: "Geylang Serai Market built to give roadside hawkers a proper home; officially opened by Prime Minister Lee Kuan Yew",
      },
      {
        year: "2009",
        event: "Market rebuilt with an architectural design inspired by traditional Malay houses",
      },
      {
        year: "2014",
        event: "Market's 50th anniversary marked with a speech by PM Lee Hsien Loong and a commemorative book",
      },
      {
        year: "2024",
        event: "Closed 29 July to 31 October for repairs, redecoration and the Hawker Centres Transformation Programme; reopened 1 November",
      },
    ],
    legendaryStalls: [
      {
        name: "Sinar Pagi Nasi Padang",
        dish: "Kapau-style nasi padang",
        story: "Founded by Bukittinggi-born Haji Nasir Kiram, who moved from a makeshift stall into the market. Order the ayam sambal with sambal goreng and sayur lodeh on the side, and arrive before it sells out at lunch.",
      },
      {
        name: "Original Alhambra Satay",
        dish: "Charcoal-grilled satay",
        story: "The last surviving stall from the old Satay Club, now run by the founder's son. Beef, chicken (thigh meat) and mutton skewers are handmade and grilled over charcoal, served with a peanut sauce made with dried shrimp.",
      },
      {
        name: "Hajjah Mona Nasi Padang",
        dish: "Nasi padang, rawon",
        story: "A family stall named after the founder, Razak Ismail's mother. Known for East Java-style rawon in buah keluak gravy, asam pedas, beef rendang and limpa rendang. Expect a queue.",
      },
      {
        name: "Geylang (Hamid's) Briyani Stall",
        dish: "Mutton briyani",
        story: "A three-generation family stall selling nasi briyani since 1964. Get the briyani kambing for tender, non-gamey mutton, or the slow-cooked chicken. Closed Mondays.",
      },
    ],
  },
  {
    id: 12,
    slug: "amoy-street-food-centre",
    name: "Amoy Street Food Centre",
    seoTitle:
      "Amoy Street Food Centre: Best Stalls & Michelin Picks | ShiokFlavour",
    seoDescription:
      "Amoy Street Food Centre guide: A Noodle Story ramen, Han Kee fish soup, J2 curry puffs, Hong Kee beef noodles and more Michelin Bib Gourmand stalls.",
    address: "7 Maxwell Road, Tanjong Pagar",
    lat: 1.279129,
    lng: 103.846985,
    region: "Central",
    tag: "Office Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/amoy-street.jpg",
    description:
      "A 1983 CBD hawker centre near Tanjong Pagar that is unusually dense with Michelin Bib Gourmand stalls and long weekday lunch queues.",
    mustTry: [
      "A Noodle Story",
      "Han Kee Fish Soup",
      "J2 Curry Puff",
      "Hong Kee Beef Noodles",
    ],
    famousFor:
      "An unusually high concentration of Michelin Bib Gourmand stalls, including A Noodle Story, Han Kee Fish Soup, J2 Famous Crispy Curry Puff and Hong Kee Beef Noodle.",
    michelinNote:
      "In the first Bib Gourmand list in 2016, four Amoy Street stalls were named: A Noodle Story, (J2) Famous Crispy Curry Puff, Hong Kee Beef Noodle and Hoo Kee Rice Dumpling. Han Kee Fish Soup joined in 2024. A Noodle Story, Han Kee and J2 are Bib Gourmands in the 2026 guide.",
    vibes: ["CBD lunch crowd", "Office workers", "Foodies", "Breakfast"],
    nearestMRT:
      "Telok Ayer (DT Line) — 3 min walk",
    tipForVisitors:
      "Come before 11:30am or after 1:30pm to dodge the CBD lunch rush. Many stalls cater to office hours, so some close by mid-afternoon.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$5–$12",
    story:
      "Amoy Street takes its name from Amoy, the Fujian port (now Xiamen) from which many Hokkien immigrants sailed to Singapore. The street appears on Coleman's 1836 map. The food centre came much later. It opened on 11 April 1983 in a Housing and Development Board building of 144 stalls, gathering hawkers who had worked the surrounding streets, among them Boon Tat, Cecil, Amoy and Telok Ayer. Some of that street history survives: the char kway teow stall at #01-01 traces its roots to Boon Tat Street in the 1960s. The centre has been renovated more than once, most recently with a three-month closure from October 2021 to January 2022. What sets it apart is its density of Michelin recognition. When the first Bib Gourmand list came out in 2016, four of its stalls made the cut, and Han Kee's mackerel fish soup was added in 2024. Weekday lunch brings office crowds and queues to match.",
    vibeCheck:
      "The CBD lunch hour, with a Michelin habit",
    timeline: [
      {
        year: "1983",
        event: "Amoy Street Food Centre opens on 11 April, rehousing hawkers from nearby streets including Boon Tat, Cecil, Amoy and Telok Ayer",
      },
      {
        year: "2016",
        event: "Four of its stalls (A Noodle Story, Famous Crispy Curry Puff, Hong Kee Beef Noodle, Hoo Kee Rice Dumpling) are named in Singapore's first Michelin Bib Gourmand list",
      },
      {
        year: "2021",
        event: "Closes on 11 October for a three-month renovation, reopening on 11 January 2022",
      },
      {
        year: "2024",
        event: "Han Kee Fish Soup is added to the Michelin Bib Gourmand list",
      },
    ],
    legendaryStalls: [
      {
        name: "A Noodle Story",
        dish: "Singapore-style ramen",
        story: "Founded in 2013 by Gwern Khoo and Ben Tham. Thin noodles with slow-cooked pork belly and wontons in a savoury broth: ramen reimagined through a Singaporean lens. It has held a Bib Gourmand since 2016.",
      },
      {
        name: "Han Kee Fish Soup",
        dish: "Sliced fish soup",
        story: "The longest lunch queue on the second floor, and it moves fast. The umami-rich mackerel broth comes with sliced fish over bee hoon or rice. Bib Gourmand since 2024; go early.",
      },
      {
        name: "J2 Famous Crispy Curry Puff",
        dish: "Curry puff",
        story: "Bib Gourmand curry puffs with flaky, crisp pastry in four flavours: classic chicken-potato curry, black pepper chicken, sardine and sweet taro. Buy a few to take back to the office.",
      },
      {
        name: "Hong Kee Beef Noodle",
        dish: "Hainanese beef noodles",
        story: "A Hainanese-style beef noodle stall with decades of history and a stock simmered for hours. Get it dry or in soup. Michelin Bib Gourmand.",
      },
    ],
  },
  {
    id: 13,
    slug: "tiong-bahru-market",
    name: "Tiong Bahru Market",
    seoTitle:
      "Tiong Bahru Market: Best Hawker Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Tiong Bahru Market food guide: Jian Bo chwee kueh, Hong Heng Hokkien mee, boneless chicken rice, Koh Brother pig's organ soup and Lor Mee 178.",
    address: "30 Seng Poh Road, Tiong Bahru",
    lat: 1.284683,
    lng: 103.832428,
    region: "Central",
    tag: "Hipster Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/tiong-bahru.jpg",
    description:
      "A market dating to 1951 in Singapore's first public housing estate. Wet market downstairs, Michelin Bib Gourmand hawkers on the floor above.",
    mustTry: [
      "Jian Bo Chwee Kueh",
      "Hong Heng Hokkien Mee",
      "Boneless Chicken Rice",
      "Pig's Organ Soup",
    ],
    famousFor:
      "Chwee kueh from Jian Bo, a family business since 1958, plus a cluster of Bib Gourmand hawkers on the second-floor food centre.",
    michelinNote:
      "Three stalls hold a Bib Gourmand in the 2026 MICHELIN Guide Singapore: Hong Heng Fried Sotong Prawn Mee (#02-01), Koh Brother Pig's Organ Soup (#02-29) and Tiong Bahru Hainanese Boneless Chicken Rice (#02-82). Jian Bo Shui Kueh (#02-05) is listed in the 2026 guide; Michelin's Bib Gourmand entry for 'Jian Bo Tiong Bahru Shui Kueh' is the Jurong West 505 outlet.",
    vibes: ["Hipsters", "Expats", "Families", "Weekend brunch", "Instagram-worthy"],
    nearestMRT:
      "Tiong Bahru (EW Line) — 10 min walk",
    tipForVisitors:
      "Pair with a walk around the Tiong Bahru art deco estate and indie cafes. Best on weekend mornings when the neighbourhood comes alive.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$10",
    story:
      "Tiong Bahru was one of Singapore's first public housing estates. The Singapore Improvement Trust built it in the 1930s to rehouse families from crowded Chinatown, and its low-rise Art Deco blocks still shape the neighbourhood. The market at its heart began as Seng Poh Road Market, a wooden structure with a zinc roof that opened in 1951 to give street hawkers a permanent home. It was revamped and renamed Tiong Bahru Market in 1993, then demolished in 2004. While a new building went up, hawkers traded from a temporary site on Kim Pong Road until the current market opened in 2006. Today the wet market fills the ground floor and more than 80 cooked food stalls fill the level above. Many carry long histories. Jian Bo's chwee kueh traces back to a pushcart in 1958, and Koh Brother's pig's organ soup began as a pushcart in 1955. Arrive early, because several favourites close by mid-afternoon.",
    vibeCheck:
      "Bib Gourmand hawkers above a neighbourhood wet market",
    timeline: [
      {
        year: "1951",
        event: "Seng Poh Road Market, a wooden structure with a zinc roof, opens as a permanent home for local hawkers",
      },
      {
        year: "2004",
        event: "The old market is demolished for redevelopment, and hawkers move to a temporary site on Kim Pong Road",
      },
      {
        year: "2006",
        event: "The new Tiong Bahru Market & Food Centre opens, with the wet market below and cooked food stalls upstairs",
      },
      {
        year: "2016",
        event: "Hong Heng Fried Sotong Prawn Mee is named in Singapore's first Michelin Bib Gourmand selection",
      },
      {
        year: "2025",
        event: "Market closes from 14 April to 13 July for a three-month refresh, then reopens in July",
      },
    ],
    legendaryStalls: [
      {
        name: "Jian Bo Shui Kueh",
        dish: "Chwee Kueh",
        story: "The business began as a pushcart in 1958 and is now run by the third generation. Order chwee kueh: soft steamed rice cakes under savoury preserved radish, with the house dried-shrimp sambal. Listed in the 2026 Michelin Guide.",
      },
      {
        name: "Hong Heng Fried Sotong Prawn Mee",
        dish: "Hokkien Mee",
        story: "Wetter-style Hokkien mee fried to order with prawns, squid and sliced fish, served with homemade chilli. It has been a Michelin Bib Gourmand since the first Singapore list in 2016. Open for lunch only, Tuesday to Saturday.",
      },
      {
        name: "Tiong Bahru Hainanese Boneless Chicken Rice",
        dish: "Chicken Rice",
        story: "Deboned Hainanese chicken, tender with little fat, over lightly turmeric-scented rice. Michelin inspectors also recommend the roast chicken. It holds a 2026 Bib Gourmand and is closed on Mondays.",
      },
      {
        name: "Koh Brother Pig's Organ Soup",
        dish: "Pig's Organ Soup",
        story: "A peppery broth with tripe, liver, meatballs and sliced pork, sharpened with salted mustard greens. It began as a pushcart in 1955, is now run by the founder's descendants, and holds a 2026 Michelin Bib Gourmand.",
      },
    ],
  },
  {
    id: 14,
    slug: "abc-brickworks-market",
    name: "ABC Brickworks Market",
    seoTitle:
      "ABC Brickworks Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "ABC Brickworks Food Centre guide: Bib Gourmand Ah Er Soup and Jason Penang Cuisine assam laksa, Jin Jin Dessert's Power Chendol, Fatty Cheong char siew.",
    address:
      "Blk 6 Jalan Bukit Merah, Bukit Merah",
    lat: 1.287010,
    lng: 103.808189,
    region: "Central",
    tag: "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/abc-brickworks.jpg",
    description:
      "Bukit Merah centre opened in 1974, with two 2026 Bib Gourmands (Ah Er Soup, Jason Penang Cuisine) and a famously over-the-top Jin Jin dessert stall.",
    mustTry: [
      "Jason Penang assam laksa",
      "Ah Er Soup herbal soups",
      "Jin Jin Power Chendol",
      "Fatty Cheong char siew rice",
    ],
    famousFor:
      "Two 2026 Bib Gourmand stalls: Ah Er Soup's slow-boiled Cantonese soups and Jason Penang Cuisine's mint-scented assam laksa.",
    michelinNote:
      "Ah Er Soup (listed by Michelin as Ar Er Soup, #01-141) and Jason Penang Cuisine (#01-112) hold Bib Gourmands in the 2026 MICHELIN Guide Singapore. Ah Er Soup first got the award in 2017.",
    vibes: ["Off the beaten path", "Local families", "Authentic experience", "Budget dining"],
    nearestMRT:
      "Redhill or Tiong Bahru (EW Line) — longer walk",
    tipForVisitors:
      "Many of the best stalls split into lunch and dinner sessions. Ah Er Soup and Jason Penang Cuisine both break between about 2pm and 5pm, so plan around their hours. Yuan Yuan Claypot Rice opens only for dinner.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$10",
    story:
      "ABC Brickworks has fed Bukit Merah since 1974. It is one of the older hawker centres in the city, with close to a hundred stalls under one roof. The name is usually traced to the Archipelago Brewery Company, whose brewery opened on Alexandra Road in 1933, though some accounts point to a brickworks instead. It has had more than one refresh. A 2020 renovation ran a month longer than planned because of the circuit breaker, and in 2026 the centre closed for two months for repairs and redecoration, returning with new flooring, brighter lighting and orange ceiling beams. The food draws more than the setting. Ah Er Soup ladles out MSG-free slow-boiled soups with pumpkin rice. Jason Penang Cuisine is run by Jason Khaw, who spent 14 years as resident chef to the British High Commissioner, and makes an assam laksa finished with fresh mint. Both are 2026 Bib Gourmands. Jin Jin's towering ices round off the meal.",
    vibeCheck: "Off the tourist map, deep on the locals' radar",
    timeline: [
      {
        year: "1974",
        event: "ABC Brickworks Food Centre opens on Jalan Bukit Merah.",
      },
      {
        year: "2017",
        event: "Ah Er Soup receives a Michelin Bib Gourmand.",
      },
      {
        year: "2020",
        event: "The centre closes from mid-March for repair and renovation works and reopens on 16 June, a month late because of the circuit breaker.",
      },
      {
        year: "2026",
        event: "The centre closes from 9 April to 7 June for repairs and redecoration, and reopens with new flooring, lighting and paint.",
      },
      {
        year: "2026",
        event: "Ah Er Soup and Jason Penang Cuisine are named Bib Gourmands in the 2026 MICHELIN Guide Singapore.",
      },
    ],
    legendaryStalls: [
      {
        name: "Ah Er Soup",
        dish: "Slow-boiled soups",
        story: "A 2026 Bib Gourmand serving MSG-free Cantonese soups. Try the ginseng black chicken soup or Buddha Jumps Over The Wall, with pumpkin rice. It gets crowded, so arrive early.",
      },
      {
        name: "Jason Penang Cuisine",
        dish: "Penang assam laksa",
        story: "A 2026 Bib Gourmand run by Jason Khaw, a former resident chef to the British High Commissioner. Order the tangy assam laksa with fresh mint, or the pork rib and prawn noodles.",
      },
      {
        name: "Jin Jin Hot/Cold Dessert",
        dish: "Power Chendol",
        story: "The dessert stop at ABC. Get the Power Chendol or the 'Gangster Ice' (Liu Mang Bing), a shaved-ice mountain topped with mango and durian. It opens from lunch into the evening.",
      },
      {
        name: "Fatty Cheong",
        dish: "Char siew rice",
        story: "Known for charcoal-roasted char siew marinated overnight. Ask for the fattier 'bu jian tian' cut, or get a combination plate with roast pork.",
      },
    ],
  },
  {
    id: 15,
    slug: "holland-drive-market-food-centre",
    seoTitle:
      "Holland Drive Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Holland Drive Food Centre near Buona Vista: Bib Gourmand Ru Ji Kitchen fishball noodles, New Lucky charcoal claypot rice, kway chap and nasi padang.",
    name:
      "Holland Drive Market & Food Centre",
    address:
      "Blk 44 Holland Drive, Buona Vista",
    lat: 1.308190,
    lng: 103.792839,
    region: "West",
    tag: "Budget Eats",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/buona-vista.webp",
    description:
      "Two-storey Buona Vista market with two 2026 Bib Gourmand stalls upstairs: Ru Ji Kitchen's fishball noodles and New Lucky's charcoal claypot rice.",
    mustTry: [
      "Ru Ji Kitchen fishball noodles",
      "New Lucky claypot rice",
      "Blanco Court Kueh Chap",
      "Shima's Kitchen nasi padang",
    ],
    famousFor:
      "Two 2026 Michelin Bib Gourmand stalls: Ru Ji Kitchen's handmade fishball noodles and New Lucky's charcoal-fired claypot rice.",
    michelinNote:
      "Ru Ji Kitchen (#02-28/29) and New Lucky Claypot Rice (#02-19) both hold Bib Gourmands in the 2026 MICHELIN Guide Singapore. New Lucky first got the award in 2017; Ru Ji Kitchen was promoted from Michelin Selected to Bib Gourmand in 2024.",
    vibes: ["Students", "Expats", "Families", "Pre-Holland Village stop"],
    nearestMRT:
      "Buona Vista (EW/CC Line) — short walk",
    tipForVisitors:
      "The hawker stalls are upstairs, above the wet market. New Lucky's claypot rice is cooked to order over charcoal, and one pot feeds two, so Michelin recommends calling ahead to pre-order and avoid a long wait.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$8",
    story:
      "Holland Drive Market & Food Centre stacks a wet market under a floor of cooked-food stalls, a short walk from Buona Vista MRT and next to Holland Village. Upstairs are two of the 2026 MICHELIN Guide's Bib Gourmands. New Lucky Claypot Rice goes back to 1979, when founder Choong Yee Hong opened it at the now-demolished Margaret Drive hawker centre after learning the trade in Chinatown. It moved several times before settling here, and it still cooks every pot to order over charcoal. Ru Ji Kitchen spreads across two side-by-side stalls, selling noodles in soup or dry with fish balls made on site from yellowtail. Its founder once helped his brother sell fishball noodles at nearby Ghim Moh. Around them is everyday food for the estate: kway chap from Blanco Court Kueh Chap, whose roots trace to the 1950s at the old Blanco Court, Hakka yong tau foo, and Malay nasi padang.",
    vibeCheck: "Holland Village's sensible, delicious secret",
    timeline: [
      {
        year: "1979",
        event: "Choong Yee Hong opens New Lucky Claypot Rice at the old Margaret Drive hawker centre. It later moves to Holland Drive.",
      },
      {
        year: "2017",
        event: "New Lucky Claypot Rice receives its first Michelin Bib Gourmand.",
      },
      {
        year: "2024",
        event: "Ru Ji Kitchen is promoted from Michelin Selected to Bib Gourmand.",
      },
      {
        year: "2026",
        event: "Both Ru Ji Kitchen and New Lucky Claypot Rice are Bib Gourmands in the 2026 MICHELIN Guide Singapore.",
      },
    ],
    legendaryStalls: [
      {
        name: "Ru Ji Kitchen",
        dish: "Fishball noodles",
        story: "A 2026 Bib Gourmand run across two adjacent stalls. Get the dry mee pok with springy fish balls made on site from yellowtail, or switch to bak chor mee. Go early, because it closes around lunchtime.",
      },
      {
        name: "New Lucky Claypot Rice",
        dish: "Charcoal claypot rice",
        story: "Started in 1979 and a Bib Gourmand since 2017. Each pot of chicken, Chinese sausage and salted fish is cooked from scratch over charcoal and feeds two. Pre-order to skip the wait.",
      },
      {
        name: "Blanco Court Kueh Chap",
        dish: "Kway chap",
        story: "A family kway chap business with roots in the 1950s at the long-gone Blanco Court food centre. The braise is lighter and milder than most, a good contrast to Cheng Heng's darker gravy nearby.",
      },
      {
        name: "Shima's Kitchen",
        dish: "Nasi padang",
        story: "A Muslim-owned Malay stall with breakfast first, then a wide nasi padang spread with dishes like curry chicken and mutton rendang. Popular dishes sell out early on weekdays.",
      },
    ],
  },
  {
    id: 16,
    slug: "clementi-448-market",
    name: "Clementi 448 Market",
    seoTitle:
      "Clementi 448 Market & Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Clementi 448 food guide: Michelin Bib Gourmand Song Fish Soup, the queue-worthy Fried Carrot Cake, Boon Kee wanton mee and Kee Hock hor fun.",
    address: "448 Clementi Avenue 3, Clementi",
    lat: 1.313350,
    lng: 103.764587,
    region: "West",
    tag: "Local Favourite",
    hours:
      "7am–9pm (stall hours vary)",
    imageUrl: "/images/hawkers/clementi-448.jpg",
    description:
      "Clementi's 1980-built market and food centre, home to Bib Gourmand fish soup, a 1960s-rooted carrot cake stall and old-school wanton mee.",
    mustTry: [
      "Song Fish Soup",
      "Fried Carrot Cake",
      "Wanton Mee",
      "Sliced Fish Hor Fun",
    ],
    famousFor:
      "Michelin Bib Gourmand fish soup from Song Fish Soup and the long morning queue at the third-generation Fried Carrot Cake stall.",
    michelinNote:
      "Song Fish Soup (#01-38) was a new Bib Gourmand entry in the MICHELIN Guide Singapore 2024 and is listed as Bib Gourmand in the 2026 guide.",
    vibes: ["West-side locals", "NUS students", "Families", "No-frills dining"],
    nearestMRT:
      "Clementi (EW Line) — 5 min walk",
    tipForVisitors:
      "Popular with NUS students and Clementi locals. Great authentic neighbourhood experience.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$8",
    story:
      "Clementi 448 Market & Food Centre was built in 1980 to serve the Clementi Avenue 3 estate, and it still pairs a wet market with roughly 50 cooked-food stalls. It sits between The Clementi Mall and the neighbourhood blocks, a short walk from Clementi MRT. Some of its cooks carry older histories: the Fried Carrot Cake stall began as a pushcart at Beo Crescent in the 1960s, moved to Tiong Bahru after redevelopment, and is now run by the founder's son and grandson, who still fry in batches while the queue waits. In 2024 Song Fish Soup, a fixture here for over a decade, earned a Michelin Bib Gourmand, and it remains on the 2026 list. After 46 years with its dark-brown and bright-green furniture, the centre closed on 30 March 2026 for three months of repairs, reopening on 29 June 2026 with brighter lighting, more fans, new tables and stools, and upgraded toilets.",
    vibeCheck: "Where three generations of students became regulars without planning to",
    timeline: [
      {
        year: "1980",
        event: "Clementi 448 Market & Food Centre built to serve the Clementi Avenue 3 estate",
      },
      {
        year: "2024",
        event: "Song Fish Soup (#01-38) named a new Bib Gourmand in the MICHELIN Guide Singapore",
      },
      {
        year: "2026",
        event: "Centre closes on 30 March for NEA repairs and renovation",
      },
      {
        year: "2026",
        event: "Reopens on 29 June with new lighting, extra fans, new tables and stools, upgraded toilets and wheelchair-friendly areas",
      },
    ],
    legendaryStalls: [
      {
        name: "Song Fish Soup",
        dish: "Fish soup",
        story: "Bib Gourmand since 2024. Order the sliced fish bee hoon soup as the benchmark, or the fried fish version for a milkier broth. Closed Sundays, with lunch and dinner sessions only.",
      },
      {
        name: "Fried Carrot Cake",
        dish: "Chai tow kway",
        story: "A third-generation stall that began as a 1960s pushcart at Beo Crescent. Fried in batches, so expect a queue; the white version showcases the chye poh and crisp egg. Closed Mondays.",
      },
      {
        name: "Boon Kee Wanton Noodle",
        dish: "Wanton mee",
        story: "A morning-to-early-afternoon stall at #01-40 serving wanton, dumpling and soya sauce chicken noodles. Go before it closes in the afternoon; closed Sundays.",
      },
      {
        name: "Kee Hock",
        dish: "Hor fun",
        story: "Cze char-style hor fun at #01-43. Reviewers single out the sliced fish or beef hor fun and the pork ribs rice. Ask for red chilli if you want more heat than the default green.",
      },
    ],
  },
  {
    id: 17,
    slug: "jurong-west-505-market",
    name: "Jurong West 505 Market",
    seoTitle:
      "Jurong West 505 Market & Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Jurong West 505 food guide: Bib Gourmand tutu kueh at Du Du, Soh Kee chicken porridge, Jian Bo chwee kueh and Hakka thunder tea rice.",
    address:
      "Blk 505 Jurong West Street 52, Jurong West",
    lat: 1.349700,
    lng: 103.718460,
    region: "West",
    tag: "Budget Eats",
    hours:
      "6am–9pm daily (stall hours vary)",
    imageUrl: "/images/hawkers/jurong-west-505.webp",
    description:
      "A Jurong West heartland food centre, refreshed in late 2024, home to Bib Gourmand tutu kueh and Cantonese porridge.",
    mustTry: [
      "Du Du tutu kueh",
      "Soh Kee chicken porridge",
      "Jian Bo chwee kueh",
      "Hakka thunder tea rice",
    ],
    famousFor:
      "Two Michelin Bib Gourmand stalls (Du Du's tutu kueh and Soh Kee's porridge) in an everyday neighbourhood food centre.",
    michelinNote:
      "In the MICHELIN Guide Singapore 2026, Dudu Cooked Food (#01-19, tutu kueh) and Soh Kee Cooked Food (#01-44, porridge) hold Bib Gourmand; Hoe Kee Kitchen (#01-39, chicken rice) is also listed in the guide.",
    vibes: ["West Singapore locals", "Budget dining", "Families", "Industrial workers"],
    nearestMRT:
      "Lakeside (EW Line) — short walk",
    tipForVisitors:
      "Many of the best stalls keep breakfast-to-afternoon hours and some close one or two days a week, so come in the morning and check stall days before travelling.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$3–$8",
    story:
      "Jurong West 505 Market & Food Centre sits at Hong Kah Point, a neighbourhood food centre that sources date to 1985, when it opened to feed the surrounding housing estates. It was revamped in 2009, and in September 2024 it closed again for renovation, reopening on 8 December 2024. Its regulars came back, and so did its best-known names. Du Du's tutu kueh, steamed rice-flour cakes filled with ground peanut or coconut, are best eaten hot, and the stall holds a Bib Gourmand in the 2026 Michelin Guide. So does Soh Kee Cooked Food, whose smooth Cantonese porridge with chicken, fish or cuttlefish is the kind of bowl people eat with a pinch of ginger and white pepper. Around them are dozens of stalls doing heartland staples: Jian Bo's chwee kueh, Hakka thunder tea rice, handmade fishball mee pok. The food here is everyday food done well, and it is never overpriced.",
    vibeCheck: "The West's most reliable, most honest, most complete hawker centre",
    timeline: [
      {
        year: "1985",
        event: "Food centre founded to serve residents of the surrounding housing estates",
      },
      {
        year: "2009",
        event: "Centre revamped",
      },
      {
        year: "2024",
        event: "Closed for renovation from 9 September; reopened on 8 December 2024",
      },
      {
        year: "2026",
        event: "Dudu Cooked Food and Soh Kee Cooked Food listed as Bib Gourmand in the MICHELIN Guide Singapore 2026",
      },
    ],
    legendaryStalls: [
      {
        name: "Du Du Cooked Food (Du Du Shou Shi)",
        dish: "Tutu kueh",
        story: "Steamed rice-flour cakes with peanut or coconut filling, chewy outside and sweet and nutty within. Michelin awarded it a Bib Gourmand in 2026 and advises eating them hot, so eat them at the stall. Closed Mondays.",
      },
      {
        name: "Soh Kee Cooked Food",
        dish: "Cantonese porridge",
        story: "Smooth, fragrant rice porridge with chicken, fish or cuttlefish. Chicken is the favourite. Add ginger, spring onion and white pepper. It holds a 2026 Bib Gourmand and opens only Thursday to Sunday, so check the days before going.",
      },
      {
        name: "Jian Bo Shui Kueh",
        dish: "Chwee kueh",
        story: "Teochew steamed rice cakes topped with salty preserved radish, with chee cheong fun too. This branch of the well-known Tiong Bahru name opens from early morning, so it's a natural breakfast stop.",
      },
      {
        name: "Traditional Hakka Lui Cha",
        dish: "Hakka thunder tea rice",
        story: "A bowl of rice with greens, nuts and tofu, served with a herbal green tea soup. Seth Lui reports it was named one of Singapore's Best Foods 2024. Morning-to-afternoon hours, closed Mondays.",
      },
    ],
  },
  {
    id: 18,
    slug: "yishun-park-hawker-centre",
    name: "Yishun Park Hawker Centre",
    seoTitle:
      "Yishun Park Hawker Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Yishun Park Hawker Centre guide: Michelin-listed Nasi Lemak Ayam Taliwang, Smokin' Joe charcoal grill, Ah Tan Wings har cheong gai, Munchi Pancakes.",
    address:
      "51 Yishun Avenue 11, Yishun",
    lat: 1.424911,
    lng: 103.844992,
    region: "North",
    tag: "Local Favourite",
    hours:
      "6am–10pm daily (stall hours vary)",
    imageUrl: "/images/hawkers/yishun-park.jpg",
    description:
      "Yishun's purpose-built hawker centre opposite Yishun Park, opened in 2017 with a mix of hawker classics and younger stalls.",
    mustTry: [
      "Nasi Lemak Ayam Taliwang",
      "Smokin' Joe BBQ chicken leg",
      "Ah Tan Wings har cheong gai",
      "Munchi min jiang kueh",
    ],
    famousFor:
      "A newer-generation hawker centre where Michelin-listed Indonesian-style nasi lemak sits beside charcoal-grilled Western food, prawn paste chicken and modern min jiang kueh.",
    michelinNote:
      "Nasi Lemak Ayam Taliwang (#01-33) is listed in the MICHELIN Guide Singapore 2026 (not Bib Gourmand); it was first recognised by the Guide in 2021.",
    vibes: ["North Singapore locals", "Young families", "Modern hawker experience"],
    nearestMRT:
      "Yishun (NS Line) — then bus 806, 3 stops",
    tipForVisitors:
      "The centre isn't beside an MRT station, so take bus 806 from Yishun Bus Interchange (three stops) or drive — it has its own multi-storey carpark. NEA closes it for cleaning a few days each quarter, so check the schedule first.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$12",
    story:
      "Yishun Park Hawker Centre opened on 20 September 2017 at the junction of Yishun Avenue 11 and Yishun Ring Road, facing Yishun Park. For its first nine years it was run by Timbre Group, which treated it as a place to try new ideas: a tray-return deposit, a play area by the entrance, and a line-up that mixed hawker staples with younger concepts. Several of those early tenants have since grown well beyond Yishun. Munchi Pancakes moved its min jiang kueh here in 2017 and is now a chain. Ah Tan Wings opened its first permanent stall here after a run of pop-ups. Nasi Lemak Ayam Taliwang, a Muslim-owned Indonesian-style nasi lemak stall that began here in 2017, has been recognised by the MICHELIN Guide Singapore. In July 2026, after an NEA tender, management passed to Canopy Hawkers Group, with existing stallholders allowed to stay. The draw is unchanged: more than 40 cooked-food stalls under one high roof, priced for the neighbourhood.",
    vibeCheck: "New building, old soul — the North feeds its own well",
    timeline: [
      {
        year: "2017",
        event: "Yishun Park Hawker Centre opens on 20 September, managed by Timbre Group",
      },
      {
        year: "2021",
        event: "Nasi Lemak Ayam Taliwang is recognised in the MICHELIN Guide Singapore",
      },
      {
        year: "2024",
        event: "NEA carries out repairs and redecoration works at the centre (July–October)",
      },
      {
        year: "2026",
        event: "NEA appoints Canopy Hawkers Group as operator; it takes over from Timbre+ on 20 July",
      },
    ],
    legendaryStalls: [
      {
        name: "Nasi Lemak Ayam Taliwang",
        dish: "Nasi lemak with ayam taliwang",
        story: "The original outlet of a Muslim-owned stall that started here in 2017 and is listed in the MICHELIN Guide. Order the namesake plate: coconut rice with Indonesian-style spicy grilled chicken and sambal — mix the chilli through the rice.",
      },
      {
        name: "Smokin' Joe",
        dish: "Charcoal-grilled Western",
        story: "A charcoal-grill Western stall that has been here since the centre opened in 2017. The BBQ boneless chicken leg is the everyday order; steaks and lamb rack are there when you want to splurge.",
      },
      {
        name: "Ah Tan Wings",
        dish: "Har cheong gai",
        story: "Prawn paste chicken from a young hawker who started out at pop-up food events before opening his first permanent stall here. Get the wings or the 'atas' cutlet, crisp outside and pungent with prawn paste.",
      },
      {
        name: "Munchi Pancakes",
        dish: "Min jiang kueh",
        story: "Started in a Yishun coffee shop in 2016 and moved here in 2017; this is now the brand's original store. Classic peanut is the benchmark, while charcoal and matcha skins with modern fillings show why it took off.",
      },
    ],
  },
  {
    id: 19,
    slug: "sembawang-hills-food-centre",
    name: "Sembawang Hills Food Centre",
    seoTitle:
      "Sembawang Hills Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Sembawang Hills Food Centre on Upper Thomson Road: Jing Ji Teochew fishball noodles, Ping Kee Popiah, Jia Jia Xing pig's organ soup and chwee kueh.",
    address:
      "590 Upper Thomson Road, Upper Thomson",
    lat: 1.372420,
    lng: 103.829033,
    region: "North",
    tag:
      "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/sembawang-hills.jpg",
    description:
      "A compact, 1970s-era food centre on Upper Thomson Road known for old-school breakfast and lunch: fishball noodles, popiah and pig's organ soup.",
    mustTry: [
      "Jing Ji fishball noodles",
      "Ping Kee popiah",
      "Jia Jia Xing pig's trotter",
      "Chwee kueh",
    ],
    famousFor:
      "Old-school morning and lunchtime hawker fare — Teochew fishball and meatball noodles, hand-rolled popiah, pig's organ soup and chwee kueh — in a small single-storey centre.",
    michelinNote:
      "",
    vibes: ["Late night supper", "North locals", "Durian lovers", "Families"],
    nearestMRT:
      "Mayflower (TE Line) — short walk",
    tipForVisitors:
      "Come for breakfast or lunch: Jing Ji Fishball Noodle closes around 1pm and isn't open every day, and many stalls wind down by mid-afternoon. NEA closes the centre for cleaning a few days each year, so check the schedule before a special trip.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$3–$8",
    story:
      "Despite its name, Sembawang Hills Food Centre is nowhere near Sembawang. It sits on Upper Thomson Road beside the private Sembawang Hills estate it was built to serve, and some still know it as Jalan Leban Food Centre. NEA records it as built in 1974. An upgrading in the early 2000s replaced its roof, tiles and facade and trimmed it to 36 stalls, leaving a compact single-storey centre of two rows that trades mostly in old-school breakfast and lunch fare. That is the point of coming. Jing Ji Fishball Noodle has been making Teochew meatballs and fishballs for decades. Ping Kee Popiah, run by an elderly couple, sells only popiah and kueh pie tee. Jia Jia Xing ladles out clean-tasting pig's organ soup and trotters in braised sauce, and a shui kueh stall here was singled out by the MICHELIN Guide's writers in 2017 for its firm chwee kueh and dried-shrimp chye poh. Arrive in the morning; the best stalls sell out early.",
    vibeCheck: "Where Upper Thomson comes alive after midnight",
    timeline: [
      {
        year: "1974",
        event: "Sembawang Hills Food Centre is built on Upper Thomson Road to serve the surrounding estate",
      },
      {
        year: "2003",
        event: "Upgrading works (new roof, tiles and facade) are completed; stall count reduced to 36",
      },
      {
        year: "2017",
        event: "MICHELIN Guide article features the centre's Sembawang Hills Shui Kueh in a chwee kueh round-up",
      },
    ],
    legendaryStalls: [
      {
        name: "Jing Ji Fishball Noodle",
        dish: "Teochew fishball noodles",
        story: "A decades-old family stall known for big, juicy Teochew meatballs alongside bouncy fishballs. Order the meatball noodles dry with mee pok; go early, as meatballs sell out and the stall keeps short hours.",
      },
      {
        name: "Ping Kee Popiah",
        dish: "Popiah",
        story: "An elderly couple selling just two things: popiah and kueh pie tee. Get a roll or two of popiah and a set of kueh pie tee; the stall is reportedly over 30 years old.",
      },
      {
        name: "Jia Jia Xing Pig's Organ Soup",
        dish: "Pig's organ soup",
        story: "Clean-tasting pig's organ soup with lean pork and meatballs, but the pig's trotter in braised sauce is the order to pair with yam rice.",
      },
    ],
  },
  {
    id: 20,
    slug: "chong-pang-market",
    name: "Chong Pang Market",
    seoTitle:
      "Chong Pang Market: Best Stalls & Michelin Picks | ShiokFlavour",
    seoDescription:
      "Chong Pang Market in Yishun: Bib Gourmand Hainan Zi char kway teow, Ji De Lai chicken rice, Xiang Xiang fishball noodles and Old Chong Pang ngoh hiang.",
    address:
      "Blk 104/105 Yishun Ring Road, Yishun",
    lat: 1.431658,
    lng: 103.828072,
    region: "North",
    tag: "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/chong-pang.jpg",
    description:
      "Yishun's big 1984 market and food centre, home to two Bib Gourmand stalls and long-running family hawkers, before a planned move to Chong Pang City.",
    mustTry: [
      "Hainan Zi char kway teow",
      "Ji De Lai chicken rice",
      "Xiang Xiang fishball noodles",
      "Old Chong Pang ngoh hiang",
    ],
    famousFor:
      "Two MICHELIN Bib Gourmand stalls — Hainan Zi's wok-fried char kway teow and Ji De Lai's Hainanese chicken rice — plus decades-old family stalls.",
    michelinNote:
      "Two Bib Gourmand stalls in the MICHELIN Guide Singapore 2026: Hainan Zi (#01-129), on the list since 2021, and Ji De Lai Hainanese Chicken Rice (#01-152), added in 2023.",
    vibes: ["North Singapore locals", "Yishun residents", "Families", "Weekend market"],
    nearestMRT:
      "Yishun (NS Line) — short walk",
    tipForVisitors:
      "Go in the morning: many stalls, such as Xiang Xiang Fishball Noodle, open early and close by mid-afternoon, and stall hours vary widely. The wet market shares the complex, so it's a good stop for groceries too.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$3–$8",
    story:
      "Chong Pang takes its name from Lim Chong Pang, son of the pioneer Lim Nee Soon; the village once called Westhill was renamed in his honour in 1956. The market and food centre at Blocks 104 and 105 Yishun Ring Road came later, built in 1984 as Yishun New Town grew, and was upgraded in 2003. It is one of the North's largest hawker complexes, with 56 cooked-food stalls alongside 123 market stalls, and it holds two MICHELIN Bib Gourmand stalls: Hainan Zi, cooking char kway teow and fried oyster to order, recognised since 2021, and Ji De Lai Hainanese Chicken Rice, added in 2023. Long-running family stalls give the place its continuity. Xiang Xiang Fishball Noodle has been here since the early years and is now run by the founder's son; Old Chong Pang Wu Xiang still fries ngoh hiang to order. That continuity is about to be tested. The stalls are expected to move into the new Chong Pang City development, slated for completion in 2027, and this site will become a community plaza.",
    vibeCheck: "Old Singapore energy, running on full",
    timeline: [
      {
        year: "1956",
        event: "Westhill Village is renamed Chong Pang Village in honour of Lim Chong Pang",
      },
      {
        year: "1984",
        event: "Chong Pang Market & Food Centre is built at Blk 104/105 Yishun Ring Road",
      },
      {
        year: "2003",
        event: "Centre is upgraded under the Hawker Centres Upgrading Programme",
      },
      {
        year: "2021",
        event: "Hainan Zi is named a MICHELIN Bib Gourmand",
      },
      {
        year: "2023",
        event: "Ground broken for Chong Pang City, the centre's future home; Ji De Lai Hainanese Chicken Rice joins the Bib Gourmand list",
      },
    ],
    legendaryStalls: [
      {
        name: "Hainan Zi",
        dish: "Char kway teow",
        story: "Yishun's first Bib Gourmand stall, on the list since 2021. Char kway teow is fried to order with cockles and Chinese sausage and real wok hei; the fried oyster and carrot cake are worth adding.",
      },
      {
        name: "Ji De Lai Hainanese Chicken Rice",
        dish: "Hainanese chicken rice",
        story: "Bib Gourmand since 2023. Choose steamed or roasted; MICHELIN praises the springy-skinned steamed chicken and lightly seasoned rice. Sets with soup and greens are good value.",
      },
      {
        name: "Xiang Xiang Fishball Noodle",
        dish: "Fishball noodles",
        story: "A family stall at Chong Pang for about four decades, now run by the second generation. Order the dry mee pok or mee kia with fresh fishballs; it opens early and closes mid-afternoon.",
      },
      {
        name: "Old Chong Pang Wu Xiang Xia Bing",
        dish: "Ngoh hiang",
        story: "A long-running ngoh hiang stall that fries to order. Build a plate of liver roll, egg-chestnut pancake, prawn cracker and pink pork sausage, with bee hoon on the side.",
      },
    ],
  },
  {
    id: 21,
    slug: "marsiling-mall-hawker-centre",
    seoTitle:
      "Marsiling Mall Hawker Centre (ex-Woodlands Centre): Best Stalls | ShiokFlavour",
    seoDescription:
      "Marsiling Mall Hawker Centre, new home of the old Woodlands Town Centre hawkers: Yan Ji Seafood Soup, Ye Lai Xiang Laksa, Sin Heng Kee porridge and more.",
    name:
      "Marsiling Mall Hawker Centre",
    address:
      "4 Woodlands Street 12, Marsiling",
    lat: 1.433543,
    lng: 103.779881,
    region: "North",
    tag: "Budget Eats",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/food/laksa.jpg",
    description:
      "The old Woodlands Town Centre food centre is gone. Its hawkers moved to Marsiling Mall in 2017, bringing seafood soup, laksa and porridge.",
    mustTry: [
      "Yan Ji seafood soup",
      "Ye Lai Xiang laksa",
      "Sin Heng Kee porridge",
      "Lian Xiang fried hokkien mee",
    ],
    famousFor:
      "Hawkers who moved over from the demolished Old Woodlands Town Centre, led by Yan Ji's seafood soup and Ye Lai Xiang's laksa.",
    michelinNote:
      "",
    vibes: ["Woodlands locals", "Budget dining", "Families", "Near Causeway"],
    nearestMRT:
      "Marsiling (NS Line) — short walk",
    tipForVisitors:
      "Several of the old-timers keep morning-to-afternoon hours and close one day a week (Ye Lai Xiang closes Thursdays, Yan Ji closes Mondays), so plan for lunch.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$10",
    story:
      "The food centre this page once described no longer exists. The Old Woodlands Town Centre, completed in 1980 beside the Causeway, gave street hawkers a permanent home in the early 1980s. It lost its bustle after the town's centre of gravity moved to Woodlands MRT in the 1990s, its low-rise blocks were chosen for en-bloc redevelopment in 2012, and it closed on 30 November 2017. The land went to the Woodlands Checkpoint extension. NEA had already begun building a replacement in 2016, at Woodlands Street 12 near Marsiling, and most of the stallholders made the short move to Marsiling Mall Hawker Centre. Familiar names came with them: Yan Ji Seafood Soup, Ye Lai Xiang Laksa and Hua Li Fried Carrot Cake were all at 4A Woodlands Centre Road in 2016 and are at Marsiling Mall today. For those who remember the old town centre, this is where its cooking continues.",
    vibeCheck: "Singapore's northern gate — where every meal fuels a crossing",
    timeline: [
      {
        year: "1980",
        event: "Woodlands New Town centre completed near the Causeway; street hawkers resettled into its new hawker centre in the early 1980s",
      },
      {
        year: "2012",
        event: "Old Woodlands Town Centre's low-rise blocks selected for the Selective En bloc Redevelopment Scheme",
      },
      {
        year: "2016",
        event: "NEA began building the replacement hawker centre at Woodlands Street 12 and Woodlands Avenue 3 (January)",
      },
      {
        year: "2017",
        event: "Old Woodlands Town Centre closed on 30 November; most of its hawkers moved to the new Marsiling Mall Hawker Centre",
      },
    ],
    legendaryStalls: [
      {
        name: "Yan Ji Seafood Soup",
        dish: "Seafood soup",
        story: "A seafood soup stall with over three decades of history that moved over from the old Woodlands Centre Road food centre. Order the crayfish seafood soup, plus braised pig trotters on the side. Closed Mondays.",
      },
      {
        name: "Ye Lai Xiang Laksa",
        dish: "Laksa",
        story: "A Woodlands Centre Road veteran that is still drawing laksa fans at Marsiling Mall. It also does prawn noodles and pork rib soup. Closes mid-afternoon and on Thursdays.",
      },
      {
        name: "Sin Heng Kee Porridge",
        dish: "Porridge",
        story: "Opens at dawn with around 20 kinds of Cantonese-style porridge. Get the signature bowl. A good early breakfast option.",
      },
      {
        name: "Lian Xiang Shu Shi",
        dish: "Fried hokkien mee",
        story: "Moved in from the Old Woodlands Town Centre when Marsiling Mall opened in 2017. Known for dry fried hokkien prawn mee and cockle-laden kway teow mee. Closed Sundays.",
      },
    ],
  },
  {
    id: 22,
    slug: "toa-payoh-lorong-8-market",
    name: "Toa Payoh Lorong 8 Market",
    seoTitle:
      "Toa Payoh Lorong 8 Market & Food Centre: Best Stalls | ShiokFlavour",
    seoDescription:
      "Toa Payoh Lorong 8 hawker guide: Hock Kee peppery bak kut teh, Guan Kee kway chap, Hai Kee wanton noodles and handmade mee hoon kway.",
    address:
      "Blk 210 Lorong 8 Toa Payoh, Toa Payoh",
    lat: 1.340330,
    lng: 103.854462,
    region: "Central",
    tag: "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/food/bak-kut-teh.jpg",
    description:
      "A busy Toa Payoh neighbourhood food centre with about 80 stalls, known for peppery bak kut teh, kway chap, handmade mee hoon kway and wanton noodles.",
    mustTry: [
      "Hock Kee Bak Kut Teh",
      "Guan Kee Kway Chap",
      "Hai Kee wanton noodles",
      "Nine Stone mee hoon kway",
    ],
    famousFor:
      "Long-running hawker stalls serving peppery bak kut teh, kway chap, handmade mee hoon kway and family-made wanton noodles.",
    michelinNote:
      "",
    vibes: ["Toa Payoh locals", "Heritage food", "Families", "No-frills"],
    nearestMRT:
      "Braddell (NS Line) — 15 min walk",
    tipForVisitors:
      "Many stalls take a weekly rest day and several close by mid-afternoon, so go for breakfast or lunch if you want the noodle stalls. Braddell MRT is closer than Toa Payoh MRT.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$8",
    story:
      "Lorong 8 is a quieter corner of Toa Payoh, where flatted factories and industrial buildings sit beside HDB blocks and a primary school. The food centre at Block 210 serves all of them, with around 80 cooked-food stalls under one roof. Many of its best-known stalls are family businesses. Hock Kee has been ladling peppery Singapore-style bak kut teh for more than four decades. Guan Kee's kway chap stall is decades old too, and its daughter now runs a second branch at Sembawang Hills. At Hai Kee, a mother still hand-wraps the wantons and dumplings while her son, the third generation, cooks the noodles. Nine Stone Avenue takes its name from the old Seletar Hills Food Centre where the family brand began, and the founder's sons now knead and tear its mee hoon kway. The centre reopened after a two-month repair and redecoration closure in late 2025. Younger hawkers have joined the old guard since then.",
    vibeCheck: "Singapore's original new town, still feeding its own the original way",
    timeline: [
      {
        year: "2023",
        event: "Original Simon Road Hokkien Mee founder Mr Heng opens a second outlet at the market (reported January 2023)",
      },
      {
        year: "2023",
        event: "Guan Kee Kway Chap opens a second branch at Sembawang Hills Food Centre on 24 September and keeps its Lorong 8 stall",
      },
      {
        year: "2025",
        event: "Centre closes for repairs and redecoration from 22 September to 24 November",
      },
      {
        year: "2026",
        event: "New hokkien mee stall HERNG 好吃 opens at #01-52 in June",
      },
    ],
    legendaryStalls: [
      {
        name: "Hock Kee (Lor. 8) Bak Kut Teh",
        dish: "Peppery bak kut teh",
        story: "An elderly aunty has run this stall for more than 40 years. Order the Singapore-style peppery pork-rib soup, or the pig trotters or liver and kidney soup if you like offal. (#01-64)",
      },
      {
        name: "Guan Kee Kway Chap",
        dish: "Kway chap",
        story: "A decades-old stall that many regulars rank among Singapore's best kway chap. Get the set with smooth rice sheets, tau kwa, braised egg, pig trotters and innards that are known to be cleaned carefully. (#01-24)",
      },
      {
        name: "Hai Kee Noodle",
        dish: "Wanton & dumpling noodles",
        story: "A third-generation stall run by a mother and son. She hand-makes the wantons and dumplings and he cooks. There are just three noodle dishes, and the chicken feet noodles are worth trying. Closes mid-afternoon. (#01-59)",
      },
      {
        name: "Nine Stone Avenue (Seletar) Mee Hoon Kway & Sheng Mian",
        dish: "Mee hoon kway",
        story: "Formerly Seletar Sheng Mian, a family brand that began at the old Seletar Hills Food Centre. The founder's sons now make the handmade mee hoon kway, served dry or in pork-bone soup with a runny egg and ikan bilis. Expect queues. (#01-05)",
      },
    ],
  },
  {
    id: 23,
    slug: "golden-shoe-market-street",
    seoTitle:
      "Market Street Hawker Centre (Golden Shoe): Best Stalls | ShiokFlavour",
    seoDescription:
      "Market Street Hawker Centre (ex-Golden Shoe) at CapitaSpring: Golden Nur briyani, Ah Liang Ipoh hor fun, Yummy Nyonya rendang and wanton mee.",
    name:
      "Market Street Hawker Centre (Golden Shoe)",
    address:
      "CapitaSpring, 86 Market Street (levels 2–3), Raffles Place",
    lat: 1.284076,
    lng: 103.850105,
    region: "Central",
    tag: "Office Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/golden-shoe.jpg",
    description:
      "The old Golden Shoe hawker centre, reborn in 2022 on two floors of CapitaSpring, feeding Raffles Place on weekday lunches.",
    mustTry: [
      "Golden Nur chicken briyani",
      "Ah Liang Ipoh hor fun",
      "Yummy Nyonya beef rendang",
      "Wanton mee",
    ],
    famousFor:
      "Weekday CBD lunches, with long-running stalls that followed the centre from Golden Shoe Car Park to CapitaSpring.",
    michelinNote:
      "",
    vibes: ["Office workers", "Weekday lunch", "CBD", "Quick meals"],
    nearestMRT:
      "Raffles Place (EW/NS Line) — 2 min walk",
    tipForVisitors:
      "Most stalls trade Monday to Friday only and many close by mid-afternoon, so plan a weekday lunch. Beat the 12–1pm office rush if you want Ah Liang's hor fun without a long queue.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$5–$10",
    story:
      "Locals still call it Golden Shoe. The name comes from the shoe-shaped 80-acre slice of prime land that became Singapore's financial district, not from the hawker centre. The centre opened in 1984 on the upper floors of the new Golden Shoe Car Park, and some of its first stalls were street hawkers from Market Street. It fed Raffles Place for 33 years until the stalls closed on 31 July 2017 to make way for CapitaSpring. The hawkers spent the next few years in an interim centre on Cross Street beside Telok Ayer MRT. On 5 April 2022 they reopened with 56 stalls on the second and third floors of the 51-storey tower, on the same site. Many old faces made the journey. Golden Nur still serves the crispy chicken briyani it first sold at Golden Shoe, and Yummy Nyonya Peranakan moved its rendang over too. The rhythm hasn't changed. This is a weekday lunch room, busiest when the offices empty at noon.",
    vibeCheck: "The CBD's best lunch eaten fastest by the people who can least afford to stop",
    timeline: [
      {
        year: "1984",
        event: "Market Street Food Centre opens in the new Golden Shoe Car Park and becomes known as Golden Shoe Hawker Centre",
      },
      {
        year: "2017",
        event: "Stalls close on 31 July; hawkers move to an interim centre on Cross Street by Telok Ayer MRT",
      },
      {
        year: "2018",
        event: "Ground broken in February on the Golden Shoe Car Park redevelopment (CapitaSpring)",
      },
      {
        year: "2022",
        event: "Reopens on 5 April as Market Street Hawker Centre, with 56 stalls on levels 2–3 of CapitaSpring",
      },
    ],
    legendaryStalls: [
      {
        name: "Golden Nur",
        dish: "Crispy chicken briyani",
        story: "A family business that started at the old Golden Shoe Hawker Centre and has followed the centre ever since. It is Muslim-owned. The crispy chicken briyani is the signature, and the curry chicken rice and mutton briyani are also good. Weekdays only.",
      },
      {
        name: "Ah Liang Ipoh Hor Fun",
        dish: "Shredded chicken hor fun",
        story: "Silky Ipoh-style kway teow in savoury gravy with shredded chicken. Add the fried fish dumplings. It often has the centre's longest lunch queue.",
      },
      {
        name: "Yummy Nyonya Peranakan",
        dish: "Nyonya rice & rendang",
        story: "A Peranakan family's mix-and-match Nyonya rice stall, first opened at Golden Shoe in 2013. The tender beef rendang is the pick. Ayam buah keluak and chap chye are also on offer. Weekdays only.",
      },
    ],
  },
  {
    id: 24,
    slug: "hong-lim-market-food-centre",
    name: "Hong Lim Market & Food Centre",
    seoTitle:
      "Hong Lim Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Hong Lim Food Centre guide: Outram Park char kway teow, Ji Ji wanton noodle, Tai Wah bak chor mee and Heng Kee curry chicken bee hoon.",
    address:
      "Blk 531A Upper Cross Street, Chinatown",
    lat: 1.284470,
    lng: 103.845863,
    region: "Central",
    tag: "Michelin Alert",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/hong-lim.jpg",
    description:
      "A two-storey Chinatown-edge hawker centre from 1978 with four Bib Gourmand stalls and serious lunch queues.",
    mustTry: [
      "Outram Park char kway teow",
      "Ji Ji char siew wanton mee",
      "Tai Wah bak chor mee",
      "Heng Kee curry chicken mee",
    ],
    famousFor:
      "One of Singapore's densest clusters of Bib Gourmand stalls, led by Outram Park Fried Kway Teow Mee's smoky char kway teow.",
    michelinNote:
      "Four stalls hold Bib Gourmand in the 2026 MICHELIN Guide Singapore: Outram Park Fried Kway Teow Mee (#02-17), Ji Ji Noodle House (#02-48/49), Tai Wah Pork Noodle (#02-16) and Heng Kee (#01-58).",
    vibes: ["Foodies", "Chinatown", "Michelin hunters", "Lunch queues"],
    nearestMRT:
      "Chinatown (NE/DT Line) — short walk",
    tipForVisitors:
      "This is a lunch-crowd centre. Many top stalls close by mid-afternoon and on Sundays, and Outram Park's char kway teow queue can run past an hour. Arrive before 11.30am or after 1.30pm.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$5–$10",
    story:
      "Hong Lim Market & Food Centre opened in 1978 as one of the city's earliest hawker centres. It took in most of the street hawkers from nearby Hokkien Street. Some of today's best-known stalls are older than the building. Ji Ji Noodle House began as a pushcart on Chulia Street in 1965, moved here in 1978 and is now run by the family's third generation. Heng Kee's curry chicken bee hoon goes back to a pushcart on Synagogue Street. Today the two storeys hold over a hundred stalls and are packed at lunchtime with CBD office workers. They queue at Outram Park Fried Kway Teow Mee for smoky plates of char kway teow with egg and cockles, at Tai Wah for bak chor mee, and at Heng Kee for a gentle curry broth with tofu puffs. Four of these stalls hold Bib Gourmand in the 2026 MICHELIN Guide Singapore. Even so, the centre feels more like a neighbourhood canteen than a tourist stop.",
    vibeCheck: "Chinatown's most serious hawker centre — no shortcuts, no shortcuts accepted",
    timeline: [
      {
        year: "1965",
        event: "Ji Ji's family starts selling wanton noodles from a pushcart on Chulia Street",
      },
      {
        year: "1978",
        event: "Hong Lim Market & Food Centre opens, taking in most of the street hawkers from Hokkien Street",
      },
      {
        year: "1978",
        event: "Ji Ji moves its wanton mee into the new centre",
      },
      {
        year: "2026",
        event: "Four stalls hold Bib Gourmand: Outram Park, Ji Ji, Tai Wah and Heng Kee",
      },
    ],
    legendaryStalls: [
      {
        name: "Outram Park Fried Kway Teow Mee",
        dish: "Char kway teow",
        story: "Bib Gourmand and one of Singapore's best-known char kway teow stalls. The noodles are smoky and come with egg and cockles; add extra of either. Waits can stretch to an hour or more. Closed Sundays.",
      },
      {
        name: "Ji Ji Noodle House",
        dish: "Char siew wanton mee",
        story: "Bib Gourmand. This family business began on a Chulia Street pushcart in 1965 and is now run by third-generation sisters. Get the signature bowl with char siew, fried wanton, pork crackling and the homemade chilli.",
      },
      {
        name: "Tai Wah Pork Noodle",
        dish: "Bak chor mee",
        story: "Bib Gourmand. Its bak chor mee comes with meatballs, dried fish and pork liver, dry or in soup. It is often confused with Hill Street Tai Hwa Pork Noodle in Crawford Lane; this is the Hong Lim stall at #02-16. Closed Mondays.",
      },
      {
        name: "Heng Kee Curry Chicken Bee Hoon Mee",
        dish: "Curry chicken bee hoon",
        story: "Bib Gourmand. It was founded in the 1970s and is now run by the second generation. The curry is mild and well balanced, with custom-made tofu puffs, fish cake and tender chicken. It is on level 1, not the similarly named Ah Heng upstairs.",
      },
    ],
  },
  {
    id: 25,
    slug: "peoples-park-food-centre",
    name: "People's Park Food Centre",
    seoTitle:
      "People's Park Food Centre (Chinatown): Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "What to eat at People's Park Food Centre in Chinatown: mala xiang guo, loh mei, old-school dim sum buns and xiao long bao, plus the market's 100-year story.",
    address: "32 New Market Road, Chinatown",
    lat: 1.284871,
    lng: 103.842590,
    region: "Central",
    tag: "Local Favourite",
    hours: "Hours vary by stall",
    imageUrl: "/images/hawkers/peoples-park.jpg",
    description:
      "One of Singapore's oldest market sites, now a busy Chinatown food centre where Sichuan mala and Shanghainese dumplings sit beside old-school Cantonese dim sum and braised meats.",
    mustTry: [
      "Mala Xiang Guo",
      "Loh Mei",
      "Dim Sum Buns",
      "Xiao Long Bao",
      "Yong Tau Foo",
      "Lor Mee",
    ],
    famousFor:
      "A Chinatown food centre with a strong Sichuan and northern Chinese streak, from mala to dumplings, next to old Cantonese favourites like loh mei and char siew bao.",
    michelinNote: "",
    vibes: ["Chinatown locals", "Families", "Heritage flavours", "Budget dining"],
    nearestMRT: "Chinatown (NE/DT Line) — 3 min walk",
    tipForVisitors:
      "Pair it with a wander through Chinatown: People's Park Complex is a short walk away on Park Road.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "People's Park Food Centre stands on one of the oldest market sites in Singapore. The municipality set up a food shelter for street hawkers here in 1923, and by 1940 it had grown into the island's largest market, famous for durian stalls that traded until two in the morning. A fire in December 1966 destroyed 186 stalls and shops. The three-storey complex that replaced it opened in 1969, with food stalls on the ground floor and homes stacked above. Today the food tells the story of a changing Chinatown: Sichuan mala and Chongqing grilled fish from newer arrivals, Shanghainese dumpling stalls, and old Cantonese hands still steaming char siew bao and braising loh mei the way their customers' grandparents knew it.",
    vibeCheck: "A brutalist icon that feeds its community the way it always has — without apology",
    timeline: [
      {
        year: "1923",
        event: "The municipality sets up a food shelter for street hawkers on the site",
      },
      {
        year: "1940",
        event: "Now Singapore's largest market, with 323 stalls and durian sellers trading until 2am",
      },
      {
        year: "1966",
        event: "A December fire destroys 186 stalls and shops",
      },
      {
        year: "1969",
        event: "The new three-storey complex opens, with 75 food stalls on the first floor",
      },
      {
        year: "2005",
        event: "A S$5 million upgrade under the Hawker Centres Upgrading Programme",
      },
    ],
    legendaryStalls: [
      {
        name: "Ri Ri Hong Ma La Xiang Guo",
        dish: "Mala Xiang Guo",
        story: "One of Chinatown's best-known mala stalls. Fill a bowl with vegetables, meat and seafood, pay by what you pick, then choose your heat. Start at mild: the numbing Sichuan pepper builds with every mouthful.",
      },
      {
        name: "Loh Mei Specialist",
        dish: "Loh Mei",
        story: "A dish you rarely see any more: braised pork, offal and other cuts in a sweet, savoury fermented bean curd sauce. Old-school Cantonese comfort, and one of the few stalls left that still does it.",
      },
      {
        name: "Chop Hean Kuan",
        dish: "Dim Sum Buns",
        story: "Char siew bao, siew mai and egg tarts at hawker prices, the kind of stall where people buy a dozen at a time to take back to the office or home for breakfast.",
      },
      {
        name: "Jin Feng Mei Shi",
        dish: "Xiao Long Bao",
        story: "Soup-filled xiao long bao and dumplings, folded fresh. Let them cool for a moment before you bite, because the soup inside is scalding.",
      },
    ],
    faqs: [
      {
        q: "Is People's Park Food Centre the same as People's Park Complex?",
        a: "No. People's Park Food Centre is its own building at Blk 32 New Market Road, a short walk from People's Park Complex on Park Road. Both are in Chinatown, a few minutes from Chinatown MRT.",
      },
      {
        q: "How old is People's Park Food Centre?",
        a: "There has been a market on this site since 1923. A fire destroyed it in December 1966, and the current complex opened in 1969. It was upgraded in 2005.",
      },
      {
        q: "What is People's Park Food Centre known for?",
        a: "A strong Sichuan and northern Chinese streak, from mala xiang guo to xiao long bao, alongside old-school Cantonese favourites like loh mei and char siew bao.",
      },
    ],
  },
  {
    id: 26,
    slug: "east-coast-lagoon-food-village",
    name: "East Coast Lagoon Food Village",
    seoTitle:
      "East Coast Lagoon Food Village: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Seaside hawker centre in East Coast Park: Haron Satay, Stingray Forever sambal stingray, Song Kee oyster omelette and Lagoon Famous Carrot Cake.",
    address:
      "1220 East Coast Parkway, East Coast Park",
    lat: 1.307730,
    lng: 103.934303,
    region: "East",
    tag: "Supper Spot",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/east-coast-lagoon.jpg",
    description:
      "Singapore's seaside hawker centre in East Coast Park, known for charcoal satay, sambal stingray, oyster omelette and black-and-white carrot cake.",
    mustTry: [
      "Haron Satay 55 satay",
      "Sambal stingray",
      "Song Kee oyster omelette",
      "Black & white carrot cake",
    ],
    famousFor:
      "Satay and barbecued seafood eaten by the sea, at what has long been described as Singapore's only seaside hawker centre.",
    michelinNote:
      "",
    vibes: ["Sea breeze", "Supper crew", "Families", "Weekend nights"],
    nearestMRT:
      "Siglap (TE Line) — via Siglap Link into East Coast Park",
    tipForVisitors:
      "Many stalls only open from mid-afternoon and some close one or two days a week, so go in the evening for the fullest line-up. The centre shuts for NEA cleaning a few days each quarter (e.g. 12–14 Oct 2026), so check before you head over.",
    halal: false,
    openLate: true,
    budgetPerPax:
      "$8–$25",
    story:
      "East Coast Lagoon Food Village began as a deliberate piece of seaside design. Construction started in 1977 on land beside the newly completed lagoon, and the centre opened in late 1978 as a single-storey timber building with butterfly-roofed cooking sheds, pyramid-roofed shelters and a raised floor for views of the water; many of its first hawkers came over from Alkaff Lane. Business was slow through the 1980s, but by the late 1990s its stalls had island-wide fame. A $4.5 million revamp gave it a resort-like look, and it reopened as East Coast Lagoon Food Village in January 2004. Today the order of business is satay from Haron Satay 55, stingray in banana leaf from Stingray Forever, orh luak from Song Kee and carrot cake from a family stall that has fried it for more than half a century. Come at dusk, when the grills are lit and the park cools down.",
    vibeCheck: "Singapore by the sea — the meal, the breeze, the whole improbable thing",
    timeline: [
      {
        year: "1977",
        event: "Construction begins in April beside the newly completed East Coast lagoon",
      },
      {
        year: "1978",
        event: "Opens in late 1978 as a single-storey timber hawker centre facing the lagoon",
      },
      {
        year: "2004",
        event: "Reopens in January as East Coast Lagoon Food Village after a $4.5 million revamp",
      },
      {
        year: "2013",
        event: "A June fire damages four stalls; centre closes about three months for a $1.5 million upgrade",
      },
      {
        year: "2021",
        event: "Reopens on 1 February after a roughly three-month closure for repairs and redecoration",
      },
    ],
    legendaryStalls: [
      {
        name: "Haron Satay 55",
        dish: "Chicken, beef & mutton satay",
        story: "A Malay satay stall of more than 40 years at #01-55, grilling skewers to order and serving them with peanut sauce and ketupat. Expect a queue at dinner; order a mix of chicken and mutton.",
      },
      {
        name: "Stingray Forever BBQ Seafood",
        dish: "Sambal stingray",
        story: "At #01-43, the 'Hottest Stingray' comes on banana leaf under a thick layer of sambal. Round out the table with sambal lala or gong gong. An evening stall, so plan for dinner.",
      },
      {
        name: "Song Kee Fried Oyster",
        dish: "Oyster omelette",
        story: "At #01-15, choose between the crisp, starchy fried oyster (orh luak) and the eggier oyster egg (orh neng). A long-time evening favourite for orh luak fans in the east.",
      },
      {
        name: "Lagoon Famous Carrot Cake",
        dish: "Black & white carrot cake",
        story: "Formerly Lagoon Carrot Cake, this #01-40 stall has served customers for more than 50 years. Get a plate of crisp white and sweet black carrot cake, and add a roll of its popiah.",
      },
    ],
  },
  {
    id: 27,
    slug: "marine-parade-food-centre",
    name: "Marine Parade Food Centre",
    seoTitle:
      "Marine Parade Central Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Marine Parade Central Market & Food Centre (Promenade Market @ 84): Neptune dim sum, Kun Ji duck rice, New World Congee and D'Authentic nasi lemak.",
    address:
      "Blk 84 Marine Parade Central, Marine Parade",
    lat: 1.302330,
    lng: 103.906387,
    region: "East",
    tag: "Local Favourite",
    hours:
      "7am–10pm daily (stall hours vary)",
    imageUrl: "/images/hawkers/marine-parade.jpg",
    description:
      "Revamped neighbourhood market and food centre at Blk 84 Marine Parade Central, known for hawker dim sum, braised duck, Cantonese congee and nasi lemak.",
    mustTry: [
      "Neptune HK dim sum",
      "Kun Ji braised duck rice",
      "New World Congee",
      "D'Authentic nasi lemak",
    ],
    famousFor:
      "Hawker-style Hong Kong dim sum and long-running family stalls serving the Marine Parade estate beside Parkway Parade.",
    michelinNote:
      "",
    vibes: ["East Coast locals", "Families", "Katong", "Breakfast"],
    nearestMRT:
      "Marine Parade (TE Line) — short walk",
    tipForVisitors:
      "Come in the morning: many of the best stalls, including the nasi lemak and dim sum, close by early afternoon or early evening. Neptune Hong Kong Dim Sum is closed on Wednesdays.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$10",
    story:
      "Marine Parade was built on land reclaimed from the sea from 1966 onwards. HDB completed the estate's first phase, with about 6,000 flats, a market, shops and offices, in 1973, and the whole estate was finished in 1976. The market and food centre at Block 84 sits at the heart of that town centre, beside Parkway Parade. After a multi-year revamp it reopened in 2019, brighter and airier, and many original stallholders came back. Since Marine Parade station opened on the Thomson-East Coast Line in June 2024, the centre has been a short walk from the train. Its reputation rests on steady neighbourhood cooking rather than celebrity. Neptune Hong Kong Dim Sum has steamed har gow and siew mai here for decades. Kun Ji has braised duck for more than 40 years, New World Congee follows a recipe dating to 1958, and D'Authentic lays out a spread of nasi lemak toppings.",
    vibeCheck: "Katong's neighbourhood kitchen — the one the locals actually use",
    timeline: [
      {
        year: "1966",
        event: "Land reclamation begins along the east coast, creating the land Marine Parade stands on",
      },
      {
        year: "1973",
        event: "HDB completes the estate's first phase: about 6,000 flats plus a market, shops and offices",
      },
      {
        year: "1976",
        event: "Marine Parade estate completed: 57 blocks and 8,015 flats",
      },
      {
        year: "2019",
        event: "Blk 84 market and food centre reopens after a multi-year revamp, with many original stallholders returning",
      },
      {
        year: "2024",
        event: "Marine Parade MRT station opens on the Thomson-East Coast Line (23 June)",
      },
    ],
    legendaryStalls: [
      {
        name: "Neptune Hong Kong Dim Sum",
        dish: "Har gow & siew mai",
        story: "A fixture at #01-26 for decades, steaming hawker-priced dim sum. Seth Lui's 2025 showdown preferred its har gow and siew mai to its newer neighbour's. Also try the xiao long bao and crispy durian spring roll.",
      },
      {
        name: "Kun Ji Duck Rice",
        dish: "Braised duck rice",
        story: "More than 40 years at the centre (#01-25), braising duck since the 1980s. Order braised duck rice or porridge and add braised tau kwa. Closed Tuesdays.",
      },
      {
        name: "New World Congee",
        dish: "Cantonese congee",
        story: "Smooth Cantonese porridge at #01-45 from a recipe dating to 1958 and handed down through four generations. The minced meat congee with scallion or peanuts is the classic order. Closed Fridays.",
      },
      {
        name: "D'Authentic Nasi Lemak",
        dish: "Nasi lemak",
        story: "A long-running morning stall at #01-36 where you build your own plate from more than a dozen toppings: fried chicken wing, egg, ikan bilis, tempeh, begedil and sambal. It closes by early afternoon and on Fridays.",
      },
    ],
  },
  {
    id: 28,
    slug: "jalan-berseh-food-centre",
    seoTitle:
      "Berseh Food Centre (Jalan Besar): Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Berseh Food Centre guide: Bib Gourmand Kelantan Kway Chap, Fu Zhou Poh Hwa oyster cakes, Sheng Kee curry chicken noodles and Fu He turtle soup.",
    name:
      "Berseh Food Centre",
    address: "166 Jalan Besar, Jalan Besar",
    lat: 1.307335,
    lng: 103.856850,
    region: "Central",
    tag: "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/jalan-berseh.jpg",
    description:
      "A compact two-storey Jalan Besar food centre known for Bib Gourmand kway chap, rare Fuzhou oyster cakes and old-school turtle soup.",
    mustTry: [
      "Kelantan Kway Chap",
      "Fuzhou Oyster Cake",
      "Curry Chicken Noodles",
      "Turtle Soup",
    ],
    famousFor:
      "Michelin Bib Gourmand kway chap and one of the last Fuzhou oyster cake stalls in Singapore.",
    michelinNote:
      "Kelantan Kway Chap (#02-39) has been a Michelin Bib Gourmand since 2022 and is listed as Bib Gourmand in the 2026 MICHELIN Guide Singapore. Fu He Turtle Soup (#02-40) is listed in the 2026 guide.",
    vibes: [
      "Jalan Besar",
      "Foodies",
      "Kway chap fans",
      "Budget eats",
    ],
    nearestMRT:
      "Jalan Besar (DT Line) — 5 min walk",
    tipForVisitors:
      "Go early for the kway chap. Sungei Road Laksa is a short walk away at Blk 27 Jalan Berseh (Jin Shui Kopitiam), a separate coffee shop outside the centre.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$4–$12",
    story:
      "Berseh Food Centre fronts Jalan Besar between Jalan Berseh and Kelantan Lane, a two-storey block that has fed the neighbourhood since the 1970s. It is small, and much of its reputation rests on long-running family stalls. Fu Zhou Poh Hwa traces its oyster cakes to a grandmother who sold them on Ophir Road in the 1950s; sales stopped after a fire in 1970 and resumed in 1986. Upstairs, Kelantan Kway Chap earned a Michelin Bib Gourmand in 2022 and still holds it. The centre has also seen recent farewells. Lim's Fried Oyster, open since 1977, closed in August 2025, shortly before NEA shut the centre for repairs and redecoration from 29 September to 28 December 2025. The stalls that remain carry dishes that are getting harder to find elsewhere.",
    timeline: [
      {
        year: "1975",
        event: "Berseh Food Centre founded at 166 Jalan Besar",
      },
      {
        year: "2022",
        event: "Kelantan Kway Chap receives a Michelin Bib Gourmand",
      },
      {
        year: "2025",
        event: "Lim's Fried Oyster, trading since 1977, closes at the end of August as its owners retire",
      },
      {
        year: "2025",
        event: "Centre closes from 29 September to 28 December for NEA repairs and redecoration",
      },
    ],
    legendaryStalls: [
      {
        name: "Kelantan Kway Chap",
        dish: "Kway chap",
        story: "Bib Gourmand since 2022. Flat rice sheets in soy-spiced broth with braised pork belly, intestines, skin and egg; dip into the house chilli. Larger braised platters suit groups. Closed Sundays and Mondays.",
      },
      {
        name: "Fu Zhou Poh Hwa Oyster Cake",
        dish: "Fuzhou oyster cake",
        story: "A family recipe dating to 1950s Ophir Road, and now one of the last places selling deep-fried Fuzhou oyster cakes. It sells only this one item, so order one hot from the fryer. Closed Sundays.",
      },
      {
        name: "Sheng Kee Curry Chicken Noodle",
        dish: "Curry chicken noodles",
        story: "Freshly poached chicken in a mildly spicy curry, with white or yellow noodles. Add the homemade sambal for more heat. The owner is an ex-chef with over 20 years' experience.",
      },
      {
        name: "Fu He Turtle Soup",
        dish: "Turtle soup",
        story: "Long the area's go-to for Cantonese turtle soup, also known as Fu He Delights. Try the herbal soft-shelled turtle soup, or the slow-cooked lamb rib soup. Listed in the 2026 MICHELIN Guide. Closed Fridays.",
      },
    ],
  },
  {
    id: 29,
    slug: "ghim-moh-market-food-centre",
    name: "Ghim Moh Market & Food Centre",
    seoTitle:
      "Ghim Moh Market & Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Ghim Moh Food Centre guide: Ghim Moh Chwee Kueh, Bib Gourmand Chuan Kee braised duck rice, Ghim Moh Carrot Cake and Hin Fried Hor Fun.",
    address:
      "Blk 20 Ghim Moh Road, Ghim Moh",
    lat: 1.311060,
    lng: 103.788292,
    region: "West",
    tag: "Local Favourite",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/ghim-moh.jpg",
    description:
      "Buona Vista's breakfast hub, home to 1959-founded Ghim Moh Chwee Kueh, Bib Gourmand braised duck and an early-morning carrot cake queue.",
    mustTry: [
      "Ghim Moh Chwee Kueh",
      "Chuan Kee braised duck rice",
      "Ghim Moh Carrot Cake",
      "Hin Fried Hor Fun",
    ],
    famousFor:
      "Ghim Moh Chwee Kueh's handmade rice cakes with chye poh, made by a stall founded in 1959.",
    michelinNote:
      "Chuan Kee Boneless Braised Duck (#01-04) holds a Bib Gourmand in the 2026 MICHELIN Guide Singapore. Ghim Moh Chwee Kueh (#01-54) is listed in the 2026 guide but is not on the 2026 Bib Gourmand list.",
    vibes: ["Westies", "Breakfast", "Families", "Hawker heritage"],
    nearestMRT:
      "Buona Vista (EW/CC Line) — short walk",
    tipForVisitors:
      "Come early: Ghim Moh Carrot Cake's queue can start around 6.30am and portions are limited, and many stalls close by early afternoon. The centre shuts for a few days for cleaning several times a year, so check NEA's closure list before you go.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$3–$8",
    story:
      "Ghim Moh is a neighbourhood centre in the truest sense: a wet market downstairs from the hawker stalls at Blk 20, a short walk from Buona Vista MRT, its tables filled from dawn by residents of the surrounding flats. Its most famous stall, Ghim Moh Chwee Kueh, was founded in 1959, and it still turns out soft steamed rice cakes heaped with savoury chye poh and a mildly spicy sambal, sold in sets of four or more. A few stalls away, Chuan Kee Boneless Braised Duck holds a 2026 Michelin Bib Gourmand for its Teochew-style duck over rice, porridge or noodles. The centre has lost legends too: Guan Kee Fried Kway Teow, which moved here in 1978 and earned a Bib Gourmand in 2019, closed in 2023 when its owners retired after 54 years. In 2024 the centre shut for about ten weeks of repairs, gaining a new roof, brighter lighting and free toilets, then reopened with its old-school character intact.",
    timeline: [
      {
        year: "1959",
        event: "Ghim Moh Chwee Kueh is founded; it is now the centre's best-known stall.",
      },
      {
        year: "1978",
        event: "Guan Kee Fried Kway Teow moves to Ghim Moh from Thye Hong Centre in Redhill.",
      },
      {
        year: "2023",
        event: "Guan Kee Fried Kway Teow, a 2019 Bib Gourmand stall, closes as its owners retire after 54 years.",
      },
      {
        year: "2024",
        event: "The centre closes from early March for about 2.5 months of repairs (new roof, lighting, fans, upgraded free toilets) and reopens on 11 May.",
      },
      {
        year: "2026",
        event: "Chuan Kee Boneless Braised Duck is named a Bib Gourmand in the 2026 MICHELIN Guide Singapore.",
      },
    ],
    legendaryStalls: [
      {
        name: "Ghim Moh Chwee Kueh",
        dish: "Chwee kueh",
        story: "Founded in 1959 and listed in the 2026 Michelin Guide. Order at least four of the soft, handmade rice cakes, topped with savoury chye poh and a mildly spicy sambal.",
      },
      {
        name: "Chuan Kee Boneless Braised Duck",
        dish: "Braised duck rice",
        story: "A 2026 Bib Gourmand stall serving juicy Teochew-style boneless braised duck with rice, porridge, kway teow or noodles. Add braised egg, gizzard or liver.",
      },
      {
        name: "Ghim Moh Carrot Cake",
        dish: "Fried carrot cake",
        story: "Family-run stall that makes its carrot cake and chye poh from scratch daily. Choose black or white, or ask for half-and-half. Go early, because portions are limited and the queue forms from around 6.30am.",
      },
    ],
  },
  {
    id: 30,
    slug: "alexandra-village-food-centre",
    name: "Alexandra Village Food Centre",
    seoTitle:
      "Alexandra Village Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Alexandra Village Food Centre in Bukit Merah: Michelin Bib Gourmand claypot laksa, Hokkien Street prawn mee, xiao long bao and soya sauce chicken. The best stalls.",
    address: "120 Bukit Merah Lane 1, Alexandra",
    lat: 1.286360,
    lng: 103.804550,
    region: "Central",
    tag: "Local Favourite",
    hours: "Hours vary by stall",
    imageUrl: "/images/hawkers/alexandra-village.jpg",
    description:
      "A Bukit Merah hawker centre since 1977, with more than 80 stalls and a Michelin Bib Gourmand claypot laksa at its heart.",
    mustTry: [
      "Claypot Laksa",
      "Prawn Noodles",
      "Xiao Long Bao",
      "Soya Sauce Chicken",
      "Wanton Mee",
    ],
    famousFor:
      "Depot Road Zhen Shan Mei's Michelin Bib Gourmand claypot laksa, plus more than 80 stalls of old-school noodles, roast meats and dumplings.",
    michelinNote: "",
    vibes: ["Alexandra", "Local foodies", "Dinner", "Families"],
    nearestMRT: "Queenstown (EW Line) — 10 min walk",
    tipForVisitors:
      "Arrive hungry and share plates — portions are generous and queues move in waves.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "Alexandra Village Food Centre has fed this corner of Bukit Merah since 1977. It is a big, unpolished neighbourhood centre of more than 80 stalls, with none of the tourist traffic of Chinatown, which is exactly why regulars rate it. The headline act is Depot Road Zhen Shan Mei Claypot Laksa: a family stall that started on Depot Road, moved here, and was awarded a Michelin Bib Gourmand in 2016 for laksa served bubbling in a claypot so it stays hot to the last spoonful. Around it are the stalls that turn a visit into a weekly habit: Hokkien Street prawn mee, Shanghainese xiao long bao and la mian, Hong Kong-style soya sauce chicken and wanton noodles.",
    vibeCheck: "Alexandra's open secret — exceptional food that the neighbourhood guards quietly",
    timeline: [
      {
        year: "1977",
        event: "Alexandra Village Food Centre opens in Bukit Merah",
      },
      {
        year: "2016",
        event: "Depot Road Zhen Shan Mei Claypot Laksa is awarded a Michelin Bib Gourmand",
      },
      {
        year: "2025",
        event: "The centre closes from 1 April to 30 June for repair and redecoration works",
      },
    ],
    legendaryStalls: [
      {
        name: "Depot Road Zhen Shan Mei Claypot Laksa",
        dish: "Claypot Laksa",
        story: "Michelin Bib Gourmand since 2016. Rich, coconut-heavy laksa kept piping hot in a claypot right to the last spoonful. The stall began on Depot Road, hence the name, and is now run by the founder's nephew.",
      },
      {
        name: "The Old Stall Hokkien Street Famous Prawn Mee",
        dish: "Prawn Noodles",
        story: "A deep, prawn-shell broth with the option of pork ribs. Go for the pork rib and prawn combination if you're hungry.",
      },
      {
        name: "Zhang Ji Shanghai La Mian Xiao Long Bao",
        dish: "Xiao Long Bao",
        story: "Hand-folded xiao long bao, spicy Sichuan wontons and dan dan mian. The stall regulars use to break up a week of noodle soup.",
      },
      {
        name: "Xiang Jiang Soya Sauce Chicken",
        dish: "Soya Sauce Chicken",
        story: "Hong Kong-style soya sauce chicken over noodles, or by the quarter, half or whole bird to share.",
      },
    ],
    faqs: [
      {
        q: "Is Alexandra Village Food Centre in Queenstown or Bukit Merah?",
        a: "It's in Bukit Merah, at Blk 120 Bukit Merah Lane 1. Queenstown MRT is the nearest station, which is why it's often linked with Queenstown.",
      },
      {
        q: "When did Alexandra Village Food Centre open?",
        a: "In 1977. It closed from 1 April to 30 June 2025 for repairs and redecoration, and has since reopened.",
      },
      {
        q: "Which stall at Alexandra Village has a Michelin Bib Gourmand?",
        a: "Depot Road Zhen Shan Mei Claypot Laksa, which was awarded a Michelin Bib Gourmand in 2016 for laksa served bubbling in a claypot.",
      },
    ],
  },
  {
    id: 31,
    slug: "shunfu-market-food-centre",
    seoTitle:
      "Shunfu Mart Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Shunfu Mart near Marymount MRT: Hakka soon kueh, fried kway teow with otah and famous muffins. Best stalls, tips and history.",
    name:
      "Shunfu Mart Food Centre",
    address:
      "Blk 320 Shunfu Road, Marymount",
    lat: 1.351820,
    lng: 103.837029,
    region:
      "Central",
    tag:
      "Neighbourhood Gem",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/food/char-kway-teow.jpg",
    description:
      "A quiet estate food centre above a wet market off Marymount Road, loved for Hakka kueh, char kway teow with otah and a muffin stall with a cult following.",
    mustTry: [
      "Taro-skin soon kueh",
      "Abacus yam balls",
      "Fried kway teow with otah",
      "Chocolat N' Spice muffins",
    ],
    famousFor:
      "Breakfast Hakka delicacies, old-school fried kway teow and freshly baked muffins sold from a hawker stall since 2002.",
    michelinNote:
      "",
    vibes: [
      "Neighbourhood",
      "Breakfast spot",
      "Old-school",
      "Renovated",
    ],
    nearestMRT:
      "Marymount (CC Line) — 8 min walk",
    tipForVisitors:
      "Come early on a weekday or weekend morning: Mei Zhen Hakka Delicacies and Chocolat N' Spice close by early afternoon, and both are shut on Mondays.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$3–$8",
    story:
      "Tucked into the Shunfu estate off Marymount Road, Shunfu Mart is the kind of food centre that residents keep to themselves. Some of its hawkers arrived from the old Lakeview Market and Food Centre, demolished in the late 1990s. Mei Zhen Hakka Delicacies is one of them: founded by a mother and now run by three sisters, it spent 15 years at Lakeview before settling here, where it still shapes taro-skin soon kueh and abacus yam balls each morning. In 2002, an ex-Mandarin Oriental pastry chef started Chocolat N' Spice here, turning muffins into a hawker queue. Lai Heng's fried kway teow, served with otah, has kept its own line going for years. In 2022 the Bishan-Toa Payoh Town Council closed the mart for three months of renovation, bringing new floors, ceilings, lights, larger fans and refreshed toilets. The stalls returned to a brighter, airier hall that still runs on early-morning regulars.",
    vibeCheck: "Bishan's heartbeat — the place where the neighbourhood actually lives",
    timeline: [
      {
        year: "2002",
        event: "Chocolat N' Spice opens its flagship muffin stall at Shunfu Mart.",
      },
      {
        year: "2022",
        event: "Bishan-Toa Payoh Town Council completes a three-month renovation with new flooring, ceilings, lighting and fans.",
      },
      {
        year: "2025",
        event: "Mei Zhen Hakka Delicacies marks about 25 years at the centre, run by the founder's three daughters.",
      },
    ],
    legendaryStalls: [
      {
        name: "Mei Zhen Hakka Delicacies",
        dish: "Soon kueh & yam balls",
        story: "A family business started by the sisters' mother. It spent 15 years at the old Lakeview Market before moving here about 25 years ago. Taro-skin soon kueh and abacus yam balls sell out by early afternoon; closed Mondays and Tuesdays.",
      },
      {
        name: "Chocolat N' Spice",
        dish: "Muffins",
        story: "Founded by an ex-Mandarin Oriental pastry chef, it opened its first stall here in 2002 and turned muffins into a hawker queue. Chocolate chip and banana walnut are the classics. Mornings only, Tuesday to Saturday.",
      },
      {
        name: "Lai Heng Fried Kuay Teow & Cooked Food",
        dish: "Fried kway teow",
        story: "A Shunfu Mart mainstay with a regular queue. Char kway teow with cockles, lap cheong and fish cake; add the house-made otah, which often sells out.",
      },
    ],
  },
  {
    id: 32,
    slug: "pasir-panjang-food-centre",
    name: "Pasir Panjang Food Centre",
    seoTitle:
      "Pasir Panjang Food Centre: Best Stalls & What to Eat | ShiokFlavour",
    seoDescription:
      "Pasir Panjang Food Centre guide: Ivy's Hainanese herbal mutton soup, Alan Banana Leaves BBQ seafood, Yusoff Haji Jalal satay and KS fruit rojak.",
    address:
      "121 Pasir Panjang Road, Pasir Panjang",
    lat: 1.275659,
    lng: 103.791557,
    region: "West",
    tag: "Hidden Gem",
    hours:
      "Hours vary by stall",
    imageUrl: "/images/hawkers/pasir-panjang.webp",
    description:
      "A 1978 food centre beside Pasir Panjang MRT, known for BBQ seafood, zi char, evening satay and Ivy's Michelin-listed herbal mutton soup.",
    mustTry: [
      "Ivy's Herbal Mutton Soup",
      "BBQ Stingray",
      "Yusoff Haji Jalal Satay",
      "KS Fruit Rojak",
    ],
    famousFor:
      "BBQ seafood and zi char at dinnertime, plus a Michelin-listed Hainanese herbal mutton soup.",
    michelinNote:
      "Ivy's Hainanese Herbal Mutton Soup (#01-14) is listed in the 2026 MICHELIN Guide Singapore (no Bib Gourmand or star).",
    vibes: ["West Coast", "Zi char", "Quiet eats", "Hikers"],
    nearestMRT:
      "Pasir Panjang (CC Line) — next door",
    tipForVisitors:
      "Ivy's mutton soup is a daytime stall (closed Sundays), while the BBQ seafood and satay stalls open only in the evening and are closed Mondays and Tuesdays. For the full spread, go Wednesday to Sunday.",
    halal: false,
    openLate: false,
    budgetPerPax:
      "$5–$10",
    story:
      "Pasir Panjang Food Centre was built in 1978 and sits right beside Pasir Panjang MRT station on the Circle Line. It is a compact centre of 45 cooked-food stalls with no wet market attached. NEA sums up its reputation as BBQ seafood and zi char, and the evening trade bears that out. Alan Banana Leaves BBQ Seafood, a family business started by Alan Chong and now run by his son, fires up for dinner, and Yusoff Haji Jalal Satay opens only at night. At lunch, Ivy's Hainanese Herbal Mutton Soup ladles mutton and tendon soup, heavy with herbs, into claypots. The stall moved here from Kim Keat Palm and is listed in the 2026 MICHELIN Guide Singapore. The centre closed from December 2025 to February 2026 for repairs and redecoration, and reopened with a new frontage and a neon sign. Bring a group to share the seafood plates.",
    vibeCheck: "The Southern Ridges' reward — zi char for people who have earned it",
    timeline: [
      {
        year: "1978",
        event: "Pasir Panjang Food Centre built at 121 Pasir Panjang Road",
      },
      {
        year: "2011",
        event: "Pasir Panjang MRT station on the Circle Line opens beside the food centre (8 October)",
      },
      {
        year: "2016",
        event: "Ivy's Hainanese Herbal Mutton Soup reported as having moved here from Kim Keat Palm Market",
      },
      {
        year: "2025",
        event: "Closes on 1 December for repairs and redecoration (until 28 February 2026)",
      },
      {
        year: "2026",
        event: "Reopens in March with a refreshed exterior and neon sign; Ivy's listed in the 2026 MICHELIN Guide",
      },
    ],
    legendaryStalls: [
      {
        name: "Ivy's Hainanese Herbal Mutton Soup",
        dish: "Herbal mutton soup",
        story: "Listed in the 2026 MICHELIN Guide. Mutton or tendon soup arrives bubbling in a claypot with tofu puffs, wood ear fungus and beancurd skin. Add mee sua or rice. Daytime only; closed Sundays.",
      },
      {
        name: "Alan Banana Leaves BBQ Seafood",
        dish: "BBQ stingray, zi char",
        story: "A family business Alan Chong started with satay before adding zi char. His son Elvin now runs it. Order the BBQ stingray, salted egg or cereal prawns and sambal kangkong. Dinner only; closed Mondays and Tuesdays.",
      },
      {
        name: "Yusoff Haji Jalal Satay",
        dish: "Satay",
        story: "An evening-only satay stall (#01-21) selling beef, mutton, chicken and babat skewers with ketupat and peanut gravy. Long-time regulars remember it as an old-school satay institution. Open Wednesday to Sunday nights.",
      },
      {
        name: "KS Fruit Rojak · BBQ Rojak",
        dish: "Fruit rojak",
        story: "Classic fruit rojak tossed in thick prawn-paste sauce at #01-45. Ask for the version with cuttlefish and century egg. Closed Sundays.",
      },
    ],
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

/** Resolve a featured hawker by URL slug (`/hawker/maxwell-food-centre`). */
export function getFeaturedHawkerBySlug(raw: string): FeaturedHawker | null {
  const s = raw.trim().toLowerCase();
  if (!s) return null;
  return FEATURED_HAWKERS.find((h) => h.slug === s) ?? null;
}

/** @deprecated Prefer {@link getFeaturedHawkerBySlug}. Numeric id lookup for legacy links. */
export function getFeaturedHawkerById(raw: string): FeaturedHawker | null {
  const trimmed = raw.trim();
  const n = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(n) || String(n) !== trimmed) return null;
  return FEATURED_HAWKERS.find((h) => h.id === n) ?? null;
}
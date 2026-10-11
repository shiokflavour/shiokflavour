export type HawkerRegion = "Central" | "North" | "South" | "East" | "West";

export type FeaturedHawker = {
  id: number;
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
    lat: 1.2803,
    lng: 103.8452,
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
      "24 hours (stall hours vary); Satay Street from 7pm weekdays, 3pm weekends",
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
      "Come after 7pm when Boon Tat Street closes to traffic and the satay stalls set up. Order a cold beer and watch the city.",
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
    lat: 1.3057,
    lng: 103.8831,
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
    lat: 1.2822,
    lng: 103.8432,
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
    lat: 1.3123,
    lng: 103.8380,
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
    lat: 1.3066,
    lng: 103.8518,
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
    address: "2 Adam Road, Bukit Timah",
    lat: 1.3264,
    lng: 103.8081,
    region: "Central",
    tag: "Supper Spot",
    hours: "7am–late night",
    imageUrl: "/images/hawkers/adam-road.webp",
    description:
      "A beloved neighbourhood hawker centre known for its famous nasi lemak and late night crowd. A local institution.",
    mustTry: ["Adam Road Nasi Lemak", "Roti John", "Mee Rebus", "Teh Tarik"],
    famousFor:
      "Adam Road Nasi Lemak — consistently voted one of Singapore's best nasi lemak for decades",
    michelinNote:
      "Adam Road Nasi Lemak stall has received Michelin Bib Gourmand recognition",
    vibes: ["Late night supper", "Malay food lovers", "Halal options", "Expat neighbourhood"],
    nearestMRT: "Botanic Gardens (CC/DT Line) — 10 min walk",
    tipForVisitors:
      "The nasi lemak stall has long queues — come before 9am or after 8pm. Great spot for late night supper after exploring the Botanic Gardens.",
    halal: true,
    openLate: true,
    budgetPerPax: "$4–$8",
    story:
      "Adam Road Food Centre is the kind of place that doesn't try to be famous and is famous anyway. Tucked between the Botanic Gardens and the expatriate enclave of Bukit Timah, it serves one of Singapore's most mixed communities — Malay families, expats, students from the nearby universities, and late-night supper hunters from across the island. The nasi lemak stall that operates from the early hours has been a Michelin Bib Gourmand recipient and a weekend queue institution. The centre's late-night atmosphere — warm, buzzing, cross-cultural — captures something essential about Singapore's food culture.",
    vibeCheck: "The supper spot that belongs to everyone and is owned by no one",
    localQuote:
      "The nasi lemak queue starts forming before most people have woken up. It tells you everything you need to know.",
    timeline: [
      {
        year: "1960s",
        event:
          "Hawker stalls begin operating along Adam Road serving the local community",
      },
      {
        year: "1975",
        event:
          "Formal hawker centre established to organise the growing number of stalls",
      },
      {
        year: "1980s",
        event:
          "Nasi lemak stall establishes itself as the centre's signature — queues begin",
      },
      {
        year: "2016",
        event:
          "Adam Road Nasi Lemak receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "Remains one of Singapore's best late-night supper destinations",
      },
    ],
    legendaryStalls: [
      {
        name: "Adam Road Nasi Lemak",
        dish: "Nasi Lemak",
        story:
          "Michelin Bib Gourmand. The coconut rice is cooked in pandan and served with sambal, ikan bilis, egg, and cucumber. Opens at 7am and the queue begins immediately.",
      },
      {
        name: "Nasi Padang Minang",
        dish: "Nasi Padang",
        story:
          "Indonesian-Malay rice with a spread of curries and sides. The rendang is slow-cooked and the curries are freshly made each morning. A proper Padang spread rarely found this good.",
      },
      {
        name: "Roti John Station",
        dish: "Roti John",
        story:
          "A Malay-Singapore original — minced meat and egg fried into a French loaf. Best eaten fresh off the griddle with sambal and mayonnaise at midnight.",
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
    address: "208 New Upper Changi Road, Bedok",
    lat: 1.3243,
    lng: 103.9301,
    region: "East",
    tag: "Local Favourite",
    hours: "6am–11pm daily",
    imageUrl: "/images/hawkers/bedok-interchange.jpg",
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
    localQuote:
      "Chwee kueh for breakfast every morning and you would never tire of it. That is how good it is.",
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
  },
  {
    id: 9,
    slug: "bedok-85-fengshan-market",
    name: "Bedok 85 Fengshan Market",
    address: "85 Bedok North Street 4, Bedok",
    lat: 1.3261,
    lng: 103.9295,
    region: "East",
    tag: "Supper Spot",
    hours: "24 hours (most stalls till late)",
    imageUrl: "/images/hawkers/bedok-85.jpg",
    description:
      "The ultimate supper destination for East Singapore. Famously packed late at night with locals fuelling up after a night out.",
    mustTry: [
      "Barbeque Chicken Wings",
      "Carrot Cake",
      "Hokkien Mee",
      "Satay Bee Hoon",
    ],
    famousFor:
      "BBQ chicken wings — the queue stretches around the block every night. A rite of passage for Singapore supper culture.",
    michelinNote:
      "BBQ chicken wing stall has received Michelin Bib Gourmand recognition",
    vibes: ["Supper crowd", "Night owls", "After clubbing", "Foodies"],
    nearestMRT: "Bedok (EW Line) — 10 min walk or short taxi",
    tipForVisitors:
      "Take a Grab after 10pm and join the locals. The chicken wings are best ordered the moment you arrive as queues get very long.",
    halal: false,
    openLate: true,
    budgetPerPax: "$5–$10",
    story:
      "Bedok 85 — known to everyone in East Singapore simply as '85' — is the definitive Singapore supper centre. What started as a neighbourhood market has become a midnight pilgrimage site. The BBQ chicken wings stall has queues that stretch around the block every night from 10pm onwards. The centre operates on a different clock to the rest of Singapore: quiet in the afternoon, buzzing by 9pm, packed past midnight. It represents a side of Singapore food culture that tourists rarely see — the late-night, beer-in-hand, sharing-plates supper culture that locals consider the best part of any night out.",
    vibeCheck: "Singapore's midnight kitchen — where the night always ends well",
    localQuote:
      "The chicken wings are worth a 45-minute queue. Every single person in that queue knows it too.",
    timeline: [
      {
        year: "1970s",
        event:
          "Fengshan Market established serving the growing Bedok North community",
      },
      {
        year: "1985",
        event:
          "Centre earns its '85' nickname from its address — becomes a local institution",
      },
      {
        year: "1990s",
        event:
          "BBQ chicken wings stall establishes the midnight queue tradition",
      },
      {
        year: "2016",
        event:
          "BBQ chicken wing stall receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "Remains Singapore's most famous supper destination among locals",
      },
    ],
    legendaryStalls: [
      {
        name: "Bedok 85 BBQ Chicken Wings",
        dish: "BBQ Chicken Wings",
        story:
          "Michelin Bib Gourmand. Marinated in a secret blend and grilled over charcoal until the skin is lacquered and slightly charred. Queue starts at 9pm. Don't come after 11pm and expect short lines.",
      },
      {
        name: "Carrot Cake Master",
        dish: "Carrot Cake",
        story:
          "Both white and black versions done with serious wok technique. The black version is stickier and sweeter from the dark sauce. A dish that tastes completely different from what the name suggests.",
      },
      {
        name: "Satay Bee Hoon 85",
        dish: "Satay Bee Hoon",
        story:
          "Thin rice noodles in a rich peanut-based gravy with satay, cockles, and vegetables. A dish unique to Singapore — comforting, peanutty, and unlike anything else.",
      },
    ],
  },
  {
    id: 10,
    slug: "tampines-round-market",
    name: "Tampines Round Market",
    address: "137 Tampines Street 11, Tampines",
    lat: 1.3530,
    lng: 103.9446,
    region: "East",
    tag: "Budget Eats",
    hours: "6am–11pm daily",
    imageUrl: "/images/hawkers/tampines-round.jpg",
    description:
      "A well-loved neighbourhood market and food centre in Tampines — affordable, no-frills and packed with regulars every morning.",
    mustTry: ["Laksa", "Wanton Mee", "Curry Puff", "Kopi"],
    famousFor:
      "Affordable and authentic neighbourhood hawker food away from tourist areas. Real local experience.",
    michelinNote: "",
    vibes: ["Budget dining", "Tampines locals", "Families", "Morning breakfast"],
    nearestMRT: "Tampines (EW/DT Line) — 10 min walk",
    tipForVisitors:
      "Great spot to experience a real neighbourhood hawker centre away from tourist spots. Very affordable.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
    story:
      "Tampines Round Market gets its name from its distinctive circular architecture — one of the few curved hawker centres in Singapore. Built to serve the rapidly growing Tampines New Town in the 1980s, it has been feeding generations of East-siders who grew up in the surrounding HDB blocks. The centre has no Michelin stars and no celebrity visitors. What it has is something rarer: a community of regulars who have been eating the same stalls for 30 years, and stalls that have been cooking for those same regulars just as long. It's what hawker culture actually is when nobody is watching.",
    vibeCheck: "No stars, no tourists, all heart",
    localQuote:
      "My family has been eating here since I was a child. Some places should simply never change.",
    timeline: [
      {
        year: "1980s",
        event:
          "Tampines New Town develops rapidly — Round Market built to serve new residents",
      },
      {
        year: "1990s",
        event:
          "Centre establishes its regular community — the same families eat here weekly",
      },
      {
        year: "2000s",
        event:
          "Distinctive circular architecture becomes a local landmark and informal meeting point",
      },
      {
        year: "2020",
        event:
          "Remains one of Tampines' primary community food hubs despite newer competition",
      },
    ],
    legendaryStalls: [
      {
        name: "Tampines Laksa",
        dish: "Laksa",
        story:
          "A neighbourhood laksa that locals will stack against any famous stall. The broth is rich and properly spiced. No tourists, no queue hype — just consistently excellent laksa.",
      },
      {
        name: "Ah Hock Wanton Mee",
        dish: "Wanton Mee",
        story:
          "Springy egg noodles with char siew, wanton dumplings, and a sauce that coats every strand. The kind of stall with a sign that hasn't changed since 1988.",
      },
      {
        name: "Tampines Kopi Corner",
        dish: "Kopi and Kaya Toast",
        story:
          "Old-school kopitiam coffee made with a sock filter. The kaya is house-made and slightly eggy. The kind of breakfast that makes a neighbourhood feel like home.",
      },
    ],
  },
  {
    id: 11,
    slug: "geylang-serai-market",
    name: "Geylang Serai Market",
    address: "1 Geylang Serai, Geylang",
    lat: 1.3143,
    lng: 103.8990,
    region: "East",
    tag: "Halal Haven",
    hours: "6am–10pm (24hrs during Ramadan)",
    imageUrl: "/images/hawkers/geylang-serai.jpg",
    description:
      "The cultural heart of Malay Singapore. A vibrant wet market and food centre that comes alive especially during Ramadan.",
    mustTry: ["Nasi Padang", "Murtabak", "Kueh Pie Tee", "Bandung", "Putu Piring"],
    famousFor:
      "Best Malay and Muslim food in Singapore. During Ramadan the bazaar outside is unmissable.",
    michelinNote:
      "Featured in Michelin Guide as essential Singapore food culture experience",
    vibes: ["Muslim-friendly", "Malay culture", "Ramadan bazaar", "Cultural immersion"],
    nearestMRT: "Aljunied (EW Line) — 10 min walk",
    tipForVisitors:
      "Completely halal. Visit during Ramadan evenings for the incredible bazaar outside. Try the putu piring — traditional Malay steamed rice cakes.",
    halal: true,
    openLate: true,
    budgetPerPax: "$4–$9",
    story:
      "Geylang Serai is the cultural heartland of Malay Singapore. The market has stood here since the 1950s when the area was the centre of the Malay kampung community. The food tells that story directly — nasi padang, murtabak, putu piring, kueh, bandung — a full catalogue of Malay and Indonesian culinary heritage kept alive by stalls that pass recipes between generations. During Ramadan, the bazaar outside becomes one of Singapore's most spectacular food events, drawing hundreds of thousands over the fasting month. Everything sold here is halal and the welcome is universal.",
    vibeCheck: "The heartland of Malay Singapore — food as cultural memory",
    localQuote:
      "The murtabak here is the real thing — generous, fragrant, and made by people who have been perfecting it for generations.",
    timeline: [
      {
        year: "1950s",
        event:
          "Geylang Serai established as centre of Singapore's Malay kampung community",
      },
      {
        year: "1964",
        event:
          "Geylang Serai Market formalised — becomes the cultural anchor of the precinct",
      },
      {
        year: "1990s",
        event:
          "Ramadan bazaar tradition grows into Singapore's largest annual food event",
      },
      {
        year: "2011",
        event:
          "Market conserved and upgraded while preserving its Malay cultural character",
      },
      {
        year: "2020",
        event:
          "UNESCO hawker inscription specifically references Geylang Serai as exemplary",
      },
    ],
    legendaryStalls: [
      {
        name: "Hjh Maimunah",
        dish: "Nasi Padang",
        story:
          "One of Singapore's most beloved Malay restaurants with roots at Geylang Serai. The beef rendang is slow-cooked for hours and the spread of curries changes daily.",
      },
      {
        name: "Ramadan Murtabak Stalls",
        dish: "Murtabak",
        story:
          "During Ramadan, the bazaar murtabak stalls draw queues stretching the length of the market. Thick pancakes stuffed with mutton or chicken, egg, and onion — a community ritual.",
      },
      {
        name: "Putu Piring",
        dish: "Putu Piring",
        story:
          "Steamed rice cakes filled with palm sugar and dusted with coconut. Made fresh in small batches throughout the day. One of the most beautiful traditional Malay sweets still made by hand.",
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
    lat: 1.2799,
    lng: 103.8463,
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
    lat: 1.2865,
    lng: 103.8268,
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
    address: "6 Jalan Bukit Merah, Bukit Merah",
    lat: 1.2896,
    lng: 103.8200,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/abc-brickworks.jpg",
    description:
      "A hidden gem loved by locals — away from the tourist trail but packed with excellent food at very reasonable prices.",
    mustTry: ["Satay", "BBQ Chicken Wings", "Carrot Cake", "Popiah"],
    famousFor:
      "One of the best satay stalls in Singapore — locals drive across the island just for this.",
    michelinNote: "",
    vibes: ["Off the beaten path", "Local families", "Authentic experience", "Budget dining"],
    nearestMRT: "Redhill (EW Line) — 10 min walk",
    tipForVisitors:
      "Worth the trek away from the tourist areas. This is where locals actually eat. Very affordable and no tourists.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "ABC Brickworks takes its name from the brick kilns that once operated along the Alexandra Canal — a reminder that this part of Singapore was industrial long before it was residential. The hawker centre grew organically from the surrounding Bukit Merah community, a neighbourhood of old HDB blocks and longtime residents who have strong opinions about where to eat and even stronger opinions about where not to. The satay stall here has built a following that crosses postal codes. No marketing. No Michelin. Just charcoal, skewers, and the kind of queue that forms because people genuinely cannot stay away.",
    vibeCheck: "Off the tourist map, deep on the locals' radar",
    localQuote:
      "Very few tourists know about this place. That is precisely what keeps the satay so good.",
    timeline: [
      {
        year: "1960s",
        event:
          "Brick kilns operate along Alexandra Canal — the area's industrial identity established",
      },
      {
        year: "1975",
        event:
          "Bukit Merah estate develops rapidly — hawker stalls emerge to feed the growing community",
      },
      {
        year: "1985",
        event:
          "ABC Brickworks Market formalised — satay stall begins building its loyal following",
      },
      {
        year: "2000s",
        event:
          "Word spreads across Singapore — regulars drive from across the island for the satay",
      },
      {
        year: "2020",
        event:
          "Remains one of the most respected off-the-beaten-path hawker centres in Central Singapore",
      },
    ],
    legendaryStalls: [
      {
        name: "ABC Satay",
        dish: "Charcoal Satay",
        story:
          "The stall that built the centre's reputation. Beef, chicken, and mutton skewers over real charcoal, peanut sauce made fresh daily. No Michelin star, no Instagram fame — just the queue that forms every evening without fail.",
      },
      {
        name: "Brickworks BBQ Chicken Wings",
        dish: "BBQ Chicken Wings",
        story:
          "Marinated in a dark soy and spice blend, grilled until the edges catch and caramelise. The kind of wings that make people order doubles before they've finished the first round.",
      },
      {
        name: "ABC Carrot Cake",
        dish: "Carrot Cake",
        story:
          "Both white and black versions, fried individually to order. The black version is stickier, richer, and the one regulars always choose. A neighbourhood benchmark that holds its own against any famous stall.",
      },
    ],
  },
  {
    id: 15,
    slug: "buona-vista-market",
    name: "Buona Vista Market",
    address: "43 Holland Drive, Holland Village",
    lat: 1.3071,
    lng: 103.7900,
    region: "West",
    tag: "Budget Eats",
    hours: "6am–9pm daily",
    imageUrl: "/images/hawkers/buona-vista.webp",
    description:
      "A neighbourhood market near Holland Village loved by students, expats and families for affordable, quality hawker food.",
    mustTry: ["Prawn Noodles", "Wanton Mee", "Nasi Lemak", "Kopi"],
    famousFor:
      "Affordable food steps away from trendy Holland Village — locals eat here before hitting the cafes.",
    michelinNote: "",
    vibes: ["Students", "Expats", "Families", "Pre-Holland Village stop"],
    nearestMRT: "Buona Vista (EW/CC Line) — 10 min walk",
    tipForVisitors:
      "Great budget option near Holland Village. Eat here first then explore the Holland Village cafes and bars.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
    story:
      "Buona Vista sits in one of Singapore's most unlikely food pockets — tucked between the polished cafes of Holland Village and the sprawling research campuses of one-north. The market serves a community that is part old-guard neighbourhood, part international academic, and entirely unpretentious. Students from INSEAD and NUS eat alongside the retirees who have lived in the surrounding flats since the 1970s. The prices reflect none of the Holland Village premium that exists just minutes away. That is the entire point.",
    vibeCheck: "Holland Village's sensible, delicious secret",
    localQuote:
      "Close to Holland Village but without the Holland Village prices. The sensible choice, every time.",
    timeline: [
      {
        year: "1970s",
        event:
          "Holland Drive estate established — Buona Vista market serves the new residential community",
      },
      {
        year: "1985",
        event:
          "INSEAD Singapore campus opens nearby — student population adds to the centre's daily crowd",
      },
      {
        year: "2000s",
        event:
          "one-north research district develops — a new generation of weekday lunch regulars arrives",
      },
      {
        year: "2010s",
        event:
          "Holland Village gentrification accelerates — Buona Vista remains resolutely affordable",
      },
      {
        year: "2020",
        event:
          "Continues as the neighbourhood's primary food hub — untouched by the café culture next door",
      },
    ],
    legendaryStalls: [
      {
        name: "Buona Vista Prawn Noodles",
        dish: "Prawn Noodles",
        story:
          "Rich, deeply reduced prawn broth that takes hours to build. The shells are cracked and simmered until the stock turns a deep amber. A bowl that professors and cleaners queue for with equal patience.",
      },
      {
        name: "Holland Drive Wanton Mee",
        dish: "Wanton Mee",
        story:
          "Springy egg noodles tossed in a char siew sauce with crispy lard. The wantons are hand-folded and thin-skinned. A breakfast that has been starting the neighbourhood's mornings for thirty years.",
      },
      {
        name: "Buona Vista Kaya Toast & Kopi",
        dish: "Kaya Toast Set",
        story:
          "Old-school kopitiam coffee from a sock filter, kaya toast with cold butter, soft-boiled eggs with white pepper and dark soy. The most Singaporean breakfast there is, done without theatrics.",
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
    lat: 1.3138,
    lng: 103.7641,
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
    address: "505 Jurong West Street 52, Jurong West",
    lat: 1.3496,
    lng: 103.7028,
    region: "West",
    tag: "Budget Eats",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/jurong-west-505.webp",
    description:
      "A large neighbourhood hawker centre serving the Jurong West community with a wide variety of affordable food options.",
    mustTry: ["Bak Chor Mee", "Chicken Rice", "Nasi Lemak", "Teh Tarik"],
    famousFor:
      "One of the largest and most complete hawker centres in West Singapore.",
    michelinNote: "",
    vibes: ["West Singapore locals", "Budget dining", "Families", "Industrial workers"],
    nearestMRT: "Jurong West (EW Line) — 15 min walk",
    tipForVisitors:
      "Good stop if exploring Jurong area including Jurong Lake Gardens or the Science Centre.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
    story:
      "Jurong West 505 serves the furthest reaches of Singapore's western edge — a town that was marshland and rubber plantations within living memory, transformed into one of the country's largest residential districts in the span of a generation. The people who moved here first built their communities around places like this market. The food reflects that diversity: Malay, Chinese, Indian, and everything in between, cooked by families who have run the same stalls since the 1980s. In Singapore's West, 505 is simply where you eat.",
    vibeCheck: "The West's most reliable, most honest, most complete hawker centre",
    localQuote:
      "Jurong West people know their food. And they know that 505 has everything they need.",
    timeline: [
      {
        year: "1970s",
        event:
          "Jurong West developed as a new industrial and residential town on reclaimed land",
      },
      {
        year: "1982",
        event:
          "505 Market established to serve the rapidly growing Jurong West population",
      },
      {
        year: "1990s",
        event:
          "Industrial workers and families establish the centre's daily rhythms — breakfast at 6am, dinner at 7pm",
      },
      {
        year: "2000s",
        event:
          "Second generation of stall operators takes over — recipes and regulars pass between generations",
      },
      {
        year: "2020",
        event:
          "505 Market remains the primary food hub for one of Singapore's largest towns",
      },
    ],
    legendaryStalls: [
      {
        name: "Jurong West Bak Chor Mee",
        dish: "Bak Chor Mee",
        story:
          "Minced pork noodles with vinegar, lard, and braised mushrooms. The dry version is the one to order — every strand coated, every bite balanced between acid and richness. A bowl worth the drive from the East.",
      },
      {
        name: "505 Nasi Lemak",
        dish: "Nasi Lemak",
        story:
          "Coconut rice wrapped in pandan leaf, served with ikan bilis, egg, sambal, and otah on the side. Opens at 6am and sells out before 9. The West's answer to Adam Road — quieter, just as good.",
      },
      {
        name: "West Coast Teh Tarik Stall",
        dish: "Teh Tarik & Roti",
        story:
          "Pulled tea with a proper froth, kaya toast done on a charcoal grill. The uncle has been opening at 5:30am for twenty years. The kind of stall that powers an entire community before the sun is fully up.",
      },
    ],
  },
  {
    id: 18,
    slug: "yishun-park-hawker-centre",
    name: "Yishun Park Hawker Centre",
    address: "51 Yishun Avenue 11, Yishun",
    lat: 1.4291,
    lng: 103.8354,
    region: "North",
    tag: "Local Favourite",
    hours: "7am–10pm daily",
    imageUrl: "/images/hawkers/yishun-park.jpg",
    description:
      "A modern hawker centre in Yishun with a good mix of traditional and contemporary hawker stalls.",
    mustTry: ["Laksa", "Chicken Rice", "Roti Prata", "Kopi"],
    famousFor:
      "One of the newer hawker centres in the North — clean, well-ventilated and popular with young families.",
    michelinNote: "",
    vibes: ["North Singapore locals", "Young families", "Modern hawker experience"],
    nearestMRT: "Yishun (NS Line) — 10 min walk",
    tipForVisitors:
      "Good stop if visiting Lower Seletar Reservoir or Yishun Dam area.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
    story:
      "Yishun Park Hawker Centre opened in 2016 as part of NEA's push to build a new generation of hawker centres — better ventilated, cleaner, designed with both hawkers and diners in mind. What it inherited was something no design brief can manufacture: a community. Yishun has always had a complicated reputation in Singapore's cultural imagination, but its residents know something outsiders don't — the food up here is excellent, unpretentious, and priced for real people. The hawker centre filled with regulars almost immediately. The North always knew how to eat.",
    vibeCheck: "New building, old soul — the North feeds its own well",
    localQuote:
      "The north of Singapore has its own excellent food culture. You do not need to travel to the city centre to eat well.",
    timeline: [
      {
        year: "1980s",
        event:
          "Yishun New Town established — one of Singapore's largest northern residential estates",
      },
      {
        year: "2000s",
        event:
          "Food scene in Yishun matures — residents develop strong local food preferences",
      },
      {
        year: "2016",
        event:
          "Yishun Park Hawker Centre opens as part of NEA's new-generation hawker centre programme",
      },
      {
        year: "2017",
        event:
          "Centre fills quickly with regulars — proves the community's appetite for a proper local hawker",
      },
      {
        year: "2020",
        event:
          "Established as one of the North's most popular and well-regarded food centres",
      },
    ],
    legendaryStalls: [
      {
        name: "Yishun Laksa",
        dish: "Laksa",
        story:
          "Rich coconut gravy with thick bee hoon, cockles, and tau pok. The broth is made fresh each morning — you can tell by the colour. North Singapore has always had good laksa. This stall proves it.",
      },
      {
        name: "Park Chicken Rice",
        dish: "Hainanese Chicken Rice",
        story:
          "Poached chicken, fragrant rice, clear soup, three dipping sauces. The chicken is silky and properly rested. The regulars have been coming since the first week the centre opened and have never considered leaving.",
      },
      {
        name: "Yishun Roti Prata",
        dish: "Roti Prata",
        story:
          "Crispy-edged, fluffy-centred prata cooked on a well-seasoned griddle. The curry on the side has been simmering since before dawn. Weekend mornings here feel like the right way to start a day.",
      },
    ],
  },
  {
    id: 19,
    slug: "sembawang-hills-food-centre",
    name: "Sembawang Hills Food Centre",
    address: "590 Upper Thomson Road, Sembawang",
    lat: 1.3666,
    lng: 103.8280,
    region: "North",
    tag: "Supper Spot",
    hours: "6am–late night",
    imageUrl: "/images/hawkers/sembawang-hills.jpg",
    description:
      "A beloved neighbourhood food centre along Upper Thomson Road — famous for its late night supper crowd and excellent local food.",
    mustTry: ["Bak Kut Teh", "Carrot Cake", "Prawn Noodles", "Durian (seasonal)"],
    famousFor:
      "Late night supper destination for North Singapore — famous bak kut teh and durian stalls.",
    michelinNote: "",
    vibes: ["Late night supper", "North locals", "Durian lovers", "Families"],
    nearestMRT: "Marymount (CC Line) — 15 min walk or bus",
    tipForVisitors:
      "Upper Thomson Road is a great food street — combine with a visit to the surrounding nature areas.",
    halal: false,
    openLate: true,
    budgetPerPax: "$5–$10",
    story:
      "Sembawang Hills Food Centre sits along Upper Thomson Road — one of Singapore's last great supper streets, a corridor of old trees and older food traditions that survived the city's relentless redevelopment. The food centre anchors the northern end of the strip, surrounded by bak kut teh restaurants, durian stalls, and the kind of old coffee shops that still use ceiling fans instead of air-conditioning. Late at night, it draws a cross-section of Singapore that you rarely see elsewhere: families, bikers, couples, insomniacs, and people who simply know that the best eating happens after 11pm.",
    vibeCheck: "Where Upper Thomson comes alive after midnight",
    localQuote:
      "Eating under the trees at midnight with a bowl of bak kut teh — this is what Singapore supper culture is all about.",
    timeline: [
      {
        year: "1960s",
        event:
          "Upper Thomson Road establishes itself as a food corridor serving the northern kampung communities",
      },
      {
        year: "1975",
        event:
          "Sembawang Hills Food Centre formalised — anchors the Thomson Road supper strip",
      },
      {
        year: "1990s",
        event:
          "Bak kut teh and durian stalls multiply along Thomson Road — the area's identity crystallises",
      },
      {
        year: "2000s",
        event:
          "Supper culture peaks — the centre becomes a midnight destination for all of Singapore",
      },
      {
        year: "2020",
        event:
          "Upper Thomson Road gazetted for conservation — food centre protected as part of the strip's character",
      },
    ],
    legendaryStalls: [
      {
        name: "Sembawang Bak Kut Teh",
        dish: "Bak Kut Teh",
        story:
          "Peppery, clear Teochew-style broth with tender pork ribs. Ordered with you tiao for dipping and a pot of strong Chinese tea. A bowl that has been closing nights on Upper Thomson for thirty years.",
      },
      {
        name: "Thomson Carrot Cake",
        dish: "Carrot Cake",
        story:
          "Both versions, properly executed — the white is eggy and soft, the black is sweet and slightly charred. Fried individually, never rushed. The kind of stall that defines a neighbourhood's food memory.",
      },
      {
        name: "Hills Prawn Noodles",
        dish: "Prawn Noodles",
        story:
          "A broth built from prawn shells roasted until deeply caramelised. Served with yellow noodles, bee hoon, prawns, and pork ribs. The late-night crowd orders this as the first bowl of the evening, not the last.",
      },
    ],
  },
  {
    id: 20,
    slug: "chong-pang-market",
    name: "Chong Pang Market",
    address: "105 Yishun Ring Road, Yishun",
    lat: 1.4290,
    lng: 103.8337,
    region: "North",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/chong-pang.jpg",
    description:
      "A large and popular market in Yishun serving the northern heartland community with a huge variety of food.",
    mustTry: ["Carrot Cake", "Char Kway Teow", "Mee Goreng", "Fresh Juice"],
    famousFor:
      "One of the most complete hawker centres in the North — everything you need under one roof.",
    michelinNote: "",
    vibes: ["North Singapore locals", "Yishun residents", "Families", "Weekend market"],
    nearestMRT: "Yishun (NS Line) — 10 min walk",
    tipForVisitors:
      "Large wet market upstairs is great for fresh produce. Food centre downstairs has a huge variety.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
    story:
      "Chong Pang Market is one of the last hawker centres in Singapore that still feels like it belongs to another era. Built in the early years of Yishun's development, it has the generous proportions and unhurried atmosphere of a time when hawker centres were the centre of community life, not an amenity alongside it. The wet market upstairs is as important as the food centre below — residents come for both, spending Saturday mornings the way their parents did. The food here is the kind that travels — people drive from the city centre for specific stalls and leave wondering why they don't come more often.",
    vibeCheck: "Old Singapore energy, running on full",
    localQuote:
      "Chong Pang feels different from the newer estates. More old Singapore. More genuine.",
    timeline: [
      {
        year: "1980s",
        event:
          "Yishun New Town built — Chong Pang Market established as the neighbourhood's primary food hub",
      },
      {
        year: "1990s",
        event:
          "Market becomes the social anchor for Yishun's community — wet market and hawker centre inseparable",
      },
      {
        year: "2000s",
        event:
          "Reputation for quality spreads — food lovers begin making the trip from other parts of Singapore",
      },
      {
        year: "2010s",
        event:
          "Several stalls pass to second generation — recipes preserved, regulars retained",
      },
      {
        year: "2020",
        event:
          "Remains one of the most complete and characterful hawker centres in the North",
      },
    ],
    legendaryStalls: [
      {
        name: "Chong Pang Char Kway Teow",
        dish: "Char Kway Teow",
        story:
          "The uncle fries in small batches over high heat — proper wok hei that you can smell from the entrance. Dark soy, lard, cockles, Chinese sausage. A plate that Northerners will put against any CBD version without hesitation.",
      },
      {
        name: "Yishun Mee Goreng",
        dish: "Mee Goreng",
        story:
          "Malay-style fried noodles with tomato, egg, and a sambal that has been building flavour since the stall opened decades ago. Bright orange, slightly sweet, properly spiced. The North's best-kept fried noodle.",
      },
      {
        name: "Chong Pang Fresh Juice",
        dish: "Fresh-Pressed Juice",
        story:
          "Sugarcane, watermelon, starfruit — pressed to order, no syrup, no ice from a bag. The kind of drink that makes Singapore's humidity feel manageable. Regulars order before they've even chosen their food.",
      },
    ],
  },
  {
    id: 21,
    slug: "woodlands-centre-market",
    name: "Woodlands Centre Market",
    address: "Blk 6A Woodlands Centre Road, Woodlands",
    lat: 1.4368,
    lng: 103.7862,
    region: "North",
    tag: "Budget Eats",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/woodlands-centre.jpg",
    description:
      "A neighbourhood hawker centre in Woodlands serving the northernmost community of Singapore close to the Causeway.",
    mustTry: ["Economy Rice", "Nasi Lemak", "Roti Prata", "Laksa"],
    famousFor: "Affordable heartland food in Singapore's northernmost district.",
    michelinNote: "",
    vibes: ["Woodlands locals", "Budget dining", "Families", "Near Causeway"],
    nearestMRT: "Woodlands (NS/TE Line) — 10 min walk",
    tipForVisitors:
      "Good stop before or after crossing to Johor Bahru via the Causeway.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
    story:
      "Woodlands is Singapore's northernmost town, separated from Malaysia by the Causeway and defined by the daily rhythm of that crossing. The food centre at Woodlands Centre reflects that geography — it serves a community that moves between two countries, that wakes before dawn to cross the border, and that returns hungry in the evening. The food is fuel as much as culture: nasi lemak at 5am for the workers crossing to Johor, economy rice at noon for the civil servants and shop owners, roti prata in the evening for families who have been here since Woodlands was jungle.",
    vibeCheck: "Singapore's northern gate — where every meal fuels a crossing",
    localQuote:
      "Woodlands residents wake up at 5am, eat here, and cross to Johor for work. The food gives them the energy to do it.",
    timeline: [
      {
        year: "1970s",
        event:
          "Woodlands developed as Singapore's northernmost residential town near the Causeway",
      },
      {
        year: "1981",
        event:
          "Woodlands Centre Market established as the community's primary food hub",
      },
      {
        year: "1990s",
        event:
          "Causeway traffic increases — the market becomes a daily stop for cross-border commuters",
      },
      {
        year: "2000s",
        event:
          "Woodlands Regional Centre grows — new residents add to the market's diverse crowd",
      },
      {
        year: "2019",
        event:
          "Thomson-East Coast Line opens Woodlands stations — fresh wave of commuters discovers the market",
      },
    ],
    legendaryStalls: [
      {
        name: "Woodlands Nasi Lemak",
        dish: "Nasi Lemak",
        story:
          "Open from 5am for the pre-dawn Causeway crowd. Coconut rice, fried egg, sambal, ikan bilis, and a curry chicken wing. The kind of breakfast that carries people through a full morning of work across the border.",
      },
      {
        name: "Causeway Roti Prata",
        dish: "Roti Prata",
        story:
          "Thin, flaky prata fried fresh on a cast-iron griddle. The curry is mutton-based and properly spiced. Popular with both the Malay and Indian communities who share the northern neighbourhoods.",
      },
      {
        name: "Woodlands Economy Rice",
        dish: "Economy Rice",
        story:
          "A full spread of cooked dishes — vegetables, tofu, meat, eggs — served over white rice. The selection changes daily. Regulars point without looking at prices. That is the economy rice way.",
      },
    ],
  },
  {
    id: 22,
    slug: "toa-payoh-lorong-8-market",
    name: "Toa Payoh Lorong 8 Market",
    address: "Blk 210 Lorong 8 Toa Payoh, Toa Payoh",
    lat: 1.3340,
    lng: 103.8489,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/toa-payoh.jpg",
    description:
      "A classic HDB heartland hawker centre in Toa Payoh — one of Singapore's oldest public housing estates with strong food heritage.",
    mustTry: ["Toa Payoh Lor Mee", "Wanton Mee", "Chicken Rice", "Soon Kueh"],
    famousFor:
      "Heritage hawker food in one of Singapore's most iconic housing estates.",
    michelinNote: "",
    vibes: ["Toa Payoh locals", "Heritage food", "Families", "No-frills"],
    nearestMRT: "Toa Payoh (NS Line) — 10 min walk",
    tipForVisitors:
      "Combine with a walk around Toa Payoh town — one of Singapore's oldest and most characterful HDB estates.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
    story:
      "Toa Payoh was Singapore's first major Housing Development Board satellite town — a model of what public housing could be, built in the late 1960s to prove that Singapore could house its people with dignity. The residents who moved into the first Toa Payoh blocks have watched the town age around them. The hawker centre at Lorong 8 is part of that original fabric. It has not changed dramatically because it has not needed to. The same families eat here across three generations. The same stalls serve the same dishes. In a city that reinvents itself constantly, Toa Payoh Lorong 8 is quietly, stubbornly itself.",
    vibeCheck: "Singapore's original new town, still feeding its own the original way",
    localQuote:
      "Toa Payoh people are deeply loyal to their stalls. The same families have been eating here for thirty years without question.",
    timeline: [
      {
        year: "1968",
        event:
          "Toa Payoh New Town built — Singapore's first major HDB satellite town, a national milestone",
      },
      {
        year: "1970s",
        event:
          "Lorong 8 Market established to serve the new town's rapidly growing population",
      },
      {
        year: "1980s",
        event:
          "First generation of stall operators establishes core dishes — lor mee, wanton mee, chicken rice",
      },
      {
        year: "2000s",
        event:
          "Second generation takes over stalls — recipes passed down, regulars retained without interruption",
      },
      {
        year: "2020",
        event:
          "Toa Payoh Lorong 8 remains one of Singapore's most community-anchored hawker centres",
      },
    ],
    legendaryStalls: [
      {
        name: "Toa Payoh Lor Mee",
        dish: "Lor Mee",
        story:
          "Thick starchy gravy ladled over flat noodles with braised pork, fish cake, and a hard-boiled egg. A splash of vinegar cuts through the richness. The original Toa Payoh lor mee — the one all the others are measured against.",
      },
      {
        name: "Lorong 8 Wanton Mee",
        dish: "Wanton Mee",
        story:
          "Springy noodles in a char siew sauce with crispy lard and soup wantons on the side. The char siew is house-roasted and properly lacquered. A bowl that has started Toa Payoh mornings since before most of its customers were born.",
      },
      {
        name: "Toa Payoh Soon Kueh",
        dish: "Soon Kueh",
        story:
          "Steamed dumplings filled with bamboo shoot, turnip, and dried shrimp. A Teochew specialty that is increasingly rare. The skin is translucent and delicate — the filling is earthy and satisfying. One of the last proper soon kueh stalls in the heartland.",
      },
    ],
  },
  {
    id: 23,
    slug: "golden-shoe-market-street",
    name: "Golden Shoe (Market Street Hawker Centre)",
    address: "161 Market Street, CBD",
    lat: 1.2839,
    lng: 103.8504,
    region: "Central",
    tag: "Office Favourite",
    hours: "Weekdays 7am–3pm",
    imageUrl: "/images/hawkers/golden-shoe.jpg",
    description:
      "A compact CBD hawker centre tucked under Market Street — a weekday lifesaver for office workers hunting chicken rice, wonton mee, and bak chor mee without leaving the district.",
    mustTry: ["Chicken Rice", "Wonton Mee", "Bak Chor Mee"],
    famousFor:
      "The CBD lunch crowd — quick, affordable heritage plates between meetings in the heart of the financial district.",
    michelinNote: "",
    vibes: ["Office workers", "Weekday lunch", "CBD", "Quick meals"],
    nearestMRT: "Raffles Place (EW/NS Line) — 3 min walk",
    tipForVisitors:
      "Arrive before noon; many stalls wind down by mid-afternoon on weekdays. Closed or quiet on weekends.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "Golden Shoe — officially Market Street Hawker Centre — takes its name from the shape of the roads around it, which early Singaporeans said resembled a golden shoe on the map. It sits deep in the CBD, tucked under an office building, operating on the compressed schedule of the financial district: open before the bankers arrive, closed before the tourists start looking for dinner. For decades it has fed the suits and clerks who power the Raffles Place district. The chicken rice here has been eaten standing up, briefcase in hand, by people who have gone on to run companies. That is the kind of hawker centre this is.",
    vibeCheck: "The CBD's best lunch eaten fastest by the people who can least afford to stop",
    localQuote:
      "The best chicken rice in the CBD, eaten standing up by people in suits. Boardroom decisions have been made on a full stomach from here.",
    timeline: [
      {
        year: "1970s",
        event:
          "Market Street area develops as Singapore's financial district — demand for affordable lunch grows",
      },
      {
        year: "1978",
        event:
          "Golden Shoe Market established under Market Street — becomes the CBD's primary hawker centre",
      },
      {
        year: "1990s",
        event:
          "Raffles Place financial district expands — the centre's lunch crowd grows exponentially",
      },
      {
        year: "2000s",
        event:
          "Office towers multiply around the centre — Golden Shoe feeds a district of 50,000 daily workers",
      },
      {
        year: "2020",
        event:
          "Remains the most beloved weekday hawker centre in Singapore's Central Business District",
      },
    ],
    legendaryStalls: [
      {
        name: "Golden Shoe Chicken Rice",
        dish: "Hainanese Chicken Rice",
        story:
          "Poached chicken with oily rice, three dipping sauces, and clear soup. Ordered by pointing, eaten quickly, remembered for longer than you expect. The CBD's most dependable plate — consistent for three decades.",
      },
      {
        name: "Market Street Wonton Mee",
        dish: "Wonton Mee",
        story:
          "Thin egg noodles with char siew, a pair of wonton dumplings, and soup on the side. The char siew is roasted daily. Bankers eat this at 11:45am to beat the queue. It is absolutely worth the strategy.",
      },
      {
        name: "Golden Shoe Bak Chor Mee",
        dish: "Bak Chor Mee",
        story:
          "Minced pork noodles with vinegar, mushrooms, and lard. The dry version coats every strand. A bowl complex enough to make you forget you're eating at your desk. The CBD's most satisfying working lunch.",
      },
    ],
  },
  {
    id: 24,
    slug: "hong-lim-market-food-centre",
    name: "Hong Lim Market & Food Centre",
    address: "531A Upper Cross Street, Chinatown",
    lat: 1.2816,
    lng: 103.8448,
    region: "Central",
    tag: "Michelin Alert",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/hong-lim.jpg",
    description:
      "A Chinatown institution stacked with legendary stalls, including Michelin Bib Gourmand favourite Outram Park Fried Kway Teow Mee.",
    mustTry: [
      "Outram Park Fried Kway Teow Mee",
      "Carrot Cake",
      "Hakka Thunder Tea Rice",
    ],
    famousFor:
      "Home of Outram Park Fried Kway Teow Mee — smoky plates that draw queues from across the island.",
    michelinNote:
      "Outram Park Fried Kway Teow Mee holds Michelin Bib Gourmand recognition",
    vibes: ["Foodies", "Chinatown", "Michelin hunters", "Lunch queues"],
    nearestMRT: "Chinatown (NE/DT Line) — 5 min walk",
    tipForVisitors:
      "Come early for fried kway teow; stalls can sell out. Explore the upper floors for lesser-known gems.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "Hong Lim Market & Food Centre stands at the edge of Chinatown, on ground that has been a centre of Chinese community life since the 1880s. The original Hong Lim Green — the open space the centre looks out onto — was where early Hokkien and Cantonese immigrants gathered, traded, and argued. The food centre that rose here carries that history without announcing it. The char kway teow uncle who fries one portion at a time and refuses to rush is not being difficult — he is being precise. In this part of Singapore, that kind of precision has always been the point.",
    vibeCheck: "Chinatown's most serious hawker centre — no shortcuts, no shortcuts accepted",
    localQuote:
      "The char kway teow uncle fries one portion at a time and refuses to rush. The queue respects this completely.",
    timeline: [
      {
        year: "1880s",
        event:
          "Hong Lim Green established as a gathering point for Hokkien and Cantonese immigrant communities",
      },
      {
        year: "1960s",
        event:
          "Hawker stalls formalise around Hong Lim Green — Chinatown's street food moves indoors",
      },
      {
        year: "1978",
        event:
          "Hong Lim Market & Food Centre opens in its current form — multiple floors of stalls",
      },
      {
        year: "2016",
        event:
          "Outram Park Fried Kway Teow Mee receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "Named by food writers as one of Singapore's most authentic Chinese hawker experiences",
      },
    ],
    legendaryStalls: [
      {
        name: "Outram Park Fried Kway Teow Mee",
        dish: "Char Kway Teow",
        story:
          "Michelin Bib Gourmand. One or two portions at a time, over the highest possible heat. Dark soy, lard, cockles, Chinese sausage, beansprouts. The wok hei is the kind you feel in your chest. One of the great plates of Singapore.",
      },
      {
        name: "Hong Lim Carrot Cake",
        dish: "Carrot Cake",
        story:
          "White and black, both versions done with patience. The white is eggy and delicate. The black is sticky and slightly sweet. Fried in a seasoned wok that has not been cleaned into blandness. A reliable benchmark.",
      },
      {
        name: "Hakka Thunder Tea Rice",
        dish: "Lei Cha Fan",
        story:
          "A Hakka specialty almost extinct in Singapore — green tea poured over rice with an array of blanched vegetables and toppings. Earthy, herbal, and unlike anything else in the hawker centre repertoire. One of the last proper versions in the city.",
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
    lat: 1.2837,
    lng: 103.8430,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
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
      "Pair with a wander through People's Park Complex — wet market upstairs, food hall below.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "People's Park Food Centre stands on one of the oldest market sites in Singapore. The municipality set up a food shelter for street hawkers here in 1923, and by 1940 it had grown into the island's largest market, famous for durian stalls that traded until two in the morning. A fire in December 1966 destroyed 186 stalls and shops. The three-storey complex that replaced it opened in 1969, with food stalls on the ground floor and homes stacked above. Today the food tells the story of a changing Chinatown: Sichuan mala and Chongqing grilled fish from newer arrivals, Shanghainese dumpling stalls, and old Cantonese hands still steaming char siew bao and braising loh mei the way their customers' grandparents knew it.",
    vibeCheck: "A brutalist icon that feeds its community the way it always has — without apology",
    localQuote:
      "Tourists walk straight past. Locals walk right in. That is the entire story of this place.",
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
  },
  {
    id: 26,
    slug: "east-coast-lagoon-food-village",
    name: "East Coast Lagoon Food Village",
    address: "1220 East Coast Pkwy, East Coast",
    lat: 1.3006,
    lng: 103.9116,
    region: "East",
    tag: "Supper Spot",
    hours: "12pm–late night daily",
    imageUrl: "/images/hawkers/east-coast-lagoon.jpg",
    description:
      "Open-air seaside hawker village — satay smoke, chilli crab, sambal stingray, and BBQ wings with the sea steps away.",
    mustTry: [
      "Satay",
      "Chilli Crab",
      "Sambal Stingray",
      "BBQ Chicken Wings",
    ],
    famousFor:
      "Open-air seaside satay and seafood — a classic East Coast supper under the stars.",
    michelinNote:
      "Featured in Michelin Guide as a recommended Singapore experience",
    vibes: ["Sea breeze", "Supper crew", "Families", "Weekend nights"],
    nearestMRT: "Bedok (EW Line) — then Grab",
    tipForVisitors:
      "Train to Bedok and Grab in for convenience. Bring mosquito repellent after dark by the coast.",
    halal: false,
    openLate: true,
    budgetPerPax: "$12–$25",
    story:
      "East Coast Lagoon Food Village is the most cinematic hawker centre in Singapore. Open to the sea breeze, framed by casuarina trees, with the sound of waves competing with the sizzle of satay — it operates on a frequency that no indoor hawker centre can replicate. It was established in the 1970s when East Coast Park was reclaimed from the sea and handed to the public as parkland. The food village grew alongside the park's culture of cycling, barbecues, and weekend escapes. Today it is the definitive Singapore Saturday evening: sambal stingray on a banana leaf, cold beer in a plastic cup, and the sea just close enough to remind you that this city is an island.",
    vibeCheck: "Singapore by the sea — the meal, the breeze, the whole improbable thing",
    localQuote:
      "Satay by the sea with a cold beer as the sun goes down. Singapore does not get more perfect than this.",
    timeline: [
      {
        year: "1970s",
        event:
          "East Coast Park created on reclaimed land — food village established as part of the public park",
      },
      {
        year: "1980s",
        event:
          "Satay stalls and seafood vendors anchor the village — the open-air format becomes iconic",
      },
      {
        year: "1990s",
        event:
          "East Coast Park becomes Singapore's most popular recreational green — food village follows",
      },
      {
        year: "2000s",
        event:
          "Sambal stingray becomes the village's signature dish — banana leaf service becomes its ritual",
      },
      {
        year: "2020",
        event:
          "East Coast Lagoon named in Michelin Guide — confirms what East-siders already knew",
      },
    ],
    legendaryStalls: [
      {
        name: "East Coast Satay",
        dish: "Charcoal Satay",
        story:
          "Beef, chicken, and mutton skewers grilled over real charcoal with a peanut sauce that is thick and properly complex. Ordered by the dozen. Eaten outdoors with the sea in the background. The most Singapore thing you can do on a weekend evening.",
      },
      {
        name: "Lagoon Sambal Stingray",
        dish: "Sambal Stingray",
        story:
          "Stingray grilled on a banana leaf, loaded with house-made sambal, covered and steamed until the flesh pulls easily from the cartilage. Eaten with kangkong and rice. The East Coast signature that other hawker centres have tried and failed to replicate.",
      },
      {
        name: "BBQ Seafood Station",
        dish: "BBQ Chilli Crab & Wings",
        story:
          "Chilli crab with mantou, BBQ chicken wings, and lala in broth. Best ordered as a table spread and eaten over two hours. The East Coast way of eating — slow, communal, unhurried by anything except the tide.",
      },
    ],
  },
  {
    id: 27,
    slug: "marine-parade-food-centre",
    name: "Marine Parade Food Centre",
    address: "76 Marine Parade Central, Marine Parade",
    lat: 1.3021,
    lng: 103.9050,
    region: "East",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/marine-parade.jpg",
    description:
      "Neighbourhood Katong hawker centre — laksa, rojak, and satay bee hoon for east-side families.",
    mustTry: ["Katong Laksa", "Rojak", "Satay Bee Hoon"],
    famousFor:
      "The neighbourhood Katong centre — heritage flavours a short walk from Marine Parade.",
    michelinNote: "",
    vibes: ["East Coast locals", "Families", "Katong", "Breakfast"],
    nearestMRT: "Marine Parade (TE Line) — 5 min walk",
    tipForVisitors:
      "Combine with a walk toward Katong shophouses — perfect east-side food crawl.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
    story:
      "Marine Parade is Katong's neighbourhood market — the one that serves the community between the famous shophouses on East Coast Road and the sea. Built in the 1970s to serve the Marine Parade estate, it has been feeding the families of this predominantly Peranakan and Eurasian neighbourhood for fifty years. The laksa here is Katong-style — thick coconut broth, cockles, and cut noodles short enough to eat with a spoon alone. The neighbourhood has gentrified considerably around it. The food centre has not followed suit. That is not stubbornness. That is dignity.",
    vibeCheck: "Katong's neighbourhood kitchen — the one the locals actually use",
    localQuote:
      "The best laksa is not always at the famous place. The Katong locals know exactly where to go.",
    timeline: [
      {
        year: "1970s",
        event:
          "Marine Parade estate developed on reclaimed land — food centre built as the community anchor",
      },
      {
        year: "1980s",
        event:
          "Katong-style laksa establishes itself as the centre's signature — a neighbourhood ritual begins",
      },
      {
        year: "2000s",
        event:
          "East Coast Road gentrifies — Marine Parade Food Centre remains affordable and local",
      },
      {
        year: "2011",
        event:
          "Marine Parade MRT station planned — new accessibility brings the centre wider recognition",
      },
      {
        year: "2020",
        event:
          "Remains the definitive neighbourhood food centre for Marine Parade's long-term community",
      },
    ],
    legendaryStalls: [
      {
        name: "Marine Parade Katong Laksa",
        dish: "Katong Laksa",
        story:
          "Thick, coconut-rich broth with cut bee hoon, cockles, tau pok, and a sambal that is properly spiced. The noodles are pre-cut so you can eat with a spoon. The Katong way — unpretentious, deeply flavoured, impossible to stop at one bowl.",
      },
      {
        name: "Katong Rojak",
        dish: "Rojak",
        story:
          "Pineapple, cucumber, turnip, you tiao, and tau pok dressed in a thick shrimp paste sauce and crushed peanuts. The sauce is the thing — dark, sweet, and funky in exactly the right way. A dish that tourists overlook and locals prioritise.",
      },
      {
        name: "Marine Parade Satay Bee Hoon",
        dish: "Satay Bee Hoon",
        story:
          "Thin rice noodles in a peanut-based gravy with satay, cockles, and vegetables. A dish unique to Singapore's east coast hawker centres — rich, peanutty, and unlike anything else. The kind of plate that makes you wonder why it isn't everywhere.",
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
    lat: 1.3065,
    lng: 103.8573,
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
    address: "20 Ghim Moh Road, Ghim Moh",
    lat: 1.3101,
    lng: 103.7888,
    region: "West",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/ghim-moh.jpg",
    description:
      "West-side institution home to Michelin Bib Gourmand chwee kueh, plus laksa and wonton noodles.",
    mustTry: ["Ghim Moh Chwee Kueh", "Laksa", "Wonton Noodles"],
    famousFor:
      "Ghim Moh Chwee Kueh — silky rice cakes with generous chai poh topping.",
    michelinNote:
      "Ghim Moh Chwee Kueh holds Michelin Bib Gourmand recognition",
    vibes: ["Westies", "Breakfast", "Families", "Hawker heritage"],
    nearestMRT: "Buona Vista (EW/CC Line) — 10 min walk",
    tipForVisitors:
      "Morning is busiest for chwee kueh and market shopping — come before 9am on weekends.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
    localQuote:
      "The chwee kueh here has been made the same way for five decades. Generations of Holland Road families will confirm it is the best.",
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
    lat: 1.2891,
    lng: 103.8128,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–11pm daily",
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
    localQuote:
      "Those who know about this place tend to keep it to themselves. The food quality here is exceptional and consistently so.",
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
  },
  {
    id: 31,
    slug: "bishan-street-13-food-centre",
    name: "Bishan Street 13 Food Centre",
    address: "Blk 510 Bishan Street 13, Bishan",
    lat: 1.3509,
    lng: 103.8490,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/bishan-st13.jpg",
    description:
      "A popular heartland centre where families queue for prata, chicken rice, and bak chor mee before school and work.",
    mustTry: ["Roti Prata", "Chicken Rice", "Bak Chor Mee"],
    famousFor:
      "Heartland breakfast and dinner — a true Bishan neighbourhood canteen.",
    michelinNote: "",
    vibes: ["Bishan", "Families", "Breakfast", "Heartland"],
    nearestMRT: "Bishan (NS/CC Line) — 8 min walk",
    tipForVisitors:
      "Weekend mornings see the longest prata lines — patience pays off.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
    story:
      "Bishan Street 13 Food Centre sits in the middle of one of Singapore's most well-planned towns — a place of wide pavements, mature trees, and the kind of thoughtful HDB architecture that the government built in the 1980s when it was trying to prove that public housing could be beautiful. The food centre is the social engine of the neighbourhood: where children eat before school, where retirees linger over kopi, where families settle in on Sunday mornings with no particular urgency. The roti prata before a football match is a Bishan institution. So is everything else here.",
    vibeCheck: "Bishan's heartbeat — the place where the neighbourhood actually lives",
    localQuote:
      "The roti prata before the football match is a Bishan tradition. Win or lose, the prata is always excellent.",
    timeline: [
      {
        year: "1980s",
        event:
          "Bishan New Town developed — one of Singapore's most thoughtfully planned HDB estates",
      },
      {
        year: "1986",
        event:
          "Bishan Street 13 Food Centre opens — immediately becomes the neighbourhood's primary food hub",
      },
      {
        year: "1990s",
        event:
          "Core stalls establish themselves — prata, chicken rice, bak chor mee become Bishan staples",
      },
      {
        year: "2000s",
        event:
          "Second generation of stall operators takes over — the centre's character is preserved without interruption",
      },
      {
        year: "2020",
        event:
          "Remains the most-visited food centre in Bishan — a genuine community institution",
      },
    ],
    legendaryStalls: [
      {
        name: "Bishan Roti Prata",
        dish: "Roti Prata",
        story:
          "Thin, flaky prata fried on a well-seasoned cast-iron plate. The edges are crispy, the centre is soft. The curry on the side has been simmering since before the first customers arrived. Weekend mornings here require patience and reward it.",
      },
      {
        name: "Street 13 Chicken Rice",
        dish: "Hainanese Chicken Rice",
        story:
          "Poached chicken, fragrant rice cooked in chicken broth, three dipping sauces, and a bowl of clear soup. The kind of chicken rice that makes you understand why Singapore considers this a national dish. Reliable, precise, and never rushed.",
      },
      {
        name: "Bishan Bak Chor Mee",
        dish: "Bak Chor Mee",
        story:
          "Minced pork noodles with vinegar, mushrooms, and lard. The dry version coats every strand in the sauce. The soup is clear and properly seasoned. A bowl complex enough to sustain a Bishan resident through an entire working morning.",
      },
    ],
  },
  {
    id: 32,
    slug: "pasir-panjang-food-centre",
    name: "Pasir Panjang Food Centre",
    address: "121 Pasir Panjang Road, Pasir Panjang",
    lat: 1.2763,
    lng: 103.7921,
    region: "West",
    tag: "Hidden Gem",
    hours: "6am–10pm daily",
    imageUrl: "/images/hawkers/pasir-panjang.webp",
    description:
      "A quiet underrated hawker centre near the Southern Ridges — zi char and stir-fry favourites without the city buzz.",
    mustTry: ["Zi Char", "Sambal Sotong", "Prawn Paste Chicken"],
    famousFor:
      "Quiet centre near the Southern Ridges — underrated zi char and wok favourites.",
    michelinNote: "",
    vibes: ["West Coast", "Zi char", "Quiet eats", "Hikers"],
    nearestMRT: "Pasir Panjang (CC Line) — 8 min walk",
    tipForVisitors:
      "Pair with Kent Ridge or Southern Ridges — reward yourself with a communal zi char feast.",
    halal: false,
    openLate: false,
    budgetPerPax: "$5–$12",
    story:
      "Pasir Panjang — 'long sand' in Malay — was the beach that edged Singapore's southwestern shore before land reclamation pushed the coast outward. The food centre that bears the name sits near the Southern Ridges, surrounded by the last traces of the old kampung life that once defined this part of the island. The zi char stalls here cook for serious eaters — people who have hiked the ridges and arrived with genuine appetites. The sambal sotong is made fresh. The prawn paste chicken is fried to order. In a city that often favours novelty, Pasir Panjang Food Centre is quietly, confidently old.",
    vibeCheck: "The Southern Ridges' reward — zi char for people who have earned it",
    localQuote:
      "Come after hiking the Southern Ridges. It is the best possible reward for the effort.",
    timeline: [
      {
        year: "1950s",
        event:
          "Pasir Panjang establishes itself as a kampung community along Singapore's southwestern shore",
      },
      {
        year: "1972",
        event:
          "Battle of Pasir Panjang memorial established nearby — the area's wartime history formalised",
      },
      {
        year: "1980s",
        event:
          "Pasir Panjang Food Centre opens — serves the remaining kampung community and new HDB residents",
      },
      {
        year: "2000s",
        event:
          "Southern Ridges park connector opens — hikers discover the food centre as a post-trail destination",
      },
      {
        year: "2020",
        event:
          "Quiet, consistent, and completely beloved by the community that has always known about it",
      },
    ],
    legendaryStalls: [
      {
        name: "Pasir Panjang Zi Char",
        dish: "Zi Char Spread",
        story:
          "A full zi char menu cooked to order over high heat. The sambal kangkong is properly blistered, the tofu is silky inside and crispy out. Best ordered as a table of four after the Southern Ridges walk — portions are made for sharing and for hunger.",
      },
      {
        name: "Southern Ridges Sambal Sotong",
        dish: "Sambal Sotong",
        story:
          "Squid wok-fried in a house-made sambal with onion and fresh chilli. The sambal is made each morning — you can taste the difference from the pre-made versions. Tender, spiced, and deeply satisfying in the way that only fresh sambal achieves.",
      },
      {
        name: "Prawn Paste Chicken",
        dish: "Har Cheong Gai",
        story:
          "Chicken marinated in fermented prawn paste and fried until the crust shatters. The prawn paste is pungent and complex — it perfumes the meat all the way through. A dish that rewards the adventurous and converts the hesitant without fail.",
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
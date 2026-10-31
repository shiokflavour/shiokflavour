/*
 * Data for the interactive parts of /blog/hawker-food-near-marina-bay-sands.
 * Stall details mirror the article text. "Window" is our guide to when the
 * stalls worth the trip are trading, not official opening hours.
 */
import type { WeekHours } from "./cafes";
import type { AreaGuide, GuideCentre, GuideLandmark } from "./area-guide-types";

const DAILY = (o: number, c: number): WeekHours => Array.from({ length: 7 }, () => [[o, c]]);
const WEEKDAYS = (o: number, c: number): WeekHours => [null, [[o, c]], [[o, c]], [[o, c]], [[o, c]], [[o, c]], null];

/** Satay Street, Boon Tat Street: 7pm to 3am weekdays, from 3pm at weekends. */
const SATAY_STREET: WeekHours = [
  [[0, 180], [900, 1440]], // Sun
  [[0, 180], [1140, 1440]], // Mon
  [[0, 180], [1140, 1440]],
  [[0, 180], [1140, 1440]],
  [[0, 180], [1140, 1440]],
  [[0, 180], [1140, 1440]], // Fri
  [[0, 180], [900, 1440]], // Sat
];

const BAY_CENTRES: GuideCentre[] = [
  {
    slug: "lau-pa-sat",
    name: "Lau Pa Sat",
    short: "Lau Pa Sat",
    href: "/hawker/lau-pa-sat",
    heading: "Lau Pa Sat: The Closest, And Open Around The Clock",
    color: "#E8622A",
    lat: 1.2803,
    lng: 103.8503,
    routes: { mbs: "1 stop to Downtown (DT17), Exit A or E", gardens: "TEL to Shenton Way (TE19), Exit 3" },
    bestFor: "Dinner and late nights",
    closures: "Never. The hall is open 24 hours",
    window: DAILY(0, 1440),
    allDayLabel: "Open 24 hours",
    live: { hours: SATAY_STREET, on: "Satay Street is on", offPrefix: "satay from" },
    orders: [
      {
        dish: "Satay",
        stall: "Satay Street",
        unit: "FC1 to FC10",
        note: "Chicken, mutton and beef sticks with peanut sauce. Check the price per stick first.",
        href: "/food-heritage/satay",
        icon: "flame",
      },
      {
        dish: "Char kway teow",
        stall: "Lao Fu Zi Fried Kway Teow",
        unit: "#74 and #75",
        note: "Bib Gourmand wok hei. Order the black version.",
        href: "/food-heritage/char-kway-teow",
        icon: "flame",
      },
      {
        dish: "Mee soto and mee rebus",
        stall: "Warong Pak Sapari",
        unit: "#58",
        note: "Michelin-recognised Malay stall. Long queues, and dishes sell out.",
        href: "/food-heritage/mee-rebus",
        icon: "soup",
      },
    ],
  },
  {
    slug: "market-street",
    name: "Market Street Hawker Centre",
    short: "Market Street",
    href: "/hawker/golden-shoe-market-street",
    heading: "Market Street Hawker Centre: The Old Golden Shoe, Reborn",
    color: "#9B8CF0",
    lat: 1.284076,
    lng: 103.850105,
    routes: { mbs: "1 stop to Downtown (DT17), then 10 min walk", gardens: "TEL to Shenton Way (TE19), then walk" },
    bestFor: "A weekday CBD lunch",
    closures: "Most stalls Monday to Friday only",
    window: WEEKDAYS(420, 900),
    orders: [
      {
        dish: "Wanton mee",
        stall: "Tiong Bahru Wanton Mee",
        unit: "#02-19",
        note: "Springy noodles, char siew and dumplings. Also open on Saturday mornings.",
        href: "/food-heritage/wanton-mee",
        icon: "noodles",
      },
      {
        dish: "Ipoh hor fun",
        stall: "Ah Liang Ipoh Hor Fun",
        unit: "#02-04",
        note: "Silky flat noodles with fried fish dumplings.",
        icon: "soup",
      },
      {
        dish: "Kopi and toast",
        stall: "Coffee Break",
        unit: "#03-03",
        note: "Toast with spreads like black sesame. Decode the kopi first.",
        href: "/hawker-guide/kopi-decoder",
        icon: "coffee",
      },
    ],
  },
  {
    slug: "amoy-street",
    name: "Amoy Street Food Centre",
    short: "Amoy Street",
    href: "/hawker/amoy-street-food-centre",
    heading: "Amoy Street Food Centre: Michelin Density, Weekday Hours",
    color: "#3CB98A",
    lat: 1.279129,
    lng: 103.846985,
    routes: { mbs: "2 stops to Telok Ayer (DT18), Exit A", gardens: "TEL to Maxwell (TE18), then walk" },
    bestFor: "Michelin stalls on a weekday",
    closures: "Star stalls closed at weekends",
    window: [[[540, 870]], [[480, 870]], [[480, 870]], [[480, 870]], [[480, 870]], [[480, 870]], [[540, 870]]],
    orders: [
      {
        dish: "Singapore-style ramen",
        stall: "A Noodle Story",
        unit: "#01-39",
        note: "Bib Gourmand. A hawker take on the Japanese bowl. Monday to Friday only.",
        icon: "noodles",
      },
      {
        dish: "Beef noodle soup",
        stall: "Hong Kee Beef Noodles",
        unit: "#01-42",
        note: "Bib Gourmand. Open daily 9am to 2.30pm, so this is your weekend bowl.",
        icon: "beef",
      },
      {
        dish: "Curry puffs",
        stall: "J2 Famous Crispy Curry Puff",
        unit: "#01-21",
        note: "Bib Gourmand, flaky, made for taking away. Weekdays only.",
        href: "/food-heritage/curry-puff",
        icon: "puff",
      },
    ],
  },
  {
    slug: "maxwell",
    name: "Maxwell Food Centre",
    short: "Maxwell",
    href: "/hawker/maxwell-food-centre",
    heading: "Maxwell Food Centre: The Chicken Rice Pilgrimage",
    color: "#E9A23B",
    lat: 1.280551,
    lng: 103.844459,
    routes: { mbs: "3 stops to Chinatown (DT19), then walk", gardens: "TEL direct to Maxwell (TE18), no change" },
    bestFor: "Chicken rice at lunch",
    closures: "Tian Tian closed Mondays",
    window: DAILY(600, 1110),
    orders: [
      {
        dish: "Hainanese chicken rice",
        stall: "Tian Tian Hainanese Chicken Rice",
        unit: "#01-10/11",
        note: "Bib Gourmand. Closed Mondays, and it can sell out.",
        href: "/food-heritage/hainanese-chicken-rice",
        icon: "drumstick",
      },
      {
        dish: "Chicken rice, shorter queue",
        stall: "Ah Tai Hainanese Chicken Rice",
        unit: "#01-07",
        note: "A few stalls down from Tian Tian. Closed Tuesdays.",
        href: "/blog/how-to-order-chicken-rice-singapore",
        icon: "drumstick",
      },
      {
        dish: "Fish head bee hoon",
        stall: "Jin Hua Fish Head Bee Hoon",
        unit: "#01-77",
        note: "Cantonese fish soup with a milky broth. Closed Thursdays.",
        icon: "fish",
      },
    ],
  },
  {
    slug: "chinatown-complex",
    name: "Chinatown Complex Food Centre",
    short: "Chinatown Complex",
    href: "/hawker/chinatown-complex-food-centre",
    heading: "Chinatown Complex: The Big One",
    color: "#EC6F9E",
    lat: 1.2823,
    lng: 103.84288,
    routes: { mbs: "3 stops to Chinatown (DT19)", gardens: "TEL to Maxwell (TE18), then walk" },
    bestFor: "An early dinner",
    closures: "Claypot stall closed Mon and Thu",
    window: DAILY(480, 1260),
    orders: [
      {
        dish: "Claypot rice",
        stall: "Lian He Ben Ji Claypot Rice",
        unit: "#02-198/199",
        note: "Bib Gourmand, cooked to order over charcoal. From 3pm, closed Mon and Thu.",
        icon: "pot",
      },
      {
        dish: "Xiao long bao",
        stall: "Zhong Guo La Mian Xiao Long Bao",
        unit: "#02-135",
        note: "Handmade dumplings and zha jiang mian. Closed Mon and Tue.",
        icon: "dumpling",
      },
      {
        dish: "Popiah",
        stall: "Ann Chin Popiah",
        unit: "#02-112",
        note: "Fresh spring rolls, rolled while you watch. Open daily.",
        href: "/food-heritage/popiah",
        icon: "roll",
      },
    ],
  },
  {
    slug: "hong-lim",
    name: "Hong Lim Market & Food Centre",
    short: "Hong Lim",
    href: "/hawker/hong-lim-market-food-centre",
    heading: "Hong Lim: Where The Queues Are Local",
    color: "#8CC152",
    lat: 1.28447,
    lng: 103.845863,
    routes: { mbs: "3 stops to Chinatown (DT19), then walk", gardens: "TEL to Maxwell (TE18), then walk" },
    bestFor: "Breakfast with the locals",
    closures: "Many stalls rest on Sundays",
    window: [null, [[420, 900]], [[420, 900]], [[420, 900]], [[420, 900]], [[420, 900]], [[420, 900]]],
    orders: [
      {
        dish: "Char kway teow",
        stall: "Outram Park Fried Kway Teow Mee",
        unit: "#02-17",
        note: "Bib Gourmand, frying from 6am. Closed Sundays.",
        href: "/food-heritage/char-kway-teow",
        icon: "flame",
      },
      {
        dish: "Char siew wanton noodles",
        stall: "Ji Ji Noodle House",
        unit: "#02-48/49",
        note: "A Michelin Guide regular. Closed Thursdays.",
        href: "/food-heritage/wanton-mee",
        icon: "noodles",
      },
      {
        dish: "Curry chicken noodles",
        stall: "Ah Heng Curry Chicken Bee Hoon Mee",
        unit: "#02-58/59",
        note: "A rich curry broth that makes rainy days worth it. Open daily.",
        icon: "soup",
      },
    ],
  },
];

const BAY_LANDMARKS: GuideLandmark[] = [
  { name: "Bayfront MRT (DT16 / CE1)", kind: "mrt", lat: 1.2819, lng: 103.859, note: "Connects underground to The Shoppes" },
  { name: "Gardens by the Bay MRT (TE22)", kind: "mrt", lat: 1.2789, lng: 103.8686 },
  { name: "Downtown MRT (DT17)", kind: "mrt", lat: 1.2796, lng: 103.8528 },
  { name: "Shenton Way MRT (TE19)", kind: "mrt", lat: 1.2774, lng: 103.8502, note: "Exit 3 for Lau Pa Sat" },
  { name: "Telok Ayer MRT (DT18)", kind: "mrt", lat: 1.2821, lng: 103.8486 },
  { name: "Chinatown MRT (DT19 / NE4)", kind: "mrt", lat: 1.2846, lng: 103.8441 },
  { name: "Marina Bay Sands (The Shoppes)", kind: "sight", lat: 1.2838, lng: 103.8592, note: "Rasapura Masters food court, B2" },
  { name: "Supertree Grove", kind: "sight", lat: 1.2816, lng: 103.8639, note: "Garden Rhapsody, 7.45pm and 8.45pm" },
];

const BAY_FAQS: { q: string; a: string }[] = [
  {
    q: "Is there a hawker centre at Gardens by the Bay?",
    a: "Not any more. Satay by the Bay, the hawker-style food centre inside the Gardens, closed on 1 October 2026 for the Wetlands by the Bay development. The nearest hawker centre is now Lau Pa Sat, reached via Bayfront and one Downtown Line stop, or via Shenton Way on the Thomson-East Coast Line.",
  },
  {
    q: "What is the nearest hawker centre to Marina Bay Sands?",
    a: "Lau Pa Sat. It is one stop from Bayfront on the Downtown Line, or a 10 to 20 minute walk through Marina Bay Financial Centre, and the building is open 24 hours.",
  },
  {
    q: "Where can I eat cheaply after the Gardens by the Bay light show?",
    a: "Satay Street at Lau Pa Sat. It runs from 7pm until late every night. Catch the 7.45pm show, walk to Bayfront and ride one stop, and you can be eating by about 8.25pm.",
  },
  {
    q: "Is the food at Marina Bay Sands hawker food?",
    a: "Rasapura Masters in The Shoppes is a food court with some Michelin-recognised stalls, but it is privately run and mains cost about S$10 to S$15. For true hawker prices, take the train a stop or three.",
  },
  {
    q: "Which hawker centres near Marina Bay are open at weekends?",
    a: "Lau Pa Sat, Maxwell and Chinatown Complex. Market Street and many of Amoy Street's best stalls are built around the office week, and several Hong Lim stalls rest on Sundays.",
  },
];


const LPS_ID = "lau-pa-sat-the-closest-and-open-around-the-clock";
const MAXWELL_ID = "maxwell-food-centre-the-chicken-rice-pilgrimage";

export const BAY_GUIDE: AreaGuide = {
  id: "bay",
  mapLabel: "Map of hawker centres near Marina Bay",
  from: [
    { id: "mbs", label: "From MBS" },
    { id: "gardens", label: "From the Gardens" },
  ],
  centres: BAY_CENTRES,
  landmarks: BAY_LANDMARKS,
  landmarkLegend: "MBS and the Supertrees",
  faqs: BAY_FAQS,
  nav: [
    ["At a glance", "The Six Centres At A Glance"],
    ["From the Gardens", "Coming From Gardens By The Bay"],
    ...BAY_CENTRES.map((c): [string, string] => [c.short, c.heading]),
    ["One meal only", "If You Only Have One Meal"],
    ["Quick answers", "Quick Answers"],
  ],
  picker: {
    kicker: "Hungry right now?",
    question: "Where are you standing?",
    auto: { from: 1170, to: 1380, spot: "show" },
    spots: [
      {
        id: "mbs",
        label: "At Marina Bay Sands",
        plans: [
          {
            plan: {
              pick: "lau-pa-sat",
              why: "The nearest real hawker centre, under Victorian cast iron, and it never closes.",
              steps: [
                { icon: "walk", text: "Follow signs from The Shoppes (B2) to Bayfront station" },
                { icon: "train", text: "Downtown Line, 1 stop towards Bukit Panjang, to Downtown (DT17)" },
                { icon: "pin", text: "Exit A or E. Lau Pa Sat is a 5-minute walk" },
              ],
              time: "About 15 minutes door to door",
              also: { text: "Lunchtime? Maxwell's chicken rice is 3 stops further.", href: `#${MAXWELL_ID}` },
            },
          },
        ],
      },
      {
        id: "gardens",
        label: "At Gardens by the Bay",
        plans: [
          {
            from: 360,
            to: 960,
            plan: {
              pick: "maxwell",
              why: "One train, no change, and the station opens almost opposite Tian Tian's queue.",
              steps: [
                { icon: "walk", text: "Walk to Gardens by the Bay station (TE22) on the Marina Barrage side" },
                { icon: "train", text: "Thomson-East Coast Line towards Woodlands North, to Maxwell (TE18)" },
                { icon: "pin", text: "Maxwell Food Centre is right outside the exit" },
              ],
              time: "About 20 minutes",
              also: { text: "Heading back after dark? Switch to Lau Pa Sat for satay.", href: `#${LPS_ID}` },
            },
          },
          {
            plan: {
              pick: "lau-pa-sat",
              why: "Maxwell's headline stalls wind down by evening. Lau Pa Sat is just getting started.",
              steps: [
                { icon: "walk", text: "Walk to Gardens by the Bay station (TE22) on the Marina Barrage side" },
                { icon: "train", text: "Thomson-East Coast Line towards Woodlands North, to Shenton Way (TE19)" },
                { icon: "pin", text: "Exit 3 (Park Street), then a short walk to Lau Pa Sat" },
              ],
              time: "About 20 minutes",
              also: { text: "Staying for the light show? See the evening plan.", href: "#after-garden-rhapsody" },
            },
          },
        ],
      },
      {
        id: "show",
        label: "After the light show",
        plans: [
          {
            plan: {
              pick: "lau-pa-sat",
              why: "When the Supertrees go dark, Boon Tat Street lights up. Satay Street runs late every night.",
              steps: [
                { icon: "walk", text: "Walk from Supertree Grove across the bridge to Bayfront station, about 10 minutes" },
                { icon: "train", text: "Downtown Line, 1 stop to Downtown (DT17)" },
                { icon: "pin", text: "Exit A or E, then follow the smoke to Satay Street" },
              ],
              time: "Eating by about 8.25pm after the 7.45pm show",
              also: { text: "See the evening, minute by minute.", href: "#after-garden-rhapsody" },
            },
          },
        ],
      },
    ],
  },
  timeline: {
    kicker: "An evening by the bay",
    steps: [
      { time: "7.45pm", title: "Garden Rhapsody", body: "Lie back under the Supertrees. The show runs about 15 minutes.", mins: 15 },
      { time: "8.00pm", title: "Walk to Bayfront", body: "Across the bridge to Marina Bay Sands and down to the station.", mins: 10 },
      { time: "8.10pm", title: "One stop on the Downtown Line", body: "Bayfront to Downtown. Two minutes on the train, a few more waiting.", mins: 6 },
      { time: "8.20pm", title: "Exit A or E", body: "Follow the charcoal smoke to Boon Tat Street.", mins: 5 },
      { time: "8.25pm", title: "Satay Street", body: "Chope a table, order a mix of sticks, find a cold drink inside the hall.", mins: 0 },
    ],
    footer: "Catching the 8.45pm show instead? Add an hour. Satay Street runs until 3am on weeknights, so there is no rush.",
  },
  prices: {
    kicker: "What a main costs",
    max: 16,
    rows: [
      { label: "A plate at a hawker centre", range: "S$4 to S$7", lo: 4, hi: 7, color: "#E8622A" },
      { label: "A plate at Rasapura Masters, MBS", range: "S$10 to S$15", lo: 10, hi: 15, color: "#8a8a8e" },
    ],
    caption:
      "Roughly double, for air conditioning and an address. The train fare to the real thing costs less than the difference.",
  },
};

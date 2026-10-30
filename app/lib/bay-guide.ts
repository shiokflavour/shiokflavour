/*
 * Data for the interactive parts of /blog/hawker-food-near-marina-bay-sands.
 * Stall details mirror the article text. "Window" is our guide to when the
 * stalls worth the trip are trading, not official opening hours.
 */
import type { WeekHours } from "./cafes";

export type DishIcon =
  | "flame"
  | "soup"
  | "fish"
  | "beef"
  | "drumstick"
  | "pot"
  | "coffee"
  | "puff"
  | "noodles"
  | "dumpling"
  | "roll";

export type BayOrder = {
  dish: string;
  stall: string;
  unit: string;
  note: string;
  href?: string;
  icon: DishIcon;
};

export type BayCentre = {
  slug: string;
  name: string;
  short: string;
  href: string;
  /** Exact text of the article's h2 for this centre, used for jump links. */
  heading: string;
  color: string;
  lat: number;
  lng: number;
  stops: number;
  fromBayfront: string;
  fromGardens: string;
  bestFor: string;
  closures: string;
  window: WeekHours;
  windowText: string;
  orders: BayOrder[];
};

const DAILY = (o: number, c: number): WeekHours => Array.from({ length: 7 }, () => [[o, c]]);
const WEEKDAYS = (o: number, c: number): WeekHours => [null, [[o, c]], [[o, c]], [[o, c]], [[o, c]], [[o, c]], null];

/** Satay Street, Boon Tat Street: 7pm to 3am weekdays, from 3pm at weekends. */
export const SATAY_STREET: WeekHours = [
  [[0, 180], [900, 1440]], // Sun
  [[0, 180], [1140, 1440]], // Mon
  [[0, 180], [1140, 1440]],
  [[0, 180], [1140, 1440]],
  [[0, 180], [1140, 1440]],
  [[0, 180], [1140, 1440]], // Fri
  [[0, 180], [900, 1440]], // Sat
];

export const BAY_CENTRES: BayCentre[] = [
  {
    slug: "lau-pa-sat",
    name: "Lau Pa Sat",
    short: "Lau Pa Sat",
    href: "/hawker/lau-pa-sat",
    heading: "Lau Pa Sat: The Closest, And Open Around The Clock",
    color: "#E8622A",
    lat: 1.2803,
    lng: 103.8503,
    stops: 1,
    fromBayfront: "1 stop to Downtown (DT17), Exit A or E",
    fromGardens: "TEL to Shenton Way (TE19), Exit 3",
    bestFor: "Dinner and late nights",
    closures: "Never. The hall is open 24 hours",
    window: DAILY(0, 1440),
    windowText: "Open 24 hours. Satay Street from 7pm (3pm at weekends)",
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
    stops: 1,
    fromBayfront: "1 stop to Downtown (DT17), then 10 min walk",
    fromGardens: "TEL to Shenton Way (TE19), then walk",
    bestFor: "A weekday CBD lunch",
    closures: "Most stalls Monday to Friday only",
    window: WEEKDAYS(420, 900),
    windowText: "Weekdays 7am to 3pm. A few stalls on Saturday morning",
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
    stops: 2,
    fromBayfront: "2 stops to Telok Ayer (DT18), Exit A",
    fromGardens: "TEL to Maxwell (TE18), then walk",
    bestFor: "Michelin stalls on a weekday",
    closures: "Star stalls closed at weekends",
    window: [[[540, 870]], [[480, 870]], [[480, 870]], [[480, 870]], [[480, 870]], [[480, 870]], [[540, 870]]],
    windowText: "Weekdays 8am to 2.30pm. Weekends quieter, star stalls shut",
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
    stops: 3,
    fromBayfront: "3 stops to Chinatown (DT19), then walk",
    fromGardens: "TEL direct to Maxwell (TE18), no change",
    bestFor: "Chicken rice at lunch",
    closures: "Tian Tian closed Mondays",
    window: DAILY(600, 1110),
    windowText: "Daily 10am to early evening. Headline stalls done by night",
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
    stops: 3,
    fromBayfront: "3 stops to Chinatown (DT19)",
    fromGardens: "TEL to Maxwell (TE18), then walk",
    bestFor: "An early dinner",
    closures: "Claypot stall closed Mon and Thu",
    window: DAILY(480, 1260),
    windowText: "Daily. Liveliest 5pm to 8pm, claypot from 3pm",
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
    stops: 3,
    fromBayfront: "3 stops to Chinatown (DT19), then walk",
    fromGardens: "TEL to Maxwell (TE18), then walk",
    bestFor: "Breakfast with the locals",
    closures: "Many stalls rest on Sundays",
    window: [null, [[420, 900]], [[420, 900]], [[420, 900]], [[420, 900]], [[420, 900]], [[420, 900]]],
    windowText: "Mornings to mid-afternoon. Many stalls rest on Sundays",
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

export type BayLandmark = {
  name: string;
  kind: "mrt" | "sight";
  lat: number;
  lng: number;
  note?: string;
};

export const BAY_LANDMARKS: BayLandmark[] = [
  { name: "Bayfront MRT (DT16 / CE1)", kind: "mrt", lat: 1.2819, lng: 103.859, note: "Connects underground to The Shoppes" },
  { name: "Gardens by the Bay MRT (TE22)", kind: "mrt", lat: 1.2789, lng: 103.8686 },
  { name: "Downtown MRT (DT17)", kind: "mrt", lat: 1.2796, lng: 103.8528 },
  { name: "Shenton Way MRT (TE19)", kind: "mrt", lat: 1.2774, lng: 103.8502, note: "Exit 3 for Lau Pa Sat" },
  { name: "Telok Ayer MRT (DT18)", kind: "mrt", lat: 1.2821, lng: 103.8486 },
  { name: "Chinatown MRT (DT19 / NE4)", kind: "mrt", lat: 1.2846, lng: 103.8441 },
  { name: "Marina Bay Sands (The Shoppes)", kind: "sight", lat: 1.2838, lng: 103.8592, note: "Rasapura Masters food court, B2" },
  { name: "Supertree Grove", kind: "sight", lat: 1.2816, lng: 103.8639, note: "Garden Rhapsody, 7.45pm and 8.45pm" },
];

export const BAY_FAQS: { q: string; a: string }[] = [
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

/** Same rule as the article's h2 ids. */
export function headingId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

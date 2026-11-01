/*
 * Data for the interactive parts of /blog/late-night-food-singapore-supper.
 * Opening hours checked on Google Maps on 1 Nov 2026 (Lau Pa Sat Satay Street
 * from Lau Pa Sat's own site). Hours shift often: re-check before big edits.
 */
import type { WeekHours } from "./cafes";
import type { AreaGuide, GuideCentre, GuideLandmark } from "./area-guide-types";

const H = (h: number, m = 0) => h * 60 + m;
type Day = [number, number] | null;

/**
 * Build a week from one [open, close] pair per day (index 0 = Sunday).
 * A close after midnight is written as 24h + hours, e.g. 2am = H(26).
 * The after-midnight part is carried into the next day's hours.
 */
function week(days: Day[]): WeekHours {
  const out: [number, number][][] = Array.from({ length: 7 }, () => []);
  days.forEach((d, i) => {
    if (!d) return;
    const [o, c] = d;
    out[i].push([o, Math.min(c, 1440)]);
    if (c > 1440) out[(i + 1) % 7].push([0, c - 1440]);
  });
  return out.map((spans) => (spans.length ? spans.sort((a, b) => a[0] - b[0]) : null));
}
const every = (d: Day): Day[] => Array(7).fill(d);

export const SUPPER_H = {
  satay: "Satay under the stars: Lau Pa Sat Satay Street",
  dimsum: "Dim sum till late: Swee Choon",
  prata: "24-hour prata and murtabak",
  bkt: "Bak kut teh before midnight",
  newton: "Seafood and BBQ stingray: Newton Food Centre and East Coast Lagoon",
  geylang: "Geylang: frog porridge and the supper district",
  hawker: "Late-night hawker centres",
  dessert: "Supper desserts",
};

const SPOTS: GuideCentre[] = [
  {
    slug: "satay-street",
    name: "Lau Pa Sat Satay Street",
    short: "Satay Street",
    href: "/hawker/lau-pa-sat",
    heading: SUPPER_H.satay,
    color: "#E8622A",
    lat: 1.2807,
    lng: 103.8506,
    routes: { mrt: "Chinatown and CBD · Downtown MRT (DT17)" },
    bestFor: "Satay in the street",
    closures: "From 3pm at weekends",
    window: week([[H(15), H(27)], [H(19), H(27)], [H(19), H(27)], [H(19), H(27)], [H(19), H(27)], [H(19), H(27)], [H(15), H(27)]]),
    orders: [],
  },
  {
    slug: "tian-wang",
    name: "Tian Wang Desserts",
    short: "Tian Wang",
    href: "",
    heading: SUPPER_H.dessert,
    color: "#EC6F9E",
    lat: 1.2808,
    lng: 103.8418,
    routes: { mrt: "Chinatown · Keong Saik Road, near Outram Park MRT" },
    bestFor: "Chinese desserts",
    closures: "Until 1am on Sundays",
    window: week([[H(17), H(25)], [H(17), H(26)], [H(17), H(26)], [H(17), H(26)], [H(17), H(26)], [H(17), H(26)], [H(15), H(26)]]),
    orders: [],
  },
  {
    slug: "ya-hua",
    name: "Ya Hua Bak Kut Teh",
    short: "Ya Hua",
    href: "",
    heading: SUPPER_H.bkt,
    color: "#C9A227",
    lat: 1.2719,
    lng: 103.8425,
    routes: { mrt: "Tanjong Pagar · Keppel Road, near Tanjong Pagar MRT" },
    bestFor: "Peppery bak kut teh",
    closures: "Closed Mondays, 10pm on Sundays",
    window: week([[H(7), H(22)], null, [H(7), H(23)], [H(7), H(23)], [H(7), H(23)], [H(7), H(23)], [H(7), H(23)]]),
    orders: [],
  },
  {
    slug: "swee-choon",
    name: "Swee Choon Tim Sum",
    short: "Swee Choon",
    href: "",
    heading: SUPPER_H.dimsum,
    color: "#E9A23B",
    lat: 1.3081,
    lng: 103.8569,
    routes: { mrt: "Jalan Besar · near Jalan Besar MRT (DT22)" },
    bestFor: "Dim sum after midnight",
    closures: "Until 4am on Fri and Sat",
    window: week([[H(7), H(26)], [H(7), H(26)], [H(7), H(26)], [H(7), H(26)], [H(7), H(26)], [H(7), H(28)], [H(7), H(28)]]),
    orders: [],
  },
  {
    slug: "founder",
    name: "Founder Bak Kut Teh",
    short: "Founder",
    href: "",
    heading: SUPPER_H.bkt,
    color: "#B07D3A",
    lat: 1.3243,
    lng: 103.851,
    routes: { mrt: "Balestier · Balestier Road, near Novena MRT" },
    bestFor: "Bak kut teh till 11.45pm",
    closures: "Open daily",
    window: week(every([H(11), H(23, 45)])),
    orders: [],
  },
  {
    slug: "newton",
    name: "Newton Food Centre",
    short: "Newton",
    href: "/hawker/newton-food-centre",
    heading: SUPPER_H.newton,
    color: "#3CB98A",
    lat: 1.3122,
    lng: 103.8397,
    routes: { mrt: "Newton and Orchard · Newton MRT (NS21), Exit B" },
    bestFor: "Wings and stingray",
    closures: "Hours shown for R&B Express, closed Wed",
    window: week([[H(17, 30), H(26, 30)], [H(17, 30), H(26, 30)], [H(17, 30), H(26, 30)], null, [H(17, 30), H(26, 30)], [H(17, 30), H(26, 30)], [H(17, 30), H(26, 30)]]),
    orders: [],
  },
  {
    slug: "eminent",
    name: "Eminent Frog Porridge",
    short: "Eminent",
    href: "",
    heading: SUPPER_H.geylang,
    color: "#8CC152",
    lat: 1.3127,
    lng: 103.8792,
    routes: { mrt: "Geylang · Geylang Road, near Aljunied MRT" },
    bestFor: "Claypot frog porridge",
    closures: "Open daily until 4am",
    window: week(every([H(16), H(28)])),
    orders: [],
  },
  {
    slug: "gong-he-guan",
    name: "Gong He Guan",
    short: "Gong He Guan",
    href: "",
    heading: SUPPER_H.dessert,
    color: "#D96BA0",
    lat: 1.312,
    lng: 103.8761,
    routes: { mrt: "Geylang · Geylang Road, near Kallang MRT" },
    bestFor: "Yam and sesame paste",
    closures: "Open daily until 2am",
    window: week(every([H(10), H(26)])),
    orders: [],
  },
  {
    slug: "jb-ah-meng",
    name: "J.B. Ah Meng",
    short: "JB Ah Meng",
    href: "",
    heading: SUPPER_H.geylang,
    color: "#6FAE3E",
    lat: 1.3137,
    lng: 103.8862,
    routes: { mrt: "Geylang · Lorong 30, near Aljunied MRT" },
    bestFor: "Zi char",
    closures: "Closed Mondays",
    window: week([[H(17), H(25, 30)], null, [H(17), H(26)], [H(17), H(26)], [H(17), H(26)], [H(17), H(26)], [H(17), H(26)]]),
    orders: [],
  },
  {
    slug: "al-azhar",
    name: "Al-Azhar Restaurant",
    short: "Al-Azhar",
    href: "",
    heading: SUPPER_H.prata,
    color: "#9B8CF0",
    lat: 1.3425,
    lng: 103.7753,
    routes: { mrt: "Bukit Timah · near Beauty World MRT (DT5)" },
    bestFor: "Prata and murtabak",
    closures: "Open daily until 3am",
    window: week(every([H(7), H(27)])),
    orders: [],
  },
  {
    slug: "springleaf",
    name: "Springleaf Prata Place (NEWest)",
    short: "Springleaf NEWest",
    href: "",
    heading: SUPPER_H.prata,
    color: "#7C6FE0",
    lat: 1.3172,
    lng: 103.7571,
    routes: { mrt: "West Coast · NEWest mall, taxi or bus from Clementi" },
    bestFor: "Prata, any hour",
    closures: "Other Springleaf outlets close earlier",
    window: week(every([0, 1440])),
    allDayLabel: "Open 24 hours",
    orders: [],
  },
  {
    slug: "bedok-85",
    name: "Bedok 85 Fengshan",
    short: "Bedok 85",
    href: "/hawker/bedok-85-fengshan-market",
    heading: SUPPER_H.hawker,
    color: "#3FA7C9",
    lat: 1.3319,
    lng: 103.9385,
    routes: { mrt: "Bedok · Bedok North Road, near Bedok North MRT" },
    bestFor: "Bak chor mee till 11pm",
    closures: "Hours shown for Xing Ji, closed Thu",
    window: week([[H(11, 30), H(23)], [H(11, 30), H(23)], [H(11, 30), H(23)], [H(11, 30), H(23)], null, [H(11, 30), H(23)], [H(11, 30), H(23)]]),
    orders: [],
  },
];

const LANDMARKS: GuideLandmark[] = [];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What food is open 24 hours in Singapore?",
    a: "Springleaf Prata Place at NEWest on West Coast Drive is listed as open 24 hours, and the Lau Pa Sat market building in the CBD is open round the clock, though its stalls keep their own hours. Swee Choon Express at Changi Airport Terminal 2 is also listed as open 24 hours.",
  },
  {
    q: "Where can I eat after midnight in Chinatown?",
    a: "Tian Wang on Keong Saik Road serves Chinese desserts until about 2am (1am on Sundays), and Lau Pa Sat's Satay Street, a short taxi ride away, runs until about 3am.",
  },
  {
    q: "What is the latest supper spot in Singapore?",
    a: "Among the places in this guide, Eminent Frog Porridge in Geylang runs until about 4am every night and Swee Choon in Jalan Besar until 4am on Fridays and Saturdays. For any hour, Springleaf Prata Place at NEWest is open 24 hours.",
  },
  {
    q: "What time does the MRT stop running in Singapore?",
    a: "Most MRT lines stop running around midnight. After that you will need a taxi or a ride-hailing app such as Grab or Gojek, and late-night surcharges apply.",
  },
];

export const SUPPER_GUIDE: AreaGuide = {
  id: "supper",
  mapLabel: "Map of late-night food spots in Singapore",
  statusMode: "hours",
  tableNote:
    "Hours checked on Google Maps on 1 November 2026. Stalls close early when they sell out and hours change after festive periods, so check on the night.",
  from: [{ id: "mrt", label: "Where" }],
  centres: SPOTS,
  landmarks: LANDMARKS,
  landmarkLegend: "",
  faqs: FAQS,
  nav: [
    ["Open now", "What Is Open Right Now"],
    ["Satay", SUPPER_H.satay],
    ["Dim sum", SUPPER_H.dimsum],
    ["Prata", SUPPER_H.prata],
    ["Bak kut teh", SUPPER_H.bkt],
    ["Newton", SUPPER_H.newton],
    ["Geylang", SUPPER_H.geylang],
    ["Desserts", SUPPER_H.dessert],
    ["Quick answers", "Quick Answers"],
  ],
  picker: {
    kicker: "Hungry after dark?",
    question: "Where are you right now?",
    spots: [
      {
        id: "cbd",
        label: "Chinatown and CBD",
        plans: [
          {
            plan: {
              pick: "satay-street",
              why: "Satay grilled in the middle of a closed-off street, under the office towers. The classic Singapore supper.",
              steps: [
                { icon: "train", text: "Downtown Line to Downtown (DT17), or walk from Raffles Place or Telok Ayer" },
                { icon: "pin", text: "Head for Boon Tat Street, beside the Lau Pa Sat market hall" },
                { icon: "walk", text: "Order from a numbered satay cart, then find a table on the street" },
              ],
              time: "Grills fire from 7pm (3pm at weekends) until about 3am",
              also: { text: "Want something sweet after? Tian Wang in Chinatown is open till 2am.", href: "#supper-desserts" },
            },
          },
        ],
      },
      {
        id: "jalan-besar",
        label: "Jalan Besar and Bugis",
        plans: [
          {
            plan: {
              pick: "swee-choon",
              why: "The dim sum house Singapore goes to after midnight, feeding Jalan Besar since the 1960s.",
              steps: [
                { icon: "train", text: "Downtown Line to Jalan Besar (DT22), or a short taxi from Bugis" },
                { icon: "pin", text: "Swee Choon spreads across several shophouses at 191 Jalan Besar" },
                { icon: "walk", text: "Expect a queue after 11pm at weekends. Last orders 30 minutes before closing" },
              ],
              time: "Until 2am, and 4am on Fridays and Saturdays",
            },
          },
        ],
      },
      {
        id: "geylang",
        label: "Geylang",
        plans: [
          {
            plan: {
              pick: "eminent",
              why: "Claypot frog in a dark, sticky chilli sauce with plain porridge. Geylang's signature supper.",
              steps: [
                { icon: "train", text: "East-West Line to Aljunied (EW9), then walk down to Geylang Road" },
                { icon: "pin", text: "Eminent is at 323 Geylang Road" },
                { icon: "walk", text: "Stay on the main road and in the restaurants, and go in a group if you can" },
              ],
              time: "4pm to about 4am, every night",
              also: { text: "Gong He Guan's tong sui is down the road, open till 2am.", href: "#supper-desserts" },
            },
          },
        ],
      },
      {
        id: "newton",
        label: "Newton and Orchard",
        plans: [
          {
            plan: {
              pick: "newton",
              why: "The nearest real hawker centre to Orchard Road, and the one that stays up latest.",
              steps: [
                { icon: "train", text: "North-South Line, 1 stop north from Orchard to Newton (NS21)" },
                { icon: "pin", text: "Exit B, then a short walk to the food centre" },
                { icon: "walk", text: "R&B Express grills wings till 2.30am. Ask seafood prices before you order" },
              ],
              time: "Late stalls run until about 2.30am",
              also: { text: "Our Orchard Road hawker guide has more.", href: "/blog/hawker-food-near-orchard-road" },
            },
          },
        ],
      },
      {
        id: "west",
        label: "West and Bukit Timah",
        plans: [
          {
            from: 180,
            to: 420,
            plan: {
              pick: "springleaf",
              why: "Al-Azhar has closed for the night. Springleaf at NEWest never does.",
              steps: [
                { icon: "pin", text: "Springleaf Prata Place, 1 West Coast Drive, #01-108/109 (NEWest)" },
                { icon: "train", text: "At this hour, take a taxi or a ride-hailing app" },
                { icon: "walk", text: "Make sure it is the NEWest outlet: other branches close earlier" },
              ],
              time: "Open 24 hours",
            },
          },
          {
            plan: {
              pick: "al-azhar",
              why: "A long-running Indian Muslim restaurant for prata, murtabak and teh tarik, near Beauty World.",
              steps: [
                { icon: "train", text: "Downtown Line to Beauty World (DT5)" },
                { icon: "pin", text: "Al-Azhar is at 11 Cheong Chin Nam Road, a short walk away" },
                { icon: "walk", text: "Order plain prata first to judge the kitchen, then egg" },
              ],
              time: "7am to about 3am, daily",
              also: { text: "Later than 3am? Springleaf at NEWest is open 24 hours.", href: "#24-hour-prata-and-murtabak" },
            },
          },
        ],
      },
    ],
  },
};

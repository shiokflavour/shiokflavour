/*
 * Data for the interactive parts of /blog/hawker-food-near-orchard-road.
 * Stall hours checked on Google Maps and Eatbook, 31 Oct 2026. "Window" is our
 * guide to when the stalls worth the trip are trading, not official hours.
 */
import type { WeekHours } from "./cafes";
import type { AreaGuide, GuideCentre, GuideLandmark } from "./area-guide-types";

const DAILY = (...spans: [number, number][]): WeekHours => Array.from({ length: 7 }, () => spans);

export const NEWTON_H = "Newton Food Centre: Where Glutton's Square Went";
export const ZION_H = "Zion Riverside: One Stop, Two Bib Gourmands";
export const ADAM_H = "Adam Road: Breakfast Across From The Botanic Gardens";
export const TIONG_H = "Tiong Bahru Market: The Morning Detour";

const CENTRES: GuideCentre[] = [
  {
    slug: "newton",
    name: "Newton Food Centre",
    short: "Newton",
    href: "/hawker/newton-food-centre",
    heading: NEWTON_H,
    color: "#E9A23B",
    lat: 1.312225,
    lng: 103.839729,
    routes: {
      orchard: "1 stop north to Newton (NS21), Exit B",
      somerset: "2 stops north to Newton (NS21), Exit B",
    },
    bestFor: "Dinner and late nights",
    closures: "Hup Kee rests Sun to Tue, Heng rests Tue",
    window: DAILY([1020, 1440]),
    orders: [
      {
        dish: "Oyster omelette",
        stall: "Hup Kee Fried Oyster Omelette",
        unit: "#01-73",
        note: "New 2026 Bib Gourmand, frying since the Glutton's Square days. Wed to Sat, from 5.30pm.",
        href: "/food-heritage/orh-luak",
        icon: "flame",
      },
      {
        dish: "Carrot cake",
        stall: "Heng",
        unit: "#01-28",
        note: "Bib Gourmand. Order a mixed plate, black and white. From 6pm, closed Tuesdays.",
        href: "/food-heritage/chai-tow-kway",
        icon: "flame",
      },
      {
        dish: "BBQ stingray and chilli crab",
        stall: "Alliance Seafood",
        unit: "#01-27",
        note: "Bib Gourmand. Seafood is priced by weight and season, so ask first. Closed Mondays.",
        href: "/food-heritage/bbq-stingray",
        icon: "fish",
      },
    ],
  },
  {
    slug: "zion-riverside",
    name: "Zion Riverside Food Centre",
    short: "Zion Riverside",
    href: "",
    heading: ZION_H,
    color: "#3CB98A",
    lat: 1.2924,
    lng: 103.8312,
    routes: {
      orchard: "TEL 1 stop to Great World (TE15), Exit 2",
      somerset: "About 20 min on foot via Killiney Road",
    },
    bestFor: "A late lunch",
    closures: "No. 18 closed Tue, Zhi Wei Xian closed Mon",
    window: DAILY([690, 1260]),
    orders: [
      {
        dish: "Char kway teow",
        stall: "No. 18 Zion Road Fried Kway Teow",
        unit: "#01-17",
        note: "Bib Gourmand. Smoky, eggy and generous. From 12.30pm, closed Tuesdays.",
        href: "/food-heritage/char-kway-teow",
        icon: "flame",
      },
      {
        dish: "Big prawn noodles",
        stall: "Zhi Wei Xian Zion Road Big Prawn Noodle",
        unit: "#01-04",
        note: "Bib Gourmand. Lunch and dinner sittings, closed Mondays.",
        href: "/food-heritage/hae-mee",
        icon: "soup",
      },
      {
        dish: "Teochew carrot cake",
        stall: "Lau Goh Teochew Chye Thow Kway",
        unit: "#01-26",
        note: "Fried to order, white or black. Closed Tuesdays.",
        href: "/food-heritage/chai-tow-kway",
        icon: "pot",
      },
    ],
  },
  {
    slug: "adam-road",
    name: "Adam Road Food Centre",
    short: "Adam Road",
    href: "/hawker/adam-road-food-centre",
    heading: ADAM_H,
    color: "#9B8CF0",
    lat: 1.324132,
    lng: 103.814163,
    routes: {
      orchard: "TEL 3 stops to Stevens, Downtown Line 1 stop to Botanic Gardens",
      somerset: "Via Orchard, then TEL and Downtown Line to Botanic Gardens",
    },
    bestFor: "Breakfast near the Gardens",
    closures: "Selera Rasa and Pak Sapari closed Fri, Noo Cheng closed Mon",
    window: DAILY([420, 1260]),
    orders: [
      {
        dish: "Nasi lemak",
        stall: "Selera Rasa Nasi Lemak",
        unit: "#01-02",
        note: "Sets named after poker hands. Go for the Royal Flush. 7am to 2pm, closed Fridays.",
        href: "/food-heritage/nasi-lemak",
        icon: "rice",
      },
      {
        dish: "Big prawn noodles",
        stall: "Adam Rd Noo Cheng Big Prawn Noodle",
        unit: "#01-27",
        note: "Bib Gourmand. Order it dry with the broth on the side. Closed Mondays.",
        href: "/food-heritage/hae-mee",
        icon: "soup",
      },
      {
        dish: "Mee soto and mee rebus",
        stall: "Selamat Datang Warong Pak Sapari",
        unit: "#01-09",
        note: "Bib Gourmand, more than five decades old. Closed Fridays.",
        href: "/food-heritage/mee-rebus",
        icon: "noodles",
      },
    ],
  },
  {
    slug: "tiong-bahru",
    name: "Tiong Bahru Market",
    short: "Tiong Bahru",
    href: "/hawker/tiong-bahru-market",
    heading: TIONG_H,
    color: "#EC6F9E",
    lat: 1.284683,
    lng: 103.832428,
    routes: {
      orchard: "TEL 2 stops to Havelock (TE16), Exit 2",
      somerset: "Via Orchard, then TEL 2 stops to Havelock",
    },
    bestFor: "Breakfast and an old estate",
    closures: "Hong Heng lunch only, Tue to Sat",
    window: DAILY([420, 870]),
    orders: [
      {
        dish: "Chwee kueh",
        stall: "Jian Bo Shui Kueh",
        unit: "#02-05",
        note: "Steamed rice cakes under preserved radish, since 1958. From 7am daily.",
        href: "/food-heritage/chwee-kueh",
        icon: "puff",
      },
      {
        dish: "Hokkien mee",
        stall: "Hong Heng Fried Sotong Prawn Mee",
        unit: "#02-01",
        note: "Bib Gourmand since 2016. 10.30am to 2.30pm, Tue to Sat.",
        href: "/food-heritage/hokkien-mee",
        icon: "noodles",
      },
      {
        dish: "Boneless chicken rice",
        stall: "Tiong Bahru Hainanese Boneless Chicken Rice",
        unit: "#02-82",
        note: "2026 Bib Gourmand. Closed Mondays.",
        href: "/food-heritage/hainanese-chicken-rice",
        icon: "drumstick",
      },
    ],
  },
];

const LANDMARKS: GuideLandmark[] = [
  { name: "Orchard MRT (NS22 / TE14)", kind: "mrt", lat: 1.3033, lng: 103.8323 },
  { name: "Somerset MRT (NS23)", kind: "mrt", lat: 1.3002, lng: 103.8392 },
  { name: "Newton MRT (NS21 / DT11)", kind: "mrt", lat: 1.3125, lng: 103.838, note: "Exit B for Newton Food Centre" },
  { name: "Great World MRT (TE15)", kind: "mrt", lat: 1.2929, lng: 103.8326, note: "Exit 2 for Zion Riverside" },
  { name: "Havelock MRT (TE16)", kind: "mrt", lat: 1.2888, lng: 103.8333, note: "Exit 2 for Tiong Bahru Market" },
  { name: "Botanic Gardens MRT (CC19 / DT9)", kind: "mrt", lat: 1.3223, lng: 103.8149 },
  { name: "ION Orchard", kind: "sight", lat: 1.304, lng: 103.832, note: "Food Opera and Hawkers' Street, B4" },
  { name: "Killiney Kopitiam", kind: "sight", lat: 1.2989, lng: 103.8394, note: "Kopi and kaya toast since 1919" },
  { name: "Singapore Botanic Gardens", kind: "sight", lat: 1.3138, lng: 103.8159 },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is there a hawker centre on Orchard Road?",
    a: "Not on the road itself. Glutton's Square, the night market in an Orchard Road car park, closed in 1978. The malls have air-conditioned food courts, such as Food Opera at ION Orchard and Hawkers' Street at Tang Plaza. The nearest real hawker centre is Newton Food Centre, one MRT stop north.",
  },
  {
    q: "What is the nearest hawker centre to Orchard Road?",
    a: "Newton Food Centre. Take the North-South Line one stop from Orchard to Newton and use Exit B, or walk up Scotts Road in 15 to 20 minutes. Zion Riverside is one stop the other way on the Thomson-East Coast Line.",
  },
  {
    q: "Is Newton Food Centre a tourist trap?",
    a: "It has a history of overcharging visitors, and seafood priced by weight is where bills climb. But it also holds six 2026 Michelin Bib Gourmand stalls. Choose stalls with prices on display, ask the price of seafood before you order, and you will eat well.",
  },
  {
    q: "Where can I eat near the Singapore Botanic Gardens?",
    a: "Adam Road Food Centre, across the road from Botanic Gardens MRT. Use the overhead bridge over Bukit Timah Road and Dunearn Road. Come early for Selera Rasa's nasi lemak, which closes at 2pm and rests on Fridays.",
  },
  {
    q: "Which hawker centre near Orchard is open late?",
    a: "Newton. Most of its famous stalls cook from the early evening, and several run until around midnight. Zion Riverside and Adam Road wind down by about 9pm to 10pm.",
  },
];

export const ORCHARD_GUIDE: AreaGuide = {
  id: "orchard",
  mapLabel: "Map of hawker centres near Orchard Road",
  from: [
    { id: "orchard", label: "From Orchard" },
    { id: "somerset", label: "From Somerset" },
  ],
  centres: CENTRES,
  landmarks: LANDMARKS,
  landmarkLegend: "ION, Killiney and the Gardens",
  faqs: FAQS,
  nav: [
    ["At a glance", "The Four Centres At A Glance"],
    ["On Orchard itself", "What You Can Eat On Orchard Road Itself"],
    ["Newton", NEWTON_H],
    ["Zion Riverside", ZION_H],
    ["Adam Road", ADAM_H],
    ["Tiong Bahru", TIONG_H],
    ["A day of eating", "One Day, Four Meals"],
    ["Quick answers", "Quick Answers"],
  ],
  picker: {
    kicker: "Hungry right now?",
    question: "Where are you standing?",
    auto: { from: 1290, to: 1440, spot: "late" },
    spots: [
      {
        id: "orchard",
        label: "On Orchard Road",
        plans: [
          {
            from: 360,
            to: 660,
            plan: {
              pick: "tiong-bahru",
              why: "Breakfast in a 1930s estate, two stops away. The chwee kueh is steaming from 7am.",
              steps: [
                { icon: "walk", text: "Head down to the Thomson-East Coast Line platforms at Orchard (TE14)" },
                { icon: "train", text: "2 stops towards Bayshore, to Havelock (TE16)" },
                { icon: "pin", text: "Exit 2, then about 7 minutes on foot to Seng Poh Road. The food centre is upstairs" },
              ],
              time: "About 20 minutes",
              also: { text: "Staying for coffee? See our Tiong Bahru cafe guide.", href: "/cafes/tiong-bahru" },
            },
          },
          {
            from: 660,
            to: 1020,
            plan: {
              pick: "zion-riverside",
              why: "One stop, two Bib Gourmands, and a table by the Singapore River.",
              steps: [
                { icon: "walk", text: "Head down to the Thomson-East Coast Line platforms at Orchard (TE14)" },
                { icon: "train", text: "1 stop towards Bayshore, to Great World (TE15)" },
                { icon: "pin", text: "Exit 2 (Kim Seng Promenade and Zion Road), then a short walk" },
              ],
              time: "About 15 minutes",
              also: { text: "Dinner instead? Newton fires up from 5pm.", href: "#newton-food-centre-where-glutton-s-square-went" },
            },
          },
          {
            plan: {
              pick: "newton",
              why: "Where Orchard Road's old night hawkers moved in 1978. It still does its best work after dark.",
              steps: [
                { icon: "train", text: "North-South Line, 1 stop north from Orchard (NS22) to Newton (NS21)" },
                { icon: "pin", text: "Exit B, then a short walk to the food centre" },
                { icon: "walk", text: "Or walk up Scotts Road in 15 to 20 minutes" },
              ],
              time: "About 10 minutes by train",
              also: { text: "Read our note on prices before you order seafood.", href: "#newton-food-centre-where-glutton-s-square-went" },
            },
          },
        ],
      },
      {
        id: "gardens",
        label: "At the Botanic Gardens",
        plans: [
          {
            plan: {
              pick: "adam-road",
              why: "The neighbourhood's breakfast table, just across the road from the Gardens' Bukit Timah side.",
              steps: [
                { icon: "walk", text: "Make your way to Botanic Gardens MRT (CC19 / DT9) at the Bukit Timah end of the Gardens" },
                { icon: "walk", text: "Take the overhead bridge across Bukit Timah Road and Dunearn Road" },
                { icon: "pin", text: "Adam Road Food Centre is about 6 to 7 minutes from the station" },
              ],
              time: "About 10 minutes from the station",
              also: { text: "Selera Rasa's nasi lemak closes at 2pm and rests on Fridays.", href: "#adam-road-breakfast-across-from-the-botanic-gardens" },
            },
          },
        ],
      },
      {
        id: "late",
        label: "Late night",
        plans: [
          {
            plan: {
              pick: "newton",
              why: "The one centre near Orchard where the woks are still going towards midnight.",
              steps: [
                { icon: "train", text: "North-South Line, 1 stop north from Orchard (NS22) to Newton (NS21)" },
                { icon: "pin", text: "Exit B, then a short walk to the food centre" },
                { icon: "walk", text: "Missed the last train? It is a 15 to 20 minute walk up Scotts Road" },
              ],
              time: "About 10 minutes by train",
              also: { text: "What to order at Newton.", href: "#newton-food-centre-where-glutton-s-square-went" },
            },
          },
        ],
      },
    ],
  },
  timeline: {
    kicker: "One day, four meals",
    steps: [
      { time: "8.00am", title: "Tiong Bahru Market", body: "Chwee kueh at Jian Bo, then a slow walk through the 1930s estate.", mins: 0 },
      {
        time: "12.30pm",
        title: "Zion Riverside",
        body: "One stop back on the Thomson-East Coast Line to Great World. No. 18's char kway teow starts frying at 12.30pm.",
        mins: 0,
      },
      {
        time: "3.30pm",
        title: "Killiney Kopitiam",
        body: "Walk up Killiney Road for kopi and kaya toast at a coffee shop founded in 1919. It closes at 6pm.",
        mins: 0,
      },
      {
        time: "7.00pm",
        title: "Newton Food Centre",
        body: "Two stops north from Somerset. Oyster omelette at Hup Kee, carrot cake at Heng.",
        mins: 0,
      },
    ],
    footer: "Check the rest days first: Hup Kee is closed Sunday to Tuesday, Heng and No. 18 on Tuesdays, Hong Heng on Sundays and Mondays.",
  },
};

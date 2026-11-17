/*
 * Data for the interactive parts of /blog/how-to-order-nasi-padang-singapore.
 * Opening hours, addresses and pins checked on Google Maps on 17 Nov 2026.
 * Re-check before big edits: nasi padang shops sell out and change hours.
 */
import type { WeekHours } from "./cafes";
import type { AreaGuide, GuideCentre } from "./area-guide-types";

const H = (h: number, m = 0) => h * 60 + m;
type Day = [number, number][] | null;
const every = (d: Day): WeekHours => Array(7).fill(d);
/** Every day except one rest day (0 = Sunday ... 6 = Saturday). */
const restOn = (rest: number, d: Day): WeekHours => Array.from({ length: 7 }, (_, i) => (i === rest ? null : d));

/** Exact text of the article's headings, used for jump links. */
export const PADANG_H = {
  maimunah: "Hjh Maimunah, Jalan Pisang",
  sabar: "Sabar Menanti",
  minang: "Rumah Makan Minang",
  sederhana: "Sederhana",
  minangHouse: "Minang House, Lucky Plaza",
  sinar: "Sinar Pagi, Geylang Serai Market",
  maimunahJc: "Hjh Maimunah, Joo Chiat",
};

const SPOTS: GuideCentre[] = [
  {
    slug: "padang-hjh-maimunah",
    name: "Hjh Maimunah Restaurant",
    short: "Hjh Maimunah",
    href: "/food-heritage/nasi-padang",
    heading: PADANG_H.maimunah,
    color: "#E8622A",
    lat: 1.303149,
    lng: 103.8585258,
    routes: { mrt: "11 Jalan Pisang, Kampong Glam · Bugis MRT, about 7 minutes on foot" },
    bestFor: "The famous one",
    closures: "Closed Sundays",
    window: restOn(0, [[H(7, 30), H(19)]]),
    orders: [],
  },
  {
    slug: "padang-sabar-menanti",
    name: "Nasi Padang Sabar Menanti",
    short: "Sabar Menanti",
    href: "/food-heritage/nasi-padang",
    heading: PADANG_H.sabar,
    color: "#C9A227",
    lat: 1.3026056,
    lng: 103.8587245,
    routes: { mrt: "719 North Bridge Road, Kampong Glam · Bugis MRT, about 7 minutes on foot" },
    bestFor: "A family recipe since 1920",
    closures: "Closed Mondays",
    window: restOn(1, [[H(7), H(17)]]),
    orders: [],
  },
  {
    slug: "padang-rumah-makan-minang",
    name: "Rumah Makan Minang",
    short: "Rumah Makan Minang",
    href: "/food-heritage/nasi-padang",
    heading: PADANG_H.minang,
    color: "#3CB98A",
    lat: 1.3022991,
    lng: 103.8595966,
    routes: { mrt: "18 Kandahar Street, Kampong Glam · Bugis MRT, about 8 minutes on foot" },
    bestFor: "Rendang, the old way",
    closures: "Open daily, 8.30am to 7.30pm",
    window: every([[H(8, 30), H(19, 30)]]),
    orders: [],
  },
  {
    slug: "padang-sederhana",
    name: "Sederhana Singapore",
    short: "Sederhana",
    href: "/food-heritage/nasi-padang",
    heading: PADANG_H.sederhana,
    color: "#9B8CF0",
    lat: 1.3028999,
    lng: 103.85923,
    routes: { mrt: "738 North Bridge Road, Kampong Glam · Bugis MRT, about 9 minutes on foot" },
    bestFor: "Open latest, Indonesian style",
    closures: "Open daily, 8am to 10pm",
    window: every([[H(8), H(22)]]),
    orders: [],
  },
  {
    slug: "padang-minang-house",
    name: "Minang House",
    short: "Minang House",
    href: "/food-heritage/nasi-padang",
    heading: PADANG_H.minangHouse,
    color: "#5B8DEF",
    lat: 1.3048263,
    lng: 103.8337223,
    routes: { mrt: "Lucky Plaza #02-66/67, 304 Orchard Road · Orchard MRT, about 3 minutes on foot" },
    bestFor: "Nearest to Orchard Road",
    closures: "Open daily, 10.30am to 6pm",
    window: every([[H(10, 30), H(18)]]),
    orders: [],
  },
  {
    slug: "padang-sinar-pagi",
    name: "Sinar Pagi Nasi Padang",
    short: "Sinar Pagi",
    href: "/hawker/geylang-serai-market",
    heading: PADANG_H.sinar,
    color: "#EC6F9E",
    lat: 1.3166955,
    lng: 103.897865,
    routes: { mrt: "Geylang Serai Market #02-137 · Paya Lebar MRT, about 10 minutes on foot" },
    bestFor: "Hawker prices, Kapau style",
    closures: "Closed Mondays",
    window: restOn(1, [[H(8), H(19)]]),
    orders: [],
  },
  {
    slug: "padang-hjh-maimunah-jc",
    name: "Hjh Maimunah, Joo Chiat",
    short: "Hjh Maimunah JC",
    href: "/blog/katong-joo-chiat-food-guide",
    heading: PADANG_H.maimunahJc,
    color: "#3FA7C9",
    lat: 1.3154196,
    lng: 103.8980367,
    routes: { mrt: "20 Joo Chiat Road · Paya Lebar MRT, about 9 minutes on foot" },
    bestFor: "Open on Sundays",
    closures: "Closed Mondays",
    window: restOn(1, [[H(8), H(19)]]),
    orders: [],
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do you order nasi padang?",
    a: "Walk the length of the glass cabinet first. Ask for rice, then point at each dish you want: something dry like rendang, something in gravy, a vegetable and a sambal. Ask for kuah, the gravy, over your rice, then pay for the plate. You are charged per dish, so the total depends on what you pick.",
  },
  {
    q: "How much does nasi padang cost in Singapore?",
    a: "Most plates come to S$6 to S$15. Vegetables and eggs are the cheapest dishes, usually S$1.50 to S$2.50 each, and meat costs more: beef rendang was S$4.50 at Hjh Maimunah in June 2026. Two or three dishes with rice is a full lunch.",
  },
  {
    q: "Where is nasi padang from?",
    a: "Padang, the capital of West Sumatra in Indonesia, home of the Minangkabau people. Minang cooks brought the food to Singapore, and Kampong Glam, around Kandahar Street and North Bridge Road, has been its home here for about a century.",
  },
  {
    q: "Where is the best nasi padang in Singapore?",
    a: "Kampong Glam has the deepest roots: Hjh Maimunah on Jalan Pisang, Sabar Menanti and Sederhana on North Bridge Road, and Rumah Makan Minang on Kandahar Street are all a few minutes apart. In the east, Sinar Pagi at Geylang Serai Market cooks at hawker prices.",
  },
  {
    q: "Is nasi padang halal?",
    a: "Nasi padang is Malay and Minangkabau food, and the shops in this guide are Muslim-run. Many are halal-certified by MUIS; if certification matters to you, look for the certificate displayed at the counter.",
  },
  {
    q: "What is the difference between nasi padang and economy rice?",
    a: "Both let you pick dishes to go with rice. Economy rice is usually a Chinese-run stall with stir-fries and set prices by the number of dishes. Nasi padang is Malay and Minangkabau cooking, slow-cooked in coconut and chilli, and every dish is priced on its own.",
  },
  {
    q: "What time should I go for nasi padang?",
    a: "Before 12.30pm. Nasi padang is cooked in the morning and the best dishes sell out by early afternoon. Most shops close between 5pm and 7.30pm. Sederhana on North Bridge Road is the exception, open until 10pm.",
  },
];

const KG = "Kampong Glam";

export const PADANG_GUIDE: AreaGuide = {
  id: "padang",
  mapLabel: "Map of the best nasi padang in Singapore",
  statusMode: "hours",
  tableNote:
    "Hours checked on Google Maps on 17 November 2026. Nasi padang shops close early when dishes sell out, so go before 12.30pm for the full spread.",
  emptyNote: "Nothing on this list is open right now. The earliest cabinets fill up from 7am.",
  from: [{ id: "mrt", label: "Where" }],
  centres: SPOTS,
  landmarks: [
    { name: "Bugis MRT", kind: "mrt", lat: 1.3005, lng: 103.8558 },
    { name: "Orchard MRT", kind: "mrt", lat: 1.304, lng: 103.832 },
    { name: "Paya Lebar MRT", kind: "mrt", lat: 1.3177, lng: 103.8926 },
    { name: "Sultan Mosque", kind: "sight", lat: 1.30225, lng: 103.85898, note: KG },
  ],
  landmarkLegend: "Sultan Mosque, Kampong Glam",
  faqs: FAQS,
  nav: [
    ["How to order", "How to Order Nasi Padang, Step by Step"],
    ["Dish decoder", "What's in the Cabinet"],
    ["Prices", "What a Plate Costs"],
    ["Open now", "Open Right Now: Where to Eat Nasi Padang"],
    ["Best shops", "The Best Nasi Padang in Singapore"],
    ["Quick answers", "Quick Answers"],
  ],
  picker: {
    kicker: "Hungry now?",
    question: "Where are you?",
    spots: [
      {
        id: "kampong-glam",
        label: "Bugis / Kampong Glam",
        plans: [
          {
            from: H(7),
            to: H(8, 30),
            plan: {
              pick: "padang-sabar-menanti",
              why: "The cabinet is full and the rendang is fresh. A recipe that started on a pushcart on Kandahar Street in 1920.",
              steps: [
                { icon: "walk", text: "Leave Bugis MRT and walk towards the Sultan Mosque" },
                { icon: "pin", text: "Sabar Menanti is at 719 North Bridge Road" },
                { icon: "walk", text: "Closed on Mondays" },
              ],
              time: "About 7 minutes on foot",
              also: { text: "Hjh Maimunah, two minutes away, opens at 7.30am (closed Sundays).", href: "#hjh-maimunah-jalan-pisang" },
            },
          },
          {
            from: H(8, 30),
            to: H(19, 30),
            plan: {
              pick: "padang-rumah-makan-minang",
              why: "Open every day, and the rendang is still cooked the old Minangkabau way. A family business on this street since 1954.",
              steps: [
                { icon: "walk", text: "Leave Bugis MRT and walk towards the Sultan Mosque" },
                { icon: "pin", text: "Rumah Makan Minang is at 18 Kandahar Street, one street from the mosque" },
                { icon: "walk", text: "Rendang, a vegetable, sambal goreng, then ask for kuah" },
              ],
              time: "About 8 minutes on foot",
              also: { text: "Or Hjh Maimunah on Jalan Pisang, open until 7pm, closed Sundays.", href: "#hjh-maimunah-jalan-pisang" },
            },
          },
          {
            from: H(19, 30),
            to: H(22),
            plan: {
              pick: "padang-sederhana",
              why: "The rest of Kampong Glam has packed up its cabinets. Sederhana keeps serving until 10pm.",
              steps: [
                { icon: "walk", text: "Leave Bugis MRT and walk up North Bridge Road" },
                { icon: "pin", text: "Sederhana is at 738 North Bridge Road" },
                { icon: "walk", text: "Evening means a thinner spread, so take what looks freshest" },
              ],
              time: "About 9 minutes on foot",
            },
          },
          {
            plan: {
              pick: "padang-sederhana",
              why: "Nasi padang is a daytime meal, cooked at dawn and gone by evening. Sederhana opens first among the late ones, at 8am.",
              steps: [
                { icon: "pin", text: "738 North Bridge Road, Kampong Glam" },
                { icon: "walk", text: "Sabar Menanti opens earlier, at 7am, except on Mondays" },
              ],
              time: "About 9 minutes on foot from Bugis MRT",
              also: { text: "Hungry now? Our supper guide has places open till 4am.", href: "/blog/late-night-food-singapore-supper" },
            },
          },
        ],
      },
      {
        id: "orchard",
        label: "Orchard Road",
        plans: [
          {
            from: H(10, 30),
            to: H(18),
            plan: {
              pick: "padang-minang-house",
              why: "No need to leave Orchard Road. A Minang kitchen on the second floor of Lucky Plaza.",
              steps: [
                { icon: "walk", text: "Leave Orchard MRT and follow the signs to Lucky Plaza" },
                { icon: "pin", text: "Minang House is on level 2, #02-66/67" },
                { icon: "walk", text: "Go before 1pm for the fullest cabinet" },
              ],
              time: "About 3 minutes on foot",
              also: { text: "Want the history too? Kampong Glam is about 15 minutes away by taxi.", href: "#the-best-nasi-padang-in-singapore" },
            },
          },
          {
            plan: {
              pick: "padang-sederhana",
              why: "Minang House is closed right now: it serves from 10.30am to 6pm. Sederhana in Kampong Glam is open from 8am to 10pm.",
              steps: [
                { icon: "train", text: "A taxi or ride-hailing app takes about 10 to 15 minutes" },
                { icon: "pin", text: "Sederhana, 738 North Bridge Road" },
              ],
              time: "About 15 minutes",
              also: { text: "Or stay on Orchard Road: our Orchard hawker guide.", href: "/blog/hawker-food-near-orchard-road" },
            },
          },
        ],
      },
      {
        id: "east",
        label: "Geylang Serai / Katong",
        plans: [
          {
            from: H(8),
            to: H(19),
            plan: {
              pick: "padang-sinar-pagi",
              why: "Hawker prices and a Kapau-style spread upstairs at Singapore's Malay food landmark. Lunch is the main event.",
              steps: [
                { icon: "walk", text: "Leave Paya Lebar MRT and walk east to Geylang Serai Market" },
                { icon: "pin", text: "Go up to the food centre on level 2. Sinar Pagi is #02-137" },
                { icon: "walk", text: "Closed on Mondays. Popular dishes go by lunchtime" },
              ],
              time: "About 10 minutes on foot",
              also: { text: "Hjh Maimunah's Joo Chiat shop is a two-minute walk away, at 20 Joo Chiat Road.", href: "#hjh-maimunah-joo-chiat" },
            },
          },
          {
            plan: {
              pick: "padang-sederhana",
              why: "Sinar Pagi is closed right now: it serves from 8am to 7pm. Sederhana in Kampong Glam is open from 8am to 10pm.",
              steps: [
                { icon: "train", text: "A taxi or ride-hailing app takes about 15 minutes" },
                { icon: "pin", text: "Sederhana, 738 North Bridge Road" },
              ],
              time: "About 15 minutes",
              also: { text: "Staying east? Our Katong guide has dinner ideas.", href: "/blog/katong-joo-chiat-food-guide" },
            },
          },
        ],
      },
    ],
  },
};

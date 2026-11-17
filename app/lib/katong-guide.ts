/*
 * Data for the interactive parts of /blog/katong-joo-chiat-food-guide.
 * Opening hours, addresses and pins checked on Google Maps on 17 Nov 2026.
 * Hawker centre rows use the "most stalls" hours from hawker-hours.ts.
 * Small family shops change hours often: re-check before big edits.
 */
import type { WeekHours } from "./cafes";
import type { AreaGuide, GuideCentre } from "./area-guide-types";

const H = (h: number, m = 0) => h * 60 + m;
type Day = [number, number][] | null;

/** One entry per day, index 0 = Sunday. */
const week = (days: Day[]): WeekHours => days;
const every = (d: Day): Day[] => Array(7).fill(d);
/** Every day except one rest day (0 = Sunday ... 6 = Saturday). */
const restOn = (rest: number, d: Day): Day[] => Array.from({ length: 7 }, (_, i) => (i === rest ? null : d));

/** Exact text of the article's headings, used for jump links. */
export const KATONG_H = {
  laksa: "Katong laksa",
  keluak: "Ayam buah keluak",
  chang: "Bak chang (rice dumplings)",
  soon: "Soon kueh",
  kaya: "Kaya toast",
  prata: "Roti prata",
  wanton: "Wanton mee at Dunman Food Centre",
  hawker: "Where to eat: the hawker centres",
};

const SPOTS: GuideCentre[] = [
  {
    slug: "mohgans-prata",
    name: "Mr & Mrs Mohgan's Super Crispy Roti Prata",
    short: "Mohgan's prata",
    href: "/food-heritage/roti-prata",
    heading: KATONG_H.prata,
    color: "#E8622A",
    lat: 1.3097383,
    lng: 103.902078,
    routes: { mrt: "300 Joo Chiat Road · Marine Parade MRT (TE26), about 14 minutes on foot" },
    bestFor: "Crispy prata at dawn",
    closures: "Closed Wednesdays. Sells out, so go early",
    window: week(restOn(3, [[H(6, 30), H(13, 30)]])),
    orders: [],
  },
  {
    slug: "chin-mee-chin",
    name: "Chin Mee Chin Confectionery",
    short: "Chin Mee Chin",
    href: "/food-heritage/kaya-toast",
    heading: KATONG_H.kaya,
    color: "#C9A227",
    lat: 1.3072451,
    lng: 103.9071171,
    routes: { mrt: "204 East Coast Road · Marine Parade MRT (TE26), about 8 minutes on foot" },
    bestFor: "Kaya toast since 1925",
    closures: "Open daily, 8am to 4pm",
    window: week(every([[H(8), H(16)]])),
    orders: [],
  },
  {
    slug: "ah-yees-soon-kueh",
    name: "Ah Yee's Soon Kueh",
    short: "Ah Yee's",
    href: "/food-heritage/soon-kueh",
    heading: KATONG_H.soon,
    color: "#3CB98A",
    lat: 1.3110206,
    lng: 103.9022753,
    routes: { mrt: "124 Tembeling Road · Eunos (EW7) or Marine Parade (TE26), about 16 minutes on foot" },
    bestFor: "Handmade soon kueh",
    closures: "Closed Wednesdays",
    window: week(restOn(3, [[H(7), H(17)]])),
    orders: [],
  },
  {
    slug: "dunman-wanton-mee",
    name: "Dunman Food Centre wanton mee",
    short: "Dunman wanton mee",
    href: "/food-heritage/wanton-mee",
    heading: KATONG_H.wanton,
    color: "#9B8CF0",
    lat: 1.3094353,
    lng: 103.9018307,
    routes: { mrt: "271 Onan Road · Marine Parade MRT (TE26), about 13 minutes on foot" },
    bestFor: "The wanton mee debate",
    closures: "Dunman Road stall closed Thu, Ah Huat closed Mon",
    // Either stall: Dunman Road 7.30am to 4pm (closed Thu), Ah Huat 7am to 2.45pm (closed Mon).
    window: week([
      [[H(7), H(16)]],
      [[H(7, 30), H(16)]],
      [[H(7), H(16)]],
      [[H(7), H(16)]],
      [[H(7), H(14, 45)]],
      [[H(7), H(16)]],
      [[H(7), H(16)]],
    ]),
    orders: [],
  },
  {
    slug: "kim-choo-kueh-chang",
    name: "Kim Choo Kueh Chang",
    short: "Kim Choo",
    href: "/food-heritage/bak-chang",
    heading: KATONG_H.chang,
    color: "#5B8DEF",
    lat: 1.31347,
    lng: 103.9017472,
    routes: { mrt: "60 Joo Chiat Place · Eunos MRT (EW7), about 11 minutes on foot" },
    bestFor: "Nyonya dumplings and kueh",
    closures: "Open daily, 9am to 9pm",
    window: week(every([[H(9), H(21)]])),
    orders: [],
  },
  {
    slug: "328-katong-laksa",
    name: "328 Katong Laksa",
    short: "328 Katong Laksa",
    href: "/food-heritage/laksa",
    heading: KATONG_H.laksa,
    color: "#E9A23B",
    lat: 1.305059,
    lng: 103.9032669,
    routes: { mrt: "51 East Coast Road · Marine Parade MRT (TE26), about 6 minutes on foot" },
    bestFor: "The famous bowl",
    closures: "Open daily, 9.30am to 9.30pm",
    window: week(every([[H(9, 30), H(21, 30)]])),
    orders: [],
  },
  {
    slug: "janggut-laksa",
    name: "Janggut Laksa (Roxy Square)",
    short: "Janggut Laksa",
    href: "/food-heritage/laksa",
    heading: KATONG_H.laksa,
    color: "#D9822B",
    lat: 1.3046602,
    lng: 103.9038393,
    routes: { mrt: "Roxy Square, 50 East Coast Road · Marine Parade MRT (TE26), about 4 minutes on foot" },
    bestFor: "The 'original' Katong laksa",
    closures: "Open daily, 10.30am to 4.30pm",
    window: week(every([[H(10, 30), H(16, 30)]])),
    orders: [],
  },
  {
    slug: "chilli-padi",
    name: "Chilli Padi Nonya Restaurant",
    short: "Chilli Padi",
    href: "/food-heritage/ayam-buah-keluak",
    heading: KATONG_H.keluak,
    color: "#EC6F9E",
    lat: 1.3134118,
    lng: 103.9000851,
    routes: { mrt: "11 Joo Chiat Place · Eunos MRT (EW7), about 12 minutes on foot" },
    bestFor: "Peranakan, casual",
    closures: "Weekdays shut 2.30pm to 5.30pm. Open all day at weekends",
    window: week([
      [[H(11, 30), H(22)]],
      [[H(11, 30), H(14, 30)], [H(17, 30), H(21, 30)]],
      [[H(11, 30), H(14, 30)], [H(17, 30), H(21, 30)]],
      [[H(11, 30), H(14, 30)], [H(17, 30), H(21, 30)]],
      [[H(11, 30), H(14, 30)], [H(17, 30), H(21, 30)]],
      [[H(11, 30), H(14, 30)], [H(17, 30), H(21, 30)]],
      [[H(11, 30), H(22)]],
    ]),
    orders: [],
  },
  {
    slug: "guan-hoe-soon",
    name: "Guan Hoe Soon Restaurant",
    short: "Guan Hoe Soon",
    href: "/food-heritage/ayam-buah-keluak",
    heading: KATONG_H.keluak,
    color: "#D96BA0",
    lat: 1.312223,
    lng: 103.9002546,
    routes: { mrt: "200 Joo Chiat Road · Eunos MRT (EW7), about 14 minutes on foot" },
    bestFor: "Peranakan since 1953",
    closures: "Shut 3pm to dinner. Dinner from 5pm at weekends",
    window: week([
      [[H(11), H(15)], [H(17), H(21, 30)]],
      [[H(11), H(15)], [H(17, 30), H(21, 30)]],
      [[H(11), H(15)], [H(17, 30), H(21, 30)]],
      [[H(11), H(15)], [H(17, 30), H(21, 30)]],
      [[H(11), H(15)], [H(17, 30), H(21, 30)]],
      [[H(11), H(15)], [H(17, 30), H(21, 30)]],
      [[H(11), H(15)], [H(17), H(21, 30)]],
    ]),
    orders: [],
  },
  {
    slug: "marine-parade-fc",
    name: "Marine Parade Food Centre",
    short: "Marine Parade FC",
    href: "/hawker/marine-parade-food-centre",
    heading: KATONG_H.hawker,
    color: "#3FA7C9",
    lat: 1.30233,
    lng: 103.906387,
    routes: { mrt: "84 Marine Parade Central · Marine Parade MRT (TE26), 2 minutes on foot" },
    bestFor: "Hawker spread, halal stalls",
    closures: "Most stalls 7am to 5pm. Some open later",
    window: week(every([[H(7), H(17)]])),
    orders: [],
  },
  {
    slug: "geylang-serai-km",
    name: "Geylang Serai Market",
    short: "Geylang Serai",
    href: "/hawker/geylang-serai-market",
    heading: KATONG_H.hawker,
    color: "#8CC152",
    lat: 1.316888,
    lng: 103.897407,
    routes: { mrt: "North end of Joo Chiat Road · Paya Lebar MRT (EW8 / CC9), about 10 minutes on foot" },
    bestFor: "Malay food, halal",
    closures: "Most stalls 8am to 4pm",
    window: week(every([[H(8), H(16)]])),
    orders: [],
  },
  {
    slug: "east-coast-lagoon-km",
    name: "East Coast Lagoon Food Village",
    short: "East Coast Lagoon",
    href: "/hawker/east-coast-lagoon-food-village",
    heading: KATONG_H.hawker,
    color: "#7C6FE0",
    lat: 1.30773,
    lng: 103.934303,
    routes: { mrt: "East Coast Park · Bayshore MRT (TE29), then about 20 minutes through the park, or a taxi" },
    bestFor: "Satay by the sea",
    closures: "Most stalls 4pm to 11pm",
    window: week(every([[H(16), H(23)]])),
    orders: [],
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the hawker centre in Joo Chiat?",
    a: "Dunman Food Centre at 271 Onan Road, in the middle of Joo Chiat. It has two floors and is known for its two rival wanton mee stalls. At the northern end of Joo Chiat Road, Geylang Serai Market is the place for Malay food.",
  },
  {
    q: "What food is Katong famous for?",
    a: "Katong laksa, the coconut-rich curry noodle soup eaten with a spoon, and Peranakan cooking: ayam buah keluak, babi pongteh, Nyonya kueh and kueh chang rice dumplings. Kaya toast at Chin Mee Chin and crispy prata at Mohgan's are the breakfast classics.",
  },
  {
    q: "Which is the original Katong laksa?",
    a: "It is contested. 328 Katong Laksa on East Coast Road is the most famous. Janggut Laksa, almost opposite in Roxy Square, says its family's stall on this stretch came first. Order a small bowl at each and decide for yourself.",
  },
  {
    q: "Which MRT station is nearest to Katong and Joo Chiat?",
    a: "Marine Parade (TE26) on the Thomson-East Coast Line is closest to the East Coast Road end: 328 Katong Laksa and Chin Mee Chin. For Joo Chiat Place, Kim Choo and the Peranakan restaurants, Eunos (EW7) on the East-West Line is closer.",
  },
  {
    q: "Is there halal food in Katong and Joo Chiat?",
    a: "Most Peranakan dishes here use pork, and most places in this guide are not halal-certified. For halal food, go to Geylang Serai Market at the north end of Joo Chiat Road, or the halal stalls at Marine Parade Food Centre.",
  },
  {
    q: "What day should I avoid in Katong?",
    a: "Wednesday. Mohgan's prata and Ah Yee's Soon Kueh both close that day. On Mondays and Thursdays, one of Dunman Food Centre's two wanton mee stalls rests.",
  },
];

export const KATONG_GUIDE: AreaGuide = {
  id: "katong",
  mapLabel: "Map of where to eat in Katong and Joo Chiat",
  statusMode: "hours",
  tableNote:
    "Hours checked on Google Maps on 17 November 2026. Small family shops close early when they sell out and change hours around festivals, so check on the day.",
  emptyNote: "Nothing on this list is open right now. Katong wakes up at 6.30am, when Mohgan's starts flipping prata.",
  from: [{ id: "mrt", label: "Where" }],
  centres: SPOTS,
  landmarks: [
    { name: "Marine Parade MRT (TE26)", kind: "mrt", lat: 1.3031, lng: 103.9056 },
    { name: "Eunos MRT (EW7)", kind: "mrt", lat: 1.3197, lng: 103.9029 },
    { name: "Koon Seng Road shophouses", kind: "sight", lat: 1.3104, lng: 103.9025, note: "The pastel Peranakan terraces" },
  ],
  landmarkLegend: "Koon Seng Road shophouses",
  faqs: FAQS,
  nav: [
    ["Open now", "Open Right Now in Katong and Joo Chiat"],
    ["Laksa", KATONG_H.laksa],
    ["Peranakan", KATONG_H.keluak],
    ["Dumplings", KATONG_H.chang],
    ["Breakfast", KATONG_H.kaya],
    ["Prata", KATONG_H.prata],
    ["Hawker centres", KATONG_H.hawker],
    ["A Katong morning", "A Katong Morning, Stop by Stop"],
    ["Quick answers", "Quick Answers"],
  ],
  picker: {
    kicker: "Hungry in the east?",
    question: "Where are you starting?",
    auto: { from: H(21, 30), to: H(23, 30), spot: "park" },
    spots: [
      {
        id: "marine-parade",
        label: "Marine Parade MRT",
        plans: [
          {
            from: H(6),
            to: H(8),
            plan: {
              pick: "mohgans-prata",
              why: "The griddle is already hot. Joo Chiat's most famous prata, shattering crisp, before the queue builds.",
              steps: [
                { icon: "walk", text: "Leave Marine Parade station towards East Coast Road and turn up Joo Chiat Road" },
                { icon: "pin", text: "The stall is inside Tin Yeang Restaurant, 300 Joo Chiat Road" },
                { icon: "walk", text: "Order one plain first. Closed on Wednesdays" },
              ],
              time: "About 14 minutes on foot",
              also: { text: "After 8am, Chin Mee Chin's kaya toast is closer.", href: "#kaya-toast" },
            },
          },
          {
            from: H(8),
            to: H(10, 30),
            plan: {
              pick: "chin-mee-chin",
              why: "Kaya toast and kopi under the same shopfront since 1925. Marble tables, soft-boiled eggs, no hurry.",
              steps: [
                { icon: "walk", text: "Leave Marine Parade station and head up to East Coast Road" },
                { icon: "pin", text: "Chin Mee Chin is at 204 East Coast Road" },
                { icon: "walk", text: "Crack the eggs into the saucer, then dark soy and white pepper" },
              ],
              time: "About 8 minutes on foot",
              also: { text: "Laksa next? 328 opens at 9.30am, back the way you came.", href: "#katong-laksa" },
            },
          },
          {
            from: H(10, 30),
            to: H(16, 30),
            plan: {
              pick: "328-katong-laksa",
              why: "The laksa that beat Gordon Ramsay. Janggut, its rival, is practically across the road, so taste both.",
              steps: [
                { icon: "walk", text: "Leave Marine Parade station towards East Coast Road" },
                { icon: "pin", text: "328 is at 51 East Coast Road. Janggut is in Roxy Square, #01-64, a minute away" },
                { icon: "walk", text: "Order a small bowl at each. Laksa here is eaten with a spoon" },
              ],
              time: "About 6 minutes on foot",
              also: { text: "Janggut closes at 4.30pm, so do it first.", href: "#katong-laksa" },
            },
          },
          {
            from: H(16, 30),
            to: H(21, 30),
            plan: {
              pick: "328-katong-laksa",
              why: "Janggut has closed, but 328 keeps the pot going until 9.30pm. A bowl of laksa is a fine dinner.",
              steps: [
                { icon: "walk", text: "Leave Marine Parade station towards East Coast Road" },
                { icon: "pin", text: "328 Katong Laksa, 51 East Coast Road" },
                { icon: "walk", text: "Add otah if you are hungry" },
              ],
              time: "About 6 minutes on foot",
              also: { text: "Want a sit-down Peranakan dinner instead? See Guan Hoe Soon.", href: "#ayam-buah-keluak" },
            },
          },
          {
            plan: {
              pick: "east-coast-lagoon-km",
              why: "Katong's shops have shut. The seafront hawker centre is still grilling satay.",
              steps: [
                { icon: "train", text: "At this hour, a taxi or ride-hailing app is quickest" },
                { icon: "pin", text: "East Coast Lagoon Food Village, 1220 East Coast Parkway" },
                { icon: "walk", text: "Most stalls stop around 11pm" },
              ],
              time: "About 10 minutes by car",
              also: { text: "Later than that? Our supper guide has places open till 4am.", href: "/blog/late-night-food-singapore-supper" },
            },
          },
        ],
      },
      {
        id: "eunos",
        label: "Eunos MRT",
        plans: [
          {
            from: H(6),
            to: H(11),
            plan: {
              pick: "mohgans-prata",
              why: "A straight walk down Joo Chiat Road to the crispiest prata in the east. It sells out, so do not dawdle.",
              steps: [
                { icon: "walk", text: "Leave Eunos station, cross Changi Road and head south into Joo Chiat" },
                { icon: "pin", text: "The stall is inside Tin Yeang Restaurant, 300 Joo Chiat Road" },
                { icon: "walk", text: "Closed on Wednesdays. Tap Directions below for the walking route" },
              ],
              time: "About 18 minutes on foot",
              also: { text: "Ah Yee's soon kueh is round the corner on Tembeling Road.", href: "#soon-kueh" },
            },
          },
          {
            from: H(11),
            to: H(14, 30),
            plan: {
              pick: "chilli-padi",
              why: "Your first ayam buah keluak, in a relaxed room where nobody minds if you ask for an extra spoon.",
              steps: [
                { icon: "walk", text: "Leave Eunos station, cross Changi Road and head south into Joo Chiat" },
                { icon: "pin", text: "Chilli Padi is at No. 11, #01-03" },
                { icon: "walk", text: "Two people: one braise, one vegetable, one fried dish, plus rice" },
              ],
              time: "About 12 minutes on foot",
              also: { text: "Lunch from 11.30am. Guan Hoe Soon on Joo Chiat Road opens at 11am.", href: "#ayam-buah-keluak" },
            },
          },
          {
            from: H(14, 30),
            to: H(17, 30),
            plan: {
              pick: "kim-choo-kueh-chang",
              why: "The lunch kitchens are resting. Kim Choo is not: kueh chang, Nyonya kueh and a shophouse to wander.",
              steps: [
                { icon: "walk", text: "Leave Eunos station, cross Changi Road and head south into Joo Chiat" },
                { icon: "pin", text: "Kim Choo is at 60 Joo Chiat Place" },
                { icon: "walk", text: "Then walk about 5 minutes south to the pastel terraces of Koon Seng Road" },
              ],
              time: "About 11 minutes on foot",
            },
          },
          {
            from: H(17, 30),
            to: H(21, 30),
            plan: {
              pick: "guan-hoe-soon",
              why: "Singapore's oldest Peranakan restaurant, opened in 1953. Order the ayam buah keluak and the babi pongteh.",
              steps: [
                { icon: "walk", text: "Leave Eunos station, cross Changi Road and head south into Joo Chiat" },
                { icon: "pin", text: "Guan Hoe Soon is at 200 Joo Chiat Road, #01-01" },
                { icon: "walk", text: "Dinner from 5.30pm on weekdays, 5pm at weekends" },
              ],
              time: "About 14 minutes on foot",
              also: { text: "Chilli Padi on Joo Chiat Place is the more casual choice.", href: "#ayam-buah-keluak" },
            },
          },
          {
            plan: {
              pick: "east-coast-lagoon-km",
              why: "Joo Chiat has gone to bed. The seafront hawker centre is the last one still grilling.",
              steps: [
                { icon: "train", text: "At this hour, a taxi or ride-hailing app is quickest" },
                { icon: "pin", text: "East Coast Lagoon Food Village, 1220 East Coast Parkway" },
                { icon: "walk", text: "Most stalls stop around 11pm" },
              ],
              time: "About 12 minutes by car",
              also: { text: "Later than that? Our supper guide has places open till 4am.", href: "/blog/late-night-food-singapore-supper" },
            },
          },
        ],
      },
      {
        id: "park",
        label: "East Coast Park",
        plans: [
          {
            from: H(7),
            to: H(15),
            plan: {
              pick: "marine-parade-fc",
              why: "The seafront stalls are only warming up. Marine Parade's hawker centre is in full swing.",
              steps: [
                { icon: "walk", text: "Cross under the East Coast Parkway by one of the park underpasses towards Marine Parade" },
                { icon: "pin", text: "Marine Parade Food Centre, 84 Marine Parade Central, beside the MRT station" },
                { icon: "walk", text: "Nasi lemak, nasi padang and char kway teow, with halal stalls among them" },
              ],
              time: "About 15 minutes on foot from the beach",
              also: { text: "328 Katong Laksa is a few minutes further.", href: "#katong-laksa" },
            },
          },
          {
            plan: {
              pick: "east-coast-lagoon-km",
              why: "Satay and sambal stingray with the sea breeze. The beachfront hawker centre comes alive after 4pm.",
              steps: [
                { icon: "pin", text: "East Coast Lagoon Food Village, at the eastern end of the park near the lagoon" },
                { icon: "walk", text: "Walk or cycle along the park connector, or drop a pin for your taxi" },
                { icon: "walk", text: "Order satay by the stick and ask the seafood price before you order" },
              ],
              time: "Most stalls from 4pm to 11pm",
              also: { text: "What to order there.", href: "/hawker/east-coast-lagoon-food-village" },
            },
          },
        ],
      },
    ],
  },
  timeline: {
    kicker: "A Katong morning",
    steps: [
      { time: "7.00am", title: "Mohgan's prata", body: "Plain prata first, crisp at the edges, dipped in curry. Arrive before the queue.", mins: 0 },
      { time: "8.00am", title: "Koon Seng Road", body: "Walk off the prata among the pastel Peranakan terraces, two minutes away, before the photographers arrive.", mins: 2 },
      { time: "8.30am", title: "Ah Yee's Soon Kueh", body: "On Tembeling Road. Take a mix of soon kueh and png kueh to go.", mins: 2 },
      { time: "9.30am", title: "Kim Choo Kueh Chang", body: "Nyonya kueh chang and a box of kueh at 60 Joo Chiat Place.", mins: 6 },
      { time: "11.00am", title: "The laksa face-off", body: "A small bowl at 328 and another at Janggut, ten minutes apart. Decide for yourself.", mins: 15 },
      { time: "12.30pm", title: "Chin Mee Chin", body: "Kopi and kaya toast at the 1925 coffee shop to finish. It closes at 4pm.", mins: 7 },
    ],
    footer: "Avoid Wednesdays: Mohgan's and Ah Yee's both rest. Walking times are between stops.",
  },
};

/**
 * Cafe guide data. Hours are [open, close] in minutes after midnight, per day,
 * index 0 = Sunday ... 6 = Saturday. null = closed that day.
 * Hours checked against Google Maps listings on 27 Oct 2026; details against
 * 2025-2026 reviews. Update LAST_CHECKED whenever a listing is re-verified.
 */

export type VibeTag =
  | "brunch"
  | "coffee"
  | "bakery"
  | "dessert"
  | "work"
  | "date"
  | "groups"
  | "local"
  | "dog"
  | "late"
  | "oldschool";

export type Who = "solo" | "date" | "friends" | "family";
export type Craving = "coffee" | "brunch" | "sweet" | "oldschool";

export type Look = "bakery" | "brunch" | "coffee" | "matcha" | "dessert" | "oldschool";
export type IconKey = "croissant" | "cake" | "cookie" | "sandwich" | "egg" | "utensils" | "coffee" | "leaf" | "icecream" | "soup";

export const LOOKS: Record<Look, { label: string; color: string }> = {
  bakery: { label: "Bakery", color: "#E9A23B" },
  brunch: { label: "Brunch", color: "#9B8CF0" },
  coffee: { label: "Coffee", color: "#3CB98A" },
  matcha: { label: "Matcha", color: "#8CC152" },
  dessert: { label: "Dessert", color: "#EC6F9E" },
  oldschool: { label: "Old-school", color: "#E8622A" },
};

export type Span = [number, number];
export type WeekHours = (Span[] | null)[];

export type Cafe = {
  slug: string;
  name: string;
  oneLiner: string;
  kind: string;
  tags: VibeTag[];
  price: "$" | "$$" | "$$$";
  priceNote: string;
  orderThis: string[];
  lepakTip: string;
  hours: WeekHours;
  hoursText: string;
  address: string;
  walk: string;
  goodToKnow?: string[];
  story?: string;
  who: Who[];
  craves: Craving[];
  look: Look;
  icon: IconKey;
  lat: number;
  lng: number;
};

export type CafePairing = {
  title: string;
  when: string;
  hawker: { label: string; href: string; text: string };
  cafeSlug: string;
  cafeText: string;
};

export type CafeArea = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  strapline: string;
  intro: string[];
  lastChecked: string;
  /** Last meaningful content update (YYYY-MM-DD), used for the sitemap. */
  updatedAt: string;
  heroImage: string;
  heroAlt: string;
  quickPicks: { label: string; slug: string }[];
  cafes: Cafe[];
  pairings: CafePairing[];
  nearby: { name: string; text: string; address: string; hoursText: string; lat: number; lng: number }[];
  landmarks: { name: string; kind: "market" | "mrt"; lat: number; lng: number; href?: string }[];
  goodToKnow: string[];
  faqs: { q: string; a: string; link?: { href: string; label: string } }[];
  related: { href: string; label: string }[];
};

const h = (hh: number, mm = 0) => hh * 60 + mm;
const daily = (o: number, c: number): WeekHours => Array(7).fill([[o, c]]);

export const VIBE_LABELS: Record<VibeTag, { label: string; local?: string }> = {
  brunch: { label: "Brunch" },
  coffee: { label: "Great coffee" },
  bakery: { label: "Bakery" },
  dessert: { label: "Something sweet" },
  work: { label: "Work-friendly", local: "laptop kaki" },
  date: { label: "Date-worthy" },
  groups: { label: "Good for groups", local: "bring the gang" },
  local: { label: "Local flavours" },
  dog: { label: "Dog-friendly outdoors" },
  late: { label: "Open late" },
  oldschool: { label: "Old-school", local: "kopitiam" },
};

export const FILTER_TAGS: VibeTag[] = [
  "brunch",
  "coffee",
  "dessert",
  "work",
  "date",
  "local",
  "dog",
  "late",
  "oldschool",
];

const TIONG_BAHRU_CAFES: Cafe[] = [
  {
    slug: "tiong-bahru-bakery",
    name: "Tiong Bahru Bakery",
    kind: "Bakery cafe",
    oneLiner:
      "The bakery that put Tiong Bahru on the brunch map, freshly revamped in 2025.",
    tags: ["bakery", "brunch", "coffee", "local", "dog"],
    price: "$$",
    priceNote: "Kouign amann about S$6.90, banana caramel latte S$8.50. 10% service charge to dine in.",
    orderThis: [
      "Kouign amann",
      "Kouign amann soft-serve (only at this outlet)",
      "Milo Dinosaur shio pan",
    ],
    lepakTip:
      "Go before 9am on a weekday. At weekends the kouign amann can sell out by mid-morning.",
    hours: [
      [[h(8), h(20)]],
      [[h(7, 30), h(20)]],
      [[h(7, 30), h(20)]],
      [[h(7, 30), h(20)]],
      [[h(7, 30), h(20)]],
      [[h(7, 30), h(20)]],
      [[h(8), h(20)]],
    ],
    hoursText: "Mon–Fri 7.30am–8pm, Sat–Sun 8am–8pm",
    address: "56 Eng Hoon St, #01-70, Singapore 160056",
    walk: "About 10 min walk from Tiong Bahru MRT",
    goodToKnow: [
      "Walk-in only, no reservations.",
      "Leashed dogs are welcome at the outdoor tables.",
      "Not halal-certified, though the bakery says some items have no pork, lard or alcohol.",
    ],
    story:
      "The first Tiong Bahru Bakery opened here in 2012. It reopened in September 2025 after a full redesign.",
    who: ["solo", "date", "friends", "family"],
    craves: ["brunch", "sweet", "coffee"],
    look: "bakery",
    icon: "croissant",
    lat: 1.284454,
    lng: 103.8336531,
  },
  {
    slug: "merci-marcel",
    name: "Merci Marcel",
    kind: "French cafe and wine bar",
    oneLiner:
      "French all-day cafe with a glasshouse garden patio that turns into a wine bar after dark.",
    tags: ["brunch", "date", "groups", "dog", "late"],
    price: "$$$",
    priceNote: "About S$30 a person. Eggs benedict around S$21, ravioles from S$20.",
    orderThis: ["Ravioles de Royans", "Marinated crab tartine", "Cheese and charcuterie platter"],
    lepakTip:
      "Weekend tables fill by about 10am. Book ahead, or come for a slow weekday breakfast instead.",
    hours: [
      [[h(8), h(22, 30)]],
      [[h(8), h(22, 30)]],
      [[h(8), h(22, 30)]],
      [[h(8), h(22, 30)]],
      [[h(8), h(22, 30)]],
      [[h(8), h(23, 15)]],
      [[h(8), h(23, 15)]],
    ],
    hoursText: "Daily 8am–10.30pm, Fri–Sat until 11.15pm",
    address: "56 Eng Hoon St, #01-68, Singapore 160056",
    walk: "About 10 min walk from Tiong Bahru MRT",
    goodToKnow: [
      "Takes reservations online.",
      "Pets are welcome on the outdoor patio.",
      "Pork is on the menu.",
    ],
    who: ["date", "friends"],
    craves: ["brunch"],
    look: "brunch",
    icon: "utensils",
    lat: 1.2844364,
    lng: 103.8336932,
  },
  {
    slug: "plain-vanilla",
    name: "Plain Vanilla",
    kind: "Bakery cafe",
    oneLiner: "Airy shophouse bakery famous for cupcakes, with all-day brunch to match.",
    tags: ["bakery", "brunch", "dessert"],
    price: "$$",
    priceNote: "About S$10–30 a person. Cupcakes from about S$4.20.",
    orderThis: ["Red velvet or vanilla bean cupcake", "Smashed avocado toast"],
    lepakTip:
      "Weekends get queues. On a weekday, take a coffee to the fan-cooled seats out front.",
    hours: daily(h(7, 30), h(19)),
    hoursText: "Daily 7.30am–7pm",
    address: "1D Yong Siak St, Singapore 168641",
    walk: "About 10 min walk from Tiong Bahru MRT",
    who: ["friends", "family", "date"],
    craves: ["sweet", "brunch"],
    look: "bakery",
    icon: "cake",
    lat: 1.2823481,
    lng: 103.8305203,
  },
  {
    slug: "flock-cafe",
    name: "Flock Cafe",
    kind: "Neighbourhood cafe",
    oneLiner:
      "Family-run local favourite that works for a solo coffee, a book or a laptop.",
    tags: ["brunch", "coffee", "work", "late"],
    price: "$$",
    priceNote: "Mains around S$20, latte about S$6. Prices are nett, with no service charge.",
    orderThis: ["Cheeky Eggs (eggs benedict with braised pork cheek)", "Club Pancakes"],
    lepakTip:
      "Weekday mornings are calm; weekend brunch is a scramble for seats. Order and pay at the counter.",
    hours: daily(h(8), h(21, 30)),
    hoursText: "Daily 8am–9.30pm",
    address: "78 Moh Guan Terrace, #01-25, Singapore 162078",
    walk: "About 7 min walk from Tiong Bahru MRT",
    goodToKnow: ["Indoor communal tables plus a few outdoor ones.", "Not halal-certified."],
    who: ["solo", "friends", "family"],
    craves: ["brunch", "coffee"],
    look: "brunch",
    icon: "egg",
    lat: 1.2835798,
    lng: 103.8302241,
  },
  {
    slug: "pralet",
    name: "Pralet",
    kind: "Bakery cafe",
    oneLiner: "A bakery since 2006, now famous for its square sourdough doughnuts.",
    tags: ["bakery", "dessert", "coffee"],
    price: "$",
    priceNote: "Doughnuts S$3.20–4, iced white about S$5.50.",
    orderThis: ["Burnt butter honey glaze doughnut", "Beef'in Cheese'in sandwich", "Hojicha latte"],
    lepakTip:
      "On Sundays the popular doughnut flavours can be gone by about noon, so go early.",
    hours: [
      [[h(9), h(18)]],
      null,
      [[h(9), h(18)]],
      [[h(9), h(18)]],
      [[h(9), h(18)]],
      [[h(9), h(18)]],
      [[h(9), h(18)]],
    ],
    hoursText: "Tue–Sun 9am–6pm, closed Mon",
    address: "17 Eng Hoon St, #01-04 Eng Hoon Mansions, Singapore 169767",
    walk: "About 10 min walk from Tiong Bahru MRT",
    story: "Formerly Caffe Pralet, founded in 2006 by the team behind Creative Culinaire.",
    who: ["solo", "friends"],
    craves: ["sweet", "coffee"],
    look: "bakery",
    icon: "cookie",
    lat: 1.2835634,
    lng: 103.8344442,
  },
  {
    slug: "micro-bakery-kitchen",
    name: "Micro Bakery Kitchen",
    kind: "Sourdough bakery",
    oneLiner:
      "Natural sourdough and serious sandwiches in a sunny courtyard, in the old Forty Hands space.",
    tags: ["bakery", "brunch"],
    price: "$$",
    priceNote: "Plates about S$16–22.",
    orderThis: ["Grilled four-cheese sandwich", "Tomato tartine on sourdough", "Lemon yoghurt chia cake"],
    lepakTip: "Weekends get busy. Arrive before 11am for a courtyard seat.",
    hours: [
      [[h(8), h(16)]],
      null,
      null,
      [[h(8), h(16)]],
      [[h(8), h(16)]],
      [[h(8), h(16)]],
      [[h(8), h(16)]],
    ],
    hoursText: "Wed–Sun 8am–4pm, closed Mon–Tue",
    address: "78 Yong Siak St, #01-12, Singapore 163078",
    walk: "About 8 min walk from Tiong Bahru MRT",
    goodToKnow: ["Not halal-certified."],
    who: ["solo", "date"],
    craves: ["brunch"],
    look: "bakery",
    icon: "sandwich",
    lat: 1.2826384,
    lng: 103.8304851,
  },
  {
    slug: "creamier",
    name: "Creamier",
    kind: "Ice cream and waffles",
    oneLiner: "Handcrafted ice cream and waffles, the estate's after-dinner stop.",
    tags: ["dessert", "local", "late"],
    price: "$",
    priceNote: "Single scoop S$4.90, waffles S$7.50.",
    orderThis: ["Sea salt gula melaka", "Earl grey lavender", "Waffles with a scoop"],
    lepakTip:
      "It opens at 3pm on weekdays and noon at weekends, so save it for after dinner.",
    hours: [
      [[h(12), h(22)]],
      null,
      [[h(15), h(22)]],
      [[h(15), h(22)]],
      [[h(15), h(22)]],
      [[h(15), h(22)]],
      [[h(12), h(22)]],
    ],
    hoursText: "Tue–Fri 3pm–10pm, Sat–Sun noon–10pm, closed Mon",
    address: "78 Yong Siak St, #01-18, Singapore 163078",
    walk: "About 8 min walk from Tiong Bahru MRT",
    goodToKnow: ["Not halal-certified."],
    who: ["friends", "family", "date"],
    craves: ["sweet"],
    look: "dessert",
    icon: "icecream",
    lat: 1.2828794,
    lng: 103.8303658,
  },
  {
    slug: "glass-roasters",
    name: "Glass Roasters",
    kind: "Specialty coffee",
    oneLiner: "Small specialty roaster with an early start and some unusual lattes.",
    tags: ["coffee"],
    price: "$",
    priceNote: "About S$10 or less a person. Iced latte around S$7.",
    orderThis: ["Taro latte", "Macadamia latte", "Single-origin filter"],
    lepakTip:
      "Seats are few. Take your cup for a walk round the estate, or pair it with breakfast at the market.",
    hours: [
      [[h(8, 30), h(18)]],
      [[h(7, 30), h(16, 30)]],
      [[h(7, 30), h(16, 30)]],
      [[h(7, 30), h(16, 30)]],
      [[h(7, 30), h(16, 30)]],
      [[h(7, 30), h(16, 30)]],
      [[h(8, 30), h(18)]],
    ],
    hoursText: "Mon–Fri 7.30am–4.30pm, Sat–Sun 8.30am–6pm",
    address: "60 Seng Poh Lane, Singapore 160060",
    walk: "About 8 min walk from Tiong Bahru MRT",
    who: ["solo"],
    craves: ["coffee"],
    look: "coffee",
    icon: "coffee",
    lat: 1.2844512,
    lng: 103.8330607,
  },
  {
    slug: "hello-arigato",
    name: "Hello Arigato",
    kind: "Japanese sando cafe",
    oneLiner:
      "Japanese sando cafe with local twists, from orh nee coffee to a cai poh egg sando.",
    tags: ["brunch", "local", "date", "coffee"],
    price: "$$",
    priceNote: "Sandos about S$16–28, white coffee S$5.50.",
    orderThis: ["CP egg sando (cai poh, only at this outlet)", "Coffee orh nee cloud", "Yuzu honey chicken sando"],
    lepakTip:
      "Shokubuns are served only until 11am, and weekend queues start around 10am.",
    hours: [
      [[h(8), h(16)], [h(17, 30), h(21)]],
      [[h(9), h(16)], [h(17, 30), h(21)]],
      [[h(9), h(16)], [h(17, 30), h(21)]],
      [[h(9), h(16)], [h(17, 30), h(21)]],
      [[h(9), h(16)], [h(17, 30), h(21)]],
      [[h(9), h(16)], [h(17, 30), h(21)]],
      [[h(8), h(16)], [h(17, 30), h(21)]],
    ],
    hoursText: "Daily 9am–4pm (weekends from 8am), dinner 5.30–9pm",
    address: "58 Seng Poh Rd, #01-15, Singapore 160058",
    walk: "About 5 min walk from Tiong Bahru MRT",
    goodToKnow: ["About 32 seats in a bright corner unit.", "Not halal-certified."],
    who: ["date", "friends"],
    craves: ["brunch", "coffee"],
    look: "brunch",
    icon: "sandwich",
    lat: 1.2848582,
    lng: 103.8331042,
  },
  {
    slug: "matchaya",
    name: "Matchaya",
    kind: "Matcha bar",
    oneLiner: "Matchaya's Tiong Bahru flagship, a matcha bar in the old Drips space.",
    tags: ["dessert", "late"],
    price: "$",
    priceNote: "Prices for this outlet not yet confirmed.",
    orderThis: ["Matcha Cloud 9", "Hardcore matcha affogato", "Matcha kakigori (new from October 2026)"],
    lepakTip: "Open until 9.30pm every day, one of the later hangouts in the estate.",
    hours: daily(h(9, 30), h(21, 30)),
    hoursText: "Daily 9.30am–9.30pm",
    address: "82 Tiong Poh Rd, #01-05, Singapore 160082",
    walk: "About 10 min walk from Tiong Bahru MRT",
    story: "Opened in 2026 in the unit that was Drips Bakery Cafe for more than a decade.",
    who: ["friends", "date", "solo"],
    craves: ["sweet", "coffee"],
    look: "matcha",
    icon: "leaf",
    lat: 1.2836279,
    lng: 103.8340352,
  },
  {
    slug: "hua-bee",
    name: "Hua Bee",
    kind: "Old-school kopitiam",
    oneLiner: "A 1940s kopitiam and the shop from Eric Khoo's 1995 film Mee Pok Man.",
    tags: ["oldschool", "local", "coffee"],
    price: "$",
    priceNote: "Mee pok about S$4.50, kopi from about S$1.10.",
    orderThis: ["Fishball mee pok, dry", "Kaya toast and half-boiled eggs", "Kopi"],
    lepakTip: "Mornings only, and closed Sundays and Mondays. Look for the film poster inside.",
    hours: [
      null,
      null,
      [[h(7, 30), h(14)]],
      [[h(7, 30), h(14)]],
      [[h(7, 30), h(14)]],
      [[h(7, 30), h(14)]],
      [[h(7, 30), h(14)]],
    ],
    hoursText: "Tue–Sat 7.30am–2pm, closed Sun–Mon",
    address: "78 Moh Guan Terrace, #01-19, Singapore 162078",
    walk: "About 8 min walk from Tiong Bahru MRT",
    story:
      "Marble tables and blue tiles, trading since the 1940s. After dark the space becomes a bar run by a different team.",
    who: ["solo", "family"],
    craves: ["oldschool", "coffee"],
    look: "oldschool",
    icon: "soup",
    lat: 1.2836784,
    lng: 103.8303966,
  },
];

export const CAFE_AREAS: CafeArea[] = [
  {
    slug: "tiong-bahru",
    name: "Tiong Bahru",
    seoTitle: "Best Cafes in Tiong Bahru (2026): Brunch, Coffee & Chill Spots",
    seoDescription:
      "11 Tiong Bahru cafes checked in October 2026: vibe, prices, hours, what to order and lepak tips, plus an open-now filter and the hawker stall next door.",
    strapline: "Your lepak guide to Singapore's original cafe neighbourhood.",
    intro: [
      "Tiong Bahru is one of Singapore's oldest public housing estates, built in the 1930s, and its low Art Deco blocks now hide some of the island's best-known cafes.",
      "Here a S$1.10 kopi and an S$8.50 latte share the same few streets. Every cafe below was checked in October 2026, so no closed favourites.",
    ],
    lastChecked: "October 2026",
    updatedAt: "2026-10-28",
    heroImage: "/images/trails/tiong-bahru/hero.jpg",
    heroAlt: "Tiong Bahru Market, at the heart of the estate",
    quickPicks: [
      { label: "Brunch", slug: "merci-marcel" },
      { label: "Coffee", slug: "glass-roasters" },
      { label: "Working", slug: "flock-cafe" },
      { label: "Date", slug: "hello-arigato" },
      { label: "Something sweet", slug: "pralet" },
      { label: "Old-school", slug: "hua-bee" },
    ],
    cafes: TIONG_BAHRU_CAFES,
    pairings: [
      {
        title: "Kueh, then coffee",
        when: "Morning",
        hawker: {
          label: "Tiong Bahru Market",
          href: "/hawker/tiong-bahru-market",
          text: "Chwee kueh from Jian Bo, a family business since 1958, upstairs at the market.",
        },
        cafeSlug: "glass-roasters",
        cafeText: "A taro or macadamia latte round the corner on Seng Poh Lane.",
      },
      {
        title: "Mee pok, then pastry",
        when: "Late morning",
        hawker: {
          label: "Hua Bee",
          href: "#cafe-hua-bee",
          text: "Dry fishball mee pok in the 1940s kopitiam from Mee Pok Man.",
        },
        cafeSlug: "tiong-bahru-bakery",
        cafeText: "Kouign amann and a coffee to finish.",
      },
    ],
    nearby: [
      {
        name: "Jie Bakery",
        text: "A bakery founded in 1988, with a S$4.50 traditional toast set and chicken curry with bread. Near Havelock MRT.",
        address: "249 Outram Rd, Singapore 169048",
        hoursText: "Daily 7.30am–7.30pm",
        lat: 1.2847407,
        lng: 103.8349713,
      },
      {
        name: "Cloudfields",
        text: "Level 2 cafe with rendang pasta and a warm date-night feel. Its building was sold en bloc in 2026, so it may not stay long.",
        address: "313 Outram Rd, Level 2, Singapore 169073",
        hoursText: "Daily 10am–10pm",
        lat: 1.2871692,
        lng: 103.8346657,
      },
    ],
    landmarks: [
      { name: "Tiong Bahru Market", kind: "market", lat: 1.2850771, lng: 103.8328072, href: "/hawker/tiong-bahru-market" },
      { name: "Tiong Bahru MRT (EW17)", kind: "mrt", lat: 1.2860476, lng: 103.8270447 },
      { name: "Havelock MRT (TE16)", kind: "mrt", lat: 1.2894942, lng: 103.8332802 },
    ],
    goodToKnow: [
      "Tiong Bahru MRT (East-West Line) is a 5 to 10 minute walk from most cafes. Havelock MRT (Thomson-East Coast Line) is closer to the Outram Road side.",
      "Weekend brunch queues are real. Arrive before 10am or go on a weekday.",
      "Several cafes close on Mondays, and Hua Bee closes on Sundays too.",
      "No cafe in the estate is halal-certified as of October 2026.",
    ],
    faqs: [
      {
        q: "Which Tiong Bahru cafes are open on Monday?",
        a: "Tiong Bahru Bakery, Merci Marcel, Plain Vanilla, Flock Cafe, Glass Roasters, Hello Arigato and Matchaya are open on Mondays. Pralet, Micro Bakery Kitchen, Creamier and Hua Bee are closed.",
      },
      {
        q: "Which cafes in Tiong Bahru are open late?",
        a: "Merci Marcel is open until 10.30pm (11.15pm on Fridays and Saturdays), Creamier until 10pm, and Flock Cafe and Matchaya until 9.30pm. Hello Arigato also serves dinner until 9pm.",
      },
      {
        q: "Is Tiong Bahru good for brunch?",
        a: "Yes. Merci Marcel, Flock Cafe, Hello Arigato, Plain Vanilla and Micro Bakery Kitchen all do brunch. At weekends, arrive before 10am or expect to queue.",
      },
      {
        q: "Which Tiong Bahru cafes are good for working on a laptop?",
        a: "Flock Cafe is the one reviewers mention for solo work and reading. Most other cafes are small or busy at weekends, so working there is best on a weekday.",
      },
      {
        q: "Are there halal cafes in Tiong Bahru?",
        a: "We could not find a halal-certified cafe in the estate as of October 2026. Tiong Bahru Bakery is not certified but says some items contain no pork, lard or alcohol.",
        link: { href: "/blog/halal-hawker-food-singapore", label: "See our halal hawker food guide" },
      },
      {
        q: "How do I get to the Tiong Bahru cafes?",
        a: "Take the East-West Line to Tiong Bahru MRT. Most cafes are a 5 to 10 minute walk away. Havelock MRT on the Thomson-East Coast Line is closer to the Outram Road side of the estate.",
      },
    ],
    related: [
      { href: "/hawker/tiong-bahru-market", label: "Tiong Bahru Market: what to eat" },
      { href: "/flavour-trail/tiong-bahru-trail", label: "Tiong Bahru food trail" },
      { href: "/food-heritage/chwee-kueh", label: "What is chwee kueh?" },
    ],
  },
];

export const COMING_SOON_AREAS = [
  { name: "Katong & Joo Chiat", text: "Peranakan shophouses, Nanyang kopi and laksa next door." },
  { name: "Jalan Besar & Lavender", text: "A new wave of cafes beside old-school hardware shops." },
];

export function getCafeArea(slug: string): CafeArea | undefined {
  return CAFE_AREAS.find((a) => a.slug === slug);
}

/** Minutes since midnight and day index in Singapore time. */
export function singaporeNow(date = new Date()): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Singapore",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hour = Number(get("hour")) % 24;
  return { day: days.indexOf(get("weekday")), minutes: hour * 60 + Number(get("minute")) };
}

export function openStatus(
  hours: WeekHours,
  day: number,
  minutes: number,
): { open: boolean; closesAt?: number; opensAt?: number } {
  const today = hours[day];
  if (today) {
    for (const [o, c] of today) {
      if (minutes >= o && minutes < c) return { open: true, closesAt: c };
    }
    const next = today.find(([o]) => o > minutes);
    if (next) return { open: false, opensAt: next[0] };
  }
  return { open: false };
}

export function formatTime(m: number): string {
  const hh = Math.floor(m / 60);
  const mm = m % 60;
  const suffix = hh >= 12 ? "pm" : "am";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return mm ? `${h12}.${String(mm).padStart(2, "0")}${suffix}` : `${h12}${suffix}`;
}

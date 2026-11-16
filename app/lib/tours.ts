/**
 * Guided food tours we link to (affiliate). Checked October 2026.
 * Prices are what the booking platform displayed; they change, so copy says "from about".
 * Recheck every few months and remove any listing that disappears.
 */
export type Tour = {
  id: string;
  name: string;
  operator: string;
  platform: "GetYourGuide" | "Klook" | "Viator";
  url: string;
  price: string;
  duration: string;
  rating?: string;
  highlights: string[];
  note?: string;
  /* Fields for the comparison table and tour matcher on /blog/best-singapore-food-tours. */
  area?: string;
  when?: "morning" | "day" | "evening";
  tastings?: string;
  priceUsd?: number;
  group?: "group" | "private";
  diet?: ("vegetarian" | "halal")[];
  start?: string;
  cancellation?: string;
  reviews?: string;
  bestFor?: string;
  checked?: string;
};

export const TOURS: Record<string, Tour> = {
  chinatown: {
    id: "chinatown",
    name: "Chinatown Hawkers Food Tour",
    operator: "Secret Food Tours",
    platform: "GetYourGuide",
    url: "https://www.getyourguide.com/singapore-l170/singapore-chinatown-hawkers-food-tour-with-7-food-tastings-t224655/",
    price: "From about US$88",
    duration: "3.5 hours",
    rating: "4.9/5 on GetYourGuide",
    highlights: [
      "7 tastings, from popiah and chicken rice to chwee kueh and chendol",
      "A drink and gratuities included",
      "Meets outside Chinatown MRT, Exit A",
    ],
    area: "Chinatown",
    when: "day",
    tastings: "7 plus a drink",
    priceUsd: 88,
    group: "group",
    diet: [],
    start: "Chinatown MRT, Exit A",
    cancellation: "Check the listing",
    reviews: "4.9 from 21 reviews",
    bestFor: "A deep dive into one neighbourhood",
    checked: "Oct 2026",
  },
  "little-india": {
    id: "little-india",
    name: "Little India Hawker Street Food Tour",
    operator: "Let's Go Tour Singapore",
    platform: "GetYourGuide",
    url: "https://www.getyourguide.com/singapore-l170/singapore-chinatown-street-food-walking-tour-with-tastings-t418325/",
    price: "From about US$86",
    duration: "3 hours",
    rating: "4.8/5 on GetYourGuide",
    highlights: [
      "8 food and drink tastings",
      "Little India's hawker centres and back lanes, with a local guide",
      "Meets at Little India MRT, Exit C",
    ],
    area: "Little India",
    when: "day",
    tastings: "8",
    priceUsd: 86,
    group: "group",
    diet: [],
    start: "Little India MRT, Exit C",
    cancellation: "Check the listing",
    reviews: "4.8 from 28 reviews",
    bestFor: "Curry lovers and Indian breakfasts",
    checked: "Oct 2026",
  },
  katong: {
    id: "katong",
    name: "Joo Chiat & Katong Food Tour",
    operator: "Tribe Tours",
    platform: "Klook",
    url: "https://www.klook.com/en-US/activity/55060-eat-your-way-through-katong-and-joo-chiat/",
    price: "From about US$75",
    duration: "3 hours, morning",
    highlights: [
      "Dunman Food Centre, Peranakan shophouses and East Coast Road",
      "Soon kueh, vadai and tau kwa pau, finishing with Katong laksa",
      "Groups of up to 16, meets at Dunman Food Centre",
    ],
    note: "Non-refundable once booked, so check your dates first.",
    area: "Katong and Joo Chiat",
    when: "morning",
    tastings: "Several, ending with laksa",
    priceUsd: 75,
    group: "group",
    diet: [],
    start: "Dunman Food Centre",
    cancellation: "No refunds",
    reviews: "Few reviews yet",
    bestFor: "Peranakan culture and best value",
    checked: "Oct 2026",
  },
  night: {
    id: "night",
    name: "Guided Street Food Tour at Night",
    operator: "Monster Day Tours",
    platform: "GetYourGuide",
    url: "https://www.getyourguide.com/singapore-river-l20475/singapore-guided-street-food-tour-at-night-t295825/",
    price: "From about US$85",
    duration: "3.5 hours, evening",
    rating: "4.6/5 from 548 reviews",
    highlights: [
      "9 tastings, including satay, prata, bak kut teh and chicken rice",
      "Along the Singapore River, ending at Lau Pa Sat's Satay Street",
      "Groups of up to 12, with a vegetarian menu option",
    ],
    area: "Singapore River to Lau Pa Sat",
    when: "evening",
    tastings: "9",
    priceUsd: 85,
    group: "group",
    diet: ["vegetarian"],
    start: "Clarke Quay MRT, Exit E",
    cancellation: "Free up to 24 hours before",
    reviews: "4.6 from 548 reviews",
    bestFor: "First-timers with one evening",
    checked: "16 Nov 2026",
  },
  private: {
    id: "private",
    name: "A Taste of Singapore: Hawker Center Private Food Tour",
    operator: "Withlocals",
    platform: "Viator",
    url: "https://www.viator.com/tours/Singapore/Singapore-Street-Food-Hawker-Centre-Tastings-Private-Tour/d60449-24380P991",
    price: "From about US$130",
    duration: "About 2.5 hours",
    rating: "4.6/5 from 115 reviews",
    highlights: [
      "Only your group, with the pace set around you",
      "Chinatown and Telok Ayer, passing Maxwell and ending at Lau Pa Sat",
      "Guides adapt to vegetarian and gluten-free needs, reviewers say",
    ],
    area: "Chinatown and Telok Ayer",
    when: "day",
    tastings: "5",
    priceUsd: 130,
    group: "private",
    diet: ["vegetarian"],
    start: "Arranged with the guide",
    cancellation: "Check the listing",
    reviews: "4.6 from 115 reviews",
    bestFor: "Families and special diets",
    checked: "Oct 2026",
  },
  halal: {
    id: "halal",
    name: "Halal Food Walking Tour at Kampong Glam",
    operator: "Wok 'n' Stroll",
    platform: "Viator",
    url: "https://www.viator.com/tours/Singapore/Halal-Food-Walking-Tour-at-Kampong-Glam/d60449-25339P10",
    price: "Check the listing",
    duration: "About 3 hours",
    rating: "5/5 from 2 reviews",
    highlights: [
      "The only dedicated halal food tour on the big platforms",
      "Kampong Glam around Sultan Mosque",
      "Tiny groups of up to 6, meets at the Malay Heritage Centre",
    ],
    area: "Kampong Glam",
    when: "day",
    tastings: "Several, plus snacks",
    group: "group",
    diet: ["halal"],
    start: "Malay Heritage Centre",
    cancellation: "Check the listing",
    reviews: "5 from 2 reviews",
    bestFor: "Halal diets",
    checked: "Oct 2026",
  },
};

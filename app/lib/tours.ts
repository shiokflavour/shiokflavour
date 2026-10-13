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
  },
  night: {
    id: "night",
    name: "Guided Street Food Tour at Night",
    operator: "Monster Day Tours",
    platform: "GetYourGuide",
    url: "https://www.getyourguide.com/singapore-river-l20475/singapore-guided-street-food-tour-at-night-t295825/",
    price: "From about US$85",
    duration: "3.5 hours, evening",
    rating: "4.6/5 from 520+ reviews",
    highlights: [
      "9 tastings, including satay, prata, bak kut teh and chicken rice",
      "Along the Singapore River, ending at Lau Pa Sat's Satay Street",
      "Groups of up to 12, with a vegetarian menu option",
    ],
  },
};

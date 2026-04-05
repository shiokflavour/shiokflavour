export type HawkerRegion = "Central" | "North" | "South" | "East" | "West";

export type FeaturedHawker = {
  id: number;
  name: string;
  address: string;
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
};

export const FEATURED_HAWKERS: FeaturedHawker[] = [
  {
    id: 1,
    name: "Maxwell Food Centre",
    address: "1 Kadayanallur Street, Tanjong Pagar",
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "8am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    description:
      "One of Singapore's most famous hawker centres, steps from Chinatown. A pilgrimage site for food lovers visiting Singapore.",
    mustTry: [
      "Tian Tian Chicken Rice",
      "Maxwell Fuzhou Oyster Cake",
      "Zhen Zhen Porridge",
    ],
    famousFor:
      "Tian Tian Hainanese Chicken Rice — queues every day, famously visited by Anthony Bourdain",
    michelinNote:
      "Tian Tian Chicken Rice has received Michelin Bib Gourmand recognition",
    vibes: ["Tourists", "Lunch crowd", "Chinatown visit"],
    nearestMRT: "Tanjong Pagar (EW Line) — 5 min walk",
    tipForVisitors:
      "Go before 12pm to avoid long queues at Tian Tian. Arrive early or the chicken rice sells out.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 2,
    name: "Lau Pa Sat",
    address: "18 Raffles Quay, CBD",
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "24 hours (most stalls 7am–10pm)",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
    description:
      "A Victorian cast-iron market building in the heart of the CBD. Famous for its Boon Tat Street satay stalls that fire up at night.",
    mustTry: ["Satay (Boon Tat Street)", "Rojak", "Carrot Cake", "Popiah"],
    famousFor:
      "Satay street — over 20 satay stalls line the closed road every evening from 7pm",
    michelinNote:
      "Featured in Michelin Guide Singapore as a must-visit hawker experience",
    vibes: [
      "Tourists",
      "After-work drinks",
      "Late night supper",
      "Corporate crowd",
    ],
    nearestMRT: "Raffles Place (EW/NS Line) — 3 min walk",
    tipForVisitors:
      "Come after 7pm when Boon Tat Street closes to traffic and the satay stalls set up. Order a cold beer and watch the city.",
    halal: false,
    openLate: true,
    budgetPerPax: "$8–$15",
  },
  {
    id: 3,
    name: "Old Airport Road Food Centre",
    address: "51 Old Airport Road, Geylang",
    region: "East",
    tag: "Local Favourite",
    hours: "6am–11pm (some stalls open late)",
    imageUrl:
      "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=400",
    description:
      "A legendary hawker centre that locals consider one of the best in Singapore. Massive, buzzing and packed with heritage stalls.",
    mustTry: [
      "Toa Payoh Lor Mee",
      "Hua Kee Chicken Wings",
      "Dong Ji Fried Kway Teow",
      "Old Airport Road Carrot Cake",
    ],
    famousFor:
      "One of Singapore's largest and oldest hawker centres — over 150 stalls with multiple Michelin-recognised hawkers",
    michelinNote:
      "Multiple stalls with Michelin Bib Gourmand recognition including lor mee and fried kway teow",
    vibes: ["Local families", "Foodies", "Weekend breakfast", "Serious eaters"],
    nearestMRT: "Dakota (CC Line) — 8 min walk",
    tipForVisitors:
      "Take the Circle Line to Dakota MRT. Come hungry — you'll want to try multiple stalls. Weekend mornings are especially lively.",
    halal: false,
    openLate: true,
    budgetPerPax: "$4–$8",
  },
  {
    id: 4,
    name: "Chinatown Complex Food Centre",
    address: "335 Smith Street, Chinatown",
    region: "Central",
    tag: "Michelin Alert",
    hours: "6am–11pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    description:
      "Singapore's largest hawker centre with over 260 stalls. Home to the world's cheapest Michelin-starred meal.",
    mustTry: [
      "Chan Hon Meng Soya Sauce Chicken Rice",
      "Liao Fan Hong Kong Congee",
      "Outram Park Ya Hua Rou Gu Cha",
    ],
    famousFor:
      "Hong Kong Soya Sauce Chicken Rice & Noodle — world's first street food to receive a Michelin star",
    michelinNote:
      "Chan Hon Meng's stall received a Michelin Star in 2016 — a $2 plate of chicken rice is the world's cheapest Michelin meal",
    vibes: ["Foodies", "Michelin hunters", "Tourists", "Chinatown explorers"],
    nearestMRT: "Chinatown (NE/DT Line) — 3 min walk",
    tipForVisitors:
      "Queue at Chan Hon Meng's stall before 11am. He often sells out by early afternoon. The line is worth it.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$8",
  },
  {
    id: 5,
    name: "Newton Food Centre",
    address: "500 Clemenceau Avenue North, Newton",
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "12pm–2am daily",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    description:
      "The most internationally famous hawker centre in Singapore — featured in the movie Crazy Rich Asians and countless travel shows.",
    mustTry: [
      "BBQ Seafood",
      "Satay",
      "Carrot Cake",
      "Sugarcane Juice",
      "Oyster Omelette",
    ],
    famousFor:
      "Crazy Rich Asians filming location. Famous for BBQ seafood and late night atmosphere.",
    michelinNote: "Featured in Michelin Guide as a recommended hawker experience",
    vibes: ["Tourists", "Late night crowd", "Expats", "Movie fans"],
    nearestMRT: "Newton (NS/DT Line) — 3 min walk",
    tipForVisitors:
      "Ignore the aggressive touting from stall owners — walk around first and choose what looks good. Prices are slightly higher than other hawker centres.",
    halal: false,
    openLate: true,
    budgetPerPax: "$10–$20",
  },
  {
    id: 6,
    name: "Tekka Centre",
    address: "665 Buffalo Road, Little India",
    region: "Central",
    tag: "Halal Haven",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
    description:
      "The heart of Little India — a vibrant wet market and food centre packed with authentic Indian, Malay and Muslim food.",
    mustTry: ["Roti Prata", "Biryani", "Fish Head Curry", "Teh Tarik", "Vadai"],
    famousFor:
      "Best roti prata and biryani in Singapore. Completely halal food centre beloved by locals.",
    michelinNote:
      "Several stalls recommended in the Michelin Guide Singapore for authentic Indian cuisine",
    vibes: [
      "Muslim-friendly",
      "Indian food lovers",
      "Cultural experience",
      "Breakfast crowd",
    ],
    nearestMRT: "Little India (NE/DT Line) — 5 min walk",
    tipForVisitors:
      "Perfect for Muslim visitors — everything is halal. Best visited Sunday mornings when Little India is most vibrant. Try the roti prata with curry for breakfast.",
    halal: true,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 7,
    name: "Adam Road Food Centre",
    address: "2 Adam Road, Bukit Timah",
    region: "Central",
    tag: "Supper Spot",
    hours: "7am–late night",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    description:
      "A beloved neighbourhood hawker centre known for its famous nasi lemak and late night crowd. A local institution.",
    mustTry: ["Adam Road Nasi Lemak", "Roti John", "Mee Rebus", "Teh Tarik"],
    famousFor:
      "Adam Road Nasi Lemak — consistently voted one of Singapore's best nasi lemak for decades",
    michelinNote:
      "Adam Road Nasi Lemak stall has received Michelin Bib Gourmand recognition",
    vibes: [
      "Late night supper",
      "Malay food lovers",
      "Halal options",
      "Expat neighbourhood",
    ],
    nearestMRT: "Botanic Gardens (CC/DT Line) — 10 min walk",
    tipForVisitors:
      "The nasi lemak stall has long queues — come before 9am or after 8pm. Great spot for late night supper after exploring the Botanic Gardens.",
    halal: true,
    openLate: true,
    budgetPerPax: "$4–$8",
  },
  {
    id: 8,
    name: "Bedok Interchange Hawker Centre",
    address: "208 New Upper Changi Road, Bedok",
    region: "East",
    tag: "Local Favourite",
    hours: "6am–11pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
    description:
      "A bustling hawker centre at the heart of Bedok — one of Singapore's most residential towns and beloved by East-siders.",
    mustTry: [
      "Bedok Chwee Kueh",
      "Mutton Soup",
      "Char Kway Teow",
      "Sugarcane Juice",
    ],
    famousFor:
      "Chwee kueh — steamed rice cakes topped with preserved radish. A uniquely Singaporean breakfast.",
    michelinNote: "Chwee Kueh stall has received Michelin Bib Gourmand recognition",
    vibes: ["East-side locals", "Breakfast crowd", "Families", "No-frills dining"],
    nearestMRT: "Bedok (EW Line) — 2 min walk",
    tipForVisitors:
      "Extremely convenient — right next to Bedok MRT. Perfect stop if exploring the East Coast area.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
  },
  {
    id: 9,
    name: "Bedok 85 Fengshan Market",
    address: "85 Bedok North Street 4, Bedok",
    region: "East",
    tag: "Supper Spot",
    hours: "24 hours (most stalls till late)",
    imageUrl:
      "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=400",
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
  },
  {
    id: 10,
    name: "Tampines Round Market",
    address: "137 Tampines Street 11, Tampines",
    region: "East",
    tag: "Budget Eats",
    hours: "6am–11pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
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
  },
  {
    id: 11,
    name: "Geylang Serai Market",
    address: "1 Geylang Serai, Geylang",
    region: "East",
    tag: "Halal Haven",
    hours: "6am–10pm (24hrs during Ramadan)",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    description:
      "The cultural heart of Malay Singapore. A vibrant wet market and food centre that comes alive especially during Ramadan.",
    mustTry: [
      "Nasi Padang",
      "Murtabak",
      "Kueh Pie Tee",
      "Bandung",
      "Putu Piring",
    ],
    famousFor:
      "Best Malay and Muslim food in Singapore. During Ramadan the bazaar outside is unmissable.",
    michelinNote:
      "Featured in Michelin Guide as essential Singapore food culture experience",
    vibes: [
      "Muslim-friendly",
      "Malay culture",
      "Ramadan bazaar",
      "Cultural immersion",
    ],
    nearestMRT: "Aljunied (EW Line) — 10 min walk",
    tipForVisitors:
      "Completely halal. Visit during Ramadan evenings for the incredible bazaar outside. Try the putu piring — traditional Malay steamed rice cakes.",
    halal: true,
    openLate: true,
    budgetPerPax: "$4–$9",
  },
  {
    id: 12,
    name: "Amoy Street Food Centre",
    address: "7 Maxwell Road, Tanjong Pagar",
    region: "Central",
    tag: "Office Favourite",
    hours: "7am–3pm (breakfast and lunch only)",
    imageUrl:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
    description:
      "A lunchtime institution in the CBD — packed with office workers daily. Some of the best traditional Singaporean breakfast and lunch options.",
    mustTry: ["A Noodle Story", "Hoo Kee Bak Chang", "Breakfast Popiah"],
    famousFor:
      "A Noodle Story — a modern Singapore-style ramen with a long daily queue",
    michelinNote:
      "A Noodle Story has received Michelin Bib Gourmand recognition for its Singapore-style ramen",
    vibes: ["CBD lunch crowd", "Office workers", "Foodies", "Breakfast"],
    nearestMRT: "Tanjong Pagar (EW Line) — 5 min walk",
    tipForVisitors:
      "Come before 11:30am or after 1:30pm to avoid the lunch rush. Closes in the afternoon — lunch only.",
    halal: false,
    openLate: false,
    budgetPerPax: "$5–$9",
  },
  {
    id: 13,
    name: "Tiong Bahru Market",
    address: "30 Seng Poh Road, Tiong Bahru",
    region: "Central",
    tag: "Hipster Favourite",
    hours: "6am–9pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    description:
      "In Singapore's trendiest neighbourhood — a gorgeous Art Deco market building with heritage hawker stalls downstairs and a wet market above.",
    mustTry: [
      "Tiong Bahru Chwee Kueh",
      "Lor Mee",
      "Bao Today",
      "Tiong Bahru Bakery",
    ],
    famousFor:
      "Chwee Kueh — the definitive version of this traditional dish. Also great for post-brunch hawker food after exploring Tiong Bahru.",
    michelinNote:
      "Tiong Bahru Chwee Kueh has received Michelin Bib Gourmand recognition",
    vibes: [
      "Hipsters",
      "Expats",
      "Families",
      "Weekend brunch",
      "Instagram-worthy",
    ],
    nearestMRT: "Tiong Bahru (EW Line) — 10 min walk",
    tipForVisitors:
      "Pair with a walk around the Tiong Bahru art deco estate and indie cafes. Best on weekend mornings when the neighbourhood comes alive.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 14,
    name: "ABC Brickworks Market",
    address: "6 Jalan Bukit Merah, Bukit Merah",
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
    description:
      "A hidden gem loved by locals — away from the tourist trail but packed with excellent food at very reasonable prices.",
    mustTry: ["Satay", "BBQ Chicken Wings", "Carrot Cake", "Popiah"],
    famousFor:
      "One of the best satay stalls in Singapore — locals drive across the island just for this.",
    michelinNote: "",
    vibes: [
      "Off the beaten path",
      "Local families",
      "Authentic experience",
      "Budget dining",
    ],
    nearestMRT: "Redhill (EW Line) — 10 min walk",
    tipForVisitors:
      "Worth the trek away from the tourist areas. This is where locals actually eat. Very affordable and no tourists.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 15,
    name: "Buona Vista Market",
    address: "43 Holland Drive, Holland Village",
    region: "West",
    tag: "Budget Eats",
    hours: "6am–9pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=400",
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
  },
  {
    id: 16,
    name: "Clementi 448 Market",
    address: "448 Clementi Avenue 3, Clementi",
    region: "West",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    description:
      "A well-loved neighbourhood hawker centre in Clementi serving the local community with consistent quality food.",
    mustTry: ["Hokkien Mee", "Char Siew Rice", "Laksa", "Economy Rice"],
    famousFor:
      "Reliable neighbourhood hawker food — no frills, great value, always packed with regulars.",
    michelinNote: "",
    vibes: ["West-side locals", "NUS students", "Families", "No-frills dining"],
    nearestMRT: "Clementi (EW Line) — 10 min walk",
    tipForVisitors:
      "Popular with NUS students and Clementi locals. Great authentic neighbourhood experience.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
  },
  {
    id: 17,
    name: "Jurong West 505 Market",
    address: "505 Jurong West Street 52, Jurong West",
    region: "West",
    tag: "Budget Eats",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    description:
      "A large neighbourhood hawker centre serving the Jurong West community with a wide variety of affordable food options.",
    mustTry: ["Bak Chor Mee", "Chicken Rice", "Nasi Lemak", "Teh Tarik"],
    famousFor:
      "One of the largest and most complete hawker centres in West Singapore.",
    michelinNote: "",
    vibes: [
      "West Singapore locals",
      "Budget dining",
      "Families",
      "Industrial workers",
    ],
    nearestMRT: "Jurong West (EW Line) — 15 min walk",
    tipForVisitors:
      "Good stop if exploring Jurong area including Jurong Lake Gardens or the Science Centre.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
  },
  {
    id: 18,
    name: "Yishun Park Hawker Centre",
    address: "51 Yishun Avenue 11, Yishun",
    region: "North",
    tag: "Local Favourite",
    hours: "7am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
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
  },
  {
    id: 19,
    name: "Sembawang Hills Food Centre",
    address: "590 Upper Thomson Road, Sembawang",
    region: "North",
    tag: "Supper Spot",
    hours: "6am–late night",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    description:
      "A beloved neighbourhood food centre along Upper Thomson Road — famous for its late night supper crowd and excellent local food.",
    mustTry: [
      "Bak Kut Teh",
      "Carrot Cake",
      "Prawn Noodles",
      "Durian (seasonal)",
    ],
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
  },
  {
    id: 20,
    name: "Chong Pang Market",
    address: "105 Yishun Ring Road, Yishun",
    region: "North",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
    description:
      "A large and popular market in Yishun serving the northern heartland community with a huge variety of food.",
    mustTry: ["Carrot Cake", "Char Kway Teow", "Mee Goreng", "Fresh Juice"],
    famousFor:
      "One of the most complete hawker centres in the North — everything you need under one roof.",
    michelinNote: "",
    vibes: [
      "North Singapore locals",
      "Yishun residents",
      "Families",
      "Weekend market",
    ],
    nearestMRT: "Yishun (NS Line) — 10 min walk",
    tipForVisitors:
      "Large wet market upstairs is great for fresh produce. Food centre downstairs has a huge variety.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
  },
  {
    id: 21,
    name: "Woodlands Centre Market",
    address: "Blk 6A Woodlands Centre Road, Woodlands",
    region: "North",
    tag: "Budget Eats",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=400",
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
  },
  {
    id: 22,
    name: "Toa Payoh Lorong 8 Market",
    address: "Blk 210 Lorong 8 Toa Payoh, Toa Payoh",
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    description:
      "A classic HDB heartland hawker centre in Toa Payoh — one of Singapore's oldest public housing estates with strong food heritage.",
    mustTry: [
      "Toa Payoh Lor Mee",
      "Wanton Mee",
      "Chicken Rice",
      "Soon Kueh",
    ],
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

/** Featured guide entries use numeric ids in URLs (`/hawker/1`). */
export function getFeaturedHawkerById(raw: string): FeaturedHawker | null {
  const trimmed = raw.trim();
  const n = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(n) || String(n) !== trimmed) return null;
  return FEATURED_HAWKERS.find((h) => h.id === n) ?? null;
}

export type HawkerRegion = "Central" | "North" | "South" | "East" | "West";

export type FeaturedHawker = {
  id: number;
  /** URL segment for `/hawker/{slug}` (SEO). */
  slug: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
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
    slug: "maxwell-food-centre",
    name: "Maxwell Food Centre",
    address: "1 Kadayanallur Street, Tanjong Pagar",
    lat: 1.2803,
    lng: 103.8452,
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "8am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
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
    slug: "lau-pa-sat",
    name: "Lau Pa Sat",
    address: "18 Raffles Quay, CBD",
    lat: 1.2803,
    lng: 103.8503,
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "24 hours (most stalls 7am–10pm)",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:
      "A Victorian cast-iron market building in the heart of the CBD. Famous for its Boon Tat Street satay stalls that fire up at night.",
    mustTry: ["Satay (Boon Tat Street)", "Rojak", "Carrot Cake", "Popiah"],
    famousFor:
      "Satay street — over 20 satay stalls line the closed road every evening from 7pm",
    michelinNote:
      "Featured in Michelin Guide Singapore as a must-visit hawker experience",
    vibes: ["Tourists", "After-work drinks", "Late night supper", "Corporate crowd"],
    nearestMRT: "Raffles Place (EW/NS Line) — 3 min walk",
    tipForVisitors:
      "Come after 7pm when Boon Tat Street closes to traffic and the satay stalls set up. Order a cold beer and watch the city.",
    halal: false,
    openLate: true,
    budgetPerPax: "$8–$15",
  },
  {
    id: 3,
    slug: "old-airport-road-food-centre",
    name: "Old Airport Road Food Centre",
    address: "51 Old Airport Road, Geylang",
    lat: 1.3057,
    lng: 103.8831,
    region: "East",
    tag: "Local Favourite",
    hours: "6am–11pm (some stalls open late)",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
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
    slug: "chinatown-complex-food-centre",
    name: "Chinatown Complex Food Centre",
    address: "335 Smith Street, Chinatown",
    lat: 1.2822,
    lng: 103.8432,
    region: "Central",
    tag: "Michelin Alert",
    hours: "6am–11pm daily",
    imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
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
    slug: "newton-food-centre",
    name: "Newton Food Centre",
    address: "500 Clemenceau Avenue North, Newton",
    lat: 1.3123,
    lng: 103.8380,
    region: "Central",
    tag: "Tourist Must-Visit",
    hours: "12pm–2am daily",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
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
    slug: "tekka-centre",
    name: "Tekka Centre",
    address: "665 Buffalo Road, Little India",
    lat: 1.3066,
    lng: 103.8518,
    region: "Central",
    tag: "Halal Haven",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    description:
      "The heart of Little India — a vibrant wet market and food centre packed with authentic Indian, Malay and Muslim food.",
    mustTry: ["Roti Prata", "Biryani", "Fish Head Curry", "Teh Tarik", "Vadai"],
    famousFor:
      "Best roti prata and biryani in Singapore. Completely halal food centre beloved by locals.",
    michelinNote:
      "Several stalls recommended in the Michelin Guide Singapore for authentic Indian cuisine",
    vibes: ["Muslim-friendly", "Indian food lovers", "Cultural experience", "Breakfast crowd"],
    nearestMRT: "Little India (NE/DT Line) — 5 min walk",
    tipForVisitors:
      "Perfect for Muslim visitors — everything is halal. Best visited Sunday mornings when Little India is most vibrant. Try the roti prata with curry for breakfast.",
    halal: true,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 7,
    slug: "adam-road-food-centre",
    name: "Adam Road Food Centre",
    address: "2 Adam Road, Bukit Timah",
    lat: 1.3264,
    lng: 103.8081,
    region: "Central",
    tag: "Supper Spot",
    hours: "7am–late night",
    imageUrl: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=80",
    description:
      "A beloved neighbourhood hawker centre known for its famous nasi lemak and late night crowd. A local institution.",
    mustTry: ["Adam Road Nasi Lemak", "Roti John", "Mee Rebus", "Teh Tarik"],
    famousFor:
      "Adam Road Nasi Lemak — consistently voted one of Singapore's best nasi lemak for decades",
    michelinNote:
      "Adam Road Nasi Lemak stall has received Michelin Bib Gourmand recognition",
    vibes: ["Late night supper", "Malay food lovers", "Halal options", "Expat neighbourhood"],
    nearestMRT: "Botanic Gardens (CC/DT Line) — 10 min walk",
    tipForVisitors:
      "The nasi lemak stall has long queues — come before 9am or after 8pm. Great spot for late night supper after exploring the Botanic Gardens.",
    halal: true,
    openLate: true,
    budgetPerPax: "$4–$8",
  },
  {
    id: 8,
    slug: "bedok-interchange-hawker-centre",
    name: "Bedok Interchange Hawker Centre",
    address: "208 New Upper Changi Road, Bedok",
    lat: 1.3243,
    lng: 103.9301,
    region: "East",
    tag: "Local Favourite",
    hours: "6am–11pm daily",
    imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
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
    slug: "bedok-85-fengshan-market",
    name: "Bedok 85 Fengshan Market",
    address: "85 Bedok North Street 4, Bedok",
    lat: 1.3261,
    lng: 103.9295,
    region: "East",
    tag: "Supper Spot",
    hours: "24 hours (most stalls till late)",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
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
    slug: "tampines-round-market",
    name: "Tampines Round Market",
    address: "137 Tampines Street 11, Tampines",
    lat: 1.3530,
    lng: 103.9446,
    region: "East",
    tag: "Budget Eats",
    hours: "6am–11pm daily",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
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
    slug: "geylang-serai-market",
    name: "Geylang Serai Market",
    address: "1 Geylang Serai, Geylang",
    lat: 1.3143,
    lng: 103.8990,
    region: "East",
    tag: "Halal Haven",
    hours: "6am–10pm (24hrs during Ramadan)",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    description:
      "The cultural heart of Malay Singapore. A vibrant wet market and food centre that comes alive especially during Ramadan.",
    mustTry: ["Nasi Padang", "Murtabak", "Kueh Pie Tee", "Bandung", "Putu Piring"],
    famousFor:
      "Best Malay and Muslim food in Singapore. During Ramadan the bazaar outside is unmissable.",
    michelinNote:
      "Featured in Michelin Guide as essential Singapore food culture experience",
    vibes: ["Muslim-friendly", "Malay culture", "Ramadan bazaar", "Cultural immersion"],
    nearestMRT: "Aljunied (EW Line) — 10 min walk",
    tipForVisitors:
      "Completely halal. Visit during Ramadan evenings for the incredible bazaar outside. Try the putu piring — traditional Malay steamed rice cakes.",
    halal: true,
    openLate: true,
    budgetPerPax: "$4–$9",
  },
  {
    id: 12,
    slug: "amoy-street-food-centre",
    name: "Amoy Street Food Centre",
    address: "7 Maxwell Road, Tanjong Pagar",
    lat: 1.2799,
    lng: 103.8463,
    region: "Central",
    tag: "Office Favourite",
    hours: "7am–3pm (breakfast and lunch only)",
    imageUrl: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=800&q=80",
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
    slug: "tiong-bahru-market",
    name: "Tiong Bahru Market",
    address: "30 Seng Poh Road, Tiong Bahru",
    lat: 1.2865,
    lng: 103.8268,
    region: "Central",
    tag: "Hipster Favourite",
    hours: "6am–9pm daily",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:
      "In Singapore's trendiest neighbourhood — a gorgeous Art Deco market building with heritage hawker stalls downstairs and a wet market above.",
    mustTry: ["Tiong Bahru Chwee Kueh", "Lor Mee", "Bao Today", "Tiong Bahru Bakery"],
    famousFor:
      "Chwee Kueh — the definitive version of this traditional dish. Also great for post-brunch hawker food after exploring Tiong Bahru.",
    michelinNote:
      "Tiong Bahru Chwee Kueh has received Michelin Bib Gourmand recognition",
    vibes: ["Hipsters", "Expats", "Families", "Weekend brunch", "Instagram-worthy"],
    nearestMRT: "Tiong Bahru (EW Line) — 10 min walk",
    tipForVisitors:
      "Pair with a walk around the Tiong Bahru art deco estate and indie cafes. Best on weekend mornings when the neighbourhood comes alive.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 14,
    slug: "abc-brickworks-market",
    name: "ABC Brickworks Market",
    address: "6 Jalan Bukit Merah, Bukit Merah",
    lat: 1.2896,
    lng: 103.8200,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    description:
      "A hidden gem loved by locals — away from the tourist trail but packed with excellent food at very reasonable prices.",
    mustTry: ["Satay", "BBQ Chicken Wings", "Carrot Cake", "Popiah"],
    famousFor:
      "One of the best satay stalls in Singapore — locals drive across the island just for this.",
    michelinNote: "",
    vibes: ["Off the beaten path", "Local families", "Authentic experience", "Budget dining"],
    nearestMRT: "Redhill (EW Line) — 10 min walk",
    tipForVisitors:
      "Worth the trek away from the tourist areas. This is where locals actually eat. Very affordable and no tourists.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 15,
    slug: "buona-vista-market",
    name: "Buona Vista Market",
    address: "43 Holland Drive, Holland Village",
    lat: 1.3071,
    lng: 103.7900,
    region: "West",
    tag: "Budget Eats",
    hours: "6am–9pm daily",
    imageUrl: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=800&q=80",
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
    slug: "clementi-448-market",
    name: "Clementi 448 Market",
    address: "448 Clementi Avenue 3, Clementi",
    lat: 1.3138,
    lng: 103.7641,
    region: "West",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
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
    slug: "jurong-west-505-market",
    name: "Jurong West 505 Market",
    address: "505 Jurong West Street 52, Jurong West",
    lat: 1.3496,
    lng: 103.7028,
    region: "West",
    tag: "Budget Eats",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:
      "A large neighbourhood hawker centre serving the Jurong West community with a wide variety of affordable food options.",
    mustTry: ["Bak Chor Mee", "Chicken Rice", "Nasi Lemak", "Teh Tarik"],
    famousFor:
      "One of the largest and most complete hawker centres in West Singapore.",
    michelinNote: "",
    vibes: ["West Singapore locals", "Budget dining", "Families", "Industrial workers"],
    nearestMRT: "Jurong West (EW Line) — 15 min walk",
    tipForVisitors:
      "Good stop if exploring Jurong area including Jurong Lake Gardens or the Science Centre.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
  },
  {
    id: 18,
    slug: "yishun-park-hawker-centre",
    name: "Yishun Park Hawker Centre",
    address: "51 Yishun Avenue 11, Yishun",
    lat: 1.4291,
    lng: 103.8354,
    region: "North",
    tag: "Local Favourite",
    hours: "7am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
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
    slug: "sembawang-hills-food-centre",
    name: "Sembawang Hills Food Centre",
    address: "590 Upper Thomson Road, Sembawang",
    lat: 1.3666,
    lng: 103.8280,
    region: "North",
    tag: "Supper Spot",
    hours: "6am–late night",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    description:
      "A beloved neighbourhood food centre along Upper Thomson Road — famous for its late night supper crowd and excellent local food.",
    mustTry: ["Bak Kut Teh", "Carrot Cake", "Prawn Noodles", "Durian (seasonal)"],
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
    slug: "chong-pang-market",
    name: "Chong Pang Market",
    address: "105 Yishun Ring Road, Yishun",
    lat: 1.4290,
    lng: 103.8337,
    region: "North",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    description:
      "A large and popular market in Yishun serving the northern heartland community with a huge variety of food.",
    mustTry: ["Carrot Cake", "Char Kway Teow", "Mee Goreng", "Fresh Juice"],
    famousFor:
      "One of the most complete hawker centres in the North — everything you need under one roof.",
    michelinNote: "",
    vibes: ["North Singapore locals", "Yishun residents", "Families", "Weekend market"],
    nearestMRT: "Yishun (NS Line) — 10 min walk",
    tipForVisitors:
      "Large wet market upstairs is great for fresh produce. Food centre downstairs has a huge variety.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
  },
  {
    id: 21,
    slug: "woodlands-centre-market",
    name: "Woodlands Centre Market",
    address: "Blk 6A Woodlands Centre Road, Woodlands",
    lat: 1.4368,
    lng: 103.7862,
    region: "North",
    tag: "Budget Eats",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=800&q=80",
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
    slug: "toa-payoh-lorong-8-market",
    name: "Toa Payoh Lorong 8 Market",
    address: "Blk 210 Lorong 8 Toa Payoh, Toa Payoh",
    lat: 1.3340,
    lng: 103.8489,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    description:
      "A classic HDB heartland hawker centre in Toa Payoh — one of Singapore's oldest public housing estates with strong food heritage.",
    mustTry: ["Toa Payoh Lor Mee", "Wanton Mee", "Chicken Rice", "Soon Kueh"],
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
  {
    id: 23,
    slug: "golden-shoe-market-street",
    name: "Golden Shoe (Market Street Hawker Centre)",
    address: "161 Market Street, CBD",
    lat: 1.2839,
    lng: 103.8504,
    region: "Central",
    tag: "Office Favourite",
    hours: "Weekdays 7am–3pm",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    description:
      "A compact CBD hawker centre tucked under Market Street — a weekday lifesaver for office workers hunting chicken rice, wonton mee, and bak chor mee without leaving the district.",
    mustTry: ["Chicken Rice", "Wonton Mee", "Bak Chor Mee"],
    famousFor:
      "The CBD lunch crowd — quick, affordable heritage plates between meetings in the heart of the financial district.",
    michelinNote: "",
    vibes: ["Office workers", "Weekday lunch", "CBD", "Quick meals"],
    nearestMRT: "Raffles Place (EW/NS Line) — 3 min walk",
    tipForVisitors:
      "Arrive before noon; many stalls wind down by mid-afternoon on weekdays. Closed or quiet on weekends.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 24,
    slug: "hong-lim-market-food-centre",
    name: "Hong Lim Market & Food Centre",
    address: "531A Upper Cross Street, Chinatown",
    lat: 1.2816,
    lng: 103.8448,
    region: "Central",
    tag: "Michelin Alert",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1555126634-323283e09fa9?w=800&q=80",
    description:
      "A Chinatown institution stacked with legendary stalls, including Michelin Bib Gourmand favourite Outram Park Fried Kway Teow Mee.",
    mustTry: [
      "Outram Park Fried Kway Teow Mee",
      "Carrot Cake",
      "Hakka Thunder Tea Rice",
    ],
    famousFor:
      "Home of Outram Park Fried Kway Teow Mee — smoky plates that draw queues from across the island.",
    michelinNote:
      "Outram Park Fried Kway Teow Mee holds Michelin Bib Gourmand recognition",
    vibes: ["Foodies", "Chinatown", "Michelin hunters", "Lunch queues"],
    nearestMRT: "Chinatown (NE/DT Line) — 5 min walk",
    tipForVisitors:
      "Come early for fried kway teow; stalls can sell out. Explore the upper floors for lesser-known gems.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 25,
    slug: "peoples-park-food-centre",
    name: "People's Park Food Centre",
    address: "32 New Market Road, Chinatown",
    lat: 1.2837,
    lng: 103.8430,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    description:
      "A bustling Chinatown complex where Teochew and Cantonese hawker classics rule — hearty soups, noodles, and claypot comfort.",
    mustTry: ["Bak Kut Teh", "Yong Tau Foo", "Wonton Noodles"],
    famousFor:
      "Authentic Teochew and Cantonese hawker food steps from New Bridge Road and the heart of Chinatown.",
    michelinNote: "",
    vibes: ["Chinatown locals", "Families", "Heritage flavours", "Budget dining"],
    nearestMRT: "Chinatown (NE/DT Line) — 3 min walk",
    tipForVisitors:
      "Pair with a wander through People's Park Complex — wet market upstairs, food hall below.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 26,
    slug: "east-coast-lagoon-food-village",
    name: "East Coast Lagoon Food Village",
    address: "1220 East Coast Pkwy, East Coast",
    lat: 1.3006,
    lng: 103.9116,
    region: "East",
    tag: "Supper Spot",
    hours: "12pm–late night daily",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:
      "Open-air seaside hawker village — satay smoke, chilli crab, sambal stingray, and BBQ wings with the sea steps away.",
    mustTry: [
      "Satay",
      "Chilli Crab",
      "Sambal Stingray",
      "BBQ Chicken Wings",
    ],
    famousFor:
      "Open-air seaside satay and seafood — a classic East Coast supper under the stars.",
    michelinNote:
      "Featured in Michelin Guide as a recommended Singapore experience",
    vibes: ["Sea breeze", "Supper crew", "Families", "Weekend nights"],
    nearestMRT: "Bedok (EW Line) — then Grab",
    tipForVisitors:
      "Train to Bedok and Grab in for convenience. Bring mosquito repellent after dark by the coast.",
    halal: false,
    openLate: true,
    budgetPerPax: "$12–$25",
  },
  {
    id: 27,
    slug: "marine-parade-food-centre",
    name: "Marine Parade Food Centre",
    address: "76 Marine Parade Central, Marine Parade",
    lat: 1.3021,
    lng: 103.9050,
    region: "East",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    description:
      "Neighbourhood Katong hawker centre — laksa, rojak, and satay bee hoon for east-side families.",
    mustTry: ["Katong Laksa", "Rojak", "Satay Bee Hoon"],
    famousFor:
      "The neighbourhood Katong centre — heritage flavours a short walk from Marine Parade.",
    michelinNote: "",
    vibes: ["East Coast locals", "Families", "Katong", "Breakfast"],
    nearestMRT: "Marine Parade (TE Line) — 5 min walk",
    tipForVisitors:
      "Combine with a walk toward Katong shophouses — perfect east-side food crawl.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 28,
    slug: "jalan-berseh-food-centre",
    name: "Jalan Berseh Food Centre",
    address: "166 Jalan Besar, Jalan Besar",
    lat: 1.3065,
    lng: 103.8573,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
    description:
      "A Jalan Besar-area favourite anchored by charcoal-fired Sungei Road Laksa bowls for under a few dollars.",
    mustTry: ["Sungei Road Laksa", "Curry Noodles", "Oyster Cake"],
    famousFor:
      "Sungei Road Laksa — charcoal-tinged gravy and bee hoon in a bowl locals defend fiercely.",
    michelinNote: "Sungei Road Laksa recognised by Michelin Guide",
    vibes: ["Jalan Besar", "Foodies", "Laksa lovers", "Budget eats"],
    nearestMRT: "Jalan Besar (DT Line) — 5 min walk",
    tipForVisitors:
      "Go early — laksa queues build fast. Explore nearby Little India after.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$6",
  },
  {
    id: 29,
    slug: "ghim-moh-market-food-centre",
    name: "Ghim Moh Market & Food Centre",
    address: "20 Ghim Moh Road, Ghim Moh",
    lat: 1.3101,
    lng: 103.7888,
    region: "West",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    description:
      "West-side institution home to Michelin Bib Gourmand chwee kueh, plus laksa and wonton noodles.",
    mustTry: ["Ghim Moh Chwee Kueh", "Laksa", "Wonton Noodles"],
    famousFor:
      "Ghim Moh Chwee Kueh — silky rice cakes with generous chai poh topping.",
    michelinNote:
      "Ghim Moh Chwee Kueh holds Michelin Bib Gourmand recognition",
    vibes: ["Westies", "Breakfast", "Families", "Hawker heritage"],
    nearestMRT: "Buona Vista (EW/CC Line) — 10 min walk",
    tipForVisitors:
      "Morning is busiest for chwee kueh and market shopping — come before 9am on weekends.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
  },
  {
    id: 30,
    slug: "alexandra-village-food-centre",
    name: "Alexandra Village Food Centre",
    address: "120 Bukit Merah Lane 1, Alexandra",
    lat: 1.2891,
    lng: 103.8128,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–11pm daily",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    description:
      "A well-loved Alexandra-Bukit Merah hub stacking heritage stalls from Hock Lam beef noodles to cult-status wings.",
    mustTry: ["Hock Lam Beef Noodles", "BBQ Chicken Wings", "Char Kway Teow"],
    famousFor:
      "Multiple heritage favourites under one roof — a foodie's Alexandra pilgrimage.",
    michelinNote: "",
    vibes: ["Alexandra", "Local foodies", "Dinner", "Families"],
    nearestMRT: "Queenstown (EW Line) — 10 min walk",
    tipForVisitors:
      "Arrive hungry and share plates — portions are generous and queues move in waves.",
    halal: false,
    openLate: false,
    budgetPerPax: "$4–$8",
  },
  {
    id: 31,
    slug: "bishan-street-13-food-centre",
    name: "Bishan Street 13 Food Centre",
    address: "Blk 510 Bishan Street 13, Bishan",
    lat: 1.3509,
    lng: 103.8490,
    region: "Central",
    tag: "Local Favourite",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=800&q=80",
    description:
      "A popular heartland centre where families queue for prata, chicken rice, and bak chor mee before school and work.",
    mustTry: ["Roti Prata", "Chicken Rice", "Bak Chor Mee"],
    famousFor:
      "Heartland breakfast and dinner — a true Bishan neighbourhood canteen.",
    michelinNote: "",
    vibes: ["Bishan", "Families", "Breakfast", "Heartland"],
    nearestMRT: "Bishan (NS/CC Line) — 8 min walk",
    tipForVisitors:
      "Weekend mornings see the longest prata lines — patience pays off.",
    halal: false,
    openLate: false,
    budgetPerPax: "$3–$7",
  },
  {
    id: 32,
    slug: "pasir-panjang-food-centre",
    name: "Pasir Panjang Food Centre",
    address: "121 Pasir Panjang Road, Pasir Panjang",
    lat: 1.2763,
    lng: 103.7921,
    region: "West",
    tag: "Hidden Gem",
    hours: "6am–10pm daily",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    description:
      "A quiet underrated hawker centre near the Southern Ridges — zi char and stir-fry favourites without the city buzz.",
    mustTry: ["Zi Char", "Sambal Sotong", "Prawn Paste Chicken"],
    famousFor:
      "Quiet centre near the Southern Ridges — underrated zi char and wok favourites.",
    michelinNote: "",
    vibes: ["West Coast", "Zi char", "Quiet eats", "Hikers"],
    nearestMRT: "Pasir Panjang (CC Line) — 8 min walk",
    tipForVisitors:
      "Pair with Kent Ridge or Southern Ridges — reward yourself with a communal zi char feast.",
    halal: false,
    openLate: false,
    budgetPerPax: "$5–$12",
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

/** Resolve a featured hawker by URL slug (`/hawker/maxwell-food-centre`). */
export function getFeaturedHawkerBySlug(raw: string): FeaturedHawker | null {
  const s = raw.trim().toLowerCase();
  if (!s) return null;
  return FEATURED_HAWKERS.find((h) => h.slug === s) ?? null;
}

/** @deprecated Prefer {@link getFeaturedHawkerBySlug}. Numeric id lookup for legacy links. */
export function getFeaturedHawkerById(raw: string): FeaturedHawker | null {
  const trimmed = raw.trim();
  const n = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(n) || String(n) !== trimmed) return null;
  return FEATURED_HAWKERS.find((h) => h.id === n) ?? null;
}
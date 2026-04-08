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
  story?: string;
  vibeCheck?: string;
  localQuote?: string;
  timeline?: { year: string; event: string }[];
  legendaryStalls?: { name: string; dish: string; story: string }[];
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
    imageUrl: "/images/hawkers/maxwell.jpg",
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
    story:
      "Maxwell Food Centre has been feeding Singapore since 1986, built on the site of the old Maxwell Market which dates back to the 1930s. It sits at the crossroads of Chinatown and Tanjong Pagar — two of Singapore's oldest and most storied neighbourhoods. When Anthony Bourdain filmed here for No Reservations in 2009, queueing at Tian Tian like everyone else, it confirmed what locals already knew: this is where Singapore's hawker soul lives. The centre survived urban redevelopment, a pandemic, and decades of food trend cycles without losing its character. It remains the most visited hawker centre in Singapore for good reason.",
    vibeCheck: "Where tourists discover what locals already knew",
    localQuote:
      "The chicken rice here is in a league of its own. There is simply nothing else like it in Singapore.",
    timeline: [
      {
        year: "1930s",
        event:
          "Maxwell Market established on this site during British colonial era",
      },
      {
        year: "1986",
        event: "Maxwell Food Centre opens in its current form after redevelopment",
      },
      {
        year: "2009",
        event:
          "Anthony Bourdain visits Tian Tian, cementing Maxwell's global reputation",
      },
      {
        year: "2016",
        event: "Tian Tian receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "UNESCO inscribes Singapore hawker culture — Maxwell named as exemplary centre",
      },
    ],
    legendaryStalls: [
      {
        name: "Tian Tian Hainanese Chicken Rice",
        dish: "Chicken Rice",
        story:
          "Madam Foo Kui Lian started this stall in 1987. The queue forms before the stall opens. Bourdain called it one of the best things he ever ate. The broth-soaked rice is judged before you even touch the chicken.",
      },
      {
        name: "Maxwell Fuzhou Oyster Cake",
        dish: "Oyster Cake",
        story:
          "A rare Fuzhou specialty — crispy batter shell filled with oysters, pork, and peanuts. One of the last stalls in Singapore keeping this dying recipe alive.",
      },
      {
        name: "Zhen Zhen Porridge",
        dish: "Cantonese Porridge",
        story:
          "Opens at 6am and sells out by 11am. Three generations of the same family. The fish porridge is silky, precise, and unchanged since the stall opened.",
      },
    ],
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
    imageUrl: "/images/hawkers/lau-pa-sat.jpg",
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
    story:
      "Lau Pa Sat — literally 'old market' in Hokkien — is one of Singapore's most architecturally significant buildings. Designed by George Coleman and cast in Glasgow in 1894, the Victorian wrought-iron structure was shipped to Singapore piece by piece. It survived Japanese occupation, served as a market for over a century, and was gazetted as a national monument in 1973. Today it houses hawker stalls by day and transforms into Singapore's most atmospheric supper spot by night when Boon Tat Street closes to traffic and satay smoke fills the colonial arches.",
    vibeCheck:
      "A colonial monument that smells like satay smoke and tastes like Singapore history",
    localQuote:
      "After work, the satay stalls come alive. Cold beer, charcoal smoke, and the whole city humming around you — this is Singapore at its best.",
    timeline: [
      {
        year: "1894",
        event:
          "Cast-iron structure assembled from parts shipped from Glasgow, Scotland",
      },
      {
        year: "1973",
        event:
          "Gazetted as a national monument — one of Singapore's first",
      },
      {
        year: "1985",
        event:
          "Restored and reopened as a hawker centre after years of conservation work",
      },
      {
        year: "2000s",
        event:
          "Boon Tat Street satay tradition established — becomes iconic evening ritual",
      },
      {
        year: "2016",
        event:
          "Featured in Michelin Guide Singapore as essential hawker experience",
      },
    ],
    legendaryStalls: [
      {
        name: "Boon Tat Street Satay",
        dish: "Charcoal Satay",
        story:
          "Every evening at 7pm, the road closes and over 20 satay stalls set up under the stars. The charcoal smoke, the peanut sauce, the cold beer — it's the most cinematic meal in Singapore.",
      },
      {
        name: "Lau Pa Sat Rojak",
        dish: "Rojak",
        story:
          "One of the few remaining stalls serving traditional rojak with hand-cut fruit. The shrimp paste dressing is made fresh daily from a recipe that hasn't changed in decades.",
      },
      {
        name: "Carrot Cake Station",
        dish: "Carrot Cake",
        story:
          "Both black and white versions done properly — the white version is rarer and harder to find elsewhere. The hawker fries each portion individually to order.",
      },
    ],
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
    imageUrl: "/images/hawkers/old-airport-road.jpg",
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
    story:
      "Built in 1973 on the site of Singapore's first civilian airport, Old Airport Road Food Centre carries history in its very address. The Kallang Airport opened in 1937 and was the pride of British colonial Singapore — by 1973 it had been replaced by Paya Lebar Airport and the old terminal demolished. The hawker centre that rose in its place became legendary for different reasons: over 150 stalls, multiple Michelin-recognised hawkers, and a reputation among serious food people as the single best hawker centre in Singapore. It is never the most famous but consistently the most respected.",
    vibeCheck:
      "The hawker centre that serious food people call their favourite",
    localQuote:
      "Everything here is good. You genuinely cannot make a bad choice — just follow the queues.",
    timeline: [
      {
        year: "1937",
        event:
          "Kallang Airport opens — Singapore's first civilian airport on this site",
      },
      {
        year: "1955",
        event:
          "Paya Lebar Airport replaces Kallang — the old terminal begins closure",
      },
      {
        year: "1973",
        event: "Old Airport Road Food Centre opens on the former airport grounds",
      },
      {
        year: "2000s",
        event:
          "Multiple stalls receive Michelin recognition — centre's reputation peaks",
      },
      {
        year: "2016",
        event:
          "Regarded by food critics as Singapore's finest all-round hawker centre",
      },
    ],
    legendaryStalls: [
      {
        name: "Outram Park Fried Kway Teow Mee",
        dish: "Char Kway Teow",
        story:
          "Michelin Bib Gourmand. The uncle fries one or two portions at a time, refuses to compromise on wok hei. Queues begin before the stall opens.",
      },
      {
        name: "Toa Payoh Lor Mee",
        dish: "Lor Mee",
        story:
          "Thick starchy gravy, braised pork, fish cake and vinegar. One of the most underrated dishes in Singapore done at its absolute best.",
      },
      {
        name: "Hua Kee Chicken Wings",
        dish: "BBQ Chicken Wings",
        story:
          "Marinated overnight and grilled to order. The skin is lacquered, the meat stays juicy. Locals drive from across the island specifically for these.",
      },
    ],
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
    imageUrl: "/images/hawkers/chinatown-complex.jpg",
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
    story:
      "Singapore's largest hawker centre with over 260 stalls, the Chinatown Complex is a living document of Chinese immigrant food culture. Built in 1983 as part of the HDB Chinatown redevelopment, it replaced the street hawkers who had fed the area's Hokkien, Cantonese and Teochew communities for generations. In 2016, Chan Hon Meng's humble soya sauce chicken stall became the first street food in the world to receive a Michelin Star — making a $2 plate of chicken rice the cheapest Michelin meal on Earth. The queue that formed the next day stretched around the block and has barely shortened since.",
    vibeCheck:
      "Where a $2 plate of chicken became the world's most famous Michelin meal",
    localQuote:
      "A Michelin star for two dollars. Only in Singapore could this be possible.",
    timeline: [
      {
        year: "1983",
        event:
          "Chinatown Complex Food Centre opens as part of major HDB redevelopment",
      },
      {
        year: "2000s",
        event:
          "Chan Hon Meng perfects his soya sauce chicken recipe after 30 years of cooking",
      },
      {
        year: "2016",
        event:
          "Chan Hon Meng receives a Michelin Star — world's first and cheapest starred hawker",
      },
      {
        year: "2017",
        event:
          "Queue for Hawker Chan exceeds 2 hours daily as global media coverage explodes",
      },
      {
        year: "2020",
        event:
          "Named in UNESCO inscription of Singapore hawker culture as exemplary centre",
      },
    ],
    legendaryStalls: [
      {
        name: "Chan Hon Meng Soya Sauce Chicken",
        dish: "Soya Sauce Chicken Rice",
        story:
          "The world's first Michelin-starred hawker stall. Chan Hon Meng spent 30 years perfecting his recipe. A plate costs $2. The queue can reach 2 hours. Every minute is worth it.",
      },
      {
        name: "Liao Fan Hong Kong Soya Sauce Chicken Rice",
        dish: "Soya Sauce Chicken Noodles",
        story:
          "The original outlet that made history. The dark, aromatic soya broth is slow-cooked and the chicken is silky smooth. Order noodles instead of rice to try a different dimension.",
      },
      {
        name: "168 CMY Satay",
        dish: "Pork and Chicken Satay",
        story:
          "Cooked to order over charcoal, minimum 10 skewers. The pork satay is tender and sweet — the kind locals will queue for on a Friday afternoon.",
      },
    ],
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
    imageUrl: "/images/hawkers/newton.jpg",
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
    story:
      "Newton Food Centre opened in 1971 and quickly became the most internationally recognisable hawker centre in Singapore — not because of the food, but because of the movies. Featured in Crazy Rich Asians, countless travel documentaries, and every 'best of Singapore' list written in the last three decades, Newton operates in two realities: the tourist destination and the actual local supper spot. Skip the stalls with aggressive touts and find the quieter ones serving excellent BBQ seafood, oyster omelette, and satay to the after-work crowd who've been coming here for decades.",
    vibeCheck: "Famous enough to be in the movies, real enough to still matter",
    localQuote:
      "The BBQ seafood is worth every cent, tourist prices and all. Some things are simply worth it.",
    timeline: [
      {
        year: "1971",
        event:
          "Newton Food Centre established as one of Singapore's first organised hawker centres",
      },
      {
        year: "1990s",
        event:
          "Featured in early Singapore tourism campaigns — international profile begins",
      },
      {
        year: "2000s",
        event:
          "Becomes the go-to recommendation in every Singapore travel guide published",
      },
      {
        year: "2018",
        event:
          "Featured prominently in Crazy Rich Asians — global recognition peaks",
      },
      {
        year: "2020",
        event:
          "Continues as Singapore's most visited hawker centre by international tourists",
      },
    ],
    legendaryStalls: [
      {
        name: "Alliance Seafood",
        dish: "Chilli Crab",
        story:
          "One of the most consistent chilli crab stalls in Singapore at hawker prices. The sauce is rich, the crab is fresh, and the mantou is always perfectly fried.",
      },
      {
        name: "Hup Kee Oyster Omelette",
        dish: "Oyster Omelette",
        story:
          "Crispy on the edges, eggy in the middle, generously loaded with fresh oysters. A dish that separates the great hawker stalls from the average ones.",
      },
      {
        name: "Newton Satay Club",
        dish: "Charcoal Satay",
        story:
          "The collective of satay stalls that made Newton famous before the movies did. Beef, chicken, mutton — all marinated overnight and grilled over real charcoal.",
      },
    ],
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
    imageUrl: "/images/hawkers/tekka.jpg",
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
    story:
      "Tekka Centre sits in the heart of Little India, the neighbourhood that has been home to Singapore's South Indian community since the 1820s. The building — a sprawling complex of wet market, hawker food, and retail — is the cultural anchor of the area. The food here reflects generations of Tamil, Malayalee, and North Indian communities who came to Singapore as labourers and traders and stayed to build one of the city's most vibrant enclaves. Everything is halal. The roti prata here is judged differently — not by tourist standards but by the Indian uncles who eat it every morning before work.",
    vibeCheck: "The most authentically South Asian 10 square metres in Southeast Asia",
    localQuote:
      "The roti prata here is judged by the Indian community who eat it every morning. That is the only review that matters.",
    timeline: [
      {
        year: "1820s",
        event:
          "Little India established as Singapore's South Indian community enclave",
      },
      {
        year: "1915",
        event:
          "Buffalo Road wet market established — predecessor to Tekka Centre",
      },
      {
        year: "1982",
        event:
          "Current Tekka Centre complex opens, anchoring the Little India precinct",
      },
      {
        year: "2000s",
        event:
          "Allauddin's Briyani achieves Michelin recognition — confirms Tekka's food credentials",
      },
      {
        year: "2019",
        event:
          "Little India gazetted as historic district — Tekka named as cultural landmark",
      },
    ],
    legendaryStalls: [
      {
        name: "Allauddin's Briyani",
        dish: "Chicken Briyani",
        story:
          "Michelin Bib Gourmand. The biryani pots are filled fresh each morning. The rice is fragrant with whole spices, the chicken falls off the bone. Queues form before opening.",
      },
      {
        name: "Raj's Banana Leaf",
        dish: "Fish Head Curry",
        story:
          "Served on a banana leaf the size of a dinner plate. The curry is coconut-rich and fiery, the fish head is fresh. A sensory experience that Little India does better than anywhere.",
      },
      {
        name: "Konar Mess Prata",
        dish: "Roti Prata",
        story:
          "Prata that's judged by the Indian community, not tourists. Paper-thin, lacey at the edges, with a curry that's been simmering since 5am. The benchmark for Singapore prata.",
      },
    ],
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
    imageUrl: "/images/hawkers/adam-road.webp",
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
    story:
      "Adam Road Food Centre is the kind of place that doesn't try to be famous and is famous anyway. Tucked between the Botanic Gardens and the expatriate enclave of Bukit Timah, it serves one of Singapore's most mixed communities — Malay families, expats, students from the nearby universities, and late-night supper hunters from across the island. The nasi lemak stall that operates from the early hours has been a Michelin Bib Gourmand recipient and a weekend queue institution. The centre's late-night atmosphere — warm, buzzing, cross-cultural — captures something essential about Singapore's food culture.",
    vibeCheck: "The supper spot that belongs to everyone and is owned by no one",
    localQuote:
      "The nasi lemak queue starts forming before most people have woken up. It tells you everything you need to know.",
    timeline: [
      {
        year: "1960s",
        event:
          "Hawker stalls begin operating along Adam Road serving the local community",
      },
      {
        year: "1975",
        event:
          "Formal hawker centre established to organise the growing number of stalls",
      },
      {
        year: "1980s",
        event:
          "Nasi lemak stall establishes itself as the centre's signature — queues begin",
      },
      {
        year: "2016",
        event:
          "Adam Road Nasi Lemak receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "Remains one of Singapore's best late-night supper destinations",
      },
    ],
    legendaryStalls: [
      {
        name: "Adam Road Nasi Lemak",
        dish: "Nasi Lemak",
        story:
          "Michelin Bib Gourmand. The coconut rice is cooked in pandan and served with sambal, ikan bilis, egg, and cucumber. Opens at 7am and the queue begins immediately.",
      },
      {
        name: "Nasi Padang Minang",
        dish: "Nasi Padang",
        story:
          "Indonesian-Malay rice with a spread of curries and sides. The rendang is slow-cooked and the curries are freshly made each morning. A proper Padang spread rarely found this good.",
      },
      {
        name: "Roti John Station",
        dish: "Roti John",
        story:
          "A Malay-Singapore original — minced meat and egg fried into a French loaf. Best eaten fresh off the griddle with sambal and mayonnaise at midnight.",
      },
    ],
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
    imageUrl: "/images/hawkers/bedok-interchange.jpg",
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
    story:
      "Bedok Interchange Hawker Centre sits directly above Bedok MRT station, making it the most conveniently located hawker centre in Singapore's East. Bedok is one of Singapore's most densely populated towns and one of its oldest — the community that has lived here for generations has very strong opinions about where to eat. The chwee kueh stall here is Michelin recognised and has been serving the same recipe since the centre opened. The centre's position at the interchange means it serves a cross-section of all of East Singapore — from school children to retirees — every single day.",
    vibeCheck: "East Singapore's living room — everyone passes through eventually",
    localQuote:
      "Chwee kueh for breakfast every morning and you would never tire of it. That is how good it is.",
    timeline: [
      {
        year: "1980s",
        event:
          "Bedok MRT station opens — hawker centre established as part of the interchange",
      },
      {
        year: "1990s",
        event:
          "Chwee kueh stall becomes the centre's signature — daily queues established",
      },
      {
        year: "2016",
        event:
          "Bedok Chwee Kueh receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "Centre expands — remains the primary food hub for Bedok's 200,000 residents",
      },
    ],
    legendaryStalls: [
      {
        name: "Bedok Chwee Kueh",
        dish: "Chwee Kueh",
        story:
          "Michelin Bib Gourmand. Steamed rice cakes topped with preserved radish and chilli. The texture is silky and the topping is salty-sweet. A uniquely Singaporean breakfast that most visitors never discover.",
      },
      {
        name: "Bedok Interchange Mutton Soup",
        dish: "Mutton Soup",
        story:
          "Clear, deeply savoury broth with tender mutton pieces and a squeeze of lime. A hangover cure and a comfort food that East-siders have been drinking for decades.",
      },
      {
        name: "Famous Sungei Road Trishaw Laksa",
        dish: "Laksa",
        story:
          "A branch of one of Singapore's most legendary laksa brands. The coconut broth is thick and spiced, the noodles are pre-cut. Authentic Katong-style laksa at interchange prices.",
      },
    ],
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
    imageUrl: "/images/hawkers/bedok-85.jpg",
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
    story:
      "Bedok 85 — known to everyone in East Singapore simply as '85' — is the definitive Singapore supper centre. What started as a neighbourhood market has become a midnight pilgrimage site. The BBQ chicken wings stall has queues that stretch around the block every night from 10pm onwards. The centre operates on a different clock to the rest of Singapore: quiet in the afternoon, buzzing by 9pm, packed past midnight. It represents a side of Singapore food culture that tourists rarely see — the late-night, beer-in-hand, sharing-plates supper culture that locals consider the best part of any night out.",
    vibeCheck: "Singapore's midnight kitchen — where the night always ends well",
    localQuote:
      "The chicken wings are worth a 45-minute queue. Every single person in that queue knows it too.",
    timeline: [
      {
        year: "1970s",
        event:
          "Fengshan Market established serving the growing Bedok North community",
      },
      {
        year: "1985",
        event:
          "Centre earns its '85' nickname from its address — becomes a local institution",
      },
      {
        year: "1990s",
        event:
          "BBQ chicken wings stall establishes the midnight queue tradition",
      },
      {
        year: "2016",
        event:
          "BBQ chicken wing stall receives Michelin Bib Gourmand recognition",
      },
      {
        year: "2020",
        event:
          "Remains Singapore's most famous supper destination among locals",
      },
    ],
    legendaryStalls: [
      {
        name: "Bedok 85 BBQ Chicken Wings",
        dish: "BBQ Chicken Wings",
        story:
          "Michelin Bib Gourmand. Marinated in a secret blend and grilled over charcoal until the skin is lacquered and slightly charred. Queue starts at 9pm. Don't come after 11pm and expect short lines.",
      },
      {
        name: "Carrot Cake Master",
        dish: "Carrot Cake",
        story:
          "Both white and black versions done with serious wok technique. The black version is stickier and sweeter from the dark sauce. A dish that tastes completely different from what the name suggests.",
      },
      {
        name: "Satay Bee Hoon 85",
        dish: "Satay Bee Hoon",
        story:
          "Thin rice noodles in a rich peanut-based gravy with satay, cockles, and vegetables. A dish unique to Singapore — comforting, peanutty, and unlike anything else.",
      },
    ],
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
    imageUrl: "/images/hawkers/tampines-round.jpg",
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
    story:
      "Tampines Round Market gets its name from its distinctive circular architecture — one of the few curved hawker centres in Singapore. Built to serve the rapidly growing Tampines New Town in the 1980s, it has been feeding generations of East-siders who grew up in the surrounding HDB blocks. The centre has no Michelin stars and no celebrity visitors. What it has is something rarer: a community of regulars who have been eating the same stalls for 30 years, and stalls that have been cooking for those same regulars just as long. It's what hawker culture actually is when nobody is watching.",
    vibeCheck: "No stars, no tourists, all heart",
    localQuote:
      "My family has been eating here since I was a child. Some places should simply never change.",
    timeline: [
      {
        year: "1980s",
        event:
          "Tampines New Town develops rapidly — Round Market built to serve new residents",
      },
      {
        year: "1990s",
        event:
          "Centre establishes its regular community — the same families eat here weekly",
      },
      {
        year: "2000s",
        event:
          "Distinctive circular architecture becomes a local landmark and informal meeting point",
      },
      {
        year: "2020",
        event:
          "Remains one of Tampines' primary community food hubs despite newer competition",
      },
    ],
    legendaryStalls: [
      {
        name: "Tampines Laksa",
        dish: "Laksa",
        story:
          "A neighbourhood laksa that locals will stack against any famous stall. The broth is rich and properly spiced. No tourists, no queue hype — just consistently excellent laksa.",
      },
      {
        name: "Ah Hock Wanton Mee",
        dish: "Wanton Mee",
        story:
          "Springy egg noodles with char siew, wanton dumplings, and a sauce that coats every strand. The kind of stall with a sign that hasn't changed since 1988.",
      },
      {
        name: "Tampines Kopi Corner",
        dish: "Kopi and Kaya Toast",
        story:
          "Old-school kopitiam coffee made with a sock filter. The kaya is house-made and slightly eggy. The kind of breakfast that makes a neighbourhood feel like home.",
      },
    ],
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
    imageUrl: "/images/hawkers/geylang-serai.jpg",
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
    story:
      "Geylang Serai is the cultural heartland of Malay Singapore. The market has stood here since the 1950s when the area was the centre of the Malay kampung community. The food tells that story directly — nasi padang, murtabak, putu piring, kueh, bandung — a full catalogue of Malay and Indonesian culinary heritage kept alive by stalls that pass recipes between generations. During Ramadan, the bazaar outside becomes one of Singapore's most spectacular food events, drawing hundreds of thousands over the fasting month. Everything sold here is halal and the welcome is universal.",
    vibeCheck: "The heartland of Malay Singapore — food as cultural memory",
    localQuote:
      "The murtabak here is the real thing — generous, fragrant, and made by people who have been perfecting it for generations.",
    timeline: [
      {
        year: "1950s",
        event:
          "Geylang Serai established as centre of Singapore's Malay kampung community",
      },
      {
        year: "1964",
        event:
          "Geylang Serai Market formalised — becomes the cultural anchor of the precinct",
      },
      {
        year: "1990s",
        event:
          "Ramadan bazaar tradition grows into Singapore's largest annual food event",
      },
      {
        year: "2011",
        event:
          "Market conserved and upgraded while preserving its Malay cultural character",
      },
      {
        year: "2020",
        event:
          "UNESCO hawker inscription specifically references Geylang Serai as exemplary",
      },
    ],
    legendaryStalls: [
      {
        name: "Hjh Maimunah",
        dish: "Nasi Padang",
        story:
          "One of Singapore's most beloved Malay restaurants with roots at Geylang Serai. The beef rendang is slow-cooked for hours and the spread of curries changes daily.",
      },
      {
        name: "Ramadan Murtabak Stalls",
        dish: "Murtabak",
        story:
          "During Ramadan, the bazaar murtabak stalls draw queues stretching the length of the market. Thick pancakes stuffed with mutton or chicken, egg, and onion — a community ritual.",
      },
      {
        name: "Putu Piring",
        dish: "Putu Piring",
        story:
          "Steamed rice cakes filled with palm sugar and dusted with coconut. Made fresh in small batches throughout the day. One of the most beautiful traditional Malay sweets still made by hand.",
      },
    ],
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
    imageUrl: "/images/hawkers/amoy-street.jpg",
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
    story:
      "Amoy Street Food Centre occupies a corner of Singapore's CBD that was once the centre of Hokkien immigrant life in the 1800s. The street's name — Amoy being the old name for Xiamen in Fujian province — marks where the first waves of Hokkien traders settled. Today the centre operates on a different rhythm to any other hawker centre in Singapore: breakfast and lunch only, closed by 3pm, and packed with bankers, lawyers, and architects who work in the surrounding towers. A Noodle Story — a modern Singapore ramen that's won Michelin recognition — is perhaps the most talked-about queue in the CBD.",
    vibeCheck: "The CBD's best-kept secret — closes before the tourists arrive",
    localQuote:
      "Come early or go hungry. The best stalls here sell out before 1pm without exception.",
    timeline: [
      {
        year: "1800s",
        event:
          "Amoy Street established as heart of Hokkien immigrant community in colonial Singapore",
      },
      {
        year: "1983",
        event:
          "Amoy Street Food Centre opens — becomes primary lunch destination for CBD workers",
      },
      {
        year: "2000s",
        event:
          "Centre evolves as CBD grows — increasingly popular with finance and legal professionals",
      },
      {
        year: "2016",
        event:
          "A Noodle Story receives Michelin Bib Gourmand — first modern hawker concept to do so",
      },
      {
        year: "2020",
        event: "Named by food critics as Singapore's best CBD hawker centre",
      },
    ],
    legendaryStalls: [
      {
        name: "A Noodle Story",
        dish: "Singapore-Style Ramen",
        story:
          "Michelin Bib Gourmand. A modern hawker concept — Singapore egg noodles topped with a Japanese-style soft egg, prawn wonton, and aromatic pork. The queue starts at 11am.",
      },
      {
        name: "Hoo Kee Bak Chang",
        dish: "Bak Chang (Rice Dumpling)",
        story:
          "One of the last surviving Hokkien bak chang stalls in Singapore. The glutinous rice dumplings are wrapped in bamboo leaves and filled with pork, chestnuts, and mushrooms.",
      },
      {
        name: "Singapore Famous Fried Hokkien Prawn Mee",
        dish: "Hokkien Mee",
        story:
          "Wok-fried yellow and rice noodles in a rich prawn broth. The sambal on the side is the secret weapon. A CBD lunch that regulars have been eating for 20 years.",
      },
    ],
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
    imageUrl: "/images/hawkers/tiong-bahru.jpg",
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
    story:
      "Tiong Bahru is Singapore's oldest public housing estate, built by the Singapore Improvement Trust in the 1930s in a distinctive Streamline Moderne style that still defines the neighbourhood. The market sits at its heart, occupying a gorgeous curved building that locals fought to preserve during Singapore's redevelopment wave. The hawker stalls below and wet market above operate in a building that feels genuinely historic. As the surrounding neighbourhood gentrified and filled with independent cafes and bookshops, the market remained anchored to its original community — a place where third-generation residents eat the same breakfast their grandparents ate.",
    vibeCheck:
      "Singapore's most beautiful hawker building in its most charming neighbourhood",
    localQuote:
      "Breakfast at Tiong Bahru Market, then a walk around the estate. It is the best morning Singapore has to offer.",
    timeline: [
      {
        year: "1930s",
        event:
          "Tiong Bahru estate built — Singapore's first public housing project in Art Deco style",
      },
      {
        year: "1955",
        event:
          "Tiong Bahru Market established in its current building as the neighbourhood's food hub",
      },
      {
        year: "1990s",
        event:
          "Conservation movement saves the estate from redevelopment — market protected",
      },
      {
        year: "2010s",
        event:
          "Tiong Bahru gentrification wave — market remains community anchor amid change",
      },
      {
        year: "2016",
        event:
          "Tiong Bahru Chwee Kueh receives Michelin Bib Gourmand recognition",
      },
    ],
    legendaryStalls: [
      {
        name: "Jian Bo Shui Kueh (Chwee Kueh)",
        dish: "Chwee Kueh",
        story:
          "Michelin Bib Gourmand. The most famous chwee kueh stall in Singapore. Silky steamed rice cakes with preserved radish. The texture is the standard all other stalls are measured against.",
      },
      {
        name: "Lor Mee 178",
        dish: "Lor Mee",
        story:
          "Thick starchy gravy over noodles with braised pork, fish cake, and a punchy vinegar. The kind of dish that Tiong Bahru regulars eat every Saturday morning without variation.",
      },
      {
        name: "Tiong Bahru Hainanese Boneless Chicken Rice",
        dish: "Chicken Rice",
        story:
          "Hainanese-run since the 1950s, the chicken is poached in a broth kept running for decades. The rice has a fragrance that hits you before you sit down.",
      },
    ],
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
    imageUrl: "/images/hawkers/abc-brickworks.jpg",
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
    localQuote:
      "Very few tourists know about this place. That is precisely what keeps the satay so good.",
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
    imageUrl: "/images/hawkers/buona-vista.webp",
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
    localQuote:
      "Close to Holland Village but without the Holland Village prices. The sensible choice, every time.",
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
    imageUrl: "/images/hawkers/clementi-448.jpg",
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
    localQuote:
      "Clementi residents have been eating here since their school days. Some loyalties simply never change.",
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
    imageUrl: "/images/hawkers/jurong-west-505.webp",
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
    localQuote:
      "Jurong West people know their food. And they know that 505 has everything they need.",
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
    imageUrl: "/images/hawkers/yishun-park.jpg",
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
    localQuote:
      "The north of Singapore has its own excellent food culture. You do not need to travel to the city centre to eat well.",
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
    imageUrl: "/images/hawkers/sembawang-hills.jpg",
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
    localQuote:
      "Eating under the trees at midnight with a bowl of bak kut teh — this is what Singapore supper culture is all about.",
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
    imageUrl: "/images/hawkers/chong-pang.jpg",
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
    localQuote:
      "Chong Pang feels different from the newer estates. More old Singapore. More genuine.",
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
    imageUrl: "/images/hawkers/woodlands-centre.jpg",
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
    localQuote:
      "Woodlands residents wake up at 5am, eat here, and cross to Johor for work. The food gives them the energy to do it.",
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
    imageUrl: "/images/hawkers/toa-payoh.jpg",
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
    localQuote:
      "Toa Payoh people are deeply loyal to their stalls. The same families have been eating here for thirty years without question.",
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
    imageUrl: "/images/hawkers/golden-shoe.jpg",
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
    localQuote:
      "The best chicken rice in the CBD, eaten standing up by people in suits. Boardroom decisions have been made on a full stomach from here.",
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
    imageUrl: "/images/hawkers/hong-lim.jpg",
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
    localQuote:
      "The char kway teow uncle fries one portion at a time and refuses to rush. The queue respects this completely.",
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
    imageUrl: "/images/hawkers/peoples-park.jpg",
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
    localQuote:
      "Tourists walk straight past. Locals walk right in. That is the entire story of this place.",
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
    imageUrl: "/images/hawkers/east-coast-lagoon.jpg",
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
    localQuote:
      "Satay by the sea with a cold beer as the sun goes down. Singapore does not get more perfect than this.",
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
    imageUrl: "/images/hawkers/marine-parade.jpg",
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
    localQuote:
      "The best laksa is not always at the famous place. The Katong locals know exactly where to go.",
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
    imageUrl: "/images/hawkers/jalan-berseh.jpg",
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
    localQuote:
      "Charcoal-fired laksa for under four dollars. It is one of the last of its kind in Singapore and it is extraordinary.",
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
    imageUrl: "/images/hawkers/ghim-moh.jpg",
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
    localQuote:
      "The chwee kueh here has been made the same way for five decades. Generations of Holland Road families will confirm it is the best.",
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
    imageUrl: "/images/hawkers/alexandra-village.jpg",
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
    localQuote:
      "Those who know about this place tend to keep it to themselves. The food quality here is exceptional and consistently so.",
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
    imageUrl: "/images/hawkers/bishan-st13.jpg",
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
    localQuote:
      "The roti prata before the football match is a Bishan tradition. Win or lose, the prata is always excellent.",
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
    imageUrl: "/images/hawkers/pasir-panjang.webp",
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
    localQuote:
      "Come after hiking the Southern Ridges. It is the best possible reward for the effort.",
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
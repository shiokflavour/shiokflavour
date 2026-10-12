export type TrailStop = {
  number: number;
  name: string;
  type: "eat" | "drink" | "eat & drink" | "walk" | "experience";
  intro: string;
  address: string;
  mapsUrl: string;
  whatToOrder: string[];
  tip: string;
  duration: string;
  image: string;
  alsoTry?: { item: string; note?: string }[];
  highlights?: { item: string; note?: string }[];
  isFree?: boolean;
  hasPaidOption?: boolean;
};

export type OrderItem = {
  item: string;
  price: string;
};

export type PathOption = {
  pathLabel: "The OG" | "The Returnee";
  name: string;
  address: string;
  mapsUrl: string;
  badges: string[];
  description: string;
  whatToOrder: OrderItem[];
  voicedTip: string;
  image: string;
};

export type DualPathStop = {
  number: number;
  category: string;
  headline: string;
  lede: string;
  og: PathOption;
  returnee: PathOption;
  shiokMove?: string;
};

export type TrailGuides = {
  og: { name: string; tagline: string };
  returnee: { name: string; tagline: string };
};

export type FlavourTrail = {
  slug: string;
  title: string;
  subtitle: string;
  region: string;
  duration: string;
  distance: string;
  stops: number;
  bestTime: string;
  difficulty: 'Easy' | 'Moderate' | 'Serious Eating';
  heroImage: string;
  intro: string;
  pullQuote: string;
  trailStops?: TrailStop[];
  endNote: string;
  guides?: TrailGuides;
  dualPathStops?: DualPathStop[];
};

export const FLAVOUR_TRAILS: FlavourTrail[] = [
  {
    slug: "katong-trail",
    title: "The Katong Trail",
    subtitle:
      "Kaya toast, crispy prata, Peranakan shophouses and the laksa that made this neighbourhood famous",
    region: "East Singapore",
    duration: "Half day (4–5 hours)",
    distance: "2.5km walking",
    stops: 8,
    bestTime: "Saturday or Sunday, start by 8.30am",
    difficulty: "Easy",
    heroImage: "/images/trails/katong/koon-seng-road.jpg",
    intro:
      "Katong is not just a neighbourhood. It is a living argument about what Singapore actually is.\n\nAlong this one stretch of East Coast Road and Joo Chiat, you will eat the breakfast that Singaporeans have been eating for a hundred years, walk past shophouses that have not changed since the 1920s, and sit down to the laksa that made this postcode famous. You will finish full, slightly sweaty, and considerably more informed about why people who grow up in the East never want to leave.\n\nThis trail runs from East Coast Road into Joo Chiat and back. Start by 8.30am. Bring cash. Wear comfortable shoes.",
    pullQuote:
      "The best version of Singapore is not in the CBD. It is here — on this street, at a plastic table, with a cup of kopi you did not have to explain.",
    trailStops: [
      {
        number: 1,
        name: "Chin Mee Chin Confectionery",
        type: "eat & drink",
        intro:
          "One of the last surviving Hainanese kopitiams in Singapore. The kaya toast arrives with a cold slab of butter that melts on contact — the kaya underneath is house-made, fragrant with pandan and coconut. The kopi is thick, dark, and slightly sweet in a way that no chain coffee shop has ever managed to replicate. This is the breakfast Singapore was built on.",
        address: "204 East Coast Road, Singapore 428903",
        mapsUrl:
          "https://maps.google.com/?q=Chin+Mee+Chin+Confectionery+Singapore",
        whatToOrder: [
          "Kaya toast with cold butter — on their house-baked bread, that is the point",
          "Soft boiled eggs — season with dark soy and white pepper, not salt",
          "Kopi C — coffee with evaporated milk. Order it here. This is the right place.",
        ],
        tip: "Open since 1925 — it marked its 100th year in 2025. The shop closed in 2018 and reopened in 2022 under new operators with a refreshed menu, but the old-school shopfront and marble-top tables keep the mood. Open daily from 8am (Wednesdays until 11.30am only). Sit slowly. Do not look at your phone. This is the right way to start a morning in Singapore.",
        duration: "30–40 mins",
        image: "/images/trails/katong/chin-mee-chin.jpg",
      },
      {
        number: 2,
        name: "Mr & Mrs Mohgan's Super Crispy Roti Prata",
        type: "eat",
        intro:
          "Mr Mohgan started making prata as a boy, and after he passed away in March 2022, Mrs Mohgan kept the griddle going. Regulars say the prata is as crispy as ever. The result is a flatbread with shatteringly crisp edges and a soft, layered interior — the kind you keep tearing pieces off even when you think you are done. Paired with fish curry that is bright, slightly sour, and deeply spiced. Many food writers rank it among the best roti prata in Singapore, and plenty of people who have eaten a lot of prata will agree.",
        address: "Tin Yeang Restaurant, 300 Joo Chiat Road, Singapore 427551",
        mapsUrl:
          "https://maps.google.com/?q=Mr+Mrs+Mohgan+Roti+Prata+Joo+Chiat",
        whatToOrder: [
          "Plain prata first — this is the test. If it is excellent, order egg.",
          "Coin prata — small crispy discs, great for sharing.",
          "Fish curry for dipping — not mutton, not dal. Fish curry here.",
        ],
        tip: "Ranked among the best roti prata in Singapore by multiple independent food writers. Now run by Mrs Mohgan, who carried on after her husband passed away in 2022. Opens at 6.30am and closes around 1pm (11.30am on Tuesdays). Closed Wednesdays. There will be a queue. It moves.",
        duration: "20–30 mins",
        image: "/images/trails/katong/mohgan-prata.jpg",
      },
      {
        number: 3,
        name: "Koon Seng Road Heritage Walk",
        type: "walk",
        intro:
          "Step off Joo Chiat Road and into Koon Seng Road for five minutes. The two rows of Peranakan terrace houses here — pastel-coloured, two storeys, ornate ceramic tiles, each one slightly different from the one next door — are some of the most photographed Peranakan-style shophouses in Singapore. Joo Chiat, the wider neighbourhood, was designated Singapore's first Heritage Town in 2011. You will not find this in the brochure. Walk slowly.",
        address: "Koon Seng Road, Singapore 427037",
        mapsUrl: "https://maps.google.com/?q=Koon+Seng+Road+Singapore",
        whatToOrder: [],
        tip: "Walk five minutes north to Koon Seng Road. The two rows of Peranakan terrace houses here — pastel coloured, two storeys, ornate ceramic tiles — are among the best preserved in Singapore. Look at the shutters. Look at the tiles. Look at how each house is slightly different from the one next to it. This neighbourhood was designated Singapore's first Heritage Town in 2011. While you're here: the Katong Antique House is at 208 East Coast Road — worth booking in advance for a proper Peranakan artefact tour. Free to walk past; visits are by reservation only.",
        duration: "15–20 mins",
        image: "/images/trails/katong/koon-seng-road.jpg",
      },
      {
        number: 4,
        name: "Katong Antique House",
        type: "experience",
        intro:
          "Behind the facade of a conserved Peranakan shophouse on East Coast Road is one of the most intimate museum experiences in Singapore. The late Peter Wee, a fourth-generation Peranakan and former president of the Peranakan Association, spent decades collecting family heirlooms — hand-beaded slippers, colonial-era photographs, porcelain, furniture — each piece with a story. This is not a curated museum. It is a family home that happens to be full of extraordinary things. Worth every minute of the visit.",
        address: "208 East Coast Road, Singapore 428907",
        mapsUrl:
          "https://maps.google.com/?q=Katong+Antique+House+208+East+Coast+Road+Singapore",
        whatToOrder: [],
        tip: "A Peranakan home turned private museum, filled with family heirlooms, antique porcelain, hand-beaded slippers and colonial-era photographs collected by the late Peter Wee. Visits are by reservation only — book ahead online. Free to walk past and admire the facade. If you book nothing else on this trail, book this.",
        duration: "30–45 mins (by appointment)",
        image: "/images/trails/katong/katong-antique-house.jpg",
      },
      {
        number: 5,
        name: "Sri Senpaga Vinayagar Temple",
        type: "experience",
        intro:
          "Founded in the 1850s by the Ceylon Tamil community and dedicated to Lord Ganesha, this is one of Singapore's oldest Hindu temples. The rajagopuram — the intricately carved tower above the entrance — rises 21 metres above the street, dense with sculpted figures. Remove your shoes before entering. Stand in front of it and look up. This is Singapore in one frame: a Tamil temple with roots in the 1850s, a short walk from a Peranakan kopitiam and an Indian prata stall.",
        address: "19 Ceylon Road, Singapore 429613",
        mapsUrl:
          "https://maps.google.com/?q=Sri+Senpaga+Vinayagar+Temple+Ceylon+Road+Singapore",
        whatToOrder: [],
        tip: "One of Singapore's oldest Hindu temples, founded in the 1850s and dedicated to Lord Ganesha, and gazetted as a historic site in 2003. Free entry, walk-in welcome. Remove your shoes before entering. The gopuram — the intricately carved tower above the entrance — is worth studying closely. This is Singapore in one frame: a Tamil temple with roots in the 1850s, a short walk from a Peranakan kopitiam and an Indian prata stall.",
        duration: "10–15 mins",
        image: "/images/trails/katong/sri-senpaga-temple.jpg",
      },
      {
        number: 6,
        name: "Kim Choo Kueh Chang",
        type: "eat",
        intro:
          "Making kueh since 1945, when Lee Kim Choo started selling from a roadside stall at Joo Chiat Place. The kueh pie tee shells are fried fresh — small crispy cups filled with braised turnip, prawn and a drizzle of dark sauce. The kueh dadar is a pandan crepe wrapped around grated coconut and palm sugar, green and fragrant and gone in two bites. These are the snacks that Peranakan families have been making for generations. Buy more than you think you need.",
        address: "109 East Coast Road, Singapore 428800",
        mapsUrl: "https://maps.google.com/?q=Kim+Choo+Kueh+Chang+Katong",
        whatToOrder: [
          "Kueh pie tee — the crispy shells with turnip and prawn filling",
          "Kueh dadar — pandan crepe with grated coconut and palm sugar",
          "Nonya bak chang — glutinous rice dumpling with spiced pork and chestnuts",
        ],
        tip: "Making kueh since 1945. The shophouse has a heritage gallery upstairs — worth a quick look. Downstairs is all business: buy kueh, eat kueh. The kueh pie tee shells are fried fresh. Order more than you think you need. You will want more.",
        duration: "15–20 mins",
        image: "/images/trails/katong/kim-choo-kueh.jpg",
      },
      {
        number: 7,
        name: "328 Katong Laksa",
        type: "eat",
        intro:
          "This is the most famous name in Katong laksa. A rich coconut curry broth — thick, slightly sweet, deeply spiced — served with short-cut rice noodles, plump prawns, cockles and fish cake. The noodles are cut short deliberately so the entire bowl is eaten with just a spoon. No chopsticks. No fork. In 2013 it beat Gordon Ramsay at the Singtel Hawker Heroes Challenge. The broth, founder Nancy Koh's recipe, has not changed.",
        address: "51 East Coast Road, Singapore 428770",
        mapsUrl: "https://maps.google.com/?q=328+Katong+Laksa+East+Coast+Road",
        whatToOrder: [
          "Laksa — always. This is why you are here.",
          "Add cockles if they are fresh that day — ask at the counter",
          "A side of otah if available — spiced fish cake grilled in banana leaf",
        ],
        tip: "The noodles are cut short so the entire bowl is eaten with just a spoon — no chopsticks, no fork. This is deliberate. The broth should be rich, coconut-heavy, and slightly sweet. The sambal on the side is serious. Beat Gordon Ramsay at the 2013 Hawker Heroes Challenge.",
        duration: "20–30 mins",
        image: "/images/trails/katong/328-katong-laksa.jpg",
      },
      {
        number: 8,
        name: "Birds of Paradise Gelato",
        type: "eat",
        intro:
          "End here. Birds of Paradise makes artisanal gelato using real botanical ingredients — actual pandan leaf, white chrysanthemum, lychee, blue ginger. No artificial flavours. No commercial syrups. The pandan is floral, fragrant and unmistakably Southeast Asian in a way that will make you understand why Singaporeans are so possessive about this leaf. On a Singapore afternoon, after a full morning of eating through Katong, a scoop of this is the only logical conclusion.",
        address: "63 East Coast Road, Singapore 428776",
        mapsUrl: "https://maps.google.com/?q=Birds+of+Paradise+Gelato+Katong",
        whatToOrder: [
          "Pandan — the signature. Floral, fragrant, unmistakably Southeast Asian.",
          "White Chrysanthemum — delicate and unexpected",
          "Seasonal botanicals — whatever is on the board that day, trust it",
        ],
        tip: "End the trail with something cold. Birds of Paradise makes artisanal gelato from natural botanicals — no artificial flavours, no commercial syrups. The pandan is made with real pandan leaf. On a Singapore afternoon, after a full morning of eating, this is the only logical conclusion. Sit outside. You earned it.",
        duration: "15–20 mins",
        image: "/images/trails/katong/birds-of-paradise.jpg",
      },
    ],
    endNote:
      'You made it to the end of the trail. And if you ate everything on this list — the kaya toast, the prata, the laksa, the gelato — you now have a very good understanding of why people who grow up in the East never want to leave.\n\nThank you for walking this with us. Every stall on this trail is run by someone who has spent years — sometimes decades — perfecting one thing. When you eat there, you are keeping that alive. That matters more than you know.\n\nCome back hungry. Katong will be ready.\n\nEnjoy this trail? Share it with someone who deserves a good meal. And if you find a stall we missed — write to us. We are always hungry for a good tip.\n\n— The ShiokFlavour Team\nSingapore\'s hawker heritage, one plate at a time.',
  },
  {
    slug: "tiong-bahru-trail",
    title: "The Tiong Bahru Trail",
    subtitle:
      "Two neighbourhoods. One postcode. Four decisions.",
    region: "Central Singapore",
    duration: "Half day (3–4 hours)",
    distance: "1.5km walking",
    stops: 4,
    bestTime: "Saturday or Sunday, start by 8am",
    difficulty: "Easy",
    heroImage: "/images/trails/tiong-bahru/hero.jpg",
    intro:
      "Tiong Bahru is two neighbourhoods occupying the same postcode. The 1930s Art Deco estate where pau uncles and chwee kueh aunties still run their stalls — and the 2020s neighbourhood of pastry chefs, flat whites and indie bookshops. Both are real. Both are delicious.\n\nSo we built this trail differently. At every stop you get two paths — the Uncle (The OG) or the Barista (The Returnee). Pick the one that matches your mood. Or, if you're hungry enough, do both. Prices are indicative and change — we check them often but bring a few extra dollars just in case.",
    pullQuote:
      "The only neighbourhood in Singapore where a $1.20 pau and a $4.80 kouign amann share the same postcode.",
    guides: {
      og: {
        name: "The Uncle (The OG)",
        tagline: "Been doing this since before you had opinions.",
      },
      returnee: {
        name: "The Barista (The Returnee)",
        tagline: "Trained in Melbourne. Came home. Sourced the beans themselves.",
      },
    },
    dualPathStops: [
      {
        number: 1,
        category: "Breakfast · Pick your path",
        headline: "How do you want to start?",
        lede: "Eighty years of difference. Two minutes apart on foot.",
        og: {
          pathLabel: "The OG",
          name: "Tiong Bahru Pau",
          address: "Tiong Bahru Market, 30 Seng Poh Road, #02-18/19, Singapore 168898",
          mapsUrl: "https://maps.google.com/?q=Tiong+Bahru+Pau+Singapore",
          badges: ["CASH ONLY", "STANDING ROOM", "SINCE 1978"],
          description:
            "Two pau, eaten at a shared table upstairs in Tiong Bahru Market. The uncle doesn't do complicated. Point. Pay. Eat. This is how Singapore had breakfast for seventy years before anyone said flat white.",
          whatToOrder: [
            { item: "Big pau — char siew & egg", price: "$1.60" },
            { item: "Liao sa pau — salted egg custard", price: "$1.80" },
            { item: "Small pau — lotus paste", price: "$1.20" },
          ],
          voicedTip: "Two pau enough. Don't order three, later cannot eat lunch.",
          image: "/images/trails/tiong-bahru/pau.jpg",
        },
        returnee: {
          pathLabel: "The Returnee",
          name: "Tiong Bahru Bakery",
          address: "56 Eng Hoon Street, #01-70, Singapore 160056",
          mapsUrl: "https://maps.google.com/?q=Tiong+Bahru+Bakery+Eng+Hoon+Street",
          badges: ["CARD OKAY", "SIT & STAY", "SINCE 2012"],
          description:
            "A Parisian-style bakery that opened in 2012, a short walk from the market — and quietly became one of the most photographed bakeries in Singapore. The kouign amann is the signature. Caramelised, flaky, heavy. Worth the queue.",
          whatToOrder: [
            { item: "Kouign amann — caramelised & flaky", price: "$4.80" },
            { item: "Butter croissant", price: "$4.20" },
            { item: "Flat white", price: "$6.50" },
          ],
          voicedTip: "Come at 8am. Kouign amann straight from the oven, still warm, no queue.",
          image: "/images/trails/tiong-bahru/bakery.jpg",
        },
        shiokMove: "Do both. Two minutes apart. Pau first, croissant for the road.",
      },
      {
        number: 2,
        category: "Walk it off · Pick your path",
        headline: "Which Tiong Bahru do you want to see?",
        lede: "The same streets. Eighty years of different stories.",
        og: {
          pathLabel: "The OG",
          name: "Seng Poh Road Heritage Walk",
          address: "Seng Poh Road & surrounding blocks, Tiong Bahru Estate",
          mapsUrl: "https://maps.google.com/?q=Seng+Poh+Road+Tiong+Bahru",
          badges: ["FREE", "20 MINS", "1930s"],
          description:
            "Singapore's first public housing estate, built in an Art Deco style that was sweeping the world at the time. Rounded corners. Porthole windows. Walk slowly and look up — these aren't museum buildings, people still live here.",
          whatToOrder: [
            { item: "Block 78 Moh Guan Terrace — the photographed facade", price: "Free" },
            { item: "Qi Tian Gong (Monkey God Temple), Eng Hoon Street — still in active use", price: "Free" },
            { item: "Moh Guan Terrace & Guan Chuan Street shophouse blocks", price: "Free" },
          ],
          voicedTip: "People live here. Keep voice down, walk slow.",
          image: "/images/trails/tiong-bahru/seng-poh.jpg",
        },
        returnee: {
          pathLabel: "The Returnee",
          name: "Yong Siak Street",
          address: "Yong Siak Street, Tiong Bahru",
          mapsUrl: "https://maps.google.com/?q=Yong+Siak+Street+Tiong+Bahru",
          badges: ["FREE", "20 MINS", "2010s"],
          description:
            "One short street that became the quiet heart of the new Tiong Bahru. Indie bookshops. Small design boutiques. No crowds. This is the neighbourhood everyone writes about but nobody actually disturbs.",
          whatToOrder: [
            { item: "Woods in the Books — children's bookshop", price: "Free" },
            { item: "Nana & Bird — Singapore designer boutique (round the corner on Eng Hoon St)", price: "Free" },
            { item: "Cat Socrates — quirky gift shop", price: "Free" },
          ],
          voicedTip: "Weekday mornings quiet. Weekends bring the brunch crowd. Come early.",
          image: "/images/trails/tiong-bahru/yong-siak.jpg",
        },
        shiokMove: "These two streets are parallel — five minutes walk from one to the other. Do both. One for history, one for coffee-scented bookshelves.",
      },
      {
        number: 3,
        category: "Mid-morning snack · Pick your path",
        headline: "Still hungry?",
        lede: "A S$1.20 bowl of tau huay, or a cupcake that tastes like Brooklyn.",
        og: {
          pathLabel: "The OG",
          name: "Teck Seng Soya Bean Milk",
          address: "Tiong Bahru Market, 30 Seng Poh Road, #02-69, Singapore 168898",
          mapsUrl: "https://maps.google.com/?q=Teck+Seng+Soya+Bean+Milk+Tiong+Bahru+Market",
          badges: ["CASH BEST", "CLOSED MONDAYS", "OPENS 2AM"],
          description:
            "Upstairs in Tiong Bahru Market, this soya bean stall still sells a bowl of silky tau huay for about the price of a bus ride. It opens in the small hours and closes after lunch, so come before 2.30pm. Order it warm or cold, and the soya milk to go.",
          whatToOrder: [
            { item: "Tau huay (soya beancurd), warm or cold", price: "$1.20" },
            { item: "Soya bean milk", price: "$1.20" },
          ],
          voicedTip: "Ask for less sweet if you want to taste the bean.",
          image: "/images/food/tau-huay.jpg",
        },
        returnee: {
          pathLabel: "The Returnee",
          name: "Plain Vanilla Bakery",
          address: "1D Yong Siak Street, Singapore 168641",
          mapsUrl: "https://maps.google.com/?q=Plain+Vanilla+Bakery+Yong+Siak",
          badges: ["CARD OKAY", "SIT & STAY", "SINCE 2011"],
          description:
            "Cupcakes done carefully. Coffee done properly. The neighbourhood's softest-landing afternoon stop, tucked into a Yong Siak shophouse with a small courtyard out back. The salted caramel cupcake is the benchmark.",
          whatToOrder: [
            { item: "Salted caramel cupcake", price: "$4.50" },
            { item: "Red velvet cupcake", price: "$4.50" },
            { item: "Flat white", price: "$6.00" },
          ],
          voicedTip: "Get a cupcake to go. Eat it in the courtyard. Slower that way.",
          image: "/images/trails/tiong-bahru/plain-vanilla.jpg",
        },
        shiokMove: "Teck Seng's tau huay costs $1.20. Plain Vanilla's cupcake costs $4.50. Both are exactly what they're meant to be.",
      },
      {
        number: 4,
        category: "Lunch · Pick your path",
        headline: "How do you want to finish?",
        lede: "A hawker hall full of Michelin-recognised stalls, or sourdough in a sunlit room.",
        og: {
          pathLabel: "The OG",
          name: "Tiong Bahru Market",
          address: "30 Seng Poh Road, Singapore 168898",
          mapsUrl: "https://maps.google.com/?q=Tiong+Bahru+Market+Singapore",
          badges: ["CASH BEST", "SHARED TABLES", "MICHELIN-LISTED"],
          description:
            "Singapore's most beautiful hawker building, in Singapore's most fashionable neighbourhood. Several Michelin Bib Gourmand and Michelin-selected stalls under one roof. Shared tables, tissue packets to claim seats, and lunch stalls that start closing by early afternoon.",
          whatToOrder: [
            { item: "Jian Bo Shui Kueh — chwee kueh (5 pcs)", price: "$3.50" },
            { item: "Hainanese Chicken Rice #02-82", price: "$3.80" },
            { item: "Lor Mee 178 — extra vinegar", price: "$4.50" },
            { item: "Hong Heng Fried Sotong Prawn Mee (fried Hokkien mee)", price: "$5.00" },
          ],
          voicedTip: "Order from two stalls. Share everything. That's how we do.",
          image: "/images/trails/tiong-bahru/market.jpg",
        },
        returnee: {
          pathLabel: "The Returnee",
          name: "Micro Bakery Kitchen",
          address: "78 Yong Siak Street, Singapore 163078",
          mapsUrl: "https://maps.google.com/?q=Micro+Bakery+Kitchen+Yong+Siak",
          badges: ["CARD ONLY", "BOOK AHEAD", "WED–SUN"],
          description:
            "If you want to end the morning slowly with a seat, good coffee and sourdough — this is the finish. Five minutes from the market on foot. A completely different tempo, the same postcode.",
          whatToOrder: [
            { item: "Sourdough tartine (changing, seasonal)", price: "$18" },
            { item: "The Baker's Breakfast", price: "$24" },
            { item: "Filter coffee", price: "$7" },
          ],
          voicedTip: "Book ahead on weekends. Quietest just after 1pm.",
          image: "/images/trails/tiong-bahru/micro-bakery.jpg",
        },
        shiokMove: "Tiong Bahru Market costs $15 for a feast. Micro Bakery costs $40 for lunch. Pick by mood, not wallet.",
      },
    ],
    endNote:
      "You've just done Tiong Bahru the way it's meant to be done — with a choice at every stop. The Uncle has been right for eighty years. The Returnee has been right for the last ten. Both are still right. That's the whole neighbourhood in one sentence.",
  },
  {
    slug: "cbd-day-trail",
    title: "Singapore CBD Food Trail",
    subtitle:
      "From kaya toast at sunrise to satay under the city lights — the tastiest day you'll ever have in Singapore.",
    region: "Singapore CBD · Chinatown MRT → Raffles Place MRT",
    duration: "Full day (8am – 9pm)",
    distance: "4km walking",
    stops: 9,
    bestTime: "Start by 8am",
    difficulty: "Easy",
    heroImage: "/images/trails/cbd/lau-pa-sat-hero.jpg",
    intro:
      "A full day eating and exploring trail through Singapore's CBD — weaving between legendary hawker centres, colonial heritage, and the city's most iconic landmarks. Start with kopi as the city wakes up. End with satay as the skyline glows.",
    pullQuote:
      "Satay in hand, city lights above — Singapore doing what Singapore does best: feeding people well and making it look effortless.",
    trailStops: [
      {
        number: 1,
        name: "The 1950s Coffee & Chinatown Morning Walk",
        type: "eat",
        intro:
          "Pocket change. That's what a kopi costs here. Michelin-listed, decades-old, second floor of Chinatown Complex — and the uncle behind the counter pulls it the same way he always has. Cloth sock. Robusta beans. No shortcuts.\n\nOrder your kopi. Crack your soft boiled eggs into the saucer, add dark soy and white pepper. Eat slowly. You have nowhere to be yet.\n\nWhen you're done, step outside. Chinatown at 8am belongs to the people who live here — the light is softer, the streets quieter, the shophouses on Pagoda Street glowing in dusty reds and yellows. Sri Mariamman Temple has been standing on South Bridge Road since 1827. Duck into Sago Street. Wander without a plan. That's the point.",
        address:
          "Chinatown Complex Food Centre, #02-048, 335 Smith Street, Singapore 050335",
        mapsUrl:
          "https://maps.google.com/?q=1950s+Coffee+Chinatown+Complex+Singapore",
        whatToOrder: [
          "Kopi O — black, full-bodied — say 'siu dai' for less sweet",
          "Kaya toast — thin, crispy, cold butter through the middle",
          "Soft boiled eggs — crack into a saucer, dark soy, white pepper",
        ],
        alsoTry: [
          {
            item: "Kopi Gu You",
            note: "Kopi with butter dissolved in — sounds wrong, tastes right",
          },
          {
            item: "Peanut thick toast",
            note: "Chunky, filling, honest — can't decide? Order both and split them",
          },
        ],
        tip: "Closed Mondays. Order your kopi properly — the uncle will appreciate it, your taste buds will too.",
        duration: "2 hours",
        image: "/images/trails/cbd/chinatown-morning.jpg",
      },
      {
        number: 2,
        name: "Maxwell Food Centre",
        type: "eat",
        intro:
          "You're not hungry yet. Order half a plate anyway. Tian Tian's chicken rice is not something you skip because of timing. This stall has been going since 1986 and famously won a nod from the late Anthony Bourdain. The chicken is poached until just cooked, the rice fragrant with chicken fat and pandan, the chilli sauce one that people cross the island for. A small plate is about SGD $5. There is no excuse.",
        address: "1 Kadayanallur Street, Tanjong Pagar, Singapore 069184",
        mapsUrl: "https://maps.google.com/?q=Maxwell+Food+Centre+Singapore",
        whatToOrder: [
          "Tian Tian Chicken Rice — small plate, steamed or roasted",
          "Fresh sugarcane juice — cold, sweet, from the stall near the entrance",
        ],
        alsoTry: [
          {
            item: "Zhen Zhen Porridge",
            note: "Silky smooth congee — the kind that makes you understand why people eat porridge",
          },
          {
            item: "Maxwell Popiah",
            note: "Fresh spring rolls made to order — light and packed with flavour",
          },
        ],
        tip: "Queue at Tian Tian starts building from 10.30am. Order, find a seat, then go back to collect. Don't hover at the counter.",
        duration: "45 mins",
        image: "/images/trails/cbd/maxwell.jpg",
      },
      {
        number: 3,
        name: "Gardens by the Bay",
        type: "walk",
        intro:
          "From Maxwell, the easiest way is the MRT: hop on the Thomson–East Coast Line at Maxwell station and ride four stops to Gardens by the Bay station (TE22) — Exit 1 leads straight into the gardens. It's about 15 minutes door to door. Feeling energetic? It's roughly a 40-minute walk via Marina Bay.",
        address: "18 Marina Gardens Drive, Singapore 018953",
        mapsUrl: "https://maps.google.com/?q=Gardens+by+the+Bay+Singapore",
        whatToOrder: [],
        highlights: [
          {
            item: "Supertree Grove",
            note: "Free — walk underneath them, look up, take your time",
          },
          {
            item: "OCBC Skyway",
            note: "SGD $14 — elevated walkway between the trees, book online",
          },
          {
            item: "Cloud Forest",
            note: "Misty mountain waterfall inside a glass dome — Cloud Forest + Flower Dome combo SGD $46 for non-residents",
          },
          {
            item: "Flower Dome",
            note: "World's largest glass greenhouse, cooler and quieter — included in the SGD $46 two-dome ticket",
          },
        ],
        tip: "Skip the paid attractions and come back at 7.45pm or 8.45pm for the Garden Rhapsody light show — Supertrees glow and pulse to music. Completely free.",
        duration: "2 hours",
        image: "/images/trails/cbd/gardens-bay.jpg",
        isFree: true,
        hasPaidOption: true,
      },
      {
        number: 4,
        name: "Lau Pa Sat",
        type: "eat",
        intro:
          "Built in 1894, Lau Pa Sat is Singapore's most beautiful hawker centre — a Victorian cast iron structure in the middle of the CBD that was dismantled during MRT construction in the 1980s and painstakingly reassembled. At lunchtime it fills with office workers eating $5 plates next to tourists who can't believe what they're looking at. Order satay. Order a lot of satay.",
        address: "18 Raffles Quay, Singapore 048582",
        mapsUrl: "https://maps.google.com/?q=Lau+Pa+Sat+Singapore",
        whatToOrder: [
          "Satay — chicken and mutton, minimum 10 sticks, with peanut sauce and ketupat",
          "Otah — grilled fish cake in banana leaf, smoky and spicy",
          "Fresh lime juice — cold, sharp, non-negotiable in this heat",
        ],
        alsoTry: [
          {
            item: "Char kway teow",
            note: "Wok-fried flat noodles with prawns, cockles, egg and dark soy",
          },
          {
            item: "Hokkien mee",
            note: "Thick yellow noodles braised in prawn stock — squeeze the lime",
          },
        ],
        tip: "Boon Tat Street outside transforms into open-air Satay Street from 7pm on weekdays (3pm on weekends). You're coming back tonight — save room.",
        duration: "1 hour",
        image: "/images/trails/cbd/lau-pa-sat.jpg",
      },
      {
        number: 5,
        name: "Marina Bay Waterfront Walk",
        type: "walk",
        intro:
          "Walk off lunch along one of the most spectacular urban waterfronts in the world. The walk from Lau Pa Sat to the Helix Bridge, via the Merlion and the Esplanade, takes about 30 minutes at an easy pace. Completely free — the Esplanade durians, the double helix bridge, Marina Bay Sands rising behind it like something from a science fiction film. Just walk. Let it wash over you.",
        address: "Helix Bridge, Marina Bay, Singapore",
        mapsUrl: "https://maps.google.com/?q=Helix+Bridge+Singapore",
        whatToOrder: [],
        highlights: [
          {
            item: "Helix Bridge",
            note: "Walk across it, stop in the middle, look both ways",
          },
          {
            item: "ArtScience Museum",
            note: "The lotus-shaped building is stunning from the waterfront",
          },
          {
            item: "Marina Bay Sands observation deck",
            note: "Optional, paid entry — check current prices online; views are extraordinary",
          },
          {
            item: "Merlion Park",
            note: "Touristy but you'd regret not going",
          },
        ],
        tip: "Best photo in Singapore — stand on the Helix Bridge facing the city at around 4pm. The light turns golden. You'll thank us later.",
        duration: "1.5 hours",
        image: "/images/trails/cbd/helix-bridge.jpg",
        isFree: true,
      },
      {
        number: 6,
        name: "Amoy Street Food Centre",
        type: "eat",
        intro:
          "Tucked behind the CBD's glass towers, Amoy Street Food Centre is the kind of place that rewards people who know where to look. By 4.30pm the lunch crowd has cleared and you can actually get a seat — but many stalls here are lunch-only and close by mid-afternoon (and on weekends), so treat this as a snack stop and go with what is open. Order something cold. Order something light. You've got dinner ahead of you.",
        address: "7 Maxwell Road, Singapore 069111",
        mapsUrl: "https://maps.google.com/?q=Amoy+Street+Food+Centre+Singapore",
        whatToOrder: [
          "Ice kachang — shaved ice, red beans, attap seeds, rainbow syrup — eat fast before it melts",
          "Bak chor mee dry — minced pork noodles with vinegar, chilli, crispy lard — always order dry",
        ],
        alsoTry: [
          {
            item: "Teh tarik",
            note: "Pulled milk tea — frothy and warm, perfect 4pm pick-me-up",
          },
          {
            item: "Soon kueh",
            note: "Steamed dumpling with bamboo shoots and turnip — delicate and underrated",
          },
        ],
        tip: "Always order the dry version of noodles — more intensely flavoured than soup. Add soup on the side if you want it.",
        duration: "45 mins",
        image: "/images/trails/cbd/amoy-street.jpg",
      },
      {
        number: 7,
        name: "Ann Siang Hill",
        type: "walk",
        intro: "Singapore's most beautiful heritage streets and almost nobody talks about them. Ann Siang Hill is a gentle slope of perfectly preserved shophouses that feels completely removed from the city around it. Club Street runs parallel — bars and restaurants that haven't tried too hard. The light at 5.30pm turns everything golden. This is where you take the photos that make everyone back home ask where you went.\n\nBut before you climb the hill — stop at 285 South Bridge Road. Tong Heng has been baking egg tarts in Chinatown since 1935, and its roots go back to a 1920s street stall. The diamond-shaped tarts have flaky pastry and silky smooth egg custard, and cost about $2.40 each. Buy two. Eat them while you walk up the hill. This is exactly the kind of thing ShiokFlavour exists to tell you about.",
        address: "Ann Siang Hill, Club Street, Singapore",
        mapsUrl: "https://maps.google.com/?q=Ann+Siang+Hill+Singapore",
        whatToOrder: [
          "Tong Heng egg tarts — diamond-shaped, flaky pastry, silky egg custard. Buy two, eat warm on the hill — 285 South Bridge Road",
          "Ann Siang Hill Park — tiny hilltop park with rooftop views, often empty and peaceful",
          "Club Street — walk slowly, look up at the shophouse facades, the details are extraordinary",
          "Duxton Hill — one street over, equally beautiful, slightly more local crowd",
          "Optional: a drink at one of the bars on Club Street before dinner",
        ],
        tip: "Tong Heng is open daily, 9am to 7pm. The egg tarts sell out by late afternoon so don't leave it too late. And the bars on Club Street and Duxton Hill start filling up around 6pm — perfect spot for a drink before dinner. You've well and truly earned it by now.",
        duration: "1 hour",
        image: "/images/trails/cbd/ann-siang-hill.jpg",
      },
      {
        number: 8,
        name: "Hong Lim Market & Food Centre",
        type: "eat",
        intro:
          "One of the CBD's oldest hawker centres and still one of its best. Be warned: most of Hong Lim's famous stalls are lunch operations, so by 7pm it is much quieter. The ones still firing are worth it — curry chicken bee hoon mee that runs until 9pm, and fish head bee hoon with a proper dinner service. Share between two. A very good $20 dinner.",
        address: "531A Upper Cross Street, Singapore 051531",
        mapsUrl:
          "https://maps.google.com/?q=Hong+Lim+Market+Food+Centre+Singapore",
        whatToOrder: [
          "Ah Heng Curry Chicken Bee Hoon Mee (#02-58/59) — open daily until 9pm, rich curry over bee hoon and yellow noodles",
          "Tang Kay Kee Fish Head Bee Hoon (#01-70) — dinner 5–9.30pm, closed Mondays",
        ],
        alsoTry: [
          { item: "Barley water", note: "Cold, sweet — the perfect dinner drink" },
          {
            item: "Char siew rice",
            note: "BBQ pork over rice — simple and satisfying",
          },
        ],
        tip: "Come before 7pm if you can — many stalls here close by mid-afternoon, and the dinner options are limited.",
        duration: "1 hour",
        image: "/images/trails/cbd/hong-lim.jpg",
      },
      {
        number: 9,
        name: "Lau Pa Sat Satay Street",
        type: "eat & drink",
        intro:
          "End where Singapore ends every good night. From 7pm on weekdays (3pm on weekends) Boon Tat Street closes to traffic and the satay stalls wheel out their grills. The smoke drifts through the CBD, the city towers glow above you, and the uncles fan charcoal with the calm of someone who has been doing this perfectly for thirty years. Order satay. Find a table. Sit down. You've earned this.",
        address: "Boon Tat Street, Singapore 048582",
        mapsUrl: "https://maps.google.com/?q=Boon+Tat+Street+Satay+Singapore",
        whatToOrder: [
          "Satay — at least 10 sticks, chicken and mutton mixed, with peanut sauce",
          "Ketupat — compressed rice cakes that come with the satay — tear and dip",
          "Cold Tiger beer or fresh lime juice — your call, both are right",
        ],
        alsoTry: [
          {
            item: "Otah",
            note: "Grilled over charcoal — smokier and more intense than lunchtime",
          },
          {
            item: "BBQ stingray",
            note: "Grilled on banana leaf with sambal — bold and unmistakably Singapore",
          },
        ],
        tip: "Tell the uncle how many sticks upfront — they cook to order, takes about 10 minutes. Use the time to find a table. Satay Street runs until 3am.",
        duration: "Stay as long as you want",
        image: "/images/trails/cbd/satay-street.jpg",
      },
    ],
    endNote:
      "You made it to the end of the trail. Satay in hand, city lights above, Singapore doing what Singapore does best — feeding people well and making it look effortless.\n\nThis city runs on hawker food. Always has. The uncles and aunties you met today have been showing up before sunrise for decades, not for the money but because this is what they do. Remember that the next time someone tells you hawker food is cheap. It is. It's also irreplaceable.\n\nStay hungry,\nShiokFlavour\nServing Singapore's hawker heritage, one plate at a time.",
  },
];

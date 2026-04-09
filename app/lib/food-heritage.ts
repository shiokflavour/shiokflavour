export type FoodHeritageDish = {
  name: string;
  slug: string;
  category: string;
  description: string;
  origin: string;
  whereToFind: string;
  priceRange: string;
  imageUrl: string;
  funFact: string;
  bestPairedWith: string;
  halal: boolean;
  spiceLevel: string;
  difficulty: string;
  localSay: string;
  hawkersThatServeIt: string[];
  howToEat: string[];
  keyIngredients: { name: string; emoji: string; role: string }[];
  bestStalls: {
    name: string;
    address: string;
    area: string;
    note: string;
    mapsUrl: string;
  }[];
  shiokOMeter: {
    spiceHit: number;
    messFactor: number;
    flavourDepth: number;
    queueGame: number;
    shiokValue: number;
  };
};

export const FOOD_HERITAGE_DISHES: FoodHeritageDish[] = [
  {
    name: "Char Kway Teow",
    slug: "char-kway-teow",
    category: "Singaporean Classics",
    description:
      "Char kway teow (\"stir-fried rice cake strips\") is one of Singapore's most beloved wok dishes: flat rice noodles tossed over fierce heat with dark soy, egg, bean sprouts, and seafood or lap cheong. The dish reflects the Strait Settlements era—Teochew and Hokkien traders, Southern Chinese technique, and Malaysian ingredients meeting in port cities. The hallmark is wok hei, the smoky breath of the wok that hawkers chase at dawn and supper. UNESCO's inscription of Singapore's hawker culture celebrates exactly this: affordable, skilled street cooking passed between generations. A plate of CKT is not just calories; it is living heritage on a styrofoam tray.",
    origin:
      "Evolved from Chinese stir-fried noodles in Penang and Singapore, blending Hokkien and Teochew traditions with local belacan, cockles, and sweet dark soy.",
    whereToFind:
      "Lau Pa Sat and Maxwell Food Centre host legendary stalls; East Coast and Old Airport Road hawker centres are known for queues at peak hours. Look for long waits and a soot-dark wok.",
    priceRange: "S$4–8 per plate",
    imageUrl: "https://i.ibb.co/4gFx40Hp/Char-Kway-Teow-28-scaled.jpg",
    funFact:
      "Some iconic stalls still fry one or two portions at a time—refusing to overload the wok—to preserve the elusive wok hei that locals swear they can smell from across the food centre.",
    bestPairedWith:
      "Calamansi lime squeeze, sambal on the side, and a cold sugar-cane juice to cut the richness.",
    halal: false,
    spiceLevel: "Medium 🌶️🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Wah, the wok hei damn shiok lah! Queue 30 minutes also worth it one.",
    hawkersThatServeIt: [
      "old-airport-road-food-centre",
      "bedok-interchange-hawker-centre",
      "tiong-bahru-market",
    ],
    howToEat: [
      "Squeeze the calamansi lime over the entire plate first — this is non-negotiable",
      "Add sambal from the side little by little; don't dump it all in at once",
      "Eat immediately — wok hei is a live thing and dies within 2 minutes",
      "Mix cockles in last if you want them; skip them if you don't — no judgement",
      "Chase every few bites with cold sugar cane juice to cut through the richness",
    ],
    keyIngredients: [
      {
        name: "Kway Teow",
        emoji: "🍜",
        role: "Flat rice noodles — the star. Wide, silky, and made to absorb smoky wok flavour",
      },
      {
        name: "Dark Soy",
        emoji: "🫙",
        role: "Gives the noodles their signature caramel-black colour and deep, slightly sweet flavour",
      },
      {
        name: "Wok Hei",
        emoji: "🔥",
        role: "Not an ingredient — it's the smoky breath of an extremely hot wok. The hardest thing to replicate at home",
      },
      {
        name: "Cockles",
        emoji: "🦪",
        role: "The controversial one. Half of Singapore skips them; the other half says it's not CKT without them",
      },
      {
        name: "Lap Cheong",
        emoji: "🌭",
        role: "Sweet Chinese sausage that adds little bursts of sweetness throughout the plate",
      },
      {
        name: "Bean Sprouts",
        emoji: "🌱",
        role: "Added last for crunch — a good hawker never lets them go limp",
      },
    ],
    bestStalls: [
      {
        name: "Outram Park Fried Kway Teow Mee",
        address: "Old Airport Road Food Centre, #01-12, 51 Old Airport Rd",
        area: "Kallang",
        note: "Michelin Bib Gourmand. Queue starts before they open — arrive early or wait 45 min",
        mapsUrl:
          "https://maps.google.com/?q=Outram+Park+Fried+Kway+Teow+Mee+Old+Airport+Road+Food+Centre+Singapore",
      },
      {
        name: "Hill Street Char Kway Teow",
        address: "Bedok South Road, #01-05, Bedok South Market & Food Centre",
        area: "Bedok",
        note: "One of the oldest surviving CKT stalls in Singapore. The uncle has been frying for decades",
        mapsUrl:
          "https://maps.google.com/?q=Hill+Street+Char+Kway+Teow+Bedok+South+Market+Singapore",
      },
      {
        name: "Hai Kee Char Kway Teow",
        address: "Toa Payoh Lorong 8 Market, #02-10",
        area: "Toa Payoh",
        note: "Beloved by heartlanders. Small portions cooked to order with serious wok hei",
        mapsUrl:
          "https://maps.google.com/?q=Toa+Payoh+Lorong+8+Market+Char+Kway+Teow+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 5,
      messFactor: 3,
      flavourDepth: 10,
      queueGame: 9,
      shiokValue: 9,
    },
  },
  {
    name: "Hainanese Chicken Rice",
    slug: "hainanese-chicken-rice",
    category: "Singaporean Classics",
    description:
      "Hainanese chicken rice began with Hainanese cooks who adapted Wenchang chicken for colonial Singapore and Malaya: poached chicken, fragrant rice cooked in chicken fat and pandan, and a triumvirate of sauces—chilli, ginger, dark soy. It became the city-state's unofficial national dish because it is comforting, precise, and everywhere—from coffee shops to Michelin-listed stalls. Hawker centres guard family recipes for broth, timing of the ice bath that gives silky skin, and the exact aroma of the rice. That devotion is why chicken rice sits at the heart of Singapore's UNESCO-recognised hawker culture: technical skill, modest prices, and deep community memory.",
    origin:
      "Hainanese immigrants refined a Hainan-style poached chicken for Southeast Asian palates; Singapore and Malaysia both claim singular 'best' versions.",
    whereToFind:
      "Maxwell Food Centre, Chinatown Complex, and Serangoon Gardens hawker clusters are pilgrimage sites; many neighbourhoods have a 20-year stall locals won't trade away.",
    priceRange: "S$4–25 depending on stall and cut",
    imageUrl:
      "https://images.pexels.com/photos/6990118/pexels-photo-6990118.jpeg",
    funFact:
      "Singapore's hawker chicken rice stalls often judge quality by rice first—aromatic, separate grains, and gentle chicken flavour before you even touch the meat.",
    bestPairedWith:
      "A clear chicken broth bowl, blanched greens with oyster sauce, and extra lime-chilli dip.",
    halal: true,
    spiceLevel: "None 😌",
    difficulty: "Easy to eat",
    localSay:
      "This one cannot anyhow eat — must find the uncle who been cooking 30 years already.",
    hawkersThatServeIt: [
      "maxwell-food-centre",
      "toa-payoh-lorong-8-market",
      "tampines-round-market",
    ],
    howToEat: [
      "Smell the rice first — good chicken rice is fragrant with pandan and chicken fat even before you eat",
      "Mix all three sauces (chilli, ginger, dark soy) separately on the plate, not together",
      "Taste the rice on its own before adding anything — a great stall's rice needs no sauce",
      "Dip each piece of chicken into your preferred sauce rather than pouring it over",
      "Sip the clear broth between bites to cleanse the palate",
    ],
    keyIngredients: [
      {
        name: "Poached Chicken",
        emoji: "🍗",
        role: "Silky and pale — cooked in a precise broth then plunged into ice water for that glossy, smooth skin",
      },
      {
        name: "Chicken Fat Rice",
        emoji: "🍚",
        role: "Rice cooked in chicken fat and pandan leaf. Locals say this is where the stall's skill really shows",
      },
      {
        name: "Chilli Sauce",
        emoji: "🌶️",
        role: "Bright, garlicky, and vinegary — not just heat. Every stall guards their recipe fiercely",
      },
      {
        name: "Ginger Paste",
        emoji: "🫚",
        role: "Fresh-grated and oily — cuts through the richness of the chicken fat with a clean zing",
      },
      {
        name: "Dark Soy",
        emoji: "🫙",
        role: "Thick and sweet — drizzled over the chicken for colour and caramel depth",
      },
      {
        name: "Pandan Leaf",
        emoji: "🌿",
        role: "Cooked into the rice for a subtle, almost floral fragrance that makes Singapore chicken rice distinct",
      },
    ],
    bestStalls: [
      {
        name: "Tian Tian Hainanese Chicken Rice",
        address: "Maxwell Food Centre, #01-10/11, 1 Kadayanallur St",
        area: "Tanjong Pagar",
        note: "Michelin Bib Gourmand. The most photographed chicken rice in Singapore — queue by 11am",
        mapsUrl:
          "https://maps.google.com/?q=Tian+Tian+Hainanese+Chicken+Rice+Maxwell+Food+Centre+Singapore",
      },
      {
        name: "Ah Tai Hainanese Chicken Rice",
        address: "Maxwell Food Centre, #01-07, 1 Kadayanallur St",
        area: "Tanjong Pagar",
        note: "Former Tian Tian chef — many locals actually prefer this one. Shorter queue too",
        mapsUrl:
          "https://maps.google.com/?q=Ah+Tai+Hainanese+Chicken+Rice+Maxwell+Food+Centre+Singapore",
      },
      {
        name: "Boon Tong Kee",
        address: "399/401 Balestier Road",
        area: "Balestier",
        note: "Restaurant-style with bigger portions and consistent quality. Great for groups",
        mapsUrl:
          "https://maps.google.com/?q=Boon+Tong+Kee+Chicken+Rice+Balestier+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 2,
      messFactor: 1,
      flavourDepth: 7,
      queueGame: 9,
      shiokValue: 10,
    },
  },
  {
    name: "Laksa",
    slug: "laksa",
    category: "Peranakan (Nyonya)",
    description:
      "Singapore laksa usually refers to Katong-style laksa: coconut curry broth, rice vermicelli cut short for spoon-only eating, fish cake, cockles, and Vietnamese coriander (daun kesum). Peranakan kitchens merged Chinese noodles with Malay spices and rempah, producing a creamy, fiery bowl that encodes centuries of intermarriage and trade. Hawkers still pound paste by hand in some stalls; others guard slow-simmered broth that tastes of lemongrass, dried shrimp, and patience. UNESCO's hawker listing honours dishes like laksa where migrant histories are simmered into something unmistakably Singaporean.",
    origin:
      "Peranakan Nyonya laksa along the Straits, influenced by Malay, Indonesian, and Chinese coastal cooking.",
    whereToFind:
      "Katong and Joo Chiat for the coconut curry style; Sungei Road and Marine Parade hawker centres for neighbourhood favourites. Early hours mean fresher rempah in some spots.",
    priceRange: "S$4–10 per bowl",
    imageUrl:
      "https://images.pexels.com/photos/32107041/pexels-photo-32107041.jpeg",
    funFact:
      "Traditional Katong laksa is eaten with only a spoon—the noodles are snipped short so you never fish awkwardly in public.",
    bestPairedWith:
      "Otak-otak on the side, sambal spooned in slowly, and a lime cordial or teh peng.",
    halal: true,
    spiceLevel: "Hot 🌶️🌶️🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Katong laksa no need chopsticks one — spoon only, that's the rule lah.",
    hawkersThatServeIt: [
      "geylang-serai-market",
      "old-airport-road-food-centre",
      "tiong-bahru-market",
    ],
    howToEat: [
      "Use only a spoon — Katong laksa noodles are pre-cut short for exactly this reason",
      "Stir the broth from the bottom before eating — the thick coconut cream sinks",
      "Add sambal gradually; the broth is already spicy and it sneaks up on you",
      "Eat the cockles early before they get too soaked and lose their bite",
      "Tear a piece of otak-otak in between spoonfuls for the ultimate Katong combo",
    ],
    keyIngredients: [
      {
        name: "Rempah",
        emoji: "🌶️",
        role: "The spice paste — lemongrass, galangal, dried shrimp, candlenut — pounded by hand in the best stalls",
      },
      {
        name: "Coconut Milk",
        emoji: "🥥",
        role: "Makes the broth creamy and rich. The ratio of coconut to spice defines each stall's signature",
      },
      {
        name: "Daun Kesum",
        emoji: "🌿",
        role: "Vietnamese coriander — a sharp, peppery herb that cuts through the richness and is essential to Katong laksa",
      },
      {
        name: "Cockles",
        emoji: "🦪",
        role: "Half-cooked in the hot broth — slightly briny and tender. The freshness test for any laksa stall",
      },
      {
        name: "Fish Cake",
        emoji: "🐟",
        role: "Sliced thin — adds a springy, mild contrast to the intense broth",
      },
      {
        name: "Bee Hoon",
        emoji: "🍜",
        role: "Rice vermicelli, pre-cut short — the reason Katong laksa is eaten with a spoon, not chopsticks",
      },
    ],
    bestStalls: [
      {
        name: "328 Katong Laksa",
        address: "216 East Coast Road",
        area: "Katong",
        note: "The most famous laksa in Singapore. Gordon Ramsay once arm-wrestled the owner over the recipe",
        mapsUrl:
          "https://maps.google.com/?q=328+Katong+Laksa+East+Coast+Road+Singapore",
      },
      {
        name: "Sungei Road Laksa",
        address: "Jalan Berseh Food Centre, #01-100, 166 Jalan Besar",
        area: "Jalan Besar",
        note: "Charcoal-fired and under S$4 a bowl. One of the last truly old-school laksa stalls in Singapore",
        mapsUrl:
          "https://maps.google.com/?q=Sungei+Road+Laksa+Jalan+Berseh+Food+Centre+Singapore",
      },
      {
        name: "Marine Parade Laksa",
        address: "Marine Parade Food Centre, #01-19, 76 Marine Parade Central",
        area: "Marine Parade",
        note: "Neighbourhood favourite with a loyal local following — no tourist queues, all flavour",
        mapsUrl:
          "https://maps.google.com/?q=Marine+Parade+Laksa+Food+Centre+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 8,
      messFactor: 6,
      flavourDepth: 9,
      queueGame: 7,
      shiokValue: 9,
    },
  },
  {
    name: "Ice Kachang",
    slug: "ice-kachang",
    category: "Singaporean Classics",
    description:
      "Ice kachang (ABC in Malaysia) turns the tropics into dessert: shaved ice mound, syrups, jellies, red beans, corn, attap chee, and often evaporated milk. It grew from simple ice balls sold by street vendors into rainbow towers assembled at hawker drink stalls. Each layer is a memory of migration—adzuki from East Asia, pandan and rose from the region, corn and jelly from trade routes. On humid afternoons, ice kachang is collective relief; UNESCO's recognition of hawker culture includes these sweet stalls that anchor neighbourhoods as much as savoury cooks do.",
    origin:
      "Southeast Asian shaved ice desserts combining Chinese red bean traditions with Malay and Nonya toppings.",
    whereToFind:
      "Old Airport Road Food Centre, Chinatown Complex dessert stalls, and classic heartland hawker drink shops with long queues after school.",
    priceRange: "S$2–5",
    imageUrl:
      "https://images.pexels.com/photos/5870643/pexels-photo-5870643.jpeg",
    funFact:
      "The name bundles \"ice\" with kachang (Malay for beans)—red beans remain the soul ingredient under all that colour.",
    bestPairedWith:
      "Curry puff or goreng pisang afterwards if you like sweet-savoury contrast—or share a bowl after spicy noodles.",
    halal: true,
    spiceLevel: "None 😌",
    difficulty: "Easy to eat",
    localSay:
      "Eat until shiok, then regret because finish already. Order another one lah!",
    hawkersThatServeIt: [
      "newton-food-centre",
      "maxwell-food-centre",
      "bedok-interchange-hawker-centre",
    ],
    howToEat: [
      "Dig from the top down — don't mix everything at once or the ice goes flat and watery",
      "Pour the evaporated milk yourself, slowly, so it seeps into the ice rather than pooling at the bottom",
      "Find the attap chee (palm seed) hidden near the base — chewy, slightly sweet, and easy to miss",
      "Eat fast — shaved ice melts quickly in Singapore's heat and becomes a sad sweet soup",
      "Order after a spicy meal. The contrast with laksa or CKT is genuinely one of life's pleasures",
    ],
    keyIngredients: [
      {
        name: "Shaved Ice",
        emoji: "🧊",
        role: "The foundation — must be shaved fine, not crushed. Coarse ice is a red flag at any stall",
      },
      {
        name: "Red Beans",
        emoji: "🫘",
        role: "Slow-cooked adzuki — the soul of ice kachang. Buried at the base like a reward",
      },
      {
        name: "Attap Chee",
        emoji: "🌴",
        role: "Translucent palm seeds with a subtle sweetness and slippery chew — a uniquely Southeast Asian ingredient",
      },
      {
        name: "Rose Syrup",
        emoji: "🌹",
        role: "The bright pink drizzle. Floral, sweet, and responsible for half the Instagram shots",
      },
      {
        name: "Evaporated Milk",
        emoji: "🥛",
        role: "Poured over the top — adds creamy richness and slows the ice from melting too fast",
      },
      {
        name: "Grass Jelly",
        emoji: "⬛",
        role: "Bitter, cooling, and slightly herbal — the grown-up ingredient that balances all the sweetness",
      },
    ],
    bestStalls: [
      {
        name: "Jin Jin Dessert",
        address: "Old Airport Road Food Centre, #01-38, 51 Old Airport Rd",
        area: "Kallang",
        note: "Legendary stall with towering portions and a loyal queue. The durian ice kachang is a must-try",
        mapsUrl:
          "https://maps.google.com/?q=Jin+Jin+Dessert+Old+Airport+Road+Food+Centre+Singapore",
      },
      {
        name: "Mei Heong Yuen Dessert",
        address: "67-69 Temple Street, Chinatown",
        area: "Chinatown",
        note: "Traditional dessert shop in the heart of Chinatown — generous toppings and old-school charm",
        mapsUrl:
          "https://maps.google.com/?q=Mei+Heong+Yuen+Dessert+Temple+Street+Chinatown+Singapore",
      },
      {
        name: "Selera Rasa Ice Kachang",
        address: "Adam Road Food Centre, #01-02, 2 Adam Road",
        area: "Bukit Timah",
        note: "No-frills and neighbourhood-loved — the kind of stall regulars visit twice a week",
        mapsUrl:
          "https://maps.google.com/?q=Adam+Road+Food+Centre+Ice+Kachang+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 0,
      messFactor: 5,
      flavourDepth: 5,
      queueGame: 4,
      shiokValue: 10,
    },
  },
  {
    name: "Kaya Toast",
    slug: "kaya-toast",
    category: "Singaporean Classics",
    description:
      "Kaya toast is breakfast diplomacy: charcoal-grilled thin bread, cold butter slabs, and kaya—a slow-cooked jam of coconut milk, eggs, and pandan or caramel sugar. Hainanese kopitiams popularised the set with soft-boiled eggs and kopi, creating a ritual as recognisable as any landmark. The spread encodes British colonial bread-and-jam habits filtered through Hainanese apprenticeship in European hotels. Today, UNESCO-framed hawker culture isn't only about full meals; it's about these affordable, daily rituals in coffeeshop cubicles where three languages cross at one table.",
    origin:
      "Hainanese-run kopitiams in Malaya and Singapore, blending local coconut jam with Anglo-Chinese breakfast service.",
    whereToFind:
      "Ya Kun and Killiney-style chains, plus independent kopitiams in Tanjong Pagar, Tiong Bahru, and heartland void-deck coffee shops serving sets till mid-morning.",
    priceRange: "S$2–6 for toast set with eggs and drink",
    imageUrl: "https://i.ibb.co/pvKLjXTJ/kaya-toast.jpg",
    funFact:
      "Purists argue over Hainanese crisp toast versus softer white; both camps dunk fingers of toast into wobbly eggs seasoned with dark soy and white pepper.",
    bestPairedWith:
      "Kopi si or teh, soft-boiled eggs, and sometimes a light chee cheong fun on the side.",
    halal: false,
    spiceLevel: "None 😌",
    difficulty: "Easy to eat",
    localSay:
      "Soft boiled egg must be half done — if fully cooked, uncle confirm kena scold.",
    hawkersThatServeIt: [
      "maxwell-food-centre",
      "tiong-bahru-market",
      "amoy-street-food-centre",
    ],
    howToEat: [
      "Order kopi (coffee) or teh (tea) first — it arrives hot and sets the pace of the meal",
      "Crack both soft-boiled eggs into the small saucer; they should be barely set, still wobbly",
      "Season the eggs with a few drops of dark soy sauce and a shake of white pepper",
      "Break a finger of toast and dip it into the eggs — this is the whole point",
      "Alternate between toast-and-egg bites and sips of kopi. Do not rush this ritual",
    ],
    keyIngredients: [
      {
        name: "Kaya",
        emoji: "🍯",
        role: "Coconut and egg jam slow-cooked with pandan. Green kaya is more floral; brown kaya is caramel-rich — both are correct",
      },
      {
        name: "Charcoal Bread",
        emoji: "🍞",
        role: "Thin white bread toasted over charcoal — the char gives a faint smokiness you can't get from a toaster",
      },
      {
        name: "Cold Butter",
        emoji: "🧈",
        role: "Sliced thick and placed between warm toast so it half-melts. The temperature contrast is deliberate",
      },
      {
        name: "Soft-Boiled Eggs",
        emoji: "🥚",
        role: "Cooked for exactly 6–7 minutes. The white should just set; the yolk stays runny and golden",
      },
      {
        name: "Dark Soy",
        emoji: "🫙",
        role: "A few drops on the soft eggs — adds saltiness and depth to balance the sweet kaya",
      },
      {
        name: "Kopi",
        emoji: "☕",
        role: "Robusta beans roasted in butter and sugar, brewed strong. The bitterness is the counterpoint to the sweet toast",
      },
    ],
    bestStalls: [
      {
        name: "Tong Ah Eating House",
        address: "35 Keong Saik Road",
        area: "Tanjong Pagar",
        note: "One of Singapore's oldest kopitiams — charcoal-toasted bread and kopitiam that feels unchanged since 1939",
        mapsUrl:
          "https://maps.google.com/?q=Tong+Ah+Eating+House+Keong+Saik+Road+Singapore",
      },
      {
        name: "Killiney Kopitiam",
        address: "67 Killiney Road",
        area: "Somerset",
        note: "The original 1919 outlet — queue down the street on weekends. The kaya here is still made in-house",
        mapsUrl:
          "https://maps.google.com/?q=Killiney+Kopitiam+Killiney+Road+Singapore",
      },
      {
        name: "Ya Kun Kaya Toast",
        address: "Far East Square, #01-01, 18 China Street",
        area: "CBD",
        note: "The most accessible option with consistent quality — good entry point if it's your first time",
        mapsUrl:
          "https://maps.google.com/?q=Ya+Kun+Kaya+Toast+Far+East+Square+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 0,
      messFactor: 2,
      flavourDepth: 6,
      queueGame: 5,
      shiokValue: 10,
    },
  },
  {
    name: "Chilli Crab",
    slug: "chilli-crab",
    category: "Singaporean Classics",
    description:
      "Chilli crab is Singapore's theatrical seafood icon: mud crabs in a tomato-chilli-egg gravy sweet, spicy, and sticky enough to demand mantou for mopping. Often credited to 1950s street vendors who pushed the recipe from simpler profiles toward the lush sauce we know, the dish is now served everywhere from zi char stalls to white-tablecloth rooms. It embodies port-city abundance—crabs from regional waters, sauces from Chinese technique and Malay chilli sensibility. Hawker and zi char heritage keeps the dish in reach of ordinary celebrations, aligning with UNESCO's spotlight on living food traditions tied to community life.",
    origin:
      "Mid-20th-century Singapore, with Hokkien and Teochew zi char cooks refining sweet-spicy gravies for crab.",
    whereToFind:
      "East Coast Seafood Centre for the breezy classic experience; Joo Chiat and Geylang zi char alleys; quality hawker zi char that still steams mantou to order.",
    priceRange: "S$40–90+ per crab depending on season and venue",
    imageUrl: "https://i.ibb.co/5xTkxsK2/Chilli-Crab-Jelco.jpg",
    funFact:
      "The sauce's silkiness often comes from eggs ribboned in at the last moment—timing separates pool-worthy gravy from overcooked curds.",
    bestPairedWith:
      "Fried mantou, fragrant steamed rice, and a lime juice or cold beer to balance the heat.",
    halal: false,
    spiceLevel: "Hot 🌶️🌶️🌶️",
    difficulty: "Adventure eat",
    localSay:
      "Wear old clothes lah — this one confirm get sauce everywhere one.",
    hawkersThatServeIt: [
      "newton-food-centre",
      "lau-pa-sat",
      "east-coast-lagoon",
    ],
    howToEat: [
      "Wear something you don't mind staining — no amount of napkins will protect you entirely",
      "Order fried mantou to mop the gravy — this is not optional, it is the law",
      "Use your hands for the crab; tools are available but locals go bare-handed for better grip",
      "Crack the claws first — they hold the sweetest, juiciest meat and are easiest to tackle",
      "Soak the last mantou in the remaining gravy at the end. The best bite of the whole meal",
    ],
    keyIngredients: [
      {
        name: "Mud Crab",
        emoji: "🦀",
        role: "Sri Lankan or local mud crab — meaty, sweet, and large enough to justify the mess and the price",
      },
      {
        name: "Tomato Sauce",
        emoji: "🍅",
        role: "The base that gives the gravy its sweet tang and bright red colour — less Western than it sounds",
      },
      {
        name: "Chilli & Sambal",
        emoji: "🌶️",
        role: "Blended fresh and fried — gives the gravy its heat without overpowering the crab's natural sweetness",
      },
      {
        name: "Egg",
        emoji: "🥚",
        role: "Ribboned in at the very end to create silky threads through the sauce — the technique that separates good from great",
      },
      {
        name: "Fried Mantou",
        emoji: "🍞",
        role: "Deep-fried Chinese buns — pillowy inside, crispy outside. Designed to absorb every last drop of gravy",
      },
      {
        name: "Taucheo",
        emoji: "🫙",
        role: "Fermented soybean paste — adds depth and a faint umami funk to the sauce that you taste but can't identify",
      },
    ],
    bestStalls: [
      {
        name: "Jumbo Seafood",
        address: "East Coast Seafood Centre, #01-07/08, 1206 East Coast Pkwy",
        area: "East Coast",
        note: "The definitive chilli crab experience — seaside setting, generous portions, and consistently excellent sauce",
        mapsUrl:
          "https://maps.google.com/?q=Jumbo+Seafood+East+Coast+Seafood+Centre+Singapore",
      },
      {
        name: "Long Beach Seafood",
        address: "1018 East Coast Pkwy",
        area: "East Coast",
        note: "Claims to have invented the black pepper crab — their chilli crab is equally legendary among locals",
        mapsUrl:
          "https://maps.google.com/?q=Long+Beach+Seafood+East+Coast+Parkway+Singapore",
      },
      {
        name: "No Signboard Seafood",
        address: "414 Geylang Road",
        area: "Geylang",
        note: "Started as a zi char pushcart with no name. Now a local institution with a famous white pepper crab too",
        mapsUrl:
          "https://maps.google.com/?q=No+Signboard+Seafood+Geylang+Road+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 7,
      messFactor: 10,
      flavourDepth: 9,
      queueGame: 6,
      shiokValue: 4,
    },
  },
  {
    name: "Rojak",
    slug: "rojak",
    category: "Singaporean Classics",
    description:
      "Rojak means \"mixture\"—here, a salad of cucumber, pineapple, you tiao, tau pok, and sometimes jambu, tossed in shrimp paste dressing, crushed peanuts, and a calculated sting of chilli. Indian rojak variants spotlight fried dough and potato with sweet turnip sauce; Chinese-style leans on hae ko and fruit acid. Singapore's hawker rojak stalls are flavour laboratories where sweet, funky, crunchy, and spicy refuse to stay separate. That pluralism mirrors the UNESCO inscription: hawker food as a living archive of coexistence and trade.",
    origin:
      "Malay-Indonesian fruit salads and Indian chaat crossed with Chinese you tiao; Singapore's stalls blend lineages on one plate.",
    whereToFind:
      "Toa Payoh and Balestier heritage hawker clusters, Old Airport Road, and famous stalls where uncles still hand-cut fruit to order.",
    priceRange: "S$4–10",
    imageUrl: "https://i.ibb.co/Dg84fk5X/rojak.jpg",
    funFact:
      "Veteran rojak masters toast you tiao to different crispness levels so some bites stay crunchy after dressing soaks in.",
    bestPairedWith:
      "Ice jelly, sugar-cane juice, or a small plate of satay to follow the bold paste.",
    halal: true,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Wah this one like Singapore lor — everything also got, everything also shiok together.",
    hawkersThatServeIt: [
      "lau-pa-sat",
      "newton-food-centre",
      "chinatown-complex-food-centre",
    ],
    howToEat: [
      "Eat immediately after tossing — the you tiao absorbs the sauce quickly and loses its crunch",
      "Make sure each forkful has a mix of fruit, you tiao, and tau pok — the contrast is the whole dish",
      "Ask for extra crushed peanuts if you want more texture — most stalls are generous if you ask",
      "The hae ko (shrimp paste) dressing is funky and strong — start with less if you're new to it",
      "Chase with sugar cane juice — the sweetness cuts through the shrimp paste perfectly",
    ],
    keyIngredients: [
      {
        name: "Hae Ko",
        emoji: "🦐",
        role: "Thick black prawn paste — pungent, funky, and salty. The ingredient that makes rojak taste like nothing else",
      },
      {
        name: "You Tiao",
        emoji: "🥖",
        role: "Chinese fried dough sticks — cut into chunks and toasted. They absorb the dressing while staying (briefly) crunchy",
      },
      {
        name: "Tau Pok",
        emoji: "🟨",
        role: "Fried tofu puffs — soft and spongy, soaking up the dressing from the inside out",
      },
      {
        name: "Pineapple & Cucumber",
        emoji: "🍍",
        role: "The fruit provides fresh, tart contrast to the heavy paste — essential for balance",
      },
      {
        name: "Crushed Peanuts",
        emoji: "🥜",
        role: "Scattered generously on top — adds crunch and a nutty richness that rounds out the dressing",
      },
      {
        name: "Chilli",
        emoji: "🌶️",
        role: "Mixed into the dressing for a background heat — not the star, but noticeable if you skip it",
      },
    ],
    bestStalls: [
      {
        name: "Lim's Rojak",
        address: "Newton Food Centre, #01-52, 500 Clemenceau Ave North",
        area: "Newton",
        note: "Generous portions and a perfectly balanced hae ko dressing — one of the most consistent rojak stalls in Singapore",
        mapsUrl:
          "https://maps.google.com/?q=Lim's+Rojak+Newton+Food+Centre+Singapore",
      },
      {
        name: "Toa Payoh Rojak",
        address: "Toa Payoh Lorong 8 Market, #02-05",
        area: "Toa Payoh",
        note: "Heartland favourite — the uncle hand-cuts every piece of fruit fresh. No shortcuts here",
        mapsUrl:
          "https://maps.google.com/?q=Toa+Payoh+Lorong+8+Market+Rojak+Singapore",
      },
      {
        name: "Katong Rojak",
        address: "Red House Seafood / Marine Parade Food Centre, 76 Marine Parade Central",
        area: "Marine Parade",
        note: "East side institution beloved by Katong locals — slightly sweeter dressing than the typical version",
        mapsUrl:
          "https://maps.google.com/?q=Marine+Parade+Food+Centre+Rojak+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 4,
      messFactor: 4,
      flavourDepth: 8,
      queueGame: 4,
      shiokValue: 9,
    },
  },
  {
    name: "Bobo Cha Cha",
    slug: "bobo-cha-cha",
    category: "Peranakan (Nyonya)",
    description:
      "Bobo cha cha is dessert soup as comfort: yam, sweet potato, tapioca pearls, and sometimes banana swimming in coconut milk sweetened gently with pandan warmth. The name's playful reduplication matches its stubby, colourful cubes—Nyonya and broader Peranakan households simmered it for festivals and family tables, and hawker dessert stalls kept it in rotation beside ice kachang. Coconut and tubers co-starring in a bowl tell Southeast Asia's agrarian story. In the UNESCO framing of hawker culture, gems like bobo cha cha prove heritage isn't only savoury staples but also the slow-simmered sweets that mark birthdays and hometown memory.",
    origin:
      "Nyonya / Straits Chinese dessert spreading via Malacca, Penang, and Singapore kitchens and dessert stalls.",
    whereToFind:
      "Peranakan restaurants in Joo Chiat, dessert-focused hawker stalls in Chinatown Complex and Maxwell, and heartland zi char that still finish meals with traditional sweets.",
    priceRange: "S$3–8",
    imageUrl: "https://i.ibb.co/FLVK9THC/Bubur-cha-cha-scaled.jpg",
    funFact:
      "Some stalls differentiate themselves with firmer yam chips versus melt-away cubes—texture debates are as serious as syrup sweetness.",
    bestPairedWith:
      "After laksa or nasi lemak for contrast, or alongside ondeh-ondeh for a full Peranakan sweet spread.",
    halal: true,
    spiceLevel: "None 😌",
    difficulty: "Easy to eat",
    localSay:
      "Ah ma used to make this every weekend — now only can find at old school hawker centres.",
    hawkersThatServeIt: [
      "geylang-serai-market",
      "tiong-bahru-market",
      "tekka-centre",
    ],
    howToEat: [
      "Stir gently from the bottom — the coconut milk and pandan syrup separate and the thickest part sinks",
      "Try a cube of yam and sweet potato together in one spoonful — the two textures were made for each other",
      "Find the tapioca pearls — they hide in the broth and have a chewy bounce that's deeply satisfying",
      "Eat warm, not hot — this is a dessert meant to be lingered over, not rushed",
      "Finish with the remaining broth by itself; good bobo cha cha broth is sweet, fragrant, and worth every drop",
    ],
    keyIngredients: [
      {
        name: "Yam (Taro)",
        emoji: "🟣",
        role: "Purple cubes with a dry, starchy texture — the most distinctive ingredient. Firmer than sweet potato and slightly earthy",
      },
      {
        name: "Sweet Potato",
        emoji: "🟠",
        role: "Orange cubes, softer and sweeter than yam — melts slightly in the broth giving it body",
      },
      {
        name: "Coconut Milk",
        emoji: "🥥",
        role: "The broth base — rich, creamy, and gently sweet. Good coconut milk makes or breaks this dessert",
      },
      {
        name: "Pandan",
        emoji: "🌿",
        role: "Tied in knots and simmered into the broth — gives a floral, almost vanilla-like fragrance",
      },
      {
        name: "Tapioca Pearls",
        emoji: "🫧",
        role: "Small, chewy, translucent balls scattered through the broth — the playful element the name hints at",
      },
      {
        name: "Banana",
        emoji: "🍌",
        role: "Added by some stalls for softness and natural sweetness — not traditional everywhere but welcome when present",
      },
    ],
    bestStalls: [
      {
        name: "Bengawan Solo",
        address: "Galleria at Raffles City, 252 North Bridge Road",
        area: "City Hall",
        note: "Singapore's most beloved Peranakan cake and dessert shop — their bobo cha cha uses proper coconut milk, not the canned kind",
        mapsUrl:
          "https://maps.google.com/?q=Bengawan+Solo+Raffles+City+Singapore",
      },
      {
        name: "Chinatown Complex Dessert Stalls",
        address: "Chinatown Complex Food Centre, 335 Smith Street",
        area: "Chinatown",
        note: "Multiple traditional dessert stalls side by side — walk the row and pick the one with the busiest queue",
        mapsUrl:
          "https://maps.google.com/?q=Chinatown+Complex+Food+Centre+Dessert+Singapore",
      },
      {
        name: "Joo Chiat Kim Choo",
        address: "109 East Coast Road",
        area: "Katong",
        note: "Peranakan heritage shop in Katong — the bobo cha cha here is made from a family recipe and tastes unmistakably homemade",
        mapsUrl:
          "https://maps.google.com/?q=Kim+Choo+Kueh+Chang+East+Coast+Road+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 0,
      messFactor: 1,
      flavourDepth: 5,
      queueGame: 3,
      shiokValue: 9,
    },
  },
  // ─── SINGAPOREAN CLASSICS ─────────────────────────────────────────
  {
    name: "Bak Chor Mee",
    slug: "bak-chor-mee",
    category: "Singaporean Classics",
    description:
      "Bak chor mee — minced pork noodles — is Singapore's most personal bowl. Every regular has a preferred stall, a preferred noodle type, and a preferred ratio of vinegar to chilli. The dish is Hokkien in origin: thin egg noodles tossed dry in a dark vinegar-lard sauce with minced pork, liver, fish cake, and braised mushrooms. The sauce is the thing — sharp, slightly sweet, pungent with pork fat and punchy with black vinegar. It is not beautiful. It is not photogenic. It is, by the consensus of people who eat seriously, one of the finest bowls Singapore produces.",
    origin:
      "Hokkien immigrant hawker cooking, evolved in Singapore's post-war street food scene — a dialect community's noodle dish that became a national obsession.",
    whereToFind:
      "Chinatown Complex, Old Airport Road Food Centre, and Toa Payoh heartland stalls — the best ones often have a handwritten sign and a 45-minute queue by 11am.",
    priceRange: "S$4–8 per bowl",
    imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
    funFact:
      "The dry version (with vinegar-lard sauce) and the soup version are completely different eating experiences — locals are fiercely loyal to one or the other and rarely cross over.",
    bestPairedWith:
      "A bowl of clear pork broth on the side, a cup of teh, and nothing else — bak chor mee demands full attention.",
    halal: false,
    spiceLevel: "Medium 🌶️🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Dry version, extra vinegar, more chilli — that's the order. Every time. No variation.",
    hawkersThatServeIt: [
      "chinatown-complex-food-centre",
      "old-airport-road-food-centre",
      "toa-payoh-lorong-8-market",
    ],
    howToEat: [
      "Order dry — the soup version is good but the vinegar-lard dry version is the one that built the reputation",
      "Mix thoroughly from the bottom before eating — the sauce pools beneath the noodles and must be coated evenly",
      "Add vinegar first, then chilli — taste after each addition rather than dumping both in together",
      "Eat the liver early while it's tender — it turns grainy if left too long in residual heat",
      "Use the side broth as a palate cleanser between bites, not a drink to finish at the end",
    ],
    keyIngredients: [
      {
        name: "Egg Noodles",
        emoji: "🍜",
        role: "Thin, springy, and slightly alkaline — they hold the vinegar sauce differently from rice noodles. The choice of noodle is the choice of stall identity.",
      },
      {
        name: "Minced Pork",
        emoji: "🥩",
        role: "Seasoned and cooked to order — loose enough to coat the noodles, not packed into dense lumps. The texture tells you how fresh it is.",
      },
      {
        name: "Black Vinegar",
        emoji: "🫙",
        role: "The defining ingredient. Sharp, slightly sweet, and completely transformative — the acid that makes the whole bowl sing.",
      },
      {
        name: "Pork Lard",
        emoji: "🫓",
        role: "Rendered and drizzled — adds richness and a deep pork fragrance. The ingredient that separates the real version from the health-conscious imitation.",
      },
      {
        name: "Braised Mushroom",
        emoji: "🍄",
        role: "Slow-braised in dark soy — earthy, silky, and slightly sweet. The contrast to the sharp vinegar sauce is deliberate and essential.",
      },
      {
        name: "Pork Liver",
        emoji: "🟤",
        role: "Sliced thin and cooked just enough — slightly pink in the centre. The ingredient that divides Singapore into two camps: those who love it and those who are wrong.",
      },
    ],
    bestStalls: [
      {
        name: "Tai Wah Pork Noodle",
        address: "Hong Lim Market & Food Centre, #02-01, 531A Upper Cross St",
        area: "Chinatown",
        note: "Michelin Bib Gourmand. The definitive bak chor mee stall — queue before 11am or prepare to wait an hour",
        mapsUrl:
          "https://maps.google.com/?q=Tai+Wah+Pork+Noodle+Hong+Lim+Market+Singapore",
      },
      {
        name: "Seng Kee Black Herbal Bak Kut Teh",
        address: "Old Airport Road Food Centre, #01-32",
        area: "Kallang",
        note: "Neighbourhood institution. The vinegar ratio here is aggressive in the best possible way",
        mapsUrl:
          "https://maps.google.com/?q=Old+Airport+Road+Food+Centre+Bak+Chor+Mee+Singapore",
      },
      {
        name: "Toa Payoh Bak Chor Mee",
        address: "Toa Payoh Lorong 8 Market, #01-08",
        area: "Toa Payoh",
        note: "Heartland classic — the uncle has been making the same sauce for thirty years and sees no reason to change",
        mapsUrl:
          "https://maps.google.com/?q=Toa+Payoh+Lorong+8+Market+Bak+Chor+Mee+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 4,
      messFactor: 2,
      flavourDepth: 8,
      queueGame: 8,
      shiokValue: 9,
    },
  },
  {
    name: "Hokkien Mee",
    slug: "hokkien-mee",
    category: "Singaporean Classics",
    description:
      "Singapore Hokkien mee is not Penang Hokkien mee — that distinction matters enormously to the people who eat both. The Singapore version is a wok-fried marriage of yellow egg noodles and white rice noodles in a rich prawn-and-pork broth, finished with sambal, calamansi, and lard. It was invented by Hokkien labourers at Rochor Road in the 1940s who cooked on charcoal over high heat and fed the dockworkers who built this city. The best versions today still carry that industrial wok energy — smoky, uncomplicated, deeply satisfying in the way that food cooked for hungry people always is.",
    origin:
      "Hokkien immigrant dock workers at Rochor Road in the 1940s — a wok dish born from practical hunger that became one of Singapore's defining plates.",
    whereToFind:
      "Newton Food Centre and East Coast Lagoon for atmosphere; Old Airport Road and Geylang for serious versions without the tourist markup. Look for charcoal-fired stalls.",
    priceRange: "S$5–10 per plate",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    funFact:
      "Traditional Hokkien mee is cooked over charcoal, not gas — the heat is more intense and uneven, which is precisely what creates the smokiness locals call wok hei.",
    bestPairedWith:
      "Sambal belacan mixed to your heat preference, calamansi halved and squeezed tableside, and a cold Yeo's soya bean drink.",
    halal: false,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Charcoal one is different. You squeeze the lime, smell the smoke — confirm different lah.",
    hawkersThatServeIt: [
      "newton-food-centre",
      "east-coast-lagoon-food-village",
      "old-airport-road-food-centre",
    ],
    howToEat: [
      "Squeeze calamansi over the entire plate before doing anything else — the acid brightens every element",
      "Mix in sambal from the side gradually — the dish is already flavoured, the sambal adds heat not salt",
      "Combine yellow and white noodles in each forkful — they have different textures and were designed to be eaten together",
      "Eat while hot — the prawn broth absorbed into the noodles becomes gummy and dull when cold",
      "Request extra lard if the stall offers it — the rendered fat adds a fragrance that nothing else replicates",
    ],
    keyIngredients: [
      {
        name: "Yellow Egg Noodles",
        emoji: "🍜",
        role: "Springy and slightly alkaline — they absorb the prawn broth differently from the rice noodles and create textural contrast in every bite.",
      },
      {
        name: "Bee Hoon",
        emoji: "🍝",
        role: "White rice vermicelli cooked alongside — softer, more delicate, and designed to soak up more broth than the egg noodles.",
      },
      {
        name: "Prawn Broth",
        emoji: "🍤",
        role: "Reduced from prawn heads and shells until deeply caramelised — the backbone of the dish. Good Hokkien mee is mostly about this broth.",
      },
      {
        name: "Pork Lard & Crackling",
        emoji: "🫓",
        role: "Rendered fat drizzled over, crispy bits scattered on top — the finish that connects the dish to its working-class Hokkien origins.",
      },
      {
        name: "Sambal Belacan",
        emoji: "🌶️",
        role: "Shrimp paste chilli on the side — funky, fiery, and designed to be added incrementally rather than dumped all at once.",
      },
      {
        name: "Calamansi",
        emoji: "🍋",
        role: "Small local citrus — more fragrant and less sharp than lime. Squeezed tableside, it cuts through the richness of the lard and broth.",
      },
    ],
    bestStalls: [
      {
        name: "Nam Sing Hokkien Fried Mee",
        address: "Old Airport Road Food Centre, #01-32, 51 Old Airport Rd",
        area: "Kallang",
        note: "Michelin Bib Gourmand. Charcoal-fired with a prawn broth that has been running since the 1970s — the benchmark version",
        mapsUrl:
          "https://maps.google.com/?q=Nam+Sing+Hokkien+Mee+Old+Airport+Road+Food+Centre+Singapore",
      },
      {
        name: "Geylang Lor 29 Hokkien Mee",
        address: "396 East Coast Road",
        area: "Geylang",
        note: "Night market energy, charcoal heat, massive portions — the version that serious eaters make the trip for",
        mapsUrl:
          "https://maps.google.com/?q=Geylang+Lor+29+Hokkien+Mee+Singapore",
      },
      {
        name: "Tian Tian Lai Fried Hokkien Mee",
        address: "Newton Food Centre, #01-05, 500 Clemenceau Ave North",
        area: "Newton",
        note: "Generous portions and a properly reduced broth — the accessible version that first-timers can find easily",
        mapsUrl:
          "https://maps.google.com/?q=Newton+Food+Centre+Hokkien+Mee+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 3,
      messFactor: 3,
      flavourDepth: 9,
      queueGame: 8,
      shiokValue: 9,
    },
  },
  {
    name: "Wanton Mee",
    slug: "wanton-mee",
    category: "Singaporean Classics",
    description:
      "Wanton mee is Singapore's most democratic noodle: available everywhere, priced for everyone, and done properly at thousands of stalls without any of them becoming famous for it. Thin egg noodles — springy and slightly smoky from the lard — are tossed in a char siew sauce and served with char siew slices, wanton dumplings either fried or in soup, and a scattering of vegetables. It is Cantonese in origin and Singaporean in execution. The char siew is the thing to judge each stall by: properly caramelised, lacquered at the edges, never dry. A great wanton mee stall is one you find close to home and protect quietly.",
    origin:
      "Cantonese noodle tradition brought by Guangdong immigrants — wanton mee in Singapore evolved a distinctive local char siew sauce that separates it from Hong Kong versions.",
    whereToFind:
      "Every hawker centre in Singapore has a wanton mee stall. The best ones are never the most famous. Find your neighbourhood uncle and stay loyal.",
    priceRange: "S$3.50–7 per plate",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    funFact:
      "Singapore wanton mee uses a darker, sweeter char siew sauce than the Hong Kong or Malaysian versions — a local adaptation that happened quietly over decades and is now considered the standard.",
    bestPairedWith:
      "A bowl of wanton soup on the side, a cup of kopi-o, and a folded newspaper. This is a breakfast ritual, not just a meal.",
    halal: false,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "The char siew must be slightly burnt at the edges — if it's pale, the uncle never heated the oven right.",
    hawkersThatServeIt: [
      "amoy-street-food-centre",
      "tiong-bahru-market",
      "tampines-round-market",
    ],
    howToEat: [
      "Order dry — the sauce-tossed version shows the char siew quality better than the soup version",
      "Mix immediately when it arrives — the sauce at the bottom of the bowl firms up quickly if left",
      "Taste the char siew on its own first to judge the stall's technique before you mix everything together",
      "Add chilli sauce sparingly — wanton mee has a balanced flavour profile and too much chilli dominates it",
      "If you get soup wantons on the side, dip them into the dry noodle sauce — the combination is better than either alone",
    ],
    keyIngredients: [
      {
        name: "Egg Noodles",
        emoji: "🍜",
        role: "Thin, springy, and alkaline — must be blanched briefly and tossed immediately. Overcooked wanton mee noodles are a hawker's cardinal sin.",
      },
      {
        name: "Char Siew",
        emoji: "🍖",
        role: "BBQ pork — roasted until the edges lacquer and slightly char. The quality of the char siew is the entire judgement of any wanton mee stall.",
      },
      {
        name: "Char Siew Sauce",
        emoji: "🫙",
        role: "Dark, sweet, and slightly smoky — the sauce the noodles are tossed in. Singapore's version is darker and richer than the Cantonese original.",
      },
      {
        name: "Wanton Dumplings",
        emoji: "🥟",
        role: "Thin-skinned parcels of minced pork and prawn — served fried (crispy) or in soup (silky). Both are correct. Ordering both is encouraged.",
      },
      {
        name: "Pork Lard",
        emoji: "🫓",
        role: "Drizzled over the finished plate — fragrant and essential. The ingredient health menus removed and regulars quietly mourn.",
      },
      {
        name: "Chye Sim",
        emoji: "🥬",
        role: "Blanched Chinese mustard greens — adds colour and a slight bitterness that cuts through the sweetness of the char siew sauce.",
      },
    ],
    bestStalls: [
      {
        name: "Hua Kee Wanton Noodle",
        address: "Amoy Street Food Centre, #01-40, 7 Maxwell Rd",
        area: "Tanjong Pagar",
        note: "Michelin Bib Gourmand. The char siew here is consistently the best in the CBD — lacquered edges, tender centre, no exceptions",
        mapsUrl:
          "https://maps.google.com/?q=Hua+Kee+Wanton+Noodle+Amoy+Street+Food+Centre+Singapore",
      },
      {
        name: "Fei Fei Wanton Mee",
        address: "Jurong West 505 Market & Food Centre, #01-29",
        area: "Jurong West",
        note: "West Singapore institution — char siew roasted in-house daily. Locals have been coming since the 1980s",
        mapsUrl:
          "https://maps.google.com/?q=Fei+Fei+Wanton+Mee+Jurong+West+Singapore",
      },
      {
        name: "Kok Kee Wonton Noodle",
        address: "Lavender Food Square, 380 Jalan Besar",
        area: "Jalan Besar",
        note: "Old-school Cantonese style with a broth that is simmered for hours. The soup wanton version here is exceptional",
        mapsUrl:
          "https://maps.google.com/?q=Kok+Kee+Wonton+Noodle+Lavender+Food+Square+Singapore",
      },
    ],
    shiokOMeter: {
      spiceHit: 2,
      messFactor: 1,
      flavourDepth: 7,
      queueGame: 5,
      shiokValue: 9,
    },
  },
  {
    name: "Economy Rice",
    slug: "economy-rice",
    category: "Singaporean Classics",
    description:
      "Economy rice — cai fan in Hokkien, mixed rice in plain English — is the most democratic meal Singapore produces. White rice, a selection of cooked dishes from a display counter, a total that rarely exceeds five dollars. You point. The auntie scoops. You pay by how many dishes you chose. The format is Chinese in origin, the selection is entirely Singaporean: braised pork belly sits next to curry chicken sits next to sambal kangkong sits next to luncheon meat. Economy rice is where Singapore eats without thinking about it. It is the meal that construction workers, office directors, schoolchildren, and retirees all eat from the same counter without any ceremony whatsoever.",
    origin:
      "Chinese cai fan (菜饭) tradition adapted by Singaporean hawkers into a multi-dialect, multi-cuisine mixed rice format unique to the island.",
    whereToFind:
      "Every hawker centre in Singapore. Economy rice is not a destination dish — it is a daily constant. The best stall is the one nearest to where you are at noon.",
    priceRange: "S$2.50–5 depending on dishes chosen",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    funFact:
      "The pricing at economy rice stalls is entirely discretionary — the auntie calculates the total in her head based on what she sees on your plate, and she is never wrong.",
    bestPairedWith:
      "A bowl of soup from the same stall (usually free or S$0.50), a cold packet drink, and absolutely no menu.",
    halal: false,
    spiceLevel: "None 😌",
    difficulty: "Easy to eat",
    localSay:
      "Point faster — the auntie is waiting and the lunch queue behind you has no patience.",
    hawkersThatServeIt: [
      "maxwell-food-centre",
      "chinatown-complex-food-centre",
      "toa-payoh-lorong-8-market",
    ],
    howToEat: [
      "Scan the entire counter before pointing — the dishes at the back are often the best and get missed by people who point too early",
      "Always get at least one vegetable dish — the auntie notices and approves, and the vegetables are often the best thing on the counter",
      "Ask for more gravy (lǔ) over your rice — it's always free and always makes the meal better",
      "Mix everything together rather than eating each dish separately — economy rice is designed to be eaten as a unified plate",
      "Come before 12:30pm — the best dishes sell out and what's left after 1pm is what nobody chose",
    ],
    keyIngredients: [
      {
        name: "White Rice",
        emoji: "🍚",
        role: "The base — should be fluffy and slightly warm. A good economy rice stall never serves cold, hard rice.",
      },
      {
        name: "Braised Pork Belly",
        emoji: "🥩",
        role: "The most requested dish at any economy rice stall — slow-braised in dark soy until the fat turns silky and the meat pulls apart.",
      },
      {
        name: "Sambal Kangkong",
        emoji: "🥬",
        role: "Water spinach wok-fried with sambal belacan — one of the great vegetable dishes of the hawker world. Better than it has any right to be.",
      },
      {
        name: "Curry Chicken",
        emoji: "🍗",
        role: "Slow-cooked in a coconut curry — the sauce is the point. Poured over rice, it makes the entire plate worth eating.",
      },
      {
        name: "Braised Egg",
        emoji: "🥚",
        role: "Slow-cooked in dark soy until the white firms and the yolk turns jammy. S$0.50 and worth every cent.",
      },
      {
        name: "Luncheon Meat",
        emoji: "🥫",
        role: "Fried slices of SPAM — beloved, unpretentious, and the choice of everyone who stopped pretending to be health-conscious at lunch.",
      },
    ],
    bestStalls: [
      {
        name: "Zi Char Economy Rice",
        address: "Chinatown Complex Food Centre, 335 Smith Street",
        area: "Chinatown",
        note: "One of the largest selections in Singapore — over 40 dishes daily. The braised pork belly here has been the same recipe since 1985",
        mapsUrl:
          "https://maps.google.com/?q=Chinatown+Complex+Food+Centre+Economy+Rice+Singapore",
      },
      {
        name: "Ah Xiao Teochew Braised Duck",
        address: "Old Airport Road Food Centre, #01-07",
        area: "Kallang",
        note: "Technically braised duck rice but essentially economy rice done at its absolute peak. The braised eggs alone are worth the trip",
        mapsUrl:
          "https://maps.google.com/?q=Ah+Xiao+Teochew+Braised+Duck+Old+Airport+Road+Singapore",
      },
      {
        name: "ABC Market Economy Rice",
        address: "ABC Brickworks Market, 6 Jalan Bukit Merah",
        area: "Bukit Merah",
        note: "Neighbourhood standard — the selection changes daily and the regulars know which days have the best pork belly",
        mapsUrl:
          "https://maps.google.com/?q=ABC+Brickworks+Market+Economy+Rice+Singapore",
      },
    ],
    shiokOMeter: { spiceHit: 2, messFactor: 1, flavourDepth: 6, queueGame: 5, shiokValue: 10 },
  },
  {
    name: "Satay",
    slug: "satay",
    category: "Singaporean Classics",
    description:
      "Satay is Singapore's most sociable dish — you don't eat it alone, you don't eat it quietly, and you don't eat it fast. Skewers of marinated beef, chicken, or mutton grilled over real charcoal until the edges catch and caramelise, served with a thick, slightly sweet peanut sauce, ketupat (compressed rice), raw onion, and cucumber. The dish arrived with Malay and Javanese hawkers who set up charcoal grills along the Singapore River in the 1940s. Today the smoke from the satay stalls at Lau Pa Sat and Newton still carries that history. The formula has not changed because it does not need to.",
    origin:
      "Malay and Javanese street food traditions carried to Singapore by immigrant communities in the early 20th century — satay's roots stretch from Java to the Malay peninsula.",
    whereToFind:
      "Lau Pa Sat's Boon Tat Street after 7pm for the most cinematic setting; Newton Food Centre for tourist-friendly portions; East Coast Lagoon for the sea-breeze version.",
    priceRange: "S$0.60–1 per skewer, minimum 10 skewers usually",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    funFact:
      "The peanut sauce at serious satay stalls is made fresh daily from roasted peanuts — you can tell by the texture, which should be thick and slightly grainy, never smooth.",
    bestPairedWith:
      "Cold beer or lime juice, ketupat dipped in peanut sauce, and raw cucumber and onion between skewers to cleanse the palate.",
    halal: true,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Minimum ten skewers. You always think ten is enough. It is never enough.",
    hawkersThatServeIt: [
      "lau-pa-sat",
      "newton-food-centre",
      "east-coast-lagoon-food-village",
    ],
    howToEat: [
      "Order minimum 20 skewers if eating with two people — ten never feels like enough once the charcoal smell hits",
      "Dip in peanut sauce, then drag through the raw onion and cucumber before each bite",
      "Squeeze the peanut sauce onto the ketupat rather than eating them separately",
      "Mix beef and chicken skewers in the same order — the flavours complement each other rather than compete",
      "Ask for extra peanut sauce — most stalls charge a small amount but it's always worth it",
    ],
    keyIngredients: [
      {
        name: "Marinated Meat",
        emoji: "🍖",
        role: "Chicken, beef, or mutton marinated in turmeric, lemongrass, galangal, and sugar — the marinade determines the colour and the caramelisation on the grill.",
      },
      {
        name: "Peanut Sauce",
        emoji: "🥜",
        role: "Ground roasted peanuts with coconut milk, shallots, lemongrass, and a hit of chilli — thick, slightly sweet, and the whole reason satay works.",
      },
      {
        name: "Charcoal Grill",
        emoji: "🔥",
        role: "Not a technique — a requirement. Gas-grilled satay exists; serious eaters ignore it. The charcoal smoke is the ingredient that completes the dish.",
      },
      {
        name: "Ketupat",
        emoji: "🍘",
        role: "Compressed rice cakes wrapped in woven palm leaves — mild and slightly sticky, designed to scoop up peanut sauce and balance the charred meat.",
      },
      {
        name: "Cucumber & Onion",
        emoji: "🥒",
        role: "Served raw alongside — the sharpness cuts through the marinade and resets the palate between skewers. Never skip these.",
      },
      {
        name: "Turmeric",
        emoji: "🟡",
        role: "The spice that gives satay its distinctive golden colour before the char. Its warmth runs through the marinade and is the dish's soul ingredient.",
      },
    ],
    bestStalls: [
      {
        name: "Boon Tat Street Satay",
        address: "Lau Pa Sat, 18 Raffles Quay (street closure from 7pm)",
        area: "CBD",
        note: "The most atmospheric satay experience in Singapore — over 20 stalls, charcoal smoke, and the whole city humming around you",
        mapsUrl: "https://maps.google.com/?q=Boon+Tat+Street+Satay+Lau+Pa+Sat+Singapore",
      },
      {
        name: "Satay by the Bay",
        address: "East Coast Lagoon Food Village, 1220 East Coast Pkwy",
        area: "East Coast",
        note: "Open-air, sea breeze, charcoal smoke — the version that makes satay feel like it was designed for exactly this setting",
        mapsUrl: "https://maps.google.com/?q=East+Coast+Lagoon+Food+Village+Satay+Singapore",
      },
      {
        name: "Haron Satay",
        address: "Newton Food Centre, #01-07, 500 Clemenceau Ave North",
        area: "Newton",
        note: "One of the longest-running satay stalls in Singapore — the mutton version here is the one locals consistently recommend",
        mapsUrl: "https://maps.google.com/?q=Haron+Satay+Newton+Food+Centre+Singapore",
      },
    ],
    shiokOMeter: { spiceHit: 3, messFactor: 4, flavourDepth: 8, queueGame: 5, shiokValue: 10 },
  },
  {
    name: "Roti John",
    slug: "roti-john",
    category: "Singaporean Classics",
    description:
      "Roti John is Singapore's original fusion — a French baguette (the 'roti') fried egg-and-minced-meat side down on a griddle, sliced open, and loaded with sambal, mayonnaise, and sometimes cheese. The dish was created by Malay hawkers in the 1970s who called it 'John' after the British and European customers who asked for a local sandwich. The resulting creation belongs to no single cuisine and is entirely Singaporean. Late-night hawker markets, Ramadan bazaars, and Malay food stalls serve it as supper: messy, filling, and satisfying in a way that nothing healthy ever quite manages.",
    origin:
      "Invented by Malay hawkers in Singapore in the 1960s–70s — a deliberate fusion of Western baguette and local Malay egg-and-meat cooking, named for its European customers.",
    whereToFind:
      "Geylang Serai Ramadan Bazaar for the definitive version; Adam Road Food Centre late at night; most Malay-run hawker stalls that operate into the evening.",
    priceRange: "S$3–6 per portion",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    funFact:
      "The name 'John' is a colonial-era Singaporean slang term for a Western person — the dish was literally named after the type of customer who first ordered it.",
    bestPairedWith:
      "Teh tarik or sugarcane juice, and nothing more — roti john is a complete meal that needs no accompaniment.",
    halal: true,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Best eaten standing up at midnight. Anything less and you are not doing it right.",
    hawkersThatServeIt: [
      "geylang-serai-market",
      "adam-road-food-centre",
      "bedok-85-fengshan-market",
    ],
    howToEat: [
      "Eat immediately — the bread goes from crispy to soggy within minutes as the egg and sambal soak in",
      "Ask for extra sambal and mayonnaise on the side rather than having it pre-loaded — you control the ratio",
      "Hold it with both hands and eat from one end — roti john is not a utensil dish",
      "The egg crust on the bottom should be slightly crispy and slightly charred — if it's pale the griddle wasn't hot enough",
      "Order with mutton or beef if available — the minced meat version is the original and best interpretation",
    ],
    keyIngredients: [
      {
        name: "French Baguette",
        emoji: "🥖",
        role: "The base — split lengthways and pressed egg-side down on the griddle. The crust crisps while the inside softens and absorbs the egg.",
      },
      {
        name: "Egg & Minced Meat",
        emoji: "🥚",
        role: "Beaten egg mixed with minced beef or mutton, fried into the cut face of the bread — the technique that makes roti john unlike any other sandwich.",
      },
      {
        name: "Sambal",
        emoji: "🌶️",
        role: "Chilli sambal spread on the finished roti — the Malay element that completes the fusion and gives the dish its identity.",
      },
      {
        name: "Mayonnaise",
        emoji: "🫙",
        role: "The Western ingredient that stayed — creamy, rich, and the counterpoint to the sambal heat. Added after grilling.",
      },
      {
        name: "Onion",
        emoji: "🧅",
        role: "Mixed into the egg and meat before frying — adds sweetness and texture to the crust that forms on the bread face.",
      },
      {
        name: "Margarine",
        emoji: "🧈",
        role: "Spread on the outer crust and griddled — gives the bread its golden colour and a faint butterscotch fragrance.",
      },
    ],
    bestStalls: [
      {
        name: "Ramadan Bazaar Roti John Stalls",
        address: "Geylang Serai Market, 1 Geylang Serai (Ramadan only)",
        area: "Geylang Serai",
        note: "During Ramadan the bazaar outside Geylang Serai becomes Singapore's best roti john destination — queues form before iftar",
        mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Ramadan+Bazaar+Singapore",
      },
      {
        name: "Adam Road Roti John",
        address: "Adam Road Food Centre, #01-02, 2 Adam Road",
        area: "Bukit Timah",
        note: "Late-night institution — opens when the satay and nasi lemak crowd peaks. The mutton version is the one to order",
        mapsUrl: "https://maps.google.com/?q=Adam+Road+Food+Centre+Roti+John+Singapore",
      },
      {
        name: "Selera Rasa Roti John",
        address: "Bedok 85 Fengshan Market, 85 Bedok North St 4",
        area: "Bedok",
        note: "East-side late-night staple — griddled hard and loaded generously. Best after 10pm when the supper crowd arrives",
        mapsUrl: "https://maps.google.com/?q=Bedok+85+Fengshan+Market+Roti+John+Singapore",
      },
    ],
    shiokOMeter: { spiceHit: 3, messFactor: 5, flavourDepth: 6, queueGame: 4, shiokValue: 9 },
  },
  {
    name: "Popiah",
    slug: "popiah",
    category: "Singaporean Classics",
    description:
      "Popiah is Singapore's fresh spring roll — a thin wheat skin wrapped around a filling of braised turnip, beansprouts, egg, pork, prawns, crushed peanuts, and a smear of sweet sauce and chilli. The Hokkien version brought from Fujian province was adapted in Singapore's hawker centres into a community ritual: popiah-making parties where families assemble their own rolls from a spread of ingredients are as much a cultural practice as a meal. At hawker stalls, the popiah master rolls each one to order with a precision that looks casual and takes years. The result is a neat cylinder of Singapore's entire social history.",
    origin:
      "Hokkien Fujianese immigrant tradition adapted in Singapore's Peranakan and Chinese hawker kitchens — both communities claim ownership and both are partially right.",
    whereToFind:
      "Tiong Bahru Market and Old Airport Road for the best hawker versions; Katong and Joo Chiat for Peranakan-style. Look for stalls with a visible spreading station.",
    priceRange: "S$1.50–4 per roll",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    funFact:
      "The turnip filling (bang kuang) must be braised for hours until it collapses into strands — the cooking time is the clearest indicator of how seriously a stall takes their popiah.",
    bestPairedWith:
      "A bowl of soup or teh, and nothing else — popiah is light enough to eat four of and filling enough that four is actually enough.",
    halal: false,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Don't squeeze — the skin tears and everything falls out. Let the uncle roll it properly lah.",
    hawkersThatServeIt: [
      "tiong-bahru-market",
      "old-airport-road-food-centre",
      "amoy-street-food-centre",
    ],
    howToEat: [
      "Don't cut it — eat the popiah whole from one end. Cutting releases the filling and defeats the structural engineering of the roll",
      "Hold gently with both hands — the skin is thin and the filling is heavy. Press too hard and it splits",
      "Ask for extra chilli sauce before it's rolled — adding it after is messy and ineffective",
      "Eat within two minutes of receiving it — the skin softens quickly as the filling's moisture works through it",
      "Order two minimum — one is never enough and you will immediately want another",
    ],
    keyIngredients: [
      { name: "Popiah Skin", emoji: "🫓", role: "Paper-thin wheat flour crepe — soft, slightly stretchy, and strong enough to hold the filling if the roll is tight. The skill is in the skin." },
      { name: "Braised Bangkuang", emoji: "🥬", role: "Jicama (yam bean) braised until soft and stranded — the soul of the filling. Hours of cooking collapse it into something sweet and savoury." },
      { name: "Sweet Sauce", emoji: "🫙", role: "Thick, dark, and sweet — spread on the skin before filling. Its flavour is the first thing you taste and the last thing you remember." },
      { name: "Crushed Peanuts", emoji: "🥜", role: "Scattered over the filling for crunch — the textural element that saves the popiah from being entirely soft." },
      { name: "Egg Omelette", emoji: "🥚", role: "Thin strips of fried egg layered through the filling — adds richness and binds the other ingredients together." },
      { name: "Chilli", emoji: "🌶️", role: "Added to taste before rolling — not heat for its own sake but a brightness that lifts the entire filling." },
    ],
    bestStalls: [
      { name: "Kway Guan Huat Joo Chiat Popiah", address: "95 Joo Chiat Road", area: "Joo Chiat", note: "Singapore's most famous popiah stall — three generations, the same recipe, and a queue that proves tradition wins every time", mapsUrl: "https://maps.google.com/?q=Kway+Guan+Huat+Popiah+Joo+Chiat+Singapore" },
      { name: "Tiong Bahru Popiah", address: "Tiong Bahru Market, #02-13, 30 Seng Poh Road", area: "Tiong Bahru", note: "The neighbourhood version that locals eat every weekend — no fuss, proper braised filling, rolled to order", mapsUrl: "https://maps.google.com/?q=Tiong+Bahru+Market+Popiah+Singapore" },
      { name: "Soon Huat Popiah", address: "Old Airport Road Food Centre, #01-100, 51 Old Airport Rd", area: "Kallang", note: "A stall that has been rolling popiah at Old Airport Road since the centre opened — the peanut quantity here is generous", mapsUrl: "https://maps.google.com/?q=Old+Airport+Road+Food+Centre+Popiah+Singapore" },
    ],
    shiokOMeter: { spiceHit: 2, messFactor: 3, flavourDepth: 7, queueGame: 4, shiokValue: 8 },
  },
  {
    name: "Chwee Kueh",
    slug: "chwee-kueh",
    category: "Singaporean Classics",
    description:
      "Chwee kueh is one of Singapore's most quietly perfect foods: small steamed rice cakes with a dimple in the centre, filled with preserved radish (chai poh), and served with sambal chilli on the side. The texture is the whole point — silky, slightly wobbly, and resistant enough to hold its shape when you bite through. Teochew hawkers brought the dish from Swatow and it became a Singapore breakfast staple sold from wooden push-carts and later from hawker stalls where the same recipe has been running unchanged for fifty years. You eat six. You think you want more. You are full.",
    origin:
      "Teochew immigrants from the Swatow region of Guangdong brought the steamed rice cake tradition — Singapore's chai poh topping and sambal pairing are local adaptations.",
    whereToFind:
      "Tiong Bahru Market, Bedok Interchange, and Ghim Moh for the three most respected versions. Arrive before 9am — good chwee kueh sells out before lunch.",
    priceRange: "S$1.20–3 for 4–6 pieces",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    funFact:
      "The chai poh (preserved radish) topping must be fried before serving — raw chai poh is too salty and sharp. The frying caramelises it slightly and makes it the perfect complement to the plain rice cake.",
    bestPairedWith:
      "Kopi-o or teh-o, and a you tiao on the side for anyone who needs more than six pieces to feel complete.",
    halal: false,
    spiceLevel: "Mild 🌶️",
    difficulty: "Easy to eat",
    localSay:
      "Must eat fresh from the steamer — cold chwee kueh is a completely different, inferior experience.",
    hawkersThatServeIt: [
      "tiong-bahru-market",
      "bedok-interchange-hawker-centre",
      "ghim-moh-market-food-centre",
    ],
    howToEat: [
      "Add sambal on the side, not on top — dip each piece individually so you control the heat level",
      "Eat in one bite per piece — chwee kueh is designed to be consumed whole, not cut",
      "The chai poh should be slightly caramelised and a little oily — if it's dry and pale the stall didn't fry it properly",
      "Eat hot, immediately — the texture degrades within minutes of leaving the steamer",
      "Order extra chai poh if the stall allows it — most regulars do and most stalls accommodate",
    ],
    keyIngredients: [
      { name: "Rice Flour Batter", emoji: "🍚", role: "Steamed in small moulds — the ratio of rice flour to water determines the texture. Too thick and it's dense; too thin and it collapses." },
      { name: "Chai Poh", emoji: "🟤", role: "Preserved radish, fried until slightly caramelised — salty, a little sweet, and the textural contrast that makes chwee kueh more than just plain rice cake." },
      { name: "Sambal Chilli", emoji: "🌶️", role: "The heat on the side — not poured over but dipped into. Bright, garlicky, and essential to the dish even if you use very little of it." },
      { name: "Sesame Oil", emoji: "🫙", role: "Brushed on the finished rice cake — a faint nuttiness that rounds out the otherwise neutral flavour of the steamed rice." },
      { name: "Lard", emoji: "🫓", role: "Used to fry the chai poh at the best stalls — the fat carries the flavour of the radish and prevents it from drying out." },
      { name: "Water", emoji: "💧", role: "The most important ingredient — the ratio of water to rice flour is the entire science of a perfect chwee kueh. Too much and it falls apart." },
    ],
    bestStalls: [
      { name: "Jian Bo Shui Kueh", address: "Tiong Bahru Market, #02-05, 30 Seng Poh Road", area: "Tiong Bahru", note: "Michelin Bib Gourmand. The benchmark stall — silky texture, generous chai poh, and a queue that forms before they open", mapsUrl: "https://maps.google.com/?q=Jian+Bo+Shui+Kueh+Tiong+Bahru+Market+Singapore" },
      { name: "Bedok Chwee Kueh", address: "Bedok Interchange Hawker Centre, 208 New Upper Changi Rd", area: "Bedok", note: "Michelin Bib Gourmand. The east side's answer — slightly firmer texture, heavier chai poh topping, equally addictive", mapsUrl: "https://maps.google.com/?q=Bedok+Chwee+Kueh+Interchange+Hawker+Centre+Singapore" },
      { name: "Ghim Moh Chwee Kueh", address: "Ghim Moh Market & Food Centre, #01-04, 20 Ghim Moh Road", area: "Ghim Moh", note: "Michelin Bib Gourmand. The west side institution — three Michelin-recognised chwee kueh stalls in Singapore, and this is the one westies defend most fiercely", mapsUrl: "https://maps.google.com/?q=Ghim+Moh+Market+Chwee+Kueh+Singapore" },
    ],
    shiokOMeter: { spiceHit: 2, messFactor: 1, flavourDepth: 6, queueGame: 7, shiokValue: 9 },
  },
];

/** Splits story around the strongest "Shiok Factor" line for pull-quote layout. */
export function pickShiokFactorSentence(description: string): {
  before: string;
  quote: string;
  after: string;
} {
  const text = description.trim().replace(/\n\n+/g, " ");
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length === 0) return { before: "", quote: text, after: "" };
  if (sentences.length === 1) {
    return { before: "", quote: sentences[0]!.replace(/\.$/, ""), after: "" };
  }

  const quoteIdx = pickShiokSentenceIndex(sentences);
  const quote = sentences[quoteIdx]!.replace(/\.$/, "").trim();
  const before = sentences.slice(0, quoteIdx).join(" ").trim();
  const after = sentences.slice(quoteIdx + 1).join(" ").trim();
  return { before, quote, after };
}

function pickShiokSentenceIndex(sentences: string[]): number {
  if (sentences.length <= 2) return sentences.length - 1;
  let best = 1;
  for (let i = 1; i < sentences.length; i++) {
    if (shiokScore(sentences[i]!) > shiokScore(sentences[best]!)) best = i;
  }
  return best;
}

function shiokScore(s: string): number {
  let n = 0;
  if (/!/.test(s)) n += 2;
  if (
    /wok hei|theatrical|not just|national dish|unmistakably|living heritage|hallmark|collective relief|flavour laboratories|diplomacy|shiok|encodes|mirrors|prove heritage/i.test(
      s,
    )
  )
    n += 5;
  if (/UNESCO/i.test(s)) n += 2;
  n += Math.min(s.length / 45, 4);
  return n;
}

const bySlug = new Map(
  FOOD_HERITAGE_DISHES.map((dish) => [dish.slug, dish] as const),
);

export function getDishBySlug(slug: string): FoodHeritageDish | undefined {
  return bySlug.get(slug);
}

export function getAllFoodHeritageSlugs(): string[] {
  return FOOD_HERITAGE_DISHES.map((d) => d.slug);
}
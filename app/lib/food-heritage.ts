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
    spiceLevel: "Medium",
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
    spiceLevel: "None",
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
    spiceLevel: "Hot",
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
    spiceLevel: "None",
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
    spiceLevel: "None",
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
    spiceLevel: "Hot",
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
    spiceLevel: "Mild",
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
    spiceLevel: "None",
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
    spiceLevel: "Medium",
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
    spiceLevel: "Mild",
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
    spiceLevel: "Mild",
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
    spiceLevel: "None",
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
    spiceLevel: "Mild",
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
    spiceLevel: "Mild",
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
    spiceLevel: "Mild",
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
    spiceLevel: "Mild",
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
  // ─── MALAY & MUSLIM HERITAGE ──────────────────────────────────────
  {
    name: "Nasi Lemak",
    slug: "nasi-lemak",
    category: "Malay & Muslim Heritage",
    description:
      "Nasi lemak is the most complete meal in Singapore: coconut-fragrant rice cooked in pandan leaf, sambal, fried ikan bilis, roasted peanuts, half a hard-boiled egg, and cucumber. Everything is present — fat, salt, heat, sweetness, crunch, freshness. The Malay community has eaten it for breakfast for centuries. The Indian community added curry. The Chinese community added luncheon meat and otah. The result is a dish that Singapore owns collectively and defends individually. Every regular has a preferred stall. The debate about which is best is not a debate that will ever be resolved. That is part of the point.",
    origin:
      "Malay archipelago food tradition — nasi lemak (literally 'fatty rice' in Malay) spread from the Malay peninsula and was carried to Singapore by Malay and Javanese communities.",
    whereToFind:
      "Adam Road Food Centre for the Michelin-recognised version; Geylang Serai and Tekka Centre for authentically Malay settings; every mamak and Malay stall island-wide for daily sustenance.",
    priceRange: "S$1.50–6 depending on accompaniments",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    funFact:
      "The sambal is the stall's signature — every nasi lemak auntie guards her sambal recipe fiercely, and regulars can identify their preferred stall's sambal by smell alone.",
    bestPairedWith:
      "Teh tarik, a side of otah, and a piece of fried chicken if the stall offers it. Eat before 9am for the full experience.",
    halal: true,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay:
      "The sambal must have ikan bilis in it — not just on the side. That's the rule and there are no exceptions.",
    hawkersThatServeIt: [
      "adam-road-food-centre",
      "geylang-serai-market",
      "tekka-centre",
    ],
    howToEat: [
      "Mix the sambal into the rice first — it coats every grain and distributes the heat evenly across the plate",
      "Eat the ikan bilis early before they soften in the rice's moisture — their crunch is the textural anchor of the dish",
      "Break the egg yolk into the rice for a richness that ties everything together",
      "Use the cucumber to cool down between bites — it's not a garnish, it's a palate reset",
      "Save some rice to mop up the remaining sambal at the end — the sambal left on the plate is the best bite",
    ],
    keyIngredients: [
      { name: "Coconut Rice", emoji: "🥥", role: "Rice cooked in coconut milk with pandan leaf — fragrant, slightly rich, and the reason the dish is called 'fatty rice'. The quality starts here." },
      { name: "Sambal", emoji: "🌶️", role: "The stall's signature — each recipe is different, guarded fiercely, and the primary reason regulars are loyal to specific stalls." },
      { name: "Ikan Bilis", emoji: "🐟", role: "Deep-fried dried anchovies — salty, crunchy, and umami-rich. They must be eaten while still crispy or the dish loses a critical texture." },
      { name: "Roasted Peanuts", emoji: "🥜", role: "Slightly oily and warm — adds a nutty richness that complements the coconut rice and provides crunch alongside the ikan bilis." },
      { name: "Pandan Leaf", emoji: "🌿", role: "Cooked into the rice — gives a floral, vanilla-adjacent fragrance that is distinctively Southeast Asian and completely essential." },
      { name: "Cucumber", emoji: "🥒", role: "Sliced fresh — the cooling element that makes nasi lemak balanced rather than heavy. Never optional despite looking optional." },
    ],
    bestStalls: [
      { name: "Adam Road Nasi Lemak", address: "Adam Road Food Centre, #01-02, 2 Adam Road", area: "Bukit Timah", note: "Michelin Bib Gourmand. The queue starts forming before 7am — this is the nasi lemak that food writers reference when they talk about the dish", mapsUrl: "https://maps.google.com/?q=Adam+Road+Nasi+Lemak+Food+Centre+Singapore" },
      { name: "Selera Rasa Nasi Lemak", address: "Adam Road Food Centre, #01-01, 2 Adam Road", area: "Bukit Timah", note: "The stall next to Adam Road Nasi Lemak — equally excellent and often shorter queue. Many locals actually prefer it", mapsUrl: "https://maps.google.com/?q=Selera+Rasa+Nasi+Lemak+Adam+Road+Singapore" },
      { name: "Boon Lay Power Nasi Lemak", address: "Boon Lay Place Food Village, #01-09, 221 Boon Lay Place", area: "Jurong West", note: "West Singapore's most beloved nasi lemak — the sambal here is darker, more intense, and has its own devoted following", mapsUrl: "https://maps.google.com/?q=Boon+Lay+Power+Nasi+Lemak+Singapore" },
    ],
    shiokOMeter: { spiceHit: 5, messFactor: 2, flavourDepth: 9, queueGame: 8, shiokValue: 10 },
  },
  {
    name: "Mee Rebus",
    slug: "mee-rebus",
    category: "Malay & Muslim Heritage",
    description:
      "Mee rebus is a bowl of contradictions that resolves beautifully: yellow egg noodles in a thick, sweet-savoury gravy made from sweet potato, dried shrimp, and spices, topped with a hard-boiled egg, green chilli, fried tofu, and calamansi. The gravy is the key — it should be thick enough to coat the noodles completely, slightly sweet from the sweet potato starch, and deeply savoury from the dried shrimp and prawn paste base. A Malay and Indian-Malay heritage dish, it sits at the intersection of two culinary traditions and belongs comfortably to both.",
    origin:
      "Malay and Indian-Muslim hawker tradition — mee rebus (boiled noodles) emerged in Singapore and Malaysia as a distinctively local noodle dish with no equivalent elsewhere.",
    whereToFind:
      "Geylang Serai Market and Tekka Centre for the most authentic versions; heartland Malay stalls across the island for neighbourhood versions that are often just as good.",
    priceRange: "S$3–6 per bowl",
    imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
    funFact:
      "The gravy's thickness comes from blended sweet potato — not starch or flour. The sweet potato also gives the gravy its natural sweetness, which is why the dish tastes complex without being complicated.",
    bestPairedWith: "Teh tarik, a side of otah, and extra calamansi squeezed tableside.",
    halal: true,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay:
      "The gravy must be thick enough to hold the spoon upright. If it pours like water, something went wrong.",
    hawkersThatServeIt: [
      "geylang-serai-market",
      "tekka-centre",
      "adam-road-food-centre",
    ],
    howToEat: [
      "Squeeze calamansi over the entire bowl before mixing — the acid cuts through the thick, sweet gravy",
      "Mix from the bottom — the thickest gravy sinks and coats the noodles unevenly if not stirred",
      "Add green chilli gradually — the dish is already flavoured, the chilli adds brightness not just heat",
      "Eat the tau pok (fried tofu) while it's still warm — it absorbs the gravy and becomes a flavour sponge",
      "Finish with a sip of teh tarik — the sweetness of the milk tea and the savoury gravy is one of Singapore's great flavour pairings",
    ],
    keyIngredients: [
      { name: "Yellow Egg Noodles", emoji: "🍜", role: "Blanched and placed in the bowl before the gravy is poured — thick enough to hold the heavy sauce without going limp immediately." },
      { name: "Sweet Potato Gravy", emoji: "🟠", role: "The defining element — blended sweet potato gives the broth its thickness, colour, and natural sweetness without any added starch." },
      { name: "Dried Shrimp & Prawn Paste", emoji: "🦐", role: "The savoury foundation of the gravy — deeply umami, slightly funky, and the ingredient that makes the sweet gravy complex rather than cloying." },
      { name: "Tau Pok", emoji: "🟨", role: "Fried tofu puffs — they absorb the gravy completely and become small flavour parcels that burst when bitten." },
      { name: "Calamansi", emoji: "🍋", role: "Squeezed over the finished bowl — the acid that brightens and balances a dish that would be overwhelming without it." },
      { name: "Green Chilli", emoji: "🌶️", role: "Sliced fresh and placed on top — sharp, grassy heat that is distinctly different from sambal and essential to the mee rebus flavour profile." },
    ],
    bestStalls: [
      { name: "Haji Kadir Mee Rebus", address: "Geylang Serai Market, #01-09, 1 Geylang Serai", area: "Geylang Serai", note: "The most respected mee rebus in the Geylang Serai area — the gravy is made fresh each morning and sells out before noon", mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Market+Mee+Rebus+Singapore" },
      { name: "Rosyth Mee Rebus", address: "Tekka Centre, #01-305, 665 Buffalo Road", area: "Little India", note: "Tekka's most popular mee rebus stall — extra-thick gravy and a generous topping of fried shallots that most stalls skip", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Mee+Rebus+Singapore" },
      { name: "Adam Road Mee Rebus", address: "Adam Road Food Centre, #01-08, 2 Adam Road", area: "Bukit Timah", note: "Late-night version for the supper crowd — slightly spicier than the daytime standard and served with extra chilli on the side", mapsUrl: "https://maps.google.com/?q=Adam+Road+Food+Centre+Mee+Rebus+Singapore" },
    ],
    shiokOMeter: { spiceHit: 5, messFactor: 4, flavourDepth: 7, queueGame: 4, shiokValue: 8 },
  },
  {
    name: "Mee Siam",
    slug: "mee-siam",
    category: "Malay & Muslim Heritage",
    description:
      "Mee siam is Singapore's most misunderstood noodle — people order it expecting laksa and get something completely different: thin rice vermicelli in a tangy, slightly sweet tamarind-based gravy with dried shrimp, fermented soybean, and a squeeze of calamansi. The name suggests Siamese (Thai) origins but the dish as it exists in Singapore is entirely local — a Malay-Peranakan creation with no direct equivalent in Thailand. The flavour is bright and sharp where laksa is rich and heavy. Mee siam is the noodle you order when you want something that wakes you up rather than puts you to sleep.",
    origin:
      "Malay-Peranakan origin in Singapore and Malaya — despite its name, mee siam as cooked in Singapore has no clear Thai predecessor and is a genuinely local dish.",
    whereToFind:
      "Tekka Centre and Geylang Serai for authentic Malay versions; most hawker centres have at least one mee siam stall that the neighbourhood regulars know about.",
    priceRange: "S$3–5 per bowl",
    imageUrl: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=800&q=80",
    funFact:
      "The key to mee siam gravy is tamarind — not lime, not vinegar, but the slow sourness of tamarind that takes minutes to develop on the palate rather than hitting immediately.",
    bestPairedWith:
      "A glass of bandung (rose syrup milk) for contrast, or teh tarik for the classic Malay breakfast pairing.",
    halal: true,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay:
      "Must squeeze the calamansi yourself — adding it in the kitchen kills the freshness. The sourness should be yours to control.",
    hawkersThatServeIt: [
      "tekka-centre",
      "geylang-serai-market",
      "tampines-round-market",
    ],
    howToEat: [
      "Squeeze calamansi over the bowl before doing anything else — the acid is the most important element and must be fresh",
      "Stir from the bottom — the spice paste settles and must be distributed evenly",
      "Eat the cockles while they're warm — they stiffen in the broth as it cools",
      "Add sambal gradually if offered — the gravy already has heat and the sambal intensifies it quickly",
      "Sip the remaining gravy at the end — good mee siam broth improves as the tamarind has time to develop",
    ],
    keyIngredients: [
      { name: "Bee Hoon", emoji: "🍜", role: "Thin rice vermicelli — soaks up the tamarind gravy quickly. The noodle should be blanched separately and added just before serving." },
      { name: "Tamarind Gravy", emoji: "🫙", role: "Tangy, slightly sweet, and deeply savoury — the signature element that makes mee siam unlike any other Singapore noodle dish." },
      { name: "Dried Shrimp", emoji: "🦐", role: "Fried into the spice paste for the gravy base — provides the umami foundation that supports the tamarind's sourness." },
      { name: "Tau Cheo", emoji: "🫙", role: "Fermented yellow soybean paste — added to the gravy for a salty, slightly funky depth that tamarind alone cannot provide." },
      { name: "Calamansi", emoji: "🍋", role: "Squeezed tableside — adds a fresh top-note of citrus that the tamarind gravy's slower sourness doesn't provide on its own." },
      { name: "Tau Pok & Egg", emoji: "🟨", role: "Fried tofu and hard-boiled egg — the protein elements that add substance and absorb the tangy gravy." },
    ],
    bestStalls: [
      { name: "Haji M Abdul Rajak Mee Siam", address: "Tekka Centre, #01-249, 665 Buffalo Road", area: "Little India", note: "The most respected mee siam in Tekka — the tamarind gravy here is properly tart and the sambal is house-made", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Mee+Siam+Singapore" },
      { name: "Geylang Serai Mee Siam", address: "Geylang Serai Market, 1 Geylang Serai", area: "Geylang Serai", note: "The Malay heartland version — slightly sweeter than the Tekka version and served with extra cockles", mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Market+Mee+Siam+Singapore" },
      { name: "Tampines Mee Siam", address: "Tampines Round Market, 137 Tampines St 11", area: "Tampines", note: "East-side neighbourhood classic — no frills, consistent gravy, and the loyal regulars who have been ordering the same bowl since secondary school", mapsUrl: "https://maps.google.com/?q=Tampines+Round+Market+Mee+Siam+Singapore" },
    ],
    shiokOMeter: { spiceHit: 5, messFactor: 3, flavourDepth: 7, queueGame: 3, shiokValue: 8 },
  },
  {
    name: "Lontong",
    slug: "lontong",
    category: "Malay & Muslim Heritage",
    description:
      "Lontong is Singapore's Malay comfort food in its most complete form: compressed rice cakes in a rich coconut vegetable curry, with tempeh, hard-boiled egg, and a sambal on the side. The dish is Indonesian-Malay in origin and is eaten as a festive meal during Hari Raya, as a weekend breakfast, and as the kind of meal you make when you want something that feels like home. The coconut vegetable curry — lodeh — is the soul of the dish: patiently simmered with lemongrass, galangal, and coconut milk until the vegetables collapse into the sauce and the whole thing smells like every grandmother's kitchen in the Malay kampung.",
    origin:
      "Indonesian-Malay tradition brought to Singapore by Javanese and Malay communities — lontong is eaten across Indonesia and Malaysia but Singapore's version has its own distinct lodeh character.",
    whereToFind:
      "Geylang Serai Market and Tekka Centre for the most traditional versions; Malay food stalls across the island serve it for breakfast and on weekends.",
    priceRange: "S$3–6 per bowl",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    funFact:
      "The rice cakes (lontong) are made by cooking rice inside tightly packed banana leaves until it compresses into a dense cylinder — the banana leaf imparts a faint grassy fragrance that store-bought lontong never achieves.",
    bestPairedWith:
      "Teh tarik, a piece of serunding (dry-fried meat floss) on the side, and time — lontong is a weekend breakfast that should not be rushed.",
    halal: true,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay:
      "The lodeh must be thick, not watery. If the curry is thin, the auntie didn't cook it long enough.",
    hawkersThatServeIt: [
      "geylang-serai-market",
      "tekka-centre",
      "tampines-round-market",
    ],
    howToEat: [
      "Break the lontong into pieces with your spoon rather than cutting — the compressed rice crumbles better and absorbs more lodeh",
      "Ensure each spoonful has rice cake, curry, and at least one vegetable — the dish is designed as a complete combination",
      "Add sambal gradually — the lodeh is already spiced, the sambal adds another dimension of heat rather than replacing the existing one",
      "The tempeh should be slightly crispy — if it's soft the stall didn't fry it fresh",
      "Eat with a spoon — lontong is a saucy dish and cutlery efficiency matters",
    ],
    keyIngredients: [
      { name: "Lontong Rice Cakes", emoji: "🍘", role: "Compressed rice cooked inside banana leaves — dense, slightly fragrant, and designed to hold its shape in the thick curry without dissolving." },
      { name: "Lodeh Curry", emoji: "🥥", role: "Coconut vegetable curry — the soul of the dish. Simmered for hours with lemongrass, galangal, turmeric, and vegetables until deeply fragrant." },
      { name: "Tempeh", emoji: "🟤", role: "Fermented soybean cake, fried until crispy — adds protein, texture, and a slightly nutty, earthy flavour the curry doesn't provide on its own." },
      { name: "Sayur Lodeh Vegetables", emoji: "🥬", role: "Long beans, cabbage, eggplant, and carrot — cooked until tender in the coconut curry and absorbing its flavour completely." },
      { name: "Sambal", emoji: "🌶️", role: "Served on the side — adds heat and acidity that lifts the rich, fatty coconut curry and gives each bite a brightness." },
      { name: "Hard-Boiled Egg", emoji: "🥚", role: "Halved and placed in the curry — absorbs the lodeh's flavour on the cut surface. The yolk, broken and mixed into the sauce, enriches it further." },
    ],
    bestStalls: [
      { name: "Hjh Maimunah Lontong", address: "11 & 15 Jalan Pisang", area: "Jalan Besar", note: "Singapore's most celebrated Malay restaurant — the lontong here is the festive version that locals serve to guests on Hari Raya", mapsUrl: "https://maps.google.com/?q=Hjh+Maimunah+Restaurant+Jalan+Pisang+Singapore" },
      { name: "Geylang Serai Lontong", address: "Geylang Serai Market, #01-20, 1 Geylang Serai", area: "Geylang Serai", note: "The everyday version that the Malay community eats every weekend morning — thick lodeh, generous tempeh, and a price that hasn't changed in years", mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Market+Lontong+Singapore" },
      { name: "Tekka Lontong Stall", address: "Tekka Centre, #01-201, 665 Buffalo Road", area: "Little India", note: "The Little India version — slightly more Malay-Indian in spicing, with a richer coconut base and a sambal that builds slowly", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Lontong+Singapore" },
    ],
    shiokOMeter: { spiceHit: 5, messFactor: 3, flavourDepth: 8, queueGame: 4, shiokValue: 8 },
  },
  {
    name: "Murtabak",
    slug: "murtabak",
    category: "Malay & Muslim Heritage",
    description:
      "Murtabak is one of Singapore's most generous foods: a thick, flaky pancake stuffed with minced mutton or chicken, egg, and onion, fried on a large griddle until the outside is golden and the inside is set. Indian-Muslim hawkers brought the dish from the subcontinent and it became a Singapore institution, particularly during Ramadan when the murtabak stalls at Geylang Serai draw queues that stretch for hours. The best murtabak is heavy enough to feed two people, slightly greasy in the way that only griddle-fried things can be, and served with a thin curry and pickled onion for cutting through the richness.",
    origin:
      "Indian-Muslim (Arab-Indian) hawker tradition — murtabak arrived with South Asian and Arab merchants who settled in Singapore's Kampong Glam area in the 19th century.",
    whereToFind:
      "Kampong Glam's Arab Street area for the most traditional Indian-Muslim version; Geylang Serai Ramadan Bazaar for the most festive; Singapore Zam Zam on North Bridge Road year-round.",
    priceRange: "S$6–12 per portion",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    funFact:
      "A skilled murtabak maker stretches the dough by spinning it in the air — the technique is the same as pizza tossing and creates the paper-thin layers that give murtabak its distinctive flaky texture.",
    bestPairedWith:
      "Thin mutton curry for dipping, pickled onion to cut the richness, and a glass of bandung or teh tarik.",
    halal: true,
    spiceLevel: "Mild",
    difficulty: "Easy to eat",
    localSay:
      "Mutton murtabak. Not chicken. Mutton is the original and the correct choice. Full stop.",
    hawkersThatServeIt: ["geylang-serai-market", "tekka-centre", "newton-food-centre"],
    howToEat: [
      "Cut with the scissors or knife provided — murtabak is too thick and dense to tear cleanly by hand",
      "Dip into the curry rather than pouring it on top — you control the richness of each bite",
      "Eat the pickled onion between bites — the sharp vinegar cuts through the egg-and-meat filling and resets your palate",
      "Share one portion between two — murtabak is filling in a way that sneaks up on you",
      "Eat hot, straight from the griddle — murtabak that has been sitting loses its texture within minutes",
    ],
    keyIngredients: [
      { name: "Stretched Dough", emoji: "🫓", role: "Hand-pulled and griddle-fried — the technique creates thin, flaky layers that are crispy outside and soft within. The quality shows in the layers." },
      { name: "Minced Mutton", emoji: "🥩", role: "Seasoned with onion, cumin, and egg — the filling that defines the dish. Mutton is the traditional and correct version." },
      { name: "Egg", emoji: "🥚", role: "Mixed into the filling and poured over the dough before folding — it binds the meat and creates a custardy interior beneath the crispy crust." },
      { name: "Onion", emoji: "🧅", role: "Diced and mixed into the filling — adds sweetness and moisture. Also served pickled on the side for palate-cleansing." },
      { name: "Ghee", emoji: "🧈", role: "Brushed on the griddle and over the finished murtabak — gives the crust its golden colour and a rich, slightly nutty fragrance." },
      { name: "Thin Curry", emoji: "🫙", role: "Served alongside for dipping — usually a thin mutton or dhal curry that cuts through the richness of the egg-and-meat filling." },
    ],
    bestStalls: [
      { name: "Zam Zam Restaurant", address: "697-699 North Bridge Road", area: "Kampong Glam", note: "The most famous murtabak in Singapore since 1908 — the mutton version here has been ordered by generations of Singaporeans and every visitor who is paying attention", mapsUrl: "https://maps.google.com/?q=Zam+Zam+Restaurant+North+Bridge+Road+Singapore" },
      { name: "Victory Restaurant", address: "701 North Bridge Road", area: "Kampong Glam", note: "Next door to Zam Zam and equally respected — the rivalry between these two stalls is Singapore's most civilised culinary dispute", mapsUrl: "https://maps.google.com/?q=Victory+Restaurant+North+Bridge+Road+Singapore" },
      { name: "Ramadan Murtabak Stalls", address: "Geylang Serai Bazaar, 1 Geylang Serai (Ramadan only)", area: "Geylang Serai", note: "During Ramadan the murtabak stalls at Geylang Serai draw the longest queues in Singapore — the wait can exceed an hour and is completely worth it", mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Ramadan+Bazaar+Murtabak+Singapore" },
    ],
    shiokOMeter: { spiceHit: 3, messFactor: 4, flavourDepth: 8, queueGame: 6, shiokValue: 9 },
  },
  {
    name: "Nasi Padang",
    slug: "nasi-padang",
    category: "Malay & Muslim Heritage",
    description:
      "Nasi Padang is the most generous eating format in Singapore: white rice with as many dishes as you want from a spread of Minangkabau-style Malay curries, dry-fried meats, and vegetables. The origin is Padang, West Sumatra — the Minangkabau people of that region developed a cuisine of intense, slow-cooked flavours that the Malay community brought to Singapore generations ago. The rendang here is not the tourist rendang of hotel restaurants. It is dark, dry, and fragrant from hours of cooking — the kind of dish that gets better the longer it sits in its own rendered fat.",
    origin:
      "Minangkabau people of West Sumatra (Padang region) — Nasi Padang arrived in Singapore with Malay and Indonesian immigrants and is now a fixture of the island's Malay food landscape.",
    whereToFind:
      "Geylang Serai Market, Hjh Maimunah in Jalan Besar, and Tekka Centre for the most authentic spreads. Look for stalls with the widest selection of dishes displayed in covered pots.",
    priceRange: "S$5–15 depending on dishes selected",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    funFact:
      "Traditional Nasi Padang restaurants bring all available dishes to the table at once and you only pay for what you eat — a system that requires absolute trust between hawker and customer that has worked for generations.",
    bestPairedWith:
      "Teh tarik, sambal on the side for extra heat, and the understanding that you will order more than you need every single time.",
    halal: true,
    spiceLevel: "Hot",
    difficulty: "Easy to eat",
    localSay:
      "Rendang must be dry, not wet. If there is gravy in the rendang, it has not been cooked long enough.",
    hawkersThatServeIt: ["geylang-serai-market", "tekka-centre", "adam-road-food-centre"],
    howToEat: [
      "Take the rice first, then choose dishes — the rice anchors everything and you need to see how much space you have on the plate",
      "Always take the rendang — it is the Nasi Padang stall's most important dish and the one that reveals the cook's skill",
      "Pair a dry dish (rendang, serunding) with a wet curry for balance — the contrast is the point of the format",
      "Ask for extra gravy to pour over the rice — at most stalls this is free and it is the difference between a good plate and a great one",
      "Leave room for sambal — the stall's sambal tells you everything about the cook's palate",
    ],
    keyIngredients: [
      { name: "Beef Rendang", emoji: "🥩", role: "The centrepiece — beef slow-cooked in coconut milk and spices until all the liquid evaporates and the meat fries in its own fat. Dark, dry, and impossibly fragrant." },
      { name: "Gulai Curry", emoji: "🫙", role: "Wet coconut curry — chicken, fish, or vegetables. The counterpart to the dry rendang, providing the sauce that the rice needs." },
      { name: "Sambal Goreng", emoji: "🌶️", role: "Dry-fried chilli with tempeh or green beans — one of the most important side dishes in a Padang spread." },
      { name: "Sayur Lodeh", emoji: "🥬", role: "Coconut vegetable curry — mild, creamy, and the balance to the intense spicing of the meat dishes." },
      { name: "Serunding", emoji: "🟤", role: "Dry-fried meat floss — beef or fish cooked with coconut until it becomes dry, crumbly, and intensely flavoured. Eaten in small spoonfuls over rice." },
      { name: "White Rice", emoji: "🍚", role: "Plain steamed rice — the neutral base that absorbs every curry, sambal, and gravy on the plate without competing with any of them." },
    ],
    bestStalls: [
      { name: "Hjh Maimunah Restaurant", address: "11 & 15 Jalan Pisang", area: "Jalan Besar", note: "Singapore's most celebrated Nasi Padang — the rendang here has been cited by food writers as the benchmark version on the island", mapsUrl: "https://maps.google.com/?q=Hjh+Maimunah+Restaurant+Jalan+Pisang+Singapore" },
      { name: "Geylang Serai Nasi Padang", address: "Geylang Serai Market, 1 Geylang Serai", area: "Geylang Serai", note: "The market spread — widest selection of dishes, freshest on weekend mornings, and the most competitive prices", mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Market+Nasi+Padang+Singapore" },
      { name: "Warong Nasi Pariaman", address: "738 North Bridge Road", area: "Kampong Glam", note: "One of Singapore's oldest Nasi Padang restaurants — the beef rendang recipe has been unchanged since the 1960s", mapsUrl: "https://maps.google.com/?q=Warong+Nasi+Pariaman+North+Bridge+Road+Singapore" },
    ],
    shiokOMeter: { spiceHit: 7, messFactor: 3, flavourDepth: 9, queueGame: 5, shiokValue: 9 },
  },
  {
    name: "Satay Bee Hoon",
    slug: "satay-bee-hoon",
    category: "Malay & Muslim Heritage",
    description:
      "Satay bee hoon is one of Singapore's most uniquely local dishes — thin rice vermicelli in a thick, peanut-based satay sauce, served with cockles, cuttlefish, pork slices, and long beans. The dish shares its sauce with satay skewers but is a completely different eating experience: the sauce coats the noodles, absorbs into the cockles, and transforms every ingredient it touches. It is a dish that exists only in Singapore, has no equivalent elsewhere, and is slowly becoming rarer as the hawkers who make it properly age without successors.",
    origin:
      "Uniquely Singaporean — created by Chinese and Malay hawkers who adapted the Malay satay peanut sauce into a noodle dish. Found nowhere else in the world.",
    whereToFind:
      "Bedok 85 Fengshan Market and Marine Parade Food Centre for the best surviving versions. The dish is increasingly rare — find the stalls that still make it and go.",
    priceRange: "S$4–8 per plate",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    funFact:
      "Satay bee hoon is one of Singapore's endangered dishes — fewer than a dozen stalls still make it properly, and the number decreases each year as veteran hawkers retire.",
    bestPairedWith:
      "Calamansi squeezed over the top, a cold sugarcane juice, and the appreciation that you are eating something increasingly rare.",
    halal: false,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay:
      "This one getting harder to find lah. When you see it, must order — cannot take for granted.",
    hawkersThatServeIt: [
      "bedok-85-fengshan-market",
      "marine-parade-food-centre",
      "old-airport-road-food-centre",
    ],
    howToEat: [
      "Mix the peanut sauce thoroughly from the bottom — it thickens as it cools and pools beneath the noodles",
      "Eat the cockles early — they firm up in the thick sauce and lose their texture if left",
      "Squeeze calamansi over the plate — the acid cuts through the richness of the peanut sauce beautifully",
      "Ask for extra peanut sauce if offered — the noodles absorb it quickly and a little extra never goes wrong",
      "Order this whenever you see it — the stalls that make it well are fewer every year",
    ],
    keyIngredients: [
      { name: "Bee Hoon", emoji: "🍜", role: "Thin rice vermicelli — soft and delicate, designed to absorb the peanut sauce completely rather than hold its shape." },
      { name: "Peanut Satay Sauce", emoji: "🥜", role: "The defining element — thick, slightly sweet, complex peanut sauce that is related to but different from the version served with satay skewers." },
      { name: "Cockles", emoji: "🦪", role: "Half-cooked in the heat of the sauce — briny, tender, and the shellfish element that makes satay bee hoon distinctively Singaporean." },
      { name: "Cuttlefish", emoji: "🦑", role: "Sliced and added to the plate — chewy, slightly sweet, and the texture contrast that prevents the dish from being entirely soft." },
      { name: "Long Beans", emoji: "🥬", role: "Blanched and mixed in — adds crunch and a fresh, slightly grassy note that cuts through the richness of the peanut sauce." },
      { name: "Calamansi", emoji: "🍋", role: "The acid finish — squeezed over the completed plate, it brightens everything and makes the peanut sauce taste less heavy." },
    ],
    bestStalls: [
      { name: "Bedok 85 Satay Bee Hoon", address: "Bedok 85 Fengshan Market, #01-14, 85 Bedok North St 4", area: "Bedok", note: "One of the few remaining stalls with a proper peanut sauce made in-house — the late-night version here is especially good", mapsUrl: "https://maps.google.com/?q=Bedok+85+Fengshan+Market+Satay+Bee+Hoon+Singapore" },
      { name: "Marine Parade Satay Bee Hoon", address: "Marine Parade Food Centre, #01-25, 76 Marine Parade Central", area: "Marine Parade", note: "The east-side institution — the peanut sauce here is slightly thicker than most versions and the cuttlefish is always fresh", mapsUrl: "https://maps.google.com/?q=Marine+Parade+Food+Centre+Satay+Bee+Hoon+Singapore" },
      { name: "Old Airport Road Satay Bee Hoon", address: "Old Airport Road Food Centre, #01-109, 51 Old Airport Rd", area: "Kallang", note: "The most accessible version for first-timers — generous portion, consistent sauce, and a hawker who will explain the dish if you ask", mapsUrl: "https://maps.google.com/?q=Old+Airport+Road+Food+Centre+Satay+Bee+Hoon+Singapore" },
    ],
    shiokOMeter: { spiceHit: 4, messFactor: 3, flavourDepth: 8, queueGame: 5, shiokValue: 8 },
  },
  // ─── PERANAKAN (NYONYA) ───────────────────────────────────────────
  {
    name: "Ayam Buah Keluak",
    slug: "ayam-buah-keluak",
    category: "Peranakan (Nyonya)",
    description:
      "Ayam buah keluak is the dish that defines Peranakan cuisine in Singapore: chicken braised in a dark, earthy rempah with buah keluak — Indonesian black nuts that contain a bitter, deeply complex paste that tastes like nothing else on earth. The nut is toxic when raw and must be soaked, boiled, and prepared over multiple days before it is safe to eat. This is not a quick dish. It is a commitment. The paste inside each nut is scooped out, mixed with the braising liquid, and either returned to the shell or mixed into the dish. The flavour is described differently by everyone who tries it — earthy, bitter, chocolatey, medicinal — and is completely unlike anything else in the hawker world.",
    origin:
      "Peranakan Nyonya cuisine — buah keluak (Pangium edule) nuts are native to Southeast Asia and were incorporated into Singapore's Straits Chinese cooking from Javanese and Malay traditions.",
    whereToFind:
      "Peranakan restaurants in Katong, Joo Chiat, and Dempsey Hill — this dish is rarely found at hawker centres. True Nyonya ayam buah keluak requires days of preparation.",
    priceRange: "S$18–40 at restaurants",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    funFact:
      "Buah keluak nuts contain hydrogen cyanide in their raw state — the multi-day soaking and boiling process removes the toxin completely. It is one of the most laborious ingredient preparations in Southeast Asian cooking.",
    bestPairedWith:
      "White rice (absolutely essential), a cooling vegetable dish like chap chye, and a cold lime juice.",
    halal: false,
    spiceLevel: "Medium",
    difficulty: "Adventure eat",
    localSay:
      "Scoop the paste from inside the nut — that black stuff is the whole point. Don't waste it.",
    hawkersThatServeIt: [
      "maxwell-food-centre",
      "tiong-bahru-market",
      "chinatown-complex-food-centre",
    ],
    howToEat: [
      "Use the small spoon provided to scoop the black paste from inside each nut — that paste is the most valuable part of the dish",
      "Mix the scooped paste into your rice before adding anything else — it should coat every grain",
      "Eat the chicken with the braising sauce rather than the nut paste — they are complementary flavours, not competing",
      "Take small portions at first — the buah keluak flavour is intense and builds with each bite",
      "Eat with plain white rice only — the earthiness of the buah keluak needs the neutrality of rice to stay balanced",
    ],
    keyIngredients: [
      { name: "Buah Keluak", emoji: "⚫", role: "The defining ingredient — Indonesian black nuts containing a bitter, earthy paste that is unlike any other flavour in Southeast Asian cooking." },
      { name: "Chicken", emoji: "🍗", role: "Braised in the rempah until tender — the vehicle for the sauce, which is the real subject of the dish." },
      { name: "Rempah", emoji: "🌶️", role: "The spice paste — shallots, galangal, lemongrass, dried shrimp, candlenut — pounded by hand and fried until fragrant before braising." },
      { name: "Tamarind", emoji: "🫙", role: "Adds sourness to balance the deep earthiness of the buah keluak — the acid that stops the dish from being heavy." },
      { name: "Shallots", emoji: "🧅", role: "Fried until golden in the rempah — the sweet, caramelised backbone of the braising liquid." },
      { name: "Dark Soy", emoji: "🫙", role: "Adds colour and a caramel note to the braising liquid — the ingredient that gives ayam buah keluak its characteristic deep brown appearance." },
    ],
    bestStalls: [
      { name: "Candlenut Restaurant", address: "Block 17A Dempsey Road", area: "Dempsey", note: "Singapore's only Michelin-starred Peranakan restaurant — the ayam buah keluak here is the definitive modern interpretation", mapsUrl: "https://maps.google.com/?q=Candlenut+Dempsey+Singapore" },
      { name: "Kim Choo Kueh Chang", address: "109 East Coast Road", area: "Katong", note: "Heritage Peranakan in Katong — the ayam buah keluak is made from a family recipe and reflects the true Nyonya home-cooking tradition", mapsUrl: "https://maps.google.com/?q=Kim+Choo+Kueh+Chang+East+Coast+Road+Singapore" },
      { name: "True Blue Cuisine", address: "47-49 Armenian Street", area: "City Hall", note: "Peranakan heritage restaurant in a heritage building — the buah keluak here is properly prepared over multiple days in the traditional method", mapsUrl: "https://maps.google.com/?q=True+Blue+Cuisine+Armenian+Street+Singapore" },
    ],
    shiokOMeter: { spiceHit: 5, messFactor: 5, flavourDepth: 10, queueGame: 3, shiokValue: 8 },
  },
  {
    name: "Kueh Pie Tee",
    slug: "kueh-pie-tee",
    category: "Peranakan (Nyonya)",
    description:
      "Kueh pie tee is Peranakan elegance in miniature: a thin, crispy pastry cup filled with braised jicama (bangkuang) and prawn, topped with fresh coriander, chilli sauce, and sometimes a small prawn perched on top. The cups are fried in a special mould, each one a perfect crispy vessel for the sweet, savoury filling inside. It is a Nyonya party dish — assembled by hand, eaten in one bite, and completely impossible to eat without immediately wanting another. The contrast between the shattering pastry cup and the soft, braised filling is the entire engineering achievement of the dish.",
    origin:
      "Peranakan Nyonya party food — kueh pie tee (literally 'top hat' kueh for the shape of the mould) is a distinctively Straits Chinese creation with no single immigrant ancestor.",
    whereToFind:
      "Peranakan restaurants in Katong and Joo Chiat; some hawker stalls in Tiong Bahru and Maxwell occasionally serve them. Most reliably found at Peranakan restaurants.",
    priceRange: "S$8–18 for a plate at restaurants",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    funFact:
      "The mould for frying kueh pie tee cups is a specialised tool passed between generations — the shape produces a perfectly even cup that can hold filling without softening for several minutes.",
    bestPairedWith:
      "A glass of lime juice or cold barley water — the freshness complements the sweet braised filling and the crispy pastry.",
    halal: false,
    spiceLevel: "Mild",
    difficulty: "Careful eater",
    localSay:
      "One bite only — if you try to eat half, the cup shatters and the filling goes everywhere. Trust the engineering.",
    hawkersThatServeIt: [
      "tiong-bahru-market",
      "maxwell-food-centre",
      "amoy-street-food-centre",
    ],
    howToEat: [
      "Eat in one complete bite — the cup is designed to be consumed whole. Hesitating shatters it and loses the filling",
      "Apply chilli sauce sparingly before eating — the cup holds a fixed volume and over-saucing overwhelms the delicate filling",
      "Hold the cup from the base, not the sides — the pastry is thin and pressure from the sides cracks it before you're ready",
      "Eat immediately after assembly — the pastry begins to soften from the filling's moisture within minutes",
      "Order the whole plate — kueh pie tee is always served in groups of six or more. Attempting to share fewer than three per person creates diplomatic incidents",
    ],
    keyIngredients: [
      { name: "Pastry Cup", emoji: "🫙", role: "Fried in a special mould — thin, crispy, and designed to hold filling for several minutes without softening. The most technically demanding element." },
      { name: "Braised Bangkuang", emoji: "🥬", role: "Jicama braised with dried shrimp until soft and slightly sweet — the filling. The same as popiah filling but here it must be drier to preserve the cup's crispness." },
      { name: "Prawn", emoji: "🍤", role: "Placed on top as garnish or mixed into the filling — adds sweetness and signals the dish's Peranakan pedigree." },
      { name: "Chilli Sauce", emoji: "🌶️", role: "The finishing element — sweet-sour and bright. Applied in a small drop, not a pour." },
      { name: "Coriander", emoji: "🌿", role: "Fresh leaves placed on top — a herb that many Singaporeans add and many remove. The debate about coriander on kueh pie tee is entirely unresolvable." },
      { name: "Sweet Black Sauce", emoji: "🫙", role: "A thick, sweet dark sauce applied before the chilli — balances the savoury filling with a caramel sweetness." },
    ],
    bestStalls: [
      { name: "Candlenut Restaurant", address: "Block 17A Dempsey Road", area: "Dempsey", note: "Michelin-starred Peranakan — the kueh pie tee here is assembled to order and the cups are fried fresh, not pre-made", mapsUrl: "https://maps.google.com/?q=Candlenut+Restaurant+Dempsey+Singapore" },
      { name: "Peranakan Inn", address: "210 East Coast Road", area: "Katong", note: "Katong institution — the kueh pie tee filling here uses the old Nyonya recipe with hand-pounded dried shrimp in the braised jicama", mapsUrl: "https://maps.google.com/?q=Peranakan+Inn+East+Coast+Road+Singapore" },
      { name: "Guan Hoe Soon Restaurant", address: "214 Joo Chiat Road", area: "Joo Chiat", note: "Singapore's oldest Peranakan restaurant since 1953 — the kueh pie tee here is made the way it has always been made", mapsUrl: "https://maps.google.com/?q=Guan+Hoe+Soon+Restaurant+Joo+Chiat+Singapore" },
    ],
    shiokOMeter: { spiceHit: 2, messFactor: 3, flavourDepth: 7, queueGame: 3, shiokValue: 8 },
  },
  {
    name: "Ngoh Hiang",
    slug: "ngoh-hiang",
    category: "Peranakan (Nyonya)",
    description:
      "Ngoh hiang is Singapore's most satisfying fried platter: a spread of minced pork and prawn rolls wrapped in tofu skin and deep-fried, served alongside fried fish cake, prawn fritters, and other morsels, dipped in a sweet plum sauce or chilli. The Hokkien and Teochew communities brought the concept; the Peranakan community adapted it into a feast format; hawker stalls reduced it to a daily snack. At its best, the minced pork roll — the classic piece — is aromatic with five spice, crispy on the outside, and juicy within. It is the kind of food that is difficult to stop eating once started.",
    origin:
      "Hokkien and Teochew immigrant tradition adapted by Peranakan kitchens — ngoh hiang (五香, five spice) takes its name from the five-spice seasoning in the signature pork roll.",
    whereToFind:
      "Old Airport Road Food Centre, Geylang Serai, and various hawker centres island-wide — most hawker centres have at least one ngoh hiang stall with a glass case display.",
    priceRange: "S$4–10 per selection",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    funFact:
      "The tofu skin (tau kee) wrapper must be soaked in water before use to become pliable — if it's too dry it tears during rolling, and if it's too wet it doesn't crisp during frying.",
    bestPairedWith:
      "Sweet plum sauce for the pork rolls, chilli sauce for the prawn fritters, and a bowl of congee for the complete ngoh hiang experience.",
    halal: false,
    spiceLevel: "Mild",
    difficulty: "Easy to eat",
    localSay:
      "Always order the pork roll — that's the ngoh hiang. Everything else is supporting cast.",
    hawkersThatServeIt: [
      "old-airport-road-food-centre",
      "chinatown-complex-food-centre",
      "tiong-bahru-market",
    ],
    howToEat: [
      "Order the classic five-spice pork roll as your anchor, then build the rest of the selection around it",
      "Eat while hot — the tofu skin wrapper loses its crispness within minutes of leaving the oil",
      "Dip into the sweet plum sauce rather than the chilli — the plum sauce was designed specifically for ngoh hiang",
      "Cut the pork roll at an angle to expose the filling — you eat more confidently when you can see what's inside",
      "Mix pieces — a bite of pork roll, a bite of fish cake, a bite of prawn — the variety is the eating experience",
    ],
    keyIngredients: [
      { name: "Five-Spice Pork Roll", emoji: "🌯", role: "Minced pork and prawn seasoned with five spice, water chestnuts, and spring onion, wrapped in tofu skin and deep-fried. The centrepiece." },
      { name: "Tau Kee (Tofu Skin)", emoji: "🟡", role: "Dried tofu skin — soaked and used as the wrapper. Becomes golden and crispy when fried, containing the juicy meat filling inside." },
      { name: "Five Spice Powder", emoji: "🫙", role: "The signature seasoning — star anise, cloves, cinnamon, Sichuan pepper, and fennel. The aroma of ngoh hiang cooking is unmistakable." },
      { name: "Water Chestnut", emoji: "⚪", role: "Added to the filling — provides crunch that survives the frying process and contrasts with the soft minced meat." },
      { name: "Prawn Fritters", emoji: "🍤", role: "Whole prawns dipped in batter and fried — the crowd favourite that disappears from the display first." },
      { name: "Sweet Plum Sauce", emoji: "🍯", role: "The traditional dipping sauce — sweet, slightly tart, and the flavour that completes the five-spice pork roll." },
    ],
    bestStalls: [
      { name: "Lim's Ngoh Hiang", address: "Old Airport Road Food Centre, #01-100, 51 Old Airport Rd", area: "Kallang", note: "The most comprehensive ngoh hiang selection in Singapore — over 15 items daily, fried to order", mapsUrl: "https://maps.google.com/?q=Old+Airport+Road+Food+Centre+Ngoh+Hiang+Singapore" },
      { name: "Chinatown Complex Ngoh Hiang", address: "Chinatown Complex Food Centre, 335 Smith Street", area: "Chinatown", note: "The Teochew-style version — slightly less five spice than the Hokkien interpretation, with a larger prawn component", mapsUrl: "https://maps.google.com/?q=Chinatown+Complex+Ngoh+Hiang+Singapore" },
      { name: "Tiong Bahru Ngoh Hiang", address: "Tiong Bahru Market, #02-20, 30 Seng Poh Road", area: "Tiong Bahru", note: "Neighbourhood favourite — the glass display case is always full in the morning and empty by 1pm", mapsUrl: "https://maps.google.com/?q=Tiong+Bahru+Market+Ngoh+Hiang+Singapore" },
    ],
    shiokOMeter: { spiceHit: 2, messFactor: 2, flavourDepth: 8, queueGame: 5, shiokValue: 9 },
  },
  {
    name: "Ondeh Ondeh",
    slug: "ondeh-ondeh",
    category: "Peranakan (Nyonya)",
    description:
      "Ondeh ondeh is a Peranakan kueh that delivers one of food's great surprises: a small green ball of glutinous rice flour, rolled in fresh coconut, that explodes on the first bite with liquid gula melaka (palm sugar) syrup. The moment of biting through the soft, pandan-scented shell into the warm, sweet caramel centre is the entire point of the dish. Nyonya kueh-makers have been perfecting this experience for centuries. The shell must be thin enough to release the sugar immediately but thick enough to hold it during handling. The balance is the skill. The result is the reason that ondeh ondeh is one of Singapore's most beloved sweets.",
    origin:
      "Nyonya / Peranakan kueh tradition — ondeh ondeh combines Malay glutinous rice technique with the Chinese Peranakan love of pandan and coconut into something uniquely Straits.",
    whereToFind:
      "Bengawan Solo island-wide for the most consistent version; Katong and Joo Chiat Peranakan kueh shops for the traditional version; some hawker dessert stalls on weekends.",
    priceRange: "S$1–2 per piece, S$6–12 per box",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    funFact:
      "The green colour comes from pandan juice pressed fresh from pandan leaves — stalls that use artificial colouring produce a flatter green; the natural version is slightly uneven and more fragrant.",
    bestPairedWith:
      "Nothing — ondeh ondeh is a standalone experience. Eat it with full attention or not at all.",
    halal: true,
    spiceLevel: "None",
    difficulty: "Easy to eat",
    localSay:
      "Put the whole thing in your mouth at once. If you bite halfway, the gula melaka goes everywhere and on everyone.",
    hawkersThatServeIt: [
      "geylang-serai-market",
      "tiong-bahru-market",
      "chinatown-complex-food-centre",
    ],
    howToEat: [
      "Eat the entire piece in one bite — the gula melaka centre is liquid and will escape if you bite halfway",
      "Let it sit for a moment after removing from the bag — too hot and the sugar burns; too cold and it loses its fragrance",
      "Smell it before eating — good ondeh ondeh smells of fresh pandan and toasted coconut simultaneously",
      "The freshly grated coconut coating should be moist, not dry — dry coconut means it was made hours ago",
      "Eat in multiples — one is a tease. Five is the minimum for a complete experience",
    ],
    keyIngredients: [
      { name: "Glutinous Rice Flour", emoji: "⚪", role: "The shell — slightly chewy, slightly sticky, soft enough to yield to one bite but firm enough to hold the liquid filling." },
      { name: "Pandan Juice", emoji: "🌿", role: "Pressed fresh from pandan leaves and kneaded into the dough — gives the shell its green colour and the dish its distinctive floral fragrance." },
      { name: "Gula Melaka", emoji: "🍯", role: "Palm sugar syrup — the filling that makes ondeh ondeh what it is. Dark, caramel-rich, and slightly smoky. The moment it hits your tongue is the whole experience." },
      { name: "Fresh Coconut", emoji: "🥥", role: "Freshly grated and lightly salted — rolled over the finished kueh. The salt in the coconut contrasts with the sweet filling." },
      { name: "Sweet Potato", emoji: "🟠", role: "Added to some versions of the dough for softness and a faint sweetness — gives the shell more body and a slightly richer colour." },
      { name: "Pandan Leaf", emoji: "🌿", role: "The boiling water is infused with pandan — even the water that cooks the ondeh ondeh carries the fragrance through." },
    ],
    bestStalls: [
      { name: "Bengawan Solo", address: "Multiple outlets island-wide", area: "Island-wide", note: "Singapore's most beloved Peranakan kueh brand — the ondeh ondeh here uses fresh pandan juice and freshly grated coconut every morning", mapsUrl: "https://maps.google.com/?q=Bengawan+Solo+Singapore" },
      { name: "Kim Choo Kueh Chang", address: "109 East Coast Road", area: "Katong", note: "Katong heritage kueh shop — the ondeh ondeh is made from a three-generation family recipe and has a pandan fragrance you can smell from outside", mapsUrl: "https://maps.google.com/?q=Kim+Choo+Kueh+Chang+East+Coast+Singapore" },
      { name: "Hjh Maimunah Kueh", address: "11 Jalan Pisang", area: "Jalan Besar", note: "The Malay restaurant's kueh counter — ondeh ondeh made fresh daily with the kind of gula melaka filling that reminds Singaporeans of their grandmothers", mapsUrl: "https://maps.google.com/?q=Hjh+Maimunah+Jalan+Pisang+Singapore" },
    ],
    shiokOMeter: { spiceHit: 0, messFactor: 4, flavourDepth: 7, queueGame: 3, shiokValue: 9 },
  },

  // ─── CHINESE DIALECT HERITAGE ─────────────────────────────────────
  {
    name: "Bak Kut Teh",
    slug: "bak-kut-teh",
    category: "Chinese Dialect Heritage",
    description:
      "Bak kut teh — pork bone tea — is Singapore's most debated dish. The Teochew version is clear, peppery, and almost medicinal. The Hokkien version is dark with herbs, heavier, and smells like a Chinese medicine hall. Both are correct. Both are vigorously defended. The dish arrived with Hokkien and Teochew labourers who needed a fortifying breakfast before long days at the docks — pork ribs simmered with spices and medicinal herbs, eaten with rice and dark soy, and washed down with strong Chinese tea. Today it is eaten at midnight as much as in the morning. The 'tea' in the name refers to the Chinese tea drunk alongside, not to the broth itself.",
    origin:
      "Hokkien and Teochew dock workers in colonial Singapore — a fortifying morning meal that combined cheap pork bones with medicinal herbs into something that became one of the island's most beloved dishes.",
    whereToFind:
      "Geylang and Upper Thomson Road for the Teochew peppery version; Jurong West and the heartland for the Hokkien herbal version. Klang-style (Malaysian) dark herbal is also available in Singapore.",
    priceRange: "S$10–20 per claypot",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    funFact:
      "The 'tea' in bak kut teh refers to the Chinese tea drunk alongside the soup — traditionally believed to help digest the fatty pork and cut through the richness of the broth.",
    bestPairedWith:
      "Steamed white rice, you tiao for dipping in the broth, dark soy for the pork, and a pot of strong Chinese tea throughout.",
    halal: false,
    spiceLevel: "None",
    difficulty: "Easy to eat",
    localSay:
      "Teochew must be clear and peppery. Hokkien must be dark and herbal. They are not the same dish and arguing about which is better is the point.",
    hawkersThatServeIt: [
      "sembawang-hills-food-centre",
      "old-airport-road-food-centre",
      "jurong-west-505-market",
    ],
    howToEat: [
      "Order the claypot — it keeps the broth hot throughout the meal and the clay adds a faint earthiness",
      "Dip you tiao into the broth before eating — the fried dough absorbs it completely and becomes a different, better thing",
      "Apply dark soy and white pepper to the pork pieces on your plate, not in the communal broth",
      "Refill the broth pot as it diminishes — most stalls provide top-ups at no charge and the broth is the reason you're here",
      "Drink the Chinese tea between bites — it genuinely does cut through the pork fat and prepare you for the next piece",
    ],
    keyIngredients: [
      { name: "Pork Ribs", emoji: "🍖", role: "The centrepiece — simmered until the meat pulls from the bone but retains its texture. The quality of the pork determines the quality of the dish." },
      { name: "White Pepper", emoji: "⚪", role: "The defining spice in the Teochew version — the broth should taste of pepper first, pork second. The amount used is what separates hawkers." },
      { name: "Chinese Herbs", emoji: "🌿", role: "In the Hokkien version — dang gui, astragalus, wolfberries, and others give the dark broth its medicinal complexity and dark colour." },
      { name: "Garlic", emoji: "🧄", role: "Whole cloves simmered in the broth — they soften completely and can be eaten as a mild, sweet side alongside the pork." },
      { name: "Dark Soy", emoji: "🫙", role: "Served on the side for dipping the pork — thicker and sweeter than the soy in the broth. Applied to each piece individually." },
      { name: "You Tiao", emoji: "🥖", role: "Fried dough sticks served alongside — torn and dipped into the broth until saturated. The most satisfying use of you tiao in any dish." },
    ],
    bestStalls: [
      { name: "Song Fa Bak Kut Teh", address: "11 New Bridge Road", area: "Clarke Quay", note: "Singapore's most famous bak kut teh — the Teochew version, clear and peppery, served since 1969. The queue starts before opening.", mapsUrl: "https://maps.google.com/?q=Song+Fa+Bak+Kut+Teh+New+Bridge+Road+Singapore" },
      { name: "Ng Ah Sio Bak Kut Teh", address: "208 Rangoon Road", area: "Farrer Park", note: "Michelin Bib Gourmand. Claypot version with an intensely peppery broth — the pork ribs are fall-off-the-bone tender", mapsUrl: "https://maps.google.com/?q=Ng+Ah+Sio+Bak+Kut+Teh+Rangoon+Road+Singapore" },
      { name: "Founder Bak Kut Teh", address: "347 Balestier Road", area: "Balestier", note: "The dark, herbal Hokkien version done properly — the broth is slow-simmered for hours and the medicinal herbs are balanced without being overwhelming", mapsUrl: "https://maps.google.com/?q=Founder+Bak+Kut+Teh+Balestier+Road+Singapore" },
    ],
    shiokOMeter: { spiceHit: 3, messFactor: 2, flavourDepth: 9, queueGame: 7, shiokValue: 9 },
  },
  {
    name: "Lor Mee",
    slug: "lor-mee",
    category: "Chinese Dialect Heritage",
    description:
      "Lor mee is a Hokkien noodle dish that looks alarming and tastes extraordinary: thick, starchy gravy — thickened with cornstarch until it's almost gelatinous — poured over flat noodles with braised pork, fish cake, a hard-boiled egg, and a heavy pour of black vinegar. The gravy's thickness is the point: it clings to every strand of noodle and every piece of pork, ensuring that each bite is fully coated. The vinegar added tableside cuts through the richness with sharp precision. It is a dish that rewards the brave and confounds the uninitiated. Ask for extra vinegar. Always.",
    origin:
      "Hokkien immigrant hawker cooking — lor mee (卤面, braised noodles) reflects the Hokkien tradition of slow-braising proteins in dark, spiced soy and incorporating the braising liquid into the dish.",
    whereToFind:
      "Old Airport Road Food Centre, Toa Payoh, and Bedok for the most respected versions — lor mee is a heartland staple that most hawker centres have at least one version of.",
    priceRange: "S$4–7 per bowl",
    imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
    funFact:
      "The gravy's viscosity is achieved with cornstarch — the ratio must be precise or the gravy is either watery (too little) or gluey (too much). The ideal consistency should coat a spoon without dripping.",
    bestPairedWith:
      "Extra black vinegar on the side, garlic vinegar if the stall offers it, and a cold drink to balance the richness.",
    halal: false,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay: "Add vinegar until you're scared, then add a little more. That's the right amount.",
    hawkersThatServeIt: [
      "old-airport-road-food-centre",
      "toa-payoh-lorong-8-market",
      "bedok-interchange-hawker-centre",
    ],
    howToEat: [
      "Add black vinegar immediately and generously — the dish is designed for it and tastes incomplete without the acid",
      "Mix from the bottom before eating — the starchy gravy is thickest at the base",
      "Add sambal chilli if offered — the heat adds another dimension without competing with the vinegar",
      "Eat quickly — the gravy continues to thicken as it cools and the noodles absorb it into a dense mass",
      "Ask for extra braised pork if the stall allows — the braised meat is the best single element in the bowl",
    ],
    keyIngredients: [
      { name: "Thick Gravy", emoji: "🫙", role: "Cornstarch-thickened braising liquid — the defining element. Should be viscous enough to coat everything completely." },
      { name: "Flat Noodles", emoji: "🍜", role: "Thick, wide noodles — designed to carry the heavy gravy. Yellow egg noodles or kway teow are both used depending on the stall." },
      { name: "Braised Pork", emoji: "🥩", role: "Slow-braised in dark soy until tender — the protein that gives the dish its depth and the gravy its primary flavour." },
      { name: "Black Vinegar", emoji: "🫙", role: "Added tableside — the essential acid that cuts through the thick, starchy gravy and transforms the dish from heavy to balanced." },
      { name: "Fish Cake", emoji: "🐟", role: "Sliced and placed on top — springy, mild, and the textural contrast to the soft noodles and braised pork." },
      { name: "Hard-Boiled Egg", emoji: "🥚", role: "Halved and placed in the gravy — absorbs the braising liquid and adds richness. The yolk broken into the gravy thickens it further." },
    ],
    bestStalls: [
      { name: "Toa Payoh Lor Mee", address: "Old Airport Road Food Centre, #01-25, 51 Old Airport Rd", area: "Kallang", note: "The most consistent lor mee in Singapore — the gravy ratio is perfect every single service and the braised pork is always tender", mapsUrl: "https://maps.google.com/?q=Toa+Payoh+Lor+Mee+Old+Airport+Road+Singapore" },
      { name: "Bedok Lor Mee", address: "Bedok Interchange Hawker Centre, #01-22, 208 New Upper Changi Rd", area: "Bedok", note: "East-side version with a slightly darker, more intensely seasoned gravy — the vinegar here is served in a squeeze bottle for full tableside control", mapsUrl: "https://maps.google.com/?q=Bedok+Interchange+Hawker+Centre+Lor+Mee+Singapore" },
      { name: "Lim Lor Mee", address: "Toa Payoh Lorong 8 Market, #01-12", area: "Toa Payoh", note: "Heartland classic — the gravy has been the same recipe for thirty years and the regular customers know not to request changes", mapsUrl: "https://maps.google.com/?q=Toa+Payoh+Lorong+8+Lor+Mee+Singapore" },
    ],
    shiokOMeter: { spiceHit: 4, messFactor: 5, flavourDepth: 8, queueGame: 6, shiokValue: 9 },
  },
  {
    name: "Hae Mee",
    slug: "hae-mee",
    category: "Chinese Dialect Heritage",
    description:
      "Hae mee — prawn noodles — is one of Singapore's great broth dishes: yellow egg noodles and bee hoon in a deeply reduced prawn-and-pork broth, served with prawns, pork ribs, pork slices, and crispy lard. The broth is the entire achievement. Prawn shells and heads are roasted until caramelised, then simmered with pork bones for hours until the broth turns a deep, coral orange and tastes of concentrated prawn essence. This is Hokkien cooking at its most technically demanding. The dish was created by Hokkien hawkers who used the shells and heads that wealthier restaurants discarded to make something richer than anything those restaurants served.",
    origin:
      "Hokkien hawker innovation — prawn noodles were created by using prawn shells and heads (considered waste by restaurants) to make a broth of remarkable depth and intensity.",
    whereToFind:
      "Beach Road Prawn Noodle House, Blanco Court Prawn Mee, and hawker versions at Old Airport Road and Tekka Centre. The best stalls are identified by a dark, deeply orange broth.",
    priceRange: "S$5–12 per bowl depending on prawn size",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    funFact:
      "The richest hae mee broths are made by first dry-frying prawn shells and heads until charred, then adding them to the stock pot — the charred shells add a smoky depth that un-roasted shells cannot produce.",
    bestPairedWith:
      "Sambal belacan mixed to your heat preference, calamansi, and extra lard if the stall offers it.",
    halal: false,
    spiceLevel: "Mild",
    difficulty: "Easy to eat",
    localSay:
      "The broth colour tells you everything. Pale means under-reduced. Dark orange means they did it right.",
    hawkersThatServeIt: [
      "tekka-centre",
      "old-airport-road-food-centre",
      "bedok-interchange-hawker-centre",
    ],
    howToEat: [
      "Taste the broth first before adding anything — it should be intensely savoury and slightly sweet from the prawn",
      "Add sambal belacan in small increments — the broth is already complex and too much sambal covers its flavour",
      "Squeeze calamansi over the prawns rather than into the broth — it brightens the shellfish flavour specifically",
      "Order the dry version with soup on the side if available — the dry version is more concentrated and shows the stall's sauce quality",
      "Request extra lard crackling if offered — it adds a smoky crunch that elevates the broth dramatically",
    ],
    keyIngredients: [
      { name: "Prawn Broth", emoji: "🍤", role: "The entire reason the dish exists — roasted prawn heads and shells simmered with pork bones for hours. The colour, depth, and sweetness all come from here." },
      { name: "Prawns", emoji: "🦐", role: "Added to the bowl and cooked in the broth — the size of the prawn determines the price tier. Always order at least medium." },
      { name: "Pork Ribs", emoji: "🍖", role: "Braised separately and added — tender, falling off the bone, and absorbing the prawn broth's flavour from the braise." },
      { name: "Yellow Noodles & Bee Hoon", emoji: "🍜", role: "Both noodles in the same bowl — different textures that absorb the broth differently. The combination is the Hokkien way." },
      { name: "Lard & Crackling", emoji: "🫓", role: "Rendered lard drizzled over, crispy bits scattered on top — the fat that carries flavour and the crunch that the soft noodles need." },
      { name: "Sambal Belacan", emoji: "🌶️", role: "Chilli with shrimp paste — the funky, pungent contrast to the clean sweetness of the prawn broth. Applied carefully." },
    ],
    bestStalls: [
      { name: "Beach Road Prawn Mee", address: "370 East Coast Road", area: "Katong", note: "The most cited prawn noodle stall in Singapore — the broth here is reduced to a depth that is genuinely difficult to achieve", mapsUrl: "https://maps.google.com/?q=Beach+Road+Prawn+Mee+East+Coast+Road+Singapore" },
      { name: "Blanco Court Prawn Mee", address: "243 Beach Road, Golden Mile Food Centre", area: "Beach Road", note: "Michelin Bib Gourmand. The Beach Road institution — the dry version with a thick prawn paste sauce is the one locals order", mapsUrl: "https://maps.google.com/?q=Blanco+Court+Prawn+Mee+Golden+Mile+Food+Centre+Singapore" },
      { name: "Tekka Prawn Noodles", address: "Tekka Centre, #01-320, 665 Buffalo Road", area: "Little India", note: "The neighbourhood version for first-timers — accessible, consistent, and properly orange", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Prawn+Noodles+Singapore" },
    ],
    shiokOMeter: { spiceHit: 3, messFactor: 4, flavourDepth: 9, queueGame: 7, shiokValue: 9 },
  },
  {
    name: "Yong Tau Foo",
    slug: "yong-tau-foo",
    category: "Chinese Dialect Heritage",
    description:
      "Yong tau foo is the most democratic dish in Singapore: you choose your own pieces from a display of stuffed vegetables, tofu, and fish paste items, then choose soup or dry, and the price reflects exactly what you chose. The concept is Hakka — 'stuffed tofu' in Hakka dialect — but Singapore's version expanded far beyond tofu to include bitter gourd, chilli, eggplant, fish cake, and anything else the hawker decides to stuff with fish or meat paste that morning. It is a dish that rewards the curious and never punishes the cautious. Order what looks good. There are no wrong answers.",
    origin:
      "Hakka Chinese immigrant tradition — yong tau foo (酿豆腐) means 'stuffed tofu' in Hakka and reflects the Hakka habit of making protein go further by incorporating it into vegetables.",
    whereToFind:
      "Ampang Yong Tau Foo in the CBD; Hakka restaurants in the heartland; most hawker centres have at least one display-style stall where you point and choose.",
    priceRange: "S$4–10 depending on number of pieces chosen",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    funFact:
      "The fish paste used to stuff the vegetables must be bouncy and springy — if it's dense and crumbly, the fish content is too low and it has been padded with flour.",
    bestPairedWith:
      "The clear soup version is lighter and lets you taste each stuffed piece individually; the dry version with sweet sauce concentrates the flavours. Both are correct.",
    halal: false,
    spiceLevel: "None",
    difficulty: "Easy to eat",
    localSay:
      "The bitter gourd stuffed with fish paste is the test. If that's good, everything else will be good.",
    hawkersThatServeIt: [
      "maxwell-food-centre",
      "amoy-street-food-centre",
      "tampines-round-market",
    ],
    howToEat: [
      "Choose a mix of vegetables and tofu rather than all tofu — the variety of textures is what makes yong tau foo interesting",
      "Order the soup version first to taste the fish paste quality — the clear broth lets each piece speak for itself",
      "Dip into sweet sauce if going dry — the sauce should complement the fish paste, not overpower it",
      "Eat the bitter gourd first — it gets more bitter as it sits in the hot soup",
      "Add sambal chilli gradually if offered — the fish paste is delicate and too much chilli obscures its flavour",
    ],
    keyIngredients: [
      { name: "Fish Paste", emoji: "🐟", role: "The stuffing — fresh fish blended until bouncy and springy, seasoned simply. The quality of the paste determines the quality of the dish." },
      { name: "Tofu", emoji: "⬜", role: "The classic vessel — soft tofu cubed and stuffed, or firm tofu hollowed. The paste inside should be visible at the cut face." },
      { name: "Bitter Gourd", emoji: "🥬", role: "Sliced into rings, de-seeded, and stuffed with fish paste — the most popular piece. Its bitterness contrasts perfectly with the mild paste." },
      { name: "Chilli & Eggplant", emoji: "🍆", role: "Halved and stuffed — the chilli becomes mild after stuffing and cooking; the eggplant absorbs the broth and softens completely." },
      { name: "Sweet Sauce", emoji: "🍯", role: "Served with the dry version — thick, sweet, and slightly fermented. Applied over the finished bowl before eating." },
      { name: "Clear Broth", emoji: "🫙", role: "The soup version's base — anchovy and pork, light and clean. Designed to let the stuffed vegetables' individual flavours come through." },
    ],
    bestStalls: [
      { name: "Ampang Yong Tau Foo", address: "1 Tras Link, #01-14, 100AM Shopping Mall", area: "Tanjong Pagar", note: "The most celebrated yong tau foo in Singapore's CBD — the fish paste here is made fresh daily and the soup is properly clear", mapsUrl: "https://maps.google.com/?q=Ampang+Yong+Tau+Foo+Tanjong+Pagar+Singapore" },
      { name: "Fu Lin Yong Tau Foo", address: "Alexandra Village Food Centre, #01-58, 120 Bukit Merah Ln 1", area: "Alexandra", note: "The neighbourhood version that locals in Queenstown have been eating for decades — generous portions and a consistent fish paste quality", mapsUrl: "https://maps.google.com/?q=Fu+Lin+Yong+Tau+Foo+Alexandra+Village+Food+Centre+Singapore" },
      { name: "Hakka Yong Tau Foo", address: "Chinatown Complex Food Centre, 335 Smith Street", area: "Chinatown", note: "The traditional Hakka version — less variety, more technique. The fish paste is denser and more intensely flavoured than the typical hawker version", mapsUrl: "https://maps.google.com/?q=Chinatown+Complex+Yong+Tau+Foo+Singapore" },
    ],
    shiokOMeter: { spiceHit: 1, messFactor: 2, flavourDepth: 6, queueGame: 4, shiokValue: 8 },
  },
  {
    name: "Bak Chang",
    slug: "bak-chang",
    category: "Chinese Dialect Heritage",
    description:
      "Bak chang — glutinous rice dumpling — is Singapore's most labour-intensive hawker food: glutinous rice packed around a filling of braised pork belly, salted egg yolk, mushrooms, and chestnuts, wrapped tightly in bamboo leaves and boiled for hours. The result is dense, fragrant, and deeply satisfying — the bamboo leaf imparts a faint grassy note, the salted egg yolk adds richness, and the braised pork makes every bite substantial. Traditionally eaten during the Dragon Boat Festival, bak chang is now available year-round at hawker stalls that have been making the same recipe for three generations.",
    origin:
      "Chinese tradition honouring the poet Qu Yuan — bak chang (粽子) was thrown into rivers to feed the fish and prevent them from eating his body. Singapore's hawker version is Hokkien and Teochew in style.",
    whereToFind:
      "Amoy Street Food Centre for the most respected hawker version; Chinatown Complex and Old Airport Road for variety; everywhere during Dumpling Festival in May or June.",
    priceRange: "S$3–8 per dumpling",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    funFact:
      "The tying technique for bak chang determines how evenly it cooks — a perfectly tied dumpling has uniform density throughout; a loosely tied one has pockets of undercooked rice or overcompressed filling.",
    bestPairedWith:
      "A cup of Chinese tea, specifically pu-erh or oolong — the tea cuts through the richness of the glutinous rice and the braised pork.",
    halal: false,
    spiceLevel: "None",
    difficulty: "Easy to eat",
    localSay:
      "Unwrap slowly — the leaves tear if you rush and the rice sticks to them. This cannot be hurried.",
    hawkersThatServeIt: [
      "amoy-street-food-centre",
      "chinatown-complex-food-centre",
      "old-airport-road-food-centre",
    ],
    howToEat: [
      "Unwrap the bamboo leaves slowly and completely — the rice sticks to hasty unwrapping",
      "Smell the dumpling before eating — the bamboo fragrance should be present and clean",
      "Eat with chopsticks and find the salted egg yolk first — it's in the centre and should be the first major bite",
      "Pair each bite of the pork with some plain rice to balance the richness",
      "Eat warm, not hot — bak chang is best at body temperature rather than straight from the steamer",
    ],
    keyIngredients: [
      { name: "Glutinous Rice", emoji: "🍚", role: "The shell — soaked overnight, stir-fried with seasoning, then packed around the filling. Dense, sticky, and bamboo-fragrant." },
      { name: "Braised Pork Belly", emoji: "🥩", role: "The centrepiece filling — slow-braised in dark soy until silky. The fat should be translucent and the lean meat tender." },
      { name: "Salted Egg Yolk", emoji: "🥚", role: "Placed in the centre of each dumpling — rich, orange, and slightly grainy. The discovery of the yolk is the reward for unwrapping." },
      { name: "Dried Mushroom", emoji: "🍄", role: "Rehydrated and braised — earthy and silky, adding depth to the filling alongside the pork." },
      { name: "Chestnut", emoji: "🟤", role: "Adds starchy sweetness to the filling — the Hokkien and Teochew versions differ in how central the chestnut is." },
      { name: "Bamboo Leaves", emoji: "🌿", role: "Not just packaging — the leaves impart a distinctive grassy fragrance during the hours of boiling that becomes part of the dish's flavour." },
    ],
    bestStalls: [
      { name: "Hoo Kee Bak Chang", address: "Amoy Street Food Centre, #01-27, 7 Maxwell Road", area: "Tanjong Pagar", note: "The most celebrated bak chang stall in Singapore — the Hokkien-style filling here has been made from the same recipe since the stall opened", mapsUrl: "https://maps.google.com/?q=Hoo+Kee+Bak+Chang+Amoy+Street+Food+Centre+Singapore" },
      { name: "Chang Cheng Mee Wah", address: "Chinatown Complex Food Centre, #02-114, 335 Smith Street", area: "Chinatown", note: "The Teochew version with a sweeter filling and more chestnut — a different interpretation that has its own devoted following", mapsUrl: "https://maps.google.com/?q=Chinatown+Complex+Bak+Chang+Singapore" },
      { name: "Roland Restaurant Bak Chang", address: "89 Marine Parade Central", area: "Marine Parade", note: "Restaurant-quality bak chang that locals buy by the box during Dumpling Festival — the salted egg yolk ratio here is particularly generous", mapsUrl: "https://maps.google.com/?q=Roland+Restaurant+Marine+Parade+Bak+Chang+Singapore" },
    ],
    shiokOMeter: { spiceHit: 0, messFactor: 2, flavourDepth: 7, queueGame: 3, shiokValue: 8 },
  },

  // ─── INDIAN & SOUTH ASIAN HERITAGE ───────────────────────────────
  {
    name: "Roti Prata",
    slug: "roti-prata",
    category: "Indian & South Asian Heritage",
    description:
      "Roti prata is Singapore's most democratic breakfast — thin, flaky flatbread fried on a cast-iron griddle, served with fish or mutton curry for dipping. The dough is pulled and flipped until it becomes paper-thin, then folded back on itself and fried in ghee until the exterior is crispy and the interior is soft and layered. Indian Muslim hawkers from South India brought the tradition and Singapore made it a national institution. The plain prata is the test of any stall's technique. If the plain version is good — properly layered, golden, crispy without being dry — the rest of the menu will follow.",
    origin:
      "South Indian Muslim (Mamak) hawker tradition — roti prata is the Singapore version of the Indian parotta, simplified and adapted into a hawker staple eaten by all communities.",
    whereToFind:
      "Casuarina Curry Restaurant on Upper Thomson Road for the most debated version; Al-Ameen near Farrer Park; every residential estate with a mamak stall for the daily version.",
    priceRange:
      "S$1–2 for plain prata; S$2–5 for egg, coin, or tissue variations",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    funFact:
      "The tissue prata — stretched until it's almost transparent, then folded into a towering cone — requires the most technical skill of any prata variation and is ordered primarily to watch it being made.",
    bestPairedWith:
      "Fish curry for the purists, mutton curry for the initiated, and a glass of teh tarik to complete the ritual.",
    halal: true,
    spiceLevel: "Mild",
    difficulty: "Easy to eat",
    localSay:
      "Plain prata with fish curry. Two pieces. One teh tarik. Everything else is optional and everything else is wrong.",
    hawkersThatServeIt: [
      "tekka-centre",
      "adam-road-food-centre",
      "geylang-serai-market",
    ],
    howToEat: [
      "Order plain first to judge the technique — if plain is good, everything else will be good",
      "Tear pieces from the prata rather than cutting — the tearing reveals the layers and the texture",
      "Dip into the curry rather than pouring it on top — you control how much curry each bite carries",
      "Eat the prata within 5 minutes of it arriving — the crispy exterior softens as it cools",
      "Order an egg prata for your second piece — the egg inside adds richness and a different eating experience",
    ],
    keyIngredients: [
      { name: "Prata Dough", emoji: "🫓", role: "Wheat flour, water, ghee, and a little salt — rested, then pulled until elastic enough to stretch paper-thin without tearing." },
      { name: "Ghee", emoji: "🧈", role: "Clarified butter used on the griddle and in the dough — gives the prata its golden colour and a rich, slightly nutty fragrance." },
      { name: "Cast Iron Griddle", emoji: "🍳", role: "Well-seasoned and at the right temperature — the griddle transfers heat evenly and the seasoning adds flavour to every prata cooked on it." },
      { name: "Fish Curry", emoji: "🐟", role: "The classic accompaniment — slightly thin, coconut-forward, and properly spiced. Served hot alongside for dipping." },
      { name: "Mutton Curry", emoji: "🍖", role: "The other classic accompaniment — richer, darker, and a better pairing for thicker pratas like coin or egg versions." },
      { name: "Egg (optional)", emoji: "🥚", role: "Cracked inside the dough before folding — creates a richer, more filling prata. The egg prata is the most popular variation." },
    ],
    bestStalls: [
      { name: "Casuarina Curry", address: "136 Casuarina Road", area: "Upper Thomson", note: "Singapore's most debated prata — the Upper Thomson institution that has been frying since 1973 and has never changed the recipe", mapsUrl: "https://maps.google.com/?q=Casuarina+Curry+Upper+Thomson+Road+Singapore" },
      { name: "The Prata Shop", address: "11 Upper Thomson Road", area: "Upper Thomson", note: "Legendary coin prata — the smallest, crispiest prata variation, ordered by the dozen. The curry here is made fresh each morning", mapsUrl: "https://maps.google.com/?q=The+Prata+Shop+Upper+Thomson+Road+Singapore" },
      { name: "Al-Ameen Eating House", address: "1 Farrer Park Station Road", area: "Farrer Park", note: "24-hour mamak institution — the prata here is consistent at 3am as it is at 7am, which is exactly the point", mapsUrl: "https://maps.google.com/?q=Al-Ameen+Eating+House+Farrer+Park+Singapore" },
    ],
    shiokOMeter: { spiceHit: 3, messFactor: 2, flavourDepth: 7, queueGame: 6, shiokValue: 10 },
  },
  {
    name: "Fish Head Curry",
    slug: "fish-head-curry",
    category: "Indian & South Asian Heritage",
    description:
      "Fish head curry is Singapore's most theatrical dish: the head of a red snapper or grouper, halved and submerged in a rich, tangy curry of tamarind, coconut milk, and ground spices, served on a banana leaf with rice. The dish is entirely Singaporean — created in the 1950s by S. M. Gomez, a South Indian chef who combined Indian curry technique with the Chinese community's appreciation for fish head, producing something that neither tradition had cooked before. Today fish head curry is eaten by every community in Singapore and belongs completely to none of them. The cheek meat is the best part. The eye is for the brave.",
    origin:
      "Invented in Singapore in the 1950s by S. M. Gomez at his restaurant on Race Course Road — a deliberate fusion of South Indian curry and Chinese fish-head eating culture.",
    whereToFind:
      "Race Course Road's Indian restaurants for the original; Tekka Centre for the hawker version; banana-leaf restaurants in Little India for the full ceremonial experience.",
    priceRange: "S$20–45 per head depending on fish size and venue",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    funFact:
      "The tamarind in the curry serves as a natural preservative as well as a flavour element — fish head curry actually improves over 24 hours as the tamarind continues to work into the fish.",
    bestPairedWith:
      "Rice on a banana leaf, papadum, raita to cool the heat, and lassi or lime juice.",
    halal: true,
    spiceLevel: "Hot",
    difficulty: "Adventure eat",
    localSay:
      "The cheek meat is the best part of the fish. If you are afraid of the head, you are eating the wrong part.",
    hawkersThatServeIt: ["tekka-centre", "geylang-serai-market", "newton-food-centre"],
    howToEat: [
      "Start with the cheek meat — it's the most prized portion and the easiest to access without technical knowledge",
      "Spoon the curry over your rice and eat them together — the rice absorbs the tamarind curry and becomes the best rice you will eat this week",
      "Eat the vegetables in the curry — they have been cooking in the spiced tamarind and are deeply flavoured",
      "The eye is gelatinous and mild — worth trying if you're curious. It will not taste like what you fear",
      "Soak the papadum in the curry before eating — wet papadum is the correct way and any South Indian will confirm this",
    ],
    keyIngredients: [
      { name: "Red Snapper Head", emoji: "🐟", role: "Halved and braised in the curry — the head meat is sweeter and more gelatinous than fillet meat. The collagen from the bones enriches the curry." },
      { name: "Tamarind", emoji: "🫙", role: "The sourness that defines Singapore fish head curry — balanced against the coconut milk to create a tang that cuts through the richness of the fish." },
      { name: "Coconut Milk", emoji: "🥥", role: "Adds creaminess to the curry base — the ratio of tamarind to coconut milk determines whether the curry is sour-forward or creamy-forward." },
      { name: "Ground Spices", emoji: "🌶️", role: "Coriander, cumin, chilli, turmeric, fennel — the rempah or masala that gives the curry its colour, heat, and layered complexity." },
      { name: "Okra & Eggplant", emoji: "🥬", role: "Cooked in the curry — they absorb the tamarind and spices completely, becoming as important as the fish to the overall dish." },
      { name: "Banana Leaf", emoji: "🌿", role: "The serving vessel at traditional restaurants — it imparts a faint grassy fragrance and makes the eating experience ceremonial rather than merely functional." },
    ],
    bestStalls: [
      { name: "Banana Leaf Apolo", address: "54 Race Course Road", area: "Little India", note: "The most famous fish head curry in Singapore — served on banana leaf since 1974 and credited with popularising the dish among all communities", mapsUrl: "https://maps.google.com/?q=Banana+Leaf+Apolo+Race+Course+Road+Singapore" },
      { name: "Muthu's Curry", address: "138 Race Course Road", area: "Little India", note: "The second great Race Course Road institution — the curry here is slightly more tamarind-forward and the head portions are famously large", mapsUrl: "https://maps.google.com/?q=Muthu+Curry+Race+Course+Road+Singapore" },
      { name: "Tekka Fish Head Curry", address: "Tekka Centre, #01-248, 665 Buffalo Road", area: "Little India", note: "The hawker version — smaller portion, lower price, same fundamental recipe. The accessible entry point to Singapore fish head curry", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Fish+Head+Curry+Singapore" },
    ],
    shiokOMeter: { spiceHit: 8, messFactor: 7, flavourDepth: 9, queueGame: 5, shiokValue: 8 },
  },
  {
    name: "Biryani",
    slug: "biryani",
    category: "Indian & South Asian Heritage",
    description:
      "Singapore biryani is not the biryani of Hyderabad or Lucknow — it is the biryani of the Indian Muslim community that arrived in Singapore from Tamil Nadu and Penang, cooked in the dum style, fragrant with whole spices, saffron, and ghee, served with raita and a curry on the side. The rice must be long-grained and separate. The meat must be tender without falling apart. The spicing must be present but not dominating. At hawker centres like Tekka, the biryani is plated fresh from large pots with speed and precision — the auntie's ability to portion the rice, meat, and garnish in one fluid motion is a skill developed over decades.",
    origin:
      "Indian Muslim (Malay-Tamil) community in Singapore — brought from Tamil Nadu and refined through generations of Singaporean mamak and Indian-Muslim hawker cooking.",
    whereToFind:
      "Tekka Centre for Allauddin's Briyani (Michelin Bib Gourmand); Geylang Serai for the Malay-Muslim interpretation; Islamic Restaurant on North Bridge Road for the restaurant version.",
    priceRange: "S$5–15 per plate",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    funFact:
      "Dum biryani is cooked sealed — the pot is covered with dough or a heavy lid and the rice cooks in the steam from the meat and broth below. The moment of opening the pot releases the accumulated fragrance in one aromatic burst.",
    bestPairedWith:
      "Raita (yoghurt with cucumber), a side of curry, and a cold lime juice or lassi.",
    halal: true,
    spiceLevel: "Medium",
    difficulty: "Easy to eat",
    localSay:
      "The rice must be fragrant before you even take a bite. If you cannot smell the basmati from across the table, something is wrong.",
    hawkersThatServeIt: [
      "tekka-centre",
      "geylang-serai-market",
      "golden-shoe-market-street",
    ],
    howToEat: [
      "Mix the rice from the base of the plate — the spiced broth and meat juices pool at the bottom and must be distributed",
      "Eat the raita alongside rather than mixing it in — it cools the palate between bites rather than diluting the biryani's flavour",
      "Find the whole spices (cardamom, star anise, cinnamon) and move them to the side rather than eating them",
      "Add the curry on the side in small spoonfuls rather than pouring it over — each bite should have its own ratio",
      "Eat with your right hand if you're comfortable — the temperature and texture of biryani is experienced differently by hand than by cutlery",
    ],
    keyIngredients: [
      { name: "Basmati Rice", emoji: "🍚", role: "Long-grained and fragrant — cooked separately from the meat then layered. Each grain should be separate; clumping means overcooked." },
      { name: "Whole Spices", emoji: "🌿", role: "Cardamom, cinnamon, star anise, bay leaf — fried in ghee at the start to bloom their fragrance into the cooking fat." },
      { name: "Chicken or Mutton", emoji: "🍖", role: "Marinated in yoghurt and spices, cooked until tender — the protein that the rice is built around." },
      { name: "Saffron", emoji: "🟡", role: "Soaked in warm milk and drizzled over the rice before dum cooking — gives the top layer its golden colour and a faint floral note." },
      { name: "Ghee", emoji: "🧈", role: "Used at multiple stages — the fat that carries the spices and gives biryani its rich, slightly nutty finish." },
      { name: "Caramelised Onion", emoji: "🧅", role: "Fried until dark brown and crispy, scattered over the finished biryani — sweet, smoky, and the textural finishing touch." },
    ],
    bestStalls: [
      { name: "Allauddin's Briyani", address: "Tekka Centre, #01-98, 665 Buffalo Road", area: "Little India", note: "Michelin Bib Gourmand. The most respected biryani stall in Singapore — the pots are filled fresh each morning and sell out by midday", mapsUrl: "https://maps.google.com/?q=Allauddin+Briyani+Tekka+Centre+Singapore" },
      { name: "Bismillah Biryani", address: "50 Dunlop Street", area: "Little India", note: "The neighbourhood version in Little India's most characterful street — the mutton biryani here is slow-cooked overnight", mapsUrl: "https://maps.google.com/?q=Bismillah+Biryani+Dunlop+Street+Singapore" },
      { name: "Islamic Restaurant", address: "745 North Bridge Road", area: "Kampong Glam", note: "One of Singapore's oldest Indian-Muslim restaurants since 1921 — the biryani here is made the way it was made before modernisation changed everything", mapsUrl: "https://maps.google.com/?q=Islamic+Restaurant+North+Bridge+Road+Singapore" },
    ],
    shiokOMeter: { spiceHit: 5, messFactor: 2, flavourDepth: 9, queueGame: 8, shiokValue: 9 },
  },
  {
    name: "Teh Tarik",
    slug: "teh-tarik",
    category: "Indian & South Asian Heritage",
    description:
      "Teh tarik — pulled tea — is Singapore's most theatrical drink: strong black tea brewed with condensed milk, then poured in a high, sustained stream between two containers until it cools, froths, and becomes something different from the sum of its parts. The pulling creates micro-bubbles that give the tea a silky, light texture that no stirring can replicate. It is an Indian Muslim tradition that Singapore adopted completely and made its own. At hawker centres, the teh tarik uncle works with a rhythm that is half performance, half technique. The height of the pour is not showing off — it is the actual method.",
    origin:
      "Indian Muslim (Mamak) tradition from South India and Penang — teh tarik arrived in Singapore with Tamil Muslim hawkers and became one of the most beloved drinks of every community.",
    whereToFind:
      "Every mamak stall and Indian-Muslim food centre in Singapore — teh tarik is available everywhere but the best versions are from stalls that pour it properly rather than just stirring.",
    priceRange: "S$1–2 per glass",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    funFact:
      "The pulling cools the tea to drinking temperature at the same time as it froths it — a skilled teh tarik maker can produce a glass at exactly the right temperature every time without checking.",
    bestPairedWith:
      "Roti prata, murtabak, or nasi lemak — teh tarik pairs with all Malay and Indian food and is the default drink of any mamak meal.",
    halal: true,
    spiceLevel: "None",
    difficulty: "Easy to eat",
    localSay:
      "Must have froth on top. Flat teh tarik is just tea. The froth is the whole point of the pulling.",
    hawkersThatServeIt: [
      "tekka-centre",
      "geylang-serai-market",
      "adam-road-food-centre",
    ],
    howToEat: [
      "Drink while the froth is still present — within 5 minutes of pulling the bubbles collapse and it becomes regular tea",
      "Don't stir — the gradient from frothy top to dense sweet base at the bottom is deliberate",
      "Order it 'kurang manis' (less sweet) if the standard version is too sweet — most stalls accommodate",
      "Drink alongside roti prata while both are hot — the pairing is one of the great everyday food combinations",
      "Watch the pull if you can — the technique is worth observing and the sound of the pour across containers is one of the great ambient sounds of any hawker centre",
    ],
    keyIngredients: [
      { name: "Ceylon Black Tea", emoji: "🍵", role: "Strong-brewed until almost bitter — the base that the condensed milk must balance. Under-brewed tea cannot survive the pulling process." },
      { name: "Condensed Milk", emoji: "🥛", role: "Sweetened and thick — the sweetener that also provides the creaminess and the body that makes teh tarik different from regular milk tea." },
      { name: "Evaporated Milk", emoji: "🫙", role: "Added in addition to condensed milk in some versions — less sweet, more creamy, and adds a milkiness that condensed milk alone doesn't provide." },
      { name: "The Pull", emoji: "🫗", role: "Not an ingredient — a technique. The high pour between containers creates micro-bubbles, cools the drink, and produces the froth that defines teh tarik." },
      { name: "Hot Water", emoji: "💧", role: "The brewing medium — the temperature and length of brewing the tea leaves determines the strength that the pulling and milk must balance." },
      { name: "Froth", emoji: "🫧", role: "The result of the pulling — more than aesthetics, the froth changes the texture of the drink, making it lighter and silkier than stirred tea." },
    ],
    bestStalls: [
      { name: "Teh Tarik Club", address: "Tekka Centre, #01-325, 665 Buffalo Road", area: "Little India", note: "The most visited teh tarik counter in Little India — the uncle here has been pulling tea for over twenty years with the same motion", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Teh+Tarik+Singapore" },
      { name: "Adam Road Teh Tarik", address: "Adam Road Food Centre, #01-01, 2 Adam Road", area: "Bukit Timah", note: "The late-night version — best ordered at 11pm alongside nasi lemak. The pull here is particularly high and the froth particularly dense", mapsUrl: "https://maps.google.com/?q=Adam+Road+Food+Centre+Teh+Tarik+Singapore" },
      { name: "Geylang Serai Teh Tarik", address: "Geylang Serai Market, 1 Geylang Serai", area: "Geylang Serai", note: "During Ramadan the teh tarik stalls at Geylang Serai reach their peak — the volume of orders and the rhythm of pulling is worth watching", mapsUrl: "https://maps.google.com/?q=Geylang+Serai+Market+Teh+Tarik+Singapore" },
    ],
    shiokOMeter: { spiceHit: 0, messFactor: 2, flavourDepth: 6, queueGame: 3, shiokValue: 10 },
  },
  {
    name: "Vadai",
    slug: "vadai",
    category: "Indian & South Asian Heritage",
    description:
      "Vadai is Singapore's most satisfying South Indian snack: a lentil fritter fried until deeply golden and crispy, with a centre that stays soft and slightly yielding. The Medu vadai — the ring-shaped version made from urad dal — is the classic: crispy, lacy edges from the batter, an almost doughnut-like shape, and a flavour of lentil, cumin, and curry leaf. Tekka Centre's Indian stalls sell vadai alongside breakfast thali and alongside coffee. It is eaten hot from the oil, carried in a banana leaf, and consumed standing at the stall while ordering something else. The best vadai disappears in two bites.",
    origin:
      "South Indian Tamil tradition — vadai (வடை) is a staple of Tamil Nadu and Sri Lankan Tamil cuisine, brought to Singapore by Tamil immigrant communities.",
    whereToFind:
      "Tekka Centre for the most consistent daily supply; banana leaf restaurants in Little India; Indian bakeries and snack stalls in the Serangoon Road area.",
    priceRange: "S$0.80–1.50 per piece",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    funFact:
      "The batter for medu vadai must be ground to a specific consistency — too coarse and the vadai is dense; too fine and it doesn't fry properly. Traditional grinding is done on a wet stone grinder overnight.",
    bestPairedWith:
      "Coconut chutney, sambar for dipping, and a cup of filter coffee or teh tarik.",
    halal: true,
    spiceLevel: "Mild",
    difficulty: "Easy to eat",
    localSay:
      "Must eat hot — cold vadai is a completely different and inferior experience. Order only what you can eat immediately.",
    hawkersThatServeIt: [
      "tekka-centre",
      "geylang-serai-market",
      "tampines-round-market",
    ],
    howToEat: [
      "Eat immediately — vadai loses its crispness within minutes of leaving the oil",
      "Dip into coconut chutney rather than sambar for the first bite — the coconut sweetness complements the lentil without competing",
      "Hold it by the edge rather than the flat face — the batter is hot and the oil inside is hotter",
      "The hole in the medu vadai is not decorative — it ensures even cooking throughout so the inside is as done as the outside",
      "Order more than you think you need — one vadai is always too few",
    ],
    keyIngredients: [
      { name: "Urad Dal", emoji: "⚪", role: "Split black lentils, soaked and ground — the base of medu vadai batter. The protein-rich lentil creates the structure that holds the fry." },
      { name: "Curry Leaf", emoji: "🌿", role: "Mixed into the batter — releases its fragrance during frying and creates tiny crispy spots in the vadai's surface." },
      { name: "Cumin", emoji: "🟤", role: "The spice that flavours every bite — earthy, slightly warm, and the scent that identifies freshly fried vadai from across the stall." },
      { name: "Green Chilli", emoji: "🌶️", role: "Finely chopped into the batter — provides heat in small bursts rather than throughout the entire fritter." },
      { name: "Coconut Chutney", emoji: "🥥", role: "The serving accompaniment — freshly ground coconut with ginger, chilli, and tempered mustard seeds. The acid and sweetness balance the fried lentil." },
      { name: "Sambar", emoji: "🍲", role: "Tamarind-based lentil and vegetable broth — served alongside for dipping. More soup-like than the chutney and better suited to the softer centre of the vadai." },
    ],
    bestStalls: [
      { name: "Murugan Idli Shop", address: "Tekka Centre, #01-218, 665 Buffalo Road", area: "Little India", note: "The most consistent vadai stall in Tekka — fried fresh throughout the day and the coconut chutney is ground in-house each morning", mapsUrl: "https://maps.google.com/?q=Murugan+Idli+Shop+Tekka+Centre+Singapore" },
      { name: "Sri Murugan Sweets & Snacks", address: "108 Serangoon Road", area: "Little India", note: "Traditional South Indian snack shop — the vadai here is made from an overnight-ground batter that produces a different, more complex texture", mapsUrl: "https://maps.google.com/?q=Sri+Murugan+Sweets+Serangoon+Road+Singapore" },
      { name: "Komala Vilas", address: "76-78 Serangoon Road", area: "Little India", note: "Singapore's oldest South Indian vegetarian restaurant since 1947 — the vadai here is eaten as part of a thali and is made from the same recipe the restaurant opened with", mapsUrl: "https://maps.google.com/?q=Komala+Vilas+Serangoon+Road+Singapore" },
    ],
    shiokOMeter: { spiceHit: 2, messFactor: 2, flavourDepth: 6, queueGame: 3, shiokValue: 8 },
  },
  {
    name: "Appam",
    slug: "appam",
    category: "Indian & South Asian Heritage",
    description:
      "Appam is the most delicate item in Singapore's South Indian hawker repertoire: a bowl-shaped rice flour and coconut milk pancake, fermented overnight until the batter is slightly tangy, cooked in a small rounded wok until the edges are lacy and crispy while the centre remains soft and custardy. It is eaten with coconut milk, vegetable stew (ishtu), or a simple sweet coconut and jaggery sauce. The Tamil and Sri Lankan Tamil communities brought appam to Singapore and it remains a weekend breakfast institution in Little India. The laciness of a well-made appam is a sign of proper fermentation — rushing it produces a thick, heavy pancake that is a different and inferior dish.",
    origin:
      "Tamil Nadu and Sri Lanka — appam (அப்பம்) is a staple of Tamil and Jaffna Tamil cooking, brought to Singapore by South Indian and Sri Lankan Tamil communities.",
    whereToFind:
      "Little India's early morning restaurants and hawker stalls; Tekka Centre on weekend mornings; Sri Lankan restaurants in the Serangoon Road area.",
    priceRange: "S$1.50–3 per appam",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    funFact:
      "Appam batter must ferment for a minimum of 8 hours — the fermentation creates the slight sourness that balances the coconut's sweetness and produces the gas bubbles that give the lacy edges their characteristic holes.",
    bestPairedWith:
      "Coconut milk sweetened with a little sugar poured over the soft centre; or vegetable ishtu (a mild coconut-based vegetable stew) for the savoury version.",
    halal: true,
    spiceLevel: "None",
    difficulty: "Easy to eat",
    localSay:
      "The centre must be soft — if it is cooked through completely, the auntie left it on the heat too long.",
    hawkersThatServeIt: [
      "tekka-centre",
      "geylang-serai-market",
      "tampines-round-market",
    ],
    howToEat: [
      "Pour the coconut milk or stew into the soft centre of the appam rather than on the crispy edges — the centre is designed to hold liquid",
      "Eat the crispy edges first while they're still crunchy — they soften within minutes",
      "Order two — one with sweet coconut milk, one with savoury vegetable stew for the full appam experience",
      "Eat with your right hand — tear pieces from the edge and use them to scoop the filling from the centre",
      "The tangy flavour of properly fermented appam is intentional — if it doesn't have a slight sourness, the fermentation was cut short",
    ],
    keyIngredients: [
      { name: "Fermented Rice Batter", emoji: "🍚", role: "Rice flour fermented with coconut toddy or yeast overnight — the fermentation creates the sourness and the gas bubbles that produce the lacy edges." },
      { name: "Coconut Milk", emoji: "🥥", role: "Mixed into the batter — gives the appam its rich flavour and the soft, custardy texture of the centre that is the dish's defining characteristic." },
      { name: "Rounded Appam Pan", emoji: "🍳", role: "A small, deep, rounded wok — the shape forces the batter to pool in the centre, creating the thick, soft middle and thin, crispy edges simultaneously." },
      { name: "Coconut Milk Sauce", emoji: "🥥", role: "Served alongside for the sweet version — thinned with a little water and sweetened with sugar. Poured into the soft centre." },
      { name: "Vegetable Ishtu", emoji: "🥕", role: "Mild coconut-based vegetable stew with potato, carrot, and green peas — the savoury pairing that makes appam a complete meal." },
      { name: "Jaggery", emoji: "🟤", role: "Unrefined palm sugar used in some sweet accompaniments — gives a more complex, slightly smoky sweetness than refined sugar." },
    ],
    bestStalls: [
      { name: "Ananda Bhavan", address: "58 Serangoon Road", area: "Little India", note: "South Indian vegetarian restaurant serving appam fresh on weekend mornings — the lacy edges here are the finest example in Singapore", mapsUrl: "https://maps.google.com/?q=Ananda+Bhavan+Serangoon+Road+Singapore" },
      { name: "Tekka Appam Stall", address: "Tekka Centre, #01-145, 665 Buffalo Road", area: "Little India", note: "The accessible hawker version — made fresh throughout the morning and served with both sweet coconut milk and vegetable stew", mapsUrl: "https://maps.google.com/?q=Tekka+Centre+Appam+Singapore" },
      { name: "Janatha Vegetarian Restaurant", address: "Serangoon Road, Little India", area: "Little India", note: "Sri Lankan Tamil-style appam — slightly different fermentation produces a tangier batter and the edges are particularly thin and lacey", mapsUrl: "https://maps.google.com/?q=Janatha+Restaurant+Serangoon+Road+Singapore" },
    ],
    shiokOMeter: { spiceHit: 0, messFactor: 2, flavourDepth: 6, queueGame: 3, shiokValue: 8 },
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
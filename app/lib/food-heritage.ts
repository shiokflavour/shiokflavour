export type FoodHeritageDish = {
  name: string;
  slug: string;
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
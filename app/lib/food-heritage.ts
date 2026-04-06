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
    imageUrl:
      "https://images.unsplash.com/photo-1555126634-323283e09fa9?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "Some iconic stalls still fry one or two portions at a time—refusing to overload the wok—to preserve the elusive wok hei that locals swear they can smell from across the food centre.",
    bestPairedWith:
      "Calamansi lime squeeze, sambal on the side, and a cold sugar-cane juice to cut the richness.",
    halal: false,
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
      "https://images.unsplash.com/photo-1598514983318-2f32f8014326?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "Singapore's hawker chicken rice stalls often judge quality by rice first—aromatic, separate grains, and gentle chicken flavour before you even touch the meat.",
    bestPairedWith:
      "A clear chicken broth bowl, blanched greens with oyster sauce, and extra lime-chilli dip.",
    halal: true,
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
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "Traditional Katong laksa is eaten with only a spoon—the noodles are snipped short so you never fish awkwardly in public.",
    bestPairedWith:
      "Otak-otak on the side, sambal spooned in slowly, and a lime cordial or teh peng.",
    halal: true,
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
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "The name bundles \"ice\" with kachang (Malay for beans)—red beans remain the soul ingredient under all that colour.",
    bestPairedWith:
      "Curry puff or goreng pisang afterwards if you like sweet-savoury contrast—or share a bowl after spicy noodles.",
    halal: true,
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
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "Purists argue over Hainanese crisp toast versus softer white; both camps dunk fingers of toast into wobbly eggs seasoned with dark soy and white pepper.",
    bestPairedWith:
      "Kopi si or teh, soft-boiled eggs, and sometimes a light chee cheong fun on the side.",
    halal: false,
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
    imageUrl:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "The sauce's silkiness often comes from eggs ribboned in at the last moment—timing separates pool-worthy gravy from overcooked curds.",
    bestPairedWith:
      "Fried mantou, fragrant steamed rice, and a lime juice or cold beer to balance the heat.",
    halal: false,
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
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "Veteran rojak masters toast you tiao to different crispness levels so some bites stay crunchy after dressing soaks in.",
    bestPairedWith:
      "Ice jelly, sugar-cane juice, or a small plate of satay to follow the bold paste.",
    halal: true,
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
    imageUrl:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1600&q=80",
    funFact:
      "Some stalls differentiate themselves with firmer yam chips versus melt-away cubes—texture debates are as serious as syrup sweetness.",
    bestPairedWith:
      "After laksa or nasi lemak for contrast, or alongside ondeh-ondeh for a full Peranakan sweet spread.",
    halal: true,
  },
];

const bySlug = new Map(
  FOOD_HERITAGE_DISHES.map((dish) => [dish.slug, dish] as const),
);

export function getDishBySlug(slug: string): FoodHeritageDish | undefined {
  return bySlug.get(slug);
}

export function getAllFoodHeritageSlugs(): string[] {
  return FOOD_HERITAGE_DISHES.map((d) => d.slug);
}

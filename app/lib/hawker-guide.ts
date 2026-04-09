export type DrinkModifier = {
  code: string;
  meaning: string;
  origin: string;
  example?: string;
};

export type DrinkEntry = {
  name: string;
  alternateNames?: string[];
  description: string;
  story?: string;
  category: "kopi-teh" | "oldschool" | "other";
};

export type EtiquetteTip = {
  title: string;
  description: string;
  localSay?: string;
};

export type SinglishTerm = {
  term: string;
  pronunciation?: string;
  meaning: string;
  usedIn: string;
};

export const DRINK_MODIFIERS: DrinkModifier[] = [
  {
    code: "O",
    meaning: "No milk, with sugar",
    origin: "Hokkien for 'black'",
    example: "Kopi O = Black coffee with sugar",
  },
  {
    code: "C",
    meaning: "Evaporated milk instead of condensed milk",
    origin: "From 'Carnation' brand evaporated milk",
    example: "Teh C = Tea with evaporated milk",
  },
  {
    code: "Kosong",
    meaning: "No sugar, no milk",
    origin: "Malay for 'zero' or 'empty'",
    example: "Kopi O Kosong = Black coffee, no sugar",
  },
  {
    code: "Peng",
    meaning: "Iced",
    origin: "Hokkien for 'ice'",
    example: "Teh Peng = Iced tea with condensed milk",
  },
  {
    code: "Gao",
    meaning: "Extra thick and strong",
    origin: "Hokkien for 'thick'",
    example: "Kopi Gao = Extra strong coffee",
  },
  {
    code: "Po",
    meaning: "Weak and diluted",
    origin: "Hokkien for 'thin'",
    example: "Kopi Po = Weak coffee",
  },
  {
    code: "Siu Dai",
    meaning: "Less sweet",
    origin: "Cantonese for 'little sugar'",
    example: "Teh C Siu Dai = Tea with evaporated milk, less sweet",
  },
  {
    code: "Ga Dai",
    meaning: "Extra sweet",
    origin: "Cantonese for 'add sugar'",
    example: "Kopi Ga Dai = Extra sweet coffee",
  },
  {
    code: "Di Lo",
    meaning: "Extra condensed milk",
    origin: "Hokkien/Cantonese",
    example: "Teh Di Lo = Tea with extra condensed milk",
  },
  {
    code: "Ban Siu",
    meaning: "Half hot — warm but drinkable, not scalding",
    origin: "Hokkien 半烧, literally 'half burn'",
    example: "Kopi Ban Siu = Warm coffee, not too hot",
  },
];

export const DRINKS: DrinkEntry[] = [
  {
    name: "Kopi",
    description:
      "Coffee with condensed milk and sugar. The default kopitiam coffee — dark, sweet, and brewed through a cloth sock filter with Robusta beans roasted in butter and sugar.",
    story:
      "Singapore kopitiam coffee uses Robusta beans, not Arabica. The beans are roasted with sugar and butter until they caramelise, then brewed through a cloth sock. The result is thicker, darker, and sweeter than anything a speciality café produces. This is not a lesser coffee. It is a different coffee entirely.",
    category: "kopi-teh",
  },
  {
    name: "Teh",
    description:
      "Tea with condensed milk and sugar. Strong Ceylon or Assam tea, brewed dark, with condensed milk stirred in. The default kopitiam tea.",
    story:
      "Singapore teh is brewed stronger than most Western teas — the condensed milk requires a tea that can stand up to it. The result is rich, slightly tannic, and deeply sweet. It is the taste of every Singapore breakfast.",
    category: "kopi-teh",
  },
  {
    name: "Teh Tarik",
    alternateNames: ["Pulled Tea"],
    description:
      "Tea poured in a long, sustained stream between two vessels until it froths and cools. The pulling is the technique, not the decoration.",
    story:
      "Teh tarik arrived with Indian Muslim hawkers from South India. The high pour creates micro-bubbles that give the tea a silky texture no stirring can replicate. The froth on top is not optional — it is the whole point.",
    category: "kopi-teh",
  },
  {
    name: "Tak Kiu",
    alternateNames: ["Milo"],
    description:
      "Milo — the chocolate malt drink. Called Tak Kiu by older kopitiam regulars because the classic Milo tin featured a boy kicking a football.",
    story:
      "Tak Kiu means 'kick ball' in Hokkien. Before Milo was a word everyone knew, the uncles at the kopitiam called it by what they saw on the tin — a kid kicking a ball. The name stuck among a generation of Singaporeans who grew up ordering it this way.",
    category: "oldschool",
  },
  {
    name: "Milo Dinosaur",
    description:
      "A glass of iced Milo topped with an extra heaped scoop of undissolved Milo powder. The powder sits on top and you mix it in yourself.",
    story:
      "Nobody is entirely sure why it's called Dinosaur. The most accepted theory: the portions are prehistoric in size. Order one and you will understand immediately.",
    category: "kopi-teh",
  },
  {
    name: "Milo Godzilla",
    description:
      "Milo Dinosaur but with a scoop of vanilla ice cream added on top. The nuclear upgrade.",
    story:
      "If Dinosaur wasn't enough, someone added ice cream and named it after a bigger monster. Singapore dessert logic at its finest.",
    category: "kopi-teh",
  },
  {
    name: "Diao He / Tiao Yu",
    alternateNames: ["Chinese Tea", "Teabag Tea"],
    description:
      "Chinese tea made with a teabag in hot water. Called Diao He (Hokkien) or Tiao Yu (Mandarin) — both meaning 'fishing' — because dunking the teabag looks like a fishing line in water.",
    story:
      "One of the most poetic kopitiam nicknames. The image of a lazy fisherman dangling a line into a still river captures exactly what a teabag in hot water looks like. Old school kopitiam uncles still use this term.",
    category: "oldschool",
  },
  {
    name: "Orh Gao",
    alternateNames: ["Guinness Stout"],
    description:
      "Guinness Stout. Called Orh Gao — 'black dog' in Hokkien — because the old Guinness packaging featured a black dog.",
    story:
      "The old Guinness label had a black dog on it. Kopitiam regulars in the 1970s and 80s called it by what they saw. The packaging has changed. The name has not, among those who remember.",
    category: "oldschool",
  },
  {
    name: "Michael Jackson",
    description:
      "Soya bean milk mixed with grass jelly (cincau). Black and white — exactly like the man.",
    story:
      "This one requires no explanation. You look at the black grass jelly in the white soya bean milk and the nickname writes itself. A uniquely Singaporean tribute.",
    category: "oldschool",
  },
  {
    name: "Yuan Yang",
    alternateNames: ["Kopi + Teh"],
    description:
      "Half coffee, half tea, combined into one drink. Named after Mandarin ducks — a symbol of pairing — because the two drinks come together.",
    story:
      "More common in Hong Kong kopitiams but available in Singapore too. The bitterness of the kopi and the tannic sweetness of the teh create something genuinely different from either alone.",
    category: "kopi-teh",
  },
  {
    name: "Ah Huey / Ah Huat",
    alternateNames: ["Chrysanthemum Tea"],
    description:
      "Hot or iced chrysanthemum tea. Called Ah Huey because 'Huey' means flower in Hokkien.",
    story:
      "Adding 'Ah' before a name makes it affectionate in Hokkien and Cantonese. The flower tea became a person. Say 'Ah Huey Shio' for hot chrysanthemum tea and watch the kopitiam uncle nod with approval.",
    category: "oldschool",
  },
  {
    name: "Ji Ba Ho",
    alternateNames: ["100 Plus"],
    description:
      "100 Plus isotonic drink. Called Ji Ba Ho because 'Ji Ba Ho' means 'one hundred' in Hokkien dialect — and the number 100 is prominently displayed on the can.",
    story:
      "The pronunciation of the number 100 in Hokkien sounds enough like 'one hundred' to make the connection obvious to anyone who grew up speaking the dialect. A classic example of kopitiam naming logic.",
    category: "oldschool",
  },
  {
    name: "Wang Qing Shui / Lau De Hua",
    alternateNames: ["Mineral Water", "Plain Water"],
    description:
      "Bottled mineral water. Named after Andy Lau's 1990s hit 忘情水 (Wang Qing Shui) — 'water to forget love'. Some kopitiam uncles just call it 'Lau De Hua' after the singer himself.",
    story:
      "Andy Lau's song was everywhere in the 90s. The title means 'a potion to forget heartbreak'. Somewhere along the way, mineral water — clear, plain, forgettable — became associated with the song. It is one of the more poetic kopitiam nicknames.",
    category: "oldschool",
  },
  {
    name: "Beer Gao",
    description:
      "Local beer mixed with Guinness Stout — half and half. Adds body and bitterness to lager.",
    story:
      "Kopitiam uncles invented this long before craft beer was a concept. Guinness ran a campaign in 2015 trying to brand it. The uncles had been doing it for decades.",
    category: "oldschool",
  },
  {
    name: "Bandung",
    description:
      "Rose syrup with evaporated or condensed milk. Bright pink, sweet, and floral — the most visually distinctive kopitiam drink.",
    story:
      "Bandung arrived with the Malay community and is a fixture of Malay food stalls and mamak restaurants. The rose syrup turns the milk a shocking pink. Order it once, photograph it, order it again.",
    category: "kopi-teh",
  },
];

export const ETIQUETTE_TIPS: EtiquetteTip[] = [
  {
    title: "Chope Your Seat",
    description:
      "Place a packet of tissue, an umbrella, or even a name card on the table to reserve it before you order. This is a universally understood social contract at every hawker centre in Singapore.",
    localSay: "See tissue on the table, that seat is taken. Don't test it.",
  },
  {
    title: "Order From the Stall, Not a Waiter",
    description:
      "At hawker centres, you go to the stall and order directly. There are no waiters. Walk the entire centre first, decide what you want from which stalls, then order and carry your own food back.",
    localSay: "Walk first, decide later. Never order from the first stall you see.",
  },
  {
    title: "Dabao Means Takeaway",
    description:
      "Say 'dabao' if you want your food packed to go. The hawker will wrap it in plastic bags or containers. Most stalls are very efficient at this.",
    localSay: "Dabao lah — just say it. They understand immediately.",
  },
  {
    title: "Point at Economy Rice, Don't Overthink It",
    description:
      "At economy rice (cai fan) stalls, you point at the dishes you want and the auntie scoops them onto your rice. She calculates the price in her head. She is never wrong. Trust the process.",
    localSay:
      "Point fast. Auntie is waiting and the queue behind you has no patience.",
  },
  {
    title: "Return Your Tray",
    description:
      "Most hawker centres in Singapore now have tray return stations. It is expected that you return your tray and crockery after eating. This keeps the centre clean and supports the cleaners.",
    localSay: "Return the tray. It is not optional.",
  },
  {
    title: "The Drink Stall is Separate",
    description:
      "Drinks are almost always ordered from a separate drink stall, not from your food stall. Find the drink uncle or auntie, tell them your table number or what you ordered, and they will bring it to you.",
    localSay: "Drinks come to you. Food, you go get yourself.",
  },
  {
    title: "Cash Is Still King",
    description:
      "Most hawker stalls accept PayNow and some accept NETS, but many older stalls are cash only. Always have small notes on you — a $50 note at a $4 noodle stall is not appreciated.",
    localSay: "Bring small change. The uncle doesn't want to break a fifty.",
  },
];

export const SINGLISH_TERMS: SinglishTerm[] = [
  {
    term: "Shiok",
    pronunciation: "sh-ee-ok",
    meaning: "Delicious, satisfying, feels amazing — one word for all of the above",
    usedIn: "Wah, the laksa damn shiok lah.",
  },
  {
    term: "Makan",
    pronunciation: "mah-kan",
    meaning: "Eat (Malay). Used by all communities.",
    usedIn: "Come, makan time already.",
  },
  {
    term: "Jiak",
    pronunciation: "jee-ak",
    meaning: "Eat (Hokkien). Slightly more casual than makan.",
    usedIn: "Jiak liao boh? Have you eaten yet?",
  },
  {
    term: "Lim",
    pronunciation: "lim",
    meaning: "Drink (Hokkien).",
    usedIn: "Lim kopi first, talk later.",
  },
  {
    term: "Dabao",
    pronunciation: "dah-bao",
    meaning: "Takeaway. Pack it up to go.",
    usedIn: "Dabao for me — I eating at office.",
  },
  {
    term: "Chope",
    pronunciation: "chop",
    meaning: "Reserve a seat using tissue or personal item.",
    usedIn: "I chope the table already, go order first.",
  },
  {
    term: "Die Die Must Try",
    meaning: "Absolutely must eat this — no excuses, no exceptions",
    usedIn: "The char kway teow here die die must try.",
  },
  {
    term: "Lim Kopi",
    meaning:
      "Literally 'drink coffee' — but really means let's hang out and chat",
    usedIn: "Free or not? Go lim kopi later.",
  },
  {
    term: "Gao",
    pronunciation: "gow",
    meaning: "Thick, strong, intense. Used for drinks and food.",
    usedIn: "Kopi gao — I need strength today.",
  },
  {
    term: "Siu Dai",
    pronunciation: "see-you-die",
    meaning: "Less sweet. Used when ordering drinks.",
    usedIn: "Teh C siu dai please, auntie.",
  },
  {
    term: "Kurang Manis",
    pronunciation: "koo-rang mah-nis",
    meaning:
      "Less sweet (Malay). Same as siu dai but used at Malay/Indian stalls.",
    usedIn: "Teh tarik kurang manis.",
  },
  {
    term: "Kosong",
    pronunciation: "koh-song",
    meaning: "Empty — means no sugar, no milk when ordering drinks.",
    usedIn: "Kopi O kosong — trying to be healthy.",
  },
  {
    term: "Kaypoh",
    pronunciation: "kay-poh",
    meaning: "Nosy, busybody. Usually affectionate.",
    usedIn: "Eh don't so kaypoh lah, not your business.",
  },
  {
    term: "Kiasu",
    pronunciation: "kee-ah-soo",
    meaning: "Fear of losing out. The driving force behind every queue in Singapore.",
    usedIn: "Queue so long for what? So kiasu.",
  },
  {
    term: "Sian",
    pronunciation: "see-en",
    meaning:
      "Bored, tired, fed up. A single word that covers a wide range of mild despair.",
    usedIn: "Sian lah, queue until like that.",
  },
  {
    term: "Jialat",
    pronunciation: "jee-ah-lat",
    meaning: "In trouble, serious problem, this is bad.",
    usedIn: "Wah jialat — they sold out already.",
  },
  {
    term: "Catch No Ball",
    meaning:
      "Cannot understand what is being said. From Hokkien 'liak bo kiu'.",
    usedIn: "Eh speak slower lah, I catch no ball.",
  },
];


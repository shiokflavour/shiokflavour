/*
 * Hawker dish names decoded: data for /hawker-guide/dish-names.
 * One entry per dish page in food-heritage.ts (same slug).
 *
 * script: what a stall signboard would show, in the stall's own script
 *   (Chinese characters for Chinese stalls, Tamil for Tamil dishes).
 * cn: the usual Chinese name, for "laksa in Chinese"-type searches.
 * pinyin: Mandarin reading of cn.
 * lit: what the name literally means. "debated" where the origin is unsettled.
 */

export type Origin = "Chinese" | "Malay" | "Indian" | "Peranakan";
export type DishType = "Noodles" | "Rice" | "Mains" | "Snacks" | "Sweets & drinks";

export type DishName = {
  slug: string;
  name: string;
  origin: Origin;
  /** Which language or community the name comes from. */
  lang: string;
  type: DishType;
  script?: string;
  cn?: string;
  pinyin?: string;
  lit: string;
  what: string;
};

export const DISH_NAMES: DishName[] = [
  // Chinese noodles
  { slug: "char-kway-teow", name: "Char Kway Teow", origin: "Chinese", lang: "Teochew / Hokkien", type: "Noodles", script: "炒粿条", cn: "炒粿条", pinyin: "chǎo guǒ tiáo", lit: "Stir-fried rice-cake strips", what: "Flat rice noodles and yellow noodles fried with dark soy, cockles, lap cheong and egg over high heat." },
  { slug: "bak-chor-mee", name: "Bak Chor Mee", origin: "Chinese", lang: "Teochew / Hokkien", type: "Noodles", script: "肉脞面", cn: "肉脞面", pinyin: "ròu cuò miàn", lit: "Minced meat noodles", what: "Springy noodles tossed in black vinegar and chilli with minced pork, liver and meatballs." },
  { slug: "hokkien-mee", name: "Hokkien Mee", origin: "Chinese", lang: "Hokkien", type: "Noodles", script: "福建炒虾面", cn: "福建炒虾面", pinyin: "fú jiàn chǎo xiā miàn", lit: "Hokkien (fried prawn) noodles", what: "Yellow noodles and bee hoon braised in a rich prawn and pork stock, finished with sambal and lime." },
  { slug: "wanton-mee", name: "Wanton Mee", origin: "Chinese", lang: "Cantonese", type: "Noodles", script: "云吞面", cn: "云吞面", pinyin: "yún tūn miàn", lit: "Wonton noodles (wonton: 'swallowing clouds')", what: "Thin egg noodles with char siew and pork dumplings, served dry with chilli or in soup." },
  { slug: "lor-mee", name: "Lor Mee", origin: "Chinese", lang: "Hokkien", type: "Noodles", script: "卤面", cn: "卤面", pinyin: "lǔ miàn", lit: "Braised-gravy noodles", what: "Thick flat noodles in a starchy, five-spice braising gravy, sharpened with black vinegar and garlic." },
  { slug: "hae-mee", name: "Hae Mee (Prawn Noodles)", origin: "Chinese", lang: "Hokkien", type: "Noodles", script: "虾面", cn: "虾面", pinyin: "xiā miàn", lit: "Prawn noodles", what: "Noodles in a deep prawn-head and pork-bone broth, or served dry with chilli." },
  { slug: "fishball-noodles", name: "Fishball Noodles", origin: "Chinese", lang: "Teochew", type: "Noodles", script: "鱼圆面", cn: "鱼圆面", pinyin: "yú yuán miàn", lit: "Fishball noodles", what: "Bouncy hand-made Teochew fishballs with mee pok or other noodles, dry with chilli or in soup." },
  { slug: "satay-bee-hoon", name: "Satay Bee Hoon", origin: "Chinese", lang: "Teochew (Malay 'satay')", type: "Noodles", script: "沙爹米粉", cn: "沙爹米粉", pinyin: "shā diē mǐ fěn", lit: "Satay rice vermicelli", what: "Rice vermicelli, cuttlefish, kangkong and cockles drowned in peanut satay sauce." },
  { slug: "laksa", name: "Laksa", origin: "Peranakan", lang: "Malay (origin debated)", type: "Noodles", cn: "叻沙", pinyin: "lè shā", lit: "Origin debated", what: "Thick rice noodles in a spiced coconut curry broth with prawns, cockles and fishcake." },
  { slug: "mee-rebus", name: "Mee Rebus", origin: "Malay", lang: "Malay", type: "Noodles", lit: "Boiled noodles", what: "Yellow noodles in a thick, sweet sweet-potato gravy, topped with egg, tofu and green chilli." },
  { slug: "mee-siam", name: "Mee Siam", origin: "Malay", lang: "Malay", type: "Noodles", lit: "Siamese noodles", what: "Thin rice vermicelli in a sweet, sour and spicy tamarind gravy with egg and tau pok." },

  // Chinese rice and mains
  { slug: "hainanese-chicken-rice", name: "Hainanese Chicken Rice", origin: "Chinese", lang: "Hainanese", type: "Rice", script: "海南鸡饭", cn: "海南鸡饭", pinyin: "hǎi nán jī fàn", lit: "Hainan chicken rice", what: "Poached chicken with rice cooked in chicken fat and stock, with chilli, ginger and dark soy." },
  { slug: "economy-rice", name: "Economy Rice (Cai Png)", origin: "Chinese", lang: "Hokkien", type: "Rice", script: "经济饭", cn: "经济饭 / 菜饭", pinyin: "jīng jì fàn / cài fàn", lit: "Economy rice. Cai png: 'vegetable rice'", what: "Rice with your pick of dishes from a long counter, paid by what you choose." },
  { slug: "lor-ark", name: "Braised Duck Rice (Lor Ark)", origin: "Chinese", lang: "Teochew", type: "Rice", script: "卤鸭饭", cn: "卤鸭饭", pinyin: "lǔ yā fàn", lit: "Braised duck rice", what: "Duck braised in soy and five-spice, sliced over rice or kway chap, with braised egg and tofu." },
  { slug: "teochew-porridge", name: "Teochew Porridge (Muay)", origin: "Chinese", lang: "Teochew", type: "Rice", script: "潮州糜", cn: "潮州糜", pinyin: "cháo zhōu mí", lit: "Teochew porridge", what: "Watery rice porridge with a spread of small salty dishes: braised duck, salted egg, steamed fish." },
  { slug: "lei-cha-fan", name: "Thunder Tea Rice (Lei Cha Fan)", origin: "Chinese", lang: "Hakka", type: "Rice", script: "擂茶饭", cn: "擂茶饭", pinyin: "léi chá fàn", lit: "Pounded tea rice", what: "Rice topped with chopped greens, peanuts and tofu, eaten with a green soup of pounded herbs and tea." },
  { slug: "bak-kut-teh", name: "Bak Kut Teh", origin: "Chinese", lang: "Hokkien / Teochew", type: "Mains", script: "肉骨茶", cn: "肉骨茶", pinyin: "ròu gǔ chá", lit: "Meat bone tea", what: "Pork ribs simmered in a peppery garlic broth (Teochew style) or a darker herbal one (Hokkien style)." },
  { slug: "chilli-crab", name: "Chilli Crab", origin: "Chinese", lang: "English", type: "Mains", script: "辣椒螃蟹", cn: "辣椒螃蟹", pinyin: "là jiāo páng xiè", lit: "Chilli crab", what: "Mud crab in a sweet, tangy tomato-chilli gravy, mopped up with fried mantou." },
  { slug: "yong-tau-foo", name: "Yong Tau Foo", origin: "Chinese", lang: "Hakka", type: "Mains", script: "酿豆腐", cn: "酿豆腐", pinyin: "niàng dòu fu", lit: "Stuffed tofu", what: "Tofu, vegetables and fishballs stuffed with fish paste. You pick the pieces, in soup or dry." },
  { slug: "orh-luak", name: "Oyster Omelette (Orh Luak)", origin: "Chinese", lang: "Hokkien / Teochew", type: "Mains", script: "蚝煎", cn: "蚝煎", pinyin: "háo jiān", lit: "Oyster fry", what: "Fresh oysters fried with egg and a sticky potato-starch batter, with chilli vinegar." },
  { slug: "bbq-stingray", name: "BBQ Stingray", origin: "Malay", lang: "English (Malay 'ikan pari bakar')", type: "Mains", script: "烧魔鬼鱼", cn: "烧魔鬼鱼", pinyin: "shāo mó guǐ yú", lit: "Grilled 'devil fish'", what: "Stingray wing grilled in banana leaf under a thick layer of sambal. Chinese and Malay stalls both sell it." },
  { slug: "fish-head-curry", name: "Fish Head Curry", origin: "Indian", lang: "English", type: "Mains", cn: "咖喱鱼头", pinyin: "gā lí yú tóu", lit: "Fish head curry", what: "A whole red snapper head in a tangy curry with okra and aubergine. Born in Singapore." },

  // Chinese snacks and kueh
  { slug: "chai-tow-kway", name: "Carrot Cake (Chai Tow Kway)", origin: "Chinese", lang: "Teochew / Hokkien", type: "Snacks", script: "菜头粿", cn: "菜头粿", pinyin: "cài tóu guǒ", lit: "Radish cake (no carrot in it)", what: "Steamed white radish cake fried with egg and preserved radish, white or black with sweet soy." },
  { slug: "chwee-kueh", name: "Chwee Kueh", origin: "Chinese", lang: "Teochew", type: "Snacks", script: "水粿", cn: "水粿", pinyin: "shuǐ guǒ", lit: "Water rice cake", what: "Soft steamed rice cakes topped with salty preserved radish and chilli." },
  { slug: "popiah", name: "Popiah", origin: "Chinese", lang: "Hokkien / Teochew", type: "Snacks", script: "薄饼", cn: "薄饼", pinyin: "báo bǐng", lit: "Thin pancake", what: "A soft wheat skin rolled around braised turnip, egg, peanuts and sweet sauce." },
  { slug: "ngoh-hiang", name: "Ngoh Hiang", origin: "Chinese", lang: "Hokkien", type: "Snacks", script: "五香", cn: "五香", pinyin: "wǔ xiāng", lit: "Five spice", what: "Minced pork and prawn rolls wrapped in bean curd skin and fried, with other fritters." },
  { slug: "bak-chang", name: "Bak Chang", origin: "Chinese", lang: "Hokkien", type: "Snacks", script: "肉粽", cn: "肉粽", pinyin: "ròu zòng", lit: "Meat dumpling", what: "Glutinous rice wrapped in bamboo leaves around pork belly, mushroom and chestnut." },
  { slug: "soon-kueh", name: "Soon Kueh", origin: "Chinese", lang: "Teochew", type: "Snacks", script: "笋粿", cn: "笋粿", pinyin: "sǔn guǒ", lit: "Bamboo-shoot rice cake", what: "A translucent dumpling of bamboo shoot and turnip, eaten with dark soy and chilli." },
  { slug: "ang-ku-kueh", name: "Ang Ku Kueh", origin: "Chinese", lang: "Hokkien", type: "Snacks", script: "红龟粿", cn: "红龟粿", pinyin: "hóng guī guǒ", lit: "Red tortoise cake", what: "A red, tortoise-shell-shaped glutinous rice cake filled with mung bean or peanut." },

  // Chinese sweets and drinks
  { slug: "tau-huay", name: "Tau Huay (Soya Bean Curd)", origin: "Chinese", lang: "Hokkien", type: "Sweets & drinks", script: "豆花", cn: "豆花", pinyin: "dòu huā", lit: "Bean flower", what: "Silky soya bean curd in light syrup, warm or chilled." },
  { slug: "sugarcane-juice", name: "Sugarcane Juice", origin: "Chinese", lang: "English (Malay 'air tebu')", type: "Sweets & drinks", script: "甘蔗水", cn: "甘蔗水", pinyin: "gān zhè shuǐ", lit: "Sugarcane water", what: "Freshly pressed sugarcane, often with a squeeze of lemon." },

  // Malay
  { slug: "nasi-lemak", name: "Nasi Lemak", origin: "Malay", lang: "Malay", type: "Rice", cn: "椰浆饭", pinyin: "yē jiāng fàn", lit: "Rich (creamy) rice", what: "Coconut rice with sambal, ikan bilis, peanuts, egg and fried chicken or fish." },
  { slug: "nasi-padang", name: "Nasi Padang", origin: "Malay", lang: "Malay / Minangkabau", type: "Rice", lit: "Rice from Padang", what: "Rice with your pick of slow-cooked Minangkabau dishes from a glass cabinet." },
  { slug: "nasi-goreng", name: "Nasi Goreng", origin: "Malay", lang: "Malay", type: "Rice", lit: "Fried rice", what: "Rice fried with chilli paste and sweet soy, usually with egg, chicken and keropok." },
  { slug: "nasi-ulam", name: "Nasi Ulam", origin: "Malay", lang: "Malay", type: "Rice", lit: "Herb rice", what: "Rice tossed with finely shredded fresh herbs, toasted coconut and dried fish." },
  { slug: "lontong", name: "Lontong", origin: "Malay", lang: "Malay / Javanese", type: "Rice", lit: "Compressed rice cake", what: "Pressed rice cakes in sayur lodeh, a mild vegetable and coconut curry." },
  { slug: "satay", name: "Satay", origin: "Malay", lang: "Malay (origin debated)", type: "Mains", cn: "沙爹", pinyin: "shā diē", lit: "Origin debated", what: "Marinated meat skewers grilled over charcoal, with peanut sauce, onion, cucumber and ketupat." },
  { slug: "otak-otak", name: "Otak-Otak", origin: "Malay", lang: "Malay", type: "Snacks", cn: "乌打", pinyin: "wū dǎ", lit: "Brains (for its soft texture)", what: "Spiced fish paste wrapped in leaves and grilled over charcoal." },
  { slug: "sup-tulang", name: "Sup Tulang", origin: "Malay", lang: "Malay", type: "Mains", lit: "Bone soup", what: "Mutton bones in a blood-red, sweet and spicy tomato gravy. You suck out the marrow with a straw." },
  { slug: "roti-john", name: "Roti John", origin: "Malay", lang: "Malay", type: "Snacks", lit: "John's bread", what: "A baguette fried with egg, minced meat and onion, with chilli and mayonnaise." },
  { slug: "bubur-lambuk", name: "Bubur Lambuk", origin: "Malay", lang: "Malay", type: "Rice", lit: "Bubur: porridge", what: "Spiced rice porridge cooked in big pots at mosques and given out during Ramadan." },
  { slug: "rojak", name: "Rojak", origin: "Malay", lang: "Malay", type: "Snacks", cn: "罗惹", pinyin: "luó rě", lit: "Mixture", what: "Fruit, vegetables and fried dough tossed in sticky prawn paste and crushed peanuts." },
  { slug: "chendol", name: "Chendol", origin: "Malay", lang: "Malay", type: "Sweets & drinks", cn: "煎蕊", pinyin: "jiān ruǐ", lit: "Origin debated", what: "Shaved ice with green pandan jelly, coconut milk, red beans and gula melaka." },
  { slug: "ice-kachang", name: "Ice Kachang", origin: "Malay", lang: "Malay", type: "Sweets & drinks", cn: "红豆冰", pinyin: "hóng dòu bīng", lit: "Ice beans", what: "A mountain of shaved ice over red beans and jelly, drenched in coloured syrups and milk." },
  { slug: "bandung", name: "Bandung", origin: "Malay", lang: "Malay", type: "Sweets & drinks", lit: "Origin debated", what: "Rose syrup with evaporated or condensed milk. Bright pink and very sweet." },
  { slug: "curry-puff", name: "Curry Puff", origin: "Malay", lang: "English (Malay 'karipap')", type: "Snacks", cn: "咖喱角", pinyin: "gā lí jiǎo", lit: "Curry pastry", what: "A crimped pastry filled with curried potato, chicken and egg." },

  // Peranakan
  { slug: "ayam-buah-keluak", name: "Ayam Buah Keluak", origin: "Peranakan", lang: "Malay", type: "Mains", lit: "Chicken with keluak nuts", what: "Chicken stewed with the black, earthy keluak nut. You scoop the paste out of the shell." },
  { slug: "kueh-pie-tee", name: "Kueh Pie Tee", origin: "Peranakan", lang: "Peranakan", type: "Snacks", lit: "Nicknamed 'top hats'", what: "Crisp pastry cups filled with braised turnip, prawn and chilli." },
  { slug: "ondeh-ondeh", name: "Ondeh Ondeh", origin: "Peranakan", lang: "Malay", type: "Sweets & drinks", lit: "Origin unknown", what: "Pandan glutinous rice balls filled with molten gula melaka, rolled in grated coconut." },
  { slug: "kueh-lapis", name: "Kueh Lapis", origin: "Peranakan", lang: "Malay", type: "Sweets & drinks", cn: "九层糕", pinyin: "jiǔ céng gāo", lit: "Layer cake", what: "A steamed cake of coloured layers you peel off one by one." },
  { slug: "bobo-cha-cha", name: "Bobo Cha Cha", origin: "Peranakan", lang: "Malay / Peranakan", type: "Sweets & drinks", cn: "摩摩喳喳", pinyin: "mó mó zhā zhā", lit: "Origin debated", what: "Sweet potato, yam and sago in warm or cold coconut milk." },
  { slug: "kaya-toast", name: "Kaya Toast", origin: "Chinese", lang: "Malay 'kaya' (rich), Hainanese kopitiam", type: "Snacks", script: "咖椰吐司", cn: "咖椰吐司", pinyin: "kā yē tǔ sī", lit: "Rich (jam) toast", what: "Toast with coconut-egg jam and cold butter, with soft-boiled eggs and kopi." },

  // Indian
  { slug: "roti-prata", name: "Roti Prata", origin: "Indian", lang: "Hindi / Tamil", type: "Snacks", cn: "印度煎饼", pinyin: "yìn dù jiān bǐng", lit: "Flatbread (from paratha)", what: "Flaky griddled flatbread, plain or with egg, dipped in fish or mutton curry." },
  { slug: "murtabak", name: "Murtabak", origin: "Indian", lang: "Arabic", type: "Snacks", lit: "Folded", what: "Prata dough stuffed with spiced minced mutton or chicken, egg and onion, with curry." },
  { slug: "biryani", name: "Biryani", origin: "Indian", lang: "Persian", type: "Rice", lit: "Fried (or roasted)", what: "Long-grain rice layered with spiced mutton or chicken and cooked together." },
  { slug: "teh-tarik", name: "Teh Tarik", origin: "Indian", lang: "Malay", type: "Sweets & drinks", cn: "拉茶", pinyin: "lā chá", lit: "Pulled tea", what: "Sweet milky tea poured between two mugs from a height until frothy." },
  { slug: "vadai", name: "Vadai", origin: "Indian", lang: "Tamil", type: "Snacks", script: "வடை", lit: "Fried lentil fritter", what: "Crisp fritters of ground lentils, often with a prawn on top." },
  { slug: "appam", name: "Appam", origin: "Indian", lang: "Tamil", type: "Snacks", script: "ஆப்பம்", lit: "Rice pancake", what: "A bowl-shaped fermented rice pancake, crisp at the edge and soft in the middle." },
  { slug: "masala-thosai", name: "Masala Thosai", origin: "Indian", lang: "Tamil", type: "Snacks", script: "மசாலா தோசை", lit: "Spiced (filled) rice crepe", what: "A thin fermented rice and lentil crepe folded around spiced potato." },
  { slug: "naan", name: "Naan", origin: "Indian", lang: "Persian", type: "Snacks", lit: "Bread", what: "Leavened flatbread baked against the wall of a tandoor oven." },
];

/** The words that repeat on stall signs. `match` finds them in dish names. */
export const WORD_FAMILIES: { word: string; cn?: string; from: string; means: string; match: RegExp }[] = [
  { word: "Kway / Kueh", cn: "粿", from: "Hokkien / Teochew", means: "rice cake, or flat rice noodles", match: /kway|kueh/i },
  { word: "Mee", cn: "面", from: "Hokkien", means: "noodles", match: /\bmee\b/i },
  { word: "Bee hoon", cn: "米粉", from: "Hokkien", means: "rice vermicelli", match: /bee hoon/i },
  { word: "Char", cn: "炒", from: "Hokkien / Teochew", means: "stir-fried", match: /\bchar\b/i },
  { word: "Lor", cn: "卤", from: "Hokkien / Teochew", means: "braised in soy and spice", match: /\blor\b/i },
  { word: "Bak", cn: "肉", from: "Hokkien", means: "meat (usually pork)", match: /\bbak\b/i },
  { word: "Hae", cn: "虾", from: "Hokkien", means: "prawn", match: /\bhae\b/i },
  { word: "Png", cn: "饭", from: "Hokkien", means: "cooked rice", match: /\bpng\b/i },
  { word: "Nasi", from: "Malay", means: "cooked rice", match: /\bnasi\b/i },
  { word: "Goreng", from: "Malay", means: "fried", match: /goreng/i },
  { word: "Roti", from: "Malay", means: "bread", match: /\broti\b/i },
  { word: "Ayam", from: "Malay", means: "chicken", match: /\bayam\b/i },
  { word: "Sup", from: "Malay", means: "soup", match: /\bsup\b/i },
  { word: "Teh", from: "Hokkien, via Malay", means: "tea", match: /\bteh\b/i },
];

export const DISH_NAME_FAQS: { q: string; a: string }[] = [
  {
    q: "What is economy rice in Chinese?",
    a: "Economy rice is 经济饭 (jīng jì fàn) in Mandarin. Most Singaporeans call it cai png, Hokkien for 菜饭 (cài fàn), which means 'vegetable rice'.",
  },
  {
    q: "What is laksa in Chinese?",
    a: "Laksa is written 叻沙 (lè shā) in Chinese. The characters simply sound out the Malay name. Where the word 'laksa' itself comes from is still debated.",
  },
  {
    q: "What does char kway teow mean?",
    a: "Char kway teow is Teochew and Hokkien for 炒粿条: char (炒) means stir-fried, and kway teow (粿条) means flat rice-cake strips, the wide rice noodles at the heart of the dish.",
  },
  {
    q: "What does yong tau foo mean?",
    a: "Yong tau foo is Hakka for 酿豆腐, 'stuffed tofu'. It began as tofu stuffed with meat; today you pick tofu, vegetables and fishballs filled with fish paste, served in soup or dry.",
  },
  {
    q: "Why is chai tow kway called carrot cake when there is no carrot?",
    a: "Chai tow (菜头) is the Teochew and Hokkien word for white radish, sometimes called 'white carrot' in English, which is the usual explanation for the name. So 'carrot cake' is really radish cake, steamed and then fried with egg.",
  },
  {
    q: "What is murtabak?",
    a: "Murtabak is prata dough stuffed with spiced minced mutton or chicken, egg and onion, folded into a parcel and fried, then eaten with curry. The name comes from the Arabic for 'folded'.",
  },
  {
    q: "How do you say less rice or no chilli at a hawker stall?",
    a: "At a Chinese stall, less rice is 少饭 (shǎo fàn), more rice is 加饭 (jiā fàn) and no chilli is 不要辣 (bú yào là). At a Malay or Indian stall, say nasi sikit for less rice, tambah nasi for more rice and tak nak pedas for no chilli. Takeaway is 打包 (dǎ bāo) or bungkus.",
  },
  {
    q: "What does kosong mean at a hawker centre?",
    a: "Kosong is Malay for 'empty' or 'zero'. At a prata stall it means plain prata with no filling; at a drinks stall, kosong means no sugar.",
  },
];

/* ------------------------------------------------------------------ */
/* Requests you can add to the "Show the uncle" card.                  */
/* cn is shown at Chinese stalls, ms (Malay) everywhere else.          */
/* Options in the same group cancel each other (less vs more rice).    */
/* ------------------------------------------------------------------ */

const DRINKS = new Set(["teh-tarik", "sugarcane-juice", "bandung"]);
/** Chinese noodle dishes usually offered both dry and in soup. */
const DRY_OR_SOUP = new Set(["bak-chor-mee", "wanton-mee", "fishball-noodles", "hae-mee", "yong-tau-foo"]);
/** Dishes that normally come with chilli or a spicy sauce. */
const NO_CHILLI = new Set(["rojak", "chendol", "ice-kachang", "bobo-cha-cha", "kueh-lapis", "ondeh-ondeh", "tau-huay", "ang-ku-kueh", "naan"]);

export type DishRequest = {
  id: string;
  en: string;
  cn: string;
  pinyin: string;
  ms: string;
  group: string;
  applies: (d: DishName) => boolean;
};

const isRice = (d: DishName) => d.type === "Rice" && d.slug !== "bubur-lambuk" && d.slug !== "teochew-porridge";
const isNoodle = (d: DishName) => d.type === "Noodles";
const isSavoury = (d: DishName) => d.type !== "Sweets & drinks" && !NO_CHILLI.has(d.slug);
const isMeal = (d: DishName) => d.type === "Rice" || d.type === "Noodles" || d.type === "Mains";
const isSweet = (d: DishName) => d.type === "Sweets & drinks";

export const DISH_REQUESTS: DishRequest[] = [
  { id: "less-rice", en: "Less rice", cn: "少饭", pinyin: "shǎo fàn", ms: "Nasi sikit", group: "rice", applies: isRice },
  { id: "more-rice", en: "More rice", cn: "加饭", pinyin: "jiā fàn", ms: "Tambah nasi", group: "rice", applies: isRice },
  { id: "less-noodles", en: "Less noodles", cn: "少面", pinyin: "shǎo miàn", ms: "Mee sikit", group: "noodles", applies: isNoodle },
  { id: "more-noodles", en: "More noodles", cn: "加面", pinyin: "jiā miàn", ms: "Tambah mee", group: "noodles", applies: isNoodle },
  { id: "extra", en: "Extra meat / toppings", cn: "加料", pinyin: "jiā liào", ms: "Tambah lauk", group: "extra", applies: isMeal },
  { id: "dry", en: "Dry", cn: "干", pinyin: "gān", ms: "Kering", group: "style", applies: (d) => DRY_OR_SOUP.has(d.slug) },
  { id: "soup", en: "Soup", cn: "汤", pinyin: "tāng", ms: "Sup", group: "style", applies: (d) => DRY_OR_SOUP.has(d.slug) },
  { id: "no-chilli", en: "No chilli", cn: "不要辣", pinyin: "bú yào là", ms: "Tak nak pedas", group: "chilli", applies: isSavoury },
  { id: "less-spicy", en: "Less spicy", cn: "少辣", pinyin: "shǎo là", ms: "Kurang pedas", group: "chilli", applies: isSavoury },
  { id: "no-spring-onion", en: "No spring onion", cn: "不要葱", pinyin: "bú yào cōng", ms: "Tak nak daun bawang", group: "onion", applies: (d) => isNoodle(d) || d.slug === "hainanese-chicken-rice" || d.slug === "lor-ark" },
  { id: "less-sweet", en: "Less sweet", cn: "少甜", pinyin: "shǎo tián", ms: "Kurang manis", group: "sweet", applies: isSweet },
  { id: "less-ice", en: "Less ice", cn: "少冰", pinyin: "shǎo bīng", ms: "Kurang ais", group: "ice", applies: (d) => DRINKS.has(d.slug) },
  { id: "no-ice", en: "No ice", cn: "不要冰", pinyin: "bú yào bīng", ms: "Tak nak ais", group: "ice", applies: (d) => DRINKS.has(d.slug) },
];

/** Takeaway, shown as its own toggle. */
export const TAKEAWAY = { en: "Takeaway", cn: "打包", pinyin: "dǎ bāo", ms: "Bungkus" };

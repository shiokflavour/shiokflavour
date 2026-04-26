export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Guide" | "Story" | "Ranking" | "Culture";
  readTime: string;
  publishedAt: string;
  heroImage: string;
  excerpt: string;
  content: string;
  series?: {
    name: "How to Order";
    number: number;
  };
  comingSoon?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "singapore-hawker-food-guide-first-timers",
    title: "The Complete Singapore Hawker Food Guide for First-Timers",
    subtitle: "Everything you need to know before you eat",
    category: "Guide",
    readTime: "8 min read",
    publishedAt: "2026-04-11",
    heroImage: "/images/food/chicken-rice.jpg",
    excerpt:
      "You've landed in Singapore. Everyone has told you to eat at the hawker centres. Nobody has told you how. This is that guide.",
    content: `You've landed in Singapore. Everyone has told you to eat at the hawker centres. Nobody has told you how. This is that guide.

## What Is A Hawker Centre?

A hawker centre is an open-air complex of individual food stalls, each run by a different cook specialising in one or two dishes. Think of it as a food court — but one where every stall has been perfecting the same recipe for decades, and where a full meal costs you less than a coffee at Starbucks.

Singapore has over 100 hawker centres spread across the island. They are the heartbeat of daily life here. Residents eat at them for breakfast, lunch, dinner, and supper. They are where construction workers, CEOs, students, and retirees all pull up a plastic chair and eat the same food from the same stalls.

UNESCO recognised Singapore's hawker culture as Intangible Cultural Heritage in 2020. The uncles and aunties who run the stalls already knew.

## How To Navigate A Hawker Centre

**Step 1 — Walk the whole centre first.**
Do not order from the first stall you see. Walk the entire space, read the menus, look at what other people are eating. Singapore hawker centres reward the curious.

**Step 2 — Look for the queue.**
A queue is the most reliable indicator of quality in Singapore. If locals are queueing for it — and they have very little patience for bad food — it is worth your time.

**Step 3 — Chope your seat.**
Before you order, find a table and place a packet of tissue on it. This is "choping" — reserving your seat the Singapore way. A tissue packet, umbrella, or name card on a table means it is taken. Do not sit at a choped table.

**Step 4 — Order your drinks separately.**
The drink stall is almost always separate from the food stalls. Find the uncle or auntie running drinks, order there, and they will either bring it to you or you collect it separately.

**Step 5 — Pay by dish, not by table.**
Each stall is an independent business. You pay at each stall when you order. There is no central cashier. Bring small notes — a $50 note at a $3.50 noodle stall is not appreciated.

## What To Order First

If this is your first hawker centre experience, start here:

**Hainanese Chicken Rice** — Singapore's unofficial national dish. Silky poached chicken, fragrant rice cooked in chicken fat, and three sauces. Order it at any hawker centre. The debate about which stall is best will never be resolved.

**Char Kway Teow** — Flat rice noodles stir-fried over fierce heat with dark soy, egg, bean sprouts, and cockles. The wok hei — the smoky breath of the wok — is the whole point. Order from a stall that uses charcoal if you can find one.

**Laksa** — Coconut curry broth, rice noodles, fish cake, and cockles. Rich, spicy, and deeply Singaporean. Katong-style laksa is the version most locals will point you to.

**Roti Prata** — At Indian Muslim stalls, usually open from early morning. A flaky, griddled flatbread served with fish or mutton curry for dipping. Order plain first. If it is good, order egg.

**Ice Kachang** — For dessert. Shaved ice, coloured syrups, red beans, corn, and jelly. It looks alarming. It is perfect.

## How Much Should You Spend?

A full meal at a hawker centre — one main dish, a drink, and possibly dessert — should cost you between S$5 and S$12. If you are spending more than that, you are at a tourist-facing stall or ordering more food than one person needs.

The cheapest full meal in Singapore is economy rice — also called cai fan or mixed rice. You point at the dishes you want from a display counter, the auntie scoops them over rice, and you pay based on how many dishes you chose. Three dishes and rice for under S$5 is common.

## The Etiquette You Need To Know

- Return your tray to the tray return station when you are done
- Do not save a table with your bag — use tissue
- Do not expect service — you go to the stall, you order, you collect
- Do not be on your phone when ordering — have your order ready
- Cash is still the primary payment method at most stalls, though PayNow is increasingly accepted

## The Best Hawker Centres For First-Timers

**Maxwell Food Centre** — Central, easy to find, home to the famous Tian Tian Chicken Rice. A good starting point.

**Lau Pa Sat** — In the CBD, open late, the satay stalls outside at night are an experience.

**Old Airport Road Food Centre** — Beloved by locals, slightly further from the tourist belt, and the better for it. This is where serious eating happens.

**Newton Food Centre** — Tourist-facing and priced accordingly, but convenient and a good introduction to the format.

Go hungry. Bring tissue. Eat everything.`,
  },
  {
    slug: "how-to-order-kopi-teh-singapore",
    title: "How To Order Kopi and Teh Like a Local",
    subtitle: "A field guide to Singapore's kopitiam drink system",
    category: "Guide",
    readTime: "5 min read",
    publishedAt: "2026-04-11",
    heroImage: "/images/food/teh-tarik.jpg",
    excerpt:
      "Saying 'coffee, no sugar' in a Singapore kopitiam might get you more sugar. Here is the system that actually works.",
    content: `Saying 'coffee, no sugar' in a Singapore kopitiam might get you more sugar. Here is the system that actually works.

## The Language of Kopi

Singapore's kopitiam drink ordering system is a beautiful collision of Hokkien, Malay, Cantonese, and pure local invention. It looks complicated. It is not. Once you understand the base logic, you can order anything.

**Kopi** = Coffee with condensed milk and sugar. This is the default. If you say nothing else, this is what arrives.

**Teh** = Tea with condensed milk and sugar. Same logic as kopi.

Both are brewed strong — stronger than most Western equivalents. The condensed milk is not optional in the base version. It is the point.

## The Modifier System

Everything beyond the base drink is built from modifiers that you add to the end of your order. They stack.

**O** — No milk. From Hokkien for "black". Kopi O = black coffee with sugar.

**C** — Evaporated milk instead of condensed milk. From "Carnation" brand. Gives it a creamier, less sweet finish. Teh C = tea with evaporated milk.

**Kosong** — No sugar. From Malay for "zero" or "empty". Kopi O Kosong = black coffee, no sugar, no milk.

**Peng** — Iced. From Hokkien for "ice". Teh Peng = iced tea with condensed milk.

**Gao** — Extra thick and strong. From Hokkien for "thick". Kopi Gao = very strong coffee.

**Po** — Weak. The opposite of Gao. Kopi Po = weak coffee.

**Siu Dai** — Less sweet. From Cantonese. Teh C Siu Dai = tea with evaporated milk, less sweet.

**Ga Dai** — Extra sweet. The opposite of Siu Dai.

**Ban Siu** — Half hot. Warm but drinkable immediately, not scalding. Kopi Ban Siu = warm coffee, not piping hot.

## Stacking Your Order

The modifiers stack together to build your exact drink. You say them in order after the base drink.

**Kopi C Peng** = Iced coffee with evaporated milk
**Teh O Kosong** = Black tea, no sugar, no milk
**Kopi C Siu Dai Peng** = Iced coffee with evaporated milk, less sweet
**Teh Gao** = Extra strong tea with condensed milk

The kopitiam uncle or auntie will understand immediately. Speak clearly and with confidence.

## The Old School Names

Beyond the modifier system, some drinks have nicknames that older kopitiam regulars still use.

**Tak Kiu** = Milo. Hokkien for "kick ball" — because the old Milo tin had a footballer on it.

**Diao He** = Chinese tea made with a teabag. Hokkien for "fishing" — because dunking the teabag looks like fishing.

**Orh Gao** = Guinness Stout. Hokkien for "black dog" — the old Guinness label had a black dog on it.

**Michael Jackson** = Soya bean milk with grass jelly. Black and white. The nickname explains itself.

**Yuan Yang** = Half coffee, half tea combined. Named after mandarin ducks — a symbol of pairing.

## Teh Tarik — The Pulled Tea

Teh tarik deserves its own mention. It is not simply tea with milk. It is tea poured in a long, sustained stream between two containers, over and over, until it cools, froths, and becomes something different from the sum of its parts.

The pulling creates micro-bubbles that give the tea a silky texture no stirring can replicate. At hawker centres, the teh tarik uncle works with a rhythm that is half performance, half technique. The height of the pour is not showing off. It is the method.

Order it hot. Watch how it is made. It is worth the wait.

## Where To Practice

Any kopitiam in Singapore will do. They are everywhere — the ground floor of almost every HDB block has one. Order kopi or teh first. Get it right. Then experiment with modifiers.

Your first order: **Kopi C Peng Siu Dai** — iced coffee with evaporated milk, less sweet. It is the most ordered variant among people who have just learned the system and want to show off slightly.

**Are you ready to make your first order?**

[BUTTON: Try the Kopi Decoder → /hawker-guide#kopi-decoder]`,
    series: { name: "How to Order", number: 1 },
  },
  {
    slug: "how-to-order-roti-prata-singapore",
    title: "How to Order Roti Prata",
    subtitle: "The unwritten menu of Singapore's most-shared plate",
    category: "Guide",
    readTime: "Coming soon",
    publishedAt: "2026-05-01",
    heroImage: "/images/food/roti-prata.jpg",
    excerpt:
      "Kosong, tissue, egg, cheese, banana — and the one curry you should always ask for. The complete guide to ordering Singapore's most iconic breakfast.",
    content: "",
    series: { name: "How to Order", number: 2 },
    comingSoon: true,
  },
  {
    slug: "how-to-order-chicken-rice-singapore",
    title: "How to Order Hainanese Chicken Rice",
    subtitle:
      "Poached or roasted. Thigh or breast. The real way to order Singapore's national dish",
    category: "Guide",
    readTime: "Coming soon",
    publishedAt: "2026-05-15",
    heroImage: "/images/food/chicken-rice.jpg",
    excerpt:
      "The chicken rice decision tree. Which chicken, which rice, which sauce, and what to say at the stall.",
    content: "",
    series: { name: "How to Order", number: 3 },
    comingSoon: true,
  },
  {
    slug: "10-hawker-dishes-must-try-singapore",
    title: "10 Hawker Dishes You Must Try Before Leaving Singapore",
    subtitle: "Not a listicle. A ranked argument.",
    category: "Ranking",
    readTime: "6 min read",
    publishedAt: "2026-04-11",
    heroImage: "/images/food/char-kway-teow.jpg",
    excerpt:
      "Every food guide has a list. This one has opinions. Here are the ten dishes that define Singapore's hawker culture — ranked, argued, and defended.",
    content: `Every food guide has a list. This one has opinions. Here are the ten dishes that define Singapore's hawker culture — ranked, argued, and defended.

## #01 — Hainanese Chicken Rice

![Chicken Rice](/images/food/chicken-rice.jpg)

> 🌶️ None · 🧍 Long Queue · 💰 S$3–6 · ⏰ Lunch

**"The most argued-about dish in Singapore. Order it. Pick a side."**

The national dish. Not because it is the most dramatic or the most complex — but because it is everywhere and it is almost always good. Silky poached chicken, rice cooked in chicken fat and pandan, three sauces: chilli, ginger, dark soy.

The chicken is judged by its skin. The rice is judged by its fragrance. The chilli sauce is judged by everything. If the rice does not smell of chicken fat before you taste it, walk away.

Every Singaporean has a preferred stall. Nobody agrees. This is the point.

🥤 **Pair with:** Barley water or teh o peng — something cold and clean to cut through the richness.

📍 Where to find it: Tian Tian at Maxwell Food Centre is the most photographed. Ah Tai next door is what the locals quietly prefer.

---

## #02 — Char Kway Teow

![Char Kway Teow](/images/food/char-kway-teow.jpg)

> 🌶️ Medium · 🧍 Long Queue · 💰 S$4–6 · ⏰ Lunch

**"Not beautiful. Not photogenic. One of the finest things this city produces."**

Flat rice noodles stir-fried over screaming heat with dark soy, egg, bean sprouts, lap cheong, and cockles. The key is wok hei — the smoky char that only comes from a wok hot enough to sear everything in seconds. You cannot fake it. You cannot replicate it at home.

The best is still cooked over charcoal. By someone who has been doing it for forty years. Arrive early or wait.

🥤 **Pair with:** Sugarcane juice — cuts through the dark soy and smoke perfectly.

📍 Where to find it: Hill Street Char Kway Teow at Bedok Interchange. Old Airport Road for a solid alternative.

---

## #03 — Laksa

![Laksa](/images/food/laksa.jpg)

> 🌶️ Medium-High · 🧍 Moderate · 💰 S$4–7 · ⏰ Lunch

**"Rich, spicy, coconut-heavy. The dish that divides rooms and wins arguments."**

Coconut curry broth, rice noodles, fish cake, cockles — specifically Katong-style, where the noodles are cut short so you eat the whole bowl with just a spoon. The broth should coat the spoon. The sambal should make you sweat. The Vietnamese coriander is non-negotiable.

If you find yourself asking for a fork, you are already having a great time.

🥤 **Pair with:** A cold lime juice or coconut water — the acidity cuts the richness.

📍 Where to find it: 328 Katong Laksa on East Coast Road. The ongoing debate about who invented this style will never be resolved.

---

## #04 — Roti Prata

![Roti Prata](/images/food/roti-prata.jpg)

> 🌶️ Mild · 🧍 Short · 💰 S$1.20–3 · ⏰ Breakfast / Supper

**"Breakfast. Supper. 2am after a long night. Prata is always right."**

A flaky, griddled flatbread that should shatter slightly when you bite through it — soft and layered inside, crisp at the edges. Served with fish or mutton curry for dipping. The plain prata is the test of technique. If the plain is good, everything else follows.

Order one plain first. If it is excellent, order egg. If the egg is excellent, order cheese. This is the correct progression.

🥤 **Pair with:** Teh tarik — the pulled milk tea is made for prata.

📍 Where to find it: Springleaf Prata Place in Upper Thomson. Or any 24-hour mamak stall near you.

---

## #05 — Bak Kut Teh

![Bak Kut Teh](/images/food/bak-kut-teh.jpg)

> 🌶️ Peppery · 🧍 Moderate · 💰 S$8–14 · ⏰ Breakfast / Supper

**"Eaten by labourers before long days at the docks. The recipe has not changed."**

Pork ribs simmered in a broth of white pepper and herbs until the meat falls from the bone without effort. The Singapore version — Teochew style — is clear and intensely peppery. Almost medicinal. It warms you up and wakes you up simultaneously.

It was working-class food. It still feeds working-class hunger. The price has gone up slightly. The broth has not changed.

🥤 **Pair with:** Chinese tea — you li cha (oolong) is traditional. Pour it after every few bites.

📍 Where to find it: Song Fa on New Bridge Road. Founder on Balestier. Both open early.

---

## #06 — Satay

![Satay](/images/food/satay.jpg)

> 🌶️ Mild-Medium · 🧍 Moderate · 💰 S$0.70–1 per stick · ⏰ Dinner / Supper

**"Sixty years. Same formula. Same charcoal. Still the best thing on a stick."**

Marinated meat skewers grilled over real charcoal, served with thick peanut sauce, ketupat, raw onion, and cucumber. The smoke from the charcoal is not atmosphere — it is an ingredient. Without it, it is just grilled meat.

Order beef, chicken, and mutton. Eat the ketupat with peanut sauce between skewers. Do not leave until you have finished at least twenty sticks.

🥤 **Pair with:** Tiger beer or lime juice — both work, depending on the hour.

📍 Where to find it: Lau Pa Sat on a Friday night, after 7pm when the satay stalls take over the street.

---

## #07 — Chilli Crab

![Chilli Crab](/images/food/chilli-crab.jpg)

> 🌶️ Medium · 🧍 Book Ahead · 💰 S$50–80 per crab · ⏰ Dinner

**"Messy, sticky, theatrical. Bring wet wipes and an appetite you cannot explain."**

Mud crab in a tomato-chilli-egg gravy that is sweet, spicy, and thick enough to demand mantou — fried buns — for mopping. This is not hawker food in the traditional sense, but no list of Singapore dishes is complete without it.

Do not order it in a shopping mall restaurant. Find a zi char stall or a no-frills seafood place. The experience is better and the crab is cheaper.

🥤 **Pair with:** Cold beer. There is no other answer.

📍 Where to find it: East Coast seafood stretch. No Signboard at Geylang for a serious meal.

---

## #08 — Hokkien Mee

![Hokkien Mee](/images/food/hokkien-mee.jpg)

> 🌶️ Mild (sambal on the side) · 🧍 Long · 💰 S$5–8 · ⏰ Lunch / Dinner

**"Invented by dockworkers. Perfected by time. The calamansi is not garnish — use it."**

Yellow egg noodles and white rice noodles stir-fried together in a rich prawn-and-pork broth, finished with sambal, bean sprouts, and calamansi. The Singapore version is different from Penang's — wetter, brothier, more umami. Do not compare them.

Squeeze the entire calamansi over the noodles before your first bite. The acid lifts everything.

🥤 **Pair with:** Cold barley or chrysanthemum tea — something light to balance the richness.

📍 Where to find it: Nam Sing at Old Airport Road. The uncle has been frying since 1973.

---

## #09 — Ice Kachang

![Ice Kachang](/images/food/ice-kachang.jpg)

> 🌶️ None · 🧍 Short · 💰 S$2–3.50 · ⏰ Any time

**"It looks alarming. It is perfect. It is the only logical response to a Singapore afternoon."**

Shaved ice piled high, coloured syrups, red beans, corn, grass jelly, and attap chee. Topped with evaporated milk if you are doing it properly. It melts fast — eat with urgency.

This is dessert. This is also technically lunch if you are having a difficult day. Singapore does not judge.

🥤 **Pair with:** Nothing. Ice kachang is its own universe.

📍 Where to find it: Any hawker centre dessert stall. Old Airport Road and Geylang are particularly good.

---

## #10 — Kaya Toast

![Kaya Toast](/images/food/kaya-toast.jpg)

> 🌶️ None · 🧍 Short-Moderate · 💰 S$3–5 · ⏰ Breakfast

**"The same breakfast Singaporeans have eaten for a hundred years. Do not skip this."**

Charcoal-grilled thin bread, cold butter, kaya — a slow-cooked coconut and pandan jam. Eaten with soft-boiled eggs seasoned with dark soy and white pepper, and a cup of kopi. This is the Singapore breakfast set.

The kaya should be sweet but not cloying. The butter should be cold. The eggs should wobble. The kopi should be strong. Start every morning in Singapore here. Everything else can wait.

🥤 **Pair with:** Kopi — specifically Kopi C if you take milk, Kopi O Kosong if you do not.

📍 Where to find it: Ya Kun Kaya Toast is reliable. Heap Seng Leong at North Bridge Road for the full old-school kopitiam experience.

---

Eat in this order. Argue with this list. Come back hungry.`,
  },
  {
    slug: "singapore-hawker-culture-unesco-heritage",
    title: "Why Singapore Hawker Food Is UNESCO Heritage",
    subtitle: "And what that actually means for the uncles and aunties",
    category: "Culture",
    readTime: "7 min read",
    publishedAt: "2026-04-11",
    heroImage: "/images/food/economy-rice.jpg",
    excerpt:
      "In December 2020, UNESCO added Singapore's hawker culture to its list of Intangible Cultural Heritage. Here is what that recognition means — and what it does not.",
    content: `In December 2020, UNESCO added Singapore's hawker culture to its list of Intangible Cultural Heritage of Humanity. Here is what that recognition means — and what it does not.

## What UNESCO Actually Recognised

UNESCO's Intangible Cultural Heritage list covers practices and traditions that communities recognise as part of their cultural heritage — things passed down through generations, alive in daily practice. Previous additions include the Mediterranean diet, Argentine tango, and Mongolian calligraphy.

Singapore's hawker culture was added under criteria that recognised it as a community practice that promotes social interaction and integration across ethnic and social divides. The nomination specifically cited the way hawker centres function as common spaces where Singaporeans of all backgrounds eat together, and the way hawker skills are transmitted from one generation to the next.

It is not the food itself that is recognised. It is the culture around it.

## The History Behind The Recognition

Singapore's hawker culture has its roots in the street food vendors who operated across the colonial city in the early twentieth century. Hainanese cooks who had worked in British homes. Teochew and Hokkien migrants from Southern China who brought their cooking with them. Indian Muslim traders who set up stalls near mosques and markets. Malay vendors who cooked what their communities had always eaten.

These communities cooked their own food, for their own people, in their own ways. Over time, they began feeding each other. A Hainanese cook adapted his chicken recipe for Singapore. A Malay hawker added sambal to dishes that had never seen it before. A Tamil roti-maker found himself feeding Chinese dockworkers who had never eaten prata.

Singapore's food is what happens when different communities cook for each other across generations without ever deciding to fuse anything deliberately. The result is accidental and irreversible and entirely Singaporean.

## What The Recognition Does Not Guarantee

UNESCO recognition does not preserve anything. It does not fund hawker stalls. It does not prevent stalls from closing when the uncle who runs them retires and his children choose a different path. It does not make young Singaporeans want to wake up at 4am to prepare stock for a noodle stall they will run for twelve hours a day.

The recognition is acknowledgement, not protection. Singapore's hawker culture faces real and ongoing pressures — rising rental costs for stall space, an ageing community of hawkers with limited successors, and the competition of food delivery apps that reward convenience over craft.

The average age of a hawker stall owner in Singapore is over fifty. Many of the most respected stalls in the country are run by people in their sixties and seventies. Some have successors. Many do not.

## What Is Actually Being Done

The Singapore government has run several initiatives to address succession — subsidised training programmes for aspiring hawkers, a Hawker Culture Fund, and grants for stall renovations. The results are mixed. Running a hawker stall is physically demanding, financially uncertain, and socially undervalued in a city that prizes professional careers.

Some stalls have found successors who are genuinely passionate. A chef who trained in a European kitchen and came back to learn his father's chicken rice recipe from scratch. A daughter who left a corporate job to continue her mother's popiah stall. These stories exist and they matter.

They are not yet the norm.

## Why This Matters Beyond Singapore

Food is how cultures understand themselves. What a community eats, who cooks it, how it is served, who sits down together — these are not trivial questions. They are questions about identity, belonging, and memory.

Singapore's hawker culture is remarkable not because the food is extraordinary — though much of it is — but because the format itself is a working model of a multi-ethnic society eating together without ceremony or self-consciousness. There is no dress code at a hawker centre. There is no formal occasion. There is a plastic chair and a plate of food and the person next to you is eating something completely different from a different culture and nobody thinks this is unusual.

UNESCO recognised that. The uncles and aunties at the stalls already knew.

## What You Can Do

Eat at hawker centres. Not because it is exotic or because you are ticking something off a list. Eat there because the food is good and the people who make it have given their lives to making it right.

Queue patiently. Pay the price on the board without bargaining. Return your tray. Say thank you.

That is not nothing. That is the whole point.`,
  },
];

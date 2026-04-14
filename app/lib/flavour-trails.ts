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
  trailStops: TrailStop[];
  endNote: string;
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
          "One of the last surviving Hainanese kopitiams in Singapore. The charcoal-grilled kaya toast arrives with a cold slab of butter that melts on contact — the kaya underneath is house-made, fragrant with pandan and coconut. The kopi is thick, dark, and slightly sweet in a way that no chain coffee shop has ever managed to replicate. This is the breakfast Singapore was built on.",
        address: "204 East Coast Road, Singapore 428903",
        mapsUrl:
          "https://maps.google.com/?q=Chin+Mee+Chin+Confectionery+Singapore",
        whatToOrder: [
          "Kaya toast with cold butter — the charcoal-grilled version is the point",
          "Soft boiled eggs — season with dark soy and white pepper, not salt",
          "Kopi C — coffee with evaporated milk. Order it here. This is the right place.",
        ],
        tip: "Open since 1925. The ceiling fans are original. The marble tables are original. The kaya recipe is original. Sit slowly. Do not look at your phone. This is the right way to start a morning in Singapore.",
        duration: "30–40 mins",
        image: "/images/trails/katong/chin-mee-chin.jpg",
      },
      {
        number: 2,
        name: "Mr & Mrs Mohgan's Super Crispy Roti Prata",
        type: "eat",
        intro:
          "Mr Mohgan has been making prata since he was twelve years old. That is over forty years of muscle memory in every flick of the wrist. The result is a flatbread with shatteringly crisp edges and a soft, layered interior — the kind you keep tearing pieces off even when you think you are done. Paired with fish curry that is bright, slightly sour, and deeply spiced. This is the best roti prata in Singapore. Many people who have eaten a lot of prata will tell you so.",
        address: "Tin Yeang Restaurant, 300 Joo Chiat Road, Singapore 427551",
        mapsUrl:
          "https://maps.google.com/?q=Mr+Mrs+Mohgan+Roti+Prata+Joo+Chiat",
        whatToOrder: [
          "Plain prata first — this is the test. If it is excellent, order egg.",
          "Coin prata — their signature. Six small crispy discs. Order a set.",
          "Fish curry for dipping — not mutton, not dal. Fish curry here.",
        ],
        tip: "Ranked the best roti prata in Singapore by multiple independent food writers. Mr Mohgan has been making prata since he was twelve years old. Opens at 6.30am. Closed Wednesdays. There will be a queue. It moves.",
        duration: "20–30 mins",
        image: "/images/trails/katong/mohgan-prata.jpg",
      },
      {
        number: 3,
        name: "Koon Seng Road Heritage Walk",
        type: "walk",
        intro:
          "Step off East Coast Road and into Koon Seng Road for five minutes. The two rows of Peranakan terrace houses here — pastel-coloured, two storeys, ornate ceramic tiles, each one slightly different from the one next door — are among the finest preserved examples of Straits Chinese architecture in Southeast Asia. This is also Singapore's first designated Heritage Town. You will not find this in the brochure. Walk slowly.",
        address: "Koon Seng Road, Singapore 427037",
        mapsUrl: "https://maps.google.com/?q=Koon+Seng+Road+Singapore",
        whatToOrder: [],
        tip: "Walk five minutes north to Koon Seng Road. The two rows of Peranakan terrace houses here — pastel coloured, two storeys, ornate ceramic tiles — are among the best preserved in Singapore. Look at the shutters. Look at the tiles. Look at how each house is slightly different from the one next to it. This neighbourhood was designated Singapore's first Heritage Town in 2011. While you're here: the Katong Antique House is at 208 East Coast Road — worth booking in advance for a proper Peranakan artefact tour. Free to walk past, S$20–30 for a guided visit.",
        duration: "15–20 mins",
        image: "/images/trails/katong/koon-seng-road.jpg",
      },
      {
        number: 4,
        name: "Katong Antique House",
        type: "experience",
        intro:
          "Behind the facade of a conserved Peranakan shophouse on East Coast Road is one of the most intimate museum experiences in Singapore. Owner Peter Wee has spent decades collecting family heirlooms — hand-beaded slippers, colonial-era photographs, porcelain, furniture — each piece with a story. This is not a curated museum. It is a family home that happens to be full of extraordinary things. Worth every minute of the visit.",
        address: "208 East Coast Road, Singapore 428903",
        mapsUrl:
          "https://maps.google.com/?q=Katong+Antique+House+208+East+Coast+Road+Singapore",
        whatToOrder: [],
        tip: "A Peranakan home turned private museum, filled with family heirlooms, antique porcelain, hand-beaded slippers and colonial-era photographs collected by owner Peter Wee. Best experienced by appointment — call ahead. Free to walk past and admire the facade, S$20–30 for a guided visit. If you book nothing else on this trail, book this.",
        duration: "30–45 mins (by appointment)",
        image: "/images/trails/katong/katong-antique-house.jpg",
      },
      {
        number: 5,
        name: "Sri Senpaga Vinayagar Temple",
        type: "experience",
        intro:
          "Built in 1855 and dedicated to Lord Ganesha, this is one of Singapore's oldest Hindu temples and arguably its most ornate. The gopuram — the intricately carved tower above the entrance — rises seven tiers above the street, dense with sculpted figures. Remove your shoes before entering. Stand in front of it and look up. This is Singapore in one frame: a Tamil temple from 1855, two minutes from a Peranakan kopitiam and a Muslim prata stall, on the same street.",
        address: "19 Ceylon Road, Singapore 429006",
        mapsUrl:
          "https://maps.google.com/?q=Sri+Senpaga+Vinayagar+Temple+Ceylon+Road+Singapore",
        whatToOrder: [],
        tip: "One of Singapore's oldest and most ornate Hindu temples, built in 1855 and dedicated to Lord Ganesha. Free entry, walk-in welcome. Remove your shoes before entering. The gopuram — the intricately carved tower above the entrance — is worth studying closely. This is Singapore in one frame: a century-old Tamil temple, two minutes from a Peranakan kopitiam and a Muslim prata stall.",
        duration: "10–15 mins",
        image: "/images/trails/katong/sri-senpaga-temple.jpg",
      },
      {
        number: 6,
        name: "Kim Choo Kueh Chang",
        type: "eat",
        intro:
          "Making kueh since 1945 out of the same East Coast Road shophouse. The kueh pie tee shells are fried fresh — small crispy cups filled with braised turnip, prawn and a drizzle of dark sauce. The kueh dadar is a pandan crepe wrapped around grated coconut and palm sugar, green and fragrant and gone in two bites. These are the snacks that Peranakan families have been making for generations. Buy more than you think you need.",
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
          "This is the laksa that made Katong famous. A rich coconut curry broth — thick, slightly sweet, deeply spiced — served with short-cut rice noodles, plump prawns, cockles and fish cake. The noodles are cut short deliberately so the entire bowl is eaten with just a spoon. No chopsticks. No fork. In 2013 this stall beat Gordon Ramsay in a laksa cook-off on television. The uncle at the stall was not particularly impressed. The broth has not changed.",
        address: "51 East Coast Road, Singapore 428770",
        mapsUrl: "https://maps.google.com/?q=328+Katong+Laksa+East+Coast+Road",
        whatToOrder: [
          "Laksa — always. This is why you are here.",
          "Add cockles if they are fresh that day — ask the uncle",
          "A side of otah if available — spiced fish cake grilled in banana leaf",
        ],
        tip: "The noodles are cut short so the entire bowl is eaten with just a spoon — no chopsticks, no fork. This is deliberate. The broth should be rich, coconut-heavy, and slightly sweet. The sambal on the side is serious. Beat Gordon Ramsay in a laksa cook-off in 2013. The uncle was not impressed.",
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
          "A dollar. That's what a kopi costs here. Michelin-listed, decades-old, second floor of Chinatown Complex — and the uncle behind the counter pulls it the same way he always has. Cloth sock. Robusta beans. No shortcuts.\n\nOrder your kopi. Crack your soft boiled eggs into the saucer, add dark soy and white pepper. Eat slowly. You have nowhere to be yet.\n\nWhen you're done, step outside. Chinatown at 8am belongs to the people who live here — the light is softer, the streets quieter, the shophouses on Pagoda Street glowing in dusty reds and yellows. Sri Mariamman Temple has been standing at the end of South Bridge Road since 1827. Duck into Sago Street. Wander without a plan. That's the point.",
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
          "You're not hungry yet. Order half a plate anyway. Tian Tian's chicken rice is not something you skip because of timing. This stall has been here since 1987 and Anthony Bourdain queued for it on No Reservations. The chicken is poached until just cooked, the rice fragrant with chicken fat and pandan, the chilli sauce the best in Singapore. A half portion is SGD $5. There is no excuse.",
        address: "1 Kadayanallur Street, Tanjong Pagar, Singapore 069184",
        mapsUrl: "https://maps.google.com/?q=Maxwell+Food+Centre+Singapore",
        whatToOrder: [
          "Tian Tian Chicken Rice — half portion, mixed (white and roast)",
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
          "From Maxwell, it's a 20-minute walk along the waterfront to Gardens by the Bay — and honestly, walk it. The route takes you past Clifford Pier and along Marina Bay before the Supertrees appear on the horizon. Or take the MRT — Tanjong Pagar to Raffles Place, transfer to the Downtown Line, two stops to Bayfront. Either way, you're there in under 25 minutes.",
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
            note: "SGD $28 — misty mountain waterfall inside a glass dome",
          },
          {
            item: "Flower Dome",
            note: "SGD $28 — world's largest glass greenhouse, cooler and quieter",
          },
        ],
        tip: "Skip the paid attractions and come back at 7.45pm for the Garden Rhapsody light show — Supertrees glow and pulse to music. Completely free.",
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
          "Built in 1894, Lau Pa Sat is Singapore's most beautiful hawker centre — a Victorian cast iron structure in the middle of the CBD that somehow survived modernisation, war, and fifty years of urban development. At lunchtime it fills with office workers eating $5 plates next to tourists who can't believe what they're looking at. Order satay. Order a lot of satay.",
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
        tip: "Boon Tat Street outside transforms into open-air satay street from 7pm. You're coming back tonight — save room.",
        duration: "1 hour",
        image: "/images/trails/cbd/lau-pa-sat.jpg",
      },
      {
        number: 5,
        name: "Marina Bay Waterfront Walk",
        type: "walk",
        intro:
          "Walk off lunch along one of the most spectacular urban waterfronts in the world. The promenade from Lau Pa Sat to the Helix Bridge takes about 15 minutes on foot. Completely free — the Esplanade durians, the double helix bridge, Marina Bay Sands rising behind it like something from a science fiction film. Just walk. Let it wash over you.",
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
            note: "Optional — SGD $32, views are extraordinary",
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
          "Tucked behind the CBD's glass towers, Amoy Street Food Centre is the kind of place that rewards people who know where to look. By 4.30pm the lunch crowd has cleared, the best stalls have rested and restocked, and you can actually get a seat. Order something cold. Order something light. You've got dinner ahead of you.",
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
        intro:
          "Singapore's most beautiful heritage streets and almost nobody talks about them. Ann Siang Hill is a gentle slope of perfectly preserved shophouses that feels completely removed from the city around it. Club Street runs parallel — bars and restaurants that haven't tried too hard. The light at 5.30pm turns everything golden. This is where you take the photos that make everyone back home ask where you went.",
        address: "Ann Siang Hill, Club Street, Singapore",
        mapsUrl: "https://maps.google.com/?q=Ann+Siang+Hill+Singapore",
        whatToOrder: [],
        highlights: [
          {
            item: "Ann Siang Hill Park",
            note: "Tiny hilltop park with rooftop views — often empty",
          },
          {
            item: "Club Street",
            note: "Walk slowly, look up at the shophouse facades",
          },
          {
            item: "Duxton Hill",
            note: "One street over, equally beautiful, slightly more local",
          },
          {
            item: "Pre-dinner drink",
            note: "Optional — craft beer, coconut, or wine at a bar on Club Street",
          },
        ],
        tip: "The bars on Club Street and Duxton Hill start filling up around 6pm. Perfect spot for a drink before dinner — you've earned it.",
        duration: "1 hour",
        image: "/images/trails/cbd/ann-siang-hill.jpg",
        isFree: true,
      },
      {
        number: 8,
        name: "Hong Lim Market & Food Centre",
        type: "eat",
        intro:
          "One of Singapore's oldest hawker centres and still one of its best. By 7pm Hong Lim is in full dinner swing — the carrot cake wok is perfectly seasoned after a full day of frying, the oyster omelette is crispy at the edges and eggy in the middle. Order both. Share between two. Add hokkien mee. Best $20 dinner in the city.",
        address: "531A Upper Cross Street, Singapore 051531",
        mapsUrl:
          "https://maps.google.com/?q=Hong+Lim+Market+Food+Centre+Singapore",
        whatToOrder: [
          "Carrot cake black — fried with dark caramel sauce, crispy and smoky — do not order white by mistake",
          "Oyster omelette — fresh oysters, egg, potato starch, chilli sauce on the side",
          "Hokkien mee — thick yellow noodles with prawn, squid, sambal, lime — squeeze hard",
        ],
        alsoTry: [
          { item: "Barley water", note: "Cold, sweet — the perfect dinner drink" },
          {
            item: "Char siew rice",
            note: "BBQ pork over rice — simple and satisfying",
          },
        ],
        tip: "'Carrot cake' has no carrot. It's white radish and rice flour, fried in a wok. Black is better than white. This is not a debate.",
        duration: "1 hour",
        image: "/images/trails/cbd/hong-lim.jpg",
      },
      {
        number: 9,
        name: "Lau Pa Sat Satay Street",
        type: "eat & drink",
        intro:
          "End where Singapore ends every good night. From 7pm Boon Tat Street closes to traffic and the satay stalls wheel out their grills. The smoke drifts through the CBD, the city towers glow above you, and the uncles fan charcoal with the calm of someone who has been doing this perfectly for thirty years. Order satay. Find a table. Sit down. You've earned this.",
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
        tip: "Tell the uncle how many sticks upfront — they cook to order, takes about 10 minutes. Use the time to find a table. Stalls open until midnight.",
        duration: "Stay as long as you want",
        image: "/images/trails/cbd/satay-street.jpg",
      },
    ],
    endNote:
      "You made it to the end of the trail. Satay in hand, city lights above, Singapore doing what Singapore does best — feeding people well and making it look effortless.\n\nThis city runs on hawker food. Always has. The uncles and aunties you met today have been showing up before sunrise for decades, not for the money but because this is what they do. Remember that the next time someone tells you hawker food is cheap. It is. It's also irreplaceable.\n\nStay hungry,\nJay\nShiokFlavour\nServing Singapore's hawker heritage, one plate at a time.",
  },
];

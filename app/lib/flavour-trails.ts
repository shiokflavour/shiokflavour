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
];

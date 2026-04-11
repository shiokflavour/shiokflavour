export type TrailStop = {
  number: number;
  name: string;
  type: "eat" | "drink" | "eat & drink" | "walk" | "experience";
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
    heroImage: "/images/food/laksa.jpg",
    intro:
      "Katong is not just a neighbourhood. It is a living argument about what Singapore actually is.\n\nAlong this one stretch of East Coast Road and Joo Chiat, you will eat the breakfast that Singaporeans have been eating for a hundred years, walk past shophouses that have not changed since the 1920s, and sit down to the laksa that made this postcode famous. You will finish full, slightly sweaty, and considerably more informed about why people who grow up in the East never want to leave.\n\nThis trail runs from East Coast Road into Joo Chiat and back. Start by 8.30am. Bring cash. Wear comfortable shoes.",
    pullQuote:
      "The best version of Singapore is not in the CBD. It is here — on this street, at a plastic table, with a cup of kopi you did not have to explain.",
    trailStops: [
      {
        number: 1,
        name: "Chin Mee Chin Confectionery",
        type: "eat & drink",
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
        image: "/images/food/kaya-toast.jpg",
      },
      {
        number: 2,
        name: "Mr & Mrs Mohgan's Super Crispy Roti Prata",
        type: "eat",
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
        image: "/images/food/roti-prata.jpg",
      },
      {
        number: 3,
        name: "Koon Seng Road Heritage Walk",
        type: "walk",
        address: "Koon Seng Road, Singapore 427037",
        mapsUrl: "https://maps.google.com/?q=Koon+Seng+Road+Singapore",
        whatToOrder: [],
        tip: "Walk five minutes north to Koon Seng Road. The two rows of Peranakan terrace houses here — pastel coloured, two storeys, ornate ceramic tiles — are among the best preserved in Singapore. Look at the shutters. Look at the tiles. Look at how each house is slightly different from the one next to it. This neighbourhood was designated Singapore's first Heritage Town in 2011. While you're here: the Katong Antique House is at 208 East Coast Road — worth booking in advance for a proper Peranakan artefact tour. Free to walk past, S$20–30 for a guided visit.",
        duration: "15–20 mins",
        image: "/images/food/ondeh-ondeh.jpg",
      },
      {
        number: 4,
        name: "Katong Antique House",
        type: "experience",
        address: "208 East Coast Road, Singapore 428903",
        mapsUrl:
          "https://maps.google.com/?q=Katong+Antique+House+208+East+Coast+Road+Singapore",
        whatToOrder: [],
        tip: "A Peranakan home turned private museum, filled with family heirlooms, antique porcelain, hand-beaded slippers and colonial-era photographs collected by owner Peter Wee. Best experienced by appointment — call ahead. Free to walk past and admire the facade, S$20–30 for a guided visit. If you book nothing else on this trail, book this.",
        duration: "30–45 mins (by appointment)",
        image: "/images/food/kaya-toast.jpg",
      },
      {
        number: 5,
        name: "Sri Senpaga Vinayagar Temple",
        type: "experience",
        address: "19 Ceylon Road, Singapore 429006",
        mapsUrl:
          "https://maps.google.com/?q=Sri+Senpaga+Vinayagar+Temple+Ceylon+Road+Singapore",
        whatToOrder: [],
        tip: "One of Singapore's oldest and most ornate Hindu temples, built in 1855 and dedicated to Lord Ganesha. Free entry, walk-in welcome. Remove your shoes before entering. The gopuram — the intricately carved tower above the entrance — is worth studying closely. This is Singapore in one frame: a century-old Tamil temple, two minutes from a Peranakan kopitiam and a Muslim prata stall.",
        duration: "10–15 mins",
        image: "/images/food/kaya-toast.jpg",
      },
      {
        number: 6,
        name: "Kim Choo Kueh Chang",
        type: "eat",
        address: "109 East Coast Road, Singapore 428800",
        mapsUrl: "https://maps.google.com/?q=Kim+Choo+Kueh+Chang+Katong",
        whatToOrder: [
          "Kueh pie tee — the crispy shells with turnip and prawn filling",
          "Kueh dadar — pandan crepe with grated coconut and palm sugar",
          "Nonya bak chang — glutinous rice dumpling with spiced pork and chestnuts",
        ],
        tip: "Making kueh since 1945. The shophouse has a heritage gallery upstairs — worth a quick look. Downstairs is all business: buy kueh, eat kueh. The kueh pie tee shells are fried fresh. Order more than you think you need. You will want more.",
        duration: "15–20 mins",
        image: "/images/food/kueh-pie-tee.jpg",
      },
      {
        number: 7,
        name: "328 Katong Laksa",
        type: "eat",
        address: "51 East Coast Road, Singapore 428770",
        mapsUrl: "https://maps.google.com/?q=328+Katong+Laksa+East+Coast+Road",
        whatToOrder: [
          "Laksa — always. This is why you are here.",
          "Add cockles if they are fresh that day — ask the uncle",
          "A side of otah if available — spiced fish cake grilled in banana leaf",
        ],
        tip: "The noodles are cut short so the entire bowl is eaten with just a spoon — no chopsticks, no fork. This is deliberate. The broth should be rich, coconut-heavy, and slightly sweet. The sambal on the side is serious. Beat Gordon Ramsay in a laksa cook-off in 2013. The uncle was not impressed.",
        duration: "20–30 mins",
        image: "/images/food/laksa.jpg",
      },
      {
        number: 8,
        name: "Birds of Paradise Gelato",
        type: "eat",
        address: "63 East Coast Road, Singapore 428776",
        mapsUrl: "https://maps.google.com/?q=Birds+of+Paradise+Gelato+Katong",
        whatToOrder: [
          "Pandan — the signature. Floral, fragrant, unmistakably Southeast Asian.",
          "White Chrysanthemum — delicate and unexpected",
          "Seasonal botanicals — whatever is on the board that day, trust it",
        ],
        tip: "End the trail with something cold. Birds of Paradise makes artisanal gelato from natural botanicals — no artificial flavours, no commercial syrups. The pandan is made with real pandan leaf. On a Singapore afternoon, after a full morning of eating, this is the only logical conclusion. Sit outside. You earned it.",
        duration: "15–20 mins",
        image: "/images/food/ondeh-ondeh.jpg",
      },
    ],
    endNote:
      "Katong will still be here next weekend. Chin Mee Chin will open at the same time. Mr Mohgan will be at the griddle by 6.30am. The laksa will taste exactly the same.\n\nCome back. Bring someone who has never been to Singapore. Bring them here before you take them anywhere else. Show them this street and tell them this is what the country is made of — not the skyline, not the mall. This.",
  },
];

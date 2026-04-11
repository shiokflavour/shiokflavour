export type TrailStop = {
  number: number;
  name: string;
  type: 'eat' | 'drink' | 'walk' | 'experience';
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
    slug: 'katong-trail',
    title: 'The Katong Trail',
    subtitle: 'Laksa, kueh, kaya toast and Peranakan heritage along East Coast Road',
    region: 'East Singapore',
    duration: 'Half day (3–4 hours)',
    distance: '2km walking',
    stops: 6,
    bestTime: 'Saturday or Sunday, start by 9am',
    difficulty: 'Easy',
    heroImage: '/images/food/laksa.jpg',
    intro: 'Katong is not just a neighbourhood. It is a living argument about what Singapore actually is — a place where Peranakan shophouses share a street with Muslim bakeries, where the best laksa in the country is eaten standing up with a plastic spoon, and where three generations of the same family have been making kueh since before independence.\n\nThis trail runs along East Coast Road from Joo Chiat to Marine Parade. It takes half a day if you eat slowly. It takes longer if you stop to look at things properly.',
    pullQuote: 'The best laksa in Singapore is eaten standing up, with a plastic spoon, at a table that seats strangers.',
    trailStops: [
      {
        number: 1,
        name: '328 Katong Laksa',
        type: 'eat',
        address: '51 East Coast Road, Singapore 428770',
        mapsUrl: 'https://maps.google.com/?q=328+Katong+Laksa',
        whatToOrder: ['Laksa (always — this is the point)', 'Add a side of otah if it is available'],
        tip: 'The noodles are cut short so you eat the whole bowl with just a spoon. This is deliberate. Do not ask for a fork.',
        duration: '20–30 mins',
        image: '/images/food/laksa.jpg',
      },
      {
        number: 2,
        name: 'Kim Choo Kueh Chang',
        type: 'eat',
        address: '109 East Coast Road, Singapore 428802',
        mapsUrl: 'https://maps.google.com/?q=Kim+Choo+Kueh+Chang+Katong',
        whatToOrder: ['Kueh pie tee', 'Nonya bak chang', 'Kueh dadar (pandan crepe with coconut)'],
        tip: 'This is a proper institution. The kueh pie tee shells are fried to order. Buy more than you think you need.',
        duration: '15–20 mins',
        image: '/images/food/kueh-pie-tee.jpg',
      },
      {
        number: 3,
        name: 'Chin Mee Chin Confectionery',
        type: 'drink',
        address: '204 East Coast Road, Singapore 428903',
        mapsUrl: 'https://maps.google.com/?q=Chin+Mee+Chin+Confectionery',
        whatToOrder: ['Kaya toast with cold butter', 'Soft boiled eggs with dark soy and white pepper', 'Kopi — order it here, nowhere else'],
        tip: 'This kopitiam has been here since 1925. The ceiling fans are original. Sit slowly. Do not rush this stop.',
        duration: '30–40 mins',
        image: '/images/food/kaya-toast.jpg',
      },
      {
        number: 4,
        name: 'Joo Chiat Road Walk',
        type: 'walk',
        address: 'Joo Chiat Road, Singapore',
        mapsUrl: 'https://maps.google.com/?q=Joo+Chiat+Road+Singapore',
        whatToOrder: [],
        tip: 'Walk one block north to Joo Chiat Road. The Peranakan terrace houses here — pastel-coloured, ornate, two storeys — are some of the best preserved in Singapore. Look at the tiles. Look at the shutters. Take your time.',
        duration: '15–20 mins',
        image: '/images/food/ondeh-ondeh.jpg',
      },
      {
        number: 5,
        name: 'Guan Hoe Soon Restaurant',
        type: 'eat',
        address: '214 Joo Chiat Road, Singapore 427483',
        mapsUrl: 'https://maps.google.com/?q=Guan+Hoe+Soon+Restaurant+Singapore',
        whatToOrder: ['Ayam buah keluak — the definitive Peranakan dish', 'Chap chye — braised vegetables, deeply savoury', 'Babi pongteh if it is on the menu'],
        tip: 'Singapore\'s oldest Peranakan restaurant, open since 1953. Order the ayam buah keluak. The black nuts taste like nothing else on earth — rich, slightly bitter, almost chocolatey. It takes days to prepare.',
        duration: '45–60 mins',
        image: '/images/food/laksa.jpg',
      },
      {
        number: 6,
        name: 'Haig Road Market & Food Centre',
        type: 'eat',
        address: '14 Haig Road, Singapore 430014',
        mapsUrl: 'https://maps.google.com/?q=Haig+Road+Market+Food+Centre',
        whatToOrder: ['Popiah — fresh spring rolls, not fried', 'Teh tarik to finish', 'Ice kachang if the afternoon heat demands it'],
        tip: 'End the trail at a proper local hawker centre — the kind tourists rarely find. Order popiah and watch the uncle wrap it in front of you. This is how the trail should end. Not in a restaurant. At a plastic table, under a fan, with a cup of teh.',
        duration: '30–40 mins',
        image: '/images/food/popiah.jpg',
      },
    ],
    endNote: 'Katong will still be here next weekend. The laksa will taste the same. The kueh will be freshly made. The kopitiam will have the same ceiling fans.\n\nCome back. Bring someone who has never been to Singapore. Show them this street and tell them this is what the country is made of — not the skyline, not the shopping malls. This.',
  },
];

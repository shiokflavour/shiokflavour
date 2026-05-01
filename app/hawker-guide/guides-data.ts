export type GuideEntry = {
  id: "kopi-decoder" | "prata-decoder" | "old-school-names" | "etiquette" | "singlish";
  title: string;
  eyebrow: string;
  description: string;
  shortDescription: string;
  href: string;
  cta: string;
};

export const HAWKER_GUIDES: GuideEntry[] = [
  {
    id: "kopi-decoder",
    title: "Kopi Decoder",
    eyebrow: "Interactive",
    description:
      "Build your perfect kopitiam order. Pick your milk, sugar, strength and temperature — we'll tell you exactly what to say at the drink stall.",
    shortDescription: "Build your perfect kopitiam order.",
    href: "/hawker-guide/kopi-decoder",
    cta: "Decode your kopi",
  },
  {
    id: "prata-decoder",
    title: "Prata Decoder",
    eyebrow: "Interactive",
    description:
      "Choose your prata, your dip, and how to address the uncle. From plain kosong to egg-cheese with mutton curry — order it right the first time.",
    shortDescription: "Order your prata like a regular.",
    href: "/hawker-guide/prata-decoder",
    cta: "Decode your prata",
  },
  {
    id: "old-school-names",
    title: "Old School Names",
    eyebrow: "Kopitiam Heritage",
    description:
      "Tak Kiu, Michael Jackson, Diao He, Orh Gao. The nicknames a generation of Singaporeans gave their drinks — and the stories behind each one.",
    shortDescription: "The drink nicknames the uncles still use.",
    href: "/hawker-guide/old-school-names",
    cta: "Read the heritage",
  },
  {
    id: "etiquette",
    title: "Hawker Etiquette",
    eyebrow: "How It Works",
    description:
      "Choping seats with tissue. Ordering at the stall. Returning your tray. The unwritten rules nobody tells you — but everyone expects you to know.",
    shortDescription: "The unwritten rules of every hawker centre.",
    href: "/hawker-guide/etiquette",
    cta: "Learn the rules",
  },
  {
    id: "singlish",
    title: "Singlish Glossary",
    eyebrow: "The Language",
    description:
      "Shiok, makan, jiak, dabao, kiasu, sian. The local food language decoded — a complete creole built from Hokkien, Malay, Cantonese, Tamil and English.",
    shortDescription: "The local food language decoded.",
    href: "/hawker-guide/singlish",
    cta: "Learn the lingo",
  },
];

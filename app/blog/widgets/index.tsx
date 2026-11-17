import { AREA_GUIDES } from "@/app/lib/area-guides";
import { GuideMap, GuideNav, GuidePicker, GuideTable } from "./guide-interactive";
import { GuideFaq, GuidePrices, GuideTimeline, OrderTiles } from "./guide-static";
import { TourMatcher, TourTable } from "./tours";
import { TourFaq } from "./tours-faq";
import { PadangDecoder } from "./padang-decoder";

const PARTS: Record<string, (guideId: string) => React.ReactNode> = {
  picker: (id) => <GuidePicker guideId={id} />,
  nav: (id) => <GuideNav guideId={id} />,
  table: (id) => <GuideTable guideId={id} />,
  map: (id) => <GuideMap guideId={id} />,
  timeline: (id) => <GuideTimeline guideId={id} />,
  prices: (id) => <GuidePrices guideId={id} />,
  faq: (id) => <GuideFaq guideId={id} />,
};

/** Old widget names used in published articles. */
const ALIASES: Record<string, string> = { "bay-evening": "bay-timeline" };

/** Widgets an article can place with a line like [WIDGET: bay-picker] or [WIDGET: orchard-map]. */
/** Standalone widgets that are not tied to an area guide. */
const STANDALONE: Record<string, () => React.ReactNode> = {
  "tours-matcher": () => <TourMatcher />,
  "tours-table": () => <TourTable />,
  "tours-faq": () => <TourFaq />,
  "padang-decoder": () => <PadangDecoder />,
};

export function ArticleWidget({ id }: { id: string }) {
  if (STANDALONE[id]) return <>{STANDALONE[id]()}</>;
  const name = ALIASES[id] ?? id;
  const dash = name.indexOf("-");
  const guideId = name.slice(0, dash);
  const part = PARTS[name.slice(dash + 1)] as ((guideId: string) => React.ReactNode) | undefined;
  return part && AREA_GUIDES[guideId] ? <>{part(guideId)}</> : null;
}

export { OrderTiles };

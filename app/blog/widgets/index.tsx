import { BayMap, BayNav, BayPicker, BayTable } from "./bay-interactive";
import { BayEvening, BayFaq, OrderTiles, PriceContrast } from "./bay-static";

/** Widgets an article can place with a line like [WIDGET: bay-picker]. */
const WIDGETS: Record<string, () => React.ReactNode> = {
  "bay-picker": () => <BayPicker />,
  "bay-nav": () => <BayNav />,
  "bay-table": () => <BayTable />,
  "bay-map": () => <BayMap />,
  "bay-evening": () => <BayEvening />,
  "bay-prices": () => <PriceContrast />,
  "bay-faq": () => <BayFaq />,
};

export function ArticleWidget({ id }: { id: string }) {
  const render = WIDGETS[id];
  return render ? <>{render()}</> : null;
}

export { OrderTiles };

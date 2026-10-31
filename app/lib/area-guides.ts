import type { AreaGuide } from "./area-guide-types";
import { BAY_GUIDE } from "./bay-guide";
import { ORCHARD_GUIDE } from "./orchard-guide";

export const AREA_GUIDES: Record<string, AreaGuide> = {
  bay: BAY_GUIDE,
  orchard: ORCHARD_GUIDE,
};

export function getGuide(id: string): AreaGuide | undefined {
  return AREA_GUIDES[id];
}

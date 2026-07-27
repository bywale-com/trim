/**
 * Furnish registry — supporting UI abilities per persona + written Implementations.
 * Machine twin expanded beyond docs/register/FURNISHING.md (100 / persona).
 */
export type { FurnishItem, FurnishStatus } from "./furnishTypes";
export { BUSINESS_FURNISH } from "./furnish/businessFurnish";
export { AGENCY_FURNISH } from "./furnish/agencyFurnish";

import { AGENCY_FURNISH } from "./furnish/agencyFurnish";
import { BUSINESS_FURNISH } from "./furnish/businessFurnish";
import type { FurnishItem } from "./furnishTypes";

export type FurnishPersona = {
  id: "business" | "agency";
  label: string;
  items: FurnishItem[];
};

export const FURNISH_PERSONAS: FurnishPersona[] = [
  {
    id: "business",
    label: "Business",
    items: BUSINESS_FURNISH,
  },
  {
    id: "agency",
    label: "Agency Owner",
    items: AGENCY_FURNISH,
  },
];

export function allFurnishItems(): FurnishItem[] {
  return FURNISH_PERSONAS.flatMap((p) => p.items);
}

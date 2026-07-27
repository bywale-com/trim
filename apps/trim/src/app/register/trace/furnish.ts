/**
 * Furnish registry — supporting UI abilities per persona + written Implementations.
 * Machine twin expanded beyond docs/register/FURNISHING.md.
 */
export type { FurnishItem, FurnishStatus } from "./furnishTypes";
export { OPERATOR_FURNISH } from "./furnish/operatorFurnish";
export { OWNER_FURNISH } from "./furnish/ownerFurnish";
export { WORKER_FURNISH } from "./furnish/workerFurnish";

import { OPERATOR_FURNISH } from "./furnish/operatorFurnish";
import { OWNER_FURNISH } from "./furnish/ownerFurnish";
import { WORKER_FURNISH } from "./furnish/workerFurnish";
import type { FurnishItem } from "./furnishTypes";

export type FurnishPersona = {
  id: "owner" | "operator" | "worker";
  label: string;
  items: FurnishItem[];
};

export const FURNISH_PERSONAS: FurnishPersona[] = [
  {
    id: "owner",
    label: "Owner",
    items: OWNER_FURNISH,
  },
  {
    id: "operator",
    label: "Operator",
    items: OPERATOR_FURNISH,
  },
  {
    id: "worker",
    label: "Worker",
    items: WORKER_FURNISH,
  },
];

export function allFurnishItems(): FurnishItem[] {
  return FURNISH_PERSONAS.flatMap((p) => p.items);
}

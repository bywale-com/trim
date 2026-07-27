import { ownerCoreHow } from "./businessCore";
import { operatorCoreHow } from "./agencyCore";
import { agencySupportingHow, businessSupportingHow } from "./supporting";
import type { HowGraph } from "./types";

export type { HowComponent, HowGraph, HowNode, HowNodeKind, HowUiRef, UiKind } from "./types";
export { childrenOf, getNode, surfaceIdsForNode, UI_KIND_STYLE } from "./types";

const ALL: HowGraph[] = [ownerCoreHow, operatorCoreHow, ...businessSupportingHow, ...agencySupportingHow];

export function getHowGraph(id: string): HowGraph | undefined {
  return ALL.find((g) => g.id === id);
}

export function getHowGraphForOutcome(outcomeId: string): HowGraph | undefined {
  return ALL.find((g) => g.outcomeId === outcomeId);
}

export { ALL as HOW_GRAPHS };

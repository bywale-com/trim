/**
 * How Analysis — outcome → leaves → named UI (module / modal / block / submodal).
 *
 * Taxonomy (leaf click-path discipline):
 * - **module** — high-level container (e.g. Cases, Clients). Everything lives in a module.
 * - **modal** — a view inside a module (e.g. Case opened from Cases).
 * - **block** — named region/control on a modal (e.g. Decline door, proof facts).
 * - **submodal** — smaller overlay (popover, dropdown, dialog).
 *
 * Leaf answer convention:
 *   Starting from [Module|Modal], you … On [Modal] you … [Block|Submodal]…
 * “Starting from” may be absolute (root module) or relative (closest already-defined
 * module/modal that contains the next click) — only if the action is inside it.
 *
 * Defining a name in a leaf answer requires a HowUiRef + highlight by kind.
 */
export type HowNodeKind = "outcome" | "answer" | "leaf";

export type UiKind = "module" | "modal" | "block" | "submodal";

export type HowUiRef = {
  /** Stable id for this named UI piece. */
  id: string;
  kind: UiKind;
  /** Exact label as it appears in leaf clarity (highlight match). */
  label: string;
  /** Short does-line for the drawer list. */
  does: string;
  /** Optional CT SurfaceBoundary join when planted. */
  surfaceId?: string;
};

/** @deprecated alias — same as HowUiRef */
export type HowComponent = HowUiRef;

export type HowNode = {
  id: string;
  parentId: string | null;
  kind: HowNodeKind;
  depth: number;
  question: string | null;
  label: string;
  clarity: string;
  /** Every named module/modal/block/submodal in the answer. */
  components: HowUiRef[];
};

export type HowGraph = {
  id: string;
  label: string;
  personaId: "owner" | "operator" | "worker";
  outcomeId: string;
  nodes: HowNode[];
};

export const UI_KIND_STYLE: Record<
  UiKind,
  { color: string; bg: string; label: string }
> = {
  module: { color: "#1D4ED8", bg: "rgba(37,99,235,0.12)", label: "Module" },
  modal: { color: "#0F766E", bg: "rgba(13,148,136,0.12)", label: "Modal" },
  block: { color: "#7C3AED", bg: "rgba(139,92,246,0.12)", label: "Block" },
  submodal: { color: "#B45309", bg: "rgba(217,119,6,0.12)", label: "Submodal" },
};

export function childrenOf(graph: HowGraph, parentId: string | null): HowNode[] {
  return graph.nodes.filter((n) => n.parentId === parentId);
}

export function getNode(graph: HowGraph, id: string): HowNode | undefined {
  return graph.nodes.find((n) => n.id === id);
}

export function surfaceIdsForNode(node: HowNode): string[] {
  return node.components.map((c) => c.surfaceId).filter((id): id is string => Boolean(id));
}

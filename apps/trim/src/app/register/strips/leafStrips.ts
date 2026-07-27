/**
 * Strips + steps — discipline between How leaves and click-through.
 *
 * Law (locked with product):
 * - A **step** is a **screen**.
 * - One leaf may map to one step (one screen) or several steps (several screens).
 * - Multiple **components** on one step = regions on the same screen — not extra steps.
 * - Every leaf must answer **starting from where?** (module or modal — absolute or
 *   relative to the closest already-defined container that holds the next click).
 *   That answer is what keeps the prototype from becoming a status zoo.
 *
 * Notice land is the first authored leaf.
 */
export type StripStep = {
  id: string;
  /** Screen name. */
  label: string;
  /** Module / entry — where the user starts to reach this screen. */
  startsIn: string;
  /** Short beat for the screen. */
  beat: string;
  /** Components that live on this screen (same step). */
  componentSurfaceIds: string[];
};

export type LeafStrip = {
  id: string;
  label: string;
  version: number;
  howNodeId: string;
  why: string;
  /** Always answer this in text — forces module IA before CT. */
  startingFrom: string;
  steps: StripStep[];
};

/**
 * Notice land — leaf named two components on one screen.
 * Therefore: **one step**, two components — not two steps.
 */
export const NOTICE_LAND_STRIP: LeafStrip = {
  id: "biz-notice-land",
  label: "Notice land",
  version: 2,
  howNodeId: "leaf-notice",
  why:
    "Leaf answered with Notice — proof facts + Notice — trust strip. Those are two components on one screen, so this strip has one step.",
  startingFrom:
    "Business account (one company) → Cases → open the notified case → Notice screen. You never pick another company; you pick a case belonging to this account.",
  steps: [
    {
      id: "notice-screen",
      label: "Notice",
      startsIn: "Cases → case (status: notified)",
      beat: "One screen: proof of what's owed/by whom, plus trust (no upfront fee / verify yourself). Amount stays masked until Consent on a later leaf.",
      componentSurfaceIds: ["biz-ct-notice", "biz-ct-trust"],
    },
  ],
};

const BY_HOW_NODE: Record<string, LeafStrip> = {
  [NOTICE_LAND_STRIP.howNodeId]: NOTICE_LAND_STRIP,
};

export function getStripForHowNode(howNodeId: string): LeafStrip | undefined {
  return BY_HOW_NODE[howNodeId];
}

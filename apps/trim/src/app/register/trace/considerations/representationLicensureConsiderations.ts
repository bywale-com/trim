/**
 * Representation-Rules & Licensure Specialist — considerations (Trim, v2 stub).
 * Domain: who may represent by level; TX PTC + sponsorship caps; entity-signature; rollout gates.
 * TODO: fill with ~25–30 sourced items from docs/sme/pass1,pass2/representation-licensure.md
 */
import type { SmeItem } from "../smeTypes";

export const REPRESENTATION_LICENSURE_ITEMS: SmeItem[] = [
  {
    id: "rep-01",
    consideration:
      "TODO — TX TDLR PTC exam + 40 classroom hours + senior-consultant sponsorship (max 10 per senior): does the sponsorship cap create a hard ceiling on simultaneous Operator capacity in TX, and what is the onboarding lead time?",
    thesisGap:
      "Operator jurisdiction registry tracks PTC capacity but the sponsor capacity ceiling and onboarding lead time are not modeled.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-ptc-capacity"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/representation-licensure.md",
  },
];

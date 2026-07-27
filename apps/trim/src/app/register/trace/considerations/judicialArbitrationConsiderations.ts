/**
 * Judicial-Appeal / Arbitration Attorney — considerations (Trim, v2 stub).
 * Domain: binding arbitration (TX); tax court; escalation worth-it; attorney-only boundaries.
 * TODO: fill with ~22–28 sourced items from docs/sme/pass1,pass2/judicial-arbitration-attorney.md
 */
import type { SmeItem } from "../smeTypes";

export const JUDICIAL_ARBITRATION_ITEMS: SmeItem[] = [
  {
    id: "jud-01",
    consideration:
      "TODO — TX binding arbitration (Prop. Tax Code §41A): is arbitration available to small/mid commercial owners, and can a non-attorney PTC represent the owner at arbitration, or does it require a licensed attorney?",
    thesisGap:
      "The denial path shows escalation options but attorney-only boundaries at judicial/arbitration are not confirmed.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/judicial-arbitration-attorney.md",
  },
];

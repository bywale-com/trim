/**
 * Mortgage-Servicing / Escrow Specialist — considerations (Trim, v2 stub).
 * Domain: escrow adjustment timing; multifamily lender-held escrows.
 * TODO: fill with ~20–26 sourced items from docs/sme/pass1,pass2/mortgage-escrow.md
 */
import type { SmeItem } from "../smeTypes";

export const MORTGAGE_ESCROW_ITEMS: SmeItem[] = [
  {
    id: "me-01",
    consideration:
      "TODO — For multifamily properties with lender-held tax escrows, how long after an assessment reduction does the escrow account adjust, and who (owner or lender) receives the refund of over-collected taxes? This affects fee timing and 'felt win' for escrowed owners.",
    thesisGap:
      "Trim targets commercial / multifamily; escrowed MF owners may not feel the win promptly, affecting authorization rate and invoice collection timing.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/mortgage-escrow.md",
  },
];

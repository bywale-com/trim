/**
 * Tax / Accounting Treatment Specialist — considerations (Trim, v2 stub).
 * Domain: expense reduction vs income; 1099 on Trim fee; multi-year savings booking.
 * TODO: fill with ~20–26 sourced items from docs/sme/pass1,pass2/tax-accounting-treatment.md
 */
import type { SmeItem } from "../smeTypes";

export const TAX_ACCOUNTING_ITEMS: SmeItem[] = [
  {
    id: "tax-01",
    consideration:
      "TODO — When a property tax assessment is reduced, the savings are a reduction of a deductible expense (property tax). Does the contingency fee paid to Trim reduce that expense further, and how does the owner book the net savings vs the fee in the year of reduction?",
    thesisGap:
      "The Authorize door and invoice don't surface the tax/books treatment of the contingency fee vs the savings — a question the CFO will ask before signing.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/tax-accounting-treatment.md",
  },
];

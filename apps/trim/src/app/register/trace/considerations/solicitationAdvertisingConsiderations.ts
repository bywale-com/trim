/**
 * Solicitation & Advertising Compliance Specialist — considerations (Trim, v2 stub).
 * Domain: TDLR ethics ("no specific result"); consumer-protection; channel rules.
 * TODO: fill with ~25–30 sourced items from docs/sme/pass1,pass2/solicitation-advertising-compliance.md
 */
import type { SmeItem } from "../smeTypes";

export const SOLICITATION_ADVERTISING_ITEMS: SmeItem[] = [
  {
    id: "sol-01",
    consideration:
      "TODO — TX TDLR ethics rule 'shall not solicit by claiming a specific result' — does stating 'estimated excess ≈ $Z, subject to appeal outcome' in the ALG notice satisfy the no-specific-result rule, or must the framing be weaker?",
    thesisGap:
      "Notice copy uses analysis-not-promise framing; the exact threshold that satisfies TX TDLR ethics is unconfirmed.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/solicitation-advertising-compliance.md",
  },
];

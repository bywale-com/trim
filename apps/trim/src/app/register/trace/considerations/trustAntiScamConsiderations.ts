/**
 * Trust / Anti-Scam Perception Specialist — considerations (Trim, v2 stub).
 * Domain: Owlue-class scam perception; four-element trust kit; non-affiliation.
 * TODO: fill with ~24–28 sourced items from docs/sme/pass1,pass2/trust-anti-scam-perception.md
 */
import type { SmeItem } from "../smeTypes";

export const TRUST_ANTI_SCAM_ITEMS: SmeItem[] = [
  {
    id: "tas-01",
    consideration:
      "TODO — Owlue (a property tax protest incumbent) already generates 'is this a scam?' news coverage for its direct-mail solicitations. What four-element trust kit must Trim's notice include to survive the same skepticism from a small/mid commercial owner?",
    thesisGap:
      "Notice — trust strip and non-affiliation disclaimer provide structure but the minimum content for each element (named county + parcel ID, county-site verify link, non-affiliation, no-upfront-fee) needs validation against actual owner skepticism patterns.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: [
      "trim-ct-owner-notice",
      "trim-ct-owner-trust",
      "trim-ct-owner-trust-bundle",
      "trim-ct-owner-non-affiliation",
      "trim-ct-owner-county-verify",
    ],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/trust-anti-scam-perception.md",
  },
];

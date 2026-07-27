import type { JurisdictionEntry } from "./types";

const FILING_LABEL: Record<NonNullable<JurisdictionEntry["filingMethod"]>, string> = {
  digital: "Digital",
  "mail-original": "Mail original",
  "notarized-original": "Notarized original",
};

export function filingMethodLabel(method?: JurisdictionEntry["filingMethod"]): string {
  if (!method) return "—";
  return FILING_LABEL[method];
}

/**
 * Finder-registration gate, per state — outreach/filing must block where
 * Trove isn't registered (docs/register/WORLD.md ops-jurisdiction; SME
 * pass2 finder-registration-licensure-specialist: three genuinely different
 * regulator/requirement/process models, not one yes/no flag).
 */
export const JURISDICTIONS: JurisdictionEntry[] = [
  {
    code: "OH",
    name: "Ohio",
    status: "registered",
    model: "Treasury finder registration",
    filingMethod: "digital",
    expectedDays: 90,
    feeCapPct: 10,
    officialSearchUrl: "https://com.ohio.gov/unclaimed",
  },
  {
    code: "TX",
    name: "Texas",
    status: "registered",
    model: "No separate finder license",
    filingMethod: "digital",
    expectedDays: 60,
    feeCapPct: 10,
    officialSearchUrl: "https://claimittexas.gov",
  },
  {
    code: "CA",
    name: "California",
    status: "registered",
    model: "Treasury finder registration",
    filingMethod: "digital",
    expectedDays: 180,
    feeCapPct: 10,
    officialSearchUrl: "https://sco.ca.gov/upd_msg.html",
  },
  {
    code: "IL",
    name: "Illinois",
    status: "registered",
    model: "Individual-licensed finder (Treasurer)",
    filingMethod: "digital",
    expectedDays: 120,
    feeCapPct: 15,
    officialSearchUrl: "https://icash.illinoistreasurer.gov",
    note: "Licensed individual of record required — not a blanket corporate license.",
  },
  {
    code: "FL",
    name: "Florida",
    status: "registered",
    model: "No separate finder license",
    filingMethod: "digital",
    expectedDays: 75,
    feeCapPct: 10,
    officialSearchUrl: "https://fltreasurehunt.gov",
  },
  {
    code: "NY",
    name: "New York",
    status: "registered",
    model: "Treasury finder registration",
    filingMethod: "mail-original",
    expectedDays: 150,
    feeCapPct: 15,
    officialSearchUrl: "https://ouf.osc.ny.gov",
    note: "Wet-ink signature required — no digital claim path.",
  },
  {
    code: "NJ",
    name: "New Jersey",
    status: "registered",
    model: "Treasury finder registration",
    filingMethod: "digital",
    expectedDays: 90,
    feeCapPct: 10,
    officialSearchUrl: "https://unclaimedproperty.nj.gov",
  },
  {
    code: "NV",
    name: "Nevada",
    status: "registered",
    model: "No separate finder license",
    filingMethod: "digital",
    expectedDays: 45,
    feeCapPct: 10,
    officialSearchUrl: "https://nevadatreasurer.gov/UnclaimedProperty",
  },
  {
    code: "NC",
    name: "North Carolina",
    status: "registered",
    model: "No separate finder license",
    filingMethod: "digital",
    expectedDays: 60,
    feeCapPct: 10,
    officialSearchUrl: "https://nctreasurer.com/up",
  },
  {
    code: "PA",
    name: "Pennsylvania",
    status: "registered",
    model: "Treasury finder certification",
    filingMethod: "digital",
    expectedDays: 90,
    feeCapPct: 15,
    officialSearchUrl: "https://patreasury.gov/unclaimed-property",
  },
  {
    code: "OR",
    name: "Oregon",
    status: "registered",
    model: "Licensed finder + POA bundling",
    filingMethod: "digital",
    expectedDays: 100,
    feeCapPct: 10,
    renewalDue: "2026-09-30",
    officialSearchUrl: "https://oregon.gov/treasury/unclaimed",
    note: "License must be attached to every POA submission — renewal-dependent artifact.",
  },
  {
    code: "TN",
    name: "Tennessee",
    status: "blocked",
    model: "PI license via Public Safety Commission",
    note: "Blocked pending PI licensure — separate regulator from Treasury states.",
  },
  {
    code: "ME",
    name: "Maine",
    status: "blocked",
    model: "Reciprocal reporting — holding vs. domicile state unresolved",
    note: "Blocked pending legal review of which state's rule governs.",
  },
];

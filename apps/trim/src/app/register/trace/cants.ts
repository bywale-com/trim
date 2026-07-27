/**
 * PM Can'ts — machine twin of `docs/register/ENRICHMENT-CANTS.md`. Additive
 * depth only, no Core flow changes (parametric-elimination law: these live
 * behind a door/More menu in CT, not as always-on chrome).
 */
export type CantStatus = "done" | "open";

export type CantItem = {
  id: string;
  cant: string;
  status: CantStatus;
  surfaceIds: string[];
  notes?: string;
};

export const BUSINESS_CANTS: CantItem[] = [
  {
    id: "biz-cant-multi-entity",
    cant: "See recovery cases across more than one legal entity from a single login (holding companies, subsidiaries).",
    status: "open",
    surfaceIds: ["biz-ct-status"],
  },
  {
    id: "biz-cant-tax-faq",
    cant: "Open a tax-treatment FAQ door explaining gross-vs-net income and the two-tax-period timing, without Trove advising directly.",
    status: "open",
    surfaceIds: ["biz-ct-consent"],
    notes: "Cross-references tax-accounting-treatment-specialist Q1–Q2 in the SME pane.",
  },
  {
    id: "biz-cant-share-counsel",
    cant: "Share a read-only case link with outside counsel or the company's accountant, without granting them officer authority.",
    status: "open",
    surfaceIds: ["biz-ct-status"],
  },
  {
    id: "biz-cant-push-status",
    cant: "Opt in to a push notification / digest email when a case's status changes, instead of checking back manually.",
    status: "open",
    surfaceIds: ["biz-ct-status"],
  },
  {
    id: "biz-cant-amend-auth",
    cant: "Amend a signed authorization (e.g., correct officer name) without walking the full sign-again flow.",
    status: "open",
    surfaceIds: ["biz-ct-authorize"],
  },
  {
    id: "biz-cant-doc-loss",
    cant: "Submit an affidavit-of-loss or corporate-resolution alternative when the original negotiable instrument can't be produced.",
    status: "open",
    surfaceIds: ["biz-ct-upload"],
    notes: "Sourced from recovery-claims-specialist Q10 Pass 2.",
  },
];

export const AGENCY_CANTS: CantItem[] = [
  {
    id: "agency-cant-bulk-jurisdiction",
    cant: "Bulk-edit jurisdiction status/model across many states in one action instead of one row at a time.",
    status: "open",
    surfaceIds: ["agency-ct-jurisdiction"],
  },
  {
    id: "agency-cant-dlq-replay",
    cant: "Replay a dead-lettered filing/follow-up job from the exception queue without leaving the Agency desk.",
    status: "open",
    surfaceIds: ["agency-ct-exceptions"],
  },
  {
    id: "agency-cant-fee-cap-editor",
    cant: "Edit a state's fee-cap value/function inline from the jurisdiction table, versioned with an audit trail.",
    status: "open",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-audit"],
    notes: "Blocked on the CTO fee-cap dataset shape landing first — see wiring.ts.",
  },
  {
    id: "agency-cant-notary-switch",
    cant: "Toggle a case's filing method between digital / mail-original / notarized-original when a state's process changes.",
    status: "open",
    surfaceIds: ["agency-ct-jurisdiction"],
  },
  {
    id: "agency-cant-onboard-olg",
    cant: "Onboard a client instance manually (OLG) alongside the ALG instant-served flow, for jurisdictions that aren't yet self-serve.",
    status: "open",
    surfaceIds: ["agency-ct-portfolio"],
  },
];

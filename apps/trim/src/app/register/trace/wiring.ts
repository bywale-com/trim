/**
 * CTO Wiring — machine twin of `docs/wiring/WIRING.md` (three-pass: Function
 * / Can'ts / Furnish) plus the 10 `docs/sme/CROSS-CUTTING.md` findings that
 * require joint PM+CTO reconciliation. Links to flow anchors
 * (`src/app/register/flows`) and surfaces (`./surfaces.ts`) where a finding
 * has one.
 */
export type WiringStatus = "implemented" | "partial" | "deferred" | "wiring";

export type WiringFacet = {
  id: string;
  label: string;
  status: WiringStatus;
  flowIds: string[];
  surfaceIds: string[];
  notes?: string;
};

export const WIRING_FUNCTION: WiringFacet[] = [
  { id: "wf-detection", label: "Detection jobs", status: "deferred", flowIds: ["activate-notice"], surfaceIds: [] },
  { id: "wf-entity-resolution", label: "Entity resolution", status: "deferred", flowIds: ["activate-notice"], surfaceIds: ["trim-ct-owner-notice"] },
  {
    id: "wf-jurisdiction-registry",
    label: "Jurisdiction registry",
    status: "partial",
    flowIds: [],
    surfaceIds: ["trim-ct-op-jurisdiction"],
    notes: "Modeled as JurisdictionEntry (model + filingMethod text) — not yet the versioned fee-cap/regulator/process dataset CROSS-CUTTING #1 and #2 call for.",
  },
  { id: "wf-activation", label: "Activation delivery", status: "implemented", flowIds: ["activate-notice"], surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"] },
  { id: "wf-consent-auth", label: "Consent / authorization capture", status: "implemented", flowIds: ["consent-authorize"], surfaceIds: ["trim-ct-owner-consent", "trim-ct-owner-authorize"] },
  { id: "wf-docs", label: "Doc intake", status: "partial", flowIds: ["consent-authorize"], surfaceIds: ["trim-ct-owner-upload"], notes: "Fixed checklist, not yet adaptive to entity history." },
  { id: "wf-claim-sm", label: "Protest state machine", status: "partial", flowIds: ["file-claim-packet", "recover-kickback"], surfaceIds: ["trim-ct-owner-status", "trim-ct-op-exceptions"], notes: "Missing blocked / reconciling / hearing reschedule states." },
  { id: "wf-filing", label: "Filing", status: "implemented", flowIds: ["file-claim-packet"], surfaceIds: ["trim-ct-owner-status"] },
  { id: "wf-followup", label: "Follow-up / resubmission", status: "implemented", flowIds: ["recover-kickback"], surfaceIds: ["trim-ct-op-exceptions"] },
  { id: "wf-remittance-reconcile", label: "Reduction reconcile", status: "deferred", flowIds: ["close-paid-invoice"], surfaceIds: ["trim-ct-owner-reduction", "trim-ct-op-collections"] },
  { id: "wf-invoice", label: "Invoice", status: "implemented", flowIds: ["close-paid-invoice"], surfaceIds: ["trim-ct-owner-invoice"] },
  { id: "wf-audit", label: "Audit", status: "implemented", flowIds: [], surfaceIds: ["trim-ct-op-audit"] },
  { id: "wf-apis", label: "APIs", status: "wiring", flowIds: [], surfaceIds: [] },
  { id: "wf-observability", label: "Observability", status: "wiring", flowIds: [], surfaceIds: [] },
];

export const WIRING_CANTS: WiringFacet[] = [
  { id: "wc-multi-portal", label: "Multi-portal filing orchestration across heterogeneous state systems", status: "deferred", flowIds: ["file-claim-packet"], surfaceIds: [] },
  { id: "wc-notary", label: "Notarized/mail-original filing branch", status: "deferred", flowIds: ["file-claim-packet"], surfaceIds: ["trim-ct-op-jurisdiction"] },
  { id: "wc-fee-caps", label: "Per-state and county-specific fee-cap table", status: "deferred", flowIds: ["consent-authorize"], surfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-owner-authorize"] },
  { id: "wc-1099", label: "Trim's own W-9/1099 vendor-side process", status: "deferred", flowIds: [], surfaceIds: [] },
  { id: "wc-bank-confirm", label: "Reduction confirmation mechanism without touching funds", status: "deferred", flowIds: ["close-paid-invoice"], surfaceIds: ["trim-ct-owner-reduction", "trim-ct-op-collections"] },
  { id: "wc-dlq", label: "Dead-letter-queue replay for stuck filing/follow-up jobs", status: "deferred", flowIds: ["recover-kickback"], surfaceIds: ["trim-ct-op-exceptions"] },
  { id: "wc-rate-limits", label: "Per-state API/portal rate limiting", status: "deferred", flowIds: ["file-claim-packet"], surfaceIds: [] },
];

export const WIRING_FURNISH: WiringFacet[] = [
  { id: "wfu-job-health", label: "Job health", status: "deferred", flowIds: [], surfaceIds: ["trim-ct-op-audit"] },
  { id: "wfu-cost-glance", label: "Cost glance", status: "deferred", flowIds: [], surfaceIds: ["trim-ct-op-portfolio"] },
  { id: "wfu-replay", label: "Replay control", status: "deferred", flowIds: ["recover-kickback"], surfaceIds: ["trim-ct-op-exceptions"] },
  { id: "wfu-audit-export", label: "Audit export", status: "deferred", flowIds: [], surfaceIds: ["trim-ct-op-audit"] },
];

export type CrossCuttingFinding = {
  id: string;
  rank: number;
  title: string;
  productSide: string;
  systemSide: string;
  sources: string;
  reconciliationNeeded: string;
  surfaceIds: string[];
  flowIds: string[];
};

/** Machine twin of docs/sme/CROSS-CUTTING.md, ranked as authored. */
export const CROSS_CUTTING_FINDINGS: CrossCuttingFinding[] = [
  {
    id: "cc-1",
    rank: 1,
    title: "Contingency is a jurisdiction-dependent function, not one number",
    productSide: "Owner authorize currently implies a flat, known percentage the Owner signs off on; the real cap depends on jurisdiction and county rules.",
    systemSide: "CTO needs a versioned, per-state (and per-time-in-custody in Colorado) fee-cap table computed at authorization time, not a hardcoded constant.",
    sources: "pass1/contingency-fee-regulatory-specialist.md Q1-Q9",
    reconciliationNeeded: "PM's \"Owner sees one number, signs once\" UX and CTO's \"fee is computed, not configured\" system requirement must be designed together.",
    surfaceIds: ["trim-ct-owner-authorize", "trim-ct-op-jurisdiction"],
    flowIds: ["consent-authorize"],
  },
  {
    id: "cc-2",
    rank: 2,
    title: "Finder registration is three regimes, and it gates the notice, not just authorization",
    productSide: "The jurisdiction gate reads as one boolean per state; reality is three structurally different regulator/requirement/process models.",
    systemSide: "The gate must block the detected → notified transition, not just authorized or filing — a sequencing change on the state machine itself.",
    sources: "pass1/finder-registration-licensure-specialist.md Q1–Q3, Q8; pass1/state-administrator-perspective-specialist.md Q8",
    reconciliationNeeded: "PM must confirm the admission model's notified state cannot be reached before CTO's jurisdiction check clears.",
    surfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-owner-notice"],
    flowIds: ["activate-notice"],
  },
  {
    id: "cc-3",
    rank: 3,
    title: "Money never touches Trim — resolves transmitter risk, reopens collection risk",
    productSide: "Validates the no-escrow design and reduced → invoiced sequence, but the Owner may feel friction at the invoice step after already receiving documented tax savings.",
    systemSide: "Zero automatic collection mechanism exists — CTO needs invoicing/collections/dunning and a payout-confirmation mechanism that never touches the bank transaction.",
    sources: "pass1/payments-remittance-specialist.md Q1, Q3, Q7",
    reconciliationNeeded: "PM needs an honest \"invoice outstanding\" state; CTO needs the reconciliation mechanism that proves payout happened.",
    surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    flowIds: ["close-paid-invoice"],
  },
  {
    id: "cc-4",
    rank: 4,
    title: "\"No upfront fee\" is necessary but not sufficient as a trust signal",
    productSide: "Furnishing lists \"no upfront fee\" alone; the notice also needs a named agency, verifiable case number, and an explicit non-affiliation disclaimer (legally required in Tennessee).",
    systemSide: "Detection needs the state agency's actual case/reference number and official portal URL as first-class data so the notice can show something independently verifiable.",
    sources: "pass1/trust-anti-scam-perception-specialist.md Q1, Q6, Q7",
    reconciliationNeeded: "PM owns notice copy/layout; CTO owns whether detection actually captures a verifiable case/reference number per record.",
    surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"],
    flowIds: ["activate-notice"],
  },
  {
    id: "cc-5",
    rank: 5,
    title: "A notified business isn't always able to act — entity status must gate the notice",
    productSide: "Dissolved/revoked businesses need state-level reinstatement before an officer's signature is legally valid; the admission model has no state for this dead end.",
    systemSide: "CTO needs an entity-status check (active/dissolved/revoked) as part of detection/matching, before a notice is generated.",
    sources: "pass1/business-entity-resolution-specialist.md Q3, Q4; pass1/escheatment-derivative-rights-legal-specialist.md Q7",
    reconciliationNeeded: "PM needs a needs_reinstatement admission state; CTO needs the entity-status data source and pre-notice check timing.",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-notice"],
    flowIds: ["activate-notice"],
  },
  {
    id: "cc-6",
    rank: 6,
    title: "\"Not yet reconciled in the state database\" must not be shown as a decision",
    productSide: "If status facts collapse a data-reconciliation gap into kicked_back or any denial-shaped state, the officer sees a false negative signal.",
    systemSide: "Agency tooling needs to distinguish a genuine procedural denial from a data-reconciliation gap — a different queue and SLA than kicked_back.",
    sources: "pass1/recovery-claims-specialist.md Q3",
    reconciliationNeeded: "PM's claim-state vocabulary needs a state the Operator can use internally without ever surfacing denial-shaped language for this situation.",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-op-exceptions"],
    flowIds: ["recover-kickback"],
  },
  {
    id: "cc-7",
    rank: 7,
    title: "Tax treatment is a two-step, two-tax-period event the consent flow doesn't disclose",
    productSide: "The documented tax reduction and Trim's invoice are separate, possibly later-year accounting events.",
    systemSide: "reduced and invoiced need distinct, accurately-dated facts precisely because the two dates may fall in different tax periods.",
    sources: "pass1/tax-accounting-treatment-specialist.md Q1, Q2",
    reconciliationNeeded: "PM decides how much to surface in-product vs. leaving to the business's own accountant; CTO confirms the two dates are structurally separate and queryable independently.",
    surfaceIds: ["trim-ct-owner-consent", "trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    flowIds: ["close-paid-invoice"],
  },
  {
    id: "cc-8",
    rank: 8,
    title: "The jurisdiction gate needs to know which state's law governs, and it isn't always the business's own state",
    productSide: "Reciprocal reporting means the holding state and the business's domicile state can differ; keying off the wrong one wrongly blocks or wrongly permits outreach.",
    systemSide: "The gate check needs to run per-record (holding state), not per-business (domicile state) — changes how the jurisdiction registry joins against detection records.",
    sources: "pass1/recovery-claims-specialist.md Q8; pass1/finder-registration-licensure-specialist.md Q6; pass1/state-administrator-perspective-specialist.md Q8",
    reconciliationNeeded: "Mostly a CTO data-model decision, but it changes what PM can honestly say in the notice.",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    flowIds: ["activate-notice"],
  },
  {
    id: "cc-9",
    rank: 9,
    title: "\"Kicked back\" needs a real, sourced reason-code taxonomy — none exists off the shelf",
    productSide: "The actual reason codes an Owner or Operator sees aren't sourced from any single authoritative cross-county list — Trim has to define its own.",
    systemSide: "CTO needs this as a controlled vocabulary in the case-exception data model, versioned like the fee-cap and jurisdiction tables.",
    sources: "pass1/recovery-claims-specialist.md Q7",
    reconciliationNeeded: "Low-stakes but real — PM and CTO should agree on the taxonomy once, together.",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-op-exceptions"],
    flowIds: ["recover-kickback"],
  },
  {
    id: "cc-10",
    rank: 10,
    title: "Property type is a hidden dimension at least three personas independently need",
    productSide: "A notice that only shows a dollar amount is under-specified for legal-standing, tax-withholding, and fee-cap questions that all key off property type.",
    systemSide: "Detection needs to capture and persist property type as first-class, queryable data from the very first pass, not bolted on later.",
    sources: "pass1/escheatment-derivative-rights-legal-specialist.md Q4; pass1/tax-accounting-treatment-specialist.md Q4; pass1/contingency-fee-regulatory-specialist.md Q4",
    reconciliationNeeded: "A schema decision CTO owns, but PM needs to know it's coming so notice/consent copy doesn't get built around a \"just a dollar amount\" assumption.",
    surfaceIds: ["trim-ct-owner-notice"],
    flowIds: ["activate-notice"],
  },
];

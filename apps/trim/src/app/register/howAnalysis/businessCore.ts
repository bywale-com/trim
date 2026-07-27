import type { HowGraph, HowNode, HowUiRef } from "./types";

/** Shared Owner UI refs — define once, reuse across leaves + supporting. */
export const OwnerPortfolio: HowUiRef = {
  id: "mod-owner-portfolio",
  kind: "module",
  label: "Portfolio",
  does: "Lists the owning entity's protest cases by parcel and tax year.",
  surfaceId: "trim-ct-owner-portfolio",
};

export const ProtestCase: HowUiRef = {
  id: "modal-protest-case",
  kind: "modal",
  label: "Protest Case",
  does: "View for one protest case (parcel × tax year) inside Portfolio.",
  surfaceId: "trim-ct-owner-case",
};

export const NoticeProof: HowUiRef = {
  id: "block-owner-notice",
  kind: "block",
  label: "Notice — proof facts",
  does: "Parcel ID, county, assessed $X, evidence supports $Y, estimated excess ≈ $Z.",
  surfaceId: "trim-ct-owner-notice",
};

export const NoticeTrust: HowUiRef = {
  id: "block-owner-trust",
  kind: "block",
  label: "Notice — trust strip",
  does: "No upfront fee; county-site verification link; non-affiliation disclaimer.",
  surfaceId: "trim-ct-owner-trust",
};

export const ConsentTicks: HowUiRef = {
  id: "block-owner-consent",
  kind: "block",
  label: "Consent ticks",
  does: "I see it / I understand it / I'm with it; unlocks contingency detail.",
  surfaceId: "trim-ct-owner-consent",
};

export const AuthorizeDoor: HowUiRef = {
  id: "block-owner-authorize",
  kind: "block",
  label: "Authorize door",
  does: "One-time Appointment of Agent; locks contingency % (jurisdiction-aware cap).",
  surfaceId: "trim-ct-owner-authorize",
};

export const UploadDocs: HowUiRef = {
  id: "block-owner-upload",
  kind: "block",
  label: "Upload docs",
  does: "Optional rent roll / P&L / condition evidence after authorize.",
  surfaceId: "trim-ct-owner-upload",
};

export const StatusFacts: HowUiRef = {
  id: "block-owner-status",
  kind: "block",
  label: "Status facts",
  does: "Evidence prep / informal / hearing queued / active / reported state and days-in-state.",
  surfaceId: "trim-ct-owner-status",
};

export const ReductionFact: HowUiRef = {
  id: "block-owner-reduction",
  kind: "block",
  label: "Reduction fact",
  does: "Assessment reduced; measured savings (reduction × millage).",
  surfaceId: "trim-ct-owner-reduction",
};

export const InvoiceFact: HowUiRef = {
  id: "block-owner-invoice",
  kind: "block",
  label: "Invoice fact",
  does: "Trim contingency cut billed against documented savings.",
  surfaceId: "trim-ct-owner-invoice",
};

export const DeclineDoor: HowUiRef = {
  id: "block-owner-decline",
  kind: "block",
  label: "Decline door",
  does: "Walk away before authorize.",
  surfaceId: "trim-ct-owner-decline",
};

/**
 * Owner — Core Outcome How tree.
 * Leaf answers: Starting from [Module|Modal]… On [Modal] you… [Block]…
 *
 * Portfolio = module. Protest Case = modal. Notice / consent / authorize / … = blocks on Protest Case.
 */
const nodes: HowNode[] = [
  {
    id: "outcome",
    parentId: null,
    kind: "outcome",
    depth: 0,
    question: null,
    label: "Core outcome",
    clarity:
      "As the Owner, I can open a notice that already states my parcel's assessed value, the evidence that supports a lower value, and an estimated excess — consent to the agent-led protest model, sign one Appointment of Agent at a jurisdiction-aware contingency %, optionally upload income docs, and see appeal status, reduction, and invoice as facts — so that my over-assessment is corrected without upfront payment and without managing the process myself.",
    components: [],
  },
  {
    id: "how-core",
    parentId: "outcome",
    kind: "answer",
    depth: 1,
    question:
      "How do I open a notice, consent, authorize once, upload docs, and see status / reduction / invoice facts?",
    label: "How?",
    clarity:
      "Starting from Portfolio, you open Protest Case for each parcel in turn and use Notice — proof facts, Consent ticks, Authorize door, Upload docs, Status facts, Reduction fact, Invoice fact — or Decline door before you authorize.",
    components: [
      OwnerPortfolio,
      ProtestCase,
      NoticeProof,
      ConsentTicks,
      AuthorizeDoor,
      UploadDocs,
      StatusFacts,
      ReductionFact,
      InvoiceFact,
      DeclineDoor,
    ],
  },
  {
    id: "leaf-notice",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I open a notice that already states what is over-assessed and by how much?",
    label: "Notice land",
    clarity:
      "Starting from Portfolio, you click Protest Case (notified). On Protest Case you see Notice — proof facts (parcel ID, county, assessed $X, evidence $Y, ≈$Z excess, analysis framing) and Notice — trust strip.",
    components: [OwnerPortfolio, ProtestCase, NoticeProof, NoticeTrust],
  },
  {
    id: "leaf-consent",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I consent to the agent-led protest model?",
    label: "Consent ticks",
    clarity:
      "Starting from Protest Case (notified), you tick Consent ticks (I see it, I understand it, I'm with it). Contingency detail on Notice — proof facts unlocks.",
    components: [ProtestCase, ConsentTicks, NoticeProof],
  },
  {
    id: "leaf-authorize",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I sign the Appointment of Agent once at a pre-set contingency %?",
    label: "Authorize door",
    clarity:
      "Starting from Protest Case (consented), you open Authorize door and sign, locking contingency %.",
    components: [ProtestCase, AuthorizeDoor],
  },
  {
    id: "leaf-upload",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I upload optional income docs or evidence?",
    label: "Upload docs",
    clarity:
      "Starting from Protest Case (authorized), you open Upload docs and upload rent roll / P&L / condition evidence. Upload is optional — never a gate on appeal filing.",
    components: [ProtestCase, UploadDocs],
  },
  {
    id: "leaf-status",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I see appeal progress, reduction, and invoice as facts?",
    label: "Status + outcome facts",
    clarity:
      "Starting from Protest Case (evidence_prep, informal, hearing_queued, hearing_active, or hearing_reported), you see Status facts. When reduced or invoiced you see Reduction fact and Invoice fact.",
    components: [ProtestCase, StatusFacts, ReductionFact, InvoiceFact],
  },
  {
    id: "leaf-decline",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I walk away before authorizing?",
    label: "Decline door",
    clarity:
      "Starting from Protest Case (notified or consented), you click Decline door.",
    components: [ProtestCase, DeclineDoor],
  },
];

export const ownerCoreHow: HowGraph = {
  id: "owner-core",
  label: "Owner · Core",
  personaId: "owner",
  outcomeId: "owner-core",
  nodes,
};

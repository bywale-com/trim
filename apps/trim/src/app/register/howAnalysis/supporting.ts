/**
 * Shallow How graphs for supporting outcomes — DNA reuse of Core leaf paths
 * (same click-path convention + same HowUiRefs), not a second product.
 */
import type { HowGraph, HowNode } from "./types";
import {
  AuthorizeDoor,
  ProtestCase,
  OwnerPortfolio,
  ConsentTicks,
  InvoiceFact,
  NoticeProof,
  NoticeTrust,
  ReductionFact,
  StatusFacts,
  UploadDocs,
  DeclineDoor,
} from "./businessCore";
import {
  AuditLog,
  Clients,
  CollectionsQueue,
  ExceptionQueue,
  JurisdictionTable,
  Settings,
  Work,
  WorkerDispatch,
} from "./agencyCore";

function shallow(opts: {
  id: string;
  label: string;
  personaId: "owner" | "operator" | "worker";
  outcomeId: string;
  statement: string;
  leafLabel: string;
  leafQuestion: string;
  leafClarity: string;
  components: HowNode["components"];
}): HowGraph {
  const nodes: HowNode[] = [
    {
      id: "outcome",
      parentId: null,
      kind: "outcome",
      depth: 0,
      question: null,
      label: opts.label,
      clarity: opts.statement,
      components: [],
    },
    {
      id: "how",
      parentId: "outcome",
      kind: "answer",
      depth: 1,
      question: `How does this outcome get delivered?`,
      label: "How?",
      clarity: opts.leafClarity,
      components: opts.components,
    },
    {
      id: "leaf",
      parentId: "how",
      kind: "leaf",
      depth: 2,
      question: opts.leafQuestion,
      label: opts.leafLabel,
      clarity: opts.leafClarity,
      components: opts.components,
    },
  ];
  return {
    id: opts.id,
    label: opts.label,
    personaId: opts.personaId,
    outcomeId: opts.outcomeId,
    nodes,
  };
}

export const businessSupportingHow: HowGraph[] = [
  shallow({
    id: "owner-consent",
    label: "Owner · Consent",
    personaId: "owner",
    outcomeId: "owner-consent",
    statement:
      "As the Owner, I can tick three short acknowledgments before contingency detail — so that activation is stated consent, not identity proof.",
    leafLabel: "Consent ticks",
    leafQuestion: "How do I tick see / understand / with it?",
    leafClarity:
      "Starting from Protest Case (notified), you tick Consent ticks (I see it, I understand it, I'm with it). Contingency detail on Notice — proof facts unlocks.",
    components: [ProtestCase, ConsentTicks, NoticeProof],
  }),
  shallow({
    id: "owner-authorize",
    label: "Owner · Authorize",
    personaId: "owner",
    outcomeId: "owner-authorize",
    statement:
      "As the Owner, I can sign the one-time Appointment of Agent locking contingency % — so that Trim can file and represent without repeated engagement.",
    leafLabel: "Authorize door",
    leafQuestion: "How do I sign once and lock contingency %?",
    leafClarity:
      "Starting from Protest Case (consented), you open Authorize door and sign, locking contingency %.",
    components: [ProtestCase, AuthorizeDoor],
  }),
  shallow({
    id: "owner-docs",
    label: "Owner · Docs",
    personaId: "owner",
    outcomeId: "owner-docs",
    statement:
      "As the Owner, I can optionally upload rent roll / P&L / condition evidence after authorize — so that the appeal packet is as strong as possible while upload is never a gate.",
    leafLabel: "Upload docs",
    leafQuestion: "How do I upload optional income docs?",
    leafClarity:
      "Starting from Protest Case (authorized), you open Upload docs and upload rent roll / P&L / condition evidence.",
    components: [ProtestCase, UploadDocs],
  }),
  shallow({
    id: "owner-status",
    label: "Owner · Status",
    personaId: "owner",
    outcomeId: "owner-status",
    statement:
      "As the Owner, I can see evidence prep / informal / hearing / reduction / invoice as facts — so that I am never managing a protest grind dashboard.",
    leafLabel: "Status + outcome facts",
    leafQuestion: "How do I see appeal progress and outcome as facts?",
    leafClarity:
      "Starting from Protest Case (evidence_prep or later), you see Status facts. When reduced or invoiced you see Reduction fact and Invoice fact.",
    components: [ProtestCase, StatusFacts, ReductionFact, InvoiceFact],
  }),
  shallow({
    id: "owner-trust",
    label: "Owner · Trust",
    personaId: "owner",
    outcomeId: "owner-trust",
    statement:
      "As the Owner, I can see parcel ID + county + county-site verify link + no-upfront-fee + non-affiliation — so that the notice survives scam skepticism.",
    leafLabel: "Notice + trust",
    leafQuestion: "How do I see verifiable proof and no upfront fee?",
    leafClarity:
      "Starting from Portfolio, you click Protest Case (notified). On Protest Case you see Notice — proof facts (parcel, county, analysis) and Notice — trust strip.",
    components: [OwnerPortfolio, ProtestCase, NoticeProof, NoticeTrust],
  }),
  shallow({
    id: "owner-decline",
    label: "Owner · Decline",
    personaId: "owner",
    outcomeId: "owner-decline",
    statement:
      "As the Owner, I can walk away before authorization with a single control — so that declining is never a form or a call.",
    leafLabel: "Decline door",
    leafQuestion: "How do I walk away before authorizing?",
    leafClarity:
      "Starting from Protest Case (notified or consented), you click Decline door.",
    components: [ProtestCase, DeclineDoor],
  }),
];

export const agencySupportingHow: HowGraph[] = [
  shallow({
    id: "operator-portfolio",
    label: "Operator · Portfolio",
    personaId: "operator",
    outcomeId: "operator-portfolio",
    statement:
      "As the Operator, I can see every Owner account and protest case in my book by admission state — so that I know who's stuck and who's clean.",
    leafLabel: "Client portfolio",
    leafQuestion: "How do I see the book by admission state?",
    leafClarity: "Starting from Clients, you see every Owner account by admission state.",
    components: [Clients],
  }),
  shallow({
    id: "operator-jurisdiction",
    label: "Operator · Jurisdiction",
    personaId: "operator",
    outcomeId: "operator-jurisdiction",
    statement:
      "As the Operator, I can see where Trim is licensed to operate — so that outreach and filing are blocked where unlawful.",
    leafLabel: "Jurisdiction gate",
    leafQuestion: "How do I see where we may operate?",
    leafClarity:
      "Starting from Settings, you open Jurisdiction & licensure. On Jurisdiction & licensure you see PTC registration status, fee cap, and appeal window per state.",
    components: [Settings, JurisdictionTable],
  }),
  shallow({
    id: "operator-exceptions",
    label: "Operator · Exceptions",
    personaId: "operator",
    outcomeId: "operator-exceptions",
    statement:
      "As the Operator, I can resolve stuck and blocked protest cases — so that automation isn't permanently stalled.",
    leafLabel: "Exception work",
    leafQuestion: "How do I work stuck protest cases?",
    leafClarity:
      "Starting from Work, you open Exception queue. On Exception queue you see stuck protests with reason codes and click resubmit or escalate.",
    components: [Work, ExceptionQueue],
  }),
  shallow({
    id: "operator-audit",
    label: "Operator · Audit",
    personaId: "operator",
    outcomeId: "operator-audit",
    statement:
      "As the Operator, I can see the full action trail under the Appointment of Agent for any protest case — so that I can account for automation's actions.",
    leafLabel: "Audit log",
    leafQuestion: "How do I read the Appointment of Agent action trail?",
    leafClarity:
      "Starting from Work, you open Audit log. On Audit log you see the immutable action trail across all protest cases.",
    components: [Work, AuditLog],
  }),
  shallow({
    id: "operator-dispatch",
    label: "Operator · Worker Dispatch",
    personaId: "operator",
    outcomeId: "operator-dispatch",
    statement:
      "As the Operator, I can see hearing-queued cases and the Worker roster by county/board — so that formal hearings never stall for lack of an available advocate.",
    leafLabel: "Worker dispatch",
    leafQuestion: "How do I dispatch Workers to hearing-queued cases?",
    leafClarity:
      "Starting from Work, you open Worker dispatch. On Worker dispatch you see hearing-queued cases and the Worker roster.",
    components: [Work, WorkerDispatch],
  }),
  shallow({
    id: "operator-collections",
    label: "Operator · Collections",
    personaId: "operator",
    outcomeId: "operator-collections",
    statement:
      "As the Operator, I can see invoiced-not-collected cases and manage dunning — so that the contingency cut is collected after the Owner receives the assessment reduction.",
    leafLabel: "Collections queue",
    leafQuestion: "How do I manage dunning for invoiced cases?",
    leafClarity:
      "Starting from Work, you open Collections. On Collections you see invoiced-not-collected protest cases and manage the dunning queue.",
    components: [Work, CollectionsQueue],
  }),
  shallow({
    id: "operator-county-data",
    label: "Operator · County Data",
    personaId: "operator",
    outcomeId: "operator-county-data",
    statement:
      "As the Operator, I can monitor roll import status, CAMA freshness, and comp coverage per county — so that stale data doesn't produce indefensible notices.",
    leafLabel: "County data health",
    leafQuestion: "How do I monitor county data quality?",
    leafClarity:
      "Starting from Work, you open County data health. On County data health you see roll import status, CAMA freshness, and comp coverage per county.",
    components: [Work],
  }),
];

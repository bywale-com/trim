import type { HowGraph, HowNode, HowUiRef } from "./types";

/** Shared Operator UI refs — define once, reuse across leaves + supporting. */
export const Clients: HowUiRef = {
  id: "mod-op-clients",
  kind: "module",
  label: "Clients",
  does: "Lists every Owner account in the Operator's book by protest-case admission state.",
  surfaceId: "trim-ct-op-portfolio",
};

export const Work: HowUiRef = {
  id: "mod-op-work",
  kind: "module",
  label: "Work",
  does: "Things that need Operator action across the book — exceptions, dispatch, audit, collections.",
  surfaceId: "trim-ct-op-exceptions",
};

export const ExceptionQueue: HowUiRef = {
  id: "modal-op-exception-queue",
  kind: "modal",
  label: "Exception queue",
  does: "Stuck and blocked protest cases with reason codes and resubmit / escalate controls.",
  surfaceId: "trim-ct-op-exceptions",
};

export const Settings: HowUiRef = {
  id: "mod-op-settings",
  kind: "module",
  label: "Settings",
  does: "Operator standing: jurisdiction/licensure, fee caps, appeal windows.",
  surfaceId: "trim-ct-op-jurisdiction",
};

export const JurisdictionTable: HowUiRef = {
  id: "modal-op-jurisdiction",
  kind: "modal",
  label: "Jurisdiction & licensure",
  does: "Per-state PTC registration status, fee cap, appeal-window calendar, rollout gate.",
  surfaceId: "trim-ct-op-jurisdiction",
};

export const WorkerDispatch: HowUiRef = {
  id: "modal-op-dispatch",
  kind: "modal",
  label: "Worker dispatch",
  does: "Hearing-queued cases awaiting Worker pickup; Worker roster by county/board.",
  surfaceId: "trim-ct-op-worker-dispatch",
};

export const AuditLog: HowUiRef = {
  id: "modal-op-audit",
  kind: "modal",
  label: "Audit log",
  does: "Immutable Appointment of Agent action trail across all protest cases.",
  surfaceId: "trim-ct-op-audit",
};

export const CollectionsQueue: HowUiRef = {
  id: "modal-op-collections",
  kind: "modal",
  label: "Collections",
  does: "Invoiced-not-collected protest cases; dunning queue; ACH/card status.",
  surfaceId: "trim-ct-op-collections",
};

/**
 * Operator — Core Outcome How tree.
 * Leaf answers: Starting from [Module|Modal]… On [Modal] you… [Block]…
 *
 * Clients / Work / Settings = modules.
 * Exception queue / Jurisdiction & licensure / Worker dispatch / Audit log / Collections = modals/panels.
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
      "As the Operator, I can maintain per-jurisdiction licensure gates (TX PTC capacity, fee caps, appeal windows) across my book, work exceptions and stuck protests, dispatch Workers to hearing-queued cases, and audit all actions under the Appointment of Agent — so that Owner accounts are never served into illegal jurisdictions and no protest gets permanently stuck.",
    components: [],
  },
  {
    id: "how-core",
    parentId: "outcome",
    kind: "answer",
    depth: 1,
    question:
      "How do I maintain licensure gates across my book, work stuck protests, dispatch Workers, and audit under Appointment of Agent?",
    label: "How?",
    clarity:
      "Starting from Clients, you see every Owner account by admission state; from Settings you open Jurisdiction & licensure; from Work you open Exception queue (with resubmit / escalate), Worker dispatch, Audit log, and Collections.",
    components: [Clients, Settings, JurisdictionTable, Work, ExceptionQueue, WorkerDispatch, AuditLog, CollectionsQueue],
  },
  {
    id: "leaf-portfolio",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I see every Owner account in my book?",
    label: "Client portfolio",
    clarity:
      "Starting from Clients, you see every Owner account by admission state.",
    components: [Clients],
  },
  {
    id: "leaf-jurisdiction",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I maintain per-state licensure and fee-cap gates?",
    label: "Jurisdiction gate",
    clarity:
      "Starting from Settings, you open Jurisdiction & licensure. On Jurisdiction & licensure you see PTC registration status, fee cap, appeal window, and rollout gate per state.",
    components: [Settings, JurisdictionTable],
  },
  {
    id: "leaf-exceptions",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I work stuck / blocked protest cases?",
    label: "Exception work",
    clarity:
      "Starting from Work, you open Exception queue. On Exception queue you see stuck and blocked protests with reason codes and click resubmit or escalate.",
    components: [Work, ExceptionQueue],
  },
  {
    id: "leaf-dispatch",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I dispatch Workers to hearing-queued cases?",
    label: "Worker dispatch",
    clarity:
      "Starting from Work, you open Worker dispatch. On Worker dispatch you see hearing-queued cases and the Worker roster by county/board availability.",
    components: [Work, WorkerDispatch],
  },
  {
    id: "leaf-audit",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I audit actions under the Appointment of Agent?",
    label: "Audit log",
    clarity:
      "Starting from Work, you open Audit log. On Audit log you see the immutable action trail across all protest cases.",
    components: [Work, AuditLog],
  },
  {
    id: "leaf-collections",
    parentId: "how-core",
    kind: "leaf",
    depth: 2,
    question: "How do I manage dunning for invoiced-not-collected cases?",
    label: "Collections",
    clarity:
      "Starting from Work, you open Collections. On Collections you see invoiced-not-collected protest cases and manage the dunning queue.",
    components: [Work, CollectionsQueue],
  },
];

export const operatorCoreHow: HowGraph = {
  id: "operator-core",
  label: "Operator · Core",
  personaId: "operator",
  outcomeId: "operator-core",
  nodes,
};

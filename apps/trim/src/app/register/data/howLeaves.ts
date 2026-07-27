/**
 * Register — How leaves (Function), machine twin of the Trim protest spine.
 * Each path is the mechanism sequence that delivers the persona's Core outcome;
 * leaves are the UI-role terminals a DS-I click-through must actually build.
 * `flowId` anchors each leaf back to its behavioral flow map, and `surfaceId`
 * anchors it to the CT region (`src/app/register/trace`) implementing it.
 *
 * Surface IDs must match trim-ct-* entries in register/trace/surfaces.ts.
 */
export type HowLeaf = {
  id: string;
  label: string;
  note?: string;
  flowId?: string;
  surfaceId?: string;
};

export type HowPath = {
  id: string;
  personaLabel: string;
  pathLabel: string;
  steps: string[];
  leaves: HowLeaf[];
};

export const HOW_PATHS: HowPath[] = [
  // ——————————————————————————————————————————
  // Owner — Core path
  // ——————————————————————————————————————————
  {
    id: "owner-core",
    personaLabel: "Owner",
    pathLabel: "Core path",
    steps: [
      "Open notice",
      "Consent ticks",
      "See proof/analysis",
      "Authorize (sign once)",
      "Upload docs (optional)",
      "Watch status",
      "See reduction + invoice OR decline",
    ],
    leaves: [
      {
        id: "owner-leaf-portfolio",
        label: "Portfolio",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-portfolio",
      },
      {
        id: "owner-leaf-notice",
        label: "Notice land",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-notice",
      },
      {
        id: "owner-leaf-trust",
        label: "Trust proof panel",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-trust",
      },
      {
        id: "owner-leaf-consent",
        label: "Consent checkboxes",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-consent",
      },
      {
        id: "owner-leaf-sign",
        label: "Authorize door",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-upload",
        label: "Upload panel",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-upload",
      },
      {
        id: "owner-leaf-status",
        label: "Status facts",
        flowId: "file-claim-packet",
        surfaceId: "trim-ct-owner-status",
      },
      {
        id: "owner-leaf-decline",
        label: "Decline door",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-decline",
      },
      {
        id: "owner-leaf-reduction",
        label: "Reduction fact",
        flowId: "close-paid-invoice",
        surfaceId: "trim-ct-owner-reduction",
      },
      {
        id: "owner-leaf-invoice",
        label: "Invoice fact",
        flowId: "close-paid-invoice",
        surfaceId: "trim-ct-owner-invoice",
      },
    ],
  },

  // ——————————————————————————————————————————
  // Operator — Core path
  // ——————————————————————————————————————————
  {
    id: "operator-core",
    personaLabel: "Operator",
    pathLabel: "Core path",
    steps: [
      "Portfolio glance",
      "Jurisdiction / licensure check",
      "Exception queue",
      "Work stuck protest",
      "Dispatch Worker to hearing",
      "Audit glance",
      "Collections dunning",
    ],
    leaves: [
      {
        id: "op-leaf-portfolio",
        label: "Portfolio table",
        surfaceId: "trim-ct-op-portfolio",
      },
      {
        id: "op-leaf-jurisdiction",
        label: "Jurisdiction & licensure table",
        flowId: "activate-notice",
        surfaceId: "trim-ct-op-jurisdiction",
      },
      {
        id: "op-leaf-exceptions",
        label: "Exception queue list",
        flowId: "recover-kickback",
        surfaceId: "trim-ct-op-exceptions",
      },
      {
        id: "op-leaf-dispatch",
        label: "Worker dispatch panel",
        flowId: "file-claim-packet",
        surfaceId: "trim-ct-op-worker-dispatch",
      },
      {
        id: "op-leaf-audit",
        label: "Audit log panel",
        surfaceId: "trim-ct-op-audit",
      },
      {
        id: "op-leaf-collections",
        label: "Collections queue",
        flowId: "close-paid-invoice",
        surfaceId: "trim-ct-op-collections",
      },
      {
        id: "op-leaf-county-data",
        label: "County data health",
        surfaceId: "trim-ct-op-county-data",
      },
    ],
  },

  // ——————————————————————————————————————————
  // Worker — Core path
  // ——————————————————————————————————————————
  {
    id: "worker-core",
    personaLabel: "Worker",
    pathLabel: "Core path",
    steps: [
      "Browse queue",
      "Preview packet",
      "Accept assignment",
      "Check hearing logistics",
      "Appear / argue",
      "Report outcome",
      "See pay status",
    ],
    leaves: [
      {
        id: "worker-leaf-queue",
        label: "Hearing queue",
        surfaceId: "trim-ct-worker-queue",
      },
      {
        id: "worker-leaf-packet",
        label: "Case packet preview",
        surfaceId: "trim-ct-worker-packet",
      },
      {
        id: "worker-leaf-assignment",
        label: "Accept assignment",
        surfaceId: "trim-ct-worker-assignment",
      },
      {
        id: "worker-leaf-hearing",
        label: "Hearing logistics",
        surfaceId: "trim-ct-worker-hearing",
      },
      {
        id: "worker-leaf-outcome",
        label: "Outcome report",
        surfaceId: "trim-ct-worker-outcome",
      },
      {
        id: "worker-leaf-pay",
        label: "Pay status",
        surfaceId: "trim-ct-worker-pay",
      },
    ],
  },
];

/** Furnishing strips — additive only, no Core flow changes. See trace/furnish.ts for machine twin with surface links. */
export const FURNISHING_STRIPS: string[] = [
  "Days-in-state on protest case",
  "Trust strip (no upfront fee, county-verify link, non-affiliation)",
  "Analysis-not-promise framing on notice (subject to appeal outcome)",
  "Contingency % fact locked after authorize",
  "\u201cTrim invoices after reduction lands\u201d education fact",
  "Exception / stuck reason codes on operator exceptions",
  "Hearing Worker assignment status on Owner case",
  "Honest empties for Operator (no Cases where none exist)",
  "Recurring \u201cannual re-detection enrolled\u201d chip after authorize",
  "Worker evidence preview before accept",
];

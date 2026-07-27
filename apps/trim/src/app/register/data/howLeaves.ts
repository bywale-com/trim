/**
 * Register — How leaves (Function), machine twin of docs/register/FUNCTION-LEAVES.md.
 * Each path is the mechanism sequence that delivers the persona's Core outcome;
 * leaves are the UI-role terminals a DS-I click-through must actually build.
 * `flowId` anchors each leaf back to its behavioral flow map, and `surfaceId`
 * anchors it to the CT region (`src/app/register/trace`) implementing it.
 *
 * Surface IDs must match trim-ct-* entries in register/trace/surfaces.ts.
 * Node naming convention: Module · Modal · Block (see FUNCTION-LEAVES.md).
 */
export type HowLeaf = {
  id: string;
  /** Module · Modal · Block label. */
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
        label: "Portfolio · Cases Module · Parcel list",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-portfolio",
      },
      {
        id: "owner-leaf-notice",
        label: "Portfolio · Case Modal · Notice Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-notice",
      },
      {
        id: "owner-leaf-trust",
        label: "Portfolio · Case Modal · Trust Strip Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-trust",
      },
      {
        id: "owner-leaf-consent",
        label: "Portfolio · Case Modal · Consent Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-consent",
      },
      {
        id: "owner-leaf-sign",
        label: "Portfolio · Case Modal · Authorize Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-upload",
        label: "Portfolio · Case Modal · Upload Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-upload",
      },
      {
        id: "owner-leaf-status",
        label: "Portfolio · Case Modal · Status Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-owner-status",
      },
      {
        id: "owner-leaf-decline",
        label: "Portfolio · Case Modal · Decline Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-decline",
      },
      {
        id: "owner-leaf-reduction",
        label: "Portfolio · Case Modal · Reduction Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-owner-reduction",
      },
      {
        id: "owner-leaf-invoice",
        label: "Portfolio · Case Modal · Invoice Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-owner-invoice",
      },
    ],
  },

  // ——————————————————————————————————————————
  // Owner — Consent sub-path
  // ——————————————————————————————————————————
  {
    id: "owner-consent",
    personaLabel: "Owner",
    pathLabel: "Consent sub-path",
    steps: [
      "Trust bundle before consent",
      "Non-affiliation disclaimer",
      "County-site verify link",
      "Analysis framing",
      "Parcel recap on consent",
    ],
    leaves: [
      {
        id: "owner-leaf-trust-bundle",
        label: "Portfolio · Case Modal · Trust Bundle Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-trust",
      },
      {
        id: "owner-leaf-non-affiliation",
        label: "Portfolio · Case Modal · Non-Affiliation Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-trust",
      },
      {
        id: "owner-leaf-county-verify",
        label: "Portfolio · Case Modal · County Verify Link",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-trust",
      },
      {
        id: "owner-leaf-analysis-framing",
        label: "Portfolio · Case Modal · Analysis Framing Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-owner-notice",
      },
      {
        id: "owner-leaf-parcel-recap",
        label: "Portfolio · Case Modal · Parcel Recap Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-consent",
      },
    ],
  },

  // ——————————————————————————————————————————
  // Owner — Authorize sub-path
  // ——————————————————————————————————————————
  {
    id: "owner-authorize",
    personaLabel: "Owner",
    pathLabel: "Authorize sub-path",
    steps: [
      "Entity identity confirmation",
      "Signer title capture",
      "Fee example",
      "Non-collapsible fee",
      "Contingency lock",
      "Agent appointment",
    ],
    leaves: [
      {
        id: "owner-leaf-entity-identity",
        label: "Portfolio · Case Modal · Entity Identity Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-signer-title",
        label: "Portfolio · Case Modal · Signer Title Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-fee-example",
        label: "Portfolio · Case Modal · Fee Example Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-non-collapsible-fee",
        label: "Portfolio · Case Modal · Non-Collapsible Fee Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-contingency-lock",
        label: "Portfolio · Case Modal · Contingency Lock Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
      {
        id: "owner-leaf-agent-appointment",
        label: "Portfolio · Case Modal · Agent Appointment Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-authorize",
      },
    ],
  },

  // ——————————————————————————————————————————
  // Owner — Upload sub-path
  // ——————————————————————————————————————————
  {
    id: "owner-docs",
    personaLabel: "Owner",
    pathLabel: "Upload sub-path",
    steps: [
      "Upload header context",
      "Income docs upload",
      "Condition docs upload",
    ],
    leaves: [
      {
        id: "owner-leaf-upload-header",
        label: "Portfolio · Case Modal · Upload Header Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-upload",
      },
      {
        id: "owner-leaf-income-docs",
        label: "Portfolio · Case Modal · Income Docs Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-upload",
      },
      {
        id: "owner-leaf-condition-docs",
        label: "Portfolio · Case Modal · Condition Docs Block",
        flowId: "consent-authorize",
        surfaceId: "trim-ct-owner-upload",
      },
    ],
  },

  // ——————————————————————————————————————————
  // Owner — Status sub-path
  // ——————————————————————————————————————————
  {
    id: "owner-status",
    personaLabel: "Owner",
    pathLabel: "Status sub-path",
    steps: [
      "Evidence status",
      "Hearing status",
      "Reduction detail",
      "Denial reason",
    ],
    leaves: [
      {
        id: "owner-leaf-evidence-status",
        label: "Portfolio · Case Modal · Evidence Status Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-owner-status",
      },
      {
        id: "owner-leaf-hearing-status",
        label: "Portfolio · Case Modal · Hearing Status Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-owner-status",
      },
      {
        id: "owner-leaf-reduction-detail",
        label: "Portfolio · Case Modal · Reduction Detail Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-owner-reduction",
      },
      {
        id: "owner-leaf-denial-reason",
        label: "Portfolio · Case Modal · Denial Reason Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-owner-reduction",
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
      "County data health",
    ],
    leaves: [
      {
        id: "op-leaf-portfolio",
        label: "Clients Module · Clients Table · Portfolio Block",
        surfaceId: "trim-ct-op-portfolio",
      },
      {
        id: "op-leaf-jurisdiction",
        label: "Settings Module · Jurisdiction Modal · Licensure Table Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-op-jurisdiction",
      },
      {
        id: "op-leaf-ptc-capacity",
        label: "Settings Module · Jurisdiction Modal · PTC Capacity Block",
        flowId: "activate-notice",
        surfaceId: "trim-ct-op-jurisdiction",
        note: "Named-human PTC count, senior sponsor, max-10 cap — CROSS-CUTTING #3",
      },
      {
        id: "op-leaf-exceptions",
        label: "Work Module · Exceptions Modal · Exception List Block",
        flowId: "recover-exception",
        surfaceId: "trim-ct-op-exceptions",
      },
      {
        id: "op-leaf-exception-action",
        label: "Work Module · Exceptions Modal · Exception Action Block",
        flowId: "recover-exception",
        surfaceId: "trim-ct-op-exceptions",
      },
      {
        id: "op-leaf-dispatch",
        label: "Work Module · Dispatch Modal · Hearing Queue Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-op-worker-dispatch",
      },
      {
        id: "op-leaf-dispatch-assign",
        label: "Work Module · Dispatch Modal · Worker Assign Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-op-worker-dispatch",
      },
      {
        id: "op-leaf-audit",
        label: "Work Module · Audit Modal · Audit Log Block",
        surfaceId: "trim-ct-op-audit",
      },
      {
        id: "op-leaf-collections",
        label: "Work Module · Collections Modal · Invoice Queue Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-op-collections",
      },
      {
        id: "op-leaf-collections-dunning",
        label: "Work Module · Collections Modal · Dunning Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-op-collections",
      },
      {
        id: "op-leaf-county-data",
        label: "Work Module · County Data Modal · Roll Health Block",
        surfaceId: "trim-ct-op-county-data",
      },
      {
        id: "op-leaf-county-freshness",
        label: "Work Module · County Data Modal · Freshness Badges Block",
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
        label: "Queue Module · Queue List · Available Hearings Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-queue",
      },
      {
        id: "worker-leaf-queue-filter",
        label: "Queue Module · Queue List · County Filter Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-queue",
      },
      {
        id: "worker-leaf-packet",
        label: "Queue Module · Packet Modal · Evidence Summary Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-packet",
      },
      {
        id: "worker-leaf-packet-equity",
        label: "Queue Module · Packet Modal · Equity Grid Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-packet",
      },
      {
        id: "worker-leaf-packet-income",
        label: "Queue Module · Packet Modal · Income Approach Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-packet",
        note: "Present only when income approach was built from Owner-uploaded docs",
      },
      {
        id: "worker-leaf-packet-authority",
        label: "Queue Module · Packet Modal · Authority Proof Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-packet",
        note: "Form 50-162 or equivalent; licensed PTC name and county registration",
      },
      {
        id: "worker-leaf-assignment",
        label: "Queue Module · Assignment Modal · Accept Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-assignment",
      },
      {
        id: "worker-leaf-hearing",
        label: "Assignments Module · Hearing Modal · Logistics Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-hearing",
      },
      {
        id: "worker-leaf-hearing-checklist",
        label: "Assignments Module · Hearing Modal · Checklist Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-hearing",
      },
      {
        id: "worker-leaf-outcome",
        label: "Assignments Module · Outcome Modal · Report Block",
        flowId: "evidence-hearing",
        surfaceId: "trim-ct-worker-outcome",
      },
      {
        id: "worker-leaf-outcome-reducer",
        label: "Assignments Module · Outcome Modal · Reduction Detail Block",
        flowId: "reduce-invoice",
        surfaceId: "trim-ct-worker-outcome",
      },
      {
        id: "worker-leaf-pay",
        label: "Assignments Module · Pay Modal · Pay Status Block",
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
  '"Trim invoices after reduction lands" education fact',
  "Exception / stuck reason codes on Operator exceptions",
  "Hearing Worker assignment status visible on Owner case",
  "Honest empties for Operator (no Cases where none exist)",
  'Recurring "annual re-detection enrolled" chip after authorize',
  "Worker evidence preview before accept",
  "PTC capacity column in jurisdiction table",
  "Fee cap column in jurisdiction table",
  "Collection dunning cycle status at a glance",
  "Roll freshness badge per county",
  "Hearing scheduled date / board / venue on Owner case",
];

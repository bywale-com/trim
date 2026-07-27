/**
 * Register — Outcomes (Function), machine twin of docs/register/WORLD.md.
 * Core lattice: Owner core → so that Operator / Worker can protest under
 * authority and close the fee split; Operator core → so that Owner can be
 * served and recover without illegal solicitation and without silent stuck protests.
 *
 * Persona-emergence law: a seat exists only if omitting it breaks a
 * value-chain step (Tally Worker test). Owner, Operator, and Worker are
 * value-chain seats. Agent is a presentation feature scoped to each seat's
 * UI verbs, not its own Register desk. See docs/register/WORLD.md.
 */
export type OutcomePersonaId = "owner" | "operator" | "worker";

export type Outcome = {
  id: string;
  label: string;
  statement: string;
  core?: boolean;
  /** Opens the How tree for this outcome inside Personas. */
  howGraphId?: string;
  /** CT surface ids — join key into `register/trace/surfaces.ts`. */
  surfaceIds?: string[];
};

export type OutcomePersona = {
  id: OutcomePersonaId;
  label: string;
  soThat: string;
  outcomes: Outcome[];
};

export const OUTCOME_PERSONAS: OutcomePersona[] = [
  {
    id: "owner",
    label: "Owner",
    soThat: "so that Operator / automation / Worker can protest under authority and close the fee split",
    outcomes: [
      {
        id: "owner-core",
        label: "Core",
        core: true,
        howGraphId: "owner-core",
        statement:
          "As the Owner, I can open a notice that already states my parcel's assessed value, the evidence that supports a lower value, and an estimated excess — consent to the agent-led protest model, sign one Appointment of Agent at a jurisdiction-aware contingency %, optionally upload income docs, and see appeal status, reduction, and invoice as facts — so that my over-assessment is corrected without upfront payment and without managing the process myself.",
        surfaceIds: [
          "trim-ct-owner-notice",
          "trim-ct-owner-consent",
          "trim-ct-owner-authorize",
          "trim-ct-owner-upload",
          "trim-ct-owner-status",
          "trim-ct-owner-reduction",
          "trim-ct-owner-invoice",
        ],
      },
      {
        id: "owner-consent",
        label: "See / understand / with it",
        howGraphId: "owner-consent",
        statement:
          "As the Owner, I can tick three short acknowledgments before contingency detail — so that activation is stated consent, not identity proof.",
        surfaceIds: ["trim-ct-owner-consent"],
      },
      {
        id: "owner-authorize",
        label: "Agent authorization",
        howGraphId: "owner-authorize",
        statement:
          "As the Owner, I can sign the one-time Appointment of Agent locking contingency % (jurisdiction-aware cap) — so that Trim can file and represent without repeated engagement.",
        surfaceIds: ["trim-ct-owner-authorize"],
      },
      {
        id: "owner-docs",
        label: "Upload docs",
        howGraphId: "owner-docs",
        statement:
          "As the Owner, I can optionally upload rent roll / P&L / condition evidence after authorize — so that the appeal packet is as strong as possible while upload is never a gate.",
        surfaceIds: ["trim-ct-owner-upload"],
      },
      {
        id: "owner-status",
        label: "Status facts",
        howGraphId: "owner-status",
        statement:
          "As the Owner, I can see evidence prep / informal / hearing queued / board outcome / reduction / invoice as plain facts — so that I am never managing a protest grind dashboard.",
        surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction", "trim-ct-owner-invoice"],
      },
      {
        id: "owner-trust",
        label: "Trust proof",
        howGraphId: "owner-trust",
        statement:
          "As the Owner, I can see parcel ID + county + county-site verification link + no-upfront-fee statement + non-affiliation disclaimer — so that the notice survives scam skepticism and solicitation ethics.",
        surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"],
      },
      {
        id: "owner-decline",
        label: "Decline",
        howGraphId: "owner-decline",
        statement:
          "As the Owner, I can walk away before authorization with a single control — so that declining is never a form or a call.",
        surfaceIds: ["trim-ct-owner-decline"],
      },
    ],
  },
  {
    id: "operator",
    label: "Operator",
    soThat: "so that Owner can be served and recover without illegal solicitation and without silent stuck protests",
    outcomes: [
      {
        id: "operator-core",
        label: "Core",
        core: true,
        howGraphId: "operator-core",
        statement:
          "As the Operator, I can maintain per-jurisdiction licensure gates (TX PTC capacity, fee caps, appeal windows) across my book, work exceptions and stuck protests, dispatch Workers to hearing-queued cases, and audit all actions under the Appointment of Agent — so that Owner accounts are never served into illegal jurisdictions and no protest gets permanently stuck.",
        surfaceIds: [
          "trim-ct-op-jurisdiction",
          "trim-ct-op-exceptions",
          "trim-ct-op-audit",
          "trim-ct-op-portfolio",
          "trim-ct-op-worker-dispatch",
        ],
      },
      {
        id: "operator-portfolio",
        label: "Portfolio",
        howGraphId: "operator-portfolio",
        statement:
          "As the Operator, I can see every Owner account and protest case in my book by admission state — so that I know who's stuck and who's clean without opening each case.",
        surfaceIds: ["trim-ct-op-portfolio"],
      },
      {
        id: "operator-jurisdiction",
        label: "Jurisdiction gate",
        howGraphId: "operator-jurisdiction",
        statement:
          "As the Operator, I can see where Trim is licensed to operate (TX PTC capacity, per-state status, fee cap, appeal window) — so that outreach and filing are blocked where unlawful.",
        surfaceIds: ["trim-ct-op-jurisdiction"],
      },
      {
        id: "operator-exceptions",
        label: "Exceptions",
        howGraphId: "operator-exceptions",
        statement:
          "As the Operator, I can resolve stuck and blocked protest cases — so that automation isn't permanently stalled.",
        surfaceIds: ["trim-ct-op-exceptions"],
      },
      {
        id: "operator-audit",
        label: "Audit",
        howGraphId: "operator-audit",
        statement:
          "As the Operator, I can see the full action trail under the Appointment of Agent for any protest case — so that I can account for automation's actions without re-deriving them.",
        surfaceIds: ["trim-ct-op-audit"],
      },
      {
        id: "operator-dispatch",
        label: "Worker dispatch",
        howGraphId: "operator-dispatch",
        statement:
          "As the Operator, I can see hearing-queued cases and the Worker roster by county/board — so that formal hearings never stall for lack of an available advocate.",
        surfaceIds: ["trim-ct-op-worker-dispatch"],
      },
      {
        id: "operator-collections",
        label: "Collections",
        howGraphId: "operator-collections",
        statement:
          "As the Operator, I can see invoiced-not-collected cases and manage dunning — so that the contingency cut is collected after the Owner receives the assessment reduction.",
        surfaceIds: ["trim-ct-op-collections"],
      },
      {
        id: "operator-county-data",
        label: "County data health",
        howGraphId: "operator-county-data",
        statement:
          "As the Operator, I can monitor roll import status, CAMA freshness, and comp coverage per county — so that detection quality is visible and stale data doesn't produce indefensible notices.",
        surfaceIds: ["trim-ct-op-county-data"],
      },
    ],
  },
  {
    id: "worker",
    label: "Worker",
    soThat: "so that formal hearing appearances are covered and Owner gets a board outcome",
    outcomes: [
      {
        id: "worker-core",
        label: "Core",
        core: true,
        howGraphId: "worker-core",
        statement:
          "As the Worker, I can browse available hearing assignments in my county coverage, preview the prepared case packet, accept the assignment, attend the hearing (in person or remote) using the case packet and checklist, report the board outcome, and see my per-appearance pay status — so that formal-level protests complete and Operator can close the hearing unit of work.",
        surfaceIds: [
          "trim-ct-worker-queue",
          "trim-ct-worker-packet",
          "trim-ct-worker-assignment",
          "trim-ct-worker-hearing",
          "trim-ct-worker-outcome",
          "trim-ct-worker-pay",
        ],
      },
      {
        id: "worker-pickup",
        label: "Pick up assignment",
        howGraphId: "worker-pickup",
        statement:
          "As the Worker, I can browse the hearing queue and accept an assignment — so that I'm locked to the case before preparing.",
        surfaceIds: ["trim-ct-worker-queue", "trim-ct-worker-packet", "trim-ct-worker-assignment"],
      },
      {
        id: "worker-argue",
        label: "Argue hearing",
        howGraphId: "worker-argue",
        statement:
          "As the Worker, I can use the prepared packet and hearing logistics to appear and argue — so that I never arrive under-prepared.",
        surfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet"],
      },
      {
        id: "worker-report",
        label: "Report outcome",
        howGraphId: "worker-report",
        statement:
          "As the Worker, I can submit the board outcome immediately after the hearing — so that Operator can close the hearing state and Owner sees the result promptly.",
        surfaceIds: ["trim-ct-worker-outcome"],
      },
      {
        id: "worker-pay",
        label: "Pay status",
        howGraphId: "worker-pay",
        statement:
          "As the Worker, I can see my per-appearance pay status — so that I know when each unit of work pays out.",
        surfaceIds: ["trim-ct-worker-pay"],
      },
    ],
  },
];

export const OUTCOMES_KILLED = [
  "Sales discovery call as Core",
  "Escrow fund-hold (money never moves through Trim)",
  "Owner browsing other entities' assessments",
  "Agent as its own Register persona desk",
  "Worker as Operator — Worker sees packet scope only",
  "Licensed agent-of-record as a product persona (compliance fact, not a seat)",
];

export const FORCED_SHARED_OBJECTS = [
  "Notice with parcel proof (ID, county, assessed $X, evidence $Y, ≈$Z excess)",
  "Analysis-not-promise framing (subject to appeal outcome)",
  "Non-affiliation disclaimer (not the county / appraisal district / ARB)",
  "County-site verification link",
  "Consent three ticks (see it / understand it / with it)",
  "Appointment of Agent + contingency % locked",
  "Optional income docs (rent roll / P&L)",
  "Protest states including hearing_queued / hearing_active / hearing_reported",
  "Reduction fact (measured savings = reduction × millage)",
  "Invoice fact for contingency cut",
  "Jurisdiction blocked state (Operator)",
  "Worker bounded packet scope — no Owner billing visibility",
];

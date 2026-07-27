/**
 * Trim World — machine twin for docs/register/WORLD.md admission matrix.
 * Persona views MUST call admits() — never hand-roll visibility.
 */
export type TrimPersona = "owner" | "operator" | "worker";

export type ProtestState =
  | "detected"
  | "blocked_jurisdiction"
  | "notified"
  | "consented"
  | "authorized"
  | "evidence_prep"
  | "informal"
  | "hearing_queued"
  | "hearing_active"
  | "hearing_reported"
  | "reduced"
  | "denied"
  | "invoiced"
  | "collected"
  | "declined"
  | "recurring";

const MATRIX: Record<ProtestState, readonly TrimPersona[]> = {
  detected: ["operator"],
  blocked_jurisdiction: ["operator"],
  notified: ["owner", "operator"],
  consented: ["owner", "operator"],
  authorized: ["owner", "operator"],
  evidence_prep: ["owner", "operator"],
  informal: ["owner", "operator"],
  hearing_queued: ["owner", "operator", "worker"],
  hearing_active: ["owner", "operator", "worker"],
  hearing_reported: ["owner", "operator", "worker"],
  reduced: ["owner", "operator"],
  denied: ["owner", "operator"],
  invoiced: ["owner", "operator"],
  collected: ["owner", "operator"],
  declined: ["owner", "operator"],
  recurring: ["owner", "operator"],
};

/** States where the persona has primary actionable work (T), not merely visibility (V). */
const ACTIONABLE: Record<ProtestState, readonly TrimPersona[]> = {
  detected: ["operator"],
  blocked_jurisdiction: ["operator"],
  notified: ["owner"],
  consented: ["owner"],
  authorized: ["owner"],
  evidence_prep: ["operator"],
  informal: ["operator"],
  hearing_queued: ["worker"],
  hearing_active: ["worker"],
  hearing_reported: ["operator"],
  reduced: ["owner"],
  denied: ["owner"],
  invoiced: ["owner"],
  collected: ["operator"],
  declined: ["owner"],
  recurring: ["operator"],
};

export function admits(persona: TrimPersona, state: ProtestState): boolean {
  return MATRIX[state]?.includes(persona) ?? false;
}

export function canAct(persona: TrimPersona, state: ProtestState): boolean {
  return admits(persona, state) && (ACTIONABLE[state]?.includes(persona) ?? false);
}

export const PROTEST_SPINE: ProtestState[] = [
  "detected",
  "blocked_jurisdiction",
  "notified",
  "consented",
  "authorized",
  "evidence_prep",
  "informal",
  "hearing_queued",
  "hearing_active",
  "hearing_reported",
  "reduced",
  "denied",
  "invoiced",
  "collected",
  "declined",
  "recurring",
];

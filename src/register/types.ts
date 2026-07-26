/**
 * Shared Register types. These mirror the typed-artifact contracts named in the
 * Om Coda Register manual (Persona sit cards, SmeItem, HowNode/HowUiRef,
 * PersonaObstacle, PersonaFurnishItem, SurfaceBoundary / BUSINESS_SURFACE_STATUS).
 */

export type PersonaKind = 'business-client' | 'operator' | 'agent-of-record' | 'worker'

/**
 * Pass 1 — World: a persona "sit card". Fields follow the documented sit-card shape
 * (Register manual, World pass): why exist · served how · purpose (whose so-that) ·
 * primary object in view · admit iff · never see · natural needs (V1).
 */
export interface PersonaSit {
  id: PersonaKind
  name: string
  oneLiner: string
  /** Why exist — what breaks if this persona is removed (emergence law). */
  whyExist: string
  /** Served how — what they receive from the world. */
  servedHow: string
  /** Purpose they serve — whose so-that they fulfil. */
  purpose: string
  /** Primary object in view — what they mostly see. */
  primaryObjectInView: string
  /** Admit iff — when that object enters their world. */
  admitIff: string
  /** Never see — explicit negative space. */
  neverSee: string[]
  /** Natural needs (V1) — only what must exist for them to exist and be served. */
  naturalNeeds: string[]
}

/** Pass 1 — World: a primary object and the states it moves through. */
export interface PrimaryObject {
  id: string
  name: string
  summary: string
  states: string[]
  source?: string
}

/**
 * Pass 1 — World: one row of the admission matrix. Cells use the documented three
 * symbols: V = in view · '—' = not in view · T = owns transition into this state / action.
 */
export type AdmissionSymbol = 'V' | '—' | 'T'
export interface AdmissionCell {
  value: AdmissionSymbol
  /** Optional scoping note, e.g. "own account only". */
  note?: string
}
export interface AdmissionRow {
  /** A minimal state of the primary object. */
  state: string
  meaning: string
  cells: Record<PersonaKind, AdmissionCell>
}

/** Pass 2 — SME: one sourced consideration inside a domain lane. */
export interface SmeConsideration {
  id: string
  question: string
  finding: string
  status: 'verified' | 'needs-verification' | 'needs-design'
  source: string
  /** How PM/CTO must translate this fact downstream. */
  reconcile?: string
}

/** Pass 2 — SME: a non-overlapping domain-lane seat. */
export interface SmeSeat {
  id: string
  role: string
  lane: string
  considerations: SmeConsideration[]
}

/** Pass 3 — Personas (Function): a HowUiRef leaf. */
export interface HowUiRef {
  kind: 'Module' | 'Modal' | 'Block' | 'Submodal'
  clickPath: string
}

/** Pass 3 — Personas (Function): a node in the How Analysis tree. */
export interface HowNode {
  id: string
  /** User-visible "how" question or answer phrase. */
  text: string
  children?: HowNode[]
  /** Present only on true leaves. */
  uiRef?: HowUiRef
}

export interface PersonaFunction {
  persona: PersonaKind
  molecularOutcome: string
  how: HowNode
}

/** Pass 4 — Enrichment: a "Can't" (adjacent capability gap). */
export interface PersonaObstacle {
  id: string
  persona: PersonaKind
  rank: number
  cant: string
  focusHolonId: string
}

/** Pass 5 — Furnish: a supporting "able to" UI ability. */
export interface PersonaFurnishItem {
  id: string
  persona: PersonaKind
  ableTo: string
  furnishFocusId: string
}

/** Pass 6 — CT Plant: a planted surface catalog entry. */
export type SurfaceStatus = 'planted' | 'not_done'
export interface CtSurface {
  id: string
  label: string
  region: string
  status: SurfaceStatus
}

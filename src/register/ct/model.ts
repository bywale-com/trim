/**
 * Pass 6 — CT Plant model. A functional (Register-gray) click-through of Trim's core
 * value chain, expressed as a pure state machine so the choreography can be unit-tested:
 *
 *   detect → serve → authorize → file appeal → (informal → formal hearing, Worker seat)
 *          → reduction lands → invoice the cut → recurs next cycle
 *
 * Money never moves through Trim: the "recovery" is a smaller county bill. The fee is an
 * invoice against measured savings (assessment before/after × rate) — dossier §4.
 */

export type ParcelState =
  | 'detected'
  | 'served'
  | 'authorized'
  | 'in_appeal'
  | 'resolved'
  | 'recurring'

export type AppealStage =
  | 'none'
  | 'informal_review'
  | 'formal_hearing'
  | 'granted'
  | 'partial'
  | 'denied'

export type HearingState = 'none' | 'available' | 'picked_up' | 'active' | 'done'

export type InvoiceState = 'none' | 'issued' | 'collected'

export interface Parcel {
  id: string
  address: string
  county: string
  state: string
  propertyClass: 'commercial' | 'multifamily'
  /** County assessed value ($). */
  assessed: number
  /** Market evidence value Trim's detection supports ($). */
  evidence: number
  /** Local effective tax rate (millage as a decimal). */
  rate: number
  /** Contingency fraction of first-year savings Trim charges. */
  contingency: number
  status: ParcelState
  appeal: AppealStage
  hearing: HearingState
  /** Worker who picked up the hearing, if any. */
  worker?: string
  /** Reduction in assessed value granted by the board ($). Set on resolution. */
  reduction: number
  invoice: InvoiceState
  /** Immutable audit trail of state changes (CTO/Wiring territory, surfaced read-only). */
  audit: AuditEntry[]
}

export interface AuditEntry {
  at: number
  actor: 'operator' | 'owner' | 'worker' | 'system'
  event: string
}

export interface CtState {
  parcels: Parcel[]
}

/** Estimated annual over-payment before appeal: excess assessed value × rate. */
export function estimatedExcessTax(p: Pick<Parcel, 'assessed' | 'evidence' | 'rate'>): number {
  return Math.max(0, p.assessed - p.evidence) * p.rate
}

/** Measured annual savings once a reduction is granted: reduction × rate. */
export function measuredSavings(p: Pick<Parcel, 'reduction' | 'rate'>): number {
  return Math.max(0, p.reduction) * p.rate
}

/** Trim's fee: contingency slice of measured first-year savings. */
export function trimFee(p: Pick<Parcel, 'reduction' | 'rate' | 'contingency'>): number {
  return measuredSavings(p) * p.contingency
}

let auditClock = 0
function audit(p: Parcel, actor: AuditEntry['actor'], event: string): Parcel {
  return { ...p, audit: [...p.audit, { at: ++auditClock, actor, event }] }
}

export const initialParcels: Parcel[] = [
  {
    id: 'PARCEL-TX-4412',
    address: '1420 Lamar Street',
    county: 'Travis',
    state: 'TX',
    propertyClass: 'commercial',
    assessed: 2_800_000,
    evidence: 2_300_000,
    rate: 0.021,
    contingency: 0.35,
    status: 'detected',
    appeal: 'none',
    hearing: 'none',
    reduction: 0,
    invoice: 'none',
    audit: [{ at: 0, actor: 'system', event: 'Detected from public assessment roll' }],
  },
  {
    id: 'PARCEL-TX-7781',
    address: '905 East 6th, Units A–D',
    county: 'Travis',
    state: 'TX',
    propertyClass: 'multifamily',
    assessed: 1_650_000,
    evidence: 1_420_000,
    rate: 0.0198,
    contingency: 0.35,
    status: 'detected',
    appeal: 'none',
    hearing: 'none',
    reduction: 0,
    invoice: 'none',
    audit: [{ at: 0, actor: 'system', event: 'Detected from public assessment roll' }],
  },
  {
    id: 'PARCEL-TX-3120',
    address: '77 Congress Ave, Suite 200',
    county: 'Travis',
    state: 'TX',
    propertyClass: 'commercial',
    assessed: 4_100_000,
    evidence: 3_450_000,
    rate: 0.0205,
    contingency: 0.35,
    status: 'detected',
    appeal: 'none',
    hearing: 'none',
    reduction: 0,
    invoice: 'none',
    audit: [{ at: 0, actor: 'system', event: 'Detected from public assessment roll' }],
  },
]

export type CtAction =
  | { type: 'SERVE'; parcelId: string }
  | { type: 'AUTHORIZE'; parcelId: string }
  | { type: 'FILE_APPEAL'; parcelId: string }
  | { type: 'ADVANCE_TO_HEARING'; parcelId: string }
  | { type: 'PICKUP_HEARING'; parcelId: string; worker: string }
  | { type: 'START_HEARING'; parcelId: string }
  | { type: 'REPORT_RESULT'; parcelId: string; outcome: 'granted' | 'partial' | 'denied' }
  | { type: 'ISSUE_INVOICE'; parcelId: string }
  | { type: 'COLLECT_INVOICE'; parcelId: string }
  | { type: 'RESET' }

/** Which action, if any, is the single legal "next step" for a parcel in the happy path. */
export function nextStep(p: Parcel): CtAction['type'] | null {
  if (p.status === 'detected') return 'SERVE'
  if (p.status === 'served') return 'AUTHORIZE'
  if (p.status === 'authorized') return 'FILE_APPEAL'
  if (p.status === 'in_appeal' && p.appeal === 'informal_review') return 'ADVANCE_TO_HEARING'
  if (p.status === 'in_appeal' && p.appeal === 'formal_hearing') {
    if (p.hearing === 'available') return 'PICKUP_HEARING'
    if (p.hearing === 'picked_up') return 'START_HEARING'
    if (p.hearing === 'active') return 'REPORT_RESULT'
  }
  if (p.status === 'resolved' && (p.appeal === 'granted' || p.appeal === 'partial')) {
    if (p.invoice === 'none') return 'ISSUE_INVOICE'
    if (p.invoice === 'issued') return 'COLLECT_INVOICE'
  }
  return null
}

function updateParcel(state: CtState, id: string, fn: (p: Parcel) => Parcel): CtState {
  return { parcels: state.parcels.map((p) => (p.id === id ? fn(p) : p)) }
}

export function ctReducer(state: CtState, action: CtAction): CtState {
  switch (action.type) {
    case 'RESET':
      return { parcels: structuredClone(initialParcels) }

    case 'SERVE':
      return updateParcel(state, action.parcelId, (p) =>
        p.status !== 'detected'
          ? p
          : audit({ ...p, status: 'served' }, 'operator', 'Served compliant analysis notice (no promised result)'),
      )

    case 'AUTHORIZE':
      return updateParcel(state, action.parcelId, (p) =>
        p.status !== 'served'
          ? p
          : audit({ ...p, status: 'authorized' }, 'owner', 'Signed Appointment of Agent + payment on file'),
      )

    case 'FILE_APPEAL':
      return updateParcel(state, action.parcelId, (p) =>
        p.status !== 'authorized'
          ? p
          : audit(
              { ...p, status: 'in_appeal', appeal: 'informal_review' },
              'operator',
              'Filed appeal — informal review opened',
            ),
      )

    case 'ADVANCE_TO_HEARING':
      return updateParcel(state, action.parcelId, (p) =>
        p.status === 'in_appeal' && p.appeal === 'informal_review'
          ? audit(
              { ...p, appeal: 'formal_hearing', hearing: 'available' },
              'operator',
              'Escalated to formal board hearing — packet posted to Worker board',
            )
          : p,
      )

    case 'PICKUP_HEARING':
      return updateParcel(state, action.parcelId, (p) =>
        p.appeal === 'formal_hearing' && p.hearing === 'available'
          ? audit(
              { ...p, hearing: 'picked_up', worker: action.worker },
              'worker',
              `Worker ${action.worker} picked up hearing packet`,
            )
          : p,
      )

    case 'START_HEARING':
      return updateParcel(state, action.parcelId, (p) =>
        p.hearing === 'picked_up'
          ? audit({ ...p, hearing: 'active' }, 'worker', 'Hearing argued before the board')
          : p,
      )

    case 'REPORT_RESULT': {
      return updateParcel(state, action.parcelId, (p) => {
        if (p.hearing !== 'active') return p
        const fullReduction = Math.max(0, p.assessed - p.evidence)
        const reduction =
          action.outcome === 'granted'
            ? fullReduction
            : action.outcome === 'partial'
              ? Math.round(fullReduction * 0.6)
              : 0
        const resolvedAppeal: AppealStage = action.outcome
        const status: ParcelState = 'resolved'
        return audit(
          { ...p, hearing: 'done', appeal: resolvedAppeal, status, reduction },
          'worker',
          `Board decision: ${action.outcome} — reduction $${reduction.toLocaleString()}`,
        )
      })
    }

    case 'ISSUE_INVOICE':
      return updateParcel(state, action.parcelId, (p) =>
        p.status === 'resolved' && (p.appeal === 'granted' || p.appeal === 'partial') && p.invoice === 'none'
          ? audit(
              { ...p, invoice: 'issued' },
              'operator',
              `Invoiced $${Math.round(trimFee(p)).toLocaleString()} against measured savings`,
            )
          : p,
      )

    case 'COLLECT_INVOICE':
      return updateParcel(state, action.parcelId, (p) =>
        p.invoice === 'issued'
          ? audit(
              { ...p, invoice: 'collected', status: 'recurring' },
              'system',
              'Fee collected — authorization stands, detection re-fires next cycle',
            )
          : p,
      )

    default:
      return state
  }
}

export function initialCtState(): CtState {
  return { parcels: structuredClone(initialParcels) }
}

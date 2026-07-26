import { describe, expect, it } from 'vitest'
import {
  ctReducer,
  estimatedExcessTax,
  initialCtState,
  measuredSavings,
  nextStep,
  trimFee,
  type CtAction,
  type CtState,
} from './model'

function run(actions: CtAction[], start: CtState = initialCtState()): CtState {
  return actions.reduce(ctReducer, start)
}

const PID = 'PARCEL-TX-4412'

describe('detection math', () => {
  it('estimates annual excess tax as excess assessed value × rate', () => {
    const p = { assessed: 2_800_000, evidence: 2_300_000, rate: 0.021 }
    expect(estimatedExcessTax(p)).toBeCloseTo(10_500, 5)
  })

  it('never reports negative excess when evidence exceeds assessed', () => {
    expect(estimatedExcessTax({ assessed: 100, evidence: 200, rate: 0.02 })).toBe(0)
  })
})

describe('nextStep — the single legal next action in the happy path', () => {
  it('starts at SERVE for a freshly detected parcel', () => {
    const state = initialCtState()
    expect(nextStep(state.parcels[0])).toBe('SERVE')
  })
})

describe('core chain end to end (granted)', () => {
  it('walks detect → serve → authorize → appeal → hearing → reduction → invoice → recurring', () => {
    const state = run([
      { type: 'SERVE', parcelId: PID },
      { type: 'AUTHORIZE', parcelId: PID },
      { type: 'FILE_APPEAL', parcelId: PID },
      { type: 'ADVANCE_TO_HEARING', parcelId: PID },
      { type: 'PICKUP_HEARING', parcelId: PID, worker: 'Dana R.' },
      { type: 'START_HEARING', parcelId: PID },
      { type: 'REPORT_RESULT', parcelId: PID, outcome: 'granted' },
      { type: 'ISSUE_INVOICE', parcelId: PID },
      { type: 'COLLECT_INVOICE', parcelId: PID },
    ])
    const p = state.parcels.find((x) => x.id === PID)!

    expect(p.status).toBe('recurring')
    expect(p.appeal).toBe('granted')
    expect(p.hearing).toBe('done')
    expect(p.invoice).toBe('collected')
    // full reduction = assessed - evidence
    expect(p.reduction).toBe(500_000)
    // measured savings = reduction × rate
    expect(measuredSavings(p)).toBeCloseTo(10_500, 5)
    // fee = savings × contingency (0.35)
    expect(trimFee(p)).toBeCloseTo(3_675, 5)
    // audit trail recorded every transition
    expect(p.audit.length).toBeGreaterThanOrEqual(9)
  })
})

describe('partial and denied outcomes', () => {
  const toHearing: CtAction[] = [
    { type: 'SERVE', parcelId: PID },
    { type: 'AUTHORIZE', parcelId: PID },
    { type: 'FILE_APPEAL', parcelId: PID },
    { type: 'ADVANCE_TO_HEARING', parcelId: PID },
    { type: 'PICKUP_HEARING', parcelId: PID, worker: 'Dana R.' },
    { type: 'START_HEARING', parcelId: PID },
  ]

  it('partial grants 60% of the requested reduction and is still invoiceable', () => {
    const state = run([...toHearing, { type: 'REPORT_RESULT', parcelId: PID, outcome: 'partial' }])
    const p = state.parcels.find((x) => x.id === PID)!
    expect(p.appeal).toBe('partial')
    expect(p.reduction).toBe(300_000)
    expect(nextStep(p)).toBe('ISSUE_INVOICE')
  })

  it('denied yields zero reduction and no invoice path', () => {
    const state = run([...toHearing, { type: 'REPORT_RESULT', parcelId: PID, outcome: 'denied' }])
    const p = state.parcels.find((x) => x.id === PID)!
    expect(p.appeal).toBe('denied')
    expect(p.reduction).toBe(0)
    expect(trimFee(p)).toBe(0)
    expect(nextStep(p)).toBeNull()
  })
})

describe('guards — illegal transitions are no-ops', () => {
  it('cannot authorize a parcel that has not been served', () => {
    const state = run([{ type: 'AUTHORIZE', parcelId: PID }])
    expect(state.parcels.find((x) => x.id === PID)!.status).toBe('detected')
  })

  it('cannot invoice before a reduction is granted', () => {
    const state = run([
      { type: 'SERVE', parcelId: PID },
      { type: 'AUTHORIZE', parcelId: PID },
      { type: 'ISSUE_INVOICE', parcelId: PID },
    ])
    expect(state.parcels.find((x) => x.id === PID)!.invoice).toBe('none')
  })
})

describe('RESET', () => {
  it('restores the initial detected parcels', () => {
    const dirty = run([{ type: 'SERVE', parcelId: PID }])
    const reset = ctReducer(dirty, { type: 'RESET' })
    expect(reset.parcels.every((p) => p.status === 'detected')).toBe(true)
  })
})

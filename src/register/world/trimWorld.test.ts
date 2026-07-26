import { describe, expect, it } from 'vitest'
import { admits, ownsTransition, workerAvailableAdmits } from './trimWorld'

describe('admits — World admission matrix (V/T only)', () => {
  it('admits only the Operator to a detected (pre-contact) parcel', () => {
    expect(admits('operator', 'detected')).toBe(true)
    expect(admits('business-client', 'detected')).toBe(false)
    expect(admits('worker', 'detected')).toBe(false)
  })

  it('admits the Owner once the parcel is served', () => {
    expect(admits('business-client', 'served')).toBe(true)
    expect(admits('worker', 'served')).toBe(false)
  })

  it('admits the Worker only from in_appeal onward', () => {
    expect(admits('worker', 'authorized')).toBe(false)
    expect(admits('worker', 'in_appeal')).toBe(true)
    expect(admits('worker', 'resolved')).toBe(true)
  })
})

describe('ownsTransition', () => {
  it('Owner owns the authorized transition (signs)', () => {
    expect(ownsTransition('business-client', 'authorized')).toBe(true)
    expect(ownsTransition('operator', 'authorized')).toBe(false)
  })

  it('Operator owns detection and serving', () => {
    expect(ownsTransition('operator', 'detected')).toBe(true)
    expect(ownsTransition('operator', 'served')).toBe(true)
  })
})

describe('workerAvailableAdmits — decision chrome, not a gate', () => {
  it('is available only when in_appeal and the hearing is unclaimed', () => {
    expect(workerAvailableAdmits('in_appeal', true)).toBe(true)
    expect(workerAvailableAdmits('in_appeal', false)).toBe(false)
    expect(workerAvailableAdmits('served', true)).toBe(false)
  })
})

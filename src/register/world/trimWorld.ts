/**
 * trimWorld.ts — machine-readable twin of WORLD.md (World pass).
 * Mirrors the documented campaignWorld.ts pattern: typed admission helpers the CT plant
 * and runtime can call so persona UI never shows an object the matrix marks '—'.
 */

export type ParcelState =
  | 'detected'
  | 'served'
  | 'authorized'
  | 'in_appeal'
  | 'resolved'
  | 'recurring'

export type PersonaSeat = 'operator' | 'business-client' | 'agent-of-record' | 'worker'

/** Admit iff — matrix cell is V or T for (persona, state). */
export function admits(persona: PersonaSeat, state: ParcelState): boolean {
  const matrix: Record<ParcelState, PersonaSeat[]> = {
    detected: ['operator'],
    served: ['operator', 'business-client'],
    authorized: ['operator', 'business-client', 'agent-of-record'],
    in_appeal: ['operator', 'business-client', 'agent-of-record', 'worker'],
    resolved: ['operator', 'business-client', 'agent-of-record', 'worker'],
    recurring: ['operator', 'business-client'],
  }
  return matrix[state]?.includes(persona) ?? false
}

/** Owns the transition into this state / the named action. */
export function ownsTransition(persona: PersonaSeat, state: ParcelState): boolean {
  const owners: Record<ParcelState, PersonaSeat[]> = {
    detected: ['operator'],
    served: ['operator'],
    authorized: ['business-client'],
    in_appeal: ['operator', 'worker'],
    resolved: ['operator', 'worker'],
    recurring: ['operator'],
  }
  return owners[state]?.includes(persona) ?? false
}

/**
 * Worker Available = formal hearing ∧ unclaimed — decision chrome, NOT a gate.
 * Never advertise the admission condition (formal_hearing) as a Worker decision label.
 */
export function workerAvailableAdmits(state: ParcelState, hearingUnclaimed: boolean): boolean {
  return state === 'in_appeal' && hearingUnclaimed
}

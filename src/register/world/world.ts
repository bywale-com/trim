import type { AdmissionRow, PersonaSit, PrimaryObject } from '../types'

/**
 * Pass 1 — World (typed twin of WORLD.md).
 * The physics of Trim: who exists, why, what objects move through which states, and who
 * may see them. Derived from the Trim dossier §8 (value chain & persona test). Kept to the
 * smallest set of personas/objects/states that can sustain the product (World < 2 pages).
 */

export const worldSentence =
  'Trim detects property over-assessment from public record before any relationship exists, ' +
  'serves the account with a verifiable analysis, takes one authorization, runs the appeal, ' +
  'and invoices a cut of the measured savings — every cycle, inside a standing account.'

export const personas: PersonaSit[] = [
  {
    id: 'business-client',
    name: 'Owner',
    oneLiner: 'The owning entity behind a portfolio of parcels. One account per business.',
    whyExist:
      'The chain starts and ends with the party who owes the tax and signs the authorization. ' +
      'Remove them and there is no authority to file and no one to invoice.',
    servedHow:
      'Receives a served, verifiable analysis of their own parcels and a one-signature path to authorize the appeal.',
    purpose:
      'Fulfils their own so-that: a lower bill — so that the Operator (and Agent-of-Record) may file and pursue on their behalf.',
    primaryObjectInView: 'Parcel (own account only) + its Assessment and Authorization.',
    admitIff: 'A Parcel enters their view once it is served (never at detected — no contact yet).',
    neverSee: [
      'Any other owner’s account, parcels, or savings',
      'The Operator agency cockpit and detection queue',
      'Worker case-packet internals beyond their own appeal’s status',
    ],
    naturalNeeds: [
      'See what they are overpaying, verifiable against the county site',
      'Authorize once (Appointment of Agent) with no upfront fee',
      'Track appeal status and see the invoice against measured savings',
    ],
  },
  {
    id: 'operator',
    name: 'Operator',
    oneLiner: 'Agency cockpit over all owner instances. Runs the machine end-to-end.',
    whyExist:
      'Detection, outreach, jurisdiction gating, collections and audit span every instance — ' +
      'a seat above the instances is required (cockpit-over-instances law).',
    servedHow:
      'Receives the always-on detection queue, every instance’s state, the jurisdiction gates, and the collections + audit trail.',
    purpose:
      'Fulfils the Owner’s so-that at scale — turning public over-assessments into signed, running appeals.',
    primaryObjectInView: 'Every Parcel across all instances, ranked by estimated excess.',
    admitIff: 'Admitted to a Parcel at every state, from detected onward (owns most transitions).',
    neverSee: [
      'Nothing is hidden inside the product — but the Operator acts; the licensed ' +
        'Agent-of-Record is the name on the filing.',
    ],
    naturalNeeds: [
      'Detect and rank over-assessments from public rolls',
      'Serve compliant notices and gate by licensed jurisdiction',
      'Run collections and keep an audit trail on every instance',
    ],
  },
  {
    id: 'agent-of-record',
    name: 'Licensed Agent-of-Record',
    oneLiner: 'The per-state licensed human whose registration the filings run under.',
    whyExist:
      'Representation is licensed at the person level (TX Occupations Code Ch. 1152). Remove them ' +
      'and no filing is lawful; their capacity caps how much Trim can file per state.',
    servedHow:
      'Receives the filings that run under their registration and a view of their sponsorship capacity.',
    purpose:
      'Fulfils the Operator’s so-that lawfully — a compliance fact on Trim’s side, tracked, not a full product persona.',
    primaryObjectInView: 'Authorizations + Appeals filed under their license, in their jurisdictions.',
    admitIff: 'Admitted to a Parcel once it is authorized in a jurisdiction their license covers.',
    neverSee: [
      'Owner accounts outside jurisdictions they are licensed for',
      'The commercial cockpit controls (Operator territory)',
    ],
    naturalNeeds: [
      'See filings running under their registration',
      'See remaining sponsorship capacity (TX: max 10 consultants per senior)',
    ],
  },
  {
    id: 'worker',
    name: 'Worker',
    oneLiner: 'Per-hearing local advocate. Picks up a prepared case packet, argues it, reports.',
    whyExist:
      'Formal appeals are argued at hearings before lay boards, in person in many jurisdictions. ' +
      'Without this seat, value creation stops at the formal level — the first genuine marketplace-shaped ' +
      'Worker layer since Tally.',
    servedHow:
      'Receives available hearings near them and, once picked up, the scoped case packet + a pay-per-appearance ledger.',
    purpose:
      'Fulfils the Owner’s so-that at the board — arguing the packet that lands the reduction.',
    primaryObjectInView: 'Hearing (available near them + their own picked-up packet).',
    admitIff:
      'Admitted to a Hearing when it is available (formal_hearing ∧ unclaimed) — decision chrome, not a gate.',
    neverSee: [
      'Owner account details beyond the assigned packet',
      'Other Workers’ assignments or the Operator cockpit',
      'Detection, outreach, or collections',
    ],
    naturalNeeds: [
      'Browse and pick up bounded, local hearings',
      'Open the prepared packet and argue it',
      'Report the result and see the pay-per-appearance credit',
    ],
  },
]

export const primaryObjects: PrimaryObject[] = [
  {
    id: 'parcel',
    name: 'Parcel',
    summary:
      'THE primary shared object. A single taxed property inside an owner account — the unit detection fires on and appeals run against.',
    states: ['detected', 'served', 'authorized', 'in_appeal', 'resolved', 'recurring'],
  },
  {
    id: 'assessment',
    name: 'Assessment',
    summary:
      'Secondary. County assessed value vs. market evidence: carries assessed $X, evidence $Y, estimated excess $Z.',
    states: ['assessed', 'evidence_gathered', 'contested', 'reduced', 'unchanged'],
    source: 'Assessment rolls + comps are public record (dossier §1).',
  },
  {
    id: 'authorization',
    name: 'Authorization',
    summary:
      'Secondary. One signature enabling filing + representation. In Texas a literal state form.',
    states: ['unsigned', 'signed', 'active', 'revoked'],
    source: 'TX Appointment of Agent, Form 50-162 (dossier §6, assumption 2).',
  },
  {
    id: 'appeal',
    name: 'Appeal',
    summary:
      'Secondary. The protest climbing the ladder: informal review → formal board hearing → judicial/arbitration.',
    states: ['informal_review', 'formal_hearing', 'judicial_or_arbitration', 'granted', 'partial', 'denied'],
    source: 'Appeal ladder (dossier §3, step 3).',
  },
  {
    id: 'hearing',
    name: 'Hearing (Worker unit)',
    summary:
      'Secondary. A single bounded, local, pay-per-appearance advocacy unit — the reusable Tally Worker mechanic.',
    states: ['available', 'picked_up', 'active', 'done'],
    source: 'Worker seat (dossier §6, assumption 4; §8).',
  },
  {
    id: 'invoice',
    name: 'Invoice',
    summary:
      'Secondary. Trim’s fee against measured, documented savings (assessment before/after × rate). No money in flight.',
    states: ['pending', 'issued', 'collected', 'delinquent'],
    source: 'Zero-risk architecture (dossier §4).',
  },
]

/**
 * Admission matrix for the primary object (Parcel).
 * Cells: V = in view · '—' = not in view · T = owns this transition/action.
 */
export const parcelAdmissionMatrix: AdmissionRow[] = [
  {
    state: 'detected',
    meaning: 'Public-record match; no contact yet',
    cells: {
      operator: { value: 'T', note: 'detect' },
      'business-client': { value: '—', note: 'not contacted' },
      'agent-of-record': { value: '—' },
      worker: { value: '—' },
    },
  },
  {
    state: 'served',
    meaning: 'Compliant analysis notice delivered',
    cells: {
      operator: { value: 'T', note: 'serve' },
      'business-client': { value: 'V', note: 'own parcel' },
      'agent-of-record': { value: '—' },
      worker: { value: '—' },
    },
  },
  {
    state: 'authorized',
    meaning: 'Appointment of Agent signed',
    cells: {
      operator: { value: 'V' },
      'business-client': { value: 'T', note: 'sign' },
      'agent-of-record': { value: 'V', note: 'licensed jurisdiction' },
      worker: { value: '—' },
    },
  },
  {
    state: 'in_appeal',
    meaning: 'Filed; informal → formal hearing',
    cells: {
      operator: { value: 'T', note: 'file / escalate' },
      'business-client': { value: 'V', note: 'status only' },
      'agent-of-record': { value: 'V', note: 'files under license' },
      worker: { value: 'T', note: 'pick up + argue (formal)' },
    },
  },
  {
    state: 'resolved',
    meaning: 'Board decision; reduction (or not) landed',
    cells: {
      operator: { value: 'T', note: 'invoice' },
      'business-client': { value: 'V', note: 'sees savings + invoice' },
      'agent-of-record': { value: 'V' },
      worker: { value: 'T', note: 'reports result' },
    },
  },
  {
    state: 'recurring',
    meaning: 'Fee collected; detection re-fires next cycle',
    cells: {
      operator: { value: 'T', note: 'collect' },
      'business-client': { value: 'V' },
      'agent-of-record': { value: '—' },
      worker: { value: '—' },
    },
  },
]

import type { PersonaFunction } from '../types'

/**
 * Pass 3 — Personas (Function). Each seat's molecular outcome decomposed into a How
 * Analysis tree. First How mirrors the outcome; child questions cut parent answer phrases
 * (DNA); user-visible language until true leaves, which terminate in HowUiRef component
 * language with relative click-path phrasing.
 */

export const personaFunctions: PersonaFunction[] = [
  {
    persona: 'operator',
    molecularOutcome:
      'The Operator turns a public over-assessment into a signed, running appeal by detecting it, ' +
      'serving the account, and gating it through the right licensed jurisdiction — across every instance at once.',
    how: {
      id: 'op-how-0',
      text: 'How does the Operator turn a public over-assessment into a signed, running appeal across every instance?',
      children: [
        {
          id: 'op-how-1',
          text: 'By detecting the over-assessment from public rolls',
          children: [
            {
              id: 'op-how-1-1',
              text: 'Watch the detection queue rank parcels by estimated excess',
              uiRef: { kind: 'Module', clickPath: 'Starting from Detection, open the Queue module' },
            },
            {
              id: 'op-how-1-2',
              text: 'Open a parcel to see assessed $X vs. evidence $Y and the comps behind it',
              uiRef: { kind: 'Modal', clickPath: 'On a Detection queue row, open the Parcel evidence modal' },
            },
          ],
        },
        {
          id: 'op-how-2',
          text: 'By serving the account with a compliant, verifiable notice',
          children: [
            {
              id: 'op-how-2-1',
              text: 'Compose the analysis-not-promise notice with the four trust elements',
              uiRef: { kind: 'Block', clickPath: 'On the Parcel evidence modal, open the Serve notice block' },
            },
            {
              id: 'op-how-2-2',
              text: 'Confirm the county verification link resolves before it goes out',
              uiRef: { kind: 'Submodal', clickPath: 'On the Serve notice block, open Verify link submodal' },
            },
          ],
        },
        {
          id: 'op-how-3',
          text: 'By gating it through a licensed jurisdiction and capturing one authorization',
          children: [
            {
              id: 'op-how-3-1',
              text: 'Check the jurisdiction gate: county open + agent-of-record capacity available',
              uiRef: { kind: 'Module', clickPath: 'Starting from Jurisdictions, open the Gates module' },
            },
            {
              id: 'op-how-3-2',
              text: 'Track the Appointment-of-Agent authorization from unsigned to active',
              uiRef: { kind: 'Block', clickPath: 'On the Instance drawer, open the Authorization block' },
            },
          ],
        },
      ],
    },
  },
  {
    persona: 'business-client',
    molecularOutcome:
      'The Owner confirms the over-assessment is real against the county’s own site and authorizes the appeal ' +
      'in a single signature — with no upfront fee and nothing to pay unless the bill actually drops.',
    how: {
      id: 'ow-how-0',
      text: 'How does the Owner confirm the over-assessment and authorize the appeal in one signature?',
      children: [
        {
          id: 'ow-how-1',
          text: 'By confirming the over-assessment is real',
          children: [
            {
              id: 'ow-how-1-1',
              text: 'Read the served analysis: assessed $X, evidence supports $Y, estimated excess $Z',
              uiRef: { kind: 'Module', clickPath: 'Starting from the served link, open the Parcel overview module' },
            },
            {
              id: 'ow-how-1-2',
              text: 'Click through to the county’s own record and match the parcel ID',
              uiRef: { kind: 'Submodal', clickPath: 'On the Parcel overview, open County verification submodal' },
            },
          ],
        },
        {
          id: 'ow-how-2',
          text: 'By authorizing the appeal in a single signature',
          children: [
            {
              id: 'ow-how-2-1',
              text: 'Sign the Appointment of Agent and see the no-upfront-fee / contingency terms',
              uiRef: { kind: 'Modal', clickPath: 'On the Parcel overview, open the Authorize modal' },
            },
            {
              id: 'ow-how-2-2',
              text: 'Capture card/ACH on file to be charged only on documented reduction',
              uiRef: { kind: 'Block', clickPath: 'On the Authorize modal, open the Payment-on-file block' },
            },
          ],
        },
      ],
    },
  },
  {
    persona: 'worker',
    molecularOutcome:
      'The Worker picks up a prepared hearing packet near them, argues it before the board, and reports the ' +
      'result — a bounded, pay-per-appearance unit that reuses the Tally Worker mechanic.',
    how: {
      id: 'wk-how-0',
      text: 'How does the Worker pick up a hearing, argue it, and report the result?',
      children: [
        {
          id: 'wk-how-1',
          text: 'By picking up an available hearing near them',
          children: [
            {
              id: 'wk-how-1-1',
              text: 'Browse available hearings filtered to their locality and date',
              uiRef: { kind: 'Module', clickPath: 'Starting from Hearings, open the Available board module' },
            },
            {
              id: 'wk-how-1-2',
              text: 'Pick up a hearing, moving it available → picked_up',
              uiRef: { kind: 'Block', clickPath: 'On an Available hearing card, open the Pick-up block' },
            },
          ],
        },
        {
          id: 'wk-how-2',
          text: 'By arguing the prepared packet before the board',
          children: [
            {
              id: 'wk-how-2-1',
              text: 'Open the scoped case packet: comps, uniformity table, requested reduction',
              uiRef: { kind: 'Modal', clickPath: 'On a Picked-up hearing, open the Case packet modal' },
            },
          ],
        },
        {
          id: 'wk-how-3',
          text: 'By reporting the result and closing the unit',
          children: [
            {
              id: 'wk-how-3-1',
              text: 'Record the board’s decision (granted / partial / denied) and mark it done',
              uiRef: { kind: 'Block', clickPath: 'On the Case packet modal, open the Report result block' },
            },
            {
              id: 'wk-how-3-2',
              text: 'See the pay-per-appearance credit land on their ledger',
              uiRef: { kind: 'Submodal', clickPath: 'On the Report result block, open Ledger credit submodal' },
            },
          ],
        },
      ],
    },
  },
]

export interface OutcomeEpic {
  id: string
  title: string
  soThat: string
  inScope: string[]
  outOfScope: string[]
}

/** OUTCOMES-TREE — epic cut in user language with so-that chains. */
export const outcomes: OutcomeEpic[] = [
  {
    id: 'detect-serve',
    title: 'Detect & serve the account',
    soThat: 'so that acquisition needs no funnel — the fact arrives before the relationship.',
    inScope: ['Detection queue over public rolls', 'Analysis-not-promise notice', 'Four-element trust kit'],
    outOfScope: ['Paid ads / mailers as primary channel', 'Promised-result solicitation copy'],
  },
  {
    id: 'authorize',
    title: 'Authorize in one signature',
    soThat: 'so that a single authorization enables filing + representation with zero owner risk.',
    inScope: ['Appointment of Agent capture', 'Card/ACH on file', 'Contingency-only terms'],
    outOfScope: ['Any upfront fee', 'Escrow / money-in-flight handling'],
  },
  {
    id: 'run-appeal',
    title: 'Run the appeal up the ladder',
    soThat: 'so that the reduction lands on the county bill and can be invoiced from public record.',
    inScope: ['Informal review', 'Formal board hearing (Worker seat)', 'Reduction capture'],
    outOfScope: ['Judicial/arbitration escalation (later phase)'],
  },
  {
    id: 'recur',
    title: 'Re-fire detection every cycle',
    soThat: 'so that the standing authorization compounds into recurring revenue at zero re-acquisition cost.',
    inScope: ['Annual re-detection inside the account', 'Invoice on measured savings'],
    outOfScope: ['Re-signing the owner each cycle'],
  },
]

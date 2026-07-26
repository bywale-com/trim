import type { SmeSeat } from '../types'

/**
 * Pass 2 — SME. Ten non-overlapping domain lanes (dossier §7), each carrying sourced
 * considerations drawn from the assumptions register (dossier §6). Every finding carries
 * its source; unverified claims are flagged (not smuggled in as settled law).
 */

export const smeSeats: SmeSeat[] = [
  {
    id: 'ptc-practitioner',
    role: 'Licensed property tax consultant (practitioner)',
    lane: 'What actually wins at informal vs. ARB; evidence norms; county temperament',
    considerations: [
      {
        id: 'ptc-1',
        question: 'What resolves at informal review vs. requiring a formal board hearing?',
        finding:
          'Most volume resolves at informal/formal levels; judicial/arbitration is the exception. ' +
          'This sizes how big the Worker (hearing) layer must be vs. what closes with no hearing.',
        status: 'needs-verification',
        source: 'Dossier §3 step 3; §6 assumption 4.',
        reconcile: 'PM: hearing is a distinct Appeal state. CTO: schedule/no-show automation around hearings.',
      },
    ],
  },
  {
    id: 'valuation',
    role: 'Valuation / mass-appraisal specialist (IAAO-literate)',
    lane: 'Sales comparison, income approach, uniformity statistics — detection-model credibility',
    considerations: [
      {
        id: 'val-1',
        question: 'When is “over-assessed by $X” defensible enough to state in the first touch?',
        finding:
          'Detection can fire from public sales-comp + equity/uniformity evidence. Income-approach ' +
          'commercial cases are stronger with owner rent-roll/P&L, but public data alone supports the claim.',
        status: 'needs-verification',
        source: 'Dossier §3 step 2; §6 assumption 1 & 5.',
        reconcile: 'This is the #1 load-bearing bet: detection confidence gates the whole ALG notice.',
      },
    ],
  },
  {
    id: 'licensure',
    role: 'Representation-rules & licensure specialist',
    lane: 'Who may represent, per state and per appeal level; individual-registration regimes',
    considerations: [
      {
        id: 'lic-1',
        question: 'Who may act as agent-of-record in Texas, and at what capacity?',
        finding:
          'Registered Property Tax Consultant under Occupations Code Ch. 1152 — exam + 40 classroom hours, ' +
          'individual registration, senior-consultant sponsorship capped at 10 consultants per senior. ' +
          'Trim’s Texas capacity scales in units of licensed humans.',
        status: 'verified',
        source: 'TX Occupations Code Ch. 1152; TDLR; SB 1870 analysis (dossier §6 assumption 3).',
        reconcile: 'Rollout order gates on this. CTO: track license capacity as a hard constraint per state.',
      },
    ],
  },
  {
    id: 'solicitation',
    role: 'Solicitation & advertising compliance specialist',
    lane: 'The legality of the ALG notice itself — the acquisition layer’s gatekeeper',
    considerations: [
      {
        id: 'sol-1',
        question: 'Can the first-touch notice say “you’re overpaying $14K, click to fix it”?',
        finding:
          'Likely NOT as phrased in Texas: TDLR ethics code prohibits soliciting property-tax-consulting ' +
          'services by claiming a specific result. Compliant shape is analysis-not-promise: ' +
          '“assessed at $X; comparable evidence supports $Y; estimated excess ≈ $Z, subject to appeal outcome.”',
        status: 'needs-verification',
        source: 'TDLR code of ethics 010PTC (dossier Finding 1; §6 assumption 1).',
        reconcile: 'PM: notice copy is analysis, never a promised result. This constrains the exact ALG mechanism.',
      },
    ],
  },
  {
    id: 'board-perspective',
    role: 'Appraisal-district / board-perspective specialist',
    lane: 'What evidence formats boards accept; remote/written-hearing availability',
    considerations: [
      {
        id: 'brd-1',
        question: 'How often can hearings be handled remotely or by affidavit vs. in person?',
        finding:
          'Boards hear evidence in person or (increasingly post-2020) remotely/by affidavit. The remote/written ' +
          'share by jurisdiction sets how large the in-person Worker layer must be.',
        status: 'needs-verification',
        source: 'Dossier §6 assumption 4.',
        reconcile: 'Directly sizes the Worker marketplace. CTO: jurisdiction registry carries hearing modality.',
      },
    ],
  },
  {
    id: 'judicial',
    role: 'Judicial-appeal / arbitration attorney',
    lane: 'The layer above the board: binding arbitration, tax court, escalation economics',
    considerations: [
      {
        id: 'jud-1',
        question: 'When is escalation past the board worth it, and where is it attorney-only?',
        finding:
          'Binding arbitration (TX) and tax court sit above the board; escalation is selective and some states ' +
          'are attorney-preferred/required at judicial levels. Draws the “attorney-only” boundary per state.',
        status: 'needs-verification',
        source: 'Dossier §3 step 3 (O’Connor three-phase framing); §6 assumption 3.',
      },
    ],
  },
  {
    id: 'county-data',
    role: 'County-data specialist',
    lane: 'Assessment-roll formats, CAMA systems, e-file portals, per-county acquisition cost',
    considerations: [
      {
        id: 'dat-1',
        question: 'Is per-county data plumbing a moat or a grave?',
        finding:
          'Rolls, comps, calendars and e-filing vary across 3,000+ counties with inconsistent formats. ' +
          'Launch discipline is deepest-value-counties-first (Texas metros are the canonical wedge), not breadth.',
        status: 'needs-design',
        source: 'Dossier §6 assumption 6; §5 counter-case.',
        reconcile: 'CTO owns the per-county ingestion registry; margin depends on acquisition cost per county.',
      },
    ],
  },
  {
    id: 'escrow',
    role: 'Mortgage-servicing / escrow specialist',
    lane: 'How reductions flow through escrowed accounts (timing, escrow analysis cycles)',
    considerations: [
      {
        id: 'esc-1',
        question: 'How does a reduction reach an owner who pays tax via escrow?',
        finding:
          'For escrowed owners the “savings” arrive as an escrow adjustment months later, diluting the felt win. ' +
          'One more reason the direct-paying commercial/multifamily wedge is first.',
        status: 'verified',
        source: 'Dossier §4 residential wrinkle.',
        reconcile: 'PM: residential fee timing differs; first wedge avoids it entirely.',
      },
    ],
  },
  {
    id: 'tax-treatment',
    role: 'Tax / accounting treatment specialist',
    lane: 'Is the reduction taxable to a business; 1099 handling on Trim’s fee',
    considerations: [
      {
        id: 'tax-1',
        question: 'How do owners book multi-year savings and Trim’s contingency fee?',
        finding:
          'Reduction is an expense reduction (not income); Trim’s fee needs 1099 handling. Owners book multi-year ' +
          'savings across cycles. Same seat class as Trove B2B #8, different answers.',
        status: 'needs-verification',
        source: 'Dossier §7 seat 9.',
      },
    ],
  },
  {
    id: 'trust',
    role: 'Trust / anti-scam perception specialist',
    lane: 'Making an unsolicited, parcel-specific notice read as legitimate, not a scam',
    considerations: [
      {
        id: 'trust-1',
        question: 'What makes the first-touch notice trusted rather than “is this a scam?”',
        finding:
          'Four-element trust kit: named county + parcel ID, county-site verification link, explicit ' +
          'non-affiliation disclaimer (likely legally required in TX-style regimes), and a no-upfront-fee statement.',
        status: 'verified',
        source: 'Dossier §7 seat 10 (Owlue “is this a scam?” coverage).',
        reconcile: 'PM: the served notice must plant all four trust elements. Verifiability replaces brand ads.',
      },
    ],
  },
]

import type { PersonaFurnishItem, PersonaObstacle } from '../types'

/**
 * Pass 4 — Enrichment (Can'ts). Assumes Function's core outcome is achievable and asks:
 * given the persona can now do their goal, what adjacent things can they still not do?
 * Ranked, relatively phrased, each linked to a focusHolonId that proves it when planted.
 */
export const obstacles: PersonaObstacle[] = [
  {
    id: 'op-cant-1',
    persona: 'operator',
    rank: 1,
    cant: 'Right now I can’t see, per county, how many licensed agent-of-record slots are left before I run out of filing capacity.',
    focusHolonId: 'holon.jurisdictions.capacityMeter',
  },
  {
    id: 'op-cant-2',
    persona: 'operator',
    rank: 2,
    cant: 'Right now I can’t bulk-serve a whole cohort of parcels that cleared the same detection threshold in one move.',
    focusHolonId: 'holon.detection.bulkServe',
  },
  {
    id: 'op-cant-3',
    persona: 'operator',
    rank: 3,
    cant: 'Right now I can’t tell which served notices were opened + verified against the county site vs. ignored.',
    focusHolonId: 'holon.serve.engagementTrail',
  },
  {
    id: 'ow-cant-1',
    persona: 'business-client',
    rank: 1,
    cant: 'Right now I can’t add a second parcel to my account and see them protested together next cycle.',
    focusHolonId: 'holon.owner.portfolioAdd',
  },
  {
    id: 'ow-cant-2',
    persona: 'business-client',
    rank: 2,
    cant: 'Right now I can’t upload a rent roll / P&L to strengthen an income-approach commercial case.',
    focusHolonId: 'holon.owner.documentsUpload',
  },
  {
    id: 'wk-cant-1',
    persona: 'worker',
    rank: 1,
    cant: 'Right now I can’t see my expected payout for a hearing before I commit to picking it up.',
    focusHolonId: 'holon.worker.payoutPreview',
  },
  {
    id: 'wk-cant-2',
    persona: 'worker',
    rank: 2,
    cant: 'Right now I can’t flag that a picked-up hearing was rescheduled by the board so it returns to the pool.',
    focusHolonId: 'holon.worker.rescheduleRelease',
  },
]

/**
 * Pass 5 — Furnish. Non-invasive supporting "able to" UI abilities that would already
 * exist if a real person built the space — with zero permission to alter what the flow does.
 */
export const furnishItems: PersonaFurnishItem[] = [
  { id: 'op-fur-1', persona: 'operator', ableTo: 'Able to filter the detection queue by county, estimated excess band, and property class.', furnishFocusId: 'furnish.detection.filters' },
  { id: 'op-fur-2', persona: 'operator', ableTo: 'Able to see an audit trail entry for every state change on an instance.', furnishFocusId: 'furnish.audit.trail' },
  { id: 'op-fur-3', persona: 'operator', ableTo: 'Able to view collections aging on issued invoices (pending / issued / collected / delinquent).', furnishFocusId: 'furnish.collections.aging' },
  { id: 'op-fur-4', persona: 'operator', ableTo: 'Able to pin an appeal calendar showing each jurisdiction’s filing window.', furnishFocusId: 'furnish.calendar.windows' },
  { id: 'ow-fur-1', persona: 'business-client', ableTo: 'Able to see a plain-language summary of what a successful reduction saves per year.', furnishFocusId: 'furnish.owner.savingsSummary' },
  { id: 'ow-fur-2', persona: 'business-client', ableTo: 'Able to view the exact evidence comps Trim used, with the county source link on each.', furnishFocusId: 'furnish.owner.evidenceList' },
  { id: 'ow-fur-3', persona: 'business-client', ableTo: 'Able to download the signed Appointment of Agent for their records.', furnishFocusId: 'furnish.owner.authDownload' },
  { id: 'wk-fur-1', persona: 'worker', ableTo: 'Able to see hearing location, board name, and time on each available card.', furnishFocusId: 'furnish.worker.locationMeta' },
  { id: 'wk-fur-2', persona: 'worker', ableTo: 'Able to review a read-only history of packets they have already argued.', furnishFocusId: 'furnish.worker.history' },
  { id: 'aor-fur-1', persona: 'agent-of-record', ableTo: 'Able to see every filing running under their registration this cycle.', furnishFocusId: 'furnish.aor.filings' },
]

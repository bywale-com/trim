import type { CtSurface } from '../types'

/**
 * Pass 6 — CT Plant surface catalog. BUSINESS_SURFACE_STATUS tracks planted vs not_done.
 * Every affordance written in Function / Can'ts / Furnish must eventually be planted here.
 */
export const BUSINESS_SURFACE_STATUS: CtSurface[] = [
  { id: 'surface.detection.queue', label: 'Detection queue', region: 'Operator cockpit', status: 'planted' },
  { id: 'surface.parcel.evidence', label: 'Parcel evidence + serve', region: 'Operator cockpit', status: 'planted' },
  { id: 'surface.owner.overview', label: 'Owner parcel overview', region: 'Owner instance', status: 'planted' },
  { id: 'surface.owner.authorize', label: 'Authorize (Appointment of Agent)', region: 'Owner instance', status: 'planted' },
  { id: 'surface.appeal.ladder', label: 'Appeal ladder', region: 'Operator cockpit', status: 'planted' },
  { id: 'surface.worker.board', label: 'Worker hearing board', region: 'Worker seat', status: 'planted' },
  { id: 'surface.worker.packet', label: 'Case packet + report', region: 'Worker seat', status: 'planted' },
  { id: 'surface.invoice.collections', label: 'Invoice + collections', region: 'Operator cockpit', status: 'planted' },
  { id: 'surface.audit.trail', label: 'Instance audit trail', region: 'Operator cockpit', status: 'planted' },
  { id: 'surface.jurisdiction.gates', label: 'Jurisdiction / license gates', region: 'Operator cockpit', status: 'not_done' },
  { id: 'surface.owner.documents', label: 'Owner documents upload (rent roll / P&L)', region: 'Owner instance', status: 'not_done' },
  { id: 'surface.detection.bulkServe', label: 'Bulk-serve cohort', region: 'Operator cockpit', status: 'not_done' },
]

import { useMemo, useReducer, useState } from 'react'
import { PassLayout } from '../components/PassLayout'
import { SurfaceBoundary } from '../components/SurfaceBoundary'
import {
  ctReducer,
  estimatedExcessTax,
  initialCtState,
  measuredSavings,
  nextStep,
  trimFee,
  type Parcel,
} from '../register/ct/model'
import { admits, type ParcelState, type PersonaSeat } from '../register/world/trimWorld'

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const CHAIN: { key: Parcel['status']; label: string }[] = [
  { key: 'detected', label: 'Detected' },
  { key: 'served', label: 'Served' },
  { key: 'authorized', label: 'Authorized' },
  { key: 'in_appeal', label: 'In appeal' },
  { key: 'resolved', label: 'Resolved' },
  { key: 'recurring', label: 'Recurring' },
]

const PERSONAS: { id: PersonaSeat; label: string }[] = [
  { id: 'operator', label: 'Operator' },
  { id: 'business-client', label: 'Owner' },
  { id: 'worker', label: 'Worker' },
]

function ChainProgress({ parcel }: { parcel: Parcel }) {
  const idx = CHAIN.findIndex((c) => c.key === parcel.status)
  return (
    <div className="chain">
      {CHAIN.map((c, i) => (
        <span
          key={c.key}
          className={`step${i < idx ? ' done' : ''}${i === idx ? ' current' : ''}`}
        >
          {c.label}
        </span>
      ))}
    </div>
  )
}

export function CtPlantPage() {
  const [state, dispatch] = useReducer(ctReducer, undefined, initialCtState)
  const [persona, setPersona] = useState<PersonaSeat>('operator')
  const [selectedId, setSelectedId] = useState(state.parcels[0].id)
  const [worker] = useState('Dana R. (Travis Co.)')

  const selected = state.parcels.find((p) => p.id === selectedId) ?? state.parcels[0]

  // Admission: which parcels this persona may see, by the machine twin.
  const visible = useMemo(
    () => state.parcels.filter((p) => admits(persona, p.status as ParcelState)),
    [state.parcels, persona],
  )

  return (
    <PassLayout
      eyebrow="Pass 6"
      title="CT Plant"
      intro="A functional click-through of Trim's core value chain in Register gray — structure only, no design system. The persona switch respects the World admission matrix (trimWorld.admits): a persona only sees parcels the matrix admits."
      actions={
        <>
          <div className="persona-switch" role="group" aria-label="Persona">
            {PERSONAS.map((p) => (
              <button
                key={p.id}
                className={`btn small${persona === p.id ? ' active' : ''}`}
                onClick={() => setPersona(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <button className="btn small" onClick={() => dispatch({ type: 'RESET' })}>
            Reset
          </button>
        </>
      }
    >
      <div className="note" style={{ marginBottom: 16 }}>
        Money never moves through Trim. The “recovery” is a smaller county bill; the fee is an invoice against
        measured savings (assessment before/after × rate). Walk the chain below:
        {' '}<strong>detect → serve → authorize → appeal → hearing → reduction → invoice → recurs.</strong>
      </div>

      {persona === 'operator' && (
        <OperatorView
          parcels={visible}
          selected={selected}
          onSelect={setSelectedId}
          dispatch={dispatch}
        />
      )}
      {persona === 'business-client' && (
        <OwnerView parcels={visible} selected={selected} onSelect={setSelectedId} dispatch={dispatch} />
      )}
      {persona === 'worker' && (
        <WorkerView parcels={visible} selected={selected} onSelect={setSelectedId} dispatch={dispatch} worker={worker} />
      )}

      {visible.length === 0 && (
        <div className="panel">
          <div className="panel-body muted">
            Nothing admitted to <strong>{PERSONAS.find((p) => p.id === persona)?.label}</strong> yet — the
            admission matrix marks every current parcel state “—” for this seat. Advance the chain from another
            seat first (this is the world law working, not a bug).
          </div>
        </div>
      )}
    </PassLayout>
  )
}

type SurfaceProps = {
  parcels: Parcel[]
  selected: Parcel
  onSelect: (id: string) => void
  dispatch: React.Dispatch<import('../register/ct/model').CtAction>
}

function ParcelRow({
  p,
  selected,
  onSelect,
  right,
}: {
  p: Parcel
  selected: boolean
  onSelect: (id: string) => void
  right?: React.ReactNode
}) {
  return (
    <button
      className={`row${selected ? ' selected' : ''}`}
      style={{ width: '100%', border: 'none', background: 'transparent', textAlign: 'left', cursor: 'pointer' }}
      onClick={() => onSelect(p.id)}
    >
      <div className="grow">
        <div className="fact">
          <span className="value">{p.address}</span>
          <span className="label">
            {p.county} County, {p.state} · <span className="mono">{p.id}</span> · {p.propertyClass}
          </span>
        </div>
      </div>
      {right}
    </button>
  )
}

function OperatorView({ parcels, selected, onSelect, dispatch }: SurfaceProps) {
  const step = nextStep(selected)
  return (
    <>
      <SurfaceBoundary
        surfaceId="surface.detection.queue"
        label="Detection queue"
        region="Operator cockpit"
      >
        <div className="panel">
          {parcels.map((p) => (
            <ParcelRow
              key={p.id}
              p={p}
              selected={p.id === selected.id}
              onSelect={onSelect}
              right={
                <div className="fact" style={{ alignItems: 'flex-end' }}>
                  <span className="label">est. annual excess</span>
                  <span className="value">{money(estimatedExcessTax(p))}</span>
                </div>
              }
            />
          ))}
        </div>
      </SurfaceBoundary>

      <div style={{ height: 12 }} />

      <SurfaceBoundary
        surfaceId="surface.parcel.evidence"
        label="Parcel evidence + appeal ladder"
        region="Operator cockpit"
      >
        <ChainProgress parcel={selected} />
        <div className="panel">
          <div className="panel-header">
            <h3>{selected.address}</h3>
            <span className="spacer" style={{ flex: 1 }} />
            <span className="pill mono">{selected.status}</span>
          </div>
          <div className="panel-body">
            <div className="fact-row" style={{ marginBottom: 12 }}>
              <div className="fact"><span className="label">Assessed (county)</span><span className="value">{money(selected.assessed)}</span></div>
              <div className="fact"><span className="label">Evidence supports</span><span className="value">{money(selected.evidence)}</span></div>
              <div className="fact"><span className="label">Rate</span><span className="value">{(selected.rate * 100).toFixed(2)}%</span></div>
              <div className="fact"><span className="label">Est. annual excess</span><span className="value">{money(estimatedExcessTax(selected))}</span></div>
              {selected.reduction > 0 && (
                <div className="fact"><span className="label">Measured savings / yr</span><span className="value">{money(measuredSavings(selected))}</span></div>
              )}
              {selected.invoice !== 'none' && (
                <div className="fact"><span className="label">Trim fee</span><span className="value">{money(trimFee(selected))}</span></div>
              )}
            </div>

            <OperatorActions parcel={selected} step={step} dispatch={dispatch} />
          </div>
        </div>
      </SurfaceBoundary>

      <div style={{ height: 12 }} />

      <SurfaceBoundary surfaceId="surface.audit.trail" label="Instance audit trail" region="Operator cockpit">
        <div className="panel">
          <ul className="audit panel-body" style={{ margin: 0 }}>
            {selected.audit.map((a, i) => (
              <li key={i}>
                <span className="mono dim">#{a.at}</span> <span className="pill">{a.actor}</span> {a.event}
              </li>
            ))}
          </ul>
        </div>
      </SurfaceBoundary>
    </>
  )
}

function OperatorActions({
  parcel,
  step,
  dispatch,
}: {
  parcel: Parcel
  step: ReturnType<typeof nextStep>
  dispatch: SurfaceProps['dispatch']
}) {
  if (step === 'SERVE')
    return (
      <button className="btn loud" onClick={() => dispatch({ type: 'SERVE', parcelId: parcel.id })}>
        Serve compliant analysis notice
      </button>
    )
  if (step === 'AUTHORIZE')
    return <div className="note">Served. Waiting on the Owner to authorize (switch to the Owner seat).</div>
  if (step === 'FILE_APPEAL')
    return (
      <button className="btn loud" onClick={() => dispatch({ type: 'FILE_APPEAL', parcelId: parcel.id })}>
        File appeal — open informal review
      </button>
    )
  if (step === 'ADVANCE_TO_HEARING')
    return (
      <button className="btn loud" onClick={() => dispatch({ type: 'ADVANCE_TO_HEARING', parcelId: parcel.id })}>
        Escalate to formal board hearing
      </button>
    )
  if (parcel.appeal === 'formal_hearing')
    return <div className="note">Posted to the Worker board (hearing: {parcel.hearing}). Switch to the Worker seat.</div>
  if (step === 'ISSUE_INVOICE')
    return (
      <button className="btn loud" onClick={() => dispatch({ type: 'ISSUE_INVOICE', parcelId: parcel.id })}>
        Invoice {money(trimFee(parcel))} against measured savings
      </button>
    )
  if (step === 'COLLECT_INVOICE')
    return (
      <button className="btn loud" onClick={() => dispatch({ type: 'COLLECT_INVOICE', parcelId: parcel.id })}>
        Mark fee collected
      </button>
    )
  if (parcel.appeal === 'denied')
    return <div className="note">Board denied the reduction — no measured savings, so no invoice. Detection re-fires next cycle.</div>
  if (parcel.status === 'recurring')
    return <div className="note"><strong>Cycle closed.</strong> Authorization stands; detection re-fires next cycle at zero re-acquisition cost.</div>
  return null
}

function OwnerView({ parcels, selected, onSelect, dispatch }: SurfaceProps) {
  const own = parcels.length > 0 ? (parcels.find((p) => p.id === selected.id) ?? parcels[0]) : null
  return (
    <>
      <SurfaceBoundary surfaceId="surface.owner.overview" label="Owner parcel overview" region="Owner instance">
        <div className="panel">
          {parcels.map((p) => (
            <ParcelRow
              key={p.id}
              p={p}
              selected={own?.id === p.id}
              onSelect={onSelect}
              right={<span className="pill mono">{p.status}</span>}
            />
          ))}
        </div>
      </SurfaceBoundary>

      {own && (
        <>
          <div style={{ height: 12 }} />
          <SurfaceBoundary
            surfaceId="surface.owner.authorize"
            label="Authorize (Appointment of Agent)"
            region="Owner instance"
          >
            <div className="panel">
              <div className="panel-header">
                <h3>{own.address}</h3>
              </div>
              <div className="panel-body">
                <p className="small">
                  Analysis, not a promised result: your parcel is assessed at{' '}
                  <strong>{money(own.assessed)}</strong>; comparable evidence supports{' '}
                  <strong>{money(own.evidence)}</strong>; estimated excess tax ≈{' '}
                  <strong>{money(estimatedExcessTax(own))}</strong>/yr, subject to appeal outcome.
                </p>
                <div className="fact-row" style={{ marginBottom: 12 }}>
                  <div className="fact">
                    <span className="label">Verify</span>
                    <span className="value" style={{ fontSize: 13, fontWeight: 400 }}>
                      Match parcel <span className="mono">{own.id}</span> on the {own.county} County site.
                    </span>
                  </div>
                  <div className="fact"><span className="label">Terms</span><span className="value" style={{ fontSize: 13, fontWeight: 400 }}>No upfront fee · pay only on documented reduction</span></div>
                </div>
                {own.status === 'served' ? (
                  <button className="btn loud" onClick={() => dispatch({ type: 'AUTHORIZE', parcelId: own.id })}>
                    Sign Appointment of Agent + payment on file
                  </button>
                ) : own.status === 'recurring' ? (
                  <div className="note">
                    Saved <strong>{money(measuredSavings(own))}</strong>/yr. Fee {money(trimFee(own))} collected.
                    Authorization stands for next cycle.
                  </div>
                ) : (
                  <div className="note">
                    Authorized — Trim is running the appeal on your behalf (status: <span className="mono">{own.appeal}</span>).
                  </div>
                )}
              </div>
            </div>
          </SurfaceBoundary>
        </>
      )}
    </>
  )
}

function WorkerView({
  parcels,
  selected,
  onSelect,
  dispatch,
  worker,
}: SurfaceProps & { worker: string }) {
  // Worker decision chrome: available = formal_hearing ∧ unclaimed. Never advertise the gate.
  const available = parcels.filter((p) => p.appeal === 'formal_hearing' && p.hearing === 'available')
  const mine = parcels.filter((p) => p.hearing === 'picked_up' || p.hearing === 'active')
  const active = parcels.find((p) => p.id === selected.id && (p.hearing === 'picked_up' || p.hearing === 'active'))
    ?? mine[0]

  return (
    <>
      <SurfaceBoundary surfaceId="surface.worker.board" label="Available hearings near you" region="Worker seat">
        <div className="panel">
          {available.length === 0 ? (
            <div className="panel-body muted">No available hearings right now.</div>
          ) : (
            available.map((p) => (
              <div key={p.id} className="row">
                <div className="grow">
                  <div className="fact">
                    <span className="value">{p.county} County ARB · {p.address}</span>
                    <span className="label">Requested reduction {money(Math.max(0, p.assessed - p.evidence))} · pay-per-appearance</span>
                  </div>
                </div>
                <button
                  className="btn loud small"
                  onClick={() => {
                    dispatch({ type: 'PICKUP_HEARING', parcelId: p.id, worker })
                    onSelect(p.id)
                  }}
                >
                  Pick up
                </button>
              </div>
            ))
          )}
        </div>
      </SurfaceBoundary>

      {active && (
        <>
          <div style={{ height: 12 }} />
          <SurfaceBoundary surfaceId="surface.worker.packet" label="Case packet + report" region="Worker seat">
            <div className="panel">
              <div className="panel-header">
                <h3>{active.address}</h3>
                <span className="spacer" style={{ flex: 1 }} />
                <span className="pill mono">hearing: {active.hearing}</span>
              </div>
              <div className="panel-body">
                <div className="fact-row" style={{ marginBottom: 12 }}>
                  <div className="fact"><span className="label">Assessed</span><span className="value">{money(active.assessed)}</span></div>
                  <div className="fact"><span className="label">Evidence (comps + uniformity)</span><span className="value">{money(active.evidence)}</span></div>
                  <div className="fact"><span className="label">Requested reduction</span><span className="value">{money(Math.max(0, active.assessed - active.evidence))}</span></div>
                </div>
                {active.hearing === 'picked_up' && (
                  <button className="btn loud" onClick={() => dispatch({ type: 'START_HEARING', parcelId: active.id })}>
                    Argue packet before the board
                  </button>
                )}
                {active.hearing === 'active' && (
                  <div className="tag-row">
                    <button className="btn loud" onClick={() => dispatch({ type: 'REPORT_RESULT', parcelId: active.id, outcome: 'granted' })}>
                      Report: granted (full)
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'REPORT_RESULT', parcelId: active.id, outcome: 'partial' })}>
                      Partial
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'REPORT_RESULT', parcelId: active.id, outcome: 'denied' })}>
                      Denied
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SurfaceBoundary>
        </>
      )}
    </>
  )
}

import { PassLayout } from '../components/PassLayout'
import {
  parcelAdmissionMatrix,
  personas,
  primaryObjects,
} from '../register/world/world'
import type { AdmissionSymbol, PersonaKind } from '../register/types'

const personaCols: { id: PersonaKind; short: string }[] = [
  { id: 'operator', short: 'Operator' },
  { id: 'business-client', short: 'Owner' },
  { id: 'agent-of-record', short: 'Agent-of-Record' },
  { id: 'worker', short: 'Worker' },
]

function Sym({ value }: { value: AdmissionSymbol }) {
  const cls = value === '—' ? 'none' : value
  return <span className={`sym ${cls}`}>{value}</span>
}

export function WorldPage() {
  return (
    <PassLayout
      eyebrow="Pass 1"
      title="World"
      intro="World establishes the physics: who exists, why, what shared objects move through which states, and who may see them. Kept to the smallest sustaining set. Agent is a presentation feature, not a seat."
    >
      <h3>Persona sits</h3>
      <div className="grid" style={{ marginBottom: 20 }}>
        {personas.map((p) => (
          <div key={p.id} className="panel">
            <div className="panel-header">
              <h3>{p.name}</h3>
              <span className="spacer" style={{ flex: 1 }} />
              <span className="pill">{p.id}</span>
            </div>
            <div className="panel-body">
              <p className="muted small">{p.oneLiner}</p>
              <div className="fact" style={{ marginBottom: 8 }}>
                <span className="label">Why exist</span>
                <span className="value" style={{ fontWeight: 400, fontSize: 13 }}>{p.whyExist}</span>
              </div>
              <div className="fact" style={{ marginBottom: 8 }}>
                <span className="label">Served how</span>
                <span className="value" style={{ fontWeight: 400, fontSize: 13 }}>{p.servedHow}</span>
              </div>
              <div className="fact" style={{ marginBottom: 8 }}>
                <span className="label">Purpose (so-that)</span>
                <span className="value" style={{ fontWeight: 400, fontSize: 13 }}>{p.purpose}</span>
              </div>
              <div className="fact" style={{ marginBottom: 8 }}>
                <span className="label">Primary object · admit iff</span>
                <span className="value" style={{ fontWeight: 400, fontSize: 13 }}>
                  {p.primaryObjectInView} — {p.admitIff}
                </span>
              </div>
              <div className="fact" style={{ marginBottom: 8 }}>
                <span className="label">Never see</span>
                <ul className="small muted" style={{ margin: '2px 0 0', paddingLeft: 16 }}>
                  {p.neverSee.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="fact">
                <span className="label">Natural needs (V1)</span>
                <ul className="small" style={{ margin: '2px 0 0', paddingLeft: 16 }}>
                  {p.naturalNeeds.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Admission matrix — primary object: Parcel</h3>
      <div className="note" style={{ marginBottom: 10 }}>
        Cells: <strong>V</strong> = in view · <strong>—</strong> = not in view · <strong>T</strong> = owns
        this transition/action. Ritual: anything shown that the matrix marks “—” is a world bug. A machine
        twin (<span className="mono">trimWorld.ts</span>) exposes <span className="mono">admits(persona, state)</span>.
      </div>
      <table className="matrix" style={{ marginBottom: 20 }}>
        <thead>
          <tr>
            <th style={{ width: 130 }}>State</th>
            <th>Meaning</th>
            {personaCols.map((c) => (
              <th key={c.id}>{c.short}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {parcelAdmissionMatrix.map((row) => (
            <tr key={row.state}>
              <td>
                <span className="mono">{row.state}</span>
              </td>
              <td className="muted">{row.meaning}</td>
              {personaCols.map((c) => {
                const cell = row.cells[c.id]
                return (
                  <td key={c.id}>
                    <Sym value={cell.value} />
                    {cell.note ? <span className="cnote">{cell.note}</span> : null}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Primary objects &amp; states</h3>
      <div className="panel">
        {primaryObjects.map((o) => (
          <div key={o.id} className="row">
            <div className="grow">
              <div className="fact">
                <span className="value">{o.name}</span>
                <span className="label">{o.summary}</span>
              </div>
              {o.source ? <div className="src">{o.source}</div> : null}
            </div>
            <div className="tag-row" style={{ maxWidth: 360, justifyContent: 'flex-end' }}>
              {o.states.map((s) => (
                <span key={s} className="pill mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PassLayout>
  )
}

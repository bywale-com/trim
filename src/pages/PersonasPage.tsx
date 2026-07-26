import { PassLayout } from '../components/PassLayout'
import { outcomes, personaFunctions } from '../register/personas/personas'
import { personas } from '../register/world/world'
import type { HowNode, PersonaKind } from '../register/types'

function personaName(id: PersonaKind) {
  return personas.find((p) => p.id === id)?.name ?? id
}

function HowTree({ node }: { node: HowNode }) {
  return (
    <li className="how-node">
      {node.uiRef ? (
        <div className="how-leaf">
          <span className="q">{node.text}</span>
          <span className="uiref">
            {node.uiRef.kind} · {node.uiRef.clickPath}
          </span>
        </div>
      ) : (
        <span className="q">{node.text}</span>
      )}
      {node.children && node.children.length > 0 ? (
        <ul>
          {node.children.map((c) => (
            <HowTree key={c.id} node={c} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export function PersonasPage() {
  return (
    <PassLayout
      eyebrow="Pass 3"
      title="Personas · Function"
      intro="Function decomposes each seat's molecular outcome into a How Analysis tree. The first How mirrors the outcome; child questions cut parent answer phrases (DNA); user-visible language until true leaves, which terminate in HowUiRef component language."
    >
      <h3>Outcomes tree</h3>
      <div className="panel" style={{ marginBottom: 20 }}>
        {outcomes.map((o) => (
          <div key={o.id} className="row">
            <div className="grow">
              <div className="fact" style={{ marginBottom: 4 }}>
                <span className="value">{o.title}</span>
                <span className="label">{o.soThat}</span>
              </div>
              <div className="fact-row small">
                <div className="fact">
                  <span className="label">In scope</span>
                  <span className="value" style={{ fontWeight: 400, fontSize: 12 }}>
                    {o.inScope.join(' · ')}
                  </span>
                </div>
                <div className="fact">
                  <span className="label">Out</span>
                  <span className="value dim" style={{ fontWeight: 400, fontSize: 12 }}>
                    {o.outOfScope.join(' · ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>How Analysis</h3>
      {personaFunctions.map((fn) => (
        <div key={fn.persona} className="panel">
          <div className="panel-header">
            <h3>{personaName(fn.persona)}</h3>
            <span className="spacer" style={{ flex: 1 }} />
            <span className="pill">molecular outcome</span>
          </div>
          <div className="panel-body">
            <p className="small" style={{ marginBottom: 12 }}>
              {fn.molecularOutcome}
            </p>
            <ul className="how-tree">
              <HowTree node={fn.how} />
            </ul>
          </div>
        </div>
      ))}
    </PassLayout>
  )
}

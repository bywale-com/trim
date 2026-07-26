import { PassLayout } from '../components/PassLayout'
import { furnishItems } from '../register/enrichment/enrichment'
import { personas } from '../register/world/world'
import type { PersonaKind } from '../register/types'

function personaName(id: PersonaKind) {
  return personas.find((p) => p.id === id)?.name ?? id
}

export function FurnishPage() {
  const byPersona = personas
    .map((p) => ({
      persona: p.id,
      items: furnishItems.filter((f) => f.persona === p.id),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <PassLayout
      eyebrow="Pass 5"
      title="Furnish"
      intro="Non-invasive world enrichment: given this world and persona, what supporting modules and components would already exist if a real person built it — with zero permission to alter what the flow does. 'Able to' supporting abilities, not agents."
    >
      {byPersona.map((g) => (
        <div key={g.persona} className="panel">
          <div className="panel-header">
            <h3>{personaName(g.persona)}</h3>
            <span className="spacer" style={{ flex: 1 }} />
            <span className="pill">{g.items.length} furnish items</span>
          </div>
          {g.items.map((f) => (
            <div key={f.id} className="row">
              <div className="grow">
                <div className="value" style={{ fontSize: 13, fontWeight: 500 }}>
                  {f.ableTo}
                </div>
                <div className="src">
                  furnishFocusId — <span className="mono">{f.furnishFocusId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </PassLayout>
  )
}

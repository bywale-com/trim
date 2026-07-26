import { PassLayout } from '../components/PassLayout'
import { obstacles } from '../register/enrichment/enrichment'
import { personas } from '../register/world/world'
import type { PersonaKind } from '../register/types'

function personaName(id: PersonaKind) {
  return personas.find((p) => p.id === id)?.name ?? id
}

export function EnrichmentPage() {
  const byPersona = personas
    .map((p) => ({
      persona: p.id,
      items: obstacles.filter((o) => o.persona === p.id).sort((a, b) => a.rank - b.rank),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <PassLayout
      eyebrow="Pass 4"
      title="Enrichment · Can'ts"
      intro="Assuming Function's core outcome is achievable, what adjacent things can each persona still not do? Each Can't is ranked, phrased relatively, and linked to a focusHolonId that proves it is met when planted."
    >
      {byPersona.map((g) => (
        <div key={g.persona} className="panel">
          <div className="panel-header">
            <h3>{personaName(g.persona)}</h3>
          </div>
          {g.items.map((o) => (
            <div key={o.id} className="row">
              <span className="idx" style={{ width: 22, height: 22 }}>
                {o.rank}
              </span>
              <div className="grow">
                <div className="value" style={{ fontSize: 13, fontWeight: 500 }}>
                  {o.cant}
                </div>
                <div className="src">focusHolonId — <span className="mono">{o.focusHolonId}</span></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </PassLayout>
  )
}

import { Link } from 'react-router-dom'
import { PassLayout } from '../components/PassLayout'
import { worldSentence } from '../register/world/world'
import { BUSINESS_SURFACE_STATUS } from '../register/ct/surfaces'

const passes = [
  { to: '/world', n: '1', name: 'World', line: 'Personas, admission matrix (V/—/T), primary objects — the physics.' },
  { to: '/sme', n: '2', name: 'SME', line: 'Ten domain lanes; sourced considerations from the dossier assumptions register.' },
  { to: '/personas', n: '3', name: 'Personas · Function', line: 'Molecular outcomes decomposed into How trees with HowUiRef leaves.' },
  { to: '/enrichment', n: '4', name: 'Enrichment', line: "Can'ts — adjacent capability gaps per persona, linked to focus holons." },
  { to: '/furnish', n: '5', name: 'Furnish', line: 'Non-invasive supporting "able to" abilities that would already exist.' },
  { to: '/ct', n: '6', name: 'CT Plant', line: 'Functional click-through of the core chain in Register gray.' },
]

export function OverviewPage() {
  const planted = BUSINESS_SURFACE_STATUS.filter((s) => s.status === 'planted').length
  return (
    <PassLayout
      eyebrow="Trim · property-tax over-assessment recovery"
      title="Trim · Register overview"
      intro="Register is the blueprint room — what must exist before design-system translation. This workspace runs the Om Coda Register passes for Trim (the T-line: Tower · Tally · Trove · Trim), grounded in the seed dossier."
    >
      <div className="note" style={{ marginBottom: 16 }}>
        <strong>World sentence.</strong> {worldSentence}
      </div>

      <div className="panel">
        <div className="panel-header">
          <h3>Register pass sequence</h3>
          <span className="spacer" style={{ flex: 1 }} />
          <span className="pill">
            CT surfaces planted {planted}/{BUSINESS_SURFACE_STATUS.length}
          </span>
        </div>
        {passes.map((p) => (
          <Link key={p.to} to={p.to} className="row" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="idx" style={{ width: 22, height: 22 }}>
              {p.n}
            </span>
            <div className="grow">
              <div className="fact">
                <span className="value">{p.name}</span>
                <span className="label">{p.line}</span>
              </div>
            </div>
            <span className="dim">→</span>
          </Link>
        ))}
      </div>

      <div className="panel">
        <div className="panel-header">
          <h3>The outcome, stated plainly</h3>
        </div>
        <div className="panel-body">
          <p className="muted">
            Property is taxed on assessed value. Mass appraisal skews high often enough that up to ~60% of
            U.S. properties are over-assessed while fewer than 5% appeal (NTUF). The eligibility fact —
            a parcel’s over-assessment and estimated annual overpayment — is <em>public and specific before
            contact</em>. Trim detects it, serves the account, takes one authorization, runs the appeal, and
            invoices a cut of the measured savings.
          </p>
          <div className="fact-row">
            <div className="fact"><span className="label">Wedge</span><span className="value">Small/mid commercial + multifamily · 1–20 parcels</span></div>
            <div className="fact"><span className="label">ACV / parcel</span><span className="value">$2–15K / yr at 25–40% contingency</span></div>
            <div className="fact"><span className="label">First territory</span><span className="value">Texas metros (equal-and-uniform)</span></div>
          </div>
        </div>
      </div>
    </PassLayout>
  )
}

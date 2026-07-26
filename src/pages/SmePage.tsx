import { PassLayout } from '../components/PassLayout'
import { smeSeats } from '../register/sme/sme'
import type { SmeConsideration } from '../register/types'

function statusPill(status: SmeConsideration['status']) {
  if (status === 'verified') return <span className="pill ok">verified</span>
  if (status === 'needs-design') return <span className="pill note">needs design</span>
  return <span className="pill danger">needs verification</span>
}

export function SmePage() {
  return (
    <PassLayout
      eyebrow="Pass 2"
      title="SME"
      intro="Before PM decomposes outcomes, domain experts stress-test the seed. Each seat owns a non-overlapping lane; every finding carries its source. Unverified claims are flagged, not smuggled in as settled law."
    >
      <div className="note" style={{ marginBottom: 16 }}>
        Ten SME seats (dossier §7). PM translates these facts into outcome/state/never-see changes; CTO
        translates them into integration/job/audit requirements. Cross-cutting findings get a reconciliation
        checkpoint before either seat goes deep.
      </div>

      {smeSeats.map((seat) => (
        <div key={seat.id} className="panel">
          <div className="panel-header">
            <h3>{seat.role}</h3>
          </div>
          <div className="panel-body" style={{ paddingBottom: 6 }}>
            <p className="muted small" style={{ marginBottom: 10 }}>
              Lane — {seat.lane}
            </p>
          </div>
          {seat.considerations.map((c) => (
            <div key={c.id} className="row">
              <div className="grow">
                <div className="fact" style={{ marginBottom: 6 }}>
                  <span className="label">Question</span>
                  <span className="value" style={{ fontWeight: 500, fontSize: 13 }}>
                    {c.question}
                  </span>
                </div>
                <p className="small" style={{ margin: '0 0 6px' }}>
                  {c.finding}
                </p>
                <div className="tag-row" style={{ marginBottom: 6 }}>{statusPill(c.status)}</div>
                <div className="src">Source — {c.source}</div>
                {c.reconcile ? (
                  <div className="src" style={{ marginTop: 4 }}>
                    Reconcile — {c.reconcile}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ))}
    </PassLayout>
  )
}

/**
 * Exception queue — hearing-reported and stuck protest cases needing operator action.
 * Plants: trim-ct-op-exceptions, trim-ct-op-hearing-report-review, trim-ct-op-inbound-board
 * Route: /ct/operator/work/exceptions
 */
import { useState } from "react";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { CtButton, CtEmpty, CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { PROTEST_CASES } from "../trim-data/protestCases";
import { PROTEST_STATE_META } from "../trim-data/trimTypes";
import { auditForCase } from "../trim-data/trimAudit";
import { formatUsd } from "../../shared/format";
import type { ProtestCase } from "../trim-data/trimTypes";

const EXCEPTION_STATUSES = ["hearing_reported", "denied"] as const;

export function OperatorExceptions() {
  useFocusFromQuery();
  const [cases, setCases] = useState<ProtestCase[]>(
    PROTEST_CASES.filter((c) => (EXCEPTION_STATUSES as readonly string[]).includes(c.status))
  );

  function resolve(id: string) {
    setCases((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div style={{ padding: "20px 40px 32px", maxWidth: 860 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 12.5, color: t.label }}>
          Hearing-reported cases awaiting operator review, and denied cases needing escalation assessment.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-exceptions" style={{ borderRadius: 8 }}>
        {cases.length === 0 ? (
          <CtPanel>
            <CtEmpty label="No exceptions right now — all clear." />
          </CtPanel>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cases.map((c) => {
              const meta = PROTEST_STATE_META[c.status];
              const entries = auditForCase(c.id);
              return (
                <CtPanel
                  key={c.id}
                  title={c.ownerEntityName}
                  right={<span style={{ fontSize: 11, color: t.muted }}>{c.parcelId}</span>}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 11, color: t.label }}>Assessed</div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>{formatUsd(c.assessedValue)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: t.label }}>County</div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>{c.county}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: t.label }}>Status</div>
                      <CtStatusTag label={meta.label} tone={meta.tone} />
                    </div>
                  </div>

                  {entries.length > 0 && (
                    <div style={{ borderTop: `1px solid ${t.stroke}`, paddingTop: 12, marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                        Case audit glance
                      </div>
                      {entries.slice(-3).map((e) => (
                        <div key={e.id} style={{ display: "flex", gap: 10, fontSize: 12, marginBottom: 4 }}>
                          <span style={{ color: t.muted, flexShrink: 0, width: 100 }}>{e.timestamp}</span>
                          <span style={{ color: t.label }}>
                            <span style={{ fontWeight: 600, color: t.ink }}>{e.actor}</span> — {e.action}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <CtPlantedBlock id="trim-ct-op-hearing-report-review" title="Hearing report review">
                    Worker-submitted board outcome — review before closing hearing state.
                    Reported: {c.reducedValue ? `Reduced to ${formatUsd(c.reducedValue)}` : "Outcome pending"}
                  </CtPlantedBlock>

                  <CtPlantedBlock id="trim-ct-op-inbound-board" title="Inbound board mail">
                    Match inbound ARB decision letter / e-notice to this parcel — {c.parcelId} · {c.countyAppraisalDistrict}.
                  </CtPlantedBlock>

                  <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                    <SurfaceBoundary id="trim-ct-op-exceptions" inline>
                      <CtButton variant="primary" onClick={() => resolve(c.id)}>
                        Confirm &amp; close
                      </CtButton>
                    </SurfaceBoundary>
                    <CtButton variant="secondary">Escalate</CtButton>
                  </div>
                </CtPanel>
              );
            })}
          </div>
        )}
      </SurfaceBoundary>
    </div>
  );
}

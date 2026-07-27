/**
 * Audit log — immutable action trail under Appointment of Agent.
 * Plants: trim-ct-op-audit, trim-ct-op-standing-snapshot
 * Route: /ct/operator/work/audit
 */
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { CtPanel, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { TRIM_AUDIT } from "../trim-data/trimAudit";
import { PROTEST_CASES } from "../trim-data/protestCases";

const CASE_MAP = Object.fromEntries(PROTEST_CASES.map((c) => [c.id, c]));

export function OperatorAudit() {
  useFocusFromQuery();

  return (
    <div style={{ padding: "32px 40px", maxWidth: 860 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Audit log</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Immutable action trail under Appointment of Agent across all protest cases.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-audit" style={{ borderRadius: 8 }}>
        <CtPanel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                {["Timestamp", "Case / Parcel", "Actor", "Action"].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: t.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                      padding: "0 10px 10px 4px",
                      borderBottom: `1px solid ${t.stroke}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...TRIM_AUDIT].reverse().map((e) => {
                const c = CASE_MAP[e.caseId];
                return (
                  <tr key={e.id} style={{ borderBottom: `1px solid ${t.stroke}` }}>
                    <td style={{ padding: "10px 10px 10px 4px", fontSize: 11.5, color: t.muted, whiteSpace: "nowrap" }}>
                      {e.timestamp}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>
                      {c ? c.parcelId : e.caseId}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12.5, fontWeight: 500, color: t.ink }}>
                      {e.actor}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{e.action}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CtPanel>
      </SurfaceBoundary>

      <CtPlantedBlock id="trim-ct-op-standing-snapshot" title="Standing snapshot">
        Appointment of Agent basis snapshot — TX 50-162 on file for all authorized parcels. TDLR agent of
        record current. Snapshot dated 2025-04-15.
      </CtPlantedBlock>
    </div>
  );
}

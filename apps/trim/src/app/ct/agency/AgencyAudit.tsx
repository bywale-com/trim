/**
 * Audit — full immutable action trail under POA, across the whole book (not
 * scoped to one exception case, unlike the glance embedded in Exceptions).
 * Surface: agency-ct-audit.
 */
import { CtPanel, ctPalette as t } from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { AUDIT_LOG } from "../data/audit";
import { RECOVERY_CASES } from "../data/cases";

export function AgencyAudit() {
  useFocusFromQuery();
  const companyById = Object.fromEntries(RECOVERY_CASES.map((c) => [c.id, c.companyName]));
  const entries = [...AUDIT_LOG].sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));

  return (
    <div style={{ padding: "20px 40px 32px", maxWidth: 860 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 12.5, color: t.label }}>
          {entries.length} logged actions under POA, across the whole book — answer for automation without
          re-deriving events.
        </div>
      </div>

      <SurfaceBoundary id="agency-ct-audit" style={{ borderRadius: 8 }}>
        <CtPanel>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {entries.map((entry) => (
              <div
                key={entry.id}
                style={{ display: "flex", gap: 14, paddingBottom: 10, borderBottom: `1px solid ${t.stroke}` }}
              >
                <span style={{ color: t.muted, flexShrink: 0, width: 84, fontSize: 12 }}>{entry.timestamp}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, color: t.label }}>
                    <span style={{ fontWeight: 600, color: t.ink }}>{entry.actor}</span> — {entry.action}
                  </div>
                  <div style={{ fontSize: 11, color: t.muted, marginTop: 2 }}>
                    {companyById[entry.caseId] ?? entry.caseId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CtPanel>
      </SurfaceBoundary>

      <CtPlantedBlock id="agency-ct-standing-snapshot" title="Standing basis snapshot">
        POA on file for 8 active clients · 2 pending officer re-affirmation · last snapshot 2026-07-20.
      </CtPlantedBlock>
    </div>
  );
}

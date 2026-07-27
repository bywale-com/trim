/**
 * Jurisdiction & licensure — per-county PTC capacity, fee cap, appeal window, rollout gate.
 * Plants: trim-ct-op-jurisdiction, trim-ct-op-ptc-capacity, trim-ct-op-rollout-gate,
 *         trim-ct-op-entity-signer, trim-ct-op-appeal-window, trim-ct-op-fee-cap,
 *         trim-ct-op-licensed-roster
 * Route: /ct/operator/settings/jurisdiction
 */
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { TRIM_JURISDICTIONS } from "../trim-data/trimJurisdictions";

function gateTag(g: "open" | "blocked" | "limited") {
  if (g === "open") return <CtStatusTag label="Open" tone="success" />;
  if (g === "blocked") return <CtStatusTag label="Blocked" tone="danger" />;
  return <CtStatusTag label="Limited" tone="warning" />;
}

export function OperatorJurisdiction() {
  useFocusFromQuery();

  const activeCount = TRIM_JURISDICTIONS.filter((j) => j.rolloutGate === "open").length;
  const blockedCount = TRIM_JURISDICTIONS.filter((j) => j.rolloutGate === "blocked").length;

  return (
    <div style={{ padding: "32px 40px", maxWidth: 1020 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Jurisdiction &amp; licensure</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          {activeCount} open · {blockedCount} blocked — per-county PTC capacity, fee cap, appeal window.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-jurisdiction" style={{ borderRadius: 8 }}>
        <CtPanel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                {["County (CAD)", "PTC capacity", "Fee cap", "Appeal deadline", "E-file", "Gate"].map((h) => (
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
              {TRIM_JURISDICTIONS.map((j) => (
                <tr key={j.countyCode} style={{ borderBottom: `1px solid ${t.stroke}` }}>
                  <td style={{ padding: "10px 10px 10px 4px" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{j.countyName}</div>
                    <div style={{ fontSize: 11, color: t.muted }}>{j.cad}</div>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <div style={{ fontSize: 12.5, color: t.ink }}>{j.ptcUsed} / {j.ptcCapacity}</div>
                    <div style={{ fontSize: 11, color: j.ptcUsed >= j.ptcCapacity ? t.red : t.muted }}>
                      {j.ptcCapacity - j.ptcUsed} slots free
                    </div>
                  </td>
                  <td style={{ padding: "10px", fontSize: 12.5, color: t.ink }}>{j.feeCapPct}%</td>
                  <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{j.appealDeadline}</td>
                  <td style={{ padding: "10px" }}>
                    <CtStatusTag label={j.eFileAvailable ? "Yes" : "No"} tone={j.eFileAvailable ? "success" : "neutral"} />
                  </td>
                  <td style={{ padding: "10px" }}>{gateTag(j.rolloutGate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CtPanel>
      </SurfaceBoundary>

      <CtPlantedBlock id="trim-ct-op-ptc-capacity" title="PTC capacity">
        TX PTC senior-sponsor capacity: 10 parcels per licensed senior sponsor. Dallas County at 8/10 —
        flag new enrollments. Harris County at 7/10 — capacity available.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-rollout-gate" title="Rollout gate">
        {activeCount} counties open for filing · {blockedCount} blocked pending TDLR licensure or CAMA readiness.
        El Paso County blocked — TDLR agent of record not assigned.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-entity-signer" title="Entity signer gate">
        TX rule: authorized officer with deed authority or TDLR-licensed agent of record may sign TX 50-162.
        Managing Members, GPs, and CEOs qualify. Board resolutions accepted for entities with governance structures.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-appeal-window" title="Appeal window calendar">
        TX protest deadline: May 15 or 30 days from notice, whichever is later (TX Tax Code § 41.44).
        ARB hearings typically July–September. E-file deadlines enforced at midnight.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-fee-cap" title="Contingency fee cap">
        TX PTC statutory contingency cap: 20% of first-year tax savings (TX Occ. Code § 1152.1045).
        Hard block at Authorize — system enforces cap before signature.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-licensed-roster" title="Licensed agent roster">
        TDLR-licensed agents of record by county:
        Harris — Maria Gutierrez (#12309) · Bexar — David Okafor (#14872) ·
        Travis — Sarah Chen (#10044) · Dallas — James Rivera (#11234) ·
        Tarrant — Aisha Patel (#13801). El Paso — no agent assigned (blocked).
      </CtPlantedBlock>
    </div>
  );
}

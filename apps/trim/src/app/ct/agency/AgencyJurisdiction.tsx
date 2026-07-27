/** Jurisdiction table — per-state finder registration; hard block where Trove isn't registered. Surface: agency-ct-jurisdiction. */
import { useState } from "react";
import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { filingMethodLabel, JURISDICTIONS } from "../data/jurisdictions";

const thStyle = {
  fontSize: 11,
  fontWeight: 600 as const,
  color: t.muted,
  textTransform: "uppercase" as const,
  letterSpacing: "0.03em",
  padding: "0 10px 10px 4px",
  borderBottom: `1px solid ${t.stroke}`,
};

export function AgencyJurisdiction() {
  useFocusFromQuery();
  const [selectedCode, setSelectedCode] = useState<string | null>("OR");
  const registeredCount = JURISDICTIONS.filter((j) => j.status === "registered").length;
  const blockedCount = JURISDICTIONS.length - registeredCount;
  const selected = JURISDICTIONS.find((j) => j.code === selectedCode);

  return (
    <div style={{ padding: "20px 40px 32px", maxWidth: 920 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 12.5, color: t.label }}>
          {registeredCount} states registered · {blockedCount} blocked. Outreach and filing are hard-blocked where
          Trove isn't registered — gate runs before a case reaches notified.
        </div>
      </div>

      <SurfaceBoundary id="agency-ct-jurisdiction" style={{ borderRadius: 8 }}>
        <CtPanel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th style={thStyle}>State</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Registration model</th>
                <th style={thStyle}>
                  <SurfaceBoundary id="agency-ct-filing-method" inline>
                    Filing method
                  </SurfaceBoundary>
                </th>
                <th style={thStyle}>
                  <SurfaceBoundary id="agency-ct-expected-days" inline>
                    Expected days
                  </SurfaceBoundary>
                </th>
                <th style={thStyle}>
                  <SurfaceBoundary id="agency-ct-fee-cap" inline>
                    Fee cap %
                  </SurfaceBoundary>
                </th>
                <th style={thStyle}>Note</th>
              </tr>
            </thead>
            <tbody>
              {JURISDICTIONS.map((j) => (
                <tr
                  key={j.code}
                  style={{
                    borderBottom: `1px solid ${t.stroke}`,
                    background: selectedCode === j.code ? t.accentBg : undefined,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedCode(j.code)}
                >
                  <td style={{ padding: "10px 10px 10px 4px", fontSize: 13, fontWeight: 600, color: t.ink }}>
                    {j.name} <span style={{ color: t.muted, fontWeight: 500 }}>({j.code})</span>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <CtStatusTag
                      label={j.status === "registered" ? "Registered" : "Blocked"}
                      tone={j.status === "registered" ? "success" : "danger"}
                    />
                  </td>
                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{j.model}</td>
                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>
                    <SurfaceBoundary id="agency-ct-filing-method" inline>
                      {filingMethodLabel(j.filingMethod)}
                    </SurfaceBoundary>
                  </td>
                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>
                    <SurfaceBoundary id="agency-ct-expected-days" inline>
                      {j.expectedDays != null ? j.expectedDays : "—"}
                    </SurfaceBoundary>
                  </td>
                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>
                    <SurfaceBoundary id="agency-ct-fee-cap" inline>
                      {j.feeCapPct != null ? `${j.feeCapPct}%` : "—"}
                    </SurfaceBoundary>
                  </td>
                  <td style={{ padding: "10px", fontSize: 11.5, color: t.muted, maxWidth: 220 }}>
                    {j.note ?? (j.renewalDue ? `Renewal due ${j.renewalDue}` : "")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CtPanel>
      </SurfaceBoundary>

      <CtPlantedBlock id="agency-ct-row-completeness" title="Row completeness gate">
        {selected
          ? `${selected.code}: ${selected.status === "registered" ? "Ready" : "Blocked"} — filing method, fee cap, and license fields ${selected.status === "registered" && selected.filingMethod ? "complete" : "incomplete"}.`
          : "Select a row to check completeness before outreach."}
      </CtPlantedBlock>

      <CtPlantedBlock id="agency-ct-license-coverage" title="License coverage summary">
        11 registered · 2 blocked · IL and OR require licensed individual of record.
      </CtPlantedBlock>

      <CtPlantedBlock id="agency-ct-licensed-roster" title="Licensed individual roster">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span>Jane M. Reyes — IL (expires 2027-03-15)</span>
          <span>Robert K. Hale — OR (renewal due 2026-09-30)</span>
        </div>
      </CtPlantedBlock>

      {selected?.code === "OR" ? (
        <CtPlantedBlock id="agency-ct-or-license-slot" title="OR license document slot">
          Oregon POA bundle requires current finder license PDF attached — renewal due 2026-09-30.
        </CtPlantedBlock>
      ) : null}

      <CtPlantedBlock id="agency-ct-submit-approval" title="Submit-for-approval step">
        {selected?.status === "registered" && (selected.code === "IL" || selected.code === "OR")
          ? `${selected.code} filings route through licensed-individual approval before submit.`
          : "No pre-approval required for selected state."}
      </CtPlantedBlock>
    </div>
  );
}

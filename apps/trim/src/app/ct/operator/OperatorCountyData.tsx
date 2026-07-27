/**
 * County data health — roll import status, CAMA freshness, comp coverage, e-file availability.
 * Plants: trim-ct-op-county-data
 * Route: /ct/operator/work/county-data
 */
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { TRIM_JURISDICTIONS } from "../trim-data/trimJurisdictions";

function freshnessTag(f: "current" | "stale" | "unknown") {
  if (f === "current") return <CtStatusTag label="Current" tone="success" />;
  if (f === "stale") return <CtStatusTag label="Stale" tone="warning" />;
  return <CtStatusTag label="Unknown" tone="neutral" />;
}

function rollTag(s: "ok" | "pending" | "failed") {
  if (s === "ok") return <CtStatusTag label="OK" tone="success" />;
  if (s === "pending") return <CtStatusTag label="Pending" tone="warning" />;
  return <CtStatusTag label="Failed" tone="danger" />;
}

function coverageTag(c: "high" | "medium" | "low") {
  if (c === "high") return <CtStatusTag label="High" tone="success" />;
  if (c === "medium") return <CtStatusTag label="Medium" tone="warning" />;
  return <CtStatusTag label="Low" tone="danger" />;
}

export function OperatorCountyData() {
  useFocusFromQuery();

  return (
    <div style={{ padding: "32px 40px", maxWidth: 960 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>County data health</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Roll import status, CAMA freshness, comp coverage, and e-file availability per county.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-county-data" style={{ borderRadius: 8 }}>
        <CtPanel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                {["County (CAD)", "Roll import", "CAMA", "Comp coverage", "E-file", "Note"].map((h) => (
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
                  <td style={{ padding: "10px" }}>{rollTag(j.rollImportStatus)}</td>
                  <td style={{ padding: "10px" }}>{freshnessTag(j.camaFreshness)}</td>
                  <td style={{ padding: "10px" }}>{coverageTag(j.compCoverage)}</td>
                  <td style={{ padding: "10px" }}>
                    <CtStatusTag label={j.eFileAvailable ? "Yes" : "No"} tone={j.eFileAvailable ? "success" : "neutral"} />
                  </td>
                  <td style={{ padding: "10px", fontSize: 11.5, color: t.muted }}>{j.note ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CtPanel>
      </SurfaceBoundary>
    </div>
  );
}

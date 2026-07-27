/**
 * Operator Clients module — every Owner account in the book by protest-case admission state.
 * Plants: trim-ct-op-portfolio, trim-ct-op-detected-blocked, trim-ct-op-invoice-collection,
 *         trim-ct-op-revoke-representation
 * Route: /ct/operator/clients
 */
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { PROTEST_CASES } from "../trim-data/protestCases";
import { PROTEST_STATE_META } from "../trim-data/trimTypes";
import { formatUsd } from "../../shared/format";

const OPERATOR_BOOK = PROTEST_CASES;

export function OperatorClients() {
  useFocusFromQuery();

  const detectedCount = OPERATOR_BOOK.filter((c) => c.status === "detected" || c.status === "blocked_jurisdiction").length;
  const invoicedCount = OPERATOR_BOOK.filter((c) => c.status === "invoiced").length;

  return (
    <div style={{ padding: "32px 40px", maxWidth: 960 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Clients</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          {OPERATOR_BOOK.length} protest cases in book — admission state at a glance.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-portfolio" style={{ borderRadius: 8 }}>
        <CtPanel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                {["Owner / Entity", "Parcel", "County", "Assessed", "Status", "Days"].map((h) => (
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
              {OPERATOR_BOOK.map((c) => {
                const meta = PROTEST_STATE_META[c.status];
                return (
                  <tr key={c.id} style={{ borderBottom: `1px solid ${t.stroke}` }}>
                    <td style={{ padding: "10px 10px 10px 4px", fontSize: 13, fontWeight: 600, color: t.ink }}>
                      {c.ownerEntityName}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{c.parcelId}</td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{c.county}</td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{formatUsd(c.assessedValue)}</td>
                    <td style={{ padding: "10px" }}>
                      <CtStatusTag label={meta.label} tone={meta.tone} />
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{c.daysInState}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CtPanel>
      </SurfaceBoundary>

      <CtPlantedBlock id="trim-ct-op-detected-blocked" title="Detected — blocked parcels">
        {detectedCount} parcel{detectedCount !== 1 ? "s" : ""} detected or blocked by jurisdiction gate —
        outreach held pending TDLR licensure or CAMA data readiness.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-invoice-collection" title="Invoice collection status">
        {invoicedCount} open invoice{invoicedCount !== 1 ? "s" : ""} — contingency fee billed against
        documented tax savings; collection pending owner payment.
      </CtPlantedBlock>

      <CtPlantedBlock id="trim-ct-op-revoke-representation" title="Revoke representation">
        No active revocation requests — Appointment of Agent on file for all authorized parcels.
      </CtPlantedBlock>
    </div>
  );
}

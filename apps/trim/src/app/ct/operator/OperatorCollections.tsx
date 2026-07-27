/**
 * Collections — invoiced-not-collected protest cases; dunning queue.
 * Plants: trim-ct-op-collections
 * Route: /ct/operator/work/collections
 */
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPanel, CtStatusTag, CtEmpty, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { PROTEST_CASES } from "../trim-data/protestCases";
import { formatUsd } from "../../shared/format";

const INVOICED = PROTEST_CASES.filter((c) => c.status === "invoiced" || c.status === "collected");

export function OperatorCollections() {
  useFocusFromQuery();

  return (
    <div style={{ padding: "32px 40px", maxWidth: 860 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Collections</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Contingency invoices against documented tax savings — dunning queue and ACH/card status.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-collections" style={{ borderRadius: 8 }}>
        {INVOICED.length === 0 ? (
          <CtPanel>
            <CtEmpty label="No open invoices." />
          </CtPanel>
        ) : (
          <CtPanel>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  {["Owner / Parcel", "County", "Tax savings", "Invoice amount", "Contingency %", "Status"].map((h) => (
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
                {INVOICED.map((c) => (
                  <tr key={c.id} style={{ borderBottom: `1px solid ${t.stroke}` }}>
                    <td style={{ padding: "10px 10px 10px 4px" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{c.ownerEntityName}</div>
                      <div style={{ fontSize: 11, color: t.muted }}>{c.parcelId}</div>
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{c.county}</td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>
                      {c.taxSavings ? formatUsd(c.taxSavings) : "—"}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, fontWeight: 500, color: t.ink }}>
                      {c.invoiceAmount ? formatUsd(c.invoiceAmount) : "Pending"}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>
                      {c.contingencyPct}%
                    </td>
                    <td style={{ padding: "10px" }}>
                      <CtStatusTag
                        label={c.status === "collected" ? "Collected" : "Pending collection"}
                        tone={c.status === "collected" ? "success" : "warning"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CtPanel>
        )}
      </SurfaceBoundary>
    </div>
  );
}

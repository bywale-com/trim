/**
 * Worker dispatch — hearing-queued cases awaiting Worker pickup; Worker roster.
 * Plants: trim-ct-op-worker-dispatch
 * Route: /ct/operator/work/dispatch
 */
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtButton, CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { WORKER_QUEUE } from "../trim-data/workerQueue";
import { formatUsd } from "../../shared/format";

const WORKER_ROSTER = [
  { id: "wk-001", name: "Thomas Reyes", counties: ["Bexar", "Medina"], available: false, assigned: 1 },
  { id: "wk-002", name: "Angela Kim", counties: ["Harris", "Fort Bend"], available: false, assigned: 1 },
  { id: "wk-003", name: "Marcus Johnson", counties: ["Dallas", "Tarrant"], available: true, assigned: 0 },
  { id: "wk-004", name: "Priya Nair", counties: ["Travis", "Hays"], available: true, assigned: 0 },
];

export function OperatorDispatch() {
  useFocusFromQuery();

  const available = WORKER_QUEUE.filter((a) => a.status === "available");
  const assigned = WORKER_QUEUE.filter((a) => a.status === "assigned");

  return (
    <div style={{ padding: "32px 40px", maxWidth: 960 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Worker dispatch</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Hearing-queued cases awaiting Worker pickup · Worker roster by county/board availability.
        </div>
      </div>

      <SurfaceBoundary id="trim-ct-op-worker-dispatch" style={{ borderRadius: 8 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <CtPanel title={`Available hearings (${available.length})`}>
            {available.length === 0 ? (
              <div style={{ fontSize: 13, color: t.muted, padding: "12px 0" }}>No hearings awaiting assignment.</div>
            ) : (
              available.map((a) => (
                <div
                  key={a.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom: `1px solid ${t.stroke}`,
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{a.parcelId}</div>
                    <div style={{ fontSize: 11.5, color: t.muted }}>
                      {a.ownerEntityName} · {a.county} · {a.hearingDate} {a.hearingTime}
                    </div>
                    <div style={{ fontSize: 11.5, color: t.label, marginTop: 2 }}>
                      {a.hearingBoard} · {a.hearingType.replace(/-/g, " ")} ·{" "}
                      {formatUsd(a.assessedValue)} assessed
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CtStatusTag label={a.packetReady ? "Packet ready" : "Packet pending"} tone={a.packetReady ? "success" : "warning"} />
                    <CtButton variant="primary">Assign worker</CtButton>
                  </div>
                </div>
              ))
            )}
          </CtPanel>

          <CtPanel title="Worker roster">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  {["Worker", "Counties", "Assigned", "Status"].map((h) => (
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
                {WORKER_ROSTER.map((w) => (
                  <tr key={w.id} style={{ borderBottom: `1px solid ${t.stroke}` }}>
                    <td style={{ padding: "10px 10px 10px 4px", fontSize: 13, fontWeight: 600, color: t.ink }}>
                      {w.name}
                    </td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{w.counties.join(", ")}</td>
                    <td style={{ padding: "10px", fontSize: 12, color: t.label }}>{w.assigned}</td>
                    <td style={{ padding: "10px" }}>
                      <CtStatusTag label={w.available ? "Available" : "Assigned"} tone={w.available ? "success" : "neutral"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CtPanel>

          {assigned.length > 0 && (
            <CtPanel title={`Assigned hearings (${assigned.length})`}>
              {assigned.map((a) => (
                <div
                  key={a.id}
                  style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${t.stroke}`, flexWrap: "wrap", gap: 10 }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{a.parcelId}</div>
                    <div style={{ fontSize: 11.5, color: t.muted }}>
                      {a.hearingDate} · {a.hearingBoard} · Worker: {a.workerName}
                    </div>
                  </div>
                  <CtStatusTag label="Assigned" tone="accent" />
                </div>
              ))}
            </CtPanel>
          )}
        </div>
      </SurfaceBoundary>
    </div>
  );
}

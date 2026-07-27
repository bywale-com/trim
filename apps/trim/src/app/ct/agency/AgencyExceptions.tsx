/** Exception queue — kicked_back cases, case audit glance, resubmit/clear. Surface: agency-ct-exceptions. */
import { CtButton, CtEmpty, CtPanel, ctPalette as t } from "../../shared/primitives";
import { formatUsd } from "../../shared/format";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { auditForCase } from "../data/audit";
import { KICKBACK_REASON_LABEL } from "../data/types";
import { useAgencyCases } from "./useAgencyCases";

export function AgencyExceptions() {
  useFocusFromQuery();
  const { cases, resolveException } = useAgencyCases();
  const exceptions = Object.values(cases).filter((c) => c.status === "kicked_back");

  return (
    <div style={{ padding: "20px 40px 32px", maxWidth: 820 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 12.5, color: t.label }}>
          Procedural denials only — automation isn't permanently stuck once the Agency Owner clears these.
        </div>
      </div>

      <SurfaceBoundary id="agency-ct-exceptions" style={{ borderRadius: 8 }}>
        {exceptions.length === 0 ? (
          <CtPanel>
            <CtEmpty label="No exceptions right now — all clear." />
          </CtPanel>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {exceptions.map((c) => (
              <CtPanel
                key={c.id}
                title={c.companyName}
                right={<span style={{ fontSize: 11, color: t.muted }}>{c.caseRef}</span>}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 11, color: t.label }}>Amount</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>{formatUsd(c.amount)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: t.label }}>Jurisdiction</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>{c.jurisdiction}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: t.label }}>Reason</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#B45309" }}>
                      {c.kickbackReason ? KICKBACK_REASON_LABEL[c.kickbackReason] : "—"}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${t.stroke}`,
                    paddingTop: 12,
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    Case audit glance
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {auditForCase(c.id).map((entry) => (
                      <div key={entry.id} style={{ display: "flex", gap: 10, fontSize: 12 }}>
                        <span style={{ color: t.muted, flexShrink: 0, width: 78 }}>{entry.timestamp}</span>
                        <span style={{ color: t.label }}>
                          <span style={{ fontWeight: 600, color: t.ink }}>{entry.actor}</span> — {entry.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <SurfaceBoundary id="agency-ct-resubmit" inline>
                  <CtButton variant="primary" onClick={() => resolveException(c.id)}>
                    Resubmit
                  </CtButton>
                </SurfaceBoundary>
              </CtPanel>
            ))}
          </div>
        )}
      </SurfaceBoundary>
    </div>
  );
}

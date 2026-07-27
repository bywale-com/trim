/** Status facts — filing / kicked_back / filed / paid / invoiced, as facts, not a dashboard grind. Surfaces: biz-ct-status, biz-ct-paid, biz-ct-invoice. */
import { CtFact, CtFactGrid, CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { formatDate, formatUsd } from "../../shared/format";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { KICKBACK_REASON_LABEL } from "../data/types";
import { STATUS_META } from "../data/statusMeta";
import type { RecoveryCase } from "../data/types";

export function StatusFacts({ recoveryCase }: { recoveryCase: RecoveryCase }) {
  const meta = STATUS_META[recoveryCase.status];
  const isPaidOrInvoiced = recoveryCase.status === "paid_claimant" || recoveryCase.status === "invoiced";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <CtPanel
        title="Status"
        right={<CtStatusTag label={meta.label} tone={meta.tone} />}
      >
        <SurfaceBoundary id="biz-ct-status" style={{ padding: 4 }}>
          <CtFactGrid columns={3}>
            <CtFact label="Amount" value={formatUsd(recoveryCase.amount)} />
            <CtFact label="Contingency %" value={recoveryCase.contingencyPct ? `${recoveryCase.contingencyPct}% — locked` : "—"} />
            <CtFact label="Days in current state" value={`${recoveryCase.daysInState}`} />
          </CtFactGrid>

          {recoveryCase.status === "kicked_back" && recoveryCase.kickbackReason ? (
            <div
              style={{
                marginTop: 16,
                padding: "12px 14px",
                borderRadius: 6,
                background: "rgba(217,119,6,0.10)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, color: "#B45309" }}>
                Needs a fix — {KICKBACK_REASON_LABEL[recoveryCase.kickbackReason]}
              </span>
              <span style={{ fontSize: 11.5, color: t.label }}>
                This is a procedural denial, not a rejection. The Agency Owner is correcting and resubmitting under
                your existing authorization — no action needed from you.
              </span>
            </div>
          ) : null}

          {recoveryCase.status === "filing" || recoveryCase.status === "filed" ? (
            <div style={{ marginTop: 16, fontSize: 12, color: t.label }}>
              Packet filed with {recoveryCase.agency}. We'll update this fact when the state responds.
            </div>
          ) : null}

          <div
            style={{
              marginTop: 16,
              paddingTop: 14,
              borderTop: `1px solid ${t.stroke}`,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <CtStatusTag label="Annual re-search enrolled" tone="neutral" />
            <span style={{ fontSize: 11, color: t.muted }}>New records under your company's name are checked yearly.</span>
          </div>

          {recoveryCase.status === "filing" || recoveryCase.status === "filed" ? (
            <div style={{ marginTop: 10, fontSize: 12, color: t.label }}>
              Expected window from Jurisdiction table — {recoveryCase.jurisdiction} turnaround per agency settings.
            </div>
          ) : null}

          <CtPlantedBlock id="biz-ct-legal-research-flag" title="Legal research flag">
            Legal research hold — flags case for counsel review before resubmit.
          </CtPlantedBlock>

          <CtPlantedBlock id="biz-ct-re-affirm" title="Re-affirm door">
            Authorization stale? Re-affirm door — officer re-signs under existing terms.
          </CtPlantedBlock>

          <CtPlantedBlock id="biz-ct-withdraw" title="Withdraw door">
            Withdraw filed claim — invite before form, available while packet is active.
          </CtPlantedBlock>

          <CtPlantedBlock id="biz-ct-revised-amount" title="Revised Amount Workflow">
            State revised amount — confirm revised figure before invoice.
          </CtPlantedBlock>

          <CtPlantedBlock id="biz-ct-wage-legal" title="Wage property legal review gate">
            Wage property detected — legal review gate before filing proceeds.
          </CtPlantedBlock>

          <CtPlantedBlock id="biz-ct-denied-standing" title="Denied standing admission branch">
            Denied standing — admission branch; successor docs or appeal path.
          </CtPlantedBlock>
        </SurfaceBoundary>
      </CtPanel>

      {isPaidOrInvoiced ? (
        <CtPanel title="Paid / invoice">
          <CtFactGrid columns={2}>
            <SurfaceBoundary id="biz-ct-paid" inline style={{ width: "100%" }}>
              <CtFact
                label="State paid you"
                value={recoveryCase.paidDate ? `${formatUsd(recoveryCase.amount)} on ${formatDate(recoveryCase.paidDate)}` : "Pending"}
              />
            </SurfaceBoundary>
            <SurfaceBoundary id="biz-ct-invoice" inline style={{ width: "100%" }}>
              <CtFact
                label="Trove's invoice"
                value={
                  recoveryCase.status === "invoiced" && recoveryCase.invoiceAmount
                    ? `${formatUsd(recoveryCase.invoiceAmount)} — settled`
                    : "Issuing shortly"
                }
              />
            </SurfaceBoundary>
          </CtFactGrid>
          <div style={{ marginTop: 12, fontSize: 11.5, color: t.muted }}>
            {recoveryCase.agency} paid your company directly — Trove never held these funds. The invoice above is
            our pre-set cut, billed after the fact.
          </div>

          <CtPlantedBlock id="biz-ct-bank-confirm" title="Bank confirm upload door">
            Upload bank confirmation showing state disbursement received.
          </CtPlantedBlock>

          <CtPlantedBlock id="biz-ct-invoice-dispute" title="Invoice dispute item">
            Dispute an invoice line — invite before form.
          </CtPlantedBlock>
        </CtPanel>
      ) : null}
    </div>
  );
}

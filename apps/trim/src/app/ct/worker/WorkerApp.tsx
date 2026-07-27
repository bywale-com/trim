/**
 * Worker desk click-through — hearing queue → packet → assignment → hearing → outcome → pay.
 * Plants all trim-ct-worker-* surfaces (core + SME).
 * Route: /ct/worker
 */
import { useState } from "react";
import { Link } from "react-router";
import {
  CtButton,
  CtFact,
  CtFactGrid,
  CtPanel,
  CtStatusTag,
  ctPalette as t,
} from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { WORKER_QUEUE } from "../trim-data/workerQueue";
import { formatUsd } from "../../shared/format";
import type { WorkerAssignment } from "../trim-data/trimTypes";

type WorkerView = "queue" | "packet" | "assignment" | "hearing" | "outcome" | "pay";

// ────────────────────────────────────────────────────────────────────────────
// Hearing Queue
// ────────────────────────────────────────────────────────────────────────────

function HearingQueue({
  assignments,
  onSelect,
}: {
  assignments: WorkerAssignment[];
  onSelect: (id: string) => void;
}) {
  const available = assignments.filter((a) => a.status === "available");
  const mine = assignments.filter((a) => a.status === "assigned" && a.workerId === "wk-self");
  const completed = assignments.filter((a) => a.status === "completed");

  return (
    <SurfaceBoundary id="trim-ct-worker-queue">
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Hearing queue</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Available hearing assignments in your county/board coverage.
        </div>
      </div>

      {available.length > 0 && (
        <CtPanel title={`Available (${available.length})`} style={{ marginBottom: 16 }}>
          {available.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => onSelect(a.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "12px 10px",
                width: "100%",
                border: "none",
                borderBottom: `1px solid ${t.stroke}`,
                background: "transparent",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{a.parcelId}</div>
                <div style={{ fontSize: 11.5, color: t.muted, marginTop: 2 }}>
                  {a.ownerEntityName} · {a.county} · {a.hearingDate} {a.hearingTime}
                </div>
                <div style={{ fontSize: 11.5, color: t.label }}>
                  {a.hearingBoard} · {a.hearingType.replace(/-/g, " ")}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <CtStatusTag label={a.packetReady ? "Packet ready" : "Packet pending"} tone={a.packetReady ? "success" : "warning"} />
                <span style={{ fontSize: 11.5, color: t.label }}>{formatUsd(a.assessedValue)} assessed</span>
              </div>
            </button>
          ))}
        </CtPanel>
      )}

      {mine.length > 0 && (
        <CtPanel title={`My assignments (${mine.length})`} style={{ marginBottom: 16 }}>
          {mine.map((a) => (
            <div key={a.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 4px", borderBottom: `1px solid ${t.stroke}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{a.parcelId}</div>
                <div style={{ fontSize: 11.5, color: t.muted }}>{a.hearingDate} · {a.hearingBoard}</div>
              </div>
              <CtStatusTag label="Assigned to me" tone="accent" />
            </div>
          ))}
        </CtPanel>
      )}

      {completed.length > 0 && (
        <CtPanel title={`Completed (${completed.length})`}>
          {completed.map((a) => (
            <div key={a.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 4px", borderBottom: `1px solid ${t.stroke}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{a.parcelId}</div>
                <div style={{ fontSize: 11.5, color: t.muted }}>{a.county} · Worker: {a.workerName}</div>
              </div>
              <CtStatusTag label={a.outcome === "reduced" ? "Reduced" : a.outcome === "denied" ? "Denied" : "Continued"} tone={a.outcome === "reduced" ? "success" : a.outcome === "denied" ? "danger" : "warning"} />
            </div>
          ))}
        </CtPanel>
      )}
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Case packet
// ────────────────────────────────────────────────────────────────────────────

function CasePacket({ a, onAccept, onDecline, onBack }: {
  a: WorkerAssignment;
  onAccept: () => void;
  onDecline: () => void;
  onBack: () => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <button
        type="button"
        onClick={onBack}
        style={{ fontFamily: "inherit", fontSize: 12, color: t.muted, background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        ← Queue
      </button>

      <SurfaceBoundary id="trim-ct-worker-packet">
        <CtPanel title="Case packet" right={<CtStatusTag label={a.packetReady ? "Ready" : "Pending"} tone={a.packetReady ? "success" : "warning"} />}>
          <CtFactGrid columns={2}>
            <CtFact label="Parcel ID" value={a.parcelId} />
            <CtFact label="County (CAD)" value={`${a.county} (${a.countyAppraisalDistrict})`} />
            <CtFact label="Owner entity" value={a.ownerEntityName} />
            <CtFact label="Assessed value" value={formatUsd(a.assessedValue)} />
            <CtFact label="Evidence value" value={formatUsd(a.evidenceValue)} />
            <CtFact label="Est. excess" value={formatUsd(a.assessedValue - a.evidenceValue)} />
          </CtFactGrid>

          <CtPlantedBlock id="trim-ct-worker-evidence-preview" title="Evidence preview" style={{ marginTop: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 12, color: t.ink }}>▸ 6 comparable sales (comps) — Q3/Q4 {new Date().getFullYear() - 1}</div>
              <div style={{ fontSize: 12, color: t.ink }}>▸ Uniformity equity table — 4 like-kind parcels</div>
              <div style={{ fontSize: 12, color: t.ink }}>▸ Income approach summary (if rent roll uploaded)</div>
              <div style={{ fontSize: 12, color: t.ink }}>▸ Argument outline — valuation gap narrative</div>
            </div>
          </CtPlantedBlock>
        </CtPanel>
      </SurfaceBoundary>

      <SurfaceBoundary id="trim-ct-worker-assignment">
        <CtPanel title="Accept or decline this assignment">
          <div style={{ fontSize: 13, color: t.label, marginBottom: 14 }}>
            Accepting locks you to this case. You are responsible for attending the ARB hearing and submitting the
            outcome report within 24 hours of the hearing.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <CtButton variant="primary" onClick={onAccept}>
              Accept assignment →
            </CtButton>
            <CtButton variant="secondary" onClick={onDecline}>
              Decline
            </CtButton>
          </div>
        </CtPanel>
      </SurfaceBoundary>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Hearing logistics
// ────────────────────────────────────────────────────────────────────────────

function HearingLogistics({ a, onBack, onReportOutcome }: {
  a: WorkerAssignment;
  onBack: () => void;
  onReportOutcome: () => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <button
        type="button"
        onClick={onBack}
        style={{ fontFamily: "inherit", fontSize: 12, color: t.muted, background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        ← Queue
      </button>

      <SurfaceBoundary id="trim-ct-worker-hearing">
        <CtPanel title="Hearing logistics">
          <CtFactGrid columns={2}>
            <CtFact label="Date" value={a.hearingDate ?? "TBD"} />
            <CtFact label="Time" value={a.hearingTime ?? "TBD"} />
            <CtFact label="Board / venue" value={a.hearingBoard ?? "TBD"} />
            <CtFact label="Format" value={a.hearingType.replace(/-/g, " ")} />
          </CtFactGrid>

          <CtPlantedBlock id="trim-ct-worker-county-rules" title="County board rules" style={{ marginTop: 12 }}>
            {a.county} ARB rules: evidence must be submitted 14 days before hearing date.
            Hearing time limit: 15 minutes per side. Bring 3 printed copies of comp grid.
            Remote hearings: use county portal link (emailed 48h before).
          </CtPlantedBlock>

          <CtPlantedBlock id="trim-ct-worker-appear-checklist" title="Appearance checklist">
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
              {[
                a.hearingType === "arb-in-person" ? "Arrive 15 min early — {a.hearingBoard} venue" : "Log into county ARB portal 10 min before",
                "Bring printed case packet (3 copies)",
                "Photo ID + TDLR agent credential card",
                "Parcel ID " + a.parcelId + " confirmed in your queue",
                "Outcome report form ready to submit after hearing",
              ].map((item, i) => (
                <label key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <input type="checkbox" style={{ marginTop: 2 }} />
                  <span style={{ fontSize: 12 }}>{item}</span>
                </label>
              ))}
            </div>
          </CtPlantedBlock>

          <div style={{ marginTop: 14 }}>
            <CtButton variant="primary" onClick={onReportOutcome}>
              Report outcome →
            </CtButton>
          </div>
        </CtPanel>
      </SurfaceBoundary>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Outcome report
// ────────────────────────────────────────────────────────────────────────────

function OutcomeReport({ onBack, onSubmit }: {
  a?: WorkerAssignment;
  onBack: () => void;
  onSubmit: (outcome: "reduced" | "denied" | "continued", reducedValue?: number) => void;
}) {
  const [outcome, setOutcome] = useState<"reduced" | "denied" | "continued" | null>(null);
  const [reducedValue, setReducedValue] = useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <button
        type="button"
        onClick={onBack}
        style={{ fontFamily: "inherit", fontSize: 12, color: t.muted, background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        ← Hearing
      </button>

      <SurfaceBoundary id="trim-ct-worker-outcome">
        <CtPanel title="Outcome report">
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: t.ink, marginBottom: 8 }}>Board result</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {(["reduced", "denied", "continued"] as const).map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOutcome(o)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 6,
                    border: `1.5px solid ${outcome === o ? t.accent : t.stroke}`,
                    background: outcome === o ? t.accentBg : t.white,
                    color: outcome === o ? t.accent : t.ink,
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {o.charAt(0).toUpperCase() + o.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {outcome === "reduced" && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11.5, color: t.label, marginBottom: 6 }}>ARB reduced value ($)</div>
              <input
                value={reducedValue}
                onChange={(e) => setReducedValue(e.target.value)}
                placeholder="e.g. 9800000"
                style={{
                  fontFamily: "inherit",
                  fontSize: 13,
                  padding: "9px 12px",
                  borderRadius: 6,
                  border: `1px solid ${t.stroke}`,
                  background: t.white,
                  color: t.ink,
                  width: "100%",
                  maxWidth: 240,
                }}
              />
            </div>
          )}

          <div>
            <CtButton
              variant="primary"
              onClick={
                outcome
                  ? () => onSubmit(outcome, outcome === "reduced" ? parseFloat(reducedValue) || undefined : undefined)
                  : undefined
              }
              style={outcome ? undefined : { opacity: 0.4, cursor: "not-allowed" }}
            >
              Submit outcome report
            </CtButton>
          </div>
        </CtPanel>
      </SurfaceBoundary>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Pay status
// ────────────────────────────────────────────────────────────────────────────

function PayStatus({ a, onBack }: { a: WorkerAssignment; onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <button
        type="button"
        onClick={onBack}
        style={{ fontFamily: "inherit", fontSize: 12, color: t.muted, background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        ← Queue
      </button>

      <SurfaceBoundary id="trim-ct-worker-pay">
        <CtPanel title="Pay status">
          <CtFactGrid columns={2}>
            <CtFact label="Parcel ID" value={a.parcelId} />
            <CtFact label="County" value={a.county} />
            <CtFact label="Hearing date" value={a.hearingDate ?? "—"} />
            <CtFact
              label="Outcome"
              value={
                a.outcome
                  ? a.outcome.charAt(0).toUpperCase() + a.outcome.slice(1)
                  : "Pending"
              }
            />
            <CtFact label="Per-appearance fee" value="$150 per ARB hearing" />
            <CtFact label="Payment status" value="Pending — issued within 14 days of report" />
          </CtFactGrid>

          <div style={{ marginTop: 14, padding: "12px 14px", borderRadius: 6, background: t.frame }}>
            <div style={{ fontSize: 12, color: t.label }}>
              Per-appearance fee is paid regardless of ARB outcome (reduced, denied, or continued). Payment is issued
              via ACH to your registered bank account within 14 business days of outcome report approval.
            </div>
          </div>
        </CtPanel>
      </SurfaceBoundary>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Worker app
// ────────────────────────────────────────────────────────────────────────────

export function WorkerApp({ embedded }: { embedded?: boolean } = {}) {
  useFocusFromQuery();
  const [assignments, setAssignments] = useState<WorkerAssignment[]>([...WORKER_QUEUE]);
  const [view, setView] = useState<WorkerView>("queue");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId ? assignments.find((a) => a.id === selectedId) ?? null : null;

  function selectAssignment(id: string) {
    setSelectedId(id);
    setView("packet");
  }

  function acceptAssignment() {
    if (!selectedId) return;
    setAssignments((prev) =>
      prev.map((a) => a.id === selectedId ? { ...a, status: "assigned", workerId: "wk-self", workerName: "Me" } : a)
    );
    setView("hearing");
  }

  function declineAssignment() {
    setSelectedId(null);
    setView("queue");
  }

  function reportOutcome(outcome: "reduced" | "denied" | "continued", reducedValue?: number) {
    if (!selectedId) return;
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === selectedId ? { ...a, status: "completed", outcome, reducedValue } : a
      )
    );
    setView("pay");
  }

  return (
    <div style={{ display: "flex", height: "100%", background: t.canvas, fontFamily: "inherit" }}>
      <aside
        style={{
          width: embedded ? 160 : t.sidebarW,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          background: t.sidebar,
          borderRight: `1px solid ${t.stroke}`,
        }}
      >
        <div
          style={{
            height: t.headerH,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: embedded ? "0 12px" : "0 16px",
            borderBottom: `1px solid ${t.stroke}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            {!embedded && <span style={{ fontSize: 13, fontWeight: 700, color: t.ink, letterSpacing: "-0.01em" }}>Trim</span>}
            <span style={{ fontSize: embedded ? 12 : 10.5, fontWeight: embedded ? 600 : 400, color: embedded ? t.ink : t.muted }}>
              Worker
            </span>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: embedded ? 8 : 10, flex: 1 }}>
          {[
            { id: "queue", label: "Queue" },
            ...(selected ? [
              { id: "packet", label: "Packet" },
              { id: "hearing", label: "Hearing" },
              { id: "outcome", label: "Outcome" },
              { id: "pay", label: "Pay" },
            ] : []),
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === "queue") { setSelectedId(null); setView("queue"); }
                else setView(item.id as WorkerView);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 4,
                fontSize: 12.5,
                fontWeight: view === item.id ? 600 : 400,
                color: view === item.id ? t.ink : t.label,
                background: view === item.id ? t.block : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {!embedded && (
          <div style={{ padding: 10, borderTop: `1px solid ${t.stroke}` }}>
            <Link to="/ct" style={{ fontSize: 11.5, color: t.muted, textDecoration: "none" }}>
              ← Hub
            </Link>
          </div>
        )}
      </aside>

      <main style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>
        <div style={{ padding: embedded ? "20px 24px" : "32px 40px", maxWidth: 720 }}>
          {view === "queue" && (
            <HearingQueue assignments={assignments} onSelect={selectAssignment} />
          )}
          {view === "packet" && selected && (
            <CasePacket
              a={selected}
              onAccept={acceptAssignment}
              onDecline={declineAssignment}
              onBack={() => { setView("queue"); setSelectedId(null); }}
            />
          )}
          {view === "hearing" && selected && (
            <HearingLogistics
              a={selected}
              onBack={() => setView("queue")}
              onReportOutcome={() => setView("outcome")}
            />
          )}
          {view === "outcome" && selected && (
            <OutcomeReport
              onBack={() => setView("hearing")}
              onSubmit={reportOutcome}
            />
          )}
          {view === "pay" && selected && (
            <PayStatus a={selected} onBack={() => setView("queue")} />
          )}
        </div>
      </main>
    </div>
  );
}

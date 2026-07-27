/**
 * Owner desk click-through — property tax protest.
 * Plants all trim-ct-owner-* surfaces (core + SME additions).
 * Route: /ct/owner
 */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { formatUsd } from "../../shared/format";
import {
  CtButton,
  CtCheckbox,
  CtFact,
  CtFactGrid,
  CtPanel,
  CtStatusTag,
  ctPalette as t,
} from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import { useRegisterTrace } from "../../register/trace/RegisterTraceContext";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { OWNER_SURFACE_STATUS } from "../../register/trace/surfaces";
import { PROTEST_CASES, OWNER_ENTITY } from "../trim-data/protestCases";
import { PROTEST_STATE_META } from "../trim-data/trimTypes";
import type { ProtestCase } from "../trim-data/trimTypes";
import { admits } from "../../register/world/trimWorld";

// ────────────────────────────────────────────────────────────────────────────
// Local state hook
// ────────────────────────────────────────────────────────────────────────────

function useOwnerCases() {
  const [cases, setCases] = useState<Record<string, ProtestCase>>(() =>
    Object.fromEntries(PROTEST_CASES.map((c) => [c.id, { ...c }]))
  );
  const order = PROTEST_CASES.map((c) => c.id);

  function updateCase(id: string, patch: Partial<ProtestCase>) {
    setCases((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }
  function setTick(id: string, tick: keyof ProtestCase["consentTicks"], value: boolean) {
    setCases((prev) => ({
      ...prev,
      [id]: { ...prev[id], consentTicks: { ...prev[id].consentTicks, [tick]: value } },
    }));
  }
  return { cases, order, updateCase, setTick };
}

// ────────────────────────────────────────────────────────────────────────────
// Portfolio surface
// ────────────────────────────────────────────────────────────────────────────

function OwnerPortfolio({
  order,
  cases,
  onOpen,
}: {
  order: string[];
  cases: Record<string, ProtestCase>;
  onOpen: (id: string) => void;
}) {
  return (
    <SurfaceBoundary id="trim-ct-owner-portfolio">
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Portfolio</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          {OWNER_ENTITY.entityName} · protest cases by parcel and tax year
        </div>
      </div>
      <CtPanel>
        <div>
          {order.map((id, i) => {
            const c = cases[id];
            const meta = PROTEST_STATE_META[c.status];
            return (
              <button
                key={id}
                type="button"
                onClick={() => onOpen(id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "12px 10px",
                  width: "100%",
                  border: "none",
                  borderBottom: i < order.length - 1 ? `1px solid ${t.stroke}` : "none",
                  background: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{c.parcelId}</div>
                  <div style={{ fontSize: 11.5, color: t.muted, marginTop: 2 }}>
                    {c.county} · {c.propertyAddress} · {c.taxYear}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 12, color: t.label }}>{formatUsd(c.assessedValue)}</span>
                  <CtStatusTag label={meta.label} tone={meta.tone} />
                </div>
              </button>
            );
          })}
        </div>
      </CtPanel>
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Notice — proof facts + trust strip
// ────────────────────────────────────────────────────────────────────────────

function NoticeLand({ c, revealed }: { c: ProtestCase; revealed: boolean }) {
  return (
    <CtPanel title="Notice">
      <SurfaceBoundary id="trim-ct-owner-notice" style={{ padding: 4 }}>
        <CtPlantedBlock id="trim-ct-owner-analysis-framing" title="Analysis-not-promise framing">
          Estimated excess ≈ {formatUsd(c.excessEstimate)} — subject to ARB outcome, not a guaranteed result.
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-parcel-recap" title="Parcel recap">
          {c.parcelId} · {c.countyAppraisalDistrict} · {c.county} County · {c.taxYear}
        </CtPlantedBlock>

        <CtFactGrid columns={3}>
          <CtFact label="Parcel ID" value={c.parcelId} />
          <CtFact label="County (CAD)" value={`${c.county} (${c.countyAppraisalDistrict})`} />
          <CtFact
            label="Assessed value"
            value={
              revealed ? (
                formatUsd(c.assessedValue)
              ) : (
                <span style={{ filter: "blur(5px)", userSelect: "none" }}>{formatUsd(c.assessedValue)}</span>
              )
            }
          />
          <CtFact
            label="Evidence value"
            value={
              revealed ? (
                formatUsd(c.evidenceValue)
              ) : (
                <span style={{ filter: "blur(5px)", userSelect: "none" }}>{formatUsd(c.evidenceValue)}</span>
              )
            }
          />
          <CtFact
            label="Est. excess"
            value={
              revealed ? (
                formatUsd(c.excessEstimate)
              ) : (
                <span style={{ filter: "blur(5px)", userSelect: "none" }}>{formatUsd(c.excessEstimate)}</span>
              )
            }
          />
          <CtFact label="Fee cap (jurisdiction)" value={`${c.feeCapPct}%`} />
        </CtFactGrid>

        {!revealed && (
          <div style={{ marginTop: 10, fontSize: 11.5, color: t.muted }}>
            Exact figures unlock once you've read the three lines below.
          </div>
        )}
      </SurfaceBoundary>

      <SurfaceBoundary id="trim-ct-owner-trust" style={{ marginTop: 16, padding: 4 }}>
        <CtPlantedBlock id="trim-ct-owner-trust-bundle" title="Trust bundle">
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 6,
              background: t.accentBg,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: t.accent }}>No upfront fee, ever</span>
            <span style={{ fontSize: 11.5, color: t.label }}>
              Trim takes a pre-set contingency cut only after your assessment is reduced.{" "}
              <a
                href={c.countyVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: t.accent, textDecoration: "underline" }}
              >
                Verify {c.parcelId} yourself
              </a>{" "}
              at {c.countyAppraisalDistrict} — we never ask you to take our word for it.
            </span>
          </div>
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-non-affiliation" title="Non-affiliation disclaimer">
          Trim is not {c.countyAppraisalDistrict}, the {c.county} ARB, or any government agency. We are a licensed
          property tax consultant firm representing you under the Texas Property Tax Code.
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-county-verify" title="County-site verify link">
          <a
            href={c.countyVerifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, color: t.accent, textDecoration: "underline" }}
          >
            Verify this parcel at {c.countyAppraisalDistrict} →
          </a>
        </CtPlantedBlock>
      </SurfaceBoundary>
    </CtPanel>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Consent ticks
// ────────────────────────────────────────────────────────────────────────────

function ConsentBlock({
  c,
  setTick,
  onContinue,
}: {
  c: ProtestCase;
  setTick: (tick: keyof ProtestCase["consentTicks"], v: boolean) => void;
  onContinue: () => void;
}) {
  const allTicked = Object.values(c.consentTicks).every(Boolean);
  return (
    <SurfaceBoundary id="trim-ct-owner-consent">
      <CtPanel title="Consent">
        <CtCheckbox
          checked={c.consentTicks.see}
          onChange={(v) => setTick("see", v)}
          label="I see it — Trim identified over-assessment on this parcel using public CAMA data."
        />
        <CtCheckbox
          checked={c.consentTicks.understand}
          onChange={(v) => setTick("understand", v)}
          label="I understand it — no upfront fee; Trim's cut is a pre-set % of tax savings only."
        />
        <CtCheckbox
          checked={c.consentTicks.withIt}
          onChange={(v) => setTick("withIt", v)}
          label="I'm with it — authorize Trim to protest this parcel's assessed value as my agent."
        />
        {allTicked && (
          <div style={{ marginTop: 12 }}>
            <CtButton variant="primary" onClick={onContinue}>
              Continue to Authorize →
            </CtButton>
          </div>
        )}
      </CtPanel>
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Authorize door
// ────────────────────────────────────────────────────────────────────────────

function AuthorizeDoorBlock({ c, onAuthorize }: { c: ProtestCase; onAuthorize: (pct: number) => void }) {
  const [signerName, setSignerName] = useState("");
  const pct = c.contingencyPct ?? c.feeCapPct;
  const canSign = signerName.trim().length > 1;
  const estSavings = Math.round(c.excessEstimate * (c.millageRate / 100));
  const estFee = Math.round(estSavings * (pct / 100));

  return (
    <SurfaceBoundary id="trim-ct-owner-authorize">
      <CtPanel title="Appointment of Agent" right={<span style={{ fontSize: 11, color: t.muted }}>One-time, locked at signing</span>}>
        <CtPlantedBlock id="trim-ct-owner-non-collapsible-fee" title="Non-collapsible fee disclosure">
          Contingency fee: {pct}% of documented tax savings. Due only after ARB reduces your assessed value.
          No upfront fee.
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-fee-example" title="Fee example">
          Est. tax savings: {formatUsd(estSavings)} ({formatUsd(c.excessEstimate)} × {c.millageRate}‰ millage) →
          Trim fee ≈ {formatUsd(estFee)} ({pct}% contingency). Net to you ≈ {formatUsd(estSavings - estFee)}.
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-contingency-lock" title="Contingency % lock">
          {pct}% — locked at signing. Cannot exceed jurisdiction cap of {c.feeCapPct}%.
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-agent-appointment" title="Appointment of Agent reference">
          TX Form 50-162 — Appointment of Agent for Property Tax Matters.
          Agent of record: TDLR-licensed Trim practitioner on file for {c.county} County.
        </CtPlantedBlock>

        <div style={{ marginTop: 12 }}>
        <CtFactGrid columns={2}>
          <CtFact label="Contingency %" value={`${pct}% — pre-set, locked at signing`} />
          <CtFact label="This authorizes" value="Protest filing, ARB hearing, resubmissions" />
        </CtFactGrid>
        </div>

        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11.5, color: t.label, marginBottom: 6 }}>
            Authorized officer / signer name (TX 50-162 signature)
          </div>
          <input
            value={signerName}
            onChange={(e) => setSignerName(e.target.value)}
            placeholder="Type full name to sign"
            style={{
              width: "100%",
              maxWidth: 340,
              fontFamily: "inherit",
              fontSize: 13,
              padding: "9px 12px",
              borderRadius: 6,
              border: `1px solid ${t.stroke}`,
              background: t.white,
              color: t.ink,
            }}
          />
        </div>

        <CtPlantedBlock id="trim-ct-owner-signer-title" title="Signer title">
          <input
            placeholder="Officer title (e.g. Managing Member, CEO)"
            style={{
              width: "100%",
              maxWidth: 280,
              fontFamily: "inherit",
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 4,
              border: `1px solid ${t.stroke}`,
              background: t.white,
              color: t.ink,
            }}
          />
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-entity-identity" title="Entity identity attestation">
          <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "default" }}>
            <input type="checkbox" readOnly style={{ marginTop: 2 }} />
            <span style={{ fontSize: 12 }}>
              I attest that I am an authorized officer of {c.ownerEntityName} and have authority to bind this entity
              under Texas Property Tax Code § 1.111.
            </span>
          </label>
        </CtPlantedBlock>

        <div style={{ marginTop: 14 }}>
          <CtButton
            variant="primary"
            onClick={canSign ? () => onAuthorize(pct) : undefined}
            style={canSign ? undefined : { opacity: 0.4, cursor: "not-allowed" }}
          >
            Sign &amp; appoint Trim as agent →
          </CtButton>
        </div>
      </CtPanel>
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Upload docs
// ────────────────────────────────────────────────────────────────────────────

function UploadBlock({ c, onToggle, onComplete }: {
  c: ProtestCase;
  onToggle: (docId: string) => void;
  onComplete: () => void;
}) {
  return (
    <SurfaceBoundary id="trim-ct-owner-upload">
      <CtPanel title="Optional documents">
        <CtPlantedBlock id="trim-ct-owner-upload-header" title="Upload purpose header">
          Stronger evidence = better ARB outcome. These docs are optional — Trim will file the protest
          regardless, but income docs can meaningfully improve the reduction argument.
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-income-docs" title="Income docs">
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            {c.docs.filter((d) => d.id === "rent-roll" || d.id === "pl-statement").map((doc) => (
              <div key={doc.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CtStatusTag label={doc.uploaded ? "Uploaded" : "Optional"} tone={doc.uploaded ? "success" : "neutral"} />
                <span style={{ fontSize: 12.5, color: t.ink }}>{doc.label}</span>
                {!doc.uploaded && (
                  <CtButton variant="secondary" onClick={() => onToggle(doc.id)}>
                    Upload
                  </CtButton>
                )}
              </div>
            ))}
          </div>
        </CtPlantedBlock>

        <CtPlantedBlock id="trim-ct-owner-condition-docs" title="Condition evidence">
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            {c.docs.filter((d) => d.id === "condition-photos").map((doc) => (
              <div key={doc.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CtStatusTag label={doc.uploaded ? "Uploaded" : "Optional"} tone={doc.uploaded ? "success" : "neutral"} />
                <span style={{ fontSize: 12.5, color: t.ink }}>{doc.label}</span>
                {!doc.uploaded && (
                  <CtButton variant="secondary" onClick={() => onToggle(doc.id)}>
                    Upload
                  </CtButton>
                )}
              </div>
            ))}
          </div>
        </CtPlantedBlock>

        <div style={{ marginTop: 14 }}>
          <CtButton variant="primary" onClick={onComplete}>
            Done — continue to evidence prep
          </CtButton>
        </div>
      </CtPanel>
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Status facts
// ────────────────────────────────────────────────────────────────────────────

function StatusBlock({ c }: { c: ProtestCase }) {
  const meta = PROTEST_STATE_META[c.status];
  const showHearing = admits("owner", "hearing_queued")
    && (c.status === "hearing_queued" || c.status === "hearing_active" || c.status === "hearing_reported");
  const showReduction = c.status === "reduced" || c.status === "invoiced" || c.status === "collected";
  const showInvoice = c.status === "invoiced" || c.status === "collected";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SurfaceBoundary id="trim-ct-owner-status">
        <CtPanel title="Status" right={<CtStatusTag label={meta.label} tone={meta.tone} />}>
          <CtPlantedBlock id="trim-ct-owner-evidence-status" title="Evidence prep status">
            Packet: comps found · uniformity table built · income docs{" "}
            {c.docs.some((d) => d.uploaded) ? "attached" : "not uploaded (optional)"} ·{" "}
            {c.daysInState} days in {meta.label}
          </CtPlantedBlock>

          {showHearing && (
            <CtPlantedBlock id="trim-ct-owner-hearing-status" title="Hearing state facts">
              Hearing: {c.hearingDate ?? "TBD"} · Board: {c.hearingBoard ?? "assigned"} ·{" "}
              Worker: {c.workerName ?? "pending assignment"} ·{" "}
              Format: {c.hearingType === "arb-remote" || c.hearingType === "arb-virtual" ? "Remote" : "In-person"}
            </CtPlantedBlock>
          )}

          <CtFactGrid columns={3}>
            <CtFact label="Assessed value" value={formatUsd(c.assessedValue)} />
            <CtFact label="Contingency %" value={`${c.contingencyPct ?? c.feeCapPct}% — locked`} />
            <CtFact label="Days in state" value={`${c.daysInState}`} />
          </CtFactGrid>
        </CtPanel>
      </SurfaceBoundary>

      {showReduction && (
        <SurfaceBoundary id="trim-ct-owner-reduction">
          <CtPanel title="Reduction">
            <CtPlantedBlock id="trim-ct-owner-reduction-detail" title="Reduction detail">
              Before: {formatUsd(c.assessedValue)} → After: {formatUsd(c.reducedValue ?? c.evidenceValue)} ·
              Savings: {formatUsd(c.taxSavings ?? 0)} (at {c.millageRate}‰ millage)
            </CtPlantedBlock>
            <div style={{ marginTop: 8 }}>
            <CtFactGrid columns={2}>
              <CtFact label="Before" value={formatUsd(c.assessedValue)} />
              <CtFact label="After" value={formatUsd(c.reducedValue ?? c.evidenceValue)} />
              <CtFact label="Tax savings" value={formatUsd(c.taxSavings ?? 0)} />
              <CtFact label="Millage rate" value={`${c.millageRate}‰`} />
            </CtFactGrid>
            </div>
          </CtPanel>
        </SurfaceBoundary>
      )}

      {showInvoice && (
        <SurfaceBoundary id="trim-ct-owner-invoice">
          <CtPanel title="Trim invoice">
            <CtFactGrid columns={2}>
              <CtFact label="Tax savings" value={formatUsd(c.taxSavings ?? 0)} />
              <CtFact
                label="Trim contingency fee"
                value={
                  c.invoiceAmount
                    ? `${formatUsd(c.invoiceAmount)} — ${c.contingencyPct}% of savings`
                    : "Calculating"
                }
              />
            </CtFactGrid>
            <div style={{ marginTop: 10, fontSize: 11.5, color: t.muted }}>
              Invoice dated against documented savings — independent of fee collection timing.
            </div>
          </CtPanel>
        </SurfaceBoundary>
      )}

      {c.status === "denied" && (
        <CtPanel title="Denied">
          <CtPlantedBlock id="trim-ct-owner-denial-reason" title="Denial reason">
            ARB denied protest — {c.denialReason ?? "board upheld assessed value"}. Escalation options:
            judicial appeal (§ 42.01) or binding arbitration (§ 41A).
          </CtPlantedBlock>
        </CtPanel>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Decline door
// ────────────────────────────────────────────────────────────────────────────

function DeclineBlock({ onDecline }: { onDecline: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <SurfaceBoundary id="trim-ct-owner-decline">
      {!open ? (
        <CtButton variant="quiet" onClick={() => setOpen(true)}>
          Decline this protest
        </CtButton>
      ) : (
        <CtPanel title="Decline">
          <div style={{ fontSize: 13, color: t.label, marginBottom: 12 }}>
            Declining removes this parcel from Trim's protest queue for this tax year. You can re-engage before the
            appeal deadline.
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <CtButton variant="secondary" onClick={() => setOpen(false)}>
              Go back
            </CtButton>
            <CtButton variant="primary" onClick={onDecline}>
              Confirm decline
            </CtButton>
          </div>
        </CtPanel>
      )}
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Case modal
// ────────────────────────────────────────────────────────────────────────────

function CaseModal({
  c,
  onBack,
  updateCase,
  setTick,
}: {
  c: ProtestCase;
  onBack: () => void;
  updateCase: (patch: Partial<ProtestCase>) => void;
  setTick: (tick: keyof ProtestCase["consentTicks"], v: boolean) => void;
}) {
  const meta = PROTEST_STATE_META[c.status];

  return (
    <SurfaceBoundary id="trim-ct-owner-case">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <button
            type="button"
            onClick={onBack}
            style={{ fontFamily: "inherit", fontSize: 12, color: t.muted, background: "none", border: "none", padding: 0, cursor: "pointer", marginBottom: 10 }}
          >
            ← Portfolio
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.ink }}>{c.parcelId}</div>
            <CtStatusTag label={meta.label} tone={meta.tone} />
          </div>
          <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
            {c.county} County · {c.countyAppraisalDistrict} · {c.propertyAddress} · TY {c.taxYear}
          </div>
        </div>

        {c.status === "notified" && (
          <>
            <NoticeLand c={c} revealed={false} />
            <ConsentBlock c={c} setTick={setTick} onContinue={() => updateCase({ status: "consented" })} />
            <DeclineBlock onDecline={() => updateCase({ status: "declined" })} />
          </>
        )}

        {c.status === "consented" && (
          <>
            <NoticeLand c={c} revealed />
            <AuthorizeDoorBlock c={c} onAuthorize={(pct) => updateCase({ status: "authorized", contingencyPct: pct })} />
            <DeclineBlock onDecline={() => updateCase({ status: "declined" })} />
          </>
        )}

        {c.status === "authorized" && (
          <UploadBlock
            c={c}
            onToggle={(docId) => {
              const docs = c.docs.map((d) => d.id === docId ? { ...d, uploaded: true } : d);
              updateCase({ docs });
            }}
            onComplete={() => updateCase({ status: "evidence_prep" })}
          />
        )}

        {(c.status === "evidence_prep" || c.status === "informal" || c.status === "hearing_queued"
          || c.status === "hearing_active" || c.status === "hearing_reported"
          || c.status === "reduced" || c.status === "denied"
          || c.status === "invoiced" || c.status === "collected") && (
          <StatusBlock c={c} />
        )}

        {c.status === "declined" && (
          <CtPanel title="Declined">
            <div style={{ fontSize: 13, color: t.label }}>
              You've declined protest for {c.parcelId}. Trim will not file for this parcel in TY {c.taxYear}. You can
              re-engage before the {c.appealDeadline} appeal deadline.
            </div>
          </CtPanel>
        )}
      </div>
    </SurfaceBoundary>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Owner app
// ────────────────────────────────────────────────────────────────────────────

export function OwnerApp({ embedded }: { embedded?: boolean } = {}) {
  const [searchParams, setSearchParams] = useSearchParams();
  useFocusFromQuery();
  const { focusedSurfaceId, focusSeq } = useRegisterTrace();
  const { cases, order, updateCase, setTick } = useOwnerCases();

  const focusId = searchParams.get("focus") ?? focusedSurfaceId;
  const requestedId = searchParams.get("case");
  const [localCaseId, setLocalCaseId] = useState<string | null>(null);
  const [view, setView] = useState<"list" | "case">(() => {
    if (requestedId) return "case";
    if (focusId && focusId !== "trim-ct-owner-portfolio") return "case";
    return "list";
  });

  const selectedId = embedded
    ? localCaseId && cases[localCaseId] ? localCaseId : null
    : requestedId && cases[requestedId] ? requestedId : null;

  useEffect(() => {
    if (!focusId) return;
    if (focusId === "trim-ct-owner-portfolio") {
      setView("list");
      if (embedded) setLocalCaseId(null);
      else setSearchParams({ focus: focusId });
      return;
    }
    const requiredStatuses = OWNER_SURFACE_STATUS[focusId];
    if (!requiredStatuses) return;
    const match = order.find((id) => (requiredStatuses as readonly string[]).includes(cases[id].status));
    if (!match) return;
    setView("case");
    if (embedded) setLocalCaseId(match);
    else setSearchParams({ case: match, focus: focusId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusId, focusSeq, embedded]);

  const openCase = (id: string) => {
    setView("case");
    if (embedded) setLocalCaseId(id);
    else setSearchParams({ case: id });
  };

  const backToPortfolio = () => {
    setView("list");
    if (embedded) setLocalCaseId(null);
    else setSearchParams({});
  };

  const activeCase = selectedId ? cases[selectedId] : null;
  const showCase = view === "case" && activeCase;

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
              Owner
            </span>
          </div>
          <div style={{ fontSize: 11, color: t.muted, marginTop: embedded ? 2 : 0, lineHeight: 1.3 }}>
            {OWNER_ENTITY.entityName}
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: embedded ? 8 : 10, flex: 1 }}>
          <button
            type="button"
            onClick={backToPortfolio}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 10px",
              borderRadius: 4,
              fontSize: 12.5,
              fontWeight: 600,
              color: t.ink,
              background: t.block,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              textAlign: "left",
            }}
          >
            Portfolio
          </button>
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
          {showCase ? (
            <CaseModal
              c={activeCase}
              onBack={backToPortfolio}
              updateCase={(patch) => updateCase(activeCase.id, patch)}
              setTick={(tick, v) => setTick(activeCase.id, tick, v)}
            />
          ) : (
            <OwnerPortfolio order={order} cases={cases} onOpen={openCase} />
          )}
        </div>
      </main>
    </div>
  );
}

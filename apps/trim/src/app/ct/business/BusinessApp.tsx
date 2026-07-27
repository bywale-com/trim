/**
 * Business persona click-through — one company account.
 * Module: Cases. Modal: Case. Blocks: notice / consent / authorize / upload / status / decline.
 * Standalone `/ct/business` and embedded Register CT panel.
 */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { formatUsd } from "../../shared/format";
import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { BUSINESS_ACCOUNT } from "../data/cases";
import { STATUS_META } from "../data/statusMeta";
import type { RecoveryCase } from "../data/types";
import { useRegisterTrace } from "../../register/trace/RegisterTraceContext";
import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";
import { OWNER_SURFACE_STATUS } from "../../register/trace/surfaces";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { AuthorizeDoor } from "./AuthorizeDoor";
import { ConsentTicks } from "./ConsentTicks";
import { DeclineDoor } from "./DeclineDoor";
import { NoticeLand } from "./NoticeLand";
import { StatusFacts } from "./StatusFacts";
import { UploadDocs } from "./UploadDocs";
import { useBusinessCases } from "./useBusinessCases";

type View = "cases" | "case";

function CaseModal({
  recoveryCase,
  onBack,
  updateCase,
  setTick,
  setDocUploaded,
}: {
  recoveryCase: RecoveryCase;
  onBack: () => void;
  updateCase: (id: string, patch: Partial<RecoveryCase>) => void;
  setTick: (id: string, tick: keyof RecoveryCase["consentTicks"], value: boolean) => void;
  setDocUploaded: (id: string, docId: string, uploaded: boolean) => void;
}) {
  const meta = STATUS_META[recoveryCase.status];

  return (
    <SurfaceBoundary id="biz-ct-case">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <button
            type="button"
            onClick={onBack}
            style={{
              fontFamily: "inherit",
              fontSize: 12,
              color: t.muted,
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            ← Cases
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.ink }}>{recoveryCase.caseRef}</div>
            <CtStatusTag label={meta.label} tone={meta.tone} />
          </div>
          <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
            {recoveryCase.jurisdiction} · {formatUsd(recoveryCase.amount)} · {BUSINESS_ACCOUNT.companyName}
          </div>
        </div>

        {recoveryCase.status === "notified" ? (
          <>
            <NoticeLand recoveryCase={recoveryCase} revealed={false} />
            <ConsentTicks
              ticks={recoveryCase.consentTicks}
              onChange={(key, value) => setTick(recoveryCase.id, key, value)}
              allTicked={Object.values(recoveryCase.consentTicks).every(Boolean)}
              onContinue={() => updateCase(recoveryCase.id, { status: "consented" })}
            />
            <DeclineDoor onDecline={() => updateCase(recoveryCase.id, { status: "declined" })} />
          </>
        ) : null}

        {recoveryCase.status === "consented" ? (
          <>
            <NoticeLand recoveryCase={recoveryCase} revealed />
            <AuthorizeDoor
              recoveryCase={recoveryCase}
              onAuthorize={(pct) => updateCase(recoveryCase.id, { status: "authorized", contingencyPct: pct })}
            />
            <DeclineDoor onDecline={() => updateCase(recoveryCase.id, { status: "declined" })} />
          </>
        ) : null}

        {recoveryCase.status === "authorized" ? (
          <UploadDocs
            recoveryCase={recoveryCase}
            onToggle={(docId) => setDocUploaded(recoveryCase.id, docId, true)}
            onComplete={() => updateCase(recoveryCase.id, { status: "filing" })}
          />
        ) : null}

        {recoveryCase.status === "declined" ? (
          <CtPanel title="Declined">
            <div style={{ fontSize: 13, color: t.label }}>
              You've declined recovery for {recoveryCase.caseRef}. The record stays with {recoveryCase.agency} — you
              can verify or re-open with Trove at any time.
            </div>
          </CtPanel>
        ) : null}

        {["filing", "kicked_back", "filed", "paid_claimant", "invoiced"].includes(recoveryCase.status) ? (
          <StatusFacts recoveryCase={recoveryCase} />
        ) : null}
      </div>
    </SurfaceBoundary>
  );
}

function CasesList({
  order,
  cases,
  onOpen,
}: {
  order: string[];
  cases: Record<string, RecoveryCase>;
  onOpen: (id: string) => void;
}) {
  return (
    <SurfaceBoundary id="biz-ct-cases">
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: t.ink }}>Cases</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Recovery cases for {BUSINESS_ACCOUNT.companyName}. Open a case to continue.
        </div>
      </div>
      <CtPanel>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {order.map((id) => {
            const c = cases[id];
            const meta = STATUS_META[c.status];
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
                  border: "none",
                  borderBottom: `1px solid ${t.stroke}`,
                  background: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{c.caseRef}</div>
                  <div style={{ fontSize: 11.5, color: t.muted, marginTop: 2 }}>
                    {c.jurisdiction} · {formatUsd(c.amount)}
                  </div>
                </div>
                <CtStatusTag label={meta.label} tone={meta.tone} />
              </button>
            );
          })}
        </div>
      </CtPanel>
    </SurfaceBoundary>
  );
}

export function BusinessApp({ embedded }: { embedded?: boolean } = {}) {
  const [searchParams, setSearchParams] = useSearchParams();
  useFocusFromQuery();
  const { focusedSurfaceId, focusSeq } = useRegisterTrace();
  const { cases, order, updateCase, setTick, setDocUploaded } = useBusinessCases();

  const focusId = searchParams.get("focus") ?? focusedSurfaceId;
  const requestedId = searchParams.get("case");
  const [localCaseId, setLocalCaseId] = useState<string | null>(null);
  const [view, setView] = useState<View>(() => {
    if (requestedId) return "case";
    if (focusId && focusId !== "biz-ct-cases") return "case";
    return "cases";
  });

  const selectedId = embedded
    ? localCaseId && cases[localCaseId]
      ? localCaseId
      : null
    : requestedId && cases[requestedId]
      ? requestedId
      : null;

  useEffect(() => {
    if (!focusId) return;
    if (focusId === "biz-ct-cases") {
      setView("cases");
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

  const backToCases = () => {
    setView("cases");
    if (embedded) setLocalCaseId(null);
    else setSearchParams({});
  };

  const recoveryCase = selectedId ? cases[selectedId] : null;
  const showCase = view === "case" && recoveryCase;

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
            {!embedded ? (
              <span style={{ fontSize: 13, fontWeight: 700, color: t.ink, letterSpacing: "-0.01em" }}>Trove B2B</span>
            ) : null}
            <span
              style={{
                fontSize: embedded ? 12 : 10.5,
                fontWeight: embedded ? 600 : 400,
                color: embedded ? t.ink : t.muted,
              }}
            >
              Business
            </span>
          </div>
          <div style={{ fontSize: 11, color: t.muted, marginTop: embedded ? 2 : 0, lineHeight: 1.3 }}>
            {BUSINESS_ACCOUNT.companyName}
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: embedded ? 8 : 10, flex: 1 }}>
          <button
            type="button"
            onClick={backToCases}
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
            Cases
          </button>
        </nav>
        {!embedded ? (
          <div style={{ padding: 10, borderTop: `1px solid ${t.stroke}` }}>
            <Link to="/ct" style={{ fontSize: 11.5, color: t.muted, textDecoration: "none" }}>
              &larr; Hub
            </Link>
          </div>
        ) : null}
      </aside>

      <main style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>
        <div
          style={{
            padding: embedded ? "20px 24px" : "32px 40px",
            maxWidth: 720,
          }}
        >
          {showCase ? (
            <CaseModal
              recoveryCase={recoveryCase}
              onBack={backToCases}
              updateCase={updateCase}
              setTick={setTick}
              setDocUploaded={setDocUploaded}
            />
          ) : (
            <CasesList order={order} cases={cases} onOpen={openCase} />
          )}
        </div>
      </main>
    </div>
  );
}

/**
 * Gray DS-I hub at `/ct`. Links to the three Trim personas and the isolated
 * Fluent remake via a plain `<a href>` (never SPA `Link`) so Fluent CSS
 * never loads inside this bundle.
 */
import { Link } from "react-router";
import { ctPalette as t, CtPanel, CtRow, CtStatusTag } from "../shared/primitives";
import { PROTEST_CASES } from "./trim-data/protestCases";
import { TRIM_JURISDICTIONS } from "./trim-data/trimJurisdictions";
import { WORKER_QUEUE } from "./trim-data/workerQueue";

const exceptionCount = PROTEST_CASES.filter(
  (c) => c.status === "hearing_queued" || c.status === "denied" || c.status === "blocked_jurisdiction",
).length;
const blockedCount = TRIM_JURISDICTIONS.filter((j) => j.rolloutGate === "blocked" || j.status === "blocked").length;
const availableHearings = WORKER_QUEUE.filter((a) => a.status === "available").length;

const PERSONAS = [
  {
    id: "owner",
    to: "/ct/owner",
    label: "Owner",
    fact: `One owning entity · ${PROTEST_CASES.length} protest cases — Notice through reduction + invoice.`,
    tag: "Owner seat",
  },
  {
    id: "operator",
    to: "/ct/operator",
    label: "Operator",
    fact: `Clients · Work · Settings · ${exceptionCount} needing attention · ${blockedCount} jurisdictions blocked.`,
    tag: "Operator seat",
  },
  {
    id: "worker",
    to: "/ct/worker",
    label: "Worker",
    fact: `Hearing queue · ${availableHearings} available · Packet → Argue → Report → Pay.`,
    tag: "Worker seat",
  },
];

export function Hub() {
  return (
    <div
      style={{
        minHeight: "100%",
        background: t.canvas,
        display: "flex",
        justifyContent: "center",
        padding: "64px 24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 640, display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: t.ink, letterSpacing: "-0.01em" }}>Trim</div>
          <div style={{ fontSize: 13, color: t.label, marginTop: 6 }}>
            Property tax over-assessment recovery — Om Coda Prototype DS-I, Register gray.
          </div>
        </div>

        <CtPanel title="Personas">
          <div>
            {PERSONAS.map((p, i) => (
              <Link key={p.id} to={p.to} style={{ textDecoration: "none", color: "inherit" }}>
                <CtRow last={i === PERSONAS.length - 1} onClick={() => {}}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: t.ink }}>{p.label}</div>
                    <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>{p.fact}</div>
                  </div>
                  <CtStatusTag label={p.tag} tone="neutral" />
                </CtRow>
              </Link>
            ))}
          </div>
        </CtPanel>

        <CtPanel title="Also in this workspace">
          <CtRow onClick={undefined}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>Register</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                World → Personas → SME → Furnish → Wiring beside the Click-through panel.
              </div>
            </div>
            <Link to="/register" style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}>
              Open →
            </Link>
          </CtRow>
          <CtRow last onClick={undefined}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>Fluent UI remake</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                Isolated document — Fluent UI React v9 translation of this plant.
              </div>
            </div>
            <a
              href="/prototype-fluent"
              style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}
            >
              Open →
            </a>
          </CtRow>
        </CtPanel>
      </div>
    </div>
  );
}

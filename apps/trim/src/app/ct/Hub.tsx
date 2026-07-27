/**
 * Gray DS-I hub at `/ct`. Links to the three personas and notes the isolated
 * Blueprint document via a plain `<a href>` (never SPA `Link`) so its global
 * @blueprintjs CSS never loads inside this bundle.
 */
import { Link } from "react-router";
import { ctPalette as t, CtPanel, CtRow, CtStatusTag } from "../shared/primitives";
import { BUSINESS_CASES, RECOVERY_CASES } from "./data/cases";
import { JURISDICTIONS } from "./data/jurisdictions";

const kickedBackCount = RECOVERY_CASES.filter((c) => c.status === "kicked_back").length;
const blockedCount = JURISDICTIONS.filter((j) => j.status === "blocked").length;

const PERSONAS = [
  {
    id: "owner",
    to: "/ct/owner",
    label: "Owner",
    fact: `One owning entity · ${BUSINESS_CASES.length} protest cases — Notice through reduction + invoice.`,
    tag: "Owner seat",
  },
  {
    id: "operator",
    to: "/ct/operator",
    label: "Operator",
    fact: `Clients · Work · Settings · ${kickedBackCount} exception · ${blockedCount} jurisdictions blocked.`,
    tag: "Operator seat",
  },
  {
    id: "worker",
    to: "/ct/worker",
    label: "Worker",
    fact: "Hearing queue · Case packet · Accept · Argue · Report outcome · Pay status.",
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
          <CtRow last onClick={undefined}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>Register</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                World → Personas → SME → Furnish beside the Click-through panel.
              </div>
            </div>
            <Link to="/register" style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}>
              Open →
            </Link>
          </CtRow>
        </CtPanel>

        <CtPanel title="Also in this workspace">
          <CtRow last onClick={undefined}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>Blueprint restyle</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                Isolated document — separate build, not part of this SPA.
              </div>
            </div>
            <a
              href="http://localhost:5181/prototype-blueprint"
              style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}
            >
              Open →
            </a>
          </CtRow>
        </CtPanel>

        <CtPanel title="Also in this workspace">
          <CtRow last onClick={undefined}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>Fluent UI remake</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                Isolated document — Fluent UI React v9. Separate build, separate document.
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

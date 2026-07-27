/**
 * Register sections — `/register/outcomes`, `/register/how`,
 * `/register/flows`, `/register/ct`. Content follows the Register law
 * (docs/build-foundation/08-outcome-so-that.md, 09-world-model.md) as
 * authored for Trim in docs/register/*.md.
 */
import { useState } from "react";
import { Link } from "react-router";
import { CtEmpty, CtPanel, CtRow, CtStatusTag, ctPalette as t } from "../shared/primitives";
import { RegisterCanvas } from "./RegisterWorkspace";
import { FORCED_SHARED_OBJECTS, OUTCOMES_KILLED, OUTCOME_PERSONAS } from "./data/outcomes";
import { HOW_PATHS } from "./data/howLeaves";
import { REGISTER_FLOWS } from "./flows";
import { RegisterFlowStepCanvas } from "./flowCanvas/RegisterFlowStepCanvas";
import { SurfaceChips } from "./panes/TraceChips";

/* -------------------------------------------------------------------------- */
/* Outcomes                                                                    */
/* -------------------------------------------------------------------------- */

export function RegisterOutcomes() {
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Outcomes</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Core outcome statements, each with a capability clause and a so-that closing back into the lattice.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {OUTCOME_PERSONAS.map((persona) => (
          <CtPanel
            key={persona.id}
            title={persona.label}
            right={
              <span style={{ fontSize: 11, color: t.muted, fontStyle: "italic" }}>{persona.soThat}</span>
            }
          >
            <div>
              {persona.outcomes.map((outcome, i) => (
                <CtRow key={outcome.id} last={i === persona.outcomes.length - 1} style={{ alignItems: "flex-start" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>{outcome.label}</span>
                      {outcome.core ? <CtStatusTag label="Core" tone="accent" /> : null}
                      <span
                        style={{
                          fontSize: 10.5,
                          color: t.muted,
                          fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                        }}
                      >
                        {outcome.id}
                      </span>
                    </div>
                    <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.5 }}>{outcome.statement}</div>
                    {outcome.surfaceIds?.length ? (
                      <div style={{ marginTop: 8 }}>
                        <SurfaceChips ids={outcome.surfaceIds} />
                      </div>
                    ) : null}
                  </div>
                </CtRow>
              ))}
            </div>
          </CtPanel>
        ))}

        <CtPanel title="Forced shared objects">
          <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
            {FORCED_SHARED_OBJECTS.map((item) => (
              <li key={item} style={{ fontSize: 12.5, color: t.label }}>
                {item}
              </li>
            ))}
          </ul>
        </CtPanel>

        <CtPanel title="Killed">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {OUTCOMES_KILLED.map((item) => (
              <CtStatusTag key={item} label={item} tone="neutral" />
            ))}
          </div>
        </CtPanel>
      </div>
    </RegisterCanvas>
  );
}

/* -------------------------------------------------------------------------- */
/* How                                                                         */
/* -------------------------------------------------------------------------- */

export function RegisterHow() {
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>How</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          The mechanism sequence that delivers each persona's Core outcome, terminating in UI-role leaves.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {HOW_PATHS.map((path) => (
          <CtPanel key={path.id} title={`${path.personaLabel} — ${path.pathLabel}`}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 6,
                marginBottom: 14,
                paddingBottom: 14,
                borderBottom: `1px solid ${t.stroke}`,
              }}
            >
              {path.steps.map((step, i) => (
                <span key={step} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      color: t.ink,
                      background: t.block,
                      borderRadius: 999,
                      padding: "3px 9px",
                    }}
                  >
                    {step}
                  </span>
                  {i < path.steps.length - 1 ? <span style={{ color: t.muted, fontSize: 12 }}>&rarr;</span> : null}
                </span>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
              {path.leaves.map((leaf) => (
                <div
                  key={leaf.id}
                  style={{
                    border: `1px solid ${t.stroke}`,
                    borderRadius: 6,
                    padding: "10px 12px",
                    background: t.frame,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: t.ink }}>{leaf.label}</div>
                    <div
                      style={{
                        marginTop: 3,
                        fontSize: 10.5,
                        color: t.muted,
                        fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                      }}
                    >
                      {leaf.id}
                      {leaf.flowId ? ` · ${leaf.flowId}` : ""}
                    </div>
                  </div>
                  {leaf.surfaceId ? <SurfaceChips ids={[leaf.surfaceId]} /> : null}
                </div>
              ))}
            </div>
          </CtPanel>
        ))}

        <CtPanel title="Furnishing strips" right={<span style={{ fontSize: 11, color: t.muted }}>Additive only</span>}>
          <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.5 }}>
            Traceable strip list with CT surface chips lives in the{" "}
            <Link to="/register/furnish" style={{ color: t.accent, fontWeight: 600, textDecoration: "none" }}>
              Furnish
            </Link>{" "}
            pane — How stays the Core path + leaves.
          </div>
        </CtPanel>
      </div>
    </RegisterCanvas>
  );
}

/* -------------------------------------------------------------------------- */
/* Flows                                                                       */
/* -------------------------------------------------------------------------- */

export function RegisterFlows() {
  const [activeId, setActiveId] = useState(REGISTER_FLOWS[0].id);
  const active = REGISTER_FLOWS.find((flow) => flow.id === activeId) ?? REGISTER_FLOWS[0];

  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Flows</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Behavioral flow maps between world states — simple boxes for components/external systems, no
          prototype UI chrome.
        </div>
      </div>

      <CtPanel
        title={active.label}
        right={<span style={{ fontSize: 11, color: t.muted }}>{active.purpose}</span>}
        style={{ marginBottom: 14 }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
          {REGISTER_FLOWS.map((flow) => {
            const isActive = flow.id === activeId;
            return (
              <button
                key={flow.id}
                type="button"
                onClick={() => setActiveId(flow.id)}
                style={{
                  fontFamily: "inherit",
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  padding: "6px 12px",
                  borderRadius: 999,
                  border: `1px solid ${isActive ? t.accent : t.stroke}`,
                  background: isActive ? t.accentBg : "transparent",
                  color: isActive ? t.accent : t.label,
                  cursor: "pointer",
                }}
              >
                {flow.label}
              </button>
            );
          })}
        </div>
        <RegisterFlowStepCanvas flow={active} />
        <div style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap" }}>
          {(["ui", "api", "job", "db", "ext"] as const).map((kind) => (
            <span key={kind} style={{ fontSize: 11, color: t.muted, display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ textTransform: "uppercase", fontWeight: 700 }}>{kind}</span>
            </span>
          ))}
        </div>
      </CtPanel>
    </RegisterCanvas>
  );
}

/* -------------------------------------------------------------------------- */
/* Click-through pointer                                                       */
/* -------------------------------------------------------------------------- */

export function RegisterCt() {
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Click-through</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          The DS-I click-through lives at its own top-level route, not nested under Register — this tab
          just points there.
        </div>
      </div>
      <CtPanel title="Personas">
        <div>
          <CtRow>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: t.ink }}>Owner</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                Notice, trust, consent, authorize, upload, status, decline, reduction, invoice.
              </div>
            </div>
            <Link to="/ct/owner" style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}>
              Open &rarr;
            </Link>
          </CtRow>
          <CtRow>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: t.ink }}>Operator</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                Portfolio, jurisdiction/licensure, exceptions, worker dispatch, collections, audit.
              </div>
            </div>
            <Link to="/ct/operator" style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}>
              Open &rarr;
            </Link>
          </CtRow>
          <CtRow last>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: t.ink }}>Worker</div>
              <div style={{ fontSize: 12, color: t.label, marginTop: 3 }}>
                Hearing queue, case packet, assignment, logistics, outcome report, pay status.
              </div>
            </div>
            <Link to="/ct/worker" style={{ fontSize: 12, fontWeight: 600, color: t.accent, textDecoration: "none" }}>
              Open &rarr;
            </Link>
          </CtRow>
        </div>
      </CtPanel>
      <div style={{ marginTop: 14 }}>
        <CtPanel title="Blueprint restyle">
          <CtEmpty label="Isolated document — see /prototype-blueprint (separate build, opened via plain link from the CT hub)." />
        </CtPanel>
      </div>
    </RegisterCanvas>
  );
}

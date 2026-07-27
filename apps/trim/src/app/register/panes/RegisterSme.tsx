/**
 * Register — SME pane.
 * Consideration → solution → refs → Implementation (click-path) when written.
 * Named UI highlights by kind and routes to CT when planted.
 */
import { useState } from "react";
import { CtPanel, CtRow, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { TextWithUiRefs } from "../components/TextWithUiRefs";
import {
  SME_PERSONAS,
  smeConsideration,
  smeReferences,
  smeSolution,
  type SmeItem,
  type SmePersona,
} from "../trace/smeRegistry";
import { IMPLEMENTATION_UI_REFS } from "../trace/implementationUiRefs";
import { PRODUCT_UI_REFS } from "../trace/productUiRefs";
import { RegisterCanvas } from "../RegisterWorkspace";
import { StatusChip } from "./TraceChips";

const IMPL_REFS = [...PRODUCT_UI_REFS, ...IMPLEMENTATION_UI_REFS];

function ImplementationBlock({ item }: { item: SmeItem }) {
  const [open, setOpen] = useState(false);
  if (!item.implementation && !item.implementationProblem) return null;
  const notDone = item.implementationPlant === "not_done";
  return (
    <div
      style={{
        width: "100%",
        marginTop: 2,
        padding: "10px 12px",
        borderRadius: 6,
        border: `1px solid ${notDone ? "rgba(220,38,38,0.35)" : t.stroke}`,
        background: t.hoverBg,
        display: "flex",
        flexDirection: "column",
        gap: open ? 8 : 0,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          width: "100%",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: t.muted, letterSpacing: "0.04em" }}>
            IMPLEMENTATION
          </span>
          {notDone ? <CtStatusTag label="Not done" tone="danger" /> : null}
        </span>
        <span style={{ fontSize: 11.5, fontWeight: 600, color: t.accent, flexShrink: 0 }}>
          {open ? "Collapse" : "Expand"}
        </span>
      </button>
      {open ? (
        <>
          {item.implementationProblem ? (
            <div style={{ fontSize: 12, color: t.ink, lineHeight: 1.5 }}>
              <span style={{ fontWeight: 600 }}>Problem: </span>
              <TextWithUiRefs text={item.implementationProblem} refs={IMPL_REFS} style={{ fontSize: 12, color: t.ink }} />
            </div>
          ) : null}
          {item.implementation ? (
            <div style={{ fontSize: 12, color: t.label, lineHeight: 1.55, whiteSpace: "pre-wrap" }}>
              <TextWithUiRefs
                text={item.implementation}
                refs={IMPL_REFS}
                additions={item.implementationAdds}
                style={{ fontSize: 12, color: t.label, whiteSpace: "pre-wrap", display: "block" }}
              />
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

function SmeItemRow({ item, last }: { item: SmeItem; last: boolean }) {
  const consideration = smeConsideration(item);
  const solution = smeSolution(item);
  const refs = smeReferences(item).filter((r) => r.url && r.url !== "#");

  return (
    <CtRow last={last} style={{ alignItems: "flex-start", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", width: "100%", gap: 10, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, letterSpacing: "0.04em", marginBottom: 4 }}>
            CONSIDERATION
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: t.ink, lineHeight: 1.45 }}>
            <TextWithUiRefs text={consideration} style={{ fontSize: 12.5, fontWeight: 600, color: t.ink }} />
          </div>
          {item.thesisGap ? (
            <div style={{ fontSize: 11, color: t.muted, marginTop: 6, lineHeight: 1.4 }}>
              <span style={{ fontWeight: 600 }}>Thesis gap: </span>
              <TextWithUiRefs text={item.thesisGap} style={{ fontSize: 11, color: t.muted }} />
            </div>
          ) : null}
        </div>
        <StatusChip status={item.status} />
      </div>

      <div style={{ fontSize: 12, color: t.label, lineHeight: 1.5 }}>
        <span style={{ fontWeight: 600, color: t.ink }}>Solution: </span>
        <TextWithUiRefs text={solution} style={{ fontSize: 12, color: t.label }} />
      </div>

      {refs.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, letterSpacing: "0.04em" }}>
            REFERENCES ({refs.length})
          </div>
          {refs.map((r) => (
            <a
              key={r.url + r.title}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: 11.5, color: t.accent, lineHeight: 1.35, textDecoration: "none" }}
            >
              {r.title}
            </a>
          ))}
        </div>
      ) : item.source ? (
        <div style={{ fontSize: 11, color: t.muted }}>{item.source}</div>
      ) : null}

      <ImplementationBlock item={item} />

      {item.notes ? (
        <div style={{ fontSize: 11, color: t.muted, lineHeight: 1.4 }}>
          <span style={{ fontWeight: 600 }}>Impl note: </span>
          <TextWithUiRefs text={item.notes} style={{ fontSize: 11, color: t.muted }} />
        </div>
      ) : null}
      {item.handoffOwner ? (
        <div style={{ fontSize: 10.5, color: t.muted }}>
          HANDOFF {item.handoffOwner.toUpperCase()} #{item.handoffNumber}
        </div>
      ) : null}
    </CtRow>
  );
}

function PersonaBlock({ persona }: { persona: SmePersona }) {
  const [open, setOpen] = useState(persona.id === "licensed-ptc-practitioner");
  const notDoneCount = persona.items.filter((i) => i.implementationPlant === "not_done").length;
  return (
    <CtPanel
      title={persona.label}
      right={
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          style={{
            border: "none",
            background: "transparent",
            color: t.accent,
            fontSize: 11.5,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {open
            ? "Collapse"
            : notDoneCount
              ? `${persona.items.length} items · ${notDoneCount} not done`
              : `${persona.items.length} items`}
        </button>
      }
    >
      <div style={{ fontSize: 12, color: t.label, marginBottom: open ? 8 : 0, lineHeight: 1.45 }}>{persona.whyExists}</div>
      {persona.domain ? (
        <div style={{ fontSize: 11, color: t.muted, marginBottom: open ? 12 : 0, lineHeight: 1.4 }}>
          <span style={{ fontWeight: 600 }}>Domain: </span>
          {persona.domain}
        </div>
      ) : null}
      {open ? (
        <div>
          {persona.items.map((item, i) => (
            <SmeItemRow key={item.id} item={item} last={i === persona.items.length - 1} />
          ))}
        </div>
      ) : null}
    </CtPanel>
  );
}

export function RegisterSme() {
  const total = SME_PERSONAS.reduce((n, p) => n + p.items.length, 0);
  const firstSeat = SME_PERSONAS[0];
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>SME</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4, lineHeight: 1.45 }}>
          Same context for every seat (world, Trim business model, Personas leaves). Named Modules / Modals / Blocks
          highlight by kind and route into the click-through. Solutions use{" "}
          <code style={{ fontSize: 11 }}>&lt;mechanism&gt; so that &lt;purpose&gt;</code> with external references (
          {total} items · {firstSeat?.label ?? ""} {firstSeat?.items.length ?? 0} on v2). Every consideration has a written Implementation
          (collapsed by default). Gaps show a red <strong style={{ fontWeight: 600 }}>Not done</strong> tag on
          Implementation — CT not fully assembled yet for that path.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {SME_PERSONAS.map((p) => (
          <PersonaBlock key={p.id} persona={p} />
        ))}
      </div>
    </RegisterCanvas>
  );
}

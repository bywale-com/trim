/**
 * Register — Furnish pane.
 * Supporting UI abilities per persona + Implementation (click-path), collapsed by default.
 * Not done = written but not planted in CT.
 */
import { useState } from "react";
import { CtPanel, CtRow, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { TextWithUiRefs } from "../components/TextWithUiRefs";
import { FURNISH_PERSONAS, type FurnishItem, type FurnishPersona } from "../trace/furnish";
import { IMPLEMENTATION_UI_REFS } from "../trace/implementationUiRefs";
import { PRODUCT_UI_REFS } from "../trace/productUiRefs";
import { RegisterCanvas } from "../RegisterWorkspace";
import { StatusChip } from "./TraceChips";

const IMPL_REFS = [...PRODUCT_UI_REFS, ...IMPLEMENTATION_UI_REFS];

function ImplementationBlock({ item }: { item: FurnishItem }) {
  const [open, setOpen] = useState(false);
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
          <div style={{ fontSize: 12, color: t.ink, lineHeight: 1.5 }}>
            <span style={{ fontWeight: 600 }}>Problem: </span>
            <TextWithUiRefs text={item.implementationProblem} refs={IMPL_REFS} style={{ fontSize: 12, color: t.ink }} />
          </div>
          <div style={{ fontSize: 12, color: t.label, lineHeight: 1.55, whiteSpace: "pre-wrap" }}>
            <TextWithUiRefs
              text={item.implementation}
              refs={IMPL_REFS}
              additions={item.implementationAdds}
              style={{ fontSize: 12, color: t.label, whiteSpace: "pre-wrap", display: "block" }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

function FurnishItemRow({ item, last }: { item: FurnishItem; last: boolean }) {
  return (
    <CtRow last={last} style={{ alignItems: "flex-start", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", width: "100%", gap: 10, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, letterSpacing: "0.04em", marginBottom: 4 }}>
            ABLE TO
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: t.ink, lineHeight: 1.45 }}>
            <TextWithUiRefs text={item.able} refs={IMPL_REFS} style={{ fontSize: 12.5, fontWeight: 600, color: t.ink }} />
          </div>
          <div style={{ fontSize: 11, color: t.muted, marginTop: 4 }}>{item.label}</div>
        </div>
        <StatusChip status={item.status} />
      </div>
      <ImplementationBlock item={item} />
    </CtRow>
  );
}

function PersonaBlock({ persona }: { persona: FurnishPersona }) {
  const [open, setOpen] = useState(persona.id === "owner");
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
              ? `${persona.items.length} · ${notDoneCount} not done`
              : `${persona.items.length}`}
        </button>
      }
    >
      {open ? (
        <div>
          {persona.items.map((item, i) => (
            <FurnishItemRow key={item.id} item={item} last={i === persona.items.length - 1} />
          ))}
        </div>
      ) : null}
    </CtPanel>
  );
}

export function RegisterFurnish() {
  const total = FURNISH_PERSONAS.reduce((n, p) => n + p.items.length, 0);
  const notDone = FURNISH_PERSONAS.reduce(
    (n, p) => n + p.items.filter((i) => i.implementationPlant === "not_done").length,
    0,
  );
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Furnish</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4, lineHeight: 1.45 }}>
          Supporting UI abilities per persona — what they should be able to do (no agent features). Each item has a
          written Implementation (Problem + relative click-path; collapsed by default). Red{" "}
          <strong style={{ fontWeight: 600 }}>Not done</strong> = not planted in CT yet ({total} items · {notDone} not
          done).
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {FURNISH_PERSONAS.map((p) => (
          <PersonaBlock key={p.id} persona={p} />
        ))}
      </div>
    </RegisterCanvas>
  );
}

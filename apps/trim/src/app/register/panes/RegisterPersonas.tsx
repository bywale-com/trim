/**
 * Personas — Outcomes → How → leaf drawer.
 * Named UI in answers highlight by kind: module / modal / block / submodal.
 */
import { useState } from "react";
import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { getHowGraphForOutcome, childrenOf } from "../howAnalysis";
import { UI_KIND_STYLE, type HowGraph, type HowNode, type HowUiRef, type UiKind } from "../howAnalysis/types";
import { FORCED_SHARED_OBJECTS, OUTCOMES_KILLED, OUTCOME_PERSONAS, type Outcome } from "../data/outcomes";
import { RegisterCanvas } from "../RegisterWorkspace";
import { useRegisterTrace } from "../trace/RegisterTraceContext";

function kindStyle(kind: UiKind) {
  return UI_KIND_STYLE[kind];
}

function Highlight({
  label,
  kind,
  surfaceId,
}: {
  label: string;
  kind: UiKind;
  surfaceId?: string;
}) {
  const { focusAndOpenCt, setHovered } = useRegisterTrace();
  const s = kindStyle(kind);
  const clickable = Boolean(surfaceId);
  return (
    <span
      title={clickable ? `${s.label} — click to open in click-through` : s.label}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={
        clickable
          ? (e) => {
              e.stopPropagation();
              focusAndOpenCt(surfaceId!);
            }
          : undefined
      }
      onMouseEnter={clickable ? () => setHovered([surfaceId!]) : undefined}
      onMouseLeave={clickable ? () => setHovered([]) : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                focusAndOpenCt(surfaceId!);
              }
            }
          : undefined
      }
      style={{
        color: s.color,
        fontWeight: 600,
        background: s.bg,
        padding: "0 3px",
        borderRadius: 2,
        cursor: clickable ? "pointer" : "default",
      }}
    >
      {label}
    </span>
  );
}

function ClarityWithUiRefs({ clarity, refs }: { clarity: string; refs: HowUiRef[] }) {
  const sorted = [...refs].sort((a, b) => b.label.length - a.label.length);
  type Part = { type: "text"; text: string } | { type: "ref"; ref: HowUiRef };
  const parts: Part[] = [];
  let rest = clarity;
  while (rest.length > 0) {
    let best: { idx: number; ref: HowUiRef } | null = null;
    for (const ref of sorted) {
      const idx = rest.indexOf(ref.label);
      if (idx === -1) continue;
      if (!best || idx < best.idx) best = { idx, ref };
    }
    if (!best) {
      parts.push({ type: "text", text: rest });
      break;
    }
    if (best.idx > 0) parts.push({ type: "text", text: rest.slice(0, best.idx) });
    parts.push({ type: "ref", ref: best.ref });
    rest = rest.slice(best.idx + best.ref.label.length);
  }

  return (
    <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.55 }}>
      {parts.map((part, i) =>
        part.type === "text" ? (
          <span key={i}>{part.text}</span>
        ) : (
          <Highlight key={i} label={part.ref.label} kind={part.ref.kind} surfaceId={part.ref.surfaceId} />
        ),
      )}
    </div>
  );
}

function HowTreeNode({
  graph,
  node,
  selectedLeafId,
  onSelectLeaf,
}: {
  graph: HowGraph;
  node: HowNode;
  selectedLeafId: string | null;
  onSelectLeaf: (node: HowNode) => void;
}) {
  const { focusAndOpenCt } = useRegisterTrace();
  const kids = childrenOf(graph, node.id);
  const isLeaf = node.kind === "leaf";
  const selected = selectedLeafId === node.id;
  const pad = 8 + node.depth * 14;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          if (!isLeaf) return;
          const opening = selectedLeafId !== node.id;
          onSelectLeaf(node);
          if (!opening) return;
          const first = node.components.find((c) => c.surfaceId);
          if (first?.surfaceId) focusAndOpenCt(first.surfaceId);
        }}
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          padding: `8px 10px 8px ${pad}px`,
          border: "none",
          borderLeft: selected ? `3px solid ${t.accent}` : `3px solid transparent`,
          background: selected ? t.accentBg : isLeaf ? t.frame : "transparent",
          borderRadius: 4,
          cursor: isLeaf ? "pointer" : "default",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12.5, fontWeight: node.kind === "outcome" ? 700 : 600, color: t.ink }}>
            {node.label}
          </span>
          {node.kind === "leaf" ? <CtStatusTag label="Leaf" tone="accent" /> : null}
          {node.kind === "answer" ? <CtStatusTag label="How" tone="neutral" /> : null}
        </div>
        {node.question ? (
          <div style={{ fontSize: 11, color: t.muted, marginTop: 3, lineHeight: 1.4 }}>{node.question}</div>
        ) : null}
        {!isLeaf && node.clarity ? (
          <div style={{ fontSize: 11.5, color: t.label, marginTop: 4, lineHeight: 1.45 }}>{node.clarity}</div>
        ) : null}
      </button>
      {kids.map((child) => (
        <HowTreeNode
          key={child.id}
          graph={graph}
          node={child}
          selectedLeafId={selectedLeafId}
          onSelectLeaf={onSelectLeaf}
        />
      ))}
      {isLeaf && selected ? <LeafDrawer node={node} /> : null}
    </div>
  );
}

function LeafDrawer({ node }: { node: HowNode }) {
  const byKind = (kind: UiKind) => node.components.filter((c) => c.kind === kind);
  const modules = byKind("module");
  const modals = byKind("modal");
  const blocks = byKind("block");
  const submodals = byKind("submodal");

  return (
    <div
      style={{
        margin: "0 0 8px 28px",
        padding: "10px 12px",
        borderLeft: `2px solid ${t.accent}`,
        background: t.frame,
        borderRadius: "0 4px 4px 0",
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700, color: t.ink, marginBottom: 4 }}>{node.label}</div>
      {node.question ? (
        <div style={{ fontSize: 12, color: t.muted, marginBottom: 8, lineHeight: 1.4 }}>{node.question}</div>
      ) : null}
      <ClarityWithUiRefs clarity={node.clarity} refs={node.components} />

      {node.components.length > 0 ? (
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
          <KindLine kind="module" refs={modules} />
          <KindLine kind="modal" refs={modals} />
          <KindLine kind="block" refs={blocks} />
          <KindLine kind="submodal" refs={submodals} />
        </div>
      ) : null}

      <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8, fontSize: 10.5, color: t.muted }}>
        {(Object.keys(UI_KIND_STYLE) as UiKind[]).map((k) => (
          <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: UI_KIND_STYLE[k].color,
              }}
            />
            {UI_KIND_STYLE[k].label}
          </span>
        ))}
      </div>
    </div>
  );
}

function KindLine({ kind, refs }: { kind: UiKind; refs: HowUiRef[] }) {
  if (refs.length === 0) return null;
  const s = UI_KIND_STYLE[kind];
  return (
    <div style={{ fontSize: 12, color: t.label, lineHeight: 1.5 }}>
      <span style={{ color: s.color, fontWeight: 600 }}>{s.label}s: </span>
      {refs.map((r, i) => (
        <span key={r.id}>
          {i > 0 ? <span style={{ color: t.muted }}> · </span> : null}
          <Highlight label={r.label} kind={r.kind} surfaceId={r.surfaceId} />
        </span>
      ))}
    </div>
  );
}

function OutcomeBlock({
  outcome,
  selected,
  onSelect,
}: {
  outcome: Outcome;
  selected: boolean;
  onSelect: () => void;
}) {
  const graph = outcome.howGraphId ? getHowGraphForOutcome(outcome.id) : undefined;
  const [leafId, setLeafId] = useState<string | null>(null);

  return (
    <div
      style={{
        borderBottom: `1px solid ${t.stroke}`,
        paddingBottom: selected ? 12 : 0,
        marginBottom: 0,
      }}
    >
      <button
        type="button"
        onClick={onSelect}
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          padding: "10px 4px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: selected ? t.accent : t.ink }}>{outcome.label}</span>
          {outcome.core ? <CtStatusTag label="Core" tone="accent" /> : null}
          {graph ? <CtStatusTag label="How" tone="neutral" /> : null}
        </div>
        <div style={{ fontSize: 12, color: t.label, marginTop: 4, lineHeight: 1.45 }}>{outcome.statement}</div>
      </button>

      {selected && graph ? (
        <div style={{ marginTop: 4, paddingLeft: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, marginBottom: 6, letterSpacing: "0.04em" }}>
            HOW TREE
          </div>
          {childrenOf(graph, null).map((root) => (
            <HowTreeNode
              key={root.id}
              graph={graph}
              node={root}
              selectedLeafId={leafId}
              onSelectLeaf={(n) => setLeafId((id) => (id === n.id ? null : n.id))}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function RegisterPersonas() {
  const [selectedOutcomeId, setSelectedOutcomeId] = useState<string | null>("owner-core");

  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: t.ink }}>Personas</div>
        <div style={{ fontSize: 12, color: t.label, marginTop: 4, lineHeight: 1.45 }}>
          Leaf answers name Modules, Modals, Blocks, Submodals — highlighted by kind. Starting from may be absolute or relative (closest containing module/modal). New names create new UI.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {OUTCOME_PERSONAS.map((persona) => (
          <CtPanel
            key={persona.id}
            title={persona.label}
            right={<span style={{ fontSize: 11, color: t.muted, fontStyle: "italic" }}>{persona.soThat}</span>}
          >
            <div>
              {persona.outcomes.map((outcome) => (
                <OutcomeBlock
                  key={outcome.id}
                  outcome={outcome}
                  selected={selectedOutcomeId === outcome.id}
                  onSelect={() => setSelectedOutcomeId((id) => (id === outcome.id ? null : outcome.id))}
                />
              ))}
            </div>
          </CtPanel>
        ))}

        <CtPanel title="Forced shared objects">
          <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
            {FORCED_SHARED_OBJECTS.map((item) => (
              <li key={item} style={{ fontSize: 12, color: t.label }}>
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

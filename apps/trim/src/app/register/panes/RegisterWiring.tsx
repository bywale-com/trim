import { CtPanel, CtRow, ctPalette as t } from "../../shared/primitives";
import {
  CROSS_CUTTING_FINDINGS,
  WIRING_CANTS,
  WIRING_FUNCTION,
  WIRING_FURNISH,
  type WiringFacet,
} from "../trace/wiring";
import { RegisterCanvas } from "../RegisterWorkspace";
import { StatusChip, SurfaceChips } from "./TraceChips";

function FacetList({ title, items }: { title: string; items: WiringFacet[] }) {
  return (
    <CtPanel title={title} right={<span style={{ fontSize: 11, color: t.muted }}>{items.length}</span>}>
      {items.map((item, i) => (
        <CtRow key={item.id} last={i === items.length - 1} style={{ alignItems: "flex-start", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", width: "100%", gap: 10 }}>
            <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600, color: t.ink }}>{item.label}</div>
            <StatusChip status={item.status} />
          </div>
          {item.notes ? <div style={{ fontSize: 11, color: t.muted, lineHeight: 1.4 }}>{item.notes}</div> : null}
          {item.flowIds.length > 0 ? (
            <div style={{ fontSize: 11, color: t.muted }}>Flows: {item.flowIds.join(", ")}</div>
          ) : null}
          <SurfaceChips ids={item.surfaceIds} />
        </CtRow>
      ))}
    </CtPanel>
  );
}

export function RegisterWiring() {
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Wiring</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          CTO three-pass (Function / Can'ts / Furnish) plus the 10 CROSS-CUTTING findings that need joint
          PM↔CTO reconciliation. Click chips to inhabit CT.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <FacetList title="Function" items={WIRING_FUNCTION} />
        <FacetList title="Can'ts" items={WIRING_CANTS} />
        <FacetList title="Furnish" items={WIRING_FURNISH} />

        <CtPanel title="CROSS-CUTTING (PM ↔ CTO)" right={<span style={{ fontSize: 11, color: t.muted }}>10</span>}>
          {CROSS_CUTTING_FINDINGS.map((finding, i) => (
            <CtRow
              key={finding.id}
              last={i === CROSS_CUTTING_FINDINGS.length - 1}
              style={{ alignItems: "flex-start", flexDirection: "column", gap: 8 }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 600, color: t.ink }}>
                #{finding.rank} · {finding.title}
              </div>
              <div style={{ fontSize: 12, color: t.label, lineHeight: 1.45 }}>
                <span style={{ fontWeight: 600, color: t.ink }}>Product: </span>
                {finding.productSide}
              </div>
              <div style={{ fontSize: 12, color: t.label, lineHeight: 1.45 }}>
                <span style={{ fontWeight: 600, color: t.ink }}>System: </span>
                {finding.systemSide}
              </div>
              <div style={{ fontSize: 11, color: t.muted, lineHeight: 1.4 }}>
                <span style={{ fontWeight: 600 }}>Reconcile: </span>
                {finding.reconciliationNeeded}
              </div>
              <div style={{ fontSize: 10.5, color: t.muted }}>{finding.sources}</div>
              {finding.flowIds.length > 0 ? (
                <div style={{ fontSize: 11, color: t.muted }}>Flows: {finding.flowIds.join(", ")}</div>
              ) : null}
              <SurfaceChips ids={finding.surfaceIds} />
            </CtRow>
          ))}
        </CtPanel>
      </div>
    </RegisterCanvas>
  );
}

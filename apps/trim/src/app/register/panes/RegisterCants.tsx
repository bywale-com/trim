import { CtPanel, CtRow, ctPalette as t } from "../../shared/primitives";
import { AGENCY_CANTS, BUSINESS_CANTS } from "../trace/cants";
import { RegisterCanvas } from "../RegisterWorkspace";
import { StatusChip, SurfaceChips } from "./TraceChips";

function CantList({ title, items }: { title: string; items: typeof BUSINESS_CANTS }) {
  return (
    <CtPanel title={title} right={<span style={{ fontSize: 11, color: t.muted }}>{items.length}</span>}>
      {items.map((item, i) => (
        <CtRow key={item.id} last={i === items.length - 1} style={{ alignItems: "flex-start", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", width: "100%", gap: 10 }}>
            <div style={{ flex: 1, fontSize: 12.5, color: t.ink, lineHeight: 1.45 }}>{item.cant}</div>
            <StatusChip status={item.status} />
          </div>
          {item.notes ? <div style={{ fontSize: 11, color: t.muted }}>{item.notes}</div> : null}
          <SurfaceChips ids={item.surfaceIds} />
        </CtRow>
      ))}
    </CtPanel>
  );
}

export function RegisterCants() {
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Can'ts</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Enrichment pass — adjacent capabilities still missing. Click surface chips to inhabit CT.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <CantList title="Business" items={BUSINESS_CANTS} />
        <CantList title="Agency Owner" items={AGENCY_CANTS} />
      </div>
    </RegisterCanvas>
  );
}

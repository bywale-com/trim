/** Decline door — invite-before-form: the confirm control stays hidden until the quiet link is clicked. Surface: biz-ct-decline. */
import { useState } from "react";
import { CtButton, ctPalette as t } from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";

export function DeclineDoor({ onDecline }: { onDecline: () => void }) {
  const [inviting, setInviting] = useState(false);

  if (!inviting) {
    return (
      <SurfaceBoundary id="biz-ct-decline" inline>
        <button
          type="button"
          onClick={() => setInviting(true)}
          style={{
            fontFamily: "inherit",
            fontSize: 12,
            color: t.muted,
            background: "none",
            border: "none",
            padding: "6px 2px",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Not interested — decline
        </button>
      </SurfaceBoundary>
    );
  }

  return (
    <SurfaceBoundary id="biz-ct-decline" style={{ marginTop: 8 }}>
      <div
        style={{
          padding: "12px 14px",
          borderRadius: 6,
          border: `1px solid ${t.stroke}`,
          background: t.frame,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 12, color: t.label }}>
          This closes the case. You can still verify it independently with the agency afterward.
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          <CtButton variant="secondary" onClick={onDecline} style={{ borderColor: t.red, color: t.red }}>
            Confirm decline
          </CtButton>
          <CtButton variant="quiet" onClick={() => setInviting(false)}>
            Cancel
          </CtButton>
        </div>
      </div>
    </SurfaceBoundary>
  );
}

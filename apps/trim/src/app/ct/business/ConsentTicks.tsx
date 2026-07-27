/** Consent — "I see it / I understand it / I'm with it", before dollar detail unlocks. Surface: biz-ct-consent. */
import { CtButton, CtCheckbox, CtPanel, ctPalette as t } from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import type { RecoveryCase } from "../data/types";

const TICKS: { key: keyof RecoveryCase["consentTicks"]; label: string; body: string }[] = [
  { key: "see", label: "I see it", body: "A named agency is holding money under my company's legal name." },
  {
    key: "understand",
    label: "I understand it",
    body: "Trove is an agent acting on my company's behalf, not the agency itself.",
  },
  {
    key: "withIt",
    label: "I'm with it",
    body: "I want to see the exact amount and how to authorize recovery.",
  },
];

export function ConsentTicks({
  ticks,
  onChange,
  onContinue,
  allTicked,
}: {
  ticks: RecoveryCase["consentTicks"];
  onChange: (key: keyof RecoveryCase["consentTicks"], value: boolean) => void;
  onContinue: () => void;
  allTicked: boolean;
}) {
  return (
    <CtPanel title="Consent" right={<span style={{ fontSize: 11, color: t.muted }}>Before dollar detail</span>}>
      <SurfaceBoundary id="biz-ct-consent" style={{ padding: 4 }}>
        <div>
          {TICKS.map((item) => (
            <CtCheckbox
              key={item.key}
              checked={ticks[item.key]}
              onChange={(value) => onChange(item.key, value)}
              label={
                <span>
                  <span style={{ fontWeight: 600 }}>{item.label}.</span> {item.body}
                </span>
              }
            />
          ))}
        </div>
        <div style={{ marginTop: 10 }}>
          <CtButton
            variant="primary"
            onClick={allTicked ? onContinue : undefined}
            style={allTicked ? undefined : { opacity: 0.4, cursor: "not-allowed" }}
          >
            Reveal case details
          </CtButton>
        </div>
      </SurfaceBoundary>
    </CtPanel>
  );
}

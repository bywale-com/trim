/** Upload panel — required docs after authorize, before the packet files. Surface: biz-ct-upload. */
import { CtButton, CtPanel, CtRow, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import type { RecoveryCase } from "../data/types";

export function UploadDocs({
  recoveryCase,
  onToggle,
  onComplete,
}: {
  recoveryCase: RecoveryCase;
  onToggle: (docId: string) => void;
  onComplete: () => void;
}) {
  const allUploaded = recoveryCase.docs.every((d) => d.uploaded);

  return (
    <CtPanel title="Upload packet" right={<span style={{ fontSize: 11, color: t.muted }}>Required to file</span>}>
      <SurfaceBoundary id="biz-ct-upload" style={{ padding: 4 }}>
        <CtPlantedBlock id="biz-ct-upload-header" title="Upload packet header" style={{ marginTop: 0 }}>
          Corporate documents required before Trove files with {recoveryCase.agency}.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-purpose-line" title="Purpose line">
          Each document establishes standing or tax identity for {recoveryCase.companyName}.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-original-unavailable" title="Original unavailable path">
          Original lost? Affidavit-of-loss alternate path — invite before form.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-securities-template" title="Securities template">
          Securities property: use state securities claim template if applicable.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-insurance-template" title="Insurance template">
          Insurance property: use state insurance claim template if applicable.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-revival-cert" title="Revival certificate">
          Entity administratively dissolved? Revival certificate upload slot.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-state-affirmation" title="State affirmation packet">
          {recoveryCase.jurisdiction}-specific affirmation docs bundled with packet.
        </CtPlantedBlock>

        <div>
          {recoveryCase.docs.map((doc, i) => (
            <CtRow key={doc.id} last={i === recoveryCase.docs.length - 1}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>{doc.label}</div>
              </div>
              {doc.uploaded ? (
                <CtStatusTag label="Uploaded" tone="success" />
              ) : (
                <CtButton variant="secondary" onClick={() => onToggle(doc.id)}>
                  Upload
                </CtButton>
              )}
            </CtRow>
          ))}
        </div>
        <div style={{ marginTop: 14 }}>
          <CtButton
            variant="primary"
            onClick={allUploaded ? onComplete : undefined}
            style={allUploaded ? undefined : { opacity: 0.4, cursor: "not-allowed" }}
          >
            Submit packet for filing
          </CtButton>
        </div>
      </SurfaceBoundary>
    </CtPanel>
  );
}

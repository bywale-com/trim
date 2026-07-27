/** Authorize door — one-time e-sign (POA/engagement), contingency % pre-set, not negotiated live. Surface: biz-ct-authorize. */
import { useState } from "react";
import { CtButton, CtFact, CtFactGrid, CtPanel, ctPalette as t } from "../../shared/primitives";
import { formatUsd } from "../../shared/format";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import type { RecoveryCase } from "../data/types";

const DEFAULT_CONTINGENCY_PCT = 15;

export function AuthorizeDoor({
  recoveryCase,
  onAuthorize,
}: {
  recoveryCase: RecoveryCase;
  onAuthorize: (contingencyPct: number) => void;
}) {
  const [officerName, setOfficerName] = useState("");
  const pct = recoveryCase.contingencyPct ?? DEFAULT_CONTINGENCY_PCT;
  const canSign = officerName.trim().length > 1;
  const estimatedFee = Math.round(recoveryCase.amount * (pct / 100));
  const needsClaimForm =
    recoveryCase.filingMethod === "mail-original" || recoveryCase.filingMethod === "notarized-original";

  return (
    <CtPanel title="Authorize" right={<span style={{ fontSize: 11, color: t.muted }}>One-time, not renegotiated</span>}>
      <SurfaceBoundary id="biz-ct-authorize" style={{ padding: 4 }}>
        <CtFactGrid columns={2}>
          <CtFact label="Contingency %" value={`${pct}% — pre-set, locked at signing`} />
          <CtFact label="What this authorizes" value="Filing, follow-up, and resubmission on procedural denials" />
        </CtFactGrid>

        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11.5, color: t.label, marginBottom: 6 }}>
            Officer name (power of attorney / engagement signature)
          </div>
          <input
            value={officerName}
            onChange={(e) => setOfficerName(e.target.value)}
            placeholder="Type full name to sign"
            style={{
              width: "100%",
              maxWidth: 340,
              fontFamily: "inherit",
              fontSize: 13,
              padding: "9px 12px",
              borderRadius: 6,
              border: `1px solid ${t.stroke}`,
              background: t.white,
              color: t.ink,
            }}
          />
        </div>

        <div style={{ marginTop: 14 }}>
          <CtButton
            variant="primary"
            onClick={canSign ? () => onAuthorize(pct) : undefined}
            style={canSign ? undefined : { opacity: 0.4, cursor: "not-allowed" }}
          >
            Sign &amp; authorize
          </CtButton>
        </div>

        <CtPlantedBlock id="biz-ct-indemnification" title="Indemnification clause">
          You agree to indemnify Trove against claims arising from false or unauthorized representation of {recoveryCase.companyName}.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-signer-title" title="Signer title">
          <input
            placeholder="Officer title (e.g. CEO, CFO)"
            style={{
              width: "100%",
              maxWidth: 280,
              fontFamily: "inherit",
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 4,
              border: `1px solid ${t.stroke}`,
              background: t.white,
              color: t.ink,
            }}
          />
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-knowledge-attestation" title="Knowledge attestation">
          <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "default" }}>
            <input type="checkbox" readOnly style={{ marginTop: 2 }} />
            <span>I have read and understand the authorization terms above.</span>
          </label>
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-fee-example" title="Fee Example Line">
          {formatUsd(recoveryCase.amount)} × {pct}% = {formatUsd(estimatedFee)}
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-non-collapsible-fee" title="Non-collapsible Fee Disclosure Block">
          Contingency fee: {pct}% of recovered amount, due only after {recoveryCase.agency} pays your company. No upfront fee.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-fee-obligor" title="Fee Obligor Acknowledgment">
          {recoveryCase.companyName} acknowledges it is the obligor for Trove&apos;s contingency fee upon disbursement.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-default-vs-offered" title="Default Vs Offered Fee">
          Statutory default: 15% · Offered on this case: {pct}%
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-estimated-fee" title="Estimated Fee Line">
          Estimated fee at recovery: {formatUsd(estimatedFee)} (based on reported amount {formatUsd(recoveryCase.amount)}).
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-post-authorize-steps" title="Post-Authorize Steps List">
          <ol style={{ margin: 0, paddingLeft: 18 }}>
            <li>Upload required corporate documents</li>
            <li>Packet filed with {recoveryCase.agency}</li>
            <li>State pays your company; Trove invoices its cut</li>
          </ol>
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-before-after-fee" title="Before/after fee dollar lines">
          Gross recovery: {formatUsd(recoveryCase.amount)} · Less Trove fee ({pct}%): {formatUsd(estimatedFee)} · Net to company:{" "}
          {formatUsd(recoveryCase.amount - estimatedFee)}
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-fee-basis" title="Fee basis note">
          Fee calculated on the amount actually disbursed by the holding agency, not the reported estimate.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-entity-identity" title="Entity Identity Attestation">
          I attest that I am an authorized officer of {recoveryCase.companyName} and that the entity identity on this claim is correct.
        </CtPlantedBlock>

        {needsClaimForm ? (
          <CtPlantedBlock id="biz-ct-claim-form-packet" title="Claim form packet">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <CtButton variant="secondary">Download claim form</CtButton>
              {recoveryCase.filingMethod === "notarized-original" ? (
                <span style={{ fontSize: 11, color: t.muted }}>Wet-ink signature and notarization required before mailing.</span>
              ) : (
                <span style={{ fontSize: 11, color: t.muted }}>Original signature required — mail completed form to {recoveryCase.agency}.</span>
              )}
            </div>
          </CtPlantedBlock>
        ) : null}
      </SurfaceBoundary>
    </CtPanel>
  );
}

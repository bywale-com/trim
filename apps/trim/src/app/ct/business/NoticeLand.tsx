/** Notice land — proof facts + trust strip. Dollar detail stays masked until consent (see ConsentTicks). Surfaces: biz-ct-notice, biz-ct-trust. */
import { CtFact, CtFactGrid, CtPanel, ctPalette as t } from "../../shared/primitives";
import { formatUsd } from "../../shared/format";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { CtPlantedBlock } from "../shared/CtPlantedBlock";
import type { RecoveryCase } from "../data/types";

export function NoticeLand({ recoveryCase, revealed }: { recoveryCase: RecoveryCase; revealed: boolean }) {
  return (
    <CtPanel title="Notice">
      <SurfaceBoundary id="biz-ct-notice" style={{ padding: 4 }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.45 }}>
            {recoveryCase.agency} holds money reported under your company's legal name.
          </div>
        </div>

        <CtFactGrid columns={3}>
          <CtFact label="Holding agency" value={recoveryCase.agency} />
          <CtFact label="Case reference" value={recoveryCase.caseRef} />
          <CtFact
            label="Amount"
            value={
              revealed ? (
                formatUsd(recoveryCase.amount)
              ) : (
                <span style={{ filter: "blur(5px)", userSelect: "none" }}>{formatUsd(recoveryCase.amount)}</span>
              )
            }
          />
        </CtFactGrid>

        {!revealed ? (
          <div style={{ marginTop: 10, fontSize: 11.5, color: t.muted }}>
            Exact amount unlocks once you've read the three lines below.
          </div>
        ) : null}
      </SurfaceBoundary>

      <SurfaceBoundary id="biz-ct-trust" style={{ marginTop: 18, padding: 4 }}>
        <div
          style={{
            padding: "12px 14px",
            borderRadius: 6,
            background: t.accentBg,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: t.accent }}>No upfront fee, ever</span>
          <span style={{ fontSize: 11.5, color: t.label }}>
            Trove takes a pre-set cut only after the state pays your company.{" "}
            <a href="#" style={{ color: t.accent, textDecoration: "underline" }} onClick={(e) => e.preventDefault()}>
              Verify {recoveryCase.caseRef} yourself
            </a>{" "}
            with {recoveryCase.agency} at any time — we never ask you to take our word for it.
          </span>
        </div>

        <CtPlantedBlock id="biz-ct-trust-bundle" title="Trust bundle" style={{ marginTop: 10, background: "transparent", border: "none", padding: 0 }}>
          Public record names your company; Trove found it and is offering to recover it on contingency.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-condensed-trust" title="Condensed trust bundle">
          No fee unless recovered · State pays you directly · Case ref {recoveryCase.caseRef} is verifiable.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-scam-category" title="Scam-category block">
          Legitimate outreach cites a verifiable case reference — never asks for upfront payment or bank credentials.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-non-affiliation" title="Non-affiliation footer">
          Trove is not affiliated with {recoveryCase.agency} or any state treasury.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-no-escrow" title="No-escrow one-liner">
          {recoveryCase.agency} pays {recoveryCase.companyName} directly — Trove never holds these funds.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-caseref-recap" title="CaseRef recap">
          Case {recoveryCase.caseRef} · {recoveryCase.agency} · {recoveryCase.jurisdiction}
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-dual-role" title="Dual-role disclosure">
          Trove acts as finder on your behalf; {recoveryCase.agency} remains the holding agency and payer of record.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-reciprocal-reporting" title="Reciprocal reporting footnote">
          Property was reported to the state by a holder — reciprocal reporting rules vary by jurisdiction.
        </CtPlantedBlock>

        <CtPlantedBlock id="biz-ct-claimant-entity" title="Claimant entity">
          Claimant: {recoveryCase.companyName} ({recoveryCase.jurisdiction})
        </CtPlantedBlock>
      </SurfaceBoundary>
    </CtPanel>
  );
}

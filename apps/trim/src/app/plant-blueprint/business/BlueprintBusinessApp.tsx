import { useState, type ReactNode } from "react";
import { useSearchParams } from "react-router";
import {
  Button,
  Callout,
  Card,
  CardList,
  CheckboxCard,
  Classes,
  EntityTitle,
  InputGroup,
  Section,
  SectionCard,
  Tag,
} from "@blueprintjs/core";
import { BlueprintShell } from "../shell/BlueprintShell";
import { STATUS_META } from "../data/statusIntent";
import { RECOVERY_CASES, formatDate, formatUsd, type RecoveryCase } from "../data/seed";
import { KICKBACK_REASON_LABEL } from "../data/seed";

const DEFAULT_CONTINGENCY_PCT = 15;

function useBusinessCasesState() {
  const [cases, setCases] = useState<Record<string, RecoveryCase>>(() =>
    Object.fromEntries(
      RECOVERY_CASES.map((c) => [c.id, { ...c, consentTicks: { ...c.consentTicks }, docs: c.docs.map((d) => ({ ...d })) }]),
    ),
  );

  function updateCase(id: string, patch: Partial<RecoveryCase>) {
    setCases((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }
  function setTick(id: string, tick: keyof RecoveryCase["consentTicks"], value: boolean) {
    setCases((prev) => ({ ...prev, [id]: { ...prev[id], consentTicks: { ...prev[id].consentTicks, [tick]: value } } }));
  }
  function setDocUploaded(id: string, docId: string) {
    setCases((prev) => ({
      ...prev,
      [id]: { ...prev[id], docs: prev[id].docs.map((d) => (d.id === docId ? { ...d, uploaded: true } : d)) },
    }));
  }

  return { cases, updateCase, setTick, setDocUploaded };
}

export function BlueprintBusinessApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { cases, updateCase, setTick, setDocUploaded } = useBusinessCasesState();
  const order = RECOVERY_CASES.map((c) => c.id);
  const requestedId = searchParams.get("case");
  const selectedId = requestedId && cases[requestedId] ? requestedId : order[0];
  const c = cases[selectedId];

  return (
    <BlueprintShell>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24, alignItems: "flex-start" }}>
        <Section title="Cases" compact>
          <SectionCard padded={false}>
            <CardList bordered={false}>
              {order.map((id) => {
                const item = cases[id];
                const meta = STATUS_META[item.status];
                return (
                  <Card
                    key={id}
                    interactive
                    selected={id === selectedId}
                    onClick={() => setSearchParams({ case: id })}
                    compact
                  >
                    <EntityTitle
                      title={item.companyName}
                      subtitle={item.jurisdiction}
                      tags={
                        <Tag minimal intent={meta.intent}>
                          {meta.label}
                        </Tag>
                      }
                    />
                  </Card>
                );
              })}
            </CardList>
          </SectionCard>
        </Section>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <BusinessCaseBody
            recoveryCase={c}
            onTick={(tick, v) => setTick(c.id, tick, v)}
            onConsentContinue={() => updateCase(c.id, { status: "consented" })}
            onAuthorize={(pct) => updateCase(c.id, { status: "authorized", contingencyPct: pct })}
            onUploadDoc={(docId) => setDocUploaded(c.id, docId)}
            onSubmitPacket={() => updateCase(c.id, { status: "filing" })}
            onDecline={() => updateCase(c.id, { status: "declined" })}
          />
        </div>
      </div>
    </BlueprintShell>
  );
}

function BusinessCaseBody({
  recoveryCase: c,
  onTick,
  onConsentContinue,
  onAuthorize,
  onUploadDoc,
  onSubmitPacket,
  onDecline,
}: {
  recoveryCase: RecoveryCase;
  onTick: (tick: keyof RecoveryCase["consentTicks"], value: boolean) => void;
  onConsentContinue: () => void;
  onAuthorize: (pct: number) => void;
  onUploadDoc: (docId: string) => void;
  onSubmitPacket: () => void;
  onDecline: () => void;
}) {
  if (c.status === "notified" || c.status === "consented") {
    const revealed = c.status === "consented";
    return (
      <>
        <NoticeSection recoveryCase={c} revealed={revealed} />
        {!revealed ? (
          <ConsentSection ticks={c.consentTicks} onTick={onTick} onContinue={onConsentContinue} onDecline={onDecline} />
        ) : (
          <AuthorizeSection recoveryCase={c} onAuthorize={onAuthorize} onDecline={onDecline} />
        )}
      </>
    );
  }

  if (c.status === "authorized") {
    return <UploadSection recoveryCase={c} onUploadDoc={onUploadDoc} onSubmitPacket={onSubmitPacket} />;
  }

  if (c.status === "declined") {
    return (
      <Callout intent="none" title="Declined">
        You've declined recovery for {c.caseRef}. The record stays with {c.agency}.
      </Callout>
    );
  }

  return <StatusSection recoveryCase={c} />;
}

function NoticeSection({ recoveryCase: c, revealed }: { recoveryCase: RecoveryCase; revealed: boolean }) {
  return (
    <Section title={c.companyName} subtitle={c.agency}>
      <SectionCard>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <Fact label="Case reference" value={c.caseRef} />
          <Fact
            label="Amount"
            value={revealed ? formatUsd(c.amount) : <span style={{ filter: "blur(5px)" }}>{formatUsd(c.amount)}</span>}
          />
        </div>
      </SectionCard>
      <SectionCard>
        <Callout intent="primary" icon="shield" title="No upfront fee, ever">
          Trove takes a pre-set cut only after the state pays your company. Verify {c.caseRef} directly with{" "}
          {c.agency} at any time.
        </Callout>
      </SectionCard>
    </Section>
  );
}

const CONSENT_ITEMS: { key: keyof RecoveryCase["consentTicks"]; label: string; body: string }[] = [
  { key: "see", label: "I see it", body: "A named agency is holding money under my company's legal name." },
  { key: "understand", label: "I understand it", body: "Trove is an agent acting on my company's behalf." },
  { key: "withIt", label: "I'm with it", body: "I want to see the exact amount and how to authorize recovery." },
];

function ConsentSection({
  ticks,
  onTick,
  onContinue,
  onDecline,
}: {
  ticks: RecoveryCase["consentTicks"];
  onTick: (tick: keyof RecoveryCase["consentTicks"], value: boolean) => void;
  onContinue: () => void;
  onDecline: () => void;
}) {
  const [inviting, setInviting] = useState(false);
  const allTicked = Object.values(ticks).every(Boolean);

  return (
    <Section title="Consent" subtitle="Before dollar detail">
      <SectionCard padded={false}>
        <CardList bordered={false}>
          {CONSENT_ITEMS.map((item) => (
            <CheckboxCard
              key={item.key}
              checked={ticks[item.key]}
              onChange={(e) => onTick(item.key, e.currentTarget.checked)}
              label={item.label}
            >
              <span className={Classes.TEXT_MUTED} style={{ fontSize: 12.5 }}>
                {item.body}
              </span>
            </CheckboxCard>
          ))}
        </CardList>
      </SectionCard>
      <SectionCard>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Button intent="primary" disabled={!allTicked} onClick={onContinue}>
            Reveal case details
          </Button>
          {!inviting ? (
            <Button minimal small onClick={() => setInviting(true)}>
              Not interested — decline
            </Button>
          ) : (
            <>
              <span className={Classes.TEXT_MUTED} style={{ fontSize: 12 }}>
                This closes the case.
              </span>
              <Button small intent="danger" minimal onClick={onDecline}>
                Confirm decline
              </Button>
              <Button small minimal onClick={() => setInviting(false)}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </SectionCard>
    </Section>
  );
}

function AuthorizeSection({
  recoveryCase: c,
  onAuthorize,
  onDecline,
}: {
  recoveryCase: RecoveryCase;
  onAuthorize: (pct: number) => void;
  onDecline: () => void;
}) {
  const [officerName, setOfficerName] = useState("");
  const [inviting, setInviting] = useState(false);
  const pct = c.contingencyPct ?? DEFAULT_CONTINGENCY_PCT;

  return (
    <Section title="Authorize" subtitle="One-time, not renegotiated">
      <SectionCard>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 16 }}>
          <Fact label="Contingency %" value={`${pct}% — pre-set, locked at signing`} />
          <Fact label="Authorizes" value="Filing, follow-up, resubmission on procedural denials" />
        </div>
        <InputGroup
          value={officerName}
          onChange={(e) => setOfficerName(e.target.value)}
          placeholder="Officer name — type full name to sign"
          style={{ maxWidth: 340 }}
        />
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 12 }}>
          <Button intent="primary" disabled={officerName.trim().length < 2} onClick={() => onAuthorize(pct)}>
            Sign &amp; authorize
          </Button>
          {!inviting ? (
            <Button minimal small onClick={() => setInviting(true)}>
              Not interested — decline
            </Button>
          ) : (
            <>
              <Button small intent="danger" minimal onClick={onDecline}>
                Confirm decline
              </Button>
              <Button small minimal onClick={() => setInviting(false)}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </SectionCard>
    </Section>
  );
}

function UploadSection({
  recoveryCase: c,
  onUploadDoc,
  onSubmitPacket,
}: {
  recoveryCase: RecoveryCase;
  onUploadDoc: (docId: string) => void;
  onSubmitPacket: () => void;
}) {
  const allUploaded = c.docs.every((d) => d.uploaded);
  return (
    <Section title="Upload packet" subtitle="Required to file">
      <SectionCard padded={false}>
        <CardList bordered={false}>
          {c.docs.map((doc) => (
            <Card key={doc.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>{doc.label}</span>
              {doc.uploaded ? (
                <Tag intent="success" minimal icon="tick">
                  Uploaded
                </Tag>
              ) : (
                <Button small onClick={() => onUploadDoc(doc.id)}>
                  Upload
                </Button>
              )}
            </Card>
          ))}
        </CardList>
      </SectionCard>
      <SectionCard>
        <Button intent="primary" disabled={!allUploaded} onClick={onSubmitPacket}>
          Submit packet for filing
        </Button>
      </SectionCard>
    </Section>
  );
}

function StatusSection({ recoveryCase: c }: { recoveryCase: RecoveryCase }) {
  const meta = STATUS_META[c.status];
  const isPaidOrInvoiced = c.status === "paid_claimant" || c.status === "invoiced";

  return (
    <>
      <Section title="Status" rightElement={<Tag intent={meta.intent}>{meta.label}</Tag>}>
        <SectionCard>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <Fact label="Amount" value={formatUsd(c.amount)} />
            <Fact label="Contingency %" value={c.contingencyPct ? `${c.contingencyPct}% — locked` : "—"} />
            <Fact label="Days in state" value={`${c.daysInState}`} />
          </div>
        </SectionCard>
        {c.status === "kicked_back" && c.kickbackReason ? (
          <SectionCard>
            <Callout intent="warning" icon="warning-sign" title={`Needs a fix — ${KICKBACK_REASON_LABEL[c.kickbackReason]}`}>
              This is a procedural denial, not a rejection. Trove Ops is correcting and resubmitting under your
              existing authorization — no action needed from you.
            </Callout>
          </SectionCard>
        ) : null}
        <SectionCard>
          <Tag minimal>Annual re-search enrolled</Tag>
        </SectionCard>
      </Section>

      {isPaidOrInvoiced ? (
        <Section title="Paid / invoice">
          <SectionCard>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              <Fact
                label="State paid you"
                value={c.paidDate ? `${formatUsd(c.amount)} on ${formatDate(c.paidDate)}` : "Pending"}
              />
              <Fact
                label="Trove's invoice"
                value={c.status === "invoiced" && c.invoiceAmount ? `${formatUsd(c.invoiceAmount)} — settled` : "Issuing shortly"}
              />
            </div>
          </SectionCard>
        </Section>
      ) : null}
    </>
  );
}

function Fact({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <div className={Classes.TEXT_MUTED} style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.03em" }}>
        {label}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

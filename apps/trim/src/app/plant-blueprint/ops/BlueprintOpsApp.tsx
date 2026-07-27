import { useState } from "react";
import {
  Button,
  Classes,
  HTMLTable,
  NonIdealState,
  Section,
  SectionCard,
  Tab,
  Tabs,
  Tag,
} from "@blueprintjs/core";
import { BlueprintShell } from "../shell/BlueprintShell";
import { RECOVERY_CASES, JURISDICTIONS, auditForCase, formatUsd, KICKBACK_REASON_LABEL, type RecoveryCase } from "../data/seed";

export function BlueprintOpsApp() {
  const [tab, setTab] = useState("jurisdiction");

  return (
    <BlueprintShell>
      <Tabs id="ops-tabs" selectedTabId={tab} onChange={(id) => setTab(String(id))} large>
        <Tab id="jurisdiction" title="Jurisdiction" />
        <Tab id="exceptions" title="Exceptions" />
      </Tabs>
      <div style={{ marginTop: 20 }}>{tab === "jurisdiction" ? <JurisdictionPanel /> : <ExceptionsPanel />}</div>
    </BlueprintShell>
  );
}

function JurisdictionPanel() {
  const registeredCount = JURISDICTIONS.filter((j) => j.status === "registered").length;
  const blockedCount = JURISDICTIONS.length - registeredCount;

  return (
    <Section
      title="Jurisdiction"
      subtitle={`${registeredCount} states registered · ${blockedCount} blocked`}
    >
      <SectionCard padded={false}>
        <HTMLTable interactive={false} striped style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>State</th>
              <th>Status</th>
              <th>Registration model</th>
              <th>Filing method</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {JURISDICTIONS.map((j) => (
              <tr key={j.code}>
                <td>
                  <strong>{j.name}</strong> <span className={Classes.TEXT_MUTED}>({j.code})</span>
                </td>
                <td>
                  <Tag intent={j.status === "registered" ? "success" : "danger"} minimal>
                    {j.status === "registered" ? "Registered" : "Blocked"}
                  </Tag>
                </td>
                <td>{j.model}</td>
                <td>{j.filingMethod ?? "—"}</td>
                <td className={Classes.TEXT_MUTED} style={{ fontSize: 12, maxWidth: 260 }}>
                  {j.note ?? (j.renewalDue ? `Renewal due ${j.renewalDue}` : "")}
                </td>
              </tr>
            ))}
          </tbody>
        </HTMLTable>
      </SectionCard>
    </Section>
  );
}

function ExceptionsPanel() {
  const [cases, setCases] = useState<Record<string, RecoveryCase>>(() =>
    Object.fromEntries(
      RECOVERY_CASES.map((c) => [c.id, { ...c, consentTicks: { ...c.consentTicks }, docs: c.docs.map((d) => ({ ...d })) }]),
    ),
  );
  const exceptions = Object.values(cases).filter((c) => c.status === "kicked_back");

  function resolve(id: string) {
    setCases((prev) => ({ ...prev, [id]: { ...prev[id], status: "filing", kickbackReason: undefined, daysInState: 0 } }));
  }

  return (
    <Section title="Exceptions" subtitle="Procedural denials only — not permanently stuck">
      {exceptions.length === 0 ? (
        <SectionCard>
          <NonIdealState icon="tick-circle" title="All clear" description="No exceptions right now." />
        </SectionCard>
      ) : (
        exceptions.map((c) => (
          <SectionCard key={c.id}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
              <div>
                <strong style={{ fontSize: 15 }}>{c.companyName}</strong>{" "}
                <span className={Classes.TEXT_MUTED}>{c.caseRef}</span>
              </div>
              <Tag intent="warning">{c.kickbackReason ? KICKBACK_REASON_LABEL[c.kickbackReason] : "Exception"}</Tag>
            </div>

            <div style={{ display: "flex", gap: 32, marginBottom: 16 }}>
              <Fact label="Amount" value={formatUsd(c.amount)} />
              <Fact label="Jurisdiction" value={c.jurisdiction} />
            </div>

            <div className={Classes.TEXT_MUTED} style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 8 }}>
              Case audit glance
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
              {auditForCase(c.id).map((entry) => (
                <div key={entry.id} style={{ display: "flex", gap: 10, fontSize: 12.5 }}>
                  <span className={Classes.TEXT_MUTED} style={{ width: 84, flexShrink: 0 }}>
                    {entry.timestamp}
                  </span>
                  <span>
                    <strong>{entry.actor}</strong> — {entry.action}
                  </span>
                </div>
              ))}
            </div>

            <Button intent="primary" onClick={() => resolve(c.id)}>
              Resubmit &amp; clear exception
            </Button>
          </SectionCard>
        ))
      )}
    </Section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className={Classes.TEXT_MUTED} style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.03em" }}>
        {label}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

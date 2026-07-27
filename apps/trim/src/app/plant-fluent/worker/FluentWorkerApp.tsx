/**
 * Fluent UI Worker desk — full parity with /ct/worker.
 * Queue → Packet → Assignment → Hearing → Outcome → Pay.
 * Route: /prototype-fluent/worker
 */
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Field,
  Input,
  MessageBar,
  MessageBarBody,
  Radio,
  RadioGroup,
  Tab,
  TabList,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { FluentShell } from "../FluentShell";
import { WORKER_QUEUE } from "../data/workerQueue";
import type { WorkerAssignment } from "../data/types";
import { formatUsd } from "../data/format";

// ─── Styles ──────────────────────────────────────────────────────────────────

const useStyles = makeStyles({
  layout: {
    display: "flex",
    height: "100%",
    minHeight: "calc(100vh - 48px)",
  },
  sidebar: {
    width: "200px",
    flexShrink: 0,
    borderRightWidth: tokens.strokeWidthThin,
    borderRightStyle: "solid",
    borderRightColor: tokens.colorNeutralStroke1,
    backgroundColor: tokens.colorNeutralBackground2,
    display: "flex",
    flexDirection: "column",
    padding: `${tokens.spacingVerticalM} 0`,
  },
  sidebarHeader: {
    padding: `0 ${tokens.spacingHorizontalL}`,
    marginBottom: tokens.spacingVerticalM,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    cursor: "pointer",
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    fontFamily: "inherit",
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
    "&:hover": {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
  },
  navItemActive: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorSubtleBackgroundSelected,
    borderLeftWidth: "2px",
    borderLeftStyle: "solid",
    borderLeftColor: tokens.colorCompoundBrandStroke,
  },
  main: {
    flex: 1,
    overflowY: "auto",
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXXL}`,
  },
  mainContent: {
    maxWidth: "720px",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalXL}`,
    marginBottom: tokens.spacingVerticalM,
  },
  factItem: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  checklistItem: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXS} 0`,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  evidenceItem: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXXS} 0`,
    color: tokens.colorNeutralForeground2,
  },
  backBtn: {
    marginBottom: tokens.spacingVerticalM,
  },
  section: {
    marginBottom: tokens.spacingVerticalXL,
  },
  outcomeButtons: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    marginTop: tokens.spacingVerticalL,
  },
});

// ─── State hook (inline in view controller) ──────────────────────────────────

// ─── Helpers ─────────────────────────────────────────────────────────────────

function FactItem({ label, value }: { label: string; value: string | React.ReactNode }) {
  const styles = useStyles();
  return (
    <div className={styles.factItem}>
      <Text size={100} style={{ color: tokens.colorNeutralForeground3 }}>{label}</Text>
      <Text size={300} weight="semibold">{value}</Text>
    </div>
  );
}

// ─── Hearing queue ────────────────────────────────────────────────────────────

type QueueTab = "available" | "mine" | "completed";

function HearingQueue({
  assignments,
  onSelect,
}: {
  assignments: WorkerAssignment[];
  onSelect: (id: string) => void;
}) {
  const [tab, setTab] = useState<QueueTab>("available");
  const available = assignments.filter((a) => a.status === "available");
  const mine = assignments.filter((a) => a.status === "assigned" && a.workerId === "wk-self");
  const completed = assignments.filter((a) => a.status === "completed");

  const rows = tab === "available" ? available : tab === "mine" ? mine : completed;

  return (
    <div>
      <Text as="h2" size={500} weight="semibold" block style={{ marginBottom: "4px" }}>
        Hearing queue
      </Text>
      <Text size={200} style={{ color: tokens.colorNeutralForeground2, display: "block", marginBottom: tokens.spacingVerticalM }}>
        Available hearing assignments in your county/board coverage.
      </Text>

      <TabList
        selectedValue={tab}
        onTabSelect={(_e, d) => setTab(d.value as QueueTab)}
        size="small"
        style={{ marginBottom: tokens.spacingVerticalL }}
      >
        <Tab value="available">Available ({available.length})</Tab>
        <Tab value="mine">My assignments ({mine.length})</Tab>
        <Tab value="completed">Completed ({completed.length})</Tab>
      </TabList>

      {rows.length === 0 ? (
        <Card>
          <Text size={300} style={{ color: tokens.colorNeutralForeground3, padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL}`, display: "block", textAlign: "center" }}>
            No {tab === "available" ? "available" : tab === "mine" ? "active" : "completed"} assignments.
          </Text>
        </Card>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                {["Parcel ID", "Owner entity", "County", "Hearing date", "Board", "Format", "Packet", ""].map((h) => (
                  <TableHeaderCell key={h}>
                    <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((a) => (
                <TableRow
                  key={a.id}
                  style={{ cursor: a.status === "available" ? "pointer" : "default" }}
                  onClick={a.status === "available" ? () => onSelect(a.id) : undefined}
                >
                  <TableCell><Text size={300} weight="semibold">{a.parcelId}</Text></TableCell>
                  <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{a.ownerEntityName}</Text></TableCell>
                  <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{a.county}</Text></TableCell>
                  <TableCell><Text size={200}>{a.hearingDate} {a.hearingTime}</Text></TableCell>
                  <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{a.hearingBoard}</Text></TableCell>
                  <TableCell>
                    <Badge appearance="tint" color={a.hearingType === "arb-in-person" ? "informative" : "brand"}>
                      {a.hearingType.replace(/-/g, " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge appearance="tint" color={a.packetReady ? "success" : "warning"}>
                      {a.packetReady ? "Ready" : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {a.status === "available" && (
                      <Button size="small" appearance="secondary" onClick={(e) => { e.stopPropagation(); onSelect(a.id); }}>
                        View packet
                      </Button>
                    )}
                    {a.status === "completed" && (
                      <Badge appearance="tint" color={a.outcome === "reduced" ? "success" : a.outcome === "denied" ? "danger" : "warning"}>
                        {a.outcome ?? "completed"}
                      </Badge>
                    )}
                    {a.status === "assigned" && (
                      <Badge appearance="tint" color="brand">Assigned to me</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
}

// ─── Case packet ─────────────────────────────────────────────────────────────

function CasePacketView({
  a,
  onAccept,
  onDecline,
  onBack,
}: {
  a: WorkerAssignment;
  onAccept: () => void;
  onDecline: () => void;
  onBack: () => void;
}) {
  const styles = useStyles();
  return (
    <div>
      <Button appearance="transparent" className={styles.backBtn} onClick={onBack}>
        ← Queue
      </Button>

      <Text as="h2" size={500} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
        Case packet
      </Text>

      <Card style={{ marginBottom: tokens.spacingVerticalL }}>
        <CardHeader
          header={<Text weight="semibold">Case facts</Text>}
          action={
            <Badge appearance="tint" color={a.packetReady ? "success" : "warning"}>
              {a.packetReady ? "Packet ready" : "Packet pending"}
            </Badge>
          }
        />
        <div className={styles.twoCol}>
          <FactItem label="Parcel ID" value={a.parcelId} />
          <FactItem label="County (CAD)" value={`${a.county} (${a.countyAppraisalDistrict})`} />
          <FactItem label="Owner entity" value={a.ownerEntityName} />
          <FactItem label="Assessed value" value={formatUsd(a.assessedValue)} />
          <FactItem label="Evidence value" value={formatUsd(a.evidenceValue)} />
          <FactItem label="Est. excess" value={formatUsd(a.assessedValue - a.evidenceValue)} />
        </div>

        <Divider style={{ margin: `${tokens.spacingVerticalM} 0` }} />

        <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3, textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: tokens.spacingVerticalS }}>
          Evidence preview
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXXS }}>
          {[
            `6 comparable sales (comps) — Q3/Q4 ${new Date().getFullYear() - 1}`,
            "Uniformity equity table — 4 like-kind parcels",
            "Income approach summary (if rent roll uploaded)",
            "Argument outline — valuation gap narrative",
          ].map((item, i) => (
            <div key={i} className={styles.evidenceItem}>
              <Text size={200}>▸ {item}</Text>
            </div>
          ))}
        </div>

        <Divider style={{ margin: `${tokens.spacingVerticalM} 0` }} />

        <MessageBar intent="info">
          <MessageBarBody>
            <strong>Authority proof:</strong> Appointment of Agent reference on file —{" "}
            TDLR-licensed Trim practitioner, {a.county} County registration confirmed.
          </MessageBarBody>
        </MessageBar>
      </Card>

      <Card>
        <CardHeader header={<Text weight="semibold">Accept or decline this assignment</Text>} />
        <Text size={300} style={{ color: tokens.colorNeutralForeground2, display: "block", marginBottom: tokens.spacingVerticalM }}>
          Accepting locks you to this case. You are responsible for attending the ARB hearing and
          submitting the outcome report within 24 hours of the hearing.
        </Text>
        <div style={{ display: "flex", gap: tokens.spacingHorizontalM }}>
          <Button appearance="primary" onClick={onAccept}>
            Accept assignment →
          </Button>
          <Button appearance="secondary" onClick={onDecline}>
            Decline
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ─── Hearing logistics ────────────────────────────────────────────────────────

function HearingLogisticsView({
  a,
  onBack,
  onReportOutcome,
}: {
  a: WorkerAssignment;
  onBack: () => void;
  onReportOutcome: () => void;
}) {
  const styles = useStyles();
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const checklistItems = [
    a.hearingType === "arb-in-person"
      ? `Arrive 15 min early — ${a.hearingBoard} venue`
      : "Log into county ARB portal 10 min before",
    "Bring printed case packet (3 copies)",
    "Photo ID + TDLR agent credential card",
    `Parcel ID ${a.parcelId} confirmed in your queue`,
    "Outcome report form ready to submit after hearing",
  ];

  return (
    <div>
      <Button appearance="transparent" className={styles.backBtn} onClick={onBack}>
        ← Queue
      </Button>

      <Text as="h2" size={500} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
        Hearing logistics
      </Text>

      <Card style={{ marginBottom: tokens.spacingVerticalL }}>
        <CardHeader
          header={<Text weight="semibold">Hearing facts</Text>}
          action={
            <Badge appearance="tint" color={a.hearingType === "arb-in-person" ? "informative" : "brand"}>
              {a.hearingType.replace(/-/g, " ")}
            </Badge>
          }
        />
        <div className={styles.twoCol}>
          <FactItem label="Date" value={a.hearingDate ?? "TBD"} />
          <FactItem label="Time" value={a.hearingTime ?? "TBD"} />
          <FactItem label="Board / venue" value={a.hearingBoard ?? "TBD"} />
          <FactItem label="Format" value={a.hearingType.replace(/-/g, " ")} />
        </div>

        <Divider style={{ margin: `${tokens.spacingVerticalM} 0` }} />

        <MessageBar intent="info">
          <MessageBarBody>
            {a.county} ARB rules: evidence must be submitted 14 days before hearing date. Hearing
            time limit: 15 minutes per side. Bring 3 printed copies of comp grid.
            {a.hearingType !== "arb-in-person" &&
              " Remote hearings: use county portal link (emailed 48h before)."}
          </MessageBarBody>
        </MessageBar>
      </Card>

      <Card style={{ marginBottom: tokens.spacingVerticalL }}>
        <CardHeader header={<Text weight="semibold">Appearance checklist</Text>} />
        <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXS }}>
          {checklistItems.map((item, i) => (
            <div key={i} className={styles.checklistItem}>
              <Checkbox
                checked={checklist[`item-${i}`] ?? false}
                onChange={(_e, d) =>
                  setChecklist((prev) => ({ ...prev, [`item-${i}`]: d.checked as boolean }))
                }
                label={item}
              />
            </div>
          ))}
        </div>
      </Card>

      <Button appearance="primary" onClick={onReportOutcome}>
        Report outcome →
      </Button>
    </div>
  );
}

// ─── Outcome report ───────────────────────────────────────────────────────────

function OutcomeReportView({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: (outcome: "reduced" | "denied" | "continued", reducedValue?: number) => void;
}) {
  const styles = useStyles();
  const [outcome, setOutcome] = useState<"reduced" | "denied" | "continued" | null>(null);
  const [reducedValue, setReducedValue] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div>
        <MessageBar intent="success">
          <MessageBarBody>
            <strong>Outcome submitted.</strong> Case state updated and Operator notified. Your
            per-appearance fee will be processed within 14 business days.
          </MessageBarBody>
        </MessageBar>
        <Button appearance="transparent" style={{ marginTop: tokens.spacingVerticalL }} onClick={onBack}>
          ← Back to queue
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button appearance="transparent" className={styles.backBtn} onClick={onBack}>
        ← Hearing
      </Button>

      <Text as="h2" size={500} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
        Outcome report
      </Text>

      <Card>
        <CardHeader header={<Text weight="semibold">Board result</Text>} />
        <RadioGroup
          value={outcome ?? ""}
          onChange={(_e, d) => setOutcome(d.value as "reduced" | "denied" | "continued")}
        >
          <Radio value="reduced" label="Reduced — board awarded a lower assessed value" />
          <Radio value="denied" label="Denied — board upheld assessed value" />
          <Radio value="continued" label="Continued — hearing rescheduled by board" />
        </RadioGroup>

        {outcome === "reduced" && (
          <div style={{ marginTop: tokens.spacingVerticalM, maxWidth: "320px" }}>
            <Field label="ARB reduced value ($)" required>
              <Input
                value={reducedValue}
                onChange={(_e, d) => setReducedValue(d.value)}
                placeholder="e.g. 9800000"
                type="number"
              />
            </Field>
          </div>
        )}

        <div style={{ marginTop: tokens.spacingVerticalL }}>
          <Button
            appearance="primary"
            disabled={!outcome}
            onClick={() => {
              if (!outcome) return;
              const rv = outcome === "reduced" ? parseFloat(reducedValue) || undefined : undefined;
              onSubmit(outcome, rv);
              setSubmitted(true);
            }}
          >
            Submit outcome report
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ─── Pay status ───────────────────────────────────────────────────────────────

function PayStatusView({
  a,
  onBack,
}: {
  a: WorkerAssignment;
  onBack: () => void;
}) {
  const styles = useStyles();
  return (
    <div>
      <Button appearance="transparent" className={styles.backBtn} onClick={onBack}>
        ← Queue
      </Button>

      <Text as="h2" size={500} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
        Pay status
      </Text>

      <Card>
        <div className={styles.twoCol}>
          <FactItem label="Parcel ID" value={a.parcelId} />
          <FactItem label="County" value={a.county} />
          <FactItem label="Hearing date" value={a.hearingDate ?? "—"} />
          <FactItem label="Outcome" value={a.outcome ? a.outcome.charAt(0).toUpperCase() + a.outcome.slice(1) : "Pending"} />
          <FactItem label="Per-appearance fee" value="$150 per ARB hearing" />
          <FactItem label="Payment status" value="Pending — issued within 14 business days of report" />
        </div>

        <Divider style={{ margin: `${tokens.spacingVerticalM} 0` }} />

        <MessageBar intent="info">
          <MessageBarBody>
            Per-appearance fee is paid regardless of ARB outcome (reduced, denied, or continued).
            Payment is issued via ACH to your registered bank account within 14 business days of
            outcome report approval.
          </MessageBarBody>
        </MessageBar>
      </Card>
    </div>
  );
}

// ─── Worker view controller ───────────────────────────────────────────────────

type WorkerView = "queue" | "packet" | "hearing" | "outcome" | "pay";

function WorkerViewRouter() {
  const styles = useStyles();
  const [assignments, setAssignments] = useState<WorkerAssignment[]>([...WORKER_QUEUE]);
  const [view, setView] = useState<WorkerView>("queue");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = selectedId ? assignments.find((a) => a.id === selectedId) ?? null : null;

  const NAV_ITEMS: Array<{ id: WorkerView; label: string; disabled?: boolean }> = [
    { id: "queue", label: "Queue" },
    ...(selected
      ? [
          { id: "packet" as WorkerView, label: "Packet" },
          { id: "hearing" as WorkerView, label: "Hearing" },
          { id: "outcome" as WorkerView, label: "Outcome" },
          { id: "pay" as WorkerView, label: "Pay" },
        ]
      : []),
  ];

  function acceptAssignment() {
    if (!selectedId) return;
    setAssignments((prev) =>
      prev.map((a) => (a.id === selectedId ? { ...a, status: "assigned", workerId: "wk-self", workerName: "Me" } : a))
    );
    setView("hearing");
  }

  function declineAssignment() {
    setSelectedId(null);
    setView("queue");
  }

  function reportOutcome(outcome: "reduced" | "denied" | "continued", reducedValue?: number) {
    if (!selectedId) return;
    setAssignments((prev) =>
      prev.map((a) => (a.id === selectedId ? { ...a, status: "completed", outcome, reducedValue } : a))
    );
    setView("pay");
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Text weight="semibold" size={300} block>Worker</Text>
        </div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.navItem} ${view === item.id ? styles.navItemActive : ""}`}
            onClick={() => {
              if (item.id === "queue") {
                setSelectedId(null);
                setView("queue");
              } else {
                setView(item.id);
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </aside>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          {view === "queue" && (
            <HearingQueue
              assignments={assignments}
              onSelect={(id) => {
                setSelectedId(id);
                setView("packet");
              }}
            />
          )}
          {view === "packet" && selected && (
            <CasePacketView
              a={selected}
              onAccept={acceptAssignment}
              onDecline={declineAssignment}
              onBack={() => { setView("queue"); setSelectedId(null); }}
            />
          )}
          {view === "hearing" && selected && (
            <HearingLogisticsView
              a={selected}
              onBack={() => setView("queue")}
              onReportOutcome={() => setView("outcome")}
            />
          )}
          {view === "outcome" && (
            <OutcomeReportView
              onBack={() => setView("hearing")}
              onSubmit={reportOutcome}
            />
          )}
          {view === "pay" && selected && (
            <PayStatusView a={selected} onBack={() => setView("queue")} />
          )}
        </div>
      </main>
    </div>
  );
}

// ─── Main Worker App ──────────────────────────────────────────────────────────

export function FluentWorkerApp() {
  return (
    <FluentShell>
      <WorkerViewRouter />
    </FluentShell>
  );
}

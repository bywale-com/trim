/**
 * Fluent UI Operator desk — full parity with /ct/operator.
 * Nav: Clients / Work (Exceptions / Audit / Collections / County-data / Dispatch) / Settings (Jurisdiction).
 * Route: /prototype-fluent/operator
 */
import { useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
  Card,
  Divider,
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
import { PROTEST_CASES } from "../data/protestCases";
import { TRIM_JURISDICTIONS } from "../data/jurisdictions";
import { WORKER_QUEUE } from "../data/workerQueue";
import { auditForCase, TRIM_AUDIT } from "../data/audit";
import { PROTEST_STATE_LABELS, PROTEST_STATE_BADGE } from "../data/types";
import type { ProtestCase } from "../data/types";
import { formatUsd } from "../data/format";

// ─── Styles ──────────────────────────────────────────────────────────────────

const useStyles = makeStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "calc(100vh - 48px)",
  },
  topNav: {
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke1,
    backgroundColor: tokens.colorNeutralBackground2,
    padding: `0 ${tokens.spacingHorizontalXXL}`,
  },
  main: {
    flex: 1,
    overflowY: "auto",
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXXL}`,
  },
  subNav: {
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke1,
    backgroundColor: tokens.colorNeutralBackground1,
    padding: `0 ${tokens.spacingHorizontalXXXL}`,
    marginBottom: tokens.spacingVerticalXXL,
  },
  pageTitle: {
    marginBottom: tokens.spacingVerticalL,
  },
  section: {
    marginBottom: tokens.spacingVerticalXL,
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
  exceptionCard: {
    marginBottom: tokens.spacingVerticalM,
  },
  auditRow: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalXS} 0`,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  emptyState: {
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL}`,
    textAlign: "center",
    color: tokens.colorNeutralForeground3,
  },
});

function FactItem({ label, value }: { label: string; value: string | React.ReactNode }) {
  const styles = useStyles();
  return (
    <div className={styles.factItem}>
      <Text size={100} style={{ color: tokens.colorNeutralForeground3 }}>
        {label}
      </Text>
      <Text size={300} weight="semibold">{value}</Text>
    </div>
  );
}

function StatusBadge({ status }: { status: ProtestCase["status"] }) {
  return (
    <Badge appearance="tint" color={PROTEST_STATE_BADGE[status]}>
      {PROTEST_STATE_LABELS[status]}
    </Badge>
  );
}

// ─── Clients ─────────────────────────────────────────────────────────────────

function OperatorClients() {
  const styles = useStyles();
  const book = PROTEST_CASES;
  const detectedCount = book.filter((c) => c.status === "detected" || c.status === "blocked_jurisdiction").length;
  const invoicedCount = book.filter((c) => c.status === "invoiced").length;

  return (
    <div>
      <div className={styles.pageTitle}>
        <div style={{ display: "flex", alignItems: "center", gap: tokens.spacingHorizontalM, marginBottom: tokens.spacingVerticalXS }}>
          <Text as="h2" size={500} weight="semibold">
            Clients
          </Text>
          {detectedCount > 0 && (
            <Badge appearance="tint" color="warning">{detectedCount} blocked/detected</Badge>
          )}
          {invoicedCount > 0 && (
            <Badge appearance="tint" color="informative">{invoicedCount} open invoice{invoicedCount !== 1 ? "s" : ""}</Badge>
          )}
        </div>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          {book.length} protest cases in book — admission state at a glance.
        </Text>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {["Owner / Entity", "Parcel", "County", "Type", "Assessed", "Status", "Days"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {book.map((c) => (
              <TableRow key={c.id}>
                <TableCell><Text size={300} weight="semibold">{c.ownerEntityName}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{c.parcelId}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{c.county}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{c.propertyType}</Text></TableCell>
                <TableCell><Text size={300}>{formatUsd(c.assessedValue)}</Text></TableCell>
                <TableCell><StatusBadge status={c.status} /></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{c.daysInState}d</Text></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Work: Exceptions ────────────────────────────────────────────────────────

const EXCEPTION_STATUSES = ["hearing_reported", "denied"] as const;

function OperatorExceptions() {
  const styles = useStyles();
  const [exceptions, setExceptions] = useState<ProtestCase[]>(
    PROTEST_CASES.filter((c) => (EXCEPTION_STATUSES as readonly string[]).includes(c.status))
  );

  function resolve(id: string) {
    setExceptions((prev) => prev.filter((c) => c.id !== id));
  }

  if (exceptions.length === 0) {
    return (
      <Card>
        <div className={styles.emptyState}>
          <Text size={400}>No exceptions right now — all cases clear.</Text>
          <br />
          <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>
            Automation is running clean; no stuck or flagged protest cases.
          </Text>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <div className={styles.pageTitle}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Hearing-reported cases awaiting review, and denied cases needing escalation assessment.
        </Text>
      </div>
      <Accordion multiple>
        {exceptions.map((c) => {
          const auditEntries = auditForCase(c.id);
          return (
            <AccordionItem key={c.id} value={c.id}>
              <AccordionHeader>
                <div style={{ display: "flex", alignItems: "center", gap: tokens.spacingHorizontalM, flex: 1 }}>
                  <Text weight="semibold">{c.ownerEntityName}</Text>
                  <StatusBadge status={c.status} />
                  <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>{c.parcelId}</Text>
                </div>
              </AccordionHeader>
              <AccordionPanel>
                <Card className={styles.exceptionCard}>
                  <div className={styles.twoCol}>
                    <FactItem label="Assessed" value={formatUsd(c.assessedValue)} />
                    <FactItem label="County" value={c.county} />
                    <FactItem label="Tax year" value={`${c.taxYear}`} />
                    <FactItem label="Days in state" value={`${c.daysInState}`} />
                  </div>

                  {auditEntries.length > 0 && (
                    <>
                      <Divider style={{ margin: `${tokens.spacingVerticalM} 0` }} />
                      <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3, textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: tokens.spacingVerticalS }}>
                        Case audit glance
                      </Text>
                      {auditEntries.slice(-3).map((e) => (
                        <div key={e.id} className={styles.auditRow}>
                          <Text size={200} style={{ color: tokens.colorNeutralForeground3, flexShrink: 0, width: "110px" }}>{e.timestamp}</Text>
                          <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                            <strong style={{ color: tokens.colorNeutralForeground1 }}>{e.actor}</strong> — {e.action}
                          </Text>
                        </div>
                      ))}
                    </>
                  )}

                  <div style={{ marginTop: tokens.spacingVerticalM, display: "flex", gap: tokens.spacingHorizontalM }}>
                    <Button appearance="primary" size="small" onClick={() => resolve(c.id)}>
                      Resolve
                    </Button>
                    <Button appearance="secondary" size="small">
                      Annotate
                    </Button>
                  </div>
                </Card>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

// ─── Work: Audit log ─────────────────────────────────────────────────────────

function OperatorAudit() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.pageTitle}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Full action trail under the Appointment of Agent — all cases in book.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {["Timestamp", "Case", "Actor", "Action"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...TRIM_AUDIT].reverse().map((e) => (
              <TableRow key={e.id}>
                <TableCell>
                  <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>{e.timestamp}</Text>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{e.caseId}</Text>
                </TableCell>
                <TableCell>
                  <Text size={300} weight="semibold">{e.actor}</Text>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{e.action}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Work: Collections ───────────────────────────────────────────────────────

const DUNNING_LABEL: Record<string, string> = {
  first: "First notice",
  second: "Second notice",
  delinquent: "Delinquent",
  disputed: "Disputed",
};

function OperatorCollections() {
  const styles = useStyles();
  const invoiced = PROTEST_CASES.filter((c) => c.status === "invoiced");

  if (invoiced.length === 0) {
    return (
      <Card>
        <div className={styles.emptyState}>
          <Text size={400}>No open collections.</Text>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <div className={styles.pageTitle}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Invoiced-not-collected cases — contingency fee billed against documented savings.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {["Owner / Entity", "County", "Tax savings", "Invoice amount", "Days outstanding", "Dunning"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoiced.map((c) => (
              <TableRow key={c.id}>
                <TableCell><Text size={300} weight="semibold">{c.ownerEntityName}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{c.county}</Text></TableCell>
                <TableCell><Text size={300}>{formatUsd(c.taxSavings ?? 0)}</Text></TableCell>
                <TableCell><Text size={300}>{formatUsd(c.invoiceAmount ?? 0)}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{c.daysInState}d</Text></TableCell>
                <TableCell>
                  <Badge appearance="tint" color="warning">
                    {DUNNING_LABEL["first"]}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Work: County data ───────────────────────────────────────────────────────

function OperatorCountyData() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.pageTitle}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Roll import status, CAMA freshness, and comp coverage per county.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {["County", "CAD", "Roll import", "CAMA freshness", "Comp coverage", "E-file", "Note"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {TRIM_JURISDICTIONS.map((j) => (
              <TableRow key={j.countyCode}>
                <TableCell><Text size={300} weight="semibold">{j.countyName}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{j.cad}</Text></TableCell>
                <TableCell>
                  <Badge
                    appearance="tint"
                    color={j.rollImportStatus === "ok" ? "success" : j.rollImportStatus === "pending" ? "warning" : "danger"}
                  >
                    {j.rollImportStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    appearance="tint"
                    color={j.camaFreshness === "current" ? "success" : j.camaFreshness === "stale" ? "warning" : "subtle"}
                  >
                    {j.camaFreshness}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    appearance="tint"
                    color={j.compCoverage === "high" ? "success" : j.compCoverage === "medium" ? "informative" : "warning"}
                  >
                    {j.compCoverage}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge appearance="tint" color={j.eFileAvailable ? "success" : "subtle"}>
                    {j.eFileAvailable ? "Digital" : "Mail/in-person"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>{j.note ?? "—"}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Work: Dispatch ──────────────────────────────────────────────────────────

function OperatorDispatch() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.pageTitle}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Hearing-queued cases by county with hearing date, board, appearance mode, and packet status.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {["Parcel ID", "County", "Owner entity", "Hearing date", "Board", "Format", "Status", "Worker"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {WORKER_QUEUE.map((a) => (
              <TableRow key={a.id}>
                <TableCell><Text size={300} weight="semibold">{a.parcelId}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{a.county}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{a.ownerEntityName}</Text></TableCell>
                <TableCell><Text size={200}>{a.hearingDate} {a.hearingTime}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{a.hearingBoard}</Text></TableCell>
                <TableCell>
                  <Badge appearance="tint" color={a.hearingType === "arb-in-person" ? "informative" : "brand"}>
                    {a.hearingType.replace(/-/g, " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    appearance="tint"
                    color={a.status === "available" ? "success" : a.status === "assigned" ? "brand" : "subtle"}
                  >
                    {a.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                    {a.workerName ?? "—"}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Work shell (sub-tabs) ────────────────────────────────────────────────────

const WORK_TABS = [
  { value: "exceptions", label: "Exceptions" },
  { value: "audit", label: "Audit log" },
  { value: "collections", label: "Collections" },
  { value: "county-data", label: "County data" },
  { value: "dispatch", label: "Dispatch" },
] as const;

function OperatorWork() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeTab = WORK_TABS.find((t) => pathname.includes(`/work/${t.value}`))?.value ?? "exceptions";

  return (
    <div>
      <div className={styles.subNav}>
        <TabList
          selectedValue={activeTab}
          onTabSelect={(_e, d) => navigate(`/operator/work/${d.value}`)}
          size="small"
        >
          {WORK_TABS.map((t) => (
            <Tab key={t.value} value={t.value}>{t.label}</Tab>
          ))}
        </TabList>
      </div>
      <Routes>
        <Route index element={<Navigate to="exceptions" replace />} />
        <Route path="exceptions" element={<OperatorExceptions />} />
        <Route path="audit" element={<OperatorAudit />} />
        <Route path="collections" element={<OperatorCollections />} />
        <Route path="county-data" element={<OperatorCountyData />} />
        <Route path="dispatch" element={<OperatorDispatch />} />
      </Routes>
    </div>
  );
}

// ─── Settings: Jurisdiction ───────────────────────────────────────────────────

function OperatorJurisdiction() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.pageTitle}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Per-jurisdiction licensure gates — TX PTC capacity, fee caps, appeal windows.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {["County", "CAD", "Status", "PTC capacity", "Fee cap", "Appeal window", "E-file", "Licensed agent"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>{h}</Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {TRIM_JURISDICTIONS.map((j) => (
              <TableRow key={j.countyCode}>
                <TableCell><Text size={300} weight="semibold">{j.countyName}</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{j.cad}</Text></TableCell>
                <TableCell>
                  <Badge
                    appearance="tint"
                    color={j.status === "active" ? "success" : j.status === "blocked" ? "danger" : "warning"}
                  >
                    {j.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Text size={200}>{j.ptcUsed} / {j.ptcCapacity}</Text>
                  {j.ptcUsed >= j.ptcCapacity && (
                    <Badge appearance="tint" color="danger" style={{ marginLeft: "4px" }}>Full</Badge>
                  )}
                </TableCell>
                <TableCell><Text size={200}>{j.feeCapPct}%</Text></TableCell>
                <TableCell><Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{j.appealWindowNote}</Text></TableCell>
                <TableCell>
                  <Badge appearance="tint" color={j.eFileAvailable ? "success" : "subtle"}>
                    {j.eFileAvailable ? "Digital" : "Mail"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{j.licensedAgent ?? "—"}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Settings shell ───────────────────────────────────────────────────────────

const SETTINGS_TABS = [{ value: "jurisdiction", label: "Jurisdiction & licensure" }] as const;

function OperatorSettings() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeTab = SETTINGS_TABS.find((t) => pathname.includes(`/settings/${t.value}`))?.value ?? "jurisdiction";

  return (
    <div>
      <div className={styles.subNav}>
        <TabList
          selectedValue={activeTab}
          onTabSelect={(_e, d) => navigate(`/operator/settings/${d.value}`)}
          size="small"
        >
          {SETTINGS_TABS.map((t) => (
            <Tab key={t.value} value={t.value}>{t.label}</Tab>
          ))}
        </TabList>
      </div>
      <Routes>
        <Route index element={<Navigate to="jurisdiction" replace />} />
        <Route path="jurisdiction" element={<OperatorJurisdiction />} />
      </Routes>
    </div>
  );
}

// ─── Top-level Operator App ────────────────────────────────────────────────────

const TOP_TABS = [
  { value: "clients", label: "Clients" },
  { value: "work", label: "Work" },
  { value: "settings", label: "Settings" },
] as const;

export function FluentOperatorApp() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeTop = TOP_TABS.find(
    (t) => pathname.includes(`/operator/${t.value}`) || (t.value === "clients" && pathname === "/operator")
  )?.value ?? "clients";

  return (
    <FluentShell>
      <div className={styles.layout}>
        <div className={styles.topNav}>
          <TabList
            selectedValue={activeTop}
            onTabSelect={(_e, d) => navigate(`/operator/${d.value}`)}
            size="medium"
          >
            {TOP_TABS.map((t) => (
              <Tab key={t.value} value={t.value}>{t.label}</Tab>
            ))}
          </TabList>
        </div>
        <div className={styles.main}>
          <Routes>
            <Route index element={<Navigate to="clients" replace />} />
            <Route path="clients" element={<OperatorClients />} />
            <Route path="work/*" element={<OperatorWork />} />
            <Route path="settings/*" element={<OperatorSettings />} />
          </Routes>
        </div>
      </div>
    </FluentShell>
  );
}

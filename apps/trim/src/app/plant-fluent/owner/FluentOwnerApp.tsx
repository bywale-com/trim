/**
 * Fluent UI Owner desk — full parity with /ct/owner.
 * Portfolio → Case detail (Notice / Consent / Authorize / Upload / Status / Decline).
 * Route: /prototype-fluent/owner
 */
import { useState } from "react";
import { useNavigate, useParams, Routes, Route, Navigate } from "react-router";
import {
  Badge,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Divider,
  Field,
  Input,
  Link,
  MessageBar,
  MessageBarBody,
  ProgressBar,
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
import {
  PROTEST_CASES,
  OWNER_ENTITY,
} from "../data/protestCases";
import {
  PROTEST_STATE_LABELS,
  PROTEST_STATE_BADGE,
  admits,
} from "../data/types";
import type { ProtestCase } from "../data/types";
import { formatUsd } from "../data/format";

// ─── Styles ──────────────────────────────────────────────────────────────────

const useStyles = makeStyles({
  layout: {
    display: "flex",
    height: "100%",
    minHeight: "calc(100vh - 48px)",
  },
  sidebar: {
    width: "220px",
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
  sidebarEntity: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginTop: tokens.spacingVerticalXXS,
    lineHeight: tokens.lineHeightBase200,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    cursor: "pointer",
    borderRadius: 0,
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
  },
  main: {
    flex: 1,
    overflowY: "auto",
    padding: `${tokens.spacingVerticalXXXL} ${tokens.spacingHorizontalXXXL}`,
  },
  mainContent: {
    maxWidth: "720px",
  },
  pageTitle: {
    marginBottom: tokens.spacingVerticalL,
  },
  section: {
    marginBottom: tokens.spacingVerticalXL,
  },
  factRow: {
    display: "flex",
    gap: tokens.spacingHorizontalXL,
    flexWrap: "wrap",
    marginBottom: tokens.spacingVerticalM,
  },
  factItem: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    minWidth: "120px",
  },
  portfolioTable: {
    width: "100%",
  },
  caseHeader: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
    marginBottom: tokens.spacingVerticalXS,
  },
  backBtn: {
    marginBottom: tokens.spacingVerticalM,
  },
  docsRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalXS} 0`,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  trustCard: {
    backgroundColor: tokens.colorBrandBackground2,
    marginBottom: tokens.spacingVerticalM,
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalXL}`,
  },
  checkboxStack: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  outcomeButtons: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    marginTop: tokens.spacingVerticalL,
  },
  blurred: {
    filter: "blur(5px)",
    userSelect: "none",
  },
  inlineNote: {
    marginTop: tokens.spacingVerticalM,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

// ─── State hook ──────────────────────────────────────────────────────────────

function useOwnerCases() {
  const [cases, setCases] = useState<Record<string, ProtestCase>>(() =>
    Object.fromEntries(PROTEST_CASES.map((c) => [c.id, { ...c }]))
  );
  const order = PROTEST_CASES.map((c) => c.id);

  function updateCase(id: string, patch: Partial<ProtestCase>) {
    setCases((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }
  function setTick(id: string, tick: keyof ProtestCase["consentTicks"], value: boolean) {
    setCases((prev) => ({
      ...prev,
      [id]: { ...prev[id], consentTicks: { ...prev[id].consentTicks, [tick]: value } },
    }));
  }
  return { cases, order, updateCase, setTick };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FactItem({ label, value }: { label: string; value: string | React.ReactNode }) {
  const styles = useStyles();
  return (
    <div className={styles.factItem}>
      <Text size={100} style={{ color: tokens.colorNeutralForeground3 }}>
        {label}
      </Text>
      <Text size={300} weight="semibold">
        {value}
      </Text>
    </div>
  );
}

function StatusBadge({ status }: { status: ProtestCase["status"] }) {
  return (
    <Badge
      appearance="tint"
      color={PROTEST_STATE_BADGE[status]}
    >
      {PROTEST_STATE_LABELS[status]}
    </Badge>
  );
}

// ─── Portfolio ───────────────────────────────────────────────────────────────

function OwnerPortfolio({
  order,
  cases,
}: {
  order: string[];
  cases: Record<string, ProtestCase>;
}) {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.pageTitle}>
        <Text as="h2" size={500} weight="semibold" block>
          Portfolio
        </Text>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          {OWNER_ENTITY.entityName} · protest cases by parcel and tax year
        </Text>
      </div>
      <Card>
        <Table className={styles.portfolioTable}>
          <TableHeader>
            <TableRow>
              {["Parcel ID", "County", "Address", "Assessed", "Status", "Days"].map((h) => (
                <TableHeaderCell key={h}>
                  <Text size={200} weight="semibold" style={{ color: tokens.colorNeutralForeground3 }}>
                    {h}
                  </Text>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.map((id) => {
              const c = cases[id];
              return (
                <TableRow
                  key={id}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/owner/${id}`)}
                >
                  <TableCell>
                    <Text size={300} weight="semibold">
                      {c.parcelId}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      {c.county}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      {c.propertyAddress}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={300}>{formatUsd(c.assessedValue)}</Text>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={c.status} />
                  </TableCell>
                  <TableCell>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      {c.daysInState}d
                    </Text>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Notice + Trust strip ────────────────────────────────────────────────────

function NoticeSection({
  c,
  revealed,
}: {
  c: ProtestCase;
  revealed: boolean;
}) {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <Text as="h3" size={400} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
        Notice
      </Text>

      <MessageBar intent="info" style={{ marginBottom: tokens.spacingVerticalM }}>
        <MessageBarBody>
          <strong>Analysis, not a promise:</strong> Estimated excess ≈{" "}
          {formatUsd(c.excessEstimate)} — subject to ARB outcome, not a guaranteed result.
        </MessageBarBody>
      </MessageBar>

      <div className={styles.twoCol} style={{ marginBottom: tokens.spacingVerticalM }}>
        <FactItem label="Parcel ID" value={c.parcelId} />
        <FactItem label="County (CAD)" value={`${c.county} (${c.countyAppraisalDistrict})`} />
        <FactItem
          label="Assessed value"
          value={
            revealed ? (
              formatUsd(c.assessedValue)
            ) : (
              <span className={styles.blurred}>{formatUsd(c.assessedValue)}</span>
            )
          }
        />
        <FactItem
          label="Evidence value"
          value={
            revealed ? (
              formatUsd(c.evidenceValue)
            ) : (
              <span className={styles.blurred}>{formatUsd(c.evidenceValue)}</span>
            )
          }
        />
        <FactItem
          label="Est. excess"
          value={
            revealed ? (
              formatUsd(c.excessEstimate)
            ) : (
              <span className={styles.blurred}>{formatUsd(c.excessEstimate)}</span>
            )
          }
        />
        <FactItem label="Fee cap (jurisdiction)" value={`${c.feeCapPct}%`} />
      </div>

      {!revealed && (
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          Exact figures unlock after you read and accept the three consent ticks below.
        </Text>
      )}

      <Divider style={{ margin: `${tokens.spacingVerticalM} 0` }} />

      {/* Trust strip */}
      <MessageBar intent="info" style={{ marginBottom: tokens.spacingVerticalS }}>
        <MessageBarBody>
          <strong>No upfront fee, ever.</strong> Trim's contingency cut is taken only after your
          assessment is reduced.{" "}
          <Link href={c.countyVerifyUrl} target="_blank" rel="noopener noreferrer">
            Verify {c.parcelId} yourself at {c.countyAppraisalDistrict}
          </Link>{" "}
          — we never ask you to take our word for it.
        </MessageBarBody>
      </MessageBar>

      <div className={styles.inlineNote}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          <strong>Non-affiliation:</strong> Trim is not {c.countyAppraisalDistrict}, the {c.county} ARB,
          or any government agency. We are a licensed property tax consultant firm representing you under
          the Texas Property Tax Code.
        </Text>
      </div>
    </div>
  );
}

// ─── Consent ─────────────────────────────────────────────────────────────────

function ConsentSection({
  c,
  setTick,
  onContinue,
}: {
  c: ProtestCase;
  setTick: (tick: keyof ProtestCase["consentTicks"], v: boolean) => void;
  onContinue: () => void;
}) {
  const styles = useStyles();
  const allTicked = Object.values(c.consentTicks).every(Boolean);
  return (
    <div className={styles.section}>
      <Text as="h3" size={400} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalXS }}>
        Consent
      </Text>
      <Text size={200} style={{ color: tokens.colorNeutralForeground2, marginBottom: tokens.spacingVerticalM, display: "block" }}>
        Parcel {c.parcelId} · {c.county} County · TY {c.taxYear}
      </Text>
      <div className={styles.checkboxStack}>
        <Checkbox
          checked={c.consentTicks.see}
          onChange={(_e, d) => setTick("see", d.checked as boolean)}
          label="I see it — Trim identified over-assessment on this parcel using public CAMA data."
        />
        <Checkbox
          checked={c.consentTicks.understand}
          onChange={(_e, d) => setTick("understand", d.checked as boolean)}
          label="I understand it — no upfront fee; Trim's cut is a pre-set % of tax savings only."
        />
        <Checkbox
          checked={c.consentTicks.withIt}
          onChange={(_e, d) => setTick("withIt", d.checked as boolean)}
          label="I'm with it — authorize Trim to protest this parcel's assessed value as my agent."
        />
      </div>
      {allTicked && (
        <div style={{ marginTop: tokens.spacingVerticalL }}>
          <Button appearance="primary" onClick={onContinue}>
            Continue to Authorize →
          </Button>
        </div>
      )}
    </div>
  );
}

// ─── Authorize ───────────────────────────────────────────────────────────────

function AuthorizeSection({
  c,
  onAuthorize,
}: {
  c: ProtestCase;
  onAuthorize: (pct: number) => void;
}) {
  const styles = useStyles();
  const [signerName, setSignerName] = useState("");
  const [signerTitle, setSignerTitle] = useState("");
  const [attested, setAttested] = useState(false);
  const pct = c.contingencyPct ?? c.feeCapPct;
  const estSavings = Math.round(c.excessEstimate * (c.millageRate / 100));
  const estFee = Math.round(estSavings * (pct / 100));
  const canSign = signerName.trim().length > 1 && attested;

  return (
    <div className={styles.section}>
      <Text as="h3" size={400} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
        Appointment of Agent
      </Text>

      <MessageBar intent="info" style={{ marginBottom: tokens.spacingVerticalM }}>
        <MessageBarBody>
          <strong>Contingency fee: {pct}%</strong> of documented tax savings. Due only after ARB
          reduces your assessed value. No upfront fee.
        </MessageBarBody>
      </MessageBar>

      <div className={styles.twoCol} style={{ marginBottom: tokens.spacingVerticalM }}>
        <FactItem label="Contingency %" value={`${pct}% — locked at signing`} />
        <FactItem label="Jurisdiction cap" value={`${c.feeCapPct}%`} />
        <FactItem label="Est. tax savings" value={formatUsd(estSavings)} />
        <FactItem label="Est. Trim fee" value={formatUsd(estFee)} />
        <FactItem label="Est. net savings" value={formatUsd(estSavings - estFee)} />
        <FactItem label="Authorizes" value="Protest filing, ARB hearing, resubmissions" />
      </div>

      <div className={styles.inlineNote} style={{ marginBottom: tokens.spacingVerticalM }}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
          TX Form 50-162 — Appointment of Agent for Property Tax Matters. Agent of record: TDLR-licensed
          Trim practitioner on file for {c.county} County.
        </Text>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalM, maxWidth: "480px" }}>
        <Field label="Authorized officer / signer name (TX 50-162 signature)" required>
          <Input
            value={signerName}
            onChange={(_e, d) => setSignerName(d.value)}
            placeholder="Type full name to sign"
          />
        </Field>
        <Field label="Officer title (optional)">
          <Input
            value={signerTitle}
            onChange={(_e, d) => setSignerTitle(d.value)}
            placeholder="e.g. Managing Member, President, Controller"
          />
        </Field>
        <Checkbox
          checked={attested}
          onChange={(_e, d) => setAttested(d.checked as boolean)}
          label={`I attest that I am an authorized officer of ${c.ownerEntityName} and have authority to bind this entity under Texas Property Tax Code § 1.111.`}
        />
      </div>

      <div style={{ marginTop: tokens.spacingVerticalL }}>
        <Button
          appearance="primary"
          onClick={canSign ? () => onAuthorize(pct) : undefined}
          disabled={!canSign}
        >
          Sign & appoint Trim as agent →
        </Button>
      </div>
    </div>
  );
}

// ─── Upload docs ─────────────────────────────────────────────────────────────

function UploadSection({
  c,
  onToggle,
  onComplete,
}: {
  c: ProtestCase;
  onToggle: (docId: string) => void;
  onComplete: () => void;
}) {
  const styles = useStyles();
  const uploadedCount = c.docs.filter((d) => d.uploaded).length;
  const totalDocs = c.docs.length;

  return (
    <div className={styles.section}>
      <Text as="h3" size={400} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalXS }}>
        Optional documents
      </Text>
      <Text size={200} style={{ color: tokens.colorNeutralForeground2, display: "block", marginBottom: tokens.spacingVerticalM }}>
        Stronger evidence = better ARB outcome. These docs are optional — Trim will file the protest
        regardless, but income docs can meaningfully improve the reduction argument.
      </Text>

      {totalDocs > 0 && (
        <div style={{ marginBottom: tokens.spacingVerticalM }}>
          <ProgressBar value={uploadedCount / totalDocs} thickness="medium" />
          <Text size={200} style={{ color: tokens.colorNeutralForeground2, marginTop: tokens.spacingVerticalXXS, display: "block" }}>
            {uploadedCount} of {totalDocs} documents uploaded
          </Text>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXS, marginBottom: tokens.spacingVerticalL }}>
        {c.docs.map((doc) => (
          <div key={doc.id} className={styles.docsRow}>
            <Badge
              appearance="tint"
              color={doc.uploaded ? "success" : "subtle"}
            >
              {doc.uploaded ? "Uploaded" : "Optional"}
            </Badge>
            <Text size={300} style={{ flex: 1 }}>{doc.label}</Text>
            {!doc.uploaded && (
              <Button appearance="secondary" size="small" onClick={() => onToggle(doc.id)}>
                Upload
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button appearance="primary" onClick={onComplete}>
        Done — continue to evidence prep
      </Button>
    </div>
  );
}

// ─── Status facts ────────────────────────────────────────────────────────────

function StatusSection({ c }: { c: ProtestCase }) {
  const styles = useStyles();
  const showHearing = admits("owner", "hearing_queued") &&
    (c.status === "hearing_queued" || c.status === "hearing_active" || c.status === "hearing_reported");
  const showReduction = c.status === "reduced" || c.status === "invoiced" || c.status === "collected";
  const showInvoice = c.status === "invoiced" || c.status === "collected";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalL }}>
      <div className={styles.section}>
        <div style={{ display: "flex", alignItems: "center", gap: tokens.spacingHorizontalM, marginBottom: tokens.spacingVerticalM }}>
          <Text as="h3" size={400} weight="semibold">
            Status
          </Text>
          <StatusBadge status={c.status} />
          <Badge appearance="tint" color="subtle">
            {c.daysInState}d in state
          </Badge>
          <Badge appearance="tint" color="success">
            Annual re-detection enrolled
          </Badge>
        </div>

        <div className={styles.twoCol}>
          <FactItem label="Assessed value" value={formatUsd(c.assessedValue)} />
          <FactItem label="Contingency %" value={`${c.contingencyPct ?? c.feeCapPct}% — locked`} />
          <FactItem label="Evidence packet" value={
            c.docs.some((d) => d.uploaded)
              ? "Comps ✓ · Uniformity ✓ · Income docs attached"
              : "Comps ✓ · Uniformity ✓ · Income docs not uploaded (optional)"
          } />
          <FactItem label="Days in state" value={`${c.daysInState}`} />
        </div>

        {showHearing && (
          <Card style={{ marginTop: tokens.spacingVerticalM }}>
            <CardHeader
              header={<Text weight="semibold">Hearing facts</Text>}
            />
            <div className={styles.twoCol}>
              <FactItem label="Date" value={c.hearingDate ?? "TBD"} />
              <FactItem label="Board" value={c.hearingBoard ?? "Assigned"} />
              <FactItem label="Worker" value={c.workerName ?? "Pending assignment"} />
              <FactItem label="Format" value={c.hearingType === "arb-remote" || c.hearingType === "arb-virtual" ? "Remote" : "In-person"} />
            </div>
          </Card>
        )}
      </div>

      {showReduction && (
        <div className={styles.section}>
          <Text as="h3" size={400} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
            Reduction
          </Text>
          <MessageBar intent="success" style={{ marginBottom: tokens.spacingVerticalM }}>
            <MessageBarBody>
              Trim invoices after the documented reduction is recorded by the county — no charge if no
              reduction.
            </MessageBarBody>
          </MessageBar>
          <div className={styles.twoCol}>
            <FactItem label="Before" value={formatUsd(c.assessedValue)} />
            <FactItem label="After" value={formatUsd(c.reducedValue ?? c.evidenceValue)} />
            <FactItem label="Tax savings" value={formatUsd(c.taxSavings ?? 0)} />
            <FactItem label="Millage rate" value={`${c.millageRate}‰`} />
          </div>
        </div>
      )}

      {showInvoice && (
        <div className={styles.section}>
          <Text as="h3" size={400} weight="semibold" block style={{ marginBottom: tokens.spacingVerticalM }}>
            Trim Invoice
          </Text>
          <div className={styles.twoCol}>
            <FactItem label="Tax savings" value={formatUsd(c.taxSavings ?? 0)} />
            <FactItem
              label="Trim contingency fee"
              value={
                c.invoiceAmount
                  ? `${formatUsd(c.invoiceAmount)} — ${c.contingencyPct}% of savings`
                  : "Calculating"
              }
            />
          </div>
          <Text size={200} style={{ color: tokens.colorNeutralForeground2, marginTop: tokens.spacingVerticalS, display: "block" }}>
            Invoice dated against documented savings — independent of fee collection timing.
          </Text>
        </div>
      )}

      {c.status === "denied" && (
        <div className={styles.section}>
          <MessageBar intent="warning">
            <MessageBarBody>
              <strong>ARB denied protest.</strong>{" "}
              {c.denialReason ?? "Board upheld assessed value."} Escalation options: judicial appeal
              (§ 42.01) or binding arbitration (§ 41A). No reduction, no fee — Trim's contingency
              applies only to documented savings.
            </MessageBarBody>
          </MessageBar>
        </div>
      )}
    </div>
  );
}

// ─── Decline door ────────────────────────────────────────────────────────────

function DeclineDialog({ onDecline }: { onDecline: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        appearance="subtle"
        onClick={() => setOpen(true)}
        style={{ color: tokens.colorPaletteRedForeground3 }}
      >
        Decline this protest
      </Button>
      <Dialog open={open} onOpenChange={(_e, d) => setOpen(d.open)}>
        <DialogSurface>
          <DialogTitle>Decline protest</DialogTitle>
          <DialogBody>
            <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
              Declining removes this parcel from Trim's protest queue for this tax year. You can
              re-engage before the appeal deadline.
            </Text>
          </DialogBody>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Go back</Button>
            </DialogTrigger>
            <Button
              appearance="primary"
              onClick={() => {
                setOpen(false);
                onDecline();
              }}
            >
              Confirm decline
            </Button>
          </DialogActions>
        </DialogSurface>
      </Dialog>
    </>
  );
}

// ─── Case detail ─────────────────────────────────────────────────────────────

function CaseDetail({
  caseId,
  cases,
  updateCase,
  setTick,
}: {
  caseId: string;
  cases: Record<string, ProtestCase>;
  updateCase: (id: string, patch: Partial<ProtestCase>) => void;
  setTick: (id: string, tick: keyof ProtestCase["consentTicks"], v: boolean) => void;
}) {
  const styles = useStyles();
  const navigate = useNavigate();
  const c = cases[caseId];

  if (!c) return <Navigate to="/owner" replace />;

  return (
    <div>
      <Button
        appearance="transparent"
        className={styles.backBtn}
        onClick={() => navigate("/owner")}
      >
        ← Portfolio
      </Button>

      <div className={styles.caseHeader}>
        <Text as="h2" size={500} weight="semibold">
          {c.parcelId}
        </Text>
        <StatusBadge status={c.status} />
      </div>
      <Text size={200} style={{ color: tokens.colorNeutralForeground2, display: "block", marginBottom: tokens.spacingVerticalXL }}>
        {c.county} County · {c.countyAppraisalDistrict} · {c.propertyAddress} · TY {c.taxYear}
      </Text>

      {c.status === "notified" && (
        <>
          <NoticeSection c={c} revealed={false} />
          <Divider />
          <ConsentSection
            c={c}
            setTick={(tick, v) => setTick(c.id, tick, v)}
            onContinue={() => updateCase(c.id, { status: "consented" })}
          />
          <Divider />
          <DeclineDialog onDecline={() => updateCase(c.id, { status: "declined" })} />
        </>
      )}

      {c.status === "consented" && (
        <>
          <NoticeSection c={c} revealed />
          <Divider />
          <AuthorizeSection
            c={c}
            onAuthorize={(pct) => updateCase(c.id, { status: "authorized", contingencyPct: pct })}
          />
          <Divider />
          <DeclineDialog onDecline={() => updateCase(c.id, { status: "declined" })} />
        </>
      )}

      {c.status === "authorized" && (
        <UploadSection
          c={c}
          onToggle={(docId) => {
            const docs = c.docs.map((d) => (d.id === docId ? { ...d, uploaded: true } : d));
            updateCase(c.id, { docs });
          }}
          onComplete={() => updateCase(c.id, { status: "evidence_prep" })}
        />
      )}

      {(c.status === "evidence_prep" ||
        c.status === "informal" ||
        c.status === "hearing_queued" ||
        c.status === "hearing_active" ||
        c.status === "hearing_reported" ||
        c.status === "reduced" ||
        c.status === "denied" ||
        c.status === "invoiced" ||
        c.status === "collected") && <StatusSection c={c} />}

      {c.status === "declined" && (
        <Card>
          <CardHeader header={<Text weight="semibold">Declined</Text>} />
          <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
            You've declined protest for {c.parcelId}. Trim will not file for this parcel in TY{" "}
            {c.taxYear}. You can re-engage before the {c.appealDeadline} appeal deadline.
          </Text>
        </Card>
      )}
    </div>
  );
}

// ─── Main Owner App ───────────────────────────────────────────────────────────

export function FluentOwnerApp() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { cases, order, updateCase, setTick } = useOwnerCases();

  return (
    <FluentShell>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Text weight="semibold" size={300} block>
              Owner
            </Text>
            <div className={styles.sidebarEntity}>{OWNER_ENTITY.entityName}</div>
          </div>
          <button
            type="button"
            className={`${styles.navItem} ${styles.navItemActive}`}
            onClick={() => navigate("/owner")}
          >
            Portfolio
          </button>
        </aside>

        <main className={styles.main}>
          <div className={styles.mainContent}>
            <Routes>
              <Route
                index
                element={<OwnerPortfolio order={order} cases={cases} />}
              />
              <Route
                path=":caseId"
                element={
                  <CaseDetailWrapper
                    cases={cases}
                    updateCase={updateCase}
                    setTick={setTick}
                  />
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </FluentShell>
  );
}

function CaseDetailWrapper({
  cases,
  updateCase,
  setTick,
}: {
  cases: Record<string, ProtestCase>;
  updateCase: (id: string, patch: Partial<ProtestCase>) => void;
  setTick: (id: string, tick: keyof ProtestCase["consentTicks"], v: boolean) => void;
}) {
  const { caseId } = useParams<{ caseId: string }>();
  if (!caseId) return <Navigate to="/owner" replace />;
  return <CaseDetail caseId={caseId} cases={cases} updateCase={updateCase} setTick={setTick} />;
}

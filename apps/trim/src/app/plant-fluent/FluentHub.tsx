/**
 * Fluent UI Hub — persona entry point under /prototype-fluent.
 * Isolated document; cross-links use plain <a href>, never SPA Link.
 */
import {
  Badge,
  Card,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useNavigate } from "react-router";
import { FluentShell } from "./FluentShell";
import { PROTEST_CASES } from "./data/protestCases";
import { TRIM_JURISDICTIONS } from "./data/jurisdictions";
import { WORKER_QUEUE } from "./data/workerQueue";

const useStyles = makeStyles({
  page: {
    display: "flex",
    justifyContent: "center",
    padding: `${tokens.spacingVerticalXXXL} ${tokens.spacingHorizontalXXL}`,
  },
  inner: {
    width: "100%",
    maxWidth: "680px",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXL,
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  sectionTitle: {
    marginBottom: tokens.spacingVerticalS,
    color: tokens.colorNeutralForeground2,
  },
  personaCards: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  personaCard: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  badgeRow: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
    flexWrap: "wrap",
  },
  workspaceSection: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  workspaceCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
  workspaceLink: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  metaBanner: {
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusMedium,
    outlineWidth: tokens.strokeWidthThin,
    outlineStyle: "solid",
    outlineColor: tokens.colorNeutralStroke2,
  },
});

const hearingQueued = PROTEST_CASES.filter((c) => c.status === "hearing_queued").length;
const blockedJurisdictions = TRIM_JURISDICTIONS.filter((j) => j.status === "blocked").length;
const availableAssignments = WORKER_QUEUE.filter((a) => a.status === "available").length;

export function FluentHub() {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <FluentShell>
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <Text as="h1" size={600} weight="semibold">
              Trim
            </Text>
            <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
              Property tax over-assessment recovery — Fluent UI v9 remake. Isolated from DS-I at{" "}
              <code>/ct</code>.
            </Text>
          </div>

          <div>
            <Text
              as="h2"
              size={300}
              weight="semibold"
              className={styles.sectionTitle}
            >
              Personas
            </Text>
            <div className={styles.personaCards}>
              <Card
                className={styles.personaCard}
                onClick={() => navigate("/owner")}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardBody}>
                    <Text weight="semibold" size={400}>
                      Owner
                    </Text>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      Notice, consent, authorize, upload, status, reduction, invoice, decline.
                    </Text>
                  </div>
                  <div className={styles.badgeRow}>
                    <Badge appearance="tint" color="informative">
                      {PROTEST_CASES.length} cases
                    </Badge>
                    {hearingQueued > 0 && (
                      <Badge appearance="tint" color="warning">
                        {hearingQueued} hearing queued
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>

              <Card
                className={styles.personaCard}
                onClick={() => navigate("/operator")}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardBody}>
                    <Text weight="semibold" size={400}>
                      Operator
                    </Text>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      Portfolio, jurisdiction/PTC, exceptions, audit, collections, county data, dispatch.
                    </Text>
                  </div>
                  <div className={styles.badgeRow}>
                    <Badge appearance="tint" color="informative">
                      {PROTEST_CASES.length} in book
                    </Badge>
                    {blockedJurisdictions > 0 && (
                      <Badge appearance="tint" color="danger">
                        {blockedJurisdictions} jurisdiction blocked
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>

              <Card
                className={styles.personaCard}
                onClick={() => navigate("/worker")}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardBody}>
                    <Text weight="semibold" size={400}>
                      Worker
                    </Text>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      Hearing queue, case packet, accept, argue, report outcome, pay status.
                    </Text>
                  </div>
                  <div className={styles.badgeRow}>
                    <Badge appearance="tint" color="success">
                      {availableAssignments} available
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <Text
              as="h2"
              size={300}
              weight="semibold"
              className={styles.sectionTitle}
            >
              Also in this workspace
            </Text>
            <div className={styles.workspaceSection}>
              <Card>
                <div className={styles.workspaceCard}>
                  <div>
                    <Text weight="semibold" block>
                      Register
                    </Text>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      World → Personas → SME → Furnish beside the CT panel.
                    </Text>
                  </div>
                  <a href="/register" className={styles.workspaceLink}>
                    Open /register →
                  </a>
                </div>
              </Card>
              <Card>
                <div className={styles.workspaceCard}>
                  <div>
                    <Text weight="semibold" block>
                      DS-I click-through
                    </Text>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      Gray DS-I Owner · Operator · Worker desks (source for this remake).
                    </Text>
                  </div>
                  <a href="/ct" className={styles.workspaceLink}>
                    Open /ct →
                  </a>
                </div>
              </Card>
              <Card>
                <div className={styles.workspaceCard}>
                  <div>
                    <Text weight="semibold" block>
                      Blueprint restyle
                    </Text>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
                      Prior DS translate (Blueprint UI). Isolated document.
                    </Text>
                  </div>
                  <a href="/prototype-blueprint" className={styles.workspaceLink}>
                    Open /prototype-blueprint →
                  </a>
                </div>
              </Card>
            </div>
          </div>

          <div
            className={styles.metaBanner}
            style={{ backgroundColor: tokens.colorNeutralBackground2 }}
          >
            <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>
              Fluent UI React v9 · isolated document (<code>prototype-fluent.html</code>) · Fluent CSS
              never enters the main SPA.
            </Text>
          </div>
        </div>
      </div>
    </FluentShell>
  );
}

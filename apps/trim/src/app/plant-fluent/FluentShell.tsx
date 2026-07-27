/**
 * Fluent UI shell chrome — AppBar with persona TabList and hub link.
 * Wraps every persona desk so the persona switch is always reachable.
 */
import { makeStyles, tokens } from "@fluentui/react-components";
import { Tab, TabList } from "@fluentui/react-components";
import { useNavigate, useLocation } from "react-router";
import type { ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: tokens.colorNeutralBackground1,
    fontFamily: tokens.fontFamilyBase,
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${tokens.spacingHorizontalXXL}`,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke1,
    backgroundColor: tokens.colorNeutralBackground1,
    height: "48px",
    flexShrink: 0,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },
  brandName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    lineHeight: tokens.lineHeightBase400,
    textDecoration: "none",
  },
  navTabs: {
    flex: 1,
    paddingLeft: tokens.spacingHorizontalXXL,
  },
  hubLink: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    textDecoration: "none",
    "&:hover": {
      color: tokens.colorNeutralForeground2,
      textDecoration: "underline",
    },
  },
  content: {
    flex: 1,
    overflow: "auto",
  },
});

type Persona = "owner" | "operator" | "worker";

function personaPath(p: Persona) {
  return `/${p}`;
}

function activePersona(pathname: string): Persona | "" {
  if (pathname.startsWith("/owner")) return "owner";
  if (pathname.startsWith("/operator")) return "operator";
  if (pathname.startsWith("/worker")) return "worker";
  return "";
}

export function FluentShell({ children }: { children: ReactNode }) {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const current = activePersona(pathname);

  return (
    <div className={styles.root}>
      <header className={styles.appBar}>
        <div className={styles.brand}>
          <a href="/prototype-fluent" className={styles.brandName}>
            Trim
          </a>
        </div>
        <TabList
          className={styles.navTabs}
          selectedValue={current || "none"}
          onTabSelect={(_e, d) => {
            if (d.value !== "none") {
              navigate(personaPath(d.value as Persona));
            }
          }}
          size="medium"
        >
          <Tab value="owner">Owner</Tab>
          <Tab value="operator">Operator</Tab>
          <Tab value="worker">Worker</Tab>
        </TabList>
        <a href="/ct" className={styles.hubLink}>
          ← DS-I /ct
        </a>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

import { Alignment, Button, Classes, Navbar, NavbarGroup, NavbarHeading, SegmentedControl } from "@blueprintjs/core";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { useBlueprintTheme } from "../BlueprintThemeContext";

const PERSONA_OPTIONS = [
  { value: "/", label: "Hub" },
  { value: "/business", label: "Business" },
  { value: "/ops", label: "Agency Owner" },
];

/** Shared Navbar + persona switch — composition-first shell for the isolated Blueprint document. */
export function BlueprintShell({ children }: { children: ReactNode }) {
  const { isDark, setIsDark } = useBlueprintTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const activePath =
    location.pathname === "/agency"
      ? "/ops"
      : (PERSONA_OPTIONS.find((o) => o.value === location.pathname)?.value ?? "/");

  return (
    <div className={`plant-blueprint-root${isDark ? ` ${Classes.DARK}` : ""}`} style={{ minHeight: "100vh" }}>
      <Navbar>
        <NavbarGroup align={Alignment.START}>
          <NavbarHeading>Trove B2B &middot; Blueprint</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.START} style={{ marginLeft: 16 }}>
          <SegmentedControl
            value={activePath}
            onValueChange={(value) => navigate(value)}
            options={PERSONA_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
          />
        </NavbarGroup>
        <NavbarGroup align={Alignment.END}>
          <Button
            minimal
            icon={isDark ? "flash" : "moon"}
            aria-label={isDark ? "Light theme" : "Dark theme"}
            onClick={() => setIsDark((v) => !v)}
          />
        </NavbarGroup>
      </Navbar>
      <main style={{ padding: "32px 32px 56px", maxWidth: 980, margin: "0 auto" }}>{children}</main>
    </div>
  );
}

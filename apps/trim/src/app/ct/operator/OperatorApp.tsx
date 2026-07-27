/**
 * Operator desk shell — Trim property tax protest.
 * Nav: Clients · Work · Settings
 * Route: /ct/operator (outlet)
 */
import { CtDeskShell, type CtNavItem } from "../../shared/primitives";
import { Outlet } from "react-router";

const NAV: CtNavItem[] = [
  { id: "clients", label: "Clients", to: "clients" },
  { id: "work", label: "Work", to: "work" },
  { id: "settings", label: "Settings", to: "settings" },
];

export function OperatorApp({ embedded }: { embedded?: boolean }) {
  return (
    <CtDeskShell personaLabel="Operator" navItems={NAV} embedded={embedded}>
      <Outlet />
    </CtDeskShell>
  );
}

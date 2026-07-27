/**
 * Agency Owner click-through shell.
 * Modules: Clients · Work · Settings (jurisdiction lives in Settings).
 */
import { CtDeskShell, type CtNavItem } from "../../shared/primitives";
import { Outlet } from "react-router";

const NAV: CtNavItem[] = [
  { id: "clients", label: "Clients", to: "clients" },
  { id: "work", label: "Work", to: "work" },
  { id: "settings", label: "Settings", to: "settings" },
];

export function AgencyApp({ embedded }: { embedded?: boolean }) {
  return (
    <CtDeskShell personaLabel="Agency Owner" navItems={NAV} embedded={embedded}>
      <Outlet />
    </CtDeskShell>
  );
}

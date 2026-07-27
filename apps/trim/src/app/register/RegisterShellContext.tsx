/**
 * Register shell — CT is its own panel (default on), theory lives in the side
 * pane. Process order rail: World → Personas → SME → Furnish (CTO later).
 */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type CtDeskId = "owner" | "operator" | "worker";

export type RegisterShellContextValue = {
  ctVisible: boolean;
  setCtVisible: (v: boolean) => void;
  ctDesk: CtDeskId;
  setCtDesk: (desk: CtDeskId) => void;
  /** Reveal CT and switch desk — used by leaf/SME inhabit. */
  revealCt: (desk?: CtDeskId) => void;
};

const RegisterShellContext = createContext<RegisterShellContextValue | null>(null);

export function RegisterShellProvider({ children }: { children: ReactNode }) {
  const [ctVisible, setCtVisible] = useState(true);
  const [ctDesk, setCtDesk] = useState<CtDeskId>("owner");

  const revealCt = useCallback((desk?: CtDeskId) => {
    if (desk) setCtDesk(desk);
    setCtVisible(true);
  }, []);

  const value = useMemo(
    () => ({ ctVisible, setCtVisible, ctDesk, setCtDesk, revealCt }),
    [ctVisible, ctDesk, revealCt],
  );

  return <RegisterShellContext.Provider value={value}>{children}</RegisterShellContext.Provider>;
}

export function useRegisterShell(): RegisterShellContextValue {
  const ctx = useContext(RegisterShellContext);
  if (!ctx) throw new Error("useRegisterShell must be used within a RegisterShellProvider");
  return ctx;
}

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Classes } from "@blueprintjs/core";

const THEME_KEY = "trove-b2b-prototype-blueprint-theme";

type BlueprintThemeContextValue = {
  isDark: boolean;
  setIsDark: (next: boolean | ((v: boolean) => boolean)) => void;
};

const BlueprintThemeContext = createContext<BlueprintThemeContextValue | null>(
  null,
);

function readDark(): boolean {
  try {
    return localStorage.getItem(THEME_KEY) === "dark";
  } catch {
    return false;
  }
}

function writeDark(isDark: boolean) {
  try {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

export function BlueprintThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDarkState] = useState(readDark);
  const setIsDark = (next: boolean | ((v: boolean) => boolean)) => {
    setIsDarkState((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      writeDark(value);
      return value;
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle(Classes.DARK, isDark);
    document.body.classList.toggle(Classes.DARK, isDark);
  }, [isDark]);

  return (
    <BlueprintThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? Classes.DARK : undefined} style={{ minHeight: "100%" }}>
        {children}
      </div>
    </BlueprintThemeContext.Provider>
  );
}

export function useBlueprintTheme() {
  const ctx = useContext(BlueprintThemeContext);
  if (!ctx) {
    throw new Error("useBlueprintTheme must be used within BlueprintThemeProvider");
  }
  return ctx;
}

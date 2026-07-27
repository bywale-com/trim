/**
 * Isolated entry for /prototype-fluent.
 * Must NEVER be imported from main.tsx / Router.tsx — Fluent UI's global
 * CSS (@fluentui/react-components) would poison the main SPA (Tailwind + DS-I).
 */
import { createRoot } from "react-dom/client";
import { FluentAppRouter } from "./app/FluentAppRouter";

createRoot(document.getElementById("root")!).render(<FluentAppRouter />);

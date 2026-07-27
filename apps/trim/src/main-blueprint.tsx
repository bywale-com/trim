/**
 * Isolated entry for /prototype-blueprint.
 * Must NEVER be imported from main.tsx / Router — Blueprint's global
 * (@blueprintjs) CSS would poison the main SPA.
 */
import { createRoot } from "react-dom/client";
import { BlueprintAppRouter } from "./app/BlueprintAppRouter";

createRoot(document.getElementById("root")!).render(<BlueprintAppRouter />);

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./plant-blueprint/plant-blueprint.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { BlueprintThemeProvider } from "./plant-blueprint/BlueprintThemeContext";
import { BlueprintPlantHub } from "./plant-blueprint/PrototypeBlueprintPage";
import { BlueprintBusinessApp } from "./plant-blueprint/business/BlueprintBusinessApp";
import { BlueprintOpsApp } from "./plant-blueprint/ops/BlueprintOpsApp";

/**
 * Standalone router for the isolated Blueprint document only.
 * basename matches the URL prefix served by prototype-blueprint.html.
 * Must stay isolated from the main SPA (index.html -> main.tsx -> Router.tsx)
 * -- do not import this (or @blueprintjs) from there.
 */

export function BlueprintAppRouter() {
  return (
    <BrowserRouter basename="/prototype-blueprint">
      <BlueprintThemeProvider>
        <Routes>
          <Route path="/" element={<BlueprintPlantHub />} />
          <Route path="/business" element={<BlueprintBusinessApp />} />
          <Route path="/ops" element={<BlueprintOpsApp />} />
          <Route path="/agency" element={<BlueprintOpsApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BlueprintThemeProvider>
    </BrowserRouter>
  );
}

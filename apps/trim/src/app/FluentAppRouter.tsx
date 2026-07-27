/**
 * Isolated Fluent UI router for /prototype-fluent.
 * Mounts ONLY the Fluent tree — never imported from main.tsx / Router.tsx.
 * FluentProvider wraps the entire subtree so Fluent CSS vars are scoped here.
 */
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { FluentHub } from "./plant-fluent/FluentHub";
import { FluentOwnerApp } from "./plant-fluent/owner/FluentOwnerApp";
import { FluentOperatorApp } from "./plant-fluent/operator/FluentOperatorApp";
import { FluentWorkerApp } from "./plant-fluent/worker/FluentWorkerApp";

export function FluentAppRouter() {
  return (
    <BrowserRouter basename="/prototype-fluent">
      <FluentProvider theme={webLightTheme}>
        <Routes>
          <Route path="/" element={<FluentHub />} />
          <Route path="/owner/*" element={<FluentOwnerApp />} />
          <Route path="/operator/*" element={<FluentOperatorApp />} />
          <Route path="/worker/*" element={<FluentWorkerApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FluentProvider>
    </BrowserRouter>
  );
}

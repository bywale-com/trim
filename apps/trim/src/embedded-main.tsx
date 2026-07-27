import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { RegisterApp } from "./app/Router";
import "./styles/index.css";

/**
 * Embedded Trim Register — own app inside Om Coda HQ iframe.
 * Basename keeps routing isolated from the HQ shell.
 */
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/embedded/trove">
    <RegisterApp />
  </BrowserRouter>,
);

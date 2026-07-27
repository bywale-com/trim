import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Serve the isolated Blueprint document for /prototype-blueprint.
 * Keeps Blueprint's global (@blueprintjs) CSS out of the main SPA
 * (index.html → main.tsx → Router.tsx). There is no /prototype plant here —
 * Trove B2B is a lean prototype, not a full Operator shell.
 */
function prototypeBlueprintIsolatedSpa(): Plugin {
  const isBlueprintPath = (raw: string) =>
    raw === "/prototype-blueprint" ||
    raw === "/prototype-blueprint/" ||
    (/^\/prototype-blueprint\//.test(raw) && !path.extname(raw));
  const rewrite = (req: { url?: string }) => {
    const raw = req.url?.split("?")[0] ?? "";
    if (isBlueprintPath(raw)) {
      req.url = "/prototype-blueprint.html";
    }
  };
  return {
    name: "prototype-blueprint-isolated-spa",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
  };
}

export default defineConfig({
  // Tailwind must run before Vite's CSS postcss-import resolves bare @import "tailwindcss"
  plugins: [tailwindcss(), react(), prototypeBlueprintIsolatedSpa()],
  resolve: {
    alias: {
      // ESM-safe root (package.json "type": "module") — do not rely on __dirname alone
      "@": path.resolve(rootDir, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(rootDir, "index.html"),
        blueprint: path.resolve(rootDir, "prototype-blueprint.html"),
      },
    },
  },
  server: {
    // 5181 avoids clashing with Trove's dev server on 5180 and Tally's on 5173
    port: 5181,
    strictPort: true,
  },
});

/**
 * Verify every How leaf UI ref is catalogued + planted + click-routable.
 * Run: npx tsx scripts/verify-ct-surfaces.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HOW_GRAPHS } from "../src/app/register/howAnalysis/index.ts";
import { SURFACES } from "../src/app/register/trace/surfaces.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src");

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx|ts)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(src);
const planted = new Set<string>();
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const m of text.matchAll(/(?:SurfaceBoundary|CtPlantedBlock)\s+id=["']([^"']+)["']/g)) {
    planted.add(m[1]);
  }
}

const catalog = new Set(SURFACES.map((s) => s.id));
const errors: string[] = [];
const warned: string[] = [];

for (const graph of HOW_GRAPHS) {
  for (const node of graph.nodes) {
    if (node.kind !== "leaf" && node.kind !== "answer") continue;
    for (const ref of node.components) {
      const where = `${graph.id} / ${node.id} / ${ref.label}`;
      if (!ref.surfaceId) {
        errors.push(`MISSING surfaceId — ${where} (${ref.kind})`);
        continue;
      }
      if (!catalog.has(ref.surfaceId)) {
        errors.push(`NOT IN SURFACES catalog — ${where} → ${ref.surfaceId}`);
      }
      if (!planted.has(ref.surfaceId)) {
        errors.push(`NOT PLANTED (no SurfaceBoundary) — ${where} → ${ref.surfaceId}`);
      }
      // Label must appear in clarity for highlight+click match
      if (node.kind === "leaf" && !node.clarity.includes(ref.label)) {
        warned.push(`label not in leaf clarity — ${where}`);
      }
    }
  }
}

for (const id of catalog) {
  if (!planted.has(id)) errors.push(`SURFACES entry never planted — ${id}`);
}

console.log(`Catalog: ${catalog.size} · Planted: ${planted.size}`);
if (warned.length) {
  console.log("\nWarnings:");
  for (const w of warned) console.log("  ·", w);
}
if (errors.length) {
  console.log("\nFailures:");
  for (const e of errors) console.log("  ✗", e);
  process.exit(1);
}
console.log("\nOK — every leaf/answer UI ref has surfaceId, catalog entry, and SurfaceBoundary.");

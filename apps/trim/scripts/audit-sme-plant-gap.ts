/**
 * Audit: SME implementation affordances vs planted/highlightable UI refs.
 * Run: npx tsx scripts/audit-sme-plant-gap.ts
 */
import { allSmeItems } from "../src/app/register/trace/smeRegistry";
import { PRODUCT_UI_REFS } from "../src/app/register/trace/productUiRefs";
import { IMPLEMENTATION_UI_REFS } from "../src/app/register/trace/implementationUiRefs";
import { SURFACES } from "../src/app/register/trace/surfaces";

const refs = [...PRODUCT_UI_REFS, ...IMPLEMENTATION_UI_REFS];
const labels = [...new Set(refs.map((r) => r.label))].sort((a, b) => b.length - a.length);
const catalog = new Set(SURFACES.map((s) => s.id));

const items = allSmeItems().filter((i) => i.implementation);
let lines = 0;
let linesWithClickableParent = 0;
let linesWithNewNamedSurface = 0;
const orphanTails: { id: string; line: string }[] = [];

for (const item of items) {
  for (const line of (item.implementation || "").split("\n").filter(Boolean)) {
    lines++;
    const parentHit = labels.find((l) => line.includes(l));
    const parentRef = parentHit ? refs.find((r) => r.label === parentHit) : undefined;
    if (parentRef?.surfaceId && catalog.has(parentRef.surfaceId)) linesWithClickableParent++;

    // "you can now …" — check if a known NEW surface (impl ref) appears after that phrase
    const idx = line.toLowerCase().indexOf("you can now");
    if (idx === -1) continue;
    const after = line.slice(idx);
    const newHit = IMPLEMENTATION_UI_REFS.some((r) => after.includes(r.label) || line.includes(r.label));
    // Also count Claim form packet / Filing method / Expected days as "new"
    const coreNew = ["Claim form packet", "Filing method", "Expected days", "Fee cap %"].some((l) =>
      line.includes(l),
    );
    if (newHit || coreNew) linesWithNewNamedSurface++;
    else if (parentHit) {
      // has a parent but the affordance itself isn't a registered named surface
      orphanTails.push({ id: item.id, line });
    }
  }
}

console.log("SME items with implementation:", items.length);
console.log("Implementation lines:", lines);
console.log("Lines with a clickable parent surface (Upload packet, Invoice fact, etc.):", linesWithClickableParent);
console.log("Lines that name a planted NEW surface (implementationUiRefs):", linesWithNewNamedSurface);
console.log("Lines with parent but NO registered named affordance for the 'you can now' part:", orphanTails.length);
console.log("\nSample orphan lines (first 25):");
for (const o of orphanTails.slice(0, 25)) {
  console.log(`  ${o.id}: ${o.line}`);
}

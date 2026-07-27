/**
 * Verify every SME item has written implementation fields.
 * Run: npx tsx scripts/verify-sme-implementations.ts
 */
import { allSmeItems, SME_PERSONAS } from "../src/app/register/trace/smeRegistry";

const items = allSmeItems();
const missing = items.filter((i) => !i.implementation || !i.implementationProblem);

console.log("total", items.length);
console.log("missing", missing.length, missing.map((i) => i.id).join(", ") || "(none)");
for (const p of SME_PERSONAS) {
  const ok = p.items.filter((i) => i.implementation && i.implementationProblem).length;
  console.log(`${p.id} ${ok}/${p.items.length}`);
}
if (missing.length) process.exit(1);

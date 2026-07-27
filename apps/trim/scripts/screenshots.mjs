// One-off Playwright screenshot capture for CT + Blueprint. Run with
// `node scripts/screenshots.mjs` while the vite dev server is up on 5181.
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BASE = "http://localhost:5181";
const VIEWPORT = { width: 1440, height: 900 };

const ctDir = path.join(rootDir, "src/app/ct/screenshots");
const bpDir = path.join(rootDir, "src/app/plant-blueprint/screenshots");

const ctShots = [
  { name: "hub", url: `${BASE}/ct` },
  { name: "business-notice", url: `${BASE}/ct/business?case=cascade-metal-works` },
  { name: "business-consent-or-auth", url: `${BASE}/ct/business?case=bluepeak-logistics` },
  { name: "business-status", url: `${BASE}/ct/business?case=northwind-structural` },
  { name: "ops-jurisdiction", url: `${BASE}/ct/ops/jurisdiction` },
  { name: "ops-exceptions", url: `${BASE}/ct/ops/exceptions` },
  { name: "register-flows", url: `${BASE}/register/flows` },
];

const bpShots = [
  { name: "hub", url: `${BASE}/prototype-blueprint` },
  { name: "business-notice", url: `${BASE}/prototype-blueprint/business?case=cascade-metal-works` },
  { name: "business-auth", url: `${BASE}/prototype-blueprint/business?case=bluepeak-logistics` },
  { name: "business-status", url: `${BASE}/prototype-blueprint/business?case=northwind-structural` },
  { name: "ops-jurisdiction", url: `${BASE}/prototype-blueprint/ops` },
  {
    name: "ops-exceptions",
    url: `${BASE}/prototype-blueprint/ops`,
    afterLoad: async (page) => {
      await page.getByRole("tab", { name: "Exceptions" }).click();
      await page.waitForTimeout(200);
    },
  },
  { name: "business-paid-or-invoice", url: `${BASE}/prototype-blueprint/business?case=vantage-retail` },
];

async function capture(page, dir, shots) {
  for (const shot of shots) {
    await page.goto(shot.url, { waitUntil: "networkidle" });
    if (shot.afterLoad) await shot.afterLoad(page);
    await page.waitForTimeout(150);
    const target = path.join(dir, `${shot.name}.png`);
    await page.screenshot({ path: target, fullPage: true });
    console.log(`saved ${target}`);
  }
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: VIEWPORT });
await page.setViewportSize(VIEWPORT);

console.log("== CT ==");
await capture(page, ctDir, ctShots);

console.log("== Blueprint ==");
await capture(page, bpDir, bpShots);

await browser.close();
console.log("done");

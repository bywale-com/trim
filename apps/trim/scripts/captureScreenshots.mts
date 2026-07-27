/**
 * Capture 7 DS-I CT + 7 Blueprint screenshots for Trove B2B done email.
 * Run: npx playwright test --config=playwright.screenshots.config.ts
 * or: npx tsx scripts/captureScreenshots.mts
 */
import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const base = "http://localhost:5181";

async function shot(page: import("playwright").Page, url: string, out: string) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: out, fullPage: false });
  console.log("wrote", out);
}

async function main() {
  const ctDir = path.join(root, "src/app/ct/screenshots");
  const bpDir = path.join(root, "src/app/plant-blueprint/screenshots");
  fs.mkdirSync(ctDir, { recursive: true });
  fs.mkdirSync(bpDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  const ct: [string, string][] = [
    ["/ct", "hub.png"],
    ["/ct/business?case=cascade-metal-works", "business-notice.png"],
    ["/ct/business?case=bluepeak-logistics", "business-consent-or-auth.png"],
    ["/ct/business?case=harborline-freight", "business-status.png"],
    ["/ct/ops/jurisdiction", "ops-jurisdiction.png"],
    ["/ct/ops/exceptions", "ops-exceptions.png"],
    ["/register/flows", "register-flows.png"],
  ];
  for (const [u, f] of ct) {
    await shot(page, base + u, path.join(ctDir, f));
  }

  await shot(page, `${base}/prototype-blueprint/`, path.join(bpDir, "hub.png"));
  await shot(
    page,
    `${base}/prototype-blueprint/business?case=cascade-metal-works`,
    path.join(bpDir, "business-notice.png"),
  );
  await shot(
    page,
    `${base}/prototype-blueprint/business?case=bluepeak-logistics`,
    path.join(bpDir, "business-auth.png"),
  );
  await shot(
    page,
    `${base}/prototype-blueprint/business?case=harborline-freight`,
    path.join(bpDir, "business-status.png"),
  );
  await shot(page, `${base}/prototype-blueprint/ops`, path.join(bpDir, "ops-jurisdiction.png"));
  await page.goto(`${base}/prototype-blueprint/ops`, { waitUntil: "networkidle", timeout: 60000 });
  await page.getByRole("tab", { name: "Exceptions" }).click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(bpDir, "ops-exceptions.png"), fullPage: false });
  console.log("wrote ops-exceptions.png");
  await shot(
    page,
    `${base}/prototype-blueprint/business?case=vantage-retail`,
    path.join(bpDir, "business-paid-or-invoice.png"),
  );

  await browser.close();
  console.log("done 14 screenshots");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

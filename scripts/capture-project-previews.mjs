import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const shots = [
  {
    url: "https://gunning-grounds.vercel.app/",
    file: "gunning-grounds-preview.png",
  },
  {
    url: "https://stay-connected-eta.vercel.app/",
    file: "stay-connected-preview.png",
  },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const shot of shots) {
  const page = await context.newPage();
  await page.goto(shot.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.locator("img").first().waitFor({ state: "visible", timeout: 20000 });
  await page.waitForTimeout(1800);
  const dest = path.join(root, "public", shot.file);
  await page.screenshot({ path: dest, fullPage: false, type: "png" });
  console.log("saved", dest);
  await page.close();
}

await browser.close();

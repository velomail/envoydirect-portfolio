import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3000";
const desktopDir = path.join(root, "screenshots", "desktop");
const mobileDir = path.join(root, "screenshots", "mobile");

const desktopSections = [
  { file: "00-full-page.png", path: "/", fullPage: true },
  { file: "01-hero.png", path: "/" },
  { file: "02-about.png", path: "/#about" },
  { file: "03-services.png", path: "/#services" },
  { file: "04-work-velomail.png", path: "/#work" },
  { file: "05-process.png", path: "/#process" },
  { file: "06-contact.png", path: "/#contact" },
];

const mobileSections = [
  { file: "00-full-page.png", path: "/", fullPage: true },
  { file: "01-hero.png", path: "/" },
  { file: "02-about.png", path: "/#about" },
  { file: "04-work.png", path: "/#work" },
  { file: "06-contact.png", path: "/#contact" },
];

async function captureSection(page, url, filePath, fullPage = false) {
  await page.goto(`${baseUrl}${url}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: filePath, fullPage });
}

async function main() {
  await mkdir(desktopDir, { recursive: true });
  await mkdir(mobileDir, { recursive: true });

  const browser = await chromium.launch();

  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const desktopPage = await desktop.newPage();

  for (const section of desktopSections) {
    await captureSection(
      desktopPage,
      section.path,
      path.join(desktopDir, section.file),
      section.fullPage ?? false,
    );
  }

  await desktopPage.goto(`${baseUrl}/#work`, { waitUntil: "networkidle" });
  await desktopPage.getByRole("tab", { name: "RadarAI" }).click();
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: path.join(desktopDir, "04-work-radarai.png") });

  await desktopPage.getByRole("tab", { name: "MetroRate" }).click();
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: path.join(desktopDir, "04-work-metrorate.png") });

  const mobile = await browser.newContext({ ...devices["iPhone 13"] });
  const mobilePage = await mobile.newPage();

  for (const section of mobileSections) {
    await captureSection(
      mobilePage,
      section.path,
      path.join(mobileDir, section.file),
      section.fullPage ?? false,
    );
  }

  await browser.close();

  console.log(`Screenshots saved to ${path.join(root, "screenshots")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

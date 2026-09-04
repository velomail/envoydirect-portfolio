import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "public", "coming-soon-job-matcher.png");

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@500;600;700&display=swap" rel="stylesheet"/>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1920px;height:1080px;overflow:hidden;font-family:"DM Sans",system-ui,sans-serif;color:#1c2433;
    background:
      radial-gradient(900px 520px at 18% 10%, rgba(180,210,190,0.45), transparent 55%),
      radial-gradient(800px 480px at 88% 90%, rgba(200,210,230,0.4), transparent 50%),
      #f7f6f2;}
  .wrap{height:100%;display:grid;grid-template-columns:1.05fr 0.95fr;align-items:center;padding:72px 96px;gap:48px}
  .copy{max-width:640px}
  .eyebrow{font-size:14px;letter-spacing:0.18em;text-transform:uppercase;font-weight:700;color:#4a6354;opacity:0.85}
  h1{margin-top:18px;font-family:"Instrument Serif",Georgia,serif;font-weight:400;font-size:72px;line-height:0.98;letter-spacing:-0.02em;color:#1c2433}
  p{margin-top:22px;font-size:24px;line-height:1.45;color:#5a6578;max-width:520px}
  .pills{margin-top:28px;display:flex;gap:10px;flex-wrap:wrap}
  .pill{border:1px solid #d5dae3;background:#fff;border-radius:999px;padding:10px 16px;font-size:14px;font-weight:600;color:#4b5568}
  .stage{display:flex;justify-content:center;align-items:center;position:relative}
  .phone{width:340px;height:700px;border-radius:44px;border:10px solid #1c2433;background:#fff;box-shadow:0 30px 80px rgba(28,36,51,0.18);overflow:hidden;position:relative}
  .notch{position:absolute;top:10px;left:50%;transform:translateX(-50%);width:120px;height:28px;background:#1c2433;border-radius:20px;z-index:2}
  .screen{padding:56px 22px 24px;height:100%;background:linear-gradient(180deg,#f8faf8 0%,#ffffff 40%)}
  .label{font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;color:#6b7a6f}
  .title{margin-top:8px;font-family:"Instrument Serif",Georgia,serif;font-size:28px;line-height:1.1}
  .list{margin-top:22px;display:flex;flex-direction:column;gap:12px}
  .row{border:1px solid #e3e7ee;border-radius:16px;padding:14px 14px;background:#fff;display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center}
  .role{font-size:15px;font-weight:700;color:#1c2433}
  .meta{margin-top:4px;font-size:12px;color:#738094}
  .score{font-size:13px;font-weight:700;color:#2f6b4f;background:#e8f4ec;border-radius:999px;padding:6px 10px}
  .soon{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);background:#1c2433;color:#f7f6f2;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:10px 16px;border-radius:999px}
</style></head>
<body>
  <div class="wrap">
    <div class="copy">
      <div class="eyebrow">Coming soon</div>
      <h1>Resume-matched<br/>job finder</h1>
      <p>A mobile app that scrapes major job platforms and ranks your top ten fits from your resume.</p>
      <div class="pills"><span class="pill">Mobile</span><span class="pill">Resume match</span><span class="pill">Top 10 ranking</span></div>
    </div>
    <div class="stage">
      <div class="phone">
        <div class="notch"></div>
        <div class="screen">
          <div class="label">Today&rsquo;s matches</div>
          <div class="title">Top 10 for your resume</div>
          <div class="list">
            <div class="row"><div><div class="role">Frontend Engineer</div><div class="meta">Remote · Full-time</div></div><div class="score">96%</div></div>
            <div class="row"><div><div class="role">Full-stack Developer</div><div class="meta">Toronto · Hybrid</div></div><div class="score">91%</div></div>
            <div class="row"><div><div class="role">Product Engineer</div><div class="meta">Canada · Remote</div></div><div class="score">88%</div></div>
            <div class="row"><div><div class="role">React Native Dev</div><div class="meta">Contract</div></div><div class="score">84%</div></div>
            <div class="row"><div><div class="role">Software Engineer</div><div class="meta">Ottawa · On-site</div></div><div class="score">81%</div></div>
          </div>
        </div>
      </div>
      <div class="soon">Coming soon</div>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: out, type: "png" });
await browser.close();
console.log("wrote", out);

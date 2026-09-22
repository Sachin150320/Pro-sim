#!/usr/bin/env node
// Headless-Chrome driver for the ProSIM Next.js site (my-next-app).
// Zero dependencies: speaks the Chrome DevTools Protocol over Node's
// built-in global WebSocket (Node >= 22). Chrome/Edge is auto-detected
// on Windows; override with CHROME_BIN.
//
// Usage:
//   node driver.mjs shot <path> [outfile]     full-page screenshot of a route
//   node driver.mjs shots [outdir]            screenshot every known route
//   node driver.mjs links <path>              list <a href> targets on a route
//   node driver.mjs errors <path>             print console errors + failed requests
//   node driver.mjs eval <path> "<js expr>"   evaluate JS in the page, print result
//   node driver.mjs click <path> "<selector>" click a selector, then screenshot
//
// <path> is a site-relative route ("/", "/about-us") or a full URL.
// BASE_URL overrides the target origin (default http://localhost:3000).
// Screenshots default to <repo>/.claude/skills/run-prosim/shots/.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import net from "node:net";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const SHOT_DIR = process.env.SHOT_DIR || join(__dirname, "shots");
const PORT = Number(process.env.CDP_PORT || 9222);

// Every route folder that has a page.tsx, plus "/". Keep in sync with app/.
const ROUTES = [
  "/",
  "/about-us",
  "/vision-mission",
  "/Promoter",
  "/Team",
  "/Gallery",
  "/Customer-Visits",
  "/Customer-Benefits",
  "/Unique-Value-Proposition",
  "/finite-element-analysis-services",
  "/Computational-fluid-dynamics-services",
  "/Detailed-Engineering-services",
  "/Seismic-analysis-and-qualification",
  "/Three-D-plant-modelling-services",
  "/Engineering-Automation-&-Digital-Twin",
  "/Pre-Bid-&-Owners-Engineering",
];

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "google-chrome",
  "chromium",
].filter(Boolean);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findChrome() {
  for (const c of CHROME_CANDIDATES) {
    if (c.includes("/") || c.includes("\\")) {
      if (existsSync(c)) return c;
    } else {
      return c; // trust PATH name
    }
  }
  throw new Error("No Chrome/Edge found. Set CHROME_BIN.");
}

function portOpen(port) {
  return new Promise((res) => {
    const s = net.connect(port, "127.0.0.1");
    s.on("connect", () => { s.destroy(); res(true); });
    s.on("error", () => res(false));
  });
}

async function launchChrome() {
  if (await portOpen(PORT)) return null; // reuse an already-running instance
  const bin = findChrome();
  const userDir = join(process.env.TEMP || "/tmp", `prosim-cdp-${PORT}`);
  const args = [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${userDir}`,
    "--headless=new",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,900",
    "about:blank",
  ];
  const child = spawn(bin, args, { stdio: "ignore", detached: false });
  child.unref();
  for (let i = 0; i < 100; i++) {
    if (await portOpen(PORT)) return child;
    await sleep(100);
  }
  throw new Error("Chrome did not open the CDP port in time.");
}

async function cdpTargets() {
  const r = await fetch(`http://127.0.0.1:${PORT}/json/list`);
  return r.json();
}

async function newPage() {
  const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" });
  if (!r.ok) {
    // Older builds want GET
    const r2 = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`);
    return r2.json();
  }
  return r.json();
}

class Session {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.consoleErrors = [];
    this.failedRequests = [];
    ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      } else if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") {
        this.consoleErrors.push(msg.params.args.map((a) => a.value ?? a.description ?? "").join(" "));
      } else if (msg.method === "Runtime.exceptionThrown") {
        this.consoleErrors.push(msg.params.exceptionDetails.exception?.description || "exception");
      } else if (msg.method === "Network.loadingFailed") {
        this.failedRequests.push(`${msg.params.type} ${msg.params.errorText}`);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
}

async function connect() {
  await launchChrome();
  const page = await newPage();
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener("open", res, { once: true });
    ws.addEventListener("error", rej, { once: true });
  });
  const s = new Session(ws);
  await s.send("Page.enable");
  await s.send("Runtime.enable");
  await s.send("Network.enable");
  await s.send("Page.setDeviceMetricsOverride", {
    width: 1440, height: 900, deviceScaleFactor: 1, mobile: false,
  });
  return { s, ws, targetId: page.id };
}

function urlFor(path) {
  if (/^https?:\/\//.test(path)) return path;
  return BASE_URL + (path.startsWith("/") ? path : "/" + path);
}

async function navigate(s, path) {
  s.consoleErrors.length = 0;
  s.failedRequests.length = 0;
  const url = urlFor(path);
  await s.send("Page.navigate", { url });
  // Wait for load event, then a beat for hydration / lazy CSS.
  await new Promise((res) => {
    const onMsg = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.method === "Page.loadEventFired") { s.ws.removeEventListener("message", onMsg); res(); }
    };
    s.ws.addEventListener("message", onMsg);
    setTimeout(() => { s.ws.removeEventListener("message", onMsg); res(); }, 20000);
  });
  await sleep(1200);
  // The site wraps many sections in <ScrollAnimation> (IntersectionObserver);
  // content stays invisible until scrolled into view. Walk down the page to
  // trip every observer, then return to top. Capped so a very tall page can't
  // stall the run.
  await s.send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `(async () => {
      const step = Math.max(1, Math.round(innerHeight * 0.85));
      const max = Math.min(document.body.scrollHeight, step * 25);
      for (let y = 0; y <= max; y += step) {
        scrollTo(0, y);
        await new Promise(r => setTimeout(r, 150));
      }
      scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 600));
    })()`,
  });
  return url;
}

async function screenshot(s, outfile) {
  const { data } = await s.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
  mkdirSync(dirname(outfile), { recursive: true });
  writeFileSync(outfile, Buffer.from(data, "base64"));
  return outfile;
}

function slug(path) {
  return (path === "/" ? "home" : path.replace(/^\//, "").replace(/[^a-z0-9]+/gi, "-")).toLowerCase();
}

async function main() {
  const [cmd, arg1, arg2] = process.argv.slice(2);
  if (!cmd || cmd === "help") {
    console.log("commands: shot <path> [out] | shots [dir] | links <path> | errors <path> | eval <path> <js> | click <path> <sel>");
    process.exit(0);
  }
  const { s, ws } = await connect();
  try {
    if (cmd === "shot") {
      const out = arg2 ? resolve(arg2) : join(SHOT_DIR, slug(arg1) + ".png");
      const url = await navigate(s, arg1);
      const f = await screenshot(s, out);
      console.log(`${url} -> ${f}`);
      if (s.consoleErrors.length) console.log("console errors:", s.consoleErrors.length);
    } else if (cmd === "shots") {
      const dir = arg1 ? resolve(arg1) : SHOT_DIR;
      for (const r of ROUTES) {
        const url = await navigate(s, r);
        const f = await screenshot(s, join(dir, slug(r) + ".png"));
        console.log(`${String(url).padEnd(60)} -> ${f}${s.consoleErrors.length ? "  [" + s.consoleErrors.length + " console errors]" : ""}`);
      }
    } else if (cmd === "links") {
      await navigate(s, arg1);
      const { result } = await s.send("Runtime.evaluate", {
        expression: `[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href'))`,
        returnByValue: true,
      });
      console.log([...new Set(result.value)].sort().join("\n"));
    } else if (cmd === "errors") {
      await navigate(s, arg1);
      console.log("console errors:");
      console.log(s.consoleErrors.length ? s.consoleErrors.map((e) => "  " + e).join("\n") : "  (none)");
      console.log("failed requests:");
      console.log(s.failedRequests.length ? s.failedRequests.map((e) => "  " + e).join("\n") : "  (none)");
    } else if (cmd === "eval") {
      await navigate(s, arg1);
      const { result } = await s.send("Runtime.evaluate", { expression: arg2, returnByValue: true });
      console.log(JSON.stringify(result.value, null, 2));
    } else if (cmd === "click") {
      const url = await navigate(s, arg1);
      await s.send("Runtime.evaluate", {
        expression: `document.querySelector(${JSON.stringify(arg2)}).click()`,
      });
      await sleep(1500);
      const out = join(SHOT_DIR, slug(arg1) + "-after-click.png");
      await screenshot(s, out);
      console.log(`${url} clicked ${arg2} -> ${out}`);
      if (s.consoleErrors.length) console.log("console errors:", s.consoleErrors.join("; "));
    } else {
      console.error("unknown command:", cmd);
      process.exit(2);
    }
  } finally {
    ws.close();
  }
}

// Watchdog: never let a stuck CDP call hang the caller forever.
const WATCHDOG_MS = Number(process.env.DRIVER_TIMEOUT_MS || 90000);
setTimeout(() => { console.error(`driver: timed out after ${WATCHDOG_MS}ms`); process.exit(1); }, WATCHDOG_MS).unref();

main().then(
  () => { setImmediate(() => process.exit(0)); },
  (e) => { console.error(e); setImmediate(() => process.exit(1)); },
);

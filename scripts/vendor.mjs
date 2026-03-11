/**
 * scripts/vendor.mjs
 *
 * Copies Bootstrap Italia and Dev Kit Italia built assets from
 * node_modules into Jekyll-accessible directories.
 * Run after `npm install`.
 *
 * Why vendor instead of CDN?
 *   - Dev Kit Italia is alpha — no stable CDN URL guaranteed
 *   - The bundle uses ES module imports that need proper resolution
 *   - Self-hosting gives full control over which version is served
 *   - Works with GitHub Pages (static files, no build step beyond Jekyll)
 *
 * Output structure:
 *   assets/vendor/bsi/css/bootstrap-italia.min.css
 *   assets/vendor/bsi/js/bootstrap-italia.bundle.min.js
 *   assets/vendor/bsi/svg/sprites.svg
 *   assets/vendor/devkit/fonts.css
 *   assets/vendor/devkit/styles.css
 *   assets/vendor/devkit/elements.js  (+ chunks, fonts, assets)
 */

import { cpSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// ── Helpers ───────────────────────────────────────────────────────────────────

function copyFile(src, dest, label) {
  if (existsSync(src)) {
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
    console.log(`✅ ${label}`);
  } else {
    console.warn(`⚠️  ${label} — not found`);
  }
}

function copyDir(src, dest, label, filter) {
  if (existsSync(src)) {
    mkdirSync(dest, { recursive: true });
    cpSync(src, dest, { recursive: true, filter });
    console.log(`✅ ${label}`);
  } else {
    console.warn(`⚠️  ${label} — not found`);
  }
}

// ── Bootstrap Italia ──────────────────────────────────────────────────────────

const bsi = resolve(root, "node_modules/bootstrap-italia/dist");

console.log("\n── Bootstrap Italia ──");
copyFile(
  resolve(bsi, "css/bootstrap-italia.min.css"),
  resolve(root, "assets/vendor/bsi/css/bootstrap-italia.min.css"),
  "bootstrap-italia.min.css"
);
copyFile(
  resolve(bsi, "js/bootstrap-italia.bundle.min.js"),
  resolve(root, "assets/vendor/bsi/js/bootstrap-italia.bundle.min.js"),
  "bootstrap-italia.bundle.min.js"
);
copyFile(
  resolve(bsi, "svg/sprites.svg"),
  resolve(root, "assets/vendor/bsi/svg/sprites.svg"),
  "sprites.svg"
);

// ── Dev Kit Italia ────────────────────────────────────────────────────────────

const devkit = resolve(root, "node_modules/@italia/dev-kit-italia/dist");

console.log("\n── Dev Kit Italia ──");
if (!existsSync(devkit)) {
  console.error("❌ @italia/dev-kit-italia not found. Run: npm install");
  process.exit(1);
}

copyDir(
  devkit,
  resolve(root, "assets/vendor/devkit"),
  "Dev Kit dist/ (JS bundle + CSS + fonts + assets)",
  (src) => !src.endsWith(".map")
);

// ── Done ──────────────────────────────────────────────────────────────────────

console.log("\n🎉 Assets vendored into assets/vendor/{bsi,devkit}/");
/**
 * scripts/vendor.mjs
 *
 * Copies Bootstrap Italia and Dev Kit Italia built assets from
 * node_modules into Jekyll-accessible directories.
 * Syncs bsi_version and devkit_version into _config.yml.
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

import { cpSync, mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// ── Versions (from package.json) ──────────────────────────────────────────────

const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf-8"));
const bsiVersion = (pkg.dependencies?.["bootstrap-italia"] ?? "unknown").replace(/^\^|~/, "");
const devkitVersion = (pkg.dependencies?.["@italia/dev-kit-italia"] ?? "unknown").replace(/^\^|~/, "");

// ── Helpers ───────────────────────────────────────────────────────────────────

function copyFile(src, dest, label) {
  if (existsSync(src)) {
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
    console.log(`  ✅ ${label}`);
  } else {
    console.error(`  ❌ ${label} — not found: ${src}`);
    process.exit(1);
  }
}

function copyDir(src, dest, label, filter) {
  if (existsSync(src)) {
    mkdirSync(dest, { recursive: true });
    cpSync(src, dest, { recursive: true, filter });
    console.log(`  ✅ ${label}`);
  } else {
    console.error(`  ❌ ${label} — not found: ${src}`);
    process.exit(1);
  }
}

function syncConfigVersions() {
  const configPath = resolve(root, "_config.yml");
  let config = readFileSync(configPath, "utf-8");
  config = config.replace(/^bsi_version:.*$/m, `bsi_version: "${bsiVersion}"`);
  config = config.replace(/^devkit_version:.*$/m, `devkit_version: "${devkitVersion}"`);
  writeFileSync(configPath, config, "utf-8");
  console.log(`  ✅ _config.yml aggiornato`);
}

// ── Bootstrap Italia ──────────────────────────────────────────────────────────

const bsi = resolve(root, "node_modules/bootstrap-italia/dist");

console.log(`\n── Bootstrap Italia ${bsiVersion} ──`);
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

console.log(`\n── Dev Kit Italia ${devkitVersion} ──`);
copyDir(
  devkit,
  resolve(root, "assets/vendor/devkit"),
  "Dev Kit dist/ (JS bundle + CSS + fonts + assets)",
  (src) => !src.endsWith(".map")
);

// ── Sync _config.yml ──────────────────────────────────────────────────────────

console.log(`\n── _config.yml ──`);
syncConfigVersions();

// ── Done ──────────────────────────────────────────────────────────────────────

console.log(`\n🎉 Assets vendored into assets/vendor/{bsi,devkit}/`);
console.log(`   Bootstrap Italia ${bsiVersion} · Dev Kit Italia ${devkitVersion}\n`);
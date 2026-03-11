/**
 * scripts/vendor.mjs
 *
 * Copies Dev Kit Italia built assets from node_modules into
 * Jekyll-accessible directories. Run after `npm install`.
 *
 * Why vendor instead of CDN?
 *   - Dev Kit Italia is alpha — no stable CDN URL guaranteed
 *   - The bundle uses ES module imports that need proper resolution
 *   - Self-hosting gives full control over which version is served
 *   - Works with GitHub Pages (static files, no build step beyond Jekyll)
 */

import { cpSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SRC = resolve(root, "node_modules/@italia/dev-kit-italia/dist");
const DEST_CSS = resolve(root, "assets/vendor/devkit");
const DEST_JS = resolve(root, "assets/vendor/devkit");

if (!existsSync(SRC)) {
  console.error("❌ @italia/dev-kit-italia not found. Run: npm install");
  process.exit(1);
}

// Clean + create destination
mkdirSync(DEST_CSS, { recursive: true });
mkdirSync(DEST_JS, { recursive: true });

// Copy CSS
for (const file of ["styles.css", "fonts.css"]) {
  const src = resolve(SRC, file);
  if (existsSync(src)) {
    cpSync(src, resolve(DEST_CSS, file));
    console.log(`✅ ${file}`);
  } else {
    console.warn(`⚠️  ${file} not found in dist/`);
  }
}

// Copy JS bundle (elements.js + chunks)
// Dev Kit Italia dist/ contains the compiled web component bundle
cpSync(SRC, DEST_JS, {
  recursive: true,
  filter: (src) => {
    // Copy JS files + font assets, skip CSS (already copied) and sourcemaps
    if (src.endsWith(".map")) return false;
    return true;
  },
});
console.log("✅ JS bundle + assets copied");

// Also copy fonts directory if it exists at package level
const FONTS_SRC = resolve(root, "node_modules/@italia/dev-kit-italia/dist/fonts");
if (existsSync(FONTS_SRC)) {
  const FONTS_DEST = resolve(root, "assets/vendor/devkit/fonts");
  mkdirSync(FONTS_DEST, { recursive: true });
  cpSync(FONTS_SRC, FONTS_DEST, { recursive: true });
  console.log("✅ Fonts copied");
}

// ── Bootstrap Italia CSS ──────────────────────────────────────────────────────
const BSI_CSS_SRC = resolve(root, "node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css");
const BSI_CSS_DEST = resolve(root, "assets/vendor/bsi/css");

if (existsSync(BSI_CSS_SRC)) {
  mkdirSync(BSI_CSS_DEST, { recursive: true });
  cpSync(BSI_CSS_SRC, resolve(BSI_CSS_DEST, "bootstrap-italia.min.css"));
  console.log("✅ bootstrap-italia.min.css");
} else {
  console.warn("⚠️  bootstrap-italia.min.css not found");
}

// ── Bootstrap Italia JS ───────────────────────────────────────────────────────
const BSI_SRC = resolve(root, "node_modules/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js");
const BSI_DEST = resolve(root, "assets/vendor/bsi");

if (existsSync(BSI_SRC)) {
  mkdirSync(BSI_DEST, { recursive: true });
  cpSync(BSI_SRC, resolve(BSI_DEST, "bootstrap-italia.bundle.min.js"));
  console.log("✅ bootstrap-italia.min.js");
} else {
  console.warn("⚠️  bootstrap-italia JS not found in node_modules");
}

console.log("\n🎉 Dev Kit Italia assets vendored into assets/vendor/devkit/");

// ── Bootstrap Italia SVG sprites ──────────────────────────────────────────────
const BSI_SVG_SRC = resolve(root, "node_modules/bootstrap-italia/dist/svg/sprites.svg");
const BSI_SVG_DEST = resolve(root, "assets/vendor/bsi/svg");

if (existsSync(BSI_SVG_SRC)) {
  mkdirSync(BSI_SVG_DEST, { recursive: true });
  cpSync(BSI_SVG_SRC, resolve(BSI_SVG_DEST, "sprites.svg"));
  console.log("✅ sprites.svg");
} else {
  console.warn("⚠️  bootstrap-italia sprites.svg not found");
}
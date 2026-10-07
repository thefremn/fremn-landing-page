// scripts/sync-llms.mjs
// Single source of truth: <repo>/llms.txt
// Copies it to public/llms.txt so it is served at https://fremn.com/llms.txt.
// Runs automatically via the `prebuild` npm script. Keep both copies identical by
// editing ONLY the root llms.txt — never public/llms.txt directly.

import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "llms.txt");
const dest = join(root, "public", "llms.txt");

if (!existsSync(src)) {
  console.error("[sync-llms] missing source llms.txt at repo root");
  process.exit(1);
}

copyFileSync(src, dest);
console.log("[sync-llms] llms.txt → public/llms.txt");

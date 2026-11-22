// Copy VIDEO.json from the repository root into the output directory.
//
// The harness sets two environment variables:
//   MAKEFUN_BOT_DIR     - the repository root holding VIDEO.json
//   MAKEFUN_OUTPUT_DIR  - where the copy must be written
// This script uses only the Node standard library, makes no network
// requests, and writes nothing else. The bytes are copied unchanged:
// no parsing, no reformatting, no added or removed fields.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDirValue = process.env.MAKEFUN_BOT_DIR;
const outputDirValue = process.env.MAKEFUN_OUTPUT_DIR;

if (!botDirValue || !outputDirValue) {
  throw new Error(
    "MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR must both be set.",
  );
}

const botDir = resolve(botDirValue);
const outputDir = resolve(outputDirValue);

const sourcePath = join(botDir, "VIDEO.json");

// Read first, before creating anything: if VIDEO.json is missing this
// throws and exits non-zero, and no partial output file is written.
const data = readFileSync(sourcePath);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), data);

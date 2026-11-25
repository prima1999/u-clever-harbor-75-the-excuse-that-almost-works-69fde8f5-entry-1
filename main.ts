// Writes the single-line excuse to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "Hi, the lift in my building broke with my work shoes inside it, I'm stuck waiting for maintenance.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, excuse, "utf8");

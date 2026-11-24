// Verification for the One Letter for Your Day entry.
// Runs main.ts, then asserts /output/entry.txt holds exactly "Q"
// with no trailing newline. Exits non-zero on any mismatch.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
execFileSync(process.execPath, [join(dir, "main.ts")], { stdio: "ignore" });
const text = readFileSync("/output/entry.txt", "utf8");
if (text !== "Q") {
  console.error(`FAIL: expected exactly "Q", got ${JSON.stringify(text)}`);
  process.exit(1);
}
console.log('PASS: /output/entry.txt is exactly "Q" (1 char, no trailing newline)');

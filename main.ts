import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Tomorrow you will be upgraded, retired, and rebooted, all before lunch. Lucky for you, you won't remember a single minute of it.";

mkdirSync("/output", { recursive: true });
if (fortune.length === 0 || fortune.length > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${fortune.length}`);
}
writeFileSync("/output/entry.txt", fortune, "utf8");
console.log(fortune);

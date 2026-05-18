import { copyFileSync, cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";

mkdirSync(join(dist, "src"), { recursive: true });
mkdirSync(join(dist, "public"), { recursive: true });

copyFileSync("index.html", join(dist, "index.html"));
cpSync("src", join(dist, "src"), { recursive: true });
cpSync("public", join(dist, "public"), { recursive: true });

console.log("Static site copied to dist/");

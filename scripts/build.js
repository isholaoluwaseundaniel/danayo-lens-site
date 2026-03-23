const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const sourceHtml = path.join(root, "DANAYO LENS.html");
const sourceCss = path.join(root, "DANAYO LENS.css");

if (!fs.existsSync(sourceHtml)) {
  throw new Error("Missing source HTML: DANAYO LENS.html");
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// Build output: deploy-friendly index.html
fs.copyFileSync(sourceHtml, path.join(dist, "index.html"));

// Keep source files alongside build artifacts for repository traceability.
fs.copyFileSync(sourceHtml, path.join(dist, "DANAYO LENS.html"));
if (fs.existsSync(sourceCss)) {
  fs.copyFileSync(sourceCss, path.join(dist, "DANAYO LENS.css"));
}

console.log("Build complete: dist/index.html");

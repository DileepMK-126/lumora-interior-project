import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const docs = [
  ["setup-guide.md", "setup-guide.pdf", "Lumora Interiors Setup Guide"],
  ["performance-report.md", "performance-report.pdf", "Lumora Interiors Performance Report"],
  ["deployment-guide.md", "deployment-guide.pdf", "Lumora Interiors Deployment Guide"],
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inline(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inTable = false;

  for (const line of lines) {
    if (!line.trim()) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      if (inTable) {
        html += "</tbody></table>";
        inTable = false;
      }
      continue;
    }

    if (line.startsWith("# ")) {
      html += `<h1>${inline(line.slice(2))}</h1>`;
      continue;
    }

    if (line.startsWith("## ")) {
      html += `<h2>${inline(line.slice(3))}</h2>`;
      continue;
    }

    if (line.startsWith("### ")) {
      html += `<h3>${inline(line.slice(4))}</h3>`;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inline(line.slice(2))}</li>`;
      continue;
    }

    if (line.includes("|") && line.trim().startsWith("|")) {
      if (line.includes("---")) continue;
      const cells = line.split("|").slice(1, -1).map((cell) => `<td>${inline(cell.trim())}</td>`).join("");
      if (!inTable) {
        html += "<table><tbody>";
        inTable = true;
      }
      html += `<tr>${cells}</tr>`;
      continue;
    }

    if (inList) {
      html += "</ul>";
      inList = false;
    }
    if (inTable) {
      html += "</tbody></table>";
      inTable = false;
    }
    html += `<p>${inline(line)}</p>`;
  }

  if (inList) html += "</ul>";
  if (inTable) html += "</tbody></table>";
  return html;
}

function page(title, body) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    @page { margin: 22mm 18mm; }
    body {
      color: #111;
      background: #F8F5F2;
      font-family: Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.55;
    }
    h1, h2, h3 { font-family: Georgia, serif; letter-spacing: 0; }
    h1 { font-size: 30pt; line-height: 1; margin: 0 0 18pt; }
    h2 { font-size: 18pt; margin: 24pt 0 8pt; border-top: 1px solid #C8A96B; padding-top: 14pt; }
    h3 { font-size: 13pt; margin: 16pt 0 6pt; }
    p { margin: 0 0 8pt; }
    ul { margin: 0 0 10pt 18pt; padding: 0; }
    li { margin: 0 0 5pt; }
    code { color: #6b5529; font-family: Consolas, monospace; }
    table { width: 100%; border-collapse: collapse; margin: 10pt 0; }
    td { border: 1px solid rgba(17,17,17,.22); padding: 6pt; vertical-align: top; }
  </style>
</head>
<body>${body}</body>
</html>`;
}

for (const [source, output, title] of docs) {
  const markdown = readFileSync(resolve("Lumora-Interiors/docs", source), "utf8");
  const htmlPath = resolve("Lumora-Interiors/docs", source.replace(".md", ".html"));
  const outputPath = resolve("Lumora-Interiors", output);
  writeFileSync(htmlPath, page(title, markdownToHtml(markdown)));
  const result = spawnSync(chrome, [
    "--headless",
    "--disable-gpu",
    `--print-to-pdf=${outputPath}`,
    `file:///${htmlPath.replaceAll("\\", "/")}`,
  ], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

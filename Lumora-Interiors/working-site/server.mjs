import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" };
const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const file = normalize(url.pathname === "/" ? "index.html" : url.pathname.slice(1));
  try {
    const data = await readFile(join(root, file));
    res.writeHead(200, { "content-type": types[extname(file)] || "text/plain" });
    res.end(data);
  } catch {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not found");
  }
});
server.listen(4173, () => console.log("Lumora working site: http://localhost:4173"));

import express from "express";
export const app = express();
app.get("/api/test", (_, res) => res.json({ greeting: "Hellos" }));

if (!process.env["VITE"]) {
  const frontendFiles = process.cwd() + "/dist";
  app.use(express.static(frontendFiles));
  app.get("/*", (_, res) => {
    res.send(frontendFiles + "/index.html");
  });
  app.listen(process.env["PORT"]);
}

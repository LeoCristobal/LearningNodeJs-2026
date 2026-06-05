import { PORT } from "./config/env.js";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json("Hello");
});
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

import "dotenv/config";
import express from "express";

const app = express();
// const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world ");
});

export default app;

import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(8888);

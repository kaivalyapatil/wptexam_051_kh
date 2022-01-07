const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { insertData, selectAll } = require("./user");

app.get("/index", async (req, res) => {
  const list = await selectAll();
  res.json(list);
});

app.post("/hello", async (req, res) => {
  const list = req.body;
  await insertData(list);
  res.json({ message: "added in database" });
});

app.listen(5001, () => console.log("server start"));

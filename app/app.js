const express = require("express");
const app = express();
const port = 3000;
const { a } = require("./index");
app.get("/", (req, res) => {
  res.send(a());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
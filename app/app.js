const express = require("express");
const app = express();
const PORT = process.env.PORT || 3020;
const { a } = require("./index");
app.get("/", (req, res) => {
  res.send(a());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

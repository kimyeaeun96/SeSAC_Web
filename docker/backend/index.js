const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(req.query.name);
});

app.listen(8000, (req, res) => {
  console.log("Server is listening : 8000");
});

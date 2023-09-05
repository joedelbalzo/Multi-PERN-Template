const express = require("express");
const app2 = express.Router();

app2.get("/", (req, res, next) => {
  const message = "Hello from App 2";
  console.log(message);
  res.send(message);
});

module.exports = app2;

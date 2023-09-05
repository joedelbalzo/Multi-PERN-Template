const express = require("express");
const app1 = express.Router();

app1.get("/", (req, res, next) => {
  const message = "Hello from App 1";
  console.log(message);
  res.send(message);
});

module.exports = app1;

const express = require("express");
const app3 = express.Router();

app3.get("/", (req, res, next) => {
  const message = "Hello from App 3";
  console.log(message);
  res.send(message);
});

// Any additional app3-specific routes go here

module.exports = app3;

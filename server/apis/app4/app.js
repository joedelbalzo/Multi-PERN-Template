const express = require("express");
const app4 = express.Router();

app4.get("/", (req, res, next) => {
  const message = "Hello from App 4";
  console.log(message);
  res.send(message);
});

// Any additional app4-specific routes go here

module.exports = app4;

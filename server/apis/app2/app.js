const express = require("express");
const app2 = express.Router();
const { Guitar } = require("../../dbs");

app2.get("/", async (req, res, next) => {
  const guitars = await Guitar.findAll();
  res.send(guitars);
});

module.exports = app2;

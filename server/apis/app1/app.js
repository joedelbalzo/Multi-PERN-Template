const express = require("express");
const app1 = express.Router();
const { Drink } = require("../../dbs");

app1.get("/", async (req, res, next) => {
  const drinks = await Drink.findAll();
  res.send(drinks);
});

module.exports = app1;

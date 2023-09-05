const express = require("express");
const app4 = express.Router();
const { Team } = require("../../dbs");

app4.get("/", async (req, res, next) => {
  const teams = await Team.findAll();
  res.send(teams);
});

module.exports = app4;

const express = require("express");
const app3 = express.Router();
const { User } = require("../../dbs");

app3.get("/", async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
});

module.exports = app3;

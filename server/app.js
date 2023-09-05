const express = require("express");
const app = express();

app.use(express.json());
// Any global middleware can go here

module.exports = app;

const conn = require("./conn");
const { Drink, app1SyncAndSeed } = require("./app1/Drink.js");
const { Guitar, app2SyncAndSeed } = require("./app2/Guitar.js");
const { User, app3SyncAndSeed } = require("./app3/User.js");
const { Team, app4SyncAndSeed } = require("./app4/Team.js");

module.exports = {
  Drink,
  Guitar,
  User,
  Team,
  app1SyncAndSeed,
  app2SyncAndSeed,
  app3SyncAndSeed,
  app4SyncAndSeed,
  conn,
};

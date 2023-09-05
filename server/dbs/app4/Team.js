const conn = require("../conn");
const { STRING, ENUM, UUID, UUIDV4 } = conn.Sequelize;

const Team = conn.define("team", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  city: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  mascot: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  sport: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const app4SyncAndSeed = async () => {
  const [orioles, capitals, celtics] = await Promise.all([
    Team.create({ city: "Baltimore", mascot: "Orioles", sport: "baseball" }),
    Team.create({ city: "Washington", mascot: "Capitals", sport: "hockey" }),
    Team.create({ city: "Boston", mascot: "Celtics", sport: "basketball" }),
  ]);
  return {
    teams: {
      orioles,
      capitals,
      celtics,
    },
  };
};

module.exports = {
  Team,
  app4SyncAndSeed,
};

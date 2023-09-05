const conn = require("../conn");
const { STRING, ENUM, UUID, UUIDV4 } = conn.Sequelize;

const Drink = conn.define("drink", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: ENUM("coffee", "tea"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const app1SyncAndSeed = async () => {
  const [coffee, espresso, coldBrew] = await Promise.all([
    Drink.create({ name: "coffee", category: "coffee" }),
    Drink.create({ name: "black tea", category: "tea" }),
    Drink.create({ name: "cold brew", category: "coffee" }),
  ]);
  return {
    drinks: {
      coffee,
      espresso,
      coldBrew,
    },
  };
};

module.exports = {
  Drink,
  app1SyncAndSeed,
};

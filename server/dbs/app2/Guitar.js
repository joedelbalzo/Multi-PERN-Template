const conn = require("../conn");
const { STRING, ENUM, UUID, UUIDV4 } = conn.Sequelize;

const Guitar = conn.define("guitar", {
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
  brand: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: ENUM("electric", "acoustic"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const app2SyncAndSeed = async () => {
  const [strat, lesPaul, d15] = await Promise.all([
    Guitar.create({ name: "Strat", brand: "Fender", category: "electric" }),
    Guitar.create({ name: "Les Paul", brand: "Gibson", category: "electric" }),
    Guitar.create({ name: "D15", brand: "Martin", category: "acoustic" }),
  ]);
  return {
    guitars: {
      strat,
      lesPaul,
      d15,
    },
  };
};

module.exports = {
  Guitar,
  app2SyncAndSeed,
};

const conn = require("../conn");
const { STRING, ENUM, UUID, UUIDV4 } = conn.Sequelize;

const User = conn.define("user", {
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
});

const app3SyncAndSeed = async () => {
  const [curly, larry, moe] = await Promise.all([
    User.create({ name: "Curly" }),
    User.create({ name: "Larry" }),
    User.create({ name: "Moe" }),
  ]);
  return {
    users: {
      curly,
      larry,
      moe,
    },
  };
};

module.exports = {
  User,
  app3SyncAndSeed,
};

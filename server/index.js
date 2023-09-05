const { app1, app2, app3, app4 } = require("./apis");
const {
  app1SyncAndSeed,
  app2SyncAndSeed,
  app3SyncAndSeed,
  app4SyncAndSeed,
  conn,
} = require("./dbs");
const app = require("./app");
const cors = require("cors");

app.use(cors());

app.use("/apis/app1", app1);
app.use("/apis/app2", app2);
app.use("/apis/app3", app3);
app.use("/apis/app4", app4);

const init = async () => {
  try {
    await conn.sync({ force: true });
    console.log("syncing");
    await app1SyncAndSeed();
    await app2SyncAndSeed();
    await app3SyncAndSeed();
    await app4SyncAndSeed();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();

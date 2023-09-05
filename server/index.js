const { app1, app2, app3, app4 } = require("./apis");
const app = require("./app");
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/apis/app1", app1);
app.use("/apis/app2", app2);
app.use("/apis/app3", app3);
app.use("/apis/app4", app4);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

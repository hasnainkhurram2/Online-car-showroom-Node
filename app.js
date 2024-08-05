const index = require("./src/models/index");
const express = require("express");
// const userRouter = require("./src/routes/userRoutes");
const User = require("./src/models/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1", require("./src/routes/index"));

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

const index = require("./src/models/index");
const express = require("express");
const userRouter = require("./src/routes/userRoutes");
const User = require("./src/models/user");
const { getAllUsers } = require("./src/controller/userController");

// const http = require('http');
const app = express();
// const server = http.createServer(8000, '127.0.0.1',)

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.use('/api/v1/tours', tourRouter);
app.use("/api/v1/users", userRouter);

// const getAllUsers1 = async () => {
//   // console.logUser);

//   const temp = await User.findAll();

//   res.status(200).json({
//     status: "success",
//     requestedAt: req.requestTime,
//     // results: .length,
//     data: {
//       d: `${temp}`,
//     },
//   });
// };

// getAllUsers1();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

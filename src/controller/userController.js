// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);

//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   next();
// };
// const User = require("../models/user.js");
const models = require("../models/index");
const sequelize = require("sequelize");

exports.getAllUsers = async (req, res) => {
  const temp = await models.User.findAll();

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: temp,

    // data: {
    //   d: `${temp}`,
    // },
  });
};

exports.getUser = (req, res) => {};

exports.createUser = async (req, res) => {
  try {
    const bodyString = JSON.stringify(User);
    console.log(`${User}`);

    const newUser = await User.create({
      name: req.body.name, // Use req.body data
      age: req.body.age,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: {
        user: "hello world",
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "User creation failed",
      error: error.message,
    });
  }
};

exports.updateUser = (req, res) => {};

exports.deleteUser = (req, res) => {};

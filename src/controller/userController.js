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

//done
exports.getAllUsers = async (req, res) => {
  const temp = await models.User.findAll();

  res.status(200).json({
    status: "success",
    data: temp,
  });
};

exports.getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const temp = await models.User.findByPk(_id);
    console.log(temp);

    res.status(200).json({
      data: temp,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "User not found",
      error: error.message,
    });
  }
};

//done
exports.createUser = async (req, res) => {
  try {
    const newUser = await models.User.create({
      id: req.body.id, // Use req.body data
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      DOB: req.body.DOB,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
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

//done
exports.deleteUser = async (req, res) => {
  try {
    await models.User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      message: `User with id: ${req.params.id} Deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "User deletion failed",
      error: error.message,
    });
  }
};

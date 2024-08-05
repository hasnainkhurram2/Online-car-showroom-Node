const express = require("express");
const UserController = require("./../controller/userController");

const router = express.Router();

router
  .route("/")
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;

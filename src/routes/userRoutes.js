const express = require("express");
const UserController = require("./../controller/userController");

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route("/")
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;

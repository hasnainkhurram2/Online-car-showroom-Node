const express = require("express");
const UserController = require("../../controller/userController");

const router = express.Router();

router.route("/").get(UserController.getAllUsers);

module.exports = router;

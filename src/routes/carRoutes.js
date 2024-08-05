const express = require("express");
const CarController = require("./../controller/carController");

const router = express.Router();

router.route("/").get(CarController.getAllCars).post(CarController.createCar);

router
  .route("/:id")
  .get(CarController.getCar)
  .patch(CarController.updateCar)
  .delete(CarController.deleteCar);

module.exports = router;

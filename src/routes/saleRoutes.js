const express = require("express");
const SaleController = require("./../controller/saleController");

const router = express.Router();

router
  .route("/")
  .get(SaleController.getAllSales) //admin
  .post(SaleController.createSale);

router
  .route("/:id")
  .get(SaleController.getSale)
  .patch(SaleController.updateSale)
  .delete(SaleController.deleteSale);

module.exports = router;

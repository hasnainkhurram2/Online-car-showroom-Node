const express = require("express");
const PaymentController = require("./../controller/paymentController");

const router = express.Router();

router
  .route("/")
  .get(PaymentController.getAllPayments) //admin
  .post(PaymentController.createPayment);

router
  .route("/:id")
  .get(PaymentController.getPayment)
  .patch(PaymentController.updatePayment)
  .delete(PaymentController.deletePayment);

module.exports = router;

const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
// const saleRoutes = require("./saleRoutes");
// const reviewRoutes = require("./reviewRoutes");
// const paymentRoutes = require("./paymentRoutes");
// const orderRoutes = require("./orderRoutes");
// const carRoutes = require("./carRoutes");
const healthRoutes = require("./healthRoutes");

router.use("/users", userRoutes);
// router.use("/sales", saleRoutes);
// router.use("/reviews", reviewRoutes);
// router.use("/payments", paymentRoutes);
// router.use("/orders", orderRoutes);
// router.use("/cars", carRoutes);
router.use("/health", healthRoutes);

// router.use(userRoutes);
// router.use(saleRoutes);
// router.use(reviewRoutes);
// router.use(paymentRoutes);
// router.use(orderRoutes);
// router.use(carRoutes);

module.exports = router;

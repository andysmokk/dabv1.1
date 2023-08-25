const express = require("express");
const { createOrder } = require("../../controllers/orders/createOrder");
const {
  errorHandler,
  createOrderValidation,
  historyValidation,
} = require("../../middlewares/index");
const getOrders = require("../../controllers/orders/getOrders");

const router = express.Router();

router
  .route("/shopping-cart")
  .post(createOrderValidation, errorHandler(createOrder));

router.route("/history").post(historyValidation, errorHandler(getOrders));

module.exports = router;

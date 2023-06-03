const express = require("express");
const { createOrder } = require("../../controllers/orders/createOrder");
const {
  errorHandler,
  createOrderValidation,
} = require("../../middlewares/index");

const router = express.Router();

router
  .route("/shopping-cart")
  .post(createOrderValidation, errorHandler(createOrder));

module.exports = router;

const Order = require("../../models/Order");
const httpCode = require("../../lib/httpCodes");
const CustomError = require("../../lib/customError");

const createOrder = async (req, res) => {
  try {
    const data = req.body;
    const order = new Order(data);
    await order.save();
    return res.status(httpCode.CREATED).json({
      status: "successful",
      code: httpCode.CREATED,
      data: order,
    });
  } catch (error) {
    throw new CustomError(httpCode.BAD_REQUEST, error.message);
  }
};

module.exports = { createOrder };

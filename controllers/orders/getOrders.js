const getOrdersOfUser = require("../../services/getOrdersOfUser");
const httpCode = require("../../lib/httpCodes");
const CustomError = require("../../lib/customError");

const getOrders = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    throw new CustomError(httpCode.UNAUTHORIZED, "Email is wrong");
  }

  const orders = await getOrdersOfUser(email);

  if (orders.length === 0) {
    throw new CustomError(httpCode.NOT_FOUND, "No orders found");
  }

  res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data: orders,
  });
};

module.exports = getOrders;

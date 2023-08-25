const Orders = require("../models/Order");

const getOrdersOfUser = async (email) => {
  try {
    const orders = await Orders.aggregate([
      {
        $match: {
          "user.email": email,
        },
      },
    ]);
    return orders;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = getOrdersOfUser;

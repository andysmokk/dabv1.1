const Joi = require("joi");
const httpCode = require("../lib/httpCodes");

const createOrderValidation = async (req, res, next) => {
  const schema = Joi.object({
    user: {
      name: Joi.string().min(2).max(40).required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
    },
    order: [Joi.array().min(1).required()],
    totalPrice: Joi.number().integer(),
  });
  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message.replace(/"/g, "") });
  }
  next();
};

module.exports = {
  createOrderValidation,
};

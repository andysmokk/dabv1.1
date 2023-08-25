const Joi = require("joi");
const httpCode = require("../lib/httpCodes");

const historyValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
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
  historyValidation,
};

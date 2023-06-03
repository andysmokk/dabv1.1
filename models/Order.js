const { model, Schema } = require("mongoose");

const orderSchema = Schema(
  {
    user: {
      name: {
        type: String,
        required: [true, "name is required"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
      },
      phone: {
        type: String,
        required: [true, "phone is required"],
      },
      address: {
        type: String,
        required: [true, "address is required"],
      },
    },
    order: {
      type: Array,
      required: [true, "order is required"],
    },
    totalPrice: {
      type: Number,
      required: [true, "totalPrice is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("order", orderSchema);

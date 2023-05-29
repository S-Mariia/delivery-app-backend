const { Schema, model } = require("mongoose");

const handleMongooseError = require("../helpers/handleMongooseError");

const Joi = require("joi");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    price: {
      type: Number,
      required: [true, "Set price of product"],
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: "shop",
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

module.exports = { Product };

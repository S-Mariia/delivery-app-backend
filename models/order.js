const { Schema, model } = require("mongoose");
const Joi = require("joi");

const handleMongooseError = require("../helpers/handleMongooseError");

const nameRegExp = /^[a-zA-Z ]+$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\+380\d{9}$/;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for product"],
  },
  price: {
    type: Number,
    required: [true, "Set price of product"],
  },
  imageUrl: {
    type: String,
  },
  shopId: {
    type: Schema.Types.ObjectId,
    ref: "shop",
  },
  quantity: {
    type: Number,
    required: [true, "Set quantity of product"],
  },
  _id: {
    type: Schema.Types.ObjectId,
  },
});

const orderSchema = new Schema(
  {
    customerData: {
      name: {
        type: String,
        match: [nameRegExp, "Enter a name"],
        required: [true, "Name is required"],
      },
      email: {
        type: String,
        match: [emailRegExp, "Enter an email"],
        required: [true, "Email is required"],
      },
      phone: {
        type: String,
        match: [phoneRegExp, "Enter a phone"],
        required: [true, "Phone is required"],
      },
      address: {
        type: String,
        required: [true, "Address is required"],
      },
    },
    order: [productSchema],
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

const orderJoiSchema = Joi.object({
  customerData: Joi.object({
    name: Joi.string().pattern(new RegExp(nameRegExp)).required(),
    email: Joi.string().pattern(new RegExp(emailRegExp)).required(),
    phone: Joi.string().pattern(new RegExp(phoneRegExp)).required(),
    address: Joi.string().required(),
  }),
  order: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
      shopId: Joi.string().required(),
      imageUrl: Joi.string(),
      _id: Joi.string().required(),
    })
  ),
});

module.exports = { Order, orderJoiSchema };

const { Schema, model } = require("mongoose");

const handleMongooseError = require("../helpers/handleMongooseError");

const Joi = require("joi");

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for shop"],
    },
  },
  { versionKey: false, timestamps: true }
);

shopSchema.post("save", handleMongooseError);

const Shop = model("shop", shopSchema);

module.exports = { Shop };

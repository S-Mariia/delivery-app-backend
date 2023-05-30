const HttpError = require("./helpers/HttpErrors");

const { Shop } = require("./models/shop");
const { Product } = require("./models/product");
const { Order } = require("./models/order");

const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find({}, "-createdAt -updatedAt");
    res.json(shops);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const { shopId } = req.params;
    const products = await Product.find({ shopId }, "-createdAt -updatedAt");
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const result = await Order.create({ ...req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getOrdersHistory = async (req, res, next) => {
  try {
    const { email, phone } = req.query;
    if (!email || !phone) {
      throw HttpError(400, "Bad request");
    }
    const result = await Order.find(
      {
        "customerData.email": email,
        "customerData.phone": `+${phone}`,
      },
      "-createdAt -updatedAt"
    ).sort({ createdAt: -1 });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getShops,
  getProducts,
  createOrder,
  getOrdersHistory,
};

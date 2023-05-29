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
// const getContacts = async (req, res, next) => {
//   const { page, limit, favorite } = req.query;
//   const skip = limit * (page - 1);

//   if (favorite) {
//     const receivedContacts = await Contact.find(
//       { owner: req.user._id, favorite },
//       null,
//       {
//         skip,
//         limit,
//       }
//     ).populate("owner", ["email", "subscription"]);
//     res.json(receivedContacts);
//     return;
//   }
//   const allContacts = await Contact.find({ owner: req.user._id }, null, {
//     skip,
//     limit,
//   }).populate("owner", ["email", "subscription"]);
//   res.json(allContacts);
// };

// const getContact = async (req, res, next) => {
//   const id = req.params.contactId;
//   const result = await Contact.findById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const addContact = async (req, res, next) => {
//   const result = await Contact.create({ ...req.body, owner: req.user._id });
//   res.status(201).json(result);
// };

// const deleteContact = async (req, res, next) => {
//   const id = req.params.contactId;
//   const result = await Contact.findByIdAndRemove(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "Contact deleted" });
// };

// const updateContact = async (req, res, next) => {
//   const id = req.params.contactId;
//   const result = await Contact.findOneAndReplace(
//     { _id: id },
//     { ...req.body, owner: req.user._id },
//     {
//       new: true,
//     }
//   );
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const updateStatusContact = async (req, res, next) => {
//   const id = req.params.contactId;
//   const result = await Contact.findByIdAndUpdate(id, req.body, {
//     new: true,
//   });
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

module.exports = {
  getShops,
  getProducts,
  createOrder,
};

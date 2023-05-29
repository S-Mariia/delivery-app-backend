const { isValidObjectId } = require("mongoose");

const HttpError = require("../helpers/HttpErrors");

const isValidId = (req, res, next) => {
  const { shopId } = req.params;
  if (!isValidObjectId(shopId)) {
    next(HttpError(400, `${shopId} is not valid id`));
  }
  next();
};

module.exports = isValidId;

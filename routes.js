const express = require("express");

const router = express.Router();

const { orderJoiSchema } = require("./models/order");

const validateBody = require("./middlewares/validateBody");

const ctrl = require("./controllers");
const isValidId = require("./middlewares/isValidId");

router.get("/shops", ctrl.getShops);
router.get("/products/:shopId", isValidId, ctrl.getProducts);
router.post("/orders", validateBody(orderJoiSchema), ctrl.createOrder);
router.get("/orders", ctrl.getOrdersHistory);

module.exports = router;

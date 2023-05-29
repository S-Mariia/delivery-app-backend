const express = require("express");

const router = express.Router();

const { orderJoiSchema } = require("./models/order");

// const { schemas } = require("../../models/contact");

// const { validateBody, isValidId, authenticate } = require("../../middlewares");
const validateBody = require("./middlewares/validateBody");

const ctrl = require("./controllers");
const isValidId = require("./middlewares/isValidId");

router.get("/shops", ctrl.getShops);
router.get("/products/:shopId", isValidId, ctrl.getProducts);
router.post("/orders", validateBody(orderJoiSchema), ctrl.createOrder);
// router.get("/:contactId", authenticate, isValidId, ctrl.getContact);
// router.post(
//   "/",
//   authenticate,
//   validateBody(schemas.newContactSchema),
//   ctrl.addContact
// );
// router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);
// router.put(
//   "/:contactId",
//   authenticate,
//   isValidId,
//   validateBody(schemas.newContactSchema),
//   ctrl.updateContact
// );
// router.patch(
//   "/:contactId/favorite",
//   authenticate,
//   isValidId,
//   validateBody(schemas.updateStatusSchema),
//   ctrl.updateStatusContact
// );

module.exports = router;

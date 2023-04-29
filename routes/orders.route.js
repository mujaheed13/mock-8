const express = require("express");
const { auth } = require("../middlewares/auth.js");
const orderRouter = express.Router();

orderRouter.post("/orders", placeOrder);
orderRouter.get("/orders/:id", getOrder);
orderRouter.patch("/orders/:id", updateOrder);


module.exports = { orderRouter }
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user : { type: ObjectId },
    restaurant : { type: ObjectId},
  items: [{
    name: String,
    price: Number,
    quantity: Number
  }],
  totalPrice: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  status: String 
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel }
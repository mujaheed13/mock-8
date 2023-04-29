const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    description: String,
    name: String,
    price: Number,
    image: String,
    restaurant_id: String
});

const MenuModel = mongoose.model("menues", menuSchema);

module.exports = { MenuModel }
const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
  name: String,
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
});


const RestaurantModel = mongoose.model("resturant", restSchema); 

module.exports = { RestaurantModel }
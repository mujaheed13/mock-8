const express = require("express");
const { getRestautants, getRestautantsById, getMenu, addMenu, deleteMenu } = require("../controllers/restaurant.js");
const restaurantRouter = express.Router();

restaurantRouter.get("/restaurants", getRestautants);
restaurantRouter.get("/restaurants/:id", getRestautantsById);
restaurantRouter.get("/restaurants/:id/menu", getMenu);
restaurantRouter.post("/restaurants/:id/menu", addMenu);
restaurantRouter.delete("/restaurants/:rest_id/menu/:menu_id", deleteMenu);


module.exports = { restaurantRouter }
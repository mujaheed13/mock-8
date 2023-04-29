const { MenuModel } = require("../models/menu.model.js");
const { RestaurantModel } = require("../models/restaurant.model.js")


const getRestautants = async (req, res) =>{
    try {
        const rests = await RestaurantModel.find();
        res.status(200).send(rests);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const getRestautantsById = async (req, res) =>{
    const { id } = req.params;
    try {
        const rest = await RestaurantModel.findById(id);
        res.status(200).send(rest);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const getMenu = async (req, res) =>{
    const { id } = req.params;
    try {
        const menues = await MenuModel.find({restaurant_id: id});
        res.status(200).send(menues);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const addMenu = async (req, res) =>{
    const data = req.body;
    const { id } = req.params;
    try {
        const menu = new MenuModel({restaurant_id: id, ...data});
        await menu.save();
        res.status(201).send({msg: "Menu added"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const deleteMenu = async (req, res) =>{
    const { rest_id, menu_id } = req.params;
    try {
        await MenuModel.findOneAndDelete({_id: menu_id, restaurant_id: rest_id});
        res.status(202).send({msg: "Menu deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

module.exports = { getRestautants, getRestautantsById, getMenu, addMenu, deleteMenu }
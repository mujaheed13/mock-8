const { OrderModel } = require("../models/order.model")

const placeOrder = async (req, res) => {
    try {
        const order = OrderModel(rq.body);
        await order.save();
        res.send(201).send({msg: "Order Placed"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});   
    }
}

const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await OrderModel.findById(id);
        res.status(200).send(order);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
} 

const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await OrderModel.findByIdAndUpdate(id, req.body);
        res.status(204).send("Order updated");
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

module.exports = { placeOrder, getOrder, updateOrder }
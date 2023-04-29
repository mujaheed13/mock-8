const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/user.route.js");
const { connection } = require("./configs/mongoose.connection.js");
const { RestaurantModel } = require("./models/restaurant.model.js");
const { restaurantRouter } = require("./routes/restaurant.route.js");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", userRouter);
app.use("/api", restaurantRouter);

app.get("/", (req, res)=>{
    res.send("Food Delivery App");
})

app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    try {
        await connection;
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error while connecting to Database", error);
    }
})
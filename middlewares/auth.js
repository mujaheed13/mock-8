const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        res.status(400).send({msg: "Token is required"});
        return;
    }
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if(!decoded){
            res.status(401).send({msg: "You are not authenticated"});
        }
        res.body.user_id = decoded.user_id;
        next();
    })
}

module.exports = { auth }
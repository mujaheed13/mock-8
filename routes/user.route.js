const express = require("express");
const { register, login, resetPassword } = require("../controllers/user.js");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.patch("/user/:id/reset", resetPassword)

module.exports = { userRouter }
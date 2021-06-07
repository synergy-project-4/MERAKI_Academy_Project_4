const express = require("express");
const { createUser, getAllUsers } = require("./../../controllers/auth/signUp");
const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;

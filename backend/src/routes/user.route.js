const { Router } = require("express");
const { register, login, getUser, getUserById } = require("../controller/user.controller");
const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getAll", getUser);
userRouter.get("/get/:id", getUserById);


module.exports = {
  userRouter,
};

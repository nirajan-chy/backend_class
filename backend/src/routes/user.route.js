const { Router } = require("express");
const { register } = require("../controller/user.controller");
const userRouter = Router();

userRouter.post("/register", register);

module.exports = {
  userRouter,
};

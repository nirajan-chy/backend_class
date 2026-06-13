const { Router } = require("express");
const {
  register,
  login,
  getUser,
  getUserById,
  update,
  deleteUser,
} = require("../controller/user.controller");
const isAuthenticated = require("../middleware/isAuthenticated");
const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getAll", getUser);
userRouter.get("/get/:id", isAuthenticated, getUserById);
userRouter.patch("/update/:id", update);
userRouter.delete("/delete/:id", deleteUser);

module.exports = {
  userRouter,
};

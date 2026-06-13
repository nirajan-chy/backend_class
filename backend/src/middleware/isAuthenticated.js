const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/env");
const isAuthenticated = async (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    // console.log(tokenString);
    const tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    let user = await jwt.verify(token, SECRET_KEY);
    console.log(user)
    req._id = user.id;
    console.log(req._id);
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = isAuthenticated;

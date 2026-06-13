const { User } = require("../model/user.model");

const isAuthorization = roles => {
  return async (req, res, next) => {
    try {
      const decode = req._id;
      // console.log(decode);
      const user = await User.findById(decode);
      // console.log(user);
      const userRole = user.role;
      if (roles.includes(userRole)) {
        next();
      } else {
        res.status(403).json({
          message: "user not authorized",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

module.exports = isAuthorization;

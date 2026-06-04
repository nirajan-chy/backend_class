const { User } = require("../model/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({
        message: "User already exist",
      });
    }
    const hashedPassword = await bcrypt.hash({ password }, 10);
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const { MONGO_URI } = require("./env");
const mongoose = require("mongoose");
const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    throw new Error(error.meesage);
  }
};

module.exports = {
  connectMongoDB,
};

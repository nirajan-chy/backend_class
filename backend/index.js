const express = require("express");
const { PORT } = require("./src/config/env");
const { connectMongoDB } = require("./src/config/mongoDB");

const app = express();

app.use(express.json());
connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

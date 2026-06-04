const express = require("express");
const { PORT } = require("./src/config/env");
const { connectMongoDB } = require("./src/config/mongoDB");
const { userRouter } = require("./src/routes/user.route");

const app = express();

app.use(express.json());
connectMongoDB();
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

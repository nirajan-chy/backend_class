const express = require("express");
const { PORT } = require("./src/config/env");

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server runnig on ${PORT} `);
});

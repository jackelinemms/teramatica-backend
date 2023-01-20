const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv-safe").config();

const db = require("./config/database");

db.connect();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

module.exports = app;

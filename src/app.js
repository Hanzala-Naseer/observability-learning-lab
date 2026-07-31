const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);

module.exports = app;
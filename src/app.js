const express = require("express");

const indexRoutes = require("./routes/index.routes");
const metricsRoutes = require("./routes/metrics.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/", metricsRoutes);

module.exports = app;
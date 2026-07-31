const express = require("express");

const indexRoutes = require("./routes/index.routes");
const metricsRoutes = require("./routes/metrics.routes");
const testRoutes = require("./routes/test.routes");


const metricsMiddleware = require("./middleware/metrics.middleware");


const app = express();

// Middleware
app.use(express.json());
app.use(metricsMiddleware);


// Routes
app.use("/", indexRoutes);
app.use("/", metricsRoutes);
app.use("/test", testRoutes);

module.exports = app;
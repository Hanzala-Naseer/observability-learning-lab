const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

const PORT = 5001;

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);


app.listen(PORT, () => {
    console.log(`Observability Learning Lab running on port ${PORT}`);
});
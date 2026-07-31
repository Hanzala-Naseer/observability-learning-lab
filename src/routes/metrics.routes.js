const express = require("express");
const client = require("../config/metrics");

const router = express.Router();

router.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);

    const metrics = await client.register.metrics();

    res.send(metrics);
});

module.exports = router;
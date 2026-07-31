const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to Observability Learning Lab "
    });
});

module.exports = router;
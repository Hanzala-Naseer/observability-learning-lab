const express = require("express");

const router = express.Router();

router.get("/slow", async (req, res) => {

  await new Promise(resolve => {
    setTimeout(resolve, 50000);
  });

  res.json({
    message: "Slow request completed",
  });

});
router.get("/server-error", async (req, res) => {
  // Simulate a server crash / database failure
  res.status(500).json({
    error: "Something went wrong on the server",
  });
});

module.exports = router;
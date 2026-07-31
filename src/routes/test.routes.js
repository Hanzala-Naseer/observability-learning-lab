const express = require("express");

const router = express.Router();

router.get("/slow", async (req, res) => {

  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });

  res.json({
    message: "Slow request completed",
  });

});

module.exports = router;
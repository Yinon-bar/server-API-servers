const express = require("express");
const router = express.Router();

router.get("/servers", (req, res, next) => {
  res.json({ msg: "Servers route working" });
});

module.exports = router;

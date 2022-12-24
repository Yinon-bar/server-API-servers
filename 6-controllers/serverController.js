const express = require("express");
const router = express.Router();
const connection = require("../1-assets/db/mysqlConnect");
const { getAllData } = require("../5-logic/serverLogic");

router.get("/servers", async (req, res, next) => {
  const results = await getAllData();
  // console.log(results);
  res.json(results);
});

module.exports = router;

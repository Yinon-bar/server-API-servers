const express = require("express");
const router = express.Router();
const connection = require("../1-assets/db/mysqlConnect");

router.get("/servers", (req, res, next) => {
  connection.query("SELECT * FROM servers", (error, results, fields) => {
    if (error) throw error;
    console.log("The solution is: ", results);
  });

  connection.end();
  res.json({ msg: "Servers route working" });
});

module.exports = router;

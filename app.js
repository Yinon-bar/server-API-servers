const express = require("express");
const colors = require("colors");
const router = require("./6-controllers/serverController");

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(3004, () => {
  console.log("Listening to http://localhost:3004 *_*".bgGreen.bold);
});

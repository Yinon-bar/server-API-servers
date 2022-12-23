let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "john_bryce",
});

connection.connect();
console.log("Connected to mysql".magenta.bold);

module.exports = connection;

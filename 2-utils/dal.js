const connectioObj = require("../1-assets/db/mysqlConnect");

async function getAllServers() {
  // get the client
  const mysql = require("mysql2/promise");
  // create the connection
  const connection = await mysql.createConnection(connectioObj);
  // query database
  const [rows] = await connection.execute("SELECT * FROM `servers`");
  return rows;
}

// function getAllServers(cb) {

// }

module.exports = { getAllServers };

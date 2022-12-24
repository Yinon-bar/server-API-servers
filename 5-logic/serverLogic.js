const dal = require("../2-utils/dal");

// GET all servers
async function getAllData() {
  const results = await dal.getAllServers();
  // console.log("log from server logic: " + results);
  return results;
}

module.exports = { getAllData };

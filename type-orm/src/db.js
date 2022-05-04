
const {createConnection} =  require("typeorm");
const config = require("../config.json");

console.log(config);


const connection =  async () =>  await createConnection(config);

console.log(connection);


module.exports =  connection;
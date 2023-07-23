require("dotenv").config();
const Server = require("./models/servers.js");

const server = new Server();
server.listen();


const express = require("express");
const cors = require("cors");

const configRoutes = require("./config/routes");

const server = express();

server.use(express.json());
server.use(cors());

configRoutes(server);

module.exports = {
  server
};

// imports
const express = require("express");

// instantiate server
const server = express();
server.use(express.json());

// endpoints
server.post("/login", (req,res) => {
  const creds = req.body;

  
})

// server port
server.listen(9000, () => {
  console.log(`This server is running on 9000`);
});

// knex
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);

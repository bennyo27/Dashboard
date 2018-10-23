// imports
const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");

const { generateToken } = require("./middlewares");

// exports
module.exports = server => {
  server.post("/register", register);
  server.post("/login", login);
};

function register(req, res) {
  // credentials
  const creds = req.body;
  //hash
  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;
  db("users")
    .insert(creds)
    .then(ids => res.status(201).json(ids[0]))
    .catch(err =>
      res.status(500).json({ error: "Could not register properly" })
    );
}

function login(req, res) {
  const creds = req.body;
  db("users")
    .where()
    .first()
    .then()
    .catch();
}

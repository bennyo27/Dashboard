// imports
const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../db/dbConfig");

const { generateToken, jwtSecret, protected } = require("./middlewares");

// exports
module.exports = server => {
  server.get("/welcome", protected, welcome);
  server.post("/register", register);
  server.post("/login", login);
  server.get("/users", getUsers);
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
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        // create token
        const token = generateToken(user);
        res.status(200).json({ welcome: user.username, token });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err => console.error(err));
}

function welcome(req, res) {
  db("users")
    .then(users => res.status(200).json({ users }))
    .catch(err => res.status(500).json(err));
}

function getUsers(req, res) {
  db("users")
    .then(users => res.status(200).json({ users }))
    .catch(err => res.status(500).json(err));
}

const jwt = require("jsonwebtoken");

const jwtSecret = require("../_secrets/jwtSecrets").jwtSecret;

// exports
module.exports = {
  generateToken
};

const generateToken = user => {
  const jwtPayload = {
    ...user
  };

  const jwtOptions = {
    expiresIn: "10m"
  };
  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
};

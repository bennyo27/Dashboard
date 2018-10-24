const jwt = require("jsonwebtoken");

const jwtSecret = require("../_secrets/jwtSecrets").jwtSecret;

// exports
module.exports = {
  generateToken,
  protected
};

function generateToken(user) {
  const jwtPayload = {
    ...user
  };

  const jwtOptions = {
    expiresIn: "10m"
  };
  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
}

function protected(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
}

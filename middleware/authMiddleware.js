const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(403).send("Access denied");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send("Invalid token");
    }
    req.user = decoded; // Attach user data to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticate;
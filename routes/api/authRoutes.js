const express = require("express");
const {signup,login} = require("../../controllers/api/authController");
const authenticate = require("../../middleware/authMiddleware");

const router = express.Router();

// Define routes for sign-up and login
router.post("/signup", signup);
router.post("/login", login);

// Protected route example: This route is now protected with the authenticate middleware
router.get("/profile", authenticate, (req, res) => {
  // If the user is authenticated, `req.user` will be populated by the middleware
  res.json({ message: "Welcome to your profile", user: req.user });
});

module.exports = router;
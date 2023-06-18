const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Create routes for news here
router.post("/register", userController.createUser);
module.exports = router;

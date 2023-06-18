const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Create routes for auth here
router.post('/login', AuthController.login);

//create routes for register here
module.exports = router;
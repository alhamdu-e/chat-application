const express = require("express");
const router = express.Router();
const { registerUser, login } = require("../controllers/userController.js");
router.post("/register", registerUser);

module.exports = router;

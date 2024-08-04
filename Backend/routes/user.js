const express = require("express");
const router = express.Router();
const {
	registerUser,
	login,
	addRemoveFriend,
} = require("../controllers/userController.js");
router.post("/register", registerUser);
router.post("/login", login);
router.post("/addorremovefriend", addRemoveFriend);

module.exports = router;

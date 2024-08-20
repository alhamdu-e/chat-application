const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
	registerUser,
	login,
	addRemoveFriend,
	getNonFrinds,
	getFriends,
} = require("../controllers/userController.js");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "_" + file.originalname);
	},
});
const uploads = multer({ storage: storage });
router.post("/register", uploads.single("profilePicture"), registerUser);
router.post("/login", login);
router.post("/addorremovefriend/:userid/:friendid", addRemoveFriend);
router.get("/user/:userid", getNonFrinds);
router.get("/userfriend/:userid", getFriends);

module.exports = router;

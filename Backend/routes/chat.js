const express = require("express");
const router = express.Router();
const chat = require("../controllers/chatController.js");

const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "_" + file.originalname);
	},
});
const uploads = multer({ storage: storage });

router.post("/newchat", uploads.single("files"), chat.insertChat);
router.get("/chathistory", chat.getChatHistory);
router.get("/lastmessage", chat.getUsersWithLastMessage);

module.exports = router;

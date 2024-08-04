const express = require("express");
const router = express.Router();
const chat = require("../controllers/chatController.js");

router.post("/newchat", chat.insertChat);
router.post("/chathistory", chat.getChatHistory);

module.exports = router;

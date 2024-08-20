const express = require("express");
const router = express.Router();
const chat = require("../controllers/chatController.js");

router.post("/newchat", chat.insertChat);
router.get("/chathistory", chat.getChatHistory);

module.exports = router;

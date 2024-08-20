const Chat = require("../models/chat.js");
const User = require("../models/user.js");
const io = require("../socket.js");

const insertChat = async (req, res) => {
	const { senderId, receiverId, message } = req.body;
	console.log(senderId, receiverId, message);

	try {
		const chat = new Chat({
			message: message,
			sender: senderId,
			recipient: receiverId,
		});

		await User.findByIdAndUpdate(senderId, { $push: { chats: chat._id } });
		await User.findByIdAndUpdate(receiverId, { $push: { chats: chat._id } });
		await chat.save();

		io.getIo().to(receiverId).emit("newChat", {
			message: message,
			sender: senderId,
			recipient: receiverId,
		});

		// Optionally emit the message to the sender (for confirmation)
		io.getIo().to(senderId).emit("newChat", {
			message: message,
			sender: senderId,
			recipient: receiverId,
		});

		res.status(201).json({ message: "chat created succesfully" });
	} catch (err) {
		console.log(err);
	}
};

const getChatHistory = async (req, res) => {
	const { userId, freindId } = req.query;
	console.log(userId, freindId);
	try {
		const chatHistory = await Chat.find({
			$or: [
				{
					sender: userId,
					recipient: freindId,
				},
				{
					recipient: userId,
					sender: freindId,
				},
			],
		});
		console.log(chatHistory, "chat");
		res.status(200).json(chatHistory);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Fetching chat history failed" });
	}
};

module.exports = { insertChat, getChatHistory };

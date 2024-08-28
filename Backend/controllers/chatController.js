const Chat = require("../models/chat.js");
const User = require("../models/user.js");
const io = require("../socket.js");

const insertChat = async (req, res) => {
	const { senderId, receiverId } = req.body;
	const chatInfo = { sender: senderId, recipient: receiverId };
	let message = "";
	let isImage = true;
	let caption = "";
	if (req.file) {
		message = "http://127.0.0.1:5000/images/" + req.file.filename;
		chatInfo.message = message;
		chatInfo.isImage = true;
		caption = req.body.caption;
		chatInfo.caption = caption;
	} else {
		isImage = false;
		message = req.body.message;
		chatInfo.message = message;
		chatInfo.isImage = false;
	}
	try {
		const chat = new Chat(chatInfo);

		await User.findByIdAndUpdate(senderId, { $push: { chats: chat._id } });
		await User.findByIdAndUpdate(receiverId, { $push: { chats: chat._id } });
		await chat.save();

		io.getIo().to(receiverId).emit("newChat", {
			message: message,
			sender: senderId,
			recipient: receiverId,
			isImage: isImage,
			caption: caption,
			createdAt: new Date(),
		});

		// Optionally emit the message to the sender (for confirmation)
		io.getIo().to(senderId).emit("newChat", {
			message: message,
			sender: senderId,
			recipient: receiverId,
			isImage: isImage,
			caption: caption,
			createdAt: new Date(),
		});

		res.status(201).json({ message: "chat created succesfully" });
	} catch (err) {
		res.status(500).json({ message: "crating chat history failed" });
	}
};
const deleteChat = async (req, res) => {
	const chatID = req.params.chatID;
	try {
		const deleted = await Chat.findByIdAndDelete(chatID);
		return res.status(200).json({ message: "chat Deleted" });
	} catch (err) {
		res.status(500).json({ message: "Error deleting chat history " });
	}
};
const getUsersWithLastMessage = async (req, res) => {
	const { userId } = req.query;

	try {
		const user = await User.findById(userId).populate("friends");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const friendsWithLastMessage = await Promise.all(
			user.friends.map(async (friend) => {
				const lastMessage = await Chat.findOne({
					$or: [
						{ sender: userId, recipient: friend._id },
						{ sender: friend._id, recipient: userId },
					],
				}).sort({ createdAt: -1 });

				return {
					friendId: friend._id,
					friendName: friend.fullName,
					isImage: lastMessage ? lastMessage.isImage : false,
					lastMessage: lastMessage ? lastMessage.message : "No messages yet",
					lastMessageTime: lastMessage ? lastMessage.createdAt : null,
				};
			})
		);
		return res.status(200).json(friendsWithLastMessage);
	} catch (error) {
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

const getChatHistory = async (req, res) => {
	const { userId, freindId } = req.query;
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
		res.status(200).json(chatHistory);
	} catch (err) {
		res.status(500).json({ message: "Fetching chat history failed" });
	}
};

module.exports = {
	insertChat,
	getChatHistory,
	getUsersWithLastMessage,
	deleteChat,
};

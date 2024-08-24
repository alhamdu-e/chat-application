const Chat = require("../models/chat.js");
const User = require("../models/user.js");
const io = require("../socket.js");

const insertChat = async (req, res) => {
	const { senderId, receiverId } = req.body;
	const chatInfo = { sender: senderId, recipient: receiverId };
	let message = "";
	let isImage = true;
	let caption = "";
	console.log(req.file);
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
	console.log(caption);
	console.log(senderId, receiverId, message);
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
		});

		// Optionally emit the message to the sender (for confirmation)
		io.getIo().to(senderId).emit("newChat", {
			message: message,
			sender: senderId,
			recipient: receiverId,
			isImage: isImage,
			caption: caption,
		});

		res.status(201).json({ message: "chat created succesfully" });
	} catch (err) {
		console.log(err);
	}
};

const getUsersWithLastMessage = async (req, res) => {
	const { userId } = req.query;

	try {
		// Step 1: Fetch the current user and their friends
		const user = await User.findById(userId).populate("friends"); // Assuming `friends` is an array of user IDs

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		// Step 2: For each friend, fetch their last message with the current user
		const friendsWithLastMessage = await Promise.all(
			user.friends.map(async (friend) => {
				const lastMessage = await Chat.findOne({
					$or: [
						{ sender: userId, recipient: friend._id },
						{ sender: friend._id, recipient: userId },
					],
				}).sort({ createdAt: -1 }); // Sort by createdAt to get the latest message

				return {
					friendId: friend._id,
					friendName: friend.fullName,
					lastMessage: lastMessage ? lastMessage.message : "No messages yet",
					lastMessageTime: lastMessage ? lastMessage.createdAt : null,
				};
			})
		);

		return res.status(200).json(friendsWithLastMessage);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
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

module.exports = { insertChat, getChatHistory, getUsersWithLastMessage };

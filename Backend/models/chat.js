const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
	message: {
		type: String,
		required: true,
		trim: true,
	},
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	recipient: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	timeStamp: {
		type: Date,
		default: Date.now,
	},
});
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;

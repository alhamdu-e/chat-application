const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
	{
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
			required: true, // Assuming recipient is required
		},
		isImage: {
			type: Boolean,
		},
		caption: {
			type: String,
			trim: true, // Optional caption for the image
		},
	},
	{
		timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
	}
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;

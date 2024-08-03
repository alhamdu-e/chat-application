const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
		default: "",
	},
	isOnline: {
		type: Boolean,
		default: false,
	},
	lastSeen: {
		type: Date,
		default: Date.now,
	},
	chats: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Chat",
		},
	],
	friends: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = userSchema;

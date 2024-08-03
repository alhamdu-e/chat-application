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
	recipinet: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	timeStamp: {
		type: Date,
		default: Date.now,
	},
});

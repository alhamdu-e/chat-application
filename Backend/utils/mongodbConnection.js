const mongoose = require("mongoose");

async function databaseConnection() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/Chat");
		console.log("Database connected");
	} catch (err) {
		console.log(err);
	}
}
module.exports = databaseConnection;

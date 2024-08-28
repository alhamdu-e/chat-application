const mongoose = require("mongoose");

async function databaseConnection() {
	try {
		await mongoose.connect(
			"mongodb+srv://alhamdu:d8lZvkNVHIZkxZGx@cluster0.ht6vpyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
		);
		console.log("Database connected");
	} catch (err) {
		console.log(err);
	}
}
module.exports = databaseConnection;

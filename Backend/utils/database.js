const mongodb = require("mongodb");
const { MongoClient } = mongodb;
const url =
	"mongodb+srv://QUPjQnR0wZFsJufg:QUPjQnR0wZFsJufg@cluster0.ht6vpyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

const monogoConnect = (callback) => {
	client
		.connect()
		.then((client) => {
			console.log("Connected to MongoDB");
			callback(client);
		})
		.catch((err) => {
			console.log(err);
		});
};
module.exports = monogoConnect;

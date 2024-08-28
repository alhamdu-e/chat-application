const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/user.js");
const chatRoutes = require("./routes/chat.js");
const path = require("path");
const databaseconnection = require("./utils/mongodbConnection.js");
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/", userRoutes);
app.use("/chat", chatRoutes);

databaseconnection()
	.then((result) => {
		// Start the server
		const server = app.listen(5000, () => {
			console.log("server started");
		});

		// Initialize Socket.IO
		const io = require("./socket.js").init(server);

		// Store online users
		const onlineUsers = {};

		io.on("connection", (socket) => {
			console.log("A client connected");

			// When a user joins a room
			socket.on("joinRoom", (userId) => {
				// Add user to the online list
				socket.join(userId);
				onlineUsers[userId] = socket.id;
				console.log(`${userId} joined room`);

				// Notify others that this user is online
				io.emit("userOnline", { userId });
			});

			// When a user disconnects
			socket.on("disconnect", () => {
				// Find the user that disconnected
				for (let userId in onlineUsers) {
					if (onlineUsers[userId] === socket.id) {
						// Remove them from the online list
						delete onlineUsers[userId];

						// Notify others that this user is offline
						io.emit("userOffline", { userId });
						break;
					}
				}
				console.log("Client disconnected");
			});
		});
	})
	.catch((err) => console.log(err));

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/user.js");
const chatRoutes = require("./routes/chat.js");

const databaseconnection = require("./utils/mongodbConnection.js");
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);

databaseconnection()
	.then((result) => {
		const server = app.listen(5000, () => {
			console.log("server started");
		});
		const io = require("./socket.js").init(server);
		io.on("connection", (socket) => {
			console.log("client connected");
		});
	})
	.catch((err) => console.log(err));

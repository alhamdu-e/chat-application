const socketIo = require("socket.io");

let io;

module.exports = {
	init: (httpServer) => {
		io = socketIo(httpServer, {
			cors: {
				origin: "http://localhost:3000", // Allow requests from this origin
				methods: ["GET", "POST"], // Allow these HTTP methods
				credentials: true, // If you are using credentials (cookies, etc.)
			},
		});
		return io;
	},
	getIo: () => {
		if (!io) {
			throw new Error("Socket.io not initialized!");
		}
		return io;
	},
};

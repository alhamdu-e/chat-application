const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/user.js");
const mongose = require("mongoose");

const databaseconnection = require("./utils/mongodbConnection.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.listen(5000, async () => {
	console.log("server started 5000");
	await databaseconnection();
});

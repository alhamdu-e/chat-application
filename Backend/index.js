const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/user.js");
const monogoConnect = require("./utils/database.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRoutes);

monogoConnect((client) => {
	console.log(client);
	app.listen(5000, () => {
		console.log("server started 5000");
	});
});

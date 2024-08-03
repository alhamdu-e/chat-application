const bcrypt = require("bcrypt");
const databaseConnection = require("../utils/mongodbConnection");
const User = require("../models/user");
async function hashPassword(password) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		console.log(hashPassword, salt);
		return hashedPassword;
	} catch (err) {
		console.log(err);
	}
}

async function verifyPassword(password, storedHash) {
	try {
		const isMatch = await bcrypt.compare(inputPassword, storedHash);
		return isMatch; // true if the password is correct, false otherwise
	} catch (err) {
		console.error("Error verifying password:", err);
		throw err;
	}
}

const registerUser = async (req, res) => {
	const { firstName, lastName, username, email, password, profilePicture } =
		req.body;
	try {
		await databaseConnection();
		const hashedPassword = await hashPassword(password);
		const user = new User({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
			profilePicture,
		});
		await user.save();
	} catch (err) {
		console.log(err);
	}
};
async function login() {
	await databaseConnection();
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).json({ message: "Invalid email or password" });
	}
	const isPasswordValid = await verifyPassword(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).json({ message: "Invalid credentila" });
	}
	res.status(200).json({ message: "login succesfully" });
}
module.exports = { registerUser, login };

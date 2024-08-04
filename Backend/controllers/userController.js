const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const registerUser = async (req, res) => {
	const { firstName, lastName, username, email, password, profilePicture } =
		req.body;
	console.log(firstName, lastName, username, email, password, profilePicture);
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const user = new User({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
			profilePicture,
		});
		await user.save();
		res.status(201).json({ message: "User created successfully" });
	} catch (err) {
		if (err.code == 11000) {
			const field = Object.keys(err.keyPattern)[0];

			res.status(400).json({ message: `${field} Already Exist` });
		} else {
			console.log(err);
			res.status(500).json({ message: "Server Error" });
		}
	}
};
const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid credentila" });
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		delete user.password;
		res.status(200).json({ token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const addRemoveFriend = async (req, res) => {
	try {
		const { id, friendId } = req.params;
		const user = await User.findById(id);
		const freind = await User.findById(friendId);
		if (user.friends.includes(friendId)) {
			user.friends = user.friends.filter((id) => id !== friendId);
			freind.friends = freind.friends.filter((id) => id !== id);
		} else {
			user.friends.push(friendId);
			freind.friends.push(id);
		}
		await user.save();
		await freind.save();
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "somthing went wrong" });
	}
};
module.exports = { registerUser, login, addRemoveFriend };

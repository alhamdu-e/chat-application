const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const registerUser = async (req, res) => {
	const { fullName, email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	try {
		let userInfo = { fullName, email, password: hashedPassword };
		if (req.file) {
			const { filename } = req.file;
			const profilePath = "http://127.0.0.1:5000/images/" + filename;
			userInfo.profilePicture = profilePath;
		}
		const user = new User(userInfo);
		await user.save();
		res.status(201).json({ message: "You Have successfully Registered" });
	} catch (err) {
		if (err.code == 11000) {
			const field = Object.keys(err.keyPattern)[0];
			console.log(field);
			res.status(400).json({ message: `${field} Already Exist` });
		} else {
			res.status(500).json({ message: "Server Error" });
		}
	}
};
const login = async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		console.log(isPasswordValid);
		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid credentila" });
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRECT);
		delete user.password;
		res.status(200).json({ token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const getNonFrinds = async (req, res) => {
	const currentUserId = req.params.userid;
	try {
		const currentUser = await User.findById(currentUserId).select("friends");
		const nonFriends = await User.find({
			_id: { $nin: [...currentUser.friends, currentUserId] },
		});
		res.status(200).json(nonFriends);
	} catch (err) {
		res.status(500).json({ error: "Server Error" });
	}
};
const getFriends = async (req, res) => {
	const { userid } = req.params;
	try {
		const user = await User.findById(userid).populate("friends");
		res.status(200).json(user.friends);
	} catch (err) {
		res.status(500).json({ error: "Server Error" });
	}
};
const addRemoveFriend = async (req, res) => {
	try {
		const { userid, friendid } = req.params;
		console.log(userid, friendid);
		const user = await User.findById(userid);
		const freind = await User.findById(friendid);
		if (user.friends.includes(friendid)) {
			user.friends = user.friends.filter((id) => id !== friendid);
			freind.friends = freind.friends.filter((id) => id !== userid);
		} else {
			user.friends.push(friendid);
			freind.friends.push(userid);
		}
		await user.save();
		await freind.save();
		res.status(200).json({ message: "user Added" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "somthing went wrong" });
	}
};
module.exports = {
	registerUser,
	login,
	addRemoveFriend,
	getNonFrinds,
	getFriends,
};

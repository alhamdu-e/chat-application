exports = async function hashPassword(password) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
	} catch (err) {
		console.log(err);
	}
};

exports = async function verifyPassword(password, storedHash) {
	try {
		const isMatch = await bcrypt.compare(password, storedHash);
		return isMatch;
	} catch (err) {
		console.error("Error verifying password:", err);
		throw err;
	}
};

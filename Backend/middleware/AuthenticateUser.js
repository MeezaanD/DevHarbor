const { sign, verify } = require('jsonwebtoken');

const secretKey = 'DevHarBaby'; 

function createToken(user) {
	return sign({
		userId: user.user_id, 
		userEmail: user.email,
		userPassword: user.password
	},
		secretKey,
		{
			expiresIn: '1h'
		});
}

function verifyAToken(req, res, next) {
	try {
		const token = req.cookies["Valid User"] || "Please register";
		let valid = null;

		if (token !== "Please register") {
			valid = verify(token, secretKey);

			if (valid) {
				req.authenticated = true;
				req.userId = valid.userId; // Assuming your User class has a user_id field
				next();
			} else {
				res.status(401).json({ err: "Invalid token" });
			}
		} else {
			res.status(401).json({ err: "Please register" });
		}
	} catch (e) {
		res.status(400).json({ err: e.message });
	}
}

module.exports = { createToken, verifyAToken };

const bcrypt = require('bcryptjs');
const User = require('../../model/users/User');

const usersController = {
	// register
	register: async (req, res) => {
		const { fullname, email,username, password } = req.body;
		try {
			// check if user already exists
			const userFound = await User.findOne({ email });
			// throw error if user already exists
			if (userFound) {
				throw new Error('User already exists');
			}
			// hash password
			const salt = await bcrypt.genSalt(15);
			const hashPassword = await bcrypt.hash(password, salt);

			// register user
			const user = await User.create({
				fullname,
				email,
				username,
				password: hashPassword,
			});
			res.json({
				status: 'success',
				data: user,
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// login
	login: async (req, res) => {
		const { email, password } = req.body;
		try {
			const userFound = await User.findOne({ email });
			if (!userFound) {
				throw new Error('Invalid login details');
			}
			// compare password
			const validPassword = await bcrypt.compare(password, userFound.password);
			if(!validPassword){
				throw new Error('Invalid login details');
			}
			res.json({
				status: 'success',
				data: userFound,
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// get user by id
	getUserById: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User displayed successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// get profile
	getProfile: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User profile displayed successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},

	// update profile image
	updateProfileImage: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User profile image uploaded successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// update cover image
	updateCoverImage: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User cover image uploaded successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// update password
	updatePassword: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User password update successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// logout
	getLogout: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User logout successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
};

module.exports = usersController;

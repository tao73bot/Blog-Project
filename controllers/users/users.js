const bcrypt = require('bcryptjs');
const User = require('../../model/users/User');
const appErr = require('../../utils/appErr');

const usersController = {
	// register
	register: async (req, res, next) => {
		const { fullname, email, username, password } = req.body;
		if (!fullname || !username || !email || !password) {
			return next(appErr('All field are required!'));
		}
		try {
			// check if user already exists
			const userFound = await User.findOne({ email });
			// throw error if user already exists
			if (userFound) {
				return next(appErr('User already exists'));
				// throw new Error('User already exists');
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
	login: async (req, res, next) => {
		const { email, password } = req.body;
		if (!email || !password)
			return next(appErr('Email and Password are required!'));
		try {
			const userFound = await User.findOne({ email });
			if (!userFound) {
				return next(appErr('Invalid login details'));
			}
			// compare password
			const validPassword = await bcrypt.compare(
				password,
				userFound.password
			);
			if (!validPassword) {
				return next(appErr('Invalid login details'));
			}

			// save login user
			req.session.userAuth = userFound._id;
			console.log(req.session);

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
			// get user id from params
			const userId = req.params.id;
			// find user by id
			const user = await User.findById(userId);
			res.json({
				status: 'success',
				data: user,
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// get profile
	getProfile: async (req, res) => {
		try {
			// get the login user
			const userID = req.session.userAuth;

			const user = await User.findById(userID);
			res.json({
				status: 'success',
				data: user,
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
	// update user
	updateUser: async (req, res, next) => {
		const { fullname, email, username, password } = req.body;
		try {
			if (email) {
				const emailTaken = await User.findOne({ email });
				if (emailTaken) {
					return next(appErr('Email already taken', 400));
				}
			}
			const user = await User.findByIdAndUpdate(
				req.params.id,
				{
					fullname,
					email,
					username,
				},
				{ new: true }
			);
			res.json({
				status: 'success',
				data: user,
			});
		} catch (error) {
			res.json(next(appErr(error.message)));
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

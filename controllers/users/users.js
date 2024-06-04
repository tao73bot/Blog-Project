const usersController = {
	// register
	register: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User registered successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// login
	login: async (req, res) => {
		try {
			res.json({
				status: 'success',
				user: 'User login successfully',
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

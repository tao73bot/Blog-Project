const express = require('express');

const userRoutes = express.Router();

// register

userRoutes.post('/register', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User registered successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//POST/login
userRoutes.post('/login', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User login successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/:id
userRoutes.get('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User deatils fetched successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/profile/:id
userRoutes.get('/profile/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User profile displayed successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//PUT/profile-photo-upload/:id
userRoutes.put('/profile-photo-upload/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User profile image uploaded successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//PUT/cover-image-upload/:id
userRoutes.put('/cover-photo-upload/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User cover image uploaded successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//PUT/update-password/:id
userRoutes.put('/update-password/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User password update successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/logout
userRoutes.get('/logout', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User logout successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = userRoutes;
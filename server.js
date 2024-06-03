const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');
const app = express();

//middlewares
//------
// User route
//------


//POST/api/v1/users/register
app.post('/api/v1/users/register', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User registered successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//POST/api/v1/users/login
app.post('/api/v1/users/login', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User login successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/api/v1/users/:id
app.get('/api/v1/users/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User registered successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/api/v1/users/profile/:id
app.get('/api/v1/users/profile/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User registered successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//PUT/api/v1/users/profile-photo-upload/:id
app.put('/api/v1/users/profile-photo-upload/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User profile image uploaded successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//PUT/api/v1/users/cover-image-upload/:id
app.put('/api/v1/users/cover-photo-upload/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User cover image uploaded successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//PUT/api/v1/users/update-password/:id
app.put('/api/v1/users/update-password/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			user: 'User password update successfully'
		})
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//------
// Post route
//------

//------
// Comment route
//------

//Error handler middleware

// Listen Server
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

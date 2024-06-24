const express = require('express');
const multer = require('multer');
const storage = require('../../config/cloudinary');
const usersController = require('../../controllers/users/users');
const protected = require('../../middlewares/protected');

const userRoutes = express.Router();

// instantiate multer
const upload = multer({ storage });

// register

userRoutes.post('/register', usersController.register);

//POST/login
userRoutes.post('/login', usersController.login);

//GET/profile
userRoutes.get('/profile', protected, usersController.getProfile);

//PUT/profile-photo-upload/
userRoutes.put(
	'/profile-photo-upload/',
	protected,
	upload.single('profile'),
	usersController.updateProfileImage
);

//PUT/cover-image-upload/:id
userRoutes.put('/cover-photo-upload/',protected,upload.single('cover'), usersController.updateCoverImage);

//PUT/update-user/:id
userRoutes.put('/update-user/:id', usersController.updateUser);

//PUT/update-password/:id
userRoutes.put('/update-password/:id', usersController.updatePassword);

//GET/logout
userRoutes.get('/logout/:id', usersController.getLogout);

//GET/:id
userRoutes.get('/:id', usersController.getUserById);

module.exports = userRoutes;

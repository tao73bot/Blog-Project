const express = require('express');
const usersController = require('../../controllers/users/users');

const userRoutes = express.Router();

// register

userRoutes.post('/register', usersController.register);

//POST/login
userRoutes.post('/login', usersController.login);

//GET/:id
userRoutes.get('/:id', usersController.getUserById);

//GET/profile/:id
userRoutes.get('/profile/:id', usersController.getProfile);

//PUT/profile-photo-upload/:id
userRoutes.put('/profile-photo-upload/:id', usersController.updateProfileImage);

//PUT/cover-image-upload/:id
userRoutes.put('/cover-photo-upload/:id', usersController.updateCoverImage);

//PUT/update-password/:id
userRoutes.put('/update-password/:id', usersController.updatePassword);

//GET/logout
userRoutes.get('/logout/:id', usersController.getLogout);

module.exports = userRoutes;

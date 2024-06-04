const express = require('express');

const postRoutes = express.Router();

// Create post

//POST/
postRoutes.post('/', async (req, res) => {
	try {
		res.json({
			status: 'success',
			post: 'Post created successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/
postRoutes.get('/', async (req, res) => {
	try {
		res.json({
			status: 'success',
			post: 'Post fetched successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET//:id
postRoutes.get('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			post: 'Post details fetched successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//Delete//:id
postRoutes.delete('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			post: 'Post deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Put//:id
postRoutes.put('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			post: 'Post updated successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = postRoutes;

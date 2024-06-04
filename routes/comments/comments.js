const express = require('express');

const commentsRoutes = express.Router();

//POST
commentsRoutes.post('/', async (req, res) => {
	try {
		res.json({
			status: 'success',
			comment: 'Comment created successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET/:id
commentsRoutes.get('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			comment: 'Comment fetched successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//Delete/:id
commentsRoutes.delete('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			comment: 'Comment deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Put/:id
commentsRoutes.put('/:id', async (req, res) => {
	try {
		res.json({
			status: 'success',
			comment: 'Comment updated successfully',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = commentsRoutes;
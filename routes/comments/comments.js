const express = require('express');
const commentsController = require('../../controllers/comments/comments');

const commentsRoutes = express.Router();

//POST
commentsRoutes.post('/', commentsController.createComment);

//GET/:id
commentsRoutes.get('/:id', commentsController.getComment);

//Delete/:id
commentsRoutes.delete('/:id', commentsController.deleteComment);

// Put/:id
commentsRoutes.put('/:id', commentsController.updateComment);

module.exports = commentsRoutes;
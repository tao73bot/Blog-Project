const express = require('express');
const commentsController = require('../../controllers/comments/comments');
const protected = require('../../middlewares/protected');

const commentsRoutes = express.Router();

//POST
commentsRoutes.post('/:id',protected, commentsController.createComment);

//GET/:id
commentsRoutes.get('/:id', commentsController.getComment);

//Delete/:id
commentsRoutes.delete('/:id',protected, commentsController.deleteComment);

// Put/:id
commentsRoutes.put('/:id',protected, commentsController.updateComment);

module.exports = commentsRoutes;
const express = require('express');
const postsController = require('../../controllers/posts/posts');
const postRoutes = express.Router();

// Create post

//POST/
postRoutes.post('/', postsController.createPost);

//GET/
postRoutes.get('/', postsController.getPosts);

//GET//:id
postRoutes.get('/:id', postsController.getPostById);

//Delete//:id
postRoutes.delete('/:id', postsController.deletePostById);

// Put//:id
postRoutes.put('/:id', postsController.updatePostById);

module.exports = postRoutes;

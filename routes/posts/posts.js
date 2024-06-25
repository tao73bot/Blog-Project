const express = require('express');
const multer = require('multer');
const storage = require('../../config/cloudinary');
const postsController = require('../../controllers/posts/posts');
const protected = require('../../middlewares/protected');
const postRoutes = express.Router();

// instance of multer
const upload = multer({ storage });

// Create post

//POST/
postRoutes.post('/',protected,upload.single('file'), postsController.createPost);

//GET/
postRoutes.get('/', postsController.getPosts);

//GET//:id
postRoutes.get('/:id', postsController.getPostById);

//Delete//:id
postRoutes.delete('/:id', protected ,postsController.deletePostById);

// Put//:id
postRoutes.put('/:id',protected, upload.single('file') , postsController.updatePostById);

module.exports = postRoutes;

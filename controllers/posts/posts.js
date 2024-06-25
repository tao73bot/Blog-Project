const Post = require('../../model/posts/Post');
const User = require('../../model/users/User');
const appErr = require('../../utils/appErr');

const postsController = {
	// create post
	createPost: async (req, res,next) => {
		const { title, description, category,user } = req.body;
		try {
			if (!title || !description || !category) { 
				return next(appErr('All field are required!'));
			}
			// find user
			const userId = req.session.userAuth;
			const userFound = await User.findById(userId);
			// create post
			const postCreated = await Post.create({
				title,
				description,
				category,
				user: userFound._id,
				image: req.file.path,
			});
			// push the post in array of posts in user
			userFound.posts.push(postCreated._id);
			// resave the user
			await userFound.save();
			res.json({
				status: 'success',
				data: postCreated,
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// get all posts
	getPosts: async (req, res) => {
		try {
			res.json({
				status: 'success',
				post: 'Post fetched successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// get post by id
	getPostById: async (req, res) => {
		try {
			res.json({
				status: 'success',
				post: 'Post details fetched successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// delete post by id
	deletePostById: async (req, res) => {
		try {
			res.json({
				status: 'success',
				post: 'Post deleted successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// update post by id
	updatePostById: async (req, res) => {
		try {
			res.json({
				status: 'success',
				post: 'Post updated successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
};

module.exports = postsController;
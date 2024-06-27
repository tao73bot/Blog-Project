const Post = require('../../model/posts/Post');
const User = require('../../model/users/User');
const appErr = require('../../utils/appErr');

const postsController = {
	// create post
	createPost: async (req, res, next) => {
		const { title, description, category, user } = req.body;
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
			next(appErr(error.message));
		}
	},
	// get all posts
	getPosts: async (req, res,next) => {
		try {
			const posts = await Post.find().populate('comments');
			res.json({
				status: 'success',
				data: posts,
			});
		} catch (error) {
			next(appErr(error.message));
		}
	},
	// get post by id
	getPostById: async (req, res, next) => {
		try {
			// get post id from params
			const id = req.params.id;
			// find post by id
			const post = await Post.findById(id).populate('comments');
			res.json({
				status: 'success',
				data: post,
			});
		} catch (error) {
			next(appErr(error.message));
		}
	},
	// delete post by id
	deletePostById: async (req, res,next) => {
		try {
			// find post by id
			const post = await Post.findById(req.params.id);
			// check if post belongs to user
			if (post.user.toString() !== req.session.userAuth.toString()) {
				return next(appErr('You are not authorized to delete this post',403));
			}
			// delete post
			await Post.findByIdAndDelete(req.params.id);
			res.json({
				status: 'success',
				post: 'Post has been deleted successfully',
			});
		} catch (error) {
			next(appErr(error.message)); 
		}
	},
	// update post by id
	updatePostById: async (req, res,next) => {
		const { title, description, category } = req.body;
		try {
			if (!title && !description && !category) {
				return next(appErr('At least a field are required!'));
			}
			// find post by id
			const post = await Post.findById(req.params.id);
			// check if post belongs to user
			if (post.user.toString() !== req.session.userAuth.toString()) {
				return next(
					appErr('You are not authorized to update this post', 403)
				);
			}
			// update post
			const postUpdated = await Post.findByIdAndUpdate(req.params.id, {
				title,
				description,
				category,
				image: req.file.path,
			}, { new: true });
			res.json({
				status: 'success',
				data: postUpdated,
			});
		} catch (error) {
			next(appErr(error.message));
		}
	},
};

module.exports = postsController;

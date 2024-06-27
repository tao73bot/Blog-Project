const Post = require('../../model/posts/Post');
const User = require('../../model/users/User');
const Comment = require('../../model/comments/Comment');
const appErr = require('../../utils/appErr');

const commentsController = {
	// createComment
	createComment: async (req, res,next) => {
		const { message } = req.body;
		try {
			// find the post
			const post = await Post.findById(req.params.id);
			// create the comment
			const comment = await Comment.create({
				user: req.session.userAuth,
				message,
			});
			// push the comment to the post
			post.comments.push(comment._id);
			// find user
			const user = await User.findById(req.session.userAuth);
			// push the comment to the user
			user.comments.push(comment._id);
			//disable validation
			await post.save({ validateBeforeSave: false });
			await user.save({ validateBeforeSave: false });
			res.json({
				status: 'success',
				data: comment,
			});
		} catch (error) {
			next(appErr(error.message));
		}
	},
	// getComment
	getComment: async (req, res) => {
		try {
			res.json({
				status: 'success',
				comment: 'Comment fetched successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// deleteComment
	deleteComment: async (req, res,next) => {
		try {
			// find comment by id
			const comment = await Comment.findById(req.params.id);
			// check if post belongs to user
			if (comment.user.toString() !== req.session.userAuth.toString()) {
				return next(
					appErr('You are not authorized to delete this comment', 403)
				);
			}
			// delete post
			await Comment.findByIdAndDelete(req.params.id);
			res.json({
				status: 'success',
				data: 'Comment deleted successfully',
			});
		} catch (error) {
			next(appErr(error.message));
		}
	},
	// updateComment
	updateComment: async (req, res,next) => {
		try {
			// find comment by id
			const comment = await Comment.findById(req.params.id);
			if(!comment) return next(appErr('Comment not found', 404));
			// check if post belongs to user
			if (comment.user.toString() !== req.session.userAuth.toString()) {
				return next(
					appErr('You are not authorized to update this comment', 403)
				);
			}
			// update comment
			const commentUpdated = await Comment.findByIdAndUpdate(
				req.params.id,
				{
					message: req.body.message,
				},
				{ new: true }
			);
			res.json({
				status: 'success',
				data: commentUpdated,
			});
		} catch (error) {
			next(appErr(error.message));
		}
	},
};

module.exports = commentsController;
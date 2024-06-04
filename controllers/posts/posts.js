const postsController = {
	// create post
	createPost: async (req, res) => {
		try {
			res.json({
				status: 'success',
				post: 'Post created successfully',
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
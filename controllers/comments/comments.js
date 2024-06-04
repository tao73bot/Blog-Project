const commentsController = {
	// createComment
	createComment: async (req, res) => {
		try {
			res.json({
				status: 'success',
				comment: 'Comment created successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
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
	deleteComment: async (req, res) => {
		try {
			res.json({
				status: 'success',
				comment: 'Comment deleted successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
	// updateComment
	updateComment: async (req, res) => {
		try {
			res.json({
				status: 'success',
				comment: 'Comment updated successfully',
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
};

module.exports = commentsController;
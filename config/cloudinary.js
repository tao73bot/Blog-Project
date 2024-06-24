require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Instantiate CloudinaryStorage
const storage = new CloudinaryStorage({
	cloudinary,
	allowedFormats: ['jpeg', 'png', 'jpg'],
	params: {
		folder: 'blog-app',
		transformation: [{ width: 500, height: 500, crop: 'limit' }],
	},
});

module.exports = storage;
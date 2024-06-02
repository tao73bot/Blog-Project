const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');
const app = express();

//middlewares
//routes
//Error handler middleware

// Listen Server
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

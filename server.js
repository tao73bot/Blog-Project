const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const userRoutes = require('./routes/users/users');
const postRoutes = require('./routes/posts/posts');
const commentsRoutes = require('./routes/comments/comments');
const globalErrorHandler = require('./middlewares/globalHandler');
require('./config/dbConnect');
const app = express();

//middlewares
app.use(express.json()); // pass incoming request to json

//------
// User route
//------

app.use('/api/v1/users', userRoutes);

//------
// Post route
//------

app.use('/api/v1/posts', postRoutes);

//------
// Comment route
//------

app.use('/api/v1/comments', commentsRoutes);

//Error handler middleware
app.use(globalErrorHandler);
// Listen Server
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

const globalErrorHandler = (err, req, res, next) => { 
    // status: failed/somthing/server error
    // message
    // stack
    const stack = err.stack;
    const message = err.message;
    const status = err.status || 'failed fucked';
    const statusCode = err.statusCode || 500;
    // send response
    res.status(statusCode).json({
        status,
        message,
        stack,
    });
};

module.exports = globalErrorHandler;
const appErr = require("../utils/appErr");

const protected = (req, res, next) => {
    // if user is not logged in
    if (req.session.userAuth) {
        next();
    } else {
        next(appErr('You are not logged in', 401));
    }
};

module.exports = protected;
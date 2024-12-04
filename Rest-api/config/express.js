const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'SoftUni';

module.exports = (app) => {
    // Set the base directory for the static files (root of the project)
    global.__basedir = __dirname;  // Define _baseDir globally

    app.use(express.json());
    app.use(cookieParser(cookieSecret));

    // Serve static files from the 'static' directory
    app.use(express.static(path.resolve(__basedir, 'static')));

    // Uncomment and use if you have an error handler
    // app.use(errorHandler(err, req, res, next));
};

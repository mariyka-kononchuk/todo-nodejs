"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv');
dotenv.config();
var notesRouter = require('./routes/notes');
var app = express();
var formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/notes', notesRouter);
app.use(function (req, res) {
    res.status(404).json({ message: 'Not found' });
});
var errorHandler = function (err, req, res, next) {
    var _a = err.status, status = _a === void 0 ? 500 : _a, _b = err.message, message = _b === void 0 ? 'Server error' : _b;
    res.status(status).json({ message: err.message });
};
app.use(errorHandler);
module.exports = app;

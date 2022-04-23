"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation = function (scheme) {
    return function (req, res, next) {
        var error = scheme.validate(req.body).error;
        if (error) {
            error.status = 400;
            next(error);
            return;
        }
        next();
    };
};
module.exports = validation;

"use strict";
// export {};
var mongoose = require('mongoose');
var app = require('../app.ts');
var _a = process.env, DB_HOST = _a.DB_HOST, PORT = _a.PORT;
mongoose.connect(DB_HOST)
    .then(function () {
    app.listen(PORT);
    console.log('Database connection successful');
})
    .catch(function (error) {
    console.log(error.message);
    process.exit(1);
});

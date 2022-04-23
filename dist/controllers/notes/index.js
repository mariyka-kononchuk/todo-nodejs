"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAll = require('./getAll');
var getById = require('./getById');
var add = require('./add');
var removeById = require('./removeById');
var updateById = require('./updateById');
var getStats = require('./getStats');
var removeAll = require('./removeAll');
module.exports = {
    add: add,
    removeById: removeById,
    updateById: updateById,
    getById: getById,
    getAll: getAll,
    getStats: getStats,
    removeAll: removeAll
};

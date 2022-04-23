export {}
const getAll = require('./getAll');
const getById = require('./getById');
const add = require('./add');
const removeById = require('./removeById');
const updateById = require('./updateById');
const getStats = require('./getStats');
const removeAll = require('./removeAll');

module.exports = {
  add,
  removeById,
  updateById,
  getById,
  getAll,
  getStats,
  removeAll
};

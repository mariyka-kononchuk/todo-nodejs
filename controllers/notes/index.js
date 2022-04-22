const getAll = require('./getAll.js');
const getById = require('./getById');
const add = require('./add');
const removeById = require('./removeById');
const updateNote = require('./updateNote');
const getStats = require('./getStats');
const removeAll = require('./removeAll');

module.exports = {
  add,
  removeById,
  updateNote,
  getById,
  getAll,
  getStats,
  removeAll
};

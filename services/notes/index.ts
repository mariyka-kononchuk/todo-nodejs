export {}
const addNote = require('./addNote');
const getByIdNote = require('./getByIdNote');
const getStatsNotes = require('./getStatsNotes');
const removeByIdNote = require('./removeByIdNote');
const getAllNotes = require('./getAllNotes');
const removeAllNotes = require('./removeAllNotes');
const updateByIdNote = require('./updateByIdNote');

module.exports = {
  addNote,
  getByIdNote,
  getStatsNotes,
  removeByIdNote,
  getAllNotes,
  removeAllNotes,
  updateByIdNote
};

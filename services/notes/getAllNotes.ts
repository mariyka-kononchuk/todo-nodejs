export {}
const { Note } = require('../../models');

const getAllNotes = async () => {
    const result = await Note.find({});
    return result;
  };

  module.exports = getAllNotes 
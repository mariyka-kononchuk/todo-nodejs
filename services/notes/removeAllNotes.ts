export {}
const { Note } = require('../../models');

const removeAllNotes = async () => {
    const result = await Note.remove({});
    return result;
  };

  module.exports = removeAllNotes 
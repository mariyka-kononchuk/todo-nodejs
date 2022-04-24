export {}
const { Note } = require('../../models');
const moment = require('moment');
const { getDatesFromContent } = require('../../helpers');

async function addNote (name:string, category:string, content:string)  {
    const dates: string = getDatesFromContent(content);
    const date: string = moment().format('MMMM D, YYYY');
    const note = {
        name,
        date,
        category,
        content,
        dates
    };
    const result = await Note.create(note);
    return result;
  };

  module.exports = addNote 
const { Note } = require('../../models');
const moment = require('moment');
const { getDatesFromContent } = require('../../helpers');

const add = async (req, res) => {
  const { name, category, content } = req.body;
  const dates = getDatesFromContent(content);
  const date = moment().format('MMMM D, YYYY');
  const note = {
    name,
    date,
    category,
    content,
    dates
  };

  const result = await Note.create(note);

  res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'Note created',
    data: {
      result
    }
  });
};

module.exports = add;

const { Contact } = require('../../models');
const dateFormat = require('dateformat');
// import dateFormat from "dateformat";
const { getDatesInContent } = require('../../helpers');

const add = async (req, res) => {
  const { name, category, content } = req.body;
  const dates = getDatesInContent(content);
  const date = dateFormat(new Date(), "mmmm d, yyyy");
  const note = {
    name,
    date,
    category,
    content,
    dates
  };

  const result = await Contact.create(note);

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

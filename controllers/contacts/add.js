const { Contact } = require('../../models');
// const dateFormat = require('dateformat');
// import dateFormat from "dateformat";
const moment = require('moment');
const { getDatesInContent } = require('../../helpers');

const add = async (req, res) => {
  const { name, category, content } = req.body;
  const dates = getDatesInContent(content);
  // const date = dateFormat(new Date(), "mmmm d, yyyy");
  const date = moment().format('MMMM D, YYYY')
  // const date = new Date();
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

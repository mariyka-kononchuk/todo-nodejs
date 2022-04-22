const { Contact } = require('../../models');

const add = async (req, res) => {
  const { name, date, category, content } = req.body;
  const note = {
    name,
    date,
    category,
    content
  };

  const result = await Contact.create(note);
  //  const { _id: operationId, sum: sumOper } = await Operation.create({
  //   ...operation,
  //   owner: id,
  // });

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

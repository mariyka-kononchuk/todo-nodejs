const { Note } = require('../../models');

const getAll = async (req, res) => {
  const result = await Note.find({});
  res.json({
    status: 'Success',
    code: 200,
    message: 'Notes found',
    data: {
      result
    }
  });
}

module.exports = getAll;

const { Note } = require('../../models');

const removeAll = async (req, res) => {
  const result = await Note.remove({});

  res.json({
    status: 'Success',
    code: 200,
    message: 'All notes deleted',
    data: {
      result
    }
  });
}

module.exports = removeAll;

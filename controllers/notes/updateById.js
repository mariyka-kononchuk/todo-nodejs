const createError = require('http-errors');
const { Note } = require('../../models');

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Note.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404, `Note with id:${id} not found`);
  }
  res.json({
    status: 'Success',
    code: 200,
    message: 'Note updated',
    data: {
      result
    }
  });
};

module.exports = updateById;

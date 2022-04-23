const createError = require('http-errors');
const { Note } = require('../../models');

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { name, category, content } = req.body;

    const result = await Note.findByIdAndUpdate(
        id,
        { name, content, category },
        { new: name, new: content, new: category }
    );
    
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

module.exports = updateNote;

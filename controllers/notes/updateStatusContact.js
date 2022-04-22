const createError = require('http-errors');
const { Note } = require('../../models');

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    const { name, category, content } = req.body;

    const result = await Note.findByIdAndUpdate(id,{ $set: { name: name, category:category, content:content }});
    
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

module.exports = updateStatusContact;

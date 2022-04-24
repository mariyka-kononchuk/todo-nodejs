export {}
const createError = require('http-errors');
const { Note } = require('../../models');

async function updateByIdNote (id:string, name:string, category:string, content:string)  {
     const result = await Note.findByIdAndUpdate(
        id,
        { name, content, category },
        { new: name, newContent: content, newCategory: category }
    );
    
    if (!result) {
        throw createError(404, `Note with id:${id} not found`);
    }
    return result;
  };

module.exports = updateByIdNote;

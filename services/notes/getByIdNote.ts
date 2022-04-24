const createError = require('http-errors');
const { Note } = require('../../models');
const getByIdNote = async (id:string) => {
    const result = await Note.findById(id);
    if (!result) {
        throw createError(404, `Note with id:${id} not found`);
    }
    return result;
};

module.exports =  getByIdNote 
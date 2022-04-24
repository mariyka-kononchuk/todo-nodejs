export {}
const createError = require('http-errors');
const { Note } = require('../../models');

const removeByIdNote = async (id: string) => {
    const result = await Note.findByIdAndRemove(id, {});
    if (!result) {
        throw createError(404, `Note with id:${id} not found`)
    };
    return result;
};

module.exports =  removeByIdNote 
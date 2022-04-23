import {Request, Response} from "express";
const { Note } = require('../../models');
const createError = require('http-errors');

const removeById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const result = await Note.findByIdAndRemove(id, req.body);
  if (!result) {
    throw createError(404, `Note with id:${id} not found`)
  };
  res.json({
    status: 'Success',
    code: 200,
    message: 'Note deleted',
    data: {
      result
    }
  });
};

module.exports = removeById;

import {Request, Response} from "express";
const createError = require('http-errors');
const { Note } = require('../../models');

const getById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const result = await Note.findById(id);
  if (!result) {
    throw createError(404, `Note with id:${id} not found`);
  }
  res.json({
    status: 'Success',
    code: 200,
    message: `Note with id:${id} found`,
    data: {
      result
    }
  })
};

module.exports = getById;

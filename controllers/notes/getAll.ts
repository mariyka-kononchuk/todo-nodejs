import {Request, Response} from "express";
const { Note } = require('../../models');

const getAll = async (req:Request, res:Response) => {
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

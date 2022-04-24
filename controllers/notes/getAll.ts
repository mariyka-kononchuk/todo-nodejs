import {Request, Response} from "express";
const { getAllNotes } = require('../../services/notes');

const getAll = async (req:Request, res:Response) => {
  const result = await getAllNotes();

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

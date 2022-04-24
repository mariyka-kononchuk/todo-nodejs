import {Request, Response} from "express";
const { removeAllNotes } = require('../../services/notes');

const removeAll = async (req:Request, res:Response) => {
  const result = await removeAllNotes();

  res.json({
    status: 'Success',
    code: 200,
    message: 'All notes deleted',
    data: {
      result
    }
  });
}

module.exports = removeAll;

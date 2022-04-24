import {Request, Response} from "express";
const { Note } = require('../../models');
const { removeByIdNote  } = require('../../services/notes');

const removeById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const result = await removeByIdNote(id);
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

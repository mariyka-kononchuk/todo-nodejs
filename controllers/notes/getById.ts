import {Request, Response} from "express";
const { getByIdNote } = require('../../services/notes');

const getById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const result = await getByIdNote(id);
  
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

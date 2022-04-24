import { Request, Response } from "express";
const { addNote } = require('../../services/notes');

const add = async (req:Request, res:Response) => {
  const { name, category, content } = req.body;
  const result = await addNote(name, category, content);

  res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'Note created',
    data: {
      result
    }
  });
};

module.exports = add;

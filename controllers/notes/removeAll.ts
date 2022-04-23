// export {}
import {Request, Response} from "express";
const { Note } = require('../../models');

const removeAll = async (req:Request, res:Response) => {
  const result = await Note.remove({});

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

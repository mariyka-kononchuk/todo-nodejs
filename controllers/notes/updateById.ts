import {Request, Response} from "express";
const { updateByIdNote } = require('../../services/notes');

const updateById = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { name, category, content } = req.body;

    const result = await updateByIdNote(id, name, category, content)

    res.json({
        status: 'Success',
        code: 200,
        message: 'Note updated',
        data: {
            result
        }
  });
};

module.exports = updateById;

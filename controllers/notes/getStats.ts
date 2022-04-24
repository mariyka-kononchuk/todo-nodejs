import { Request, Response } from "express";
const { getStatsNotes } = require('../../services/notes');

const getStats = async (req:Request, res:Response) => {
    const result = await getStatsNotes();
    res.json({
        status: 'Success',
        code: 200,
        message: 'Note statistic found',
        data: {
            result
        }
  });
};

module.exports = getStats;

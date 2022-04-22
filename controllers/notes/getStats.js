const { Note } = require('../../models');
const { createStatisticData } = require('../../helpers');
const data  = require('./todos.json')
const getStats = async (req, res) => {
   // const allNotes = await Note.find({});
    const result = createStatisticData(data);

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

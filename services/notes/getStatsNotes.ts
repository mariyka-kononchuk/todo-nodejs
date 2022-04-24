export {}
const { Note } = require('../../models');
const { createStatisticData } = require('../../helpers');

const getStatsNotes = async () => {
    const allNotes = await Note.find({});
    const result = createStatisticData(allNotes);
    return result;
};

module.exports =  getStatsNotes 
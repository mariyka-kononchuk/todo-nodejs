export {}
const moment = require('moment');

function getDatesFromContent (content:string) {
    const datesFound = content.match(/\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g);
    let contentDates:string[]= [];
    let dates = ''
    if (datesFound !== null) {
        datesFound.map(item => contentDates.push(moment(item).format("MM/DD/YYYY")))
        dates = contentDates.join(', ');
        return dates;
    }
    return
}

module.exports = getDatesFromContent;


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require('moment');
function getDatesFromContent(content) {
    var datesFound = content.match(/\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g);
    var contentDates = [];
    var dates = '';
    if (datesFound !== null) {
        datesFound.map(function (item) { return contentDates.push(moment(item).format("MM/DD/YYYY")); });
        dates = contentDates.join(', ');
        return dates;
    }
    return;
}
module.exports = getDatesFromContent;

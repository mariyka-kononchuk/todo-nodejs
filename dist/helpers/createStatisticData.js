"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categoryName = ['Task', 'Idea', 'Random Thought'];
function createStatisticData(data) {
    var totalData = [];
    var newArray = data.map(function (e) { return { category: e.category, status: e.status }; });
    for (var _i = 0, categoryName_1 = categoryName; _i < categoryName_1.length; _i++) {
        var name_1 = categoryName_1[_i];
        var totalActive = 0;
        var totalArchived = 0;
        for (var _a = 0, newArray_1 = newArray; _a < newArray_1.length; _a++) {
            var item = newArray_1[_a];
            if (item.category === name_1 && item.status === 'active') {
                totalActive++;
            }
            if (item.category === name_1 && item.status === 'archived') {
                totalArchived++;
            }
        }
        if (totalActive === 0) {
            totalActive = '';
        }
        if (totalArchived === 0) {
            totalArchived = '';
        }
        var newTotalData = {
            category: name_1,
            active: totalActive,
            archived: totalArchived,
        };
        totalData.push(newTotalData);
        for (var _b = 0, totalData_1 = totalData; _b < totalData_1.length; _b++) {
            var item = totalData_1[_b];
            var index = totalData.findIndex(function (item) { return item.active === '' && item.archived === ''; });
            if (index !== -1) {
                totalData.splice(index, 1);
            }
        }
    }
    return totalData;
}
module.exports = createStatisticData;

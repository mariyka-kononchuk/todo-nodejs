const categoryName = ['Task', 'Idea', 'Random Thought'];

function createStatisticData (data) {
    const totalData = [];
    newArray = data.map(e => { return { category: e.category, status: e.status } });
  
    for (const name of categoryName) {
        let totalActive = 0;
        let totalArchived = 0;
        for (const item of newArray) {
            if (item.category === name && item.status === 'active') {
                totalActive++;
            }
            if (item.category === name && item.status === 'archived') {
                totalArchived++;
            }
        }

    if (totalActive === 0) {
      totalActive = ''
    }
    if (totalArchived === 0) {
      totalArchived = ''
    }
    
    const newTotalData = {
      category: name,
      active: totalActive,
      archived: totalArchived,
    }
    totalData.push(newTotalData);
    
    for (const item of totalData) {
        const index = totalData.findIndex(item => item.active === '' && item.archived === '');
        if (index !== -1) {
            totalData.splice(index, 1);
        }
    }
  }
  return totalData;
}

module.exports = createStatisticData;


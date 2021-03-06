export {}
const categoryName = ['Task', 'Idea', 'Random Thought'];
interface INote {
    id: string;
    name: string;
    date: string;
    category: string;
    content: string;
    dates?: string;
    status:string
}

interface INewArray {
  category: string;
  status: string;
}

function createStatisticData (data:INote[]) {
    const totalData = [];
    let newArray:INewArray[] = data.map(e => { return { category: e.category, status: e.status } });
  
    for (const name of categoryName) {
      let totalActive:number = 0;
      let totalArchived:number = 0;
        for (const item of newArray) {
            if (item.category === name && item.status === 'active') {
                totalActive++;
            }
            if (item.category === name && item.status === 'archived') {
                totalArchived++;
            }
        }
    
    const newTotalData = {
      category: name,
      active: totalActive,
      archived: totalArchived,
    }
    totalData.push(newTotalData);
    
    for (const item of totalData) {
        const index = totalData.findIndex(item => item.active === 0 && item.archived === 0);
        if (index !== -1) {
            totalData.splice(index, 1);
        }
    }
  }
  return totalData;
}

module.exports = createStatisticData;


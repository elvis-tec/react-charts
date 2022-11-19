export const filterData = (data, baseKey = null, baseValue = null, year = null, month = null) => {
    if(baseKey === '' || baseKey == null || baseValue === '' || baseValue == null) return data; 
    let keys = [];
    for(let item of data){ //Get all available keys
        keys.push(...Object.keys(item));
    }
    keys = keys.filter((item, //Remove repeated keys
        index) => keys.indexOf(item) === index); 

    if(!!keys.find((x)=> x === baseKey) === false) return data; //Find the base key
    if(!!keys.find((x)=> x === baseValue) === false) return data; //Find the base value

    let uniqueKeys = data.filter((value, index, self) => //Get unique key values
    index === self.findIndex((t) => (
        t[baseKey] === value[baseKey]
    )));

    uniqueKeys = uniqueKeys.map((item)=>(item[baseKey])); // Key to value

    let newData = [];

    for(let index of uniqueKeys){
        let tempData = [];
        if(year === null && month === null){
            tempData = data.filter((x)=> x[baseKey] === index);
        }else{
            tempData = data.filter((x)=> x[baseKey] === index && x.Ano === year && x.Mes === month);
        }
        const sum = tempData.reduce((accumulator, object) => {
            return accumulator + object[baseValue];
        }, 0);
        let tempObj = {};
        tempObj[baseKey] = index;
        tempObj[baseValue] = sum;
        newData.push(tempObj);
    }
    
    return newData;
}

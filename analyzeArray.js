const analyzeArray = (arr) => {
    let average = arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let length = arr.length;
    return {
        average,
        min,
        max,
        length
    }
};


export default analyzeArray;
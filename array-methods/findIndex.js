const findIndex = (array, elem) => {
    let index;
  
    for (let i = 0; i < array.length; i++) {
      if (elem == null) {
        elem = -1;
      }
  
      if (elem === array[i]) {
        index = i;
      }
    }
  
    return index;
};
  
const arr = [1, "hello", 3, 4, 5, 6, 7];
console.log(findIndex(arr, "hello"));
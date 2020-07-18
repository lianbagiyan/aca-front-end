/**
 * Write a recursive function that removes the first element and returns the given array. 
 * @param {arr} array - the array
 * @param {stop} number - loop count
*/

const removeFirstElem = (arr) => {
    let stop = arr.length - 1;
  
    const iter = (arr) => {
      if (arr.length === stop || arr.length === 0) {
        return arr;
      }
  
      let [first, ...rest] = arr;
  
      return iter(rest);
    };
  
    return iter(arr);
};
  
console.log(removeFirstElem([6, 78, "n", 0, 1])); //[78, ‘n’, 0, 1]
console.log(removeFirstElem([5])); //[]
console.log(removeFirstElem([])); //[]
console.log(removeFirstElem([4, 7, 8, 9, 0, 1])); //[7,8,9,0,1]
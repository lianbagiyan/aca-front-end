/* 
    Write a JavaScript function to get all possible subsets of length 3 of the given
    array. Assume that all elements in the array are unique.
*/

const arrSubsets = (array, count) => {
    let newArr = [];
  
    for (let i = 0; i < array.length; i += count) {
      newArr.push(array.slice(i, i + count));
    }
  
    return newArr;
};
  
console.log(arrSubsets([1, 2, 3, 4, 5, 6, 7], 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ] ]
/**
 * Given an array of nested arrays. Write a recursive function that flattens it.
 * @param {array} arr - array name
 * @param {array} flat - concat array name
 * @returns {array} - returned new concate array
*/

const nestedArr = (arr) => {
    let flat = [].concat(...arr);
  
    if (!flat.some(Array.isArray)) {
      return flat;
    }
  
    return nestedArr(flat);
};
  
console.log(nestedArr([1, [3, 4, [1, 2]], 10])); //[1, 3, 4, 1, 2, 10]
console.log(nestedArr([14, [1, [[[3, []]], 1], 0]])); //[14, 1, 3, 1, 0]
  
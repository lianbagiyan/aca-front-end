/**
 * Write a recursive function that rotates an array N places to the left.
 * @param {array} arr - the array
 * @param {number} n - number of shift
 * @returns {array} - array with changes elements
*/

const rotate = (arr, n) => {
    if (n === 0) {
      return arr;
    }
  
    if (n > 0) {
      arr.push(arr.shift());
      n--;
      return rotate(arr, n);
    }
  
    if (n < 0) {
      arr.unshift(arr.pop());
      n++;
      return rotate(arr, n);
    }
};
  
console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], 4)); //[‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2)); //[‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
  
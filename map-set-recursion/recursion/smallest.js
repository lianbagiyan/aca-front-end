/**
    * Given an array of numbers. Write a recursive function to find its minimal positive
    element.
    * @param {arr} array - The array value.
    * @param {min} number - The minimum value of array.
*/

function smallest(arr) {
    let min = arr.filter((item) => item >= 0);
  
    if (min.length === 1) {
      return min[0];
    }
  
    if (min.length === 0) {
      return -1;
    }
  
    return Math.min(min.shift(), smallest(min));
}
  
console.log(smallest([-5, -9, -111, -1000, -7]));
console.log(smallest([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(smallest([45, -9, 15, 5, -78, -6]));
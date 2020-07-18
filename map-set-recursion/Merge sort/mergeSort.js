/**
 * Merge sort algorithm
 * @param {array} array - initial array
 * @param {number} half - median of array
 * @returns {array} - sorted array
*/

function mergeSort(array, half = array.length / 2) {
    if (array.length < 2) {
      return array;
    }
  
    const left = array.splice(0, half);
  
    return merger(mergeSort(left), mergeSort(array));
  }
  
  function merger(left, right) {
    const arr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
  
    return [...arr, ...left, ...right];
}
  
console.log(mergeSort([29, 30, 1, 7, 4, 25, 4, 67, 22, 5]));
  
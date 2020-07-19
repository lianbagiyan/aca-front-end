/**
 * The tasks parameters.
 * @param {array} setA 
 * @param {array} setC 
 * @returns {array} - array difference setA & setC
*/
let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);

function difference(setA, setC) {
    let _difference = new Set();
  
    for (let item of setA) {
      if (!setC.has(item)) {
        _difference.add(item);
      }
    }
  
    return _difference;
}
  
console.log(difference(setA, setC)); // => Set [1, 2]
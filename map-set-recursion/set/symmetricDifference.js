/**
 * The tasks parameters.
 * @param {array} setA 
 * @param {array} setC 
 * @returns {array} - array simmetric difference setA & setC
*/

let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);

function symmetricDifference(setA, setC) {
  let newUnion = new Set(setA);

  for (let item of setC.values()) {
    newUnion.add(item);
  }

  let _symmetricDifference = new Set();

  for (let item of newUnion) {
    if (!setC.has(item) !== !setA.has(item)) {
      _symmetricDifference.add(item);
    }
  }

  return _symmetricDifference;
}

console.log(symmetricDifference(setA, setC)); // => Set [1, 2, 5, 6]
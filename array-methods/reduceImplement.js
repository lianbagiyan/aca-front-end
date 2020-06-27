/*
    Implement array method.
*/

const array = [0, 5, 10, 15];

const reduce = (arr, cb, accumulator) => {
  for (let i of arr) {
    accumulator = cb(accumulator, i);
  }
  return accumulator;
};

let cb = (acc, elem) => acc + elem;

let sumArray = reduce(array, cb, 0);
console.log(sumArray);
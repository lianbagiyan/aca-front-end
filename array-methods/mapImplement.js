/*
    Implement array method.
*/

const array = [0, 5, 10, 15];

const map = (cb, array) => {
  let resultArray = [];
  let i;

  for (i = 0; i < array.length; i++) {
    resultArray[i] = cb(array[i]);
  }
  return resultArray;
};

let cb = (elem) => {
  return elem * elem;
};

let square = map(cb, array);
console.log(square);
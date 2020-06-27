/*
    Implement array method.
*/

const array = [0, 5, 10, 15];

const filter = (cb, array) => {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};

let cb = (elem) => {
  return elem % 2 !== 0;
};

let oddNum = filter(cb, array);
console.log(oddNum);
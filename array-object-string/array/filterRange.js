/* 
    Write a function filterRange(arr, a, b) that gets an array, looks for elements between a
    and b in it and returns an array of them.
*/

const filterRange = (array, firstNum, secondNum) => {
    let newArr = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= firstNum && array[i] <= secondNum) {
        newArr.push(array[i]);
      }
    }

    return newArr;
};
  
console.log(filterRange([1, 10, 20, 30], 9, 23)); //[10, 20]
console.log(filterRange([100, 200, 300], 55, 23)); //[ ]
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15)); //[-10, -8, 0, 10 ]
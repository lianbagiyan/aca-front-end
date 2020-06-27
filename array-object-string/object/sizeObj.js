/* 
    Write a function which returns the object’s size if it isn’t empty. Otherwise, print
    ‘Empty’
*/

const objSize = (obj) => {
    let count = 0;
  
    for (let key in obj) {
      count += 1;
    }
  
    if (count === 0) {
      return "Oops! Empty!";
    }
  
    return count;
};
  
console.log(objSize({ name: "Steve", lastname: "Jobs" })); //2
console.log(objSize({ a: 1, b: 2, c: "hello" })); //3
console.log(objSize({})); //"Oops! Empty!"
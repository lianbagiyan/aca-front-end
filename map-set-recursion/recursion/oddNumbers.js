/**
    * Write a recursive function to determine whether all digits of the number are odd or not.
    * @param {number} number - The n value.
*/
const oddElemNumbers = (number) => {
    if (number === 0) {
      return true;
    }
  
    if (number % 2 === 0) {
      return false;
    }
  
    return oddElemNumbers((number - (number % 10)) / 10);
};
  
console.log(oddElemNumbers(4211133));
console.log(oddElemNumbers(7791));
console.log(oddElemNumbers(2));
console.log(oddElemNumbers(25555555552));
console.log(oddElemNumbers(52));
  
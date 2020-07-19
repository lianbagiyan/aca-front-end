/**
 * Write a function that calculates its sum of the digits.
 * @param {number} num - The number value
 * @returns {number} - sum of the digits
*/

const calculateSumOfDigit = (num) => {
    if (num < 10) {
      return num;
    }
  
    num = (num % 10) + calculateSumOfDigit((num - (num % 10)) / 10);
  
    return calculateSumOfDigit(num);
};
  
console.log(calculateSumOfDigit(14)); //5
console.log(calculateSumOfDigit(29)); //2
console.log(calculateSumOfDigit(999999)); //9
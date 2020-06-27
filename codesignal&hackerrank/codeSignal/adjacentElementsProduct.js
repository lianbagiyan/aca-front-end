/*
    Given an array of integers, find the pair of adjacent elements 
    that has the largest product and return that product.
*/

const adjacentElementsProduct = (inputArray) => {
    let largestProduct = inputArray[0] * inputArray[1];
  
    for (let i = 1; i < inputArray.length - 1; i++) {
      let otherProduct = inputArray[i] * inputArray[i + 1];
      if (otherProduct > largestProduct) {
        largestProduct = otherProduct;
      }
    }

    return largestProduct;
};  
console.log(adjacentElementsProduct([2, 5, 7, 3, 1]));
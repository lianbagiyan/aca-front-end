/* 
    Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
    elements starting from a to b spaced by step.
*/

const evenlySpaceElem = (firstNum, secondNum, step) => {
    let newArr = [];
  
    if (firstNum > secondNum) {
      return "invalid format!";
    }
  
    for (let i = firstNum; i <= secondNum; i += step) {
      newArr.push(i);
    }
  
    return newArr;
};
  
console.log(evenlySpaceElem(19, 3, 1)); //"invalid format!"
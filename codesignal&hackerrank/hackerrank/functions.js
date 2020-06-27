/*
    Create the function factorial.
 */
const factorial = (n) => {
    let number = 1;
  
    for (let i = 1; i <= n; i++) {
      number *= i;
    }
  
    return number;
};
  
console.log(factorial(0));
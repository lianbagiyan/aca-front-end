/* 
    Declare a variable named 'firstInteger' and initialize with integer value 4.
    Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    Declare a variable named 'firstString' and initialize with the string "HackerRank".
    Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
*/

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = "HackerRank ";
  
    console.log(+firstInteger + +secondInteger);
    console.log(+firstDecimal + +secondDecimal);
    console.log(firstString + "" + secondString);
}
performOperation(5, 6.12, "challenges");
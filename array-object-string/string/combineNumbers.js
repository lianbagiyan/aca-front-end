/* 
    Write a program which will give you all of the potential combinations of a two-digit
    decimal combination, printed in a comma-delimited format
    ‘00’, ‘01’, ‘02’, ..., ‘98’, ‘99’.  
*/

const combineNumbers = () => {
    let combinations;
    let array = [];
  
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        combinations = i + "" + j;
        array.push(combinations);
      }
    }
  
    return array.toString();
};
  
console.log(combineNumbers());
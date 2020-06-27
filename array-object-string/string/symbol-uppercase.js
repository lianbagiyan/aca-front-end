/* 
    Write a function which makes the selected symbol uppercased
*/

const upperCase = (string, item) => {
    let newStr = "";
  
    for (let i = 0; i < string.length; i++) {
      if (item === i) {
        newStr += string[item].toUpperCase();
      } else {
        newStr += string[i];
      }
    }
  
    return newStr;
};
  
console.log(upperCase("daenerys", 1)); // 'dAenerys'
console.log(upperCase("lampard", 0)); // 'Lampard'
console.log(upperCase("Elon", 3)); // 'EloN'
  
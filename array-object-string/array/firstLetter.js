/*
    Write a function which removes all the words from array starting by a given letter
*/

const removeByLetter = (array, letter) => {
    let newArr = [];
  
    for (let i = 0; i < array.length; i++) {
      if (!(array[i][0].toUpperCase() === letter.toUpperCase())) {
        newArr.push(array[i]);
      }
    }
  
    return newArr;
};
  
const array = ["Godfather", "Game of Thrones", "Social Network"];
console.log(removeByLetter(array, "g")); // ['Social Network']
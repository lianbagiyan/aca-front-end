/*
    Write a function which calculates average age of users.
*/

const getAverageAge = (arr) => {
    let initialValue = 0;
    let result = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue.age,
      initialValue
    );
  
    return result / arr.length;
};
  
const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      age: 56,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      age: 54,
    },
];

console.log(getAverageAge(users)); // 55
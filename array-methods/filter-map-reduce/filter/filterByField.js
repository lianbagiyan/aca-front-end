/*
    Write a function which filters object by field.
*/

const filterByField = (array, keyName) => {
    let filteredUsers = array.filter((elem) => elem[keyName] === true);
  
    return filteredUsers;
};
  
const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      isAstronaut: true,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      isAstronaut: true,
    },
    {
      username: "Elon Musk",
      isAstronaut: false,
    },
];
  
console.log(filterByField(users, "isAstronaut"));
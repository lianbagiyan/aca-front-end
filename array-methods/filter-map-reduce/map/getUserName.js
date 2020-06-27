/*
    Write a function which returns array of usernames.
*/

const getUserNames = (array) => {
    let userNames = array.map((name) => name.username);
  
    return userNames;
};
  
const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
    },
];
  
console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
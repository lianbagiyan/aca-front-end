/*
    Write a function which returns array of lengths of user names.
*/

const getUserNameLengths = (array) => {
    let userNameLengths = array.map((name) => name.username.length);
  
    return userNameLengths;
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

console.log(getUserNameLengths(users)); // [12, 13]
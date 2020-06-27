/*
    Write a function which remove users with language equals to 'ru'.
*/

const filterUsers = (array, langName) => {
    let filteredUsers = array.filter(
      (elem) => elem.lang.toUpperCase() !== langName.toUpperCase()
    );
  
    return filteredUsers;
};
  
const users = [
    {
      username: "Yuri Gagarin",
      lang: "Ru",
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
    },
];
  
console.log(filterUsers(users, "rU"));// [{ username: "Nil Armstrong, lang: "ENG" }]
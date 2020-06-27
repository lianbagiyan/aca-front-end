/* 
    Write a function which finds corresponding object by it’s id and print it. Elsewhere it
    should print error message.
*/

const findById = (arg, id) => {
    let value;
  
    for (let i = 0; i < arg.length; i++) {
      if (arg[i]["id"] === id) {
        value = arg[i];
      } 
    }
  
    if (value == null) {
      return "Oops! No data!";
    }
  
    return value;
};
  
const frameworks = [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" },
];
console.log(findById(frameworks, 14));
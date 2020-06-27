const findValue = (obj, key) => {
    let value;
  
    values = Object.values(obj);
    keys = Object.keys(obj);
  
    if (keys.includes(key)) {
      value = obj[key];
    } else {
      return "Oops!";
    }
  
    return value;
};
  
console.log(findValue({ user: "name", age: 18 }, "age")); // 18
console.log(findValue({ user: "name", age: 18 }, "user")); // ‘name’
const arrIncludes = (array, elem) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elem) {
        return true;
      }
    }
  
    return false;
};
  
const myArr = [1, 2, 3, "Hi", "my", "friend"];
console.log(arrIncludes(myArr, "askk"));
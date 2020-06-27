const arrJoin = (arr, x) => {
    let newArr = [];
    let joinArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      newArr += arr[i] + x;
    }
  
    for (let j = 0; j < newArr.length - 1; j++) {
      joinArr += newArr[j];
    }
  
    return joinArr;
};
  
console.log(arrJoin([1, 2, 3, 4, "bggng"], "?"));
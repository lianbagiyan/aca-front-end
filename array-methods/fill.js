const fill = (array, x, a, b) => {
    let newArr = [...array];
  
    for (let i = 0; i < array.length; i++) {
      if (a == null && b == null) {
        newArr[i] = x;
      }
  
      for (let k = a; k < array.length; k++) {
        if (b == null) {
          newArr[k] = x;
        }
      }
  
      for (let j = a; j < b; j++) {
        if (isNaN(a) || isNaN(b)) {
          newArr;
        }
  
        if (a >= array.length) {
          break;
        }
  
        if (b >= array.length) {
          b = array.length;
        }
  
        newArr[j] = x;
      }
    }
  
    return newArr;
};
  
const arr = [1, 2, 3];
console.log(fill(arr, 4, 1, 2));
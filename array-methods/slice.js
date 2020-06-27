const slice = (arr, x, a) => {
    let newArr = [];
    let sliceArr = [];
  
    if (a == null) {
      for (let i = x; i < arr.length; i++) {
        newArr += arr[i];
        for (let j = 0; j < newArr.length; j++) {
          sliceArr[j] = +newArr[j];
        }
      }
    }
  
    if (a > arr.length) {
      a = arr.length;
    }
  
    for (let i = x; i < a; i++) {
      newArr += arr[i];
      for (let j = 0; j < newArr.length; j++) {
        sliceArr[j] = +newArr[j];
      }
    }
  
    return sliceArr;
};
  
console.log(slice([1, 2, 3, 4, 5], 2, 50));
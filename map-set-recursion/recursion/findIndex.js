/**
    * Find the index where sorting order is violated.
    * @param {array} arr - The array value.
    * @returns {number} - index of sorting array elememnt
*/

const findIndex = (arr) => {
    let [...newArr] = arr;
  
    const iter = (newArr) => {
      if (newArr.length === 0) {
        return -1;
      }
  
      let [first, ...rest] = newArr;
  
      if (first > rest[0]) {
        return arr.indexOf(rest[0]);
      }
  
      return iter(rest);
    };
  
    return iter(newArr);
};
  
console.log(findIndex([2, 12, 15, 48, 64]));
console.log(findIndex([-9, -4, -4, 3, 12, 4, 5]));
console.log(findIndex([9, -4, -4, 3, 12, 4, 5]));
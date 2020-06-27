/*
    Return the second largest number in the array.
*/

function getSecondLargest(nums) {
    let array = [];
    let secondMax;
  
    const max = Math.max(...nums);
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== max) {
        array.push(nums[i]);
        secondMax = Math.max(...array);
      }
    }
    return secondMax;
}
console.log(getSecondLargest([9, 2, 5, 6, 0, 9, 8]));
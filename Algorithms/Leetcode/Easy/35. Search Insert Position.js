/*
  Given a sorted array of distinct integers and a target value, 
  return the index if the target is found. 
  If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (nums[middle] !== target && left <= right) {
    if (nums[middle] > target) right = middle - 1;
    else left = middle + 1;

    middle = Math.floor((left + right) / 2);
  }

  if (nums[middle] === target) return middle;
  if (nums[middle] > target) return middle - 1;
  return middle + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4

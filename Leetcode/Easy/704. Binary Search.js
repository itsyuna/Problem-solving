// Write an algorithm with O(log n) runtime complexity.
const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (nums[middle] !== target && start <= end) {
    if (target > nums[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return nums[middle] === target ? middle : -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1

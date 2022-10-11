const pivotArray = function (nums, pivot) {
  const pivotIdx = nums.indexOf(pivot);
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[pivotIdx]) left.push(nums[i]);
    else if (nums[i] > nums[pivotIdx]) right.push(nums[i]);

    if (nums[i] === nums[pivotIdx] && i !== pivotIdx) right.unshift(nums[i]);
  }

  left.push(pivot);

  return left.concat(right);
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9,5,3,10,10,12,14]
console.log(pivotArray([-3, 4, 3, 2], 2)); // [-3,2,4,3]

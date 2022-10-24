const arrayPairSum = function (nums) {
  let maxSum = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i];
  }

  return maxSum;
};

console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9

const maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);

  const [num1, num2, num3] = nums;
  const maxNums = num1 * num2 * num3;

  // if all positive numbers or all negative numbers
  if (nums[0] < 0 || nums[nums.length - 1] >= 0) return maxNums;

  // if they have both
  return Math.max(maxNums, nums[0] * nums[nums.length - 2] * nums[nums.length - 1]);
};

console.log(maximumProduct([1, 2, 3])); // 6
console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([-1, -2, -3])); // -6

console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); // 39200

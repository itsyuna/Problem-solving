const minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i] + nums[right];
    sum = Math.max(sum, temp);
    right--;
  }

  return sum;
};

console.log(minPairSum([3, 5, 2, 3])); // 7
console.log(minPairSum([3, 5, 4, 2, 4, 6])); // 8

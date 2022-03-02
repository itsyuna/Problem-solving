const findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = nums[nums.length - 1]; i >= 0; i--) {
    if (nums[0] % i === 0 && nums[nums.length - 1] % i === 0) {
      return i;
    }
  }
  return 0;
};

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3

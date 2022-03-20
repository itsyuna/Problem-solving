function answer(nums) {
  let result = [];

  let findMinimumN = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === findMinimumN) result.push(i);
  }

  return result;
}

console.log(answer([5, 2, 10, 2])); // [1, 3]
console.log(answer([4, 5, 7, 4, 8])); // [0, 3]
console.log(answer([12, 11, 11, 16, 11, 12])); // [1, 2, 4]

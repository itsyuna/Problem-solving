// 1.
function answer(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

// 2.
/*
function answer(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }

  return [];
}
*/

console.log(answer([2, 7, 11, 15], 9)); // [0, 1]
console.log(answer([3, 2, 4], 6)); // [1, 2]
console.log(answer([3, 3], 6)); // [0, 1]

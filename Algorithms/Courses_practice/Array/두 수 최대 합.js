// 1.
function answer(nums) {
  let result = [];

  let ascendingOrder = nums.sort((a, b) => b - a);
  let i = 0;

  while (true) {
    if (result.length === 2) break;

    if (ascendingOrder[i] === ascendingOrder[i + 1]) i++;
    else {
      result.push(ascendingOrder[i], ascendingOrder[i + 1]);
    }
  }

  return result;
}

// 2.
/*
function answer(nums) {
  let result = [];

  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }

  return result;
}
*/

console.log(answer([-11, 5, 18, -2, 3, 6, 4, 17, 10, 9])); // [18, 17]
console.log(
  answer([3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19])
); // [19, 14]
console.log(
  answer([
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ])
); // [19, 15]

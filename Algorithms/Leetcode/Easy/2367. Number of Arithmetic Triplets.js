const arithmeticTriplets = function (nums, diff) {
  let count = 0;

  for (const num of nums) {
    if (nums.includes(num - diff) && nums.includes(num + diff)) count++;
  }

  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2

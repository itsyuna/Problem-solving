const singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  for (const num of nums) {
    if (!map.has(num)) map.set(num, 1);
    else map.set(num, map.get(num) - 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) return key;
  }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

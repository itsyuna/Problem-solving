const divideArray = function (nums) {
  const set = new Set(nums);
  if (set.size === nums.length) return false;

  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const value of map.values()) {
    if (value % 2 !== 0) return false;
  }

  return true;
};

console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false

console.log(divideArray([15, 13, 5, 20, 18, 2, 20, 8, 20, 17, 10, 19])); // false

const repeatedNTimes = function (nums) {
  const repeatedNums = nums.length / 2;

  const map = new Map();

  nums.forEach(num => {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  });
  
  for (const [key, value] of map.entries()) {
    if (value === repeatedNums) return key;
  }
};

console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5

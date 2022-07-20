const findDuplicates = function (nums) {
  const answer = [];
  if (nums.length === 1) return answer;

  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 2) answer.push(key);
  }

  return answer;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
console.log(findDuplicates([1, 1, 2])); // [1]
console.log(findDuplicates([1])); // []

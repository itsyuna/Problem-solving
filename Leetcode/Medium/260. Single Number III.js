const singleNumber = function (nums) {
  const answer = [];
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) answer.push(key);
  }

  return answer;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3,5]
console.log(singleNumber([-1, 0])); // [-1,0]
console.log(singleNumber([0, 1])); // [1,0]

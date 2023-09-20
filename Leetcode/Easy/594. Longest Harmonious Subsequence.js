const findLHS = function (nums) {
  let answer = 0;
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, count] of map.entries()) {
    const minusOneValue = map.get(num - 1);

    if (minusOneValue) answer = Math.max(count + minusOneValue, answer);
  }

  return answer;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0

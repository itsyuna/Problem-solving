const topKFrequent = function (nums, k) {
  if (nums.length === 1) return nums;
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const numList = [];
  const sortMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  for (const key of sortMap.keys()) {
    numList.push(key);
  }

  const answer = numList.splice(0, k);
  return answer;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]

const findRelativeRanks = function (score) {
  const answer = [];
  const descendingOrder = [...score].sort((a, b) => b - a);

  const map = new Map();

  descendingOrder.forEach((num, idx) => {
    if (idx === 0) map.set(num, 'Gold Medal');
    else if (idx === 1) map.set(num, 'Silver Medal');
    else if (idx === 2) map.set(num, 'Bronze Medal');
    else map.set(num, String(idx + 1));
  });

  for (const num of score) {
    answer.push(map.get(num));
  }

  return answer;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

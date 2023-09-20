const arrayRankTransform = function (arr) {
  const answer = [];
  const noDuplicationNums = new Set(arr);

  const ascendingOrder = [...noDuplicationNums].sort((a, b) => a - b);
  const rank = new Map();

  for (let i = 0; i < ascendingOrder.length; i++) {
    if (!rank.has(ascendingOrder[i])) rank.set(ascendingOrder[i], i + 1);
  }

  for (const num of arr) {
    answer.push(rank.get(num));
  }

  return answer;
};

console.log(arrayRankTransform([40, 10, 20, 30])); // [4,1,2,3]
console.log(arrayRankTransform([100, 100, 100])); // [1,1,1]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]

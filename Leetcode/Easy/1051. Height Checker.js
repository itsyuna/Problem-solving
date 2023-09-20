const heightChecker = function (heights) {
  let count = 0;
  const originHeights = [...heights];

  heights.sort((a, b) => a - b);

  for (let i = 0; i < originHeights.length; i++) {
    if (originHeights[i] !== heights[i]) count++;
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
console.log(heightChecker([5, 1, 2, 3, 4])); // 5
console.log(heightChecker([1, 2, 3, 4, 5])); // 0

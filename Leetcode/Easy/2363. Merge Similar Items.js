const mergeSimilarItems = function (items1, items2) {
  const answer = [];
  const map = new Map();

  for (const item of items1) {
    map.set(item[0], item[1]);
  }

  for (const item of items2) {
    map.set(item[0], map.get(item[0]) + item[1] || item[1]);
  }

  for (const [key, value] of map) {
    answer.push([key, value]);
  }

  return answer.sort((a, b) => a[0] - b[0]);
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
); // [[1,6],[3,9],[4,5]]
console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [3, 2],
      [2, 3],
    ],
    [
      [2, 1],
      [3, 2],
      [1, 3],
    ]
  )
); // [[1,4],[2,4],[3,4]]
console.log(
  mergeSimilarItems(
    [
      [1, 3],
      [2, 2],
    ],
    [
      [7, 1],
      [2, 2],
      [1, 4],
    ]
  )
); // [[1,7],[2,4],[7,1]]

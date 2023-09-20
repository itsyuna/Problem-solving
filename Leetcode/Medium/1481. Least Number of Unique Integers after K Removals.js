const findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sortMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

  const countNums = [...sortMap.values()];

  let countRemovalNums = k;
  for (let i = 0; i < countNums.length; i++) {
    countRemovalNums -= countNums[i];

    if (countRemovalNums < 0) return countNums.slice(i).length;
  }

  return 0;
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1)); // 1
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)); // 2

console.log(findLeastNumOfUniqueInts([2, 1, 1, 3, 3, 3], 3)); // 1

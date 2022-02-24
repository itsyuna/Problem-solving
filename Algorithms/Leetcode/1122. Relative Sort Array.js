const relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!map.has(arr1[i])) map.set(arr1[i], 1);
    else map.set(arr1[i], map.get(arr1[i]) + 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map.has(arr2[i])) {
      for (let j = 0; j < map.get(arr2[i]); j++) {
        answer.push(arr2[i]);
      }
    }
  }
  const diff = arr1.filter(elem => arr2.indexOf(elem) === -1).sort((a, b) => a - b);

  return answer.concat(diff);
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); // [22,28,8,6,17,44]

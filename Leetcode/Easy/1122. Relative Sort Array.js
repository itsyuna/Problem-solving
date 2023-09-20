const relativeSortArray = function (arr1, arr2) {
  let answer = [];
  const exclusiveNum = [];

  for (const num of arr2) {
    answer = answer.concat(arr1.filter(n => n === num));
  }

  for (const num of arr1) {
    if (!arr2.includes(num)) exclusiveNum.push(num);
  }

  exclusiveNum.sort((a, b) => a - b);

  return answer.concat(exclusiveNum);
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); // [22,28,8,6,17,44]

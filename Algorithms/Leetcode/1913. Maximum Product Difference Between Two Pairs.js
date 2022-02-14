const maxProductDifference = function (nums) {
  let answer = 0;

  const sortNums = nums.sort((a, b) => b - a);
  const left = sortNums[0] * sortNums[1];
  const right = sortNums[sortNums.length - 1] * sortNums[sortNums.length - 2];

  answer = left - right;
  return answer;
};

console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // 64

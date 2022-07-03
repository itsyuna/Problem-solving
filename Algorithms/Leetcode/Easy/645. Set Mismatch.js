const findErrorNums = function (nums) {
  let answer = [];
  const duplicatedNum = nums.filter((n, idx) => nums.indexOf(n) !== idx);
  let missingNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) missingNum = i + 1;
  }

  answer = [...duplicatedNum, missingNum];
  return answer;
};

console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
console.log(findErrorNums([1, 1])); // [1,2]

console.log(findErrorNums([2, 2])); // [2,1]

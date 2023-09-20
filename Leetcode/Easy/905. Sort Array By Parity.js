const sortArrayByParity = function (nums) {
  const answer = [];
  if (nums.length === 1) return nums;

  for (const num of nums) {
    if (num % 2 === 0) answer.unshift(num);
    else answer.push(num);
  }

  return answer;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
console.log(sortArrayByParity([0])); // [0]

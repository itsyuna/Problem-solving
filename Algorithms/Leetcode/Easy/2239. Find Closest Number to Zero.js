const findClosestNumber = function (nums) {
  let answer = Infinity;

  for (const num of nums) {
    if (Math.abs(num) < Math.abs(answer)) answer = num;
    else if (Math.abs(num) === Math.abs(answer)) answer = Math.max(num, answer);
  }

  return answer;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8])); // 1
console.log(findClosestNumber([2, -1, 1])); // 1

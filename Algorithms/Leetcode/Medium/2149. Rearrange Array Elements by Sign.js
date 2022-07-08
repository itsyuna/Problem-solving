const rearrangeArray = function (nums) {
  const answer = [];

  const pickPositiveInt = nums.filter(num => num > 0);
  const pickNegativeInt = nums.filter(num => num < 0);

  for (let i = 0; i < pickPositiveInt.length; i++) {
    answer.push(pickPositiveInt[i]);
    answer.push(pickNegativeInt[i]);
  }

  return answer;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
console.log(rearrangeArray([-1, 1])); // [1,-1]

// 126ms
const buildArray = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(nums[nums[i]]);
  }
  return answer;
};

// 더 빠른 버젼 72ms
/*
var buildArray = function (nums) {
  return nums.map(a => nums[a]);
};
*/

console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // [4,5,0,1,2,3]

// 1.
const createTargetArray = function (nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = index[i];
    target.splice(idx, 0, nums[i]);
  }

  return target;
};

// 2.
/*
var createTargetArray = function (nums, index) {
  const answer = [];

  for (const i in nums) {
    answer.splice(index[i], 0, nums[i]);
  }
  return answer;
};
*/

// 3.
/*
var createTargetArray = (nums, index) =>
  index.reduce((target, val, i) => {
    target.splice(val, 0, nums[i]);
    return target;
  }, []);
*/

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])); // [0,1,2,3,4]
console.log(createTargetArray([1], [0])); // [1]

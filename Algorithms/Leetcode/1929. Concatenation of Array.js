// 147ms
const getConcatenation = function (nums) {
  const num = [...nums];

  nums.push(num);
  return nums.flat();
};

// 68ms
/*
var getConcatenation = function (nums) {
  return nums.concat(nums);
};
*/

console.log(getConcatenation([1, 2, 1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]

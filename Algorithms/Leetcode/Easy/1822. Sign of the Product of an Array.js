const arraySign = function (nums) {
  if (nums.includes(0)) return 0;

  const sum = nums.reduce((prev, cur) => prev * cur);
  return sum > 0 ? 1 : -1;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1

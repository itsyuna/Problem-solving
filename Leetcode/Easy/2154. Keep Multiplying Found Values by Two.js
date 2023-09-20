const findFinalValue = function (nums, original) {
  let findNum = original;

  while (nums.includes(findNum)) {
    findNum *= 2;
  }

  return findNum;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3)); // 24
console.log(findFinalValue([2, 7, 9], 4)); // 4

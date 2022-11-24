const arrayChange = function (nums, operations) {
  for (const operation of operations) {
    const findIdx = nums.indexOf(operation[0]);

    nums.splice(findIdx, 1, operation[1]);
  }

  return nums;
};

console.log(
  arrayChange(
    [1, 2, 4, 6],
    [
      [1, 3],
      [4, 7],
      [6, 1],
    ]
  )
); // [3,2,7,1]
console.log(
  arrayChange(
    [1, 2],
    [
      [1, 3],
      [2, 1],
      [3, 2],
    ]
  )
); // [2,1]

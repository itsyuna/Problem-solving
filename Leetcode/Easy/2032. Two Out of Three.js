const twoOutOfThree = function (nums1, nums2, nums3) {
  const newNums1 = new Set(nums1);
  const newNums2 = new Set(nums2);
  const newNums3 = new Set(nums3);

  const temp = [];
  for (const num1 of newNums1) {
    if (newNums2.has(num1)) {
      temp.push(num1);
    }

    if (newNums3.has(num1)) {
      temp.push(num1);
    }
  }

  for (const num2 of newNums2) {
    if (newNums3.has(num2)) {
      temp.push(num2);
    }
  }

  const set = new Set(temp);

  return [...set];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3,2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2,3,1]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // []

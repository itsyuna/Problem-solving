const twoSum = function (nums, target) {
  const map = new Map();

  nums.forEach((num, idx) => {
    map.set(num, idx);
  });

  for (let i = 0; i < nums.length; i++) {
    const findNum = target - nums[i];
    const findIdx = map.get(findNum);

    if (i !== findIdx && findIdx !== undefined) return [i, findIdx];
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]

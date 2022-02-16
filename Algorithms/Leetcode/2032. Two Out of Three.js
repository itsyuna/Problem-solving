const twoOutOfThree = function (nums1, nums2, nums3) {
  const res = [];

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);

  for (const s1 of set1) {
    if (set2.has(s1)) {
      res.push(s1);
    }
  }

  for (const s2 of set2) {
    if (set3.has(s2)) {
      res.push(s2);
    }
  }

  for (const s1 of set1) {
    if (set3.has(s1)) {
      res.push(s1);
    }
  }
  return [...new Set(res)];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3,2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2,3,1]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // []
